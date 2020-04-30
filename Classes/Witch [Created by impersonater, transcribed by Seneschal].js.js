var iFileName = "Witch [Created by impersonater, transcribed by Seneschal].js"
RequiredSheetVersion(13);

SourceList["I:W"] = {
    name : "/u/impersonater: The Witch",
    abbreviation : ["I:W"],
    group : "Reddit/r/UnearthedArcana",
    url : "https://drive.google.com/file/d/0B_fO9drMhlUeZXFTemRjTTk5aHc/view",
    date : "2020/02/03"
};

ClassList["witch"] = {
    regExpSearch : /witch/i,
    name : "Witch",
    source : ["I:W", 1],
    primaryAbility : "Either Intelligence, Charisma, or Wisdom",
    abilitySave : 4,
    prereqs : "Intelligence 13, Wisdom 13 or Charisma 13",
    die : 6,
    improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    saves : []
}