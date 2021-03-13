var iFileName = "Inventor [Created by KibblesTasty, Transcribed by Seneschal].js";
RequiredSheetVersion(13);

SourceList["KT:I"] = {
    name : "KibblesTasty: Inventor",
    abbreviation : "KT:I",
    group : "Reddit/r/UnearthedArcana",
    url : "https://www.gmbinder.com/share/-LAEn6ZdC6lYUKhQ67Qk",
    date : "2021/02/07",
    defaultExcluded : true
};

ClassList["inventor"] = {
    regExpSearch : /inventor/i,
    name : "Inventory",
    source : ["KT:I", 0],
    primaryAbility : "Intelligence",
    prereqs : "",
    die : 8,
    
}