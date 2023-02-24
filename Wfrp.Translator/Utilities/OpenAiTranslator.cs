using OpenAI.GPT3.Managers;
using OpenAI.GPT3;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OpenAI.GPT3.Interfaces;
using static Google.Rpc.Context.AttributeContext.Types;
using OpenAI.GPT3.ObjectModels;

namespace WFRP4e.Translator.Utilities
{
    public class OpenAiTranslator : GenericTranslator
    {
        private static OpenAIService _openAiService;

        public static OpenAIService OpenAiService
        {
            get
            {
                if (_openAiService == null)
                {
                    _openAiService = new OpenAIService(new OpenAiOptions
                    {
                        ApiKey = Config.OpenAiKey
                    });
                }
                return _openAiService;
            }
        }

        public static string Translate(string entry)
        {
            try
            {
                var task = OpenAiService.CreateCompletion(new OpenAI.GPT3.ObjectModels.RequestModels.CompletionCreateRequest
                {
                    Model = Models.TextDavinciV3,
                    Prompt = $"Translate this html content about Warhammer Roleplaying Game into Polish:\n\n{entry}\n\n.",
                    MaxTokens = 2048,
                    Temperature = (float)0.7
                });
                var result = task.Result;
                return result.Choices[0].Text;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return entry;
            }
        }
    }
}