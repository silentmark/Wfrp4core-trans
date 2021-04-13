using System;
using System.Collections.Generic;
using System.Linq;
using org.pdfclown.documents.contents;
using org.pdfclown.documents.contents.objects;
using org.pdfclown.files;
using WFRP4e.Translator.Json;

namespace WFRP4e.Translator.Scanners
{
    public class SkillsScanner
    {
        private string currentSkill = "";
        private string currentDescription = "";

        public virtual int StartPage => 118;

        public virtual int EndPage => 132;

        public virtual List<Entry> Run(string filePath)
        {
            using var file = new File(filePath);
            var document = file.Document;
            var entries = new List<Entry>();
            for (var i = StartPage; i < EndPage; i++)
            {
                var page = document.Pages[i];
                Console.WriteLine("Skanuję stronę: " + page.Number + "...\n");
                Extract(new ContentScanner(page), entries);
            }

            if (entries.Last().Name != currentSkill)
            {
                entries.Add(new Entry {Name = currentSkill, Description = currentDescription});
            }

            return entries;
        }

        private void Extract(ContentScanner level, List<Entry> entries)
        {
            if (level != null)
            {
                while (level.MoveNext())
                {
                    var content = level.Current;
                    if (content is Text textContent)
                    {
                        var i = 0;
                        var text = (ContentScanner.TextWrapper)level.CurrentWrapper;

                        if (text.TextStrings.Count > 5)
                        {
                            if (text.TextStrings[0].Style.FontSize == 12
                                && (text.TextStrings[2].Text.StartsWith("(") ||
                                    text.TextStrings[1].Text.StartsWith(" (") ||
                                    text.TextStrings[i + 1].Text.StartsWith("(")))
                            {
                                if (currentSkill != "")
                                {
                                    entries.Add(new Entry {Name = currentSkill, Description = currentDescription});
                                }

                                currentSkill = text.TextStrings[0].Text;
                                currentDescription = "";
                                for (; i < text.TextStrings.Count; i++)
                                {
                                    if (text.TextStrings[i].Style.Font.Name.EndsWith("Italic"))
                                    {
                                        i++;
                                        break;
                                    }
                                }
                            }
                        }

                        if (!string.IsNullOrEmpty(currentSkill))
                        {
                            for (; i < text.TextStrings.Count; i++)
                            {
                                if (text.TextStrings.Count > i + 5)
                                {
                                    if (text.TextStrings[i].Style.FontSize == 12
                                        && (text.TextStrings[i + 2].Text.StartsWith("(") ||
                                            text.TextStrings[i + 1].Text.StartsWith(" (") ||
                                            text.TextStrings[i + 1].Text.StartsWith("(")))
                                    {
                                        if (currentSkill != "")
                                        {
                                            entries.Add(new Entry { Name = currentSkill, Description = currentDescription });
                                        }

                                        currentSkill = text.TextStrings[i].Text;
                                        currentDescription = "";
                                        for (; i < text.TextStrings.Count; i++)
                                        {
                                            if (text.TextStrings[i].Style.Font.Name.EndsWith("Italic"))
                                            {
                                                i++;
                                                break;
                                            }
                                        }
                                    }
                                }

                                var textString = text.TextStrings[i];

                                if (textString.Text == "-" || Math.Abs(textString.Style.FontSize - 9) > 0.1)
                                {
                                    continue;
                                }

                                if (textString.Style.Font.Name.EndsWith("Italic"))
                                {
                                    currentDescription += "<i>" + textString.Text + "</i>";
                                }
                                else if (textString.Style.Font.Name.EndsWith("Bold"))
                                {
                                    currentDescription += "<b>" + textString.Text + "</b>";
                                }
                                else if (textString.BaseDataObject.Operator.Equals("TJ") && i > 0 &&
                                         text.TextStrings[i - 1].Text.EndsWith("."))
                                {
                                    currentDescription += "<br/>" + textString.Text;
                                }
                                else
                                {
                                    currentDescription += textString.Text;
                                }
                            }
                        }
                    }
                    else if (content is XObject)
                    {
                        Extract(((XObject)content).GetScanner(level), entries);
                    }
                    else if (content is ContainerObject)
                    {
                        Extract(level.ChildLevel, entries);
                    }
                    else
                    {
                        var contentType = content.GetType();
                        var wrapper = level.CurrentWrapper;
                        if (wrapper != null)
                        {
                            var wrapperType = wrapper.GetType();
                        }
                    }
                }
            }
        }
    }
}