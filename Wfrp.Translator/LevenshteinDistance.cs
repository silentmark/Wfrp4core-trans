using Newtonsoft.Json.Linq;
using System;
using System.IO;
using System.Linq;
using System.Text;

internal static class LevenshteinDistance
{
    public static int Compute(string s, string t)
    {
        if (string.IsNullOrEmpty(s))
        {
            if (string.IsNullOrEmpty(t))
                return 0;
            return t.Length;
        }

        if (string.IsNullOrEmpty(t))
        {
            return s.Length;
        }

        int n = s.Length;
        int m = t.Length;
        int[,] d = new int[n + 1, m + 1];

        // initialize the top and right of the table to 0, 1, 2, ...
        for (int i = 0; i <= n; d[i, 0] = i++) ;
        for (int j = 1; j <= m; d[0, j] = j++) ;

        for (int i = 1; i <= n; i++)
        {
            for (int j = 1; j <= m; j++)
            {
                int cost = (t[j - 1] == s[i - 1]) ? 0 : 1;
                int min1 = d[i - 1, j] + 1;
                int min2 = d[i, j - 1] + 1;
                int min3 = d[i - 1, j - 1] + cost;
                d[i, j] = Math.Min(Math.Min(min1, min2), min3);
            }
        }
        return d[n, m];
    }

    public static void CheckDistance()
    {
        var originalBabele = JObject.Parse(File.ReadAllText(Config.BabeleLocationEn + "\\wfrp4e-core.careers.json"));
        var polishBabele = JObject.Parse(File.ReadAllText(Config.BabeleLocationPl + "\\wfrp4e-core.careers.json"));

        var originalTrappings = ((JObject)JObject.Parse(File.ReadAllText(Config.BabeleLocationEn + "\\wfrp4e-core.trappings.json"))["entries"]).Properties().Select(x => x.First["name"].ToString()).ToList();
        var polishTrappings = ((JObject)JObject.Parse(File.ReadAllText(Config.BabeleLocationPl + "\\wfrp4e-core.trappings.json"))["entries"]).Properties().Select(x => x.First["name"].ToString()).ToList();

        var originalTalents = ((JObject)JObject.Parse(File.ReadAllText(Config.BabeleLocationEn + "\\wfrp4e-core.talents.json"))["entries"]).Properties().Select(x => x.First["name"].ToString()).ToList();
        var polishTalents = ((JObject)JObject.Parse(File.ReadAllText(Config.BabeleLocationPl + "\\wfrp4e-core.talents.json"))["entries"]).Properties().Select(x => x.First["name"].ToString()).ToList();

        var originalSkills = ((JObject)JObject.Parse(File.ReadAllText(Config.BabeleLocationEn + "\\wfrp4e-core.skills.json"))["entries"]).Properties().Select(x => x.First["name"].ToString()).ToList();
        var polishSkills = ((JObject)(JObject.Parse(File.ReadAllText(Config.BabeleLocationPl + "\\wfrp4e-core.skills.json")))["entries"]).Properties().Select(x => x.First["name"].ToString()).ToList();

        //   var polishSkillList = polishSkills["entries"]
        var results = new StringBuilder();
        results.AppendLine("Profesja,typ;nazwa w careers.json,najbliższa nazwa w kompendium");
        foreach (JProperty item in ((JObject)polishBabele["entries"]).Properties())
        {
            var obj = item.First;
            var name = obj.Value<string>("name");
            var talents = obj["talents"].ToArray().Select(x => x.ToString()).ToList();
            var skills = obj["skills"].ToArray().Select(x => x.ToString()).ToList();
            var trappings = obj["trappings"].ToArray().Select(x => x.ToString()).ToList();
            var maxDiff = 5;
            foreach (var skill in skills)
            {
                if (polishSkills.All(x => x != skill))
                {
                    var closest = polishSkills.GroupBy(x => LevenshteinDistance.Compute(skill, x)).OrderBy(x => x.Key).First();
                    if (closest.Key <= maxDiff)
                    {
                        results.AppendLine($"{name},skill,{skill},{string.Join(';', closest.ToList())}");
                    }
                    else
                    {
                        results.AppendLine($"{name},skill,{skill},BRAK");
                    }
                }
            }
            foreach (var talent in talents)
            {
                if (polishTalents.All(x => x != talent))
                {
                    var closest = polishTalents.GroupBy(x => LevenshteinDistance.Compute(talent, x)).OrderBy(x => x.Key).First();
                    if (closest.Key <= maxDiff)
                    {
                        results.AppendLine($"{name},talent,{talent},{string.Join(';', closest.ToList())}");
                    }
                    else
                    {
                        results.AppendLine($"{name},talent,{talent},BRAK");
                    }
                }
            }

            foreach (var trapping in trappings)
            {
                if (polishTrappings.All(x => x != trapping))
                {
                    var closest = polishTrappings.GroupBy(x => LevenshteinDistance.Compute(trapping, x)).OrderBy(x => x.Key).First();
                    if (closest.Key <= maxDiff)
                    {
                        results.AppendLine($"{name},trapping,{trapping},{string.Join(';', closest.ToList())}");
                    }
                    else
                    {
                        results.AppendLine($"{name},trapping,{trapping},BRAK");
                    }
                }
            }
        }
        using var stream = new MemoryStream();
        using var sw = new StreamWriter(stream, Encoding.UTF8);
        sw.Write(results.ToString());
        sw.Flush();
        var data = Encoding.UTF8.GetPreamble().Concat(stream.ToArray()).ToArray();
        File.WriteAllBytes(Config.BabeleLocationPl + "\\diff.csv", data);
    }
}