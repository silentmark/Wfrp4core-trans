using System;
using System.Collections.Generic;

namespace WFRP4e.Translator.Json.Entries
{
    public class ItemEntry : BaseEntry
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
                        ((TalentEntry)newSubEntry).Tests = talent.Tests;
                        ((TalentEntry)newSubEntry).Specification = talent.Specification;
                        break;
                    }
                case DiseaseEntry disease:
                    {
                        ((DiseaseEntry)newSubEntry).Contraction = disease.Contraction;
                        ((DiseaseEntry)newSubEntry).Incubation = disease.Incubation;
                        ((DiseaseEntry)newSubEntry).IncubationUnit = disease.IncubationUnit;
                        ((DiseaseEntry)newSubEntry).Symptoms = disease.Symptoms;
                        ((DiseaseEntry)newSubEntry).Duration = disease.Duration;
                        ((DiseaseEntry)newSubEntry).DurationUnit = disease.DurationUnit;
                        break;
                    }
                case CareerEntry career:
                    {
                        ((CareerEntry)newSubEntry).Trappings = career.Trappings;
                        ((CareerEntry)newSubEntry).Talents = career.Talents;
                        ((CareerEntry)newSubEntry).Skills = career.Skills;
                        ((CareerEntry)newSubEntry).Class = career.Class;
                        ((CareerEntry)newSubEntry).CareerGroup = career.CareerGroup;
                        break;
                    }
                case InjuryEntry injury:
                    {
                        ((InjuryEntry)newSubEntry).Penalty = injury.Penalty;
                        ((InjuryEntry)newSubEntry).Location = injury.Location;
                        break;
                    }
                case CriticalEntry injury:
                    {
                        ((CriticalEntry)newSubEntry).Location = injury.Location;
                        ((CriticalEntry)newSubEntry).Wounds = injury.Wounds;
                        break;
                    }
                case SpellEntry spell:
                    {
                        ((SpellEntry)newSubEntry).Range = spell.Range;
                        ((SpellEntry)newSubEntry).Target = spell.Target;
                        ((SpellEntry)newSubEntry).Duration = spell.Duration;
                        break;
                    }
                case PrayerEntry prayer:
                    {
                        ((PrayerEntry)newSubEntry).Range = prayer.Range;
                        ((PrayerEntry)newSubEntry).Target = prayer.Target;
                        ((PrayerEntry)newSubEntry).Duration = prayer.Duration;
                        break;
                    }
            }
        }
    }
}