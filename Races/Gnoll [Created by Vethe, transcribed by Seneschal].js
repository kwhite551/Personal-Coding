var iFileName = "Gnoll [Created by Vethe, Transcribed by Seneschal].js";
RequiredSheetVersion(13);

SourceList["V:G"] = {
    name : "Venthe: Gnoll",
    abbreviation : "V:G",
    group : "Reddit/r/UnearthedArcana",
    url : "https://www.gmbinder.com/share/-Lr7GJuwTIEVfahizNbG",
    date : "2020/04/24"
};

RaceList["gnoll-blackfang"] = {
    regExpSearch : /^(?=.*blackfang)(?=.*gnoll).*$/i,
    name : "Blackfang Gnoll",
    sortname : "Gnoll, Blackfang",
    source : ["V:G", 3],
    plural : "Gnolls",
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20 }
    },
    languageProfs : ["Common", "Abyssal"],
    vision : [["Darkvision", 60]],
    weapons : ["Gnoll Bite"],
    skills : ["Intimidation"],
    age : "Gnolls age noticeably faster than most humanoids and seldom live beyond 40 years.",
    height : "Gnolls generally stand around 7 feet in height",
    weight : "Gnolls weigh between 230 and 280 lbs.",
    improvements : "Blackfang Gnoll: +2 Strength, +1 Dexterity",
    savetxt : { text : "Adv. on Con saves against disease and ingested poison" },
    scores : [2, 1, 0, 0, 0, 0],
    trait : "Blackfang Gnoll (+2 Strength, +1 Dexterity)\nBite: I am proficient with my bite. My  bite deals 1d4 piercing damage.\nScavenger: I can safely consume raw or rotting food and have advantage on Constitution saving throws against disease and ingested poison.\nRampage: I can move up to half my speed and make a bite attack after reducing a creature to 0 hp. After I use this trait, I can't use it again until I roll for initiative at start of combat"
};

RaceList["gnoll-lowland"] = {
    regExpSearch : /^(?=.*lowland)(?=.*gnoll).*$/i,
    name : "Lowland Gnoll",
    sortname : "Gnoll, Lowland",
    source : ["V:G", 3],
    plural : "Gnolls",
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20 }
    },
    languageProfs : ["Common", "Abyssal"],
    vision : [["Darkvision", 60]],
    weapons : ["Gnoll Bite"],
    skills : ["Intimidation"],
    age : "Gnolls age noticeably faster than most humanoids and seldom live beyond 40 years.",
    height : "Gnolls generally stand around 7 feet in height",
    weight : "Gnolls weigh between 230 and 280 lbs.",
    savetxt : { text : "Adv. on Con saves against disease and ingested poison" },
    improvements : "Lowland Gnoll: +1 Strength, +1 Dexterity, +1 Constitution",
    scorces : [1, 1, 1, 0, 0, 0],
    trait : "Lowland Gnoll (+1 Strength, +1 Dexterity, +1 Constitution)\nBite: I am proficient with my bite. My  bite deals 1d4 piercing damage.\nScavenger: I can safely consume raw or rotting food and have advantage on Constitution saving throws against disease and ingested poison.\nSudden Rush: I can take the dash action as a bonus action on my turn. I can use this trait a number of times equal to my Con modifier per long rest.",
    features : {
        "sudden rush" : {
            name : "Sudden Rush",
            minlevel : 1,
            usages : "Constitution modifier per ",
            usagescalc : "event.value = Math.max(1, What('Con Mod'));",
            recovery : "short rest",
            tooltip : "(Lowland)",
            action : ["bonsu action", " (Dash)"]
        }
    }
};
RaceList["gnoll-bladegrove"] = {
    regExpSearch : /^(?=.*bladegrove)(?=.*gnoll).*$/i,
    name : "Bladegrove Gnoll",
    sortname : "Gnoll, Bladegrove",
    source : ["V:G", 3],
    plural : "Gnolls",
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20 }
    },
    languageProfs : ["Common", "Abyssal"],
    vision : [["Darkvision", 60]],
    weapons : ["Gnoll Bite"],
    skills : ["Intimidation"],
    age : "Gnolls age noticeably faster than most humanoids and seldom live beyond 40 years.",
    height : "Gnolls generally stand around 7 feet in height",
    weight : "Gnolls weigh between 230 and 280 lbs.",
    savetxt : { text : "Adv. on Con saves against disease and ingested poison" },
    improvements : "Bladegrove Gnoll: +2 Dexterity, +1 Strength",
    scores : [1, 2, 0, 0, 0, 0],
    trait : "Bladegrove Gnoll (+2 Dexterity, +1 Strength)\nBite: I am proficient with my bite. My  bite deals 1d4 piercing damage.\nScavenger: I can safely consume raw or rotting food and have advantage on Constitution saving throws against disease and ingested poison.\nFury of the Pack: I deal additional damage equal to my proficiency modifier per ally within 10 feet of the enemy (max of 3) once per short or long rest",
    features : {
        "fury of the pack" : {
            name : "Fury of the Pack",
            minlevel : 1,
            usages : 1,
            recovery : "short rest",
            additional : "(+" + What('Proficiency Bonus') + " dmg)",
            tooltip : "(Bladegrove)",
            action : ["action", " (part of damage roll)"]
        }
    }
};
RaceList["gnoll-sageclaw"] = {
    regExpSearch : /^(?=.*sageclaw)(?=.*gnoll).*$/i,
    name : "Sageclaw Gnoll",
    sortname : "Gnoll, Sageclaw",
    source : ["V:G", 3],
    plural : "Gnolls",
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20 }
    },
    languageProfs : ["Common", "Abyssal"],
    vision : [["Darkvision", 60]],
    weapons : ["Gnoll Bite"],
    skills : ["Intimidation", "Animal Handling"],
    age : "Gnolls age noticeably faster than most humanoids and seldom live beyond 40 years.",
    height : "Gnolls generally stand around 7 feet in height",
    weight : "Gnolls weigh between 230 and 280 lbs.",
    savetxt : { text : "Adv. on Con saves against disease and ingested poison" },
    improvements : "Sageclaw Gnoll: +1 Strenght, +1 Dexterity, +1 Wisdom",
    scorces : [1, 1, 0, 0, 1, 0],
    trait : "Sageclaw Gnoll (+1 Strength, +1 Dexterity, +1 Wisdom)\nBite: I am proficient with my bite. My  bite deals 1d4 piercing damage.\n Scavenger: I can safely consume raw or rotting food and have advantage on Constitution saving throws against disease and ingested poison.\nPackwarden's Mark: When I damage a creature, one ally's next attack roll before the end of my turn has advantage. When I heal a creature, they have advantage on their next save within an hour. I can only use this trait once per short or long rest.",
    features : {
        "packwarden's mark" : {
            name : "Packwarden's Mark",
            minlevel : 1,
            usages : 1,
            recovery : "short rest",
            tooltip : ("Sageclaw Gnoll")
        }
    }
};

WeaponsList["gnoll-bite"] = {
    regExpSearch : /gnoll bite/i,
    name : "Gnoll Bite",
    source : ["V:G", 3],
    ability : 1,
    type : "Natural",
    damage : [1, 4, "piercing"],
    range : "Melee",
    list : "melee",
    isAlwaysProf : true,
    abilitytodamage : true
};