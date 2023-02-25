using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Net.WebSockets;
using System.Text;

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

        private static async Task Echo(WebSocket webSocket)
        {
            var counter = 0;
            while (!webSocket.CloseStatus.HasValue || webSocket.CloseStatus.Value == WebSocketCloseStatus.Empty)
            {
                counter++;
                var bytes = Encoding.Default.GetBytes("Sending some messages: " + counter);
                var arraySegment = new ArraySegment<byte>(bytes);
                await webSocket.SendAsync(arraySegment, WebSocketMessageType.Text, true, CancellationToken.None);
                await Task.Delay(10000);
            }
        }
    }
}