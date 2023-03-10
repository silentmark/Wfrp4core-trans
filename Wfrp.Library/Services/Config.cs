using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace Wfrp.Library.Services
{
    public class Config
    {
        public static IConfigurationRoot Configuration;

        public static string PacksPath { get => GetSection(); }
        public static string TranslationsPath { get => GetSection(); }
        public static string SourceJsonsEn { get => GetSection(); }
        public static string SourceJsonsPl { get => GetSection(); }

        private static string GetSection([CallerMemberName] string name = "")
        {
#pragma warning disable CS8603 // Possible null reference return.
            return Configuration.GetSection(name).Value;
#pragma warning restore CS8603 // Possible null reference return.
        }
    }
}