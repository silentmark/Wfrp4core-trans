using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Net.WebSockets;
using System.Text;
using Wfrp.Library.Services;
using WFRP4e.Translator.Json;

namespace Wfrp.Service.Controllers
{
    [Route("api")]
    public class WebSocketController : ControllerBase
    {
        [Authorize(Policy = "Contributor")]
        [Route("ws")]
        public async Task Get()
        {
            if (HttpContext.WebSockets.IsWebSocketRequest)
            {
                using var webSocket = await HttpContext.WebSockets.AcceptWebSocketAsync();
                var socketFinishedTcs = new TaskCompletionSource<object>();

                await Echo(webSocket);

                await socketFinishedTcs.Task;
            }
            else
            {
                HttpContext.Response.StatusCode = StatusCodes.Status400BadRequest;
            }
        }

        private async Task Echo(WebSocket webSocket)
        {
            var action = (object? sender, GenericEventArgs<string> arg) =>
            {
                if (webSocket.State == WebSocketState.Open)
                {
                    SendText(webSocket, arg.EventData).Wait();
                }
            };
            try
            {
                PackageUpdater.ProgressUpdated += action.Invoke;
                await SendText(webSocket, $"Ogarniam mapowanie");
                PackageUpdater.InitAllMappings(Config.SourceJsonsEn, Mappings.OriginalTypeToMappingDictonary);
                PackageUpdater.InitAllMappings(Config.SourceJsonsPl, Mappings.TranslatedTypeToMappingDictonary);

                await SendText(webSocket, $"Generuję json dla oryginałów");
                PackageUpdater.ExtractJsonsToFilesAndCorrectIds(Config.PacksPath);
                await SendText(webSocket, $"Generuję json dla tłumaczeń");
                PackageUpdater.ExtractJsonsToFilesAndCorrectIds(Config.TranslationsPath);
                await SendText(webSocket, $"Aktualizuję pliki .db");
                PackageUpdater.TransformPackagesBasedOnTranslationFile(Config.PacksPath, Config.TranslationsPath);
                await SendText(webSocket, $"Przygotowuję paczkę .zip");
                await SendText(webSocket, $"Gotowe");
            }
            catch (Exception ex)
            {
                await SendText(webSocket, $"Wystąpił błąd: {ex}");
            }
            finally
            {
                PackageUpdater.ProgressUpdated -= action.Invoke;
                await webSocket.CloseAsync(WebSocketCloseStatus.NormalClosure, "Gotowe", CancellationToken.None);
            }
        }

        private async Task SendText(WebSocket webSocket, string message)
        {
            var bytes = Encoding.Default.GetBytes(message);
            var arraySegment = new ArraySegment<byte>(bytes);
            await webSocket.SendAsync(arraySegment, WebSocketMessageType.Text, true, CancellationToken.None);
        }
    }
}