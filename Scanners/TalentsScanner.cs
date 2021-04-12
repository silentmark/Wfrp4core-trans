using System;
using System.Collections.Generic;
using System.Linq;
using org.pdfclown.documents.contents;
using org.pdfclown.documents.contents.objects;
using org.pdfclown.files;
using Pdf.Json;

namespace Pdf.Logic
{
    public class TalentsScanner
    {
        private string currentTalent = "";
        private string currentDescription = "";
        private string test = "";
        private bool talentsStarted = false;

        public virtual int StartPage => 132;

        public virtual int EndPage => 148;

        public virtual List<TalentEntry> Run(string filePath)
        {
            using var file = new File(filePath);
            var document = file.Document;
            var entries = new List<TalentEntry>();
            for (var i = StartPage; i < EndPage; i++)
            {
                var page = document.Pages[i];
                Console.WriteLine("Skanuję stronę: " + page.Number + "...\n");
                Extract(new ContentScanner(page), entries);
            }

            if (entries.Last().Name != currentTalent)
            {
                entries.Add(new TalentEntry { Name = currentTalent, Description = currentDescription, Tests = test});
            }

            return entries;
        }

        private void Extract(ContentScanner level, List<TalentEntry> entries)
        {
            if (level != null)
            {
                while (level.MoveNext())
                {
                    var content = level.Current;
                    if (content is Text)
                    {
                        var i = 0;
                        var text = (ContentScanner.TextWrapper)level.CurrentWrapper;

                        if (Math.Abs(text.TextStrings[0].Style.FontSize - 18) < 0.1 && text.ToString() == "lista talentów")
                        {
                            talentsStarted = true;
                            continue;
                        }

                        if (talentsStarted)
                        {
                            for (; i < text.TextStrings.Count; i++)
                            {
                                if (Math.Abs(text.TextStrings[i].Style.FontSize - 11) < 0.1)
                                {
                                    if (currentTalent != "")
                                    {
                                        entries.Add(new TalentEntry
                                            {Name = currentTalent, Description = currentDescription, Tests = test});
                                    }

                                    currentTalent = text.TextStrings[i].Text;
                                    currentDescription = "";
                                    test = "";

                                    i += 2; //Maximum;
                                    if (text.TextStrings[i + 1].Text.StartsWith("Testy"))
                                    {
                                        test = text.TextStrings[i + 2].Text.TrimStart(':').TrimStart();
                                        i += 2;
                                    }
                                    continue;
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