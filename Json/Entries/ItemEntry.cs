using org.pdfclown.documents.contents.layers;
using System;
using System.Collections.Generic;

namespace WFRP4e.Translator.Json.Entries
{
    public class ItemEntry : Entry
    {
        public List<EffectEntry> Effects { get; set; } = new List<EffectEntry>();

        internal static void CloneItem(ItemEntry compendiumObject, ItemEntry newSubEntry)
        {
            newSubEntry.Effects = compendiumObject.Effects;
            newSubEntry.OriginFoundryId = compendiumObject.OriginFoundryId;
            if (!string.IsNullOrEmpty(compendiumObject.Name) && !compendiumObject.Name.Contains("("))
            {
                newSubEntry.Name = compendiumObject.Name;
            }
            newSubEntry.Description = compendiumObject.Description;
            switch (compendiumObject)
            {
                case TalentEntry talent:
                    {
                        (newSubEntry as TalentEntry).Tests = talent.Tests;
                        break;
                    }
                case DiseaseEntry disease:
                    {
                        (newSubEntry as DiseaseEntry).Contraction = disease.Contraction;
                        (newSubEntry as DiseaseEntry).Incubation = disease.Incubation;
                        (newSubEntry as DiseaseEntry).IncubationUnit = disease.IncubationUnit;
                        (newSubEntry as DiseaseEntry).Symptoms = disease.Symptoms;
                        (newSubEntry as DiseaseEntry).Duration = disease.Duration;
                        (newSubEntry as DiseaseEntry).DurationUnit = disease.DurationUnit;
                        break;
                    }
                case CareerEntry career:
                    {
                        (newSubEntry as CareerEntry).Trappings = career.Trappings;
                        (newSubEntry as CareerEntry).Talents = career.Talents;
                        (newSubEntry as CareerEntry).Skills = career.Skills;
                        (newSubEntry as CareerEntry).Class = career.Class;
                        (newSubEntry as CareerEntry).CarrerGroup = career.CarrerGroup;
                        break;
                    }
                case InjuryEntry injury:
                    {
                        (newSubEntry as InjuryEntry).Penalty = injury.Penalty;
                        break;
                    }
                case SpellEntry spell:
                    {
                        (newSubEntry as SpellEntry).Range = spell.Range;
                        (newSubEntry as SpellEntry).Target = spell.Target;
                        (newSubEntry as SpellEntry).Duration = spell.Duration;
                        (newSubEntry as SpellEntry).Wind = spell.Wind;
                        (newSubEntry as SpellEntry).Lore = spell.Lore;
                        break;
                    }
                case PrayerEntry prayer:
                    {
                        (newSubEntry as PrayerEntry).Range = prayer.Range;
                        (newSubEntry as PrayerEntry).Target = prayer.Target;
                        (newSubEntry as PrayerEntry).Duration = prayer.Duration;
                        break;
                    }
            }
        }
    }
}