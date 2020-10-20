var iFileName = "Alomri [Ghosthack9's work, Transcribed by Seneschal].js";
RequiredSheetVersion(13);

SourceList["GH:A"] = {
    name : "Ghosthack9: Alomri",
    abbreviation : "GH:A",
    group : "Reddit/r/UnearthedArcana",
    defaultExcluded : true,
    url : "https://www.reddit.com/r/UnearthedArcana/comments/feqw0e/alomri_the_homebrew_race_we_need_because_we_all/",
    date : "2020/03/07"
};

RaceList["alomri"] = {
    regExpSearch : /alomri/i,
    name : "Alomri",
    sortname : "Alomri",
    source : ["GH:A", 0],
    plural : "Alomri",
    size : 4,
    speed : {
        walk : { spd : 30, enc : 20}
    },
    weaponProfs : [false, false, ["longsword", "longbow"]],
    toolProfs : [["Musical Instrument", 1]],
    languageProfs : ["Common", 1],
    age : "Alomri mature quickly and live a little over 100 years",
    height : "Alomri range from under 4 feet to over 5 feet tall",
    skillstxt : "Alomri choose two from Animal Handling, Nature, Perception, Stealth, and Survival",
    scores : [1, 1, 0, 0, 0, 2],
    improvement : "+2 Charisma, +1 Strength, +1 Dexterity",
    trait : "Alomri (+2 Charisma, +1 Strength, +1 Dexterity)" +
    "\nInto the Fray: If I'm not surprised, I can add my Proficiency to Initiative" +
    "\nBallad of the Green: I heal a creature for hp equal to my level when singing or playing an instrument for 10 minutes or more. I can do this once per short or long rest" +
    "\nHearts and Minds: As an action, I touch a creature and add my Charisma modifier to their next skill check. I can do this a number of times equal to my Cha modifier per long rest" +
    "\nWoodland Lore: I gain proficiency in two skills of my choice from Animal Handling, Nature, Perception, Stealth, and Survival"+
    "\nAdditionally, I am proficient the longsword, longbow, and one type of musical instrument.",
    features : {
        "into the fray" : {
            name  :"Into the Fray",
            minlevel : 1,
            tooltip : "(Into the Fray)",
            addMod : [
                { type : "skill", field : "Init", mod : "Prof", text : "I can add my Proficiency modifier to initiative rolls." }
            ]
        },
        "ballad of the green" : {
            name : "Ballad of the Green",
            minlevel : 1,
            tooltip : "(Ballad of the Green)",
            usages : 1,
            recovery : "short rest",
            additional : levels.map(function(n){
                return n + " hp"
            })
        },
        "hearts and minds" : {
            name : "Hearts and Minds",
            minlevel : 1,
            tooltip : "(Hearts and Minds)",
            usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
            recovery : "long rest",
            action : ["action", ""]
        }
    }
}