﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WFRP4e.Translator.Json
{
    public static class Mappings
    {
        public static Dictionary<string, Entry> Bestiary = new Dictionary<string, Entry>();
        public static Dictionary<string, Entry> EnemyInShadowsActors = new Dictionary<string, Entry>();
        public static Dictionary<string, Entry> Careers = new Dictionary<string, Entry>();
        public static Dictionary<string, Entry> Criticals = new Dictionary<string, Entry>();
        public static Dictionary<string, Entry> Diseases = new Dictionary<string, Entry>();
        public static Dictionary<string, Entry> Injuries = new Dictionary<string, Entry>();
        public static Dictionary<string, Entry> Mutations = new Dictionary<string, Entry>();
        public static Dictionary<string, Entry> Prayers = new Dictionary<string, Entry>();
        public static Dictionary<string, Entry> Psychologies = new Dictionary<string, Entry>();
        public static Dictionary<string, Entry> Skills = new Dictionary<string, Entry>();
        public static Dictionary<string, Entry> Spells = new Dictionary<string, Entry>();
        public static Dictionary<string, Entry> Talents = new Dictionary<string, Entry>();
        public static Dictionary<string, Entry> Traits = new Dictionary<string, Entry>();
        public static Dictionary<string, Entry> Trappings = new Dictionary<string, Entry>();

        public static Dictionary<String, List<Dictionary<string, Entry>>> TypeToMappingDictonary { get; } = new Dictionary<string, List<Dictionary<string, Entry>>>();

        public static void Init()
        {
            TypeToMappingDictonary["creature"] = new List<Dictionary<string, Entry>> { Bestiary, EnemyInShadowsActors };
            TypeToMappingDictonary["npc"] = new List<Dictionary<string, Entry>> { Bestiary, EnemyInShadowsActors };
            TypeToMappingDictonary["character"] = new List<Dictionary<string, Entry>> { Bestiary, EnemyInShadowsActors };
            TypeToMappingDictonary["career"] = new List<Dictionary<string, Entry>> { Careers };
            TypeToMappingDictonary["critical"] = new List<Dictionary<string, Entry>> { Criticals };
            TypeToMappingDictonary["disease"] = new List<Dictionary<string, Entry>> { Diseases };
            TypeToMappingDictonary["injury"] = new List<Dictionary<string, Entry>> { Injuries };
            TypeToMappingDictonary["mutation"] = new List<Dictionary<string, Entry>> { Mutations };
            TypeToMappingDictonary["prayer"] = new List<Dictionary<string, Entry>> { Prayers };
            TypeToMappingDictonary["psychology"] = new List<Dictionary<string, Entry>> { Psychologies };
            TypeToMappingDictonary["skill"] = new List<Dictionary<string, Entry>> { Skills };
            TypeToMappingDictonary["spell"] = new List<Dictionary<string, Entry>> { Spells };
            TypeToMappingDictonary["talent"] = new List<Dictionary<string, Entry>> { Talents };
            TypeToMappingDictonary["trait"] = new List<Dictionary<string, Entry>> { Traits };
            TypeToMappingDictonary["trapping"] = new List<Dictionary<string, Entry>> { Trappings };
        }
    }
}