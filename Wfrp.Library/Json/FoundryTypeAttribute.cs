﻿using System;

namespace WFRP4e.Translator.Json
{
    [AttributeUsage(AttributeTargets.Class, AllowMultiple = true)]
    public class FoundryTypeAttribute : Attribute
    {
        public string Type { get; }

        public FoundryTypeAttribute(string type)
        {
            Type = type;
        }
    }
}
