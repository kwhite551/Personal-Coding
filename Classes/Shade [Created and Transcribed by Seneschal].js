var iFileName = "The Shade [Created and Transcribed by Seneschal].js";
RequiredSheetVersion(13);

SourceList["S:TS"] = {
    name : "Seneschal: The Shade",
    abbreviation : "S:TS",
    group : "Friendly Bunch Homebrew",
    date : "2020/3/11"
};

ClassList["shade"] = {
    name : "Shade",
    regExpSearch : /shade/i,
    souce : ["S:TS", 0],
    primaryAbility : "Strength and Intelligence",
    prereqs : "",
    die : 10,
    improvements :  [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    saves : ["Dex", "Int"],
    abilitySave : 4,
}