﻿using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace WFRP4e.Translator.Utilities
{
    internal class Config
    {
        public static IConfigurationRoot Configuration;

        public static string PacksPath { get => GetSection(); }
        public static string SourceJsonsEn { get => GetSection(); }
        public static string SourceJsonsPl { get => GetSection(); }
        public static string GoogleSigninKeyPath { get => GetSection(); }
        public static string DeepLAuthKey { get => GetSection(); }
        public static string OpenAiKey { get => GetSection(); }
        public static string BabeleLocationPl { get => GetSection(); }
        public static string BabeleLocationEn { get => GetSection(); }
        public static string SystemLocation { get => GetSection(); }

        private static string GetSection([CallerMemberName] string name = "")
        {
            return Configuration.GetSection(name).Value;
        }
    }
}