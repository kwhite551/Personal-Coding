var iFileName ="Samurai [Created by Acrobatic Plant, transcribed by Seneschal.js";
RequiredSheetVersion(13);

SourceList["AP:S"] = {
    name : "Acrobatic Plant: Samurai",
    abbreviation : "AP:S",
    group : "Reddit/r/UnearthedArcana",
    url : "https://www.reddit.com/r/UnearthedArcana/comments/lf0cce/samurai_v22_with_another_subclass_and_more/",
    date : "2021/02/07",
    defaultExcluded : true
};

ClassList["Samurai"] = {
    regExpSearch : /samurai/i,
    name : "Samurai",
    source : ["AP:S", 0],
    primaryAbility : "",
    prereqs : "",
    die : 10,
    improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5],
	saves : ["Dex", "Int"],
    skillstxt : {
        primary : " Choose two from Acrobatics, Athletics, History, Intimidation, Investigation, Perception, and Stealth"
    },
    armorProfs : {
        primary : [true, true, true, true]
    },
    weaponProfs : {
        primary : [true, true, []]
    },
    equipment : "Samurai starting equipment:" +
    "\n \u2022 chainmail -or- leather armor, a longbow, and 20 arrows;" +
    "\n \u2022 a longsword -or- a glaive -or- a shield and any martial melee weapon;" +
    "\n \u2022 2 shortswords -or- 4 darts;" +
    "\n \u2022 an explorer's pack -or- a dungeoneer's pack;",
    subclasses : ["Samurai Discipline", []],
    attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	abilitySave : 3,
    features : {
        "chakra" : {
            name : "Chakra",
            source : ["AP:S", 4],
        },
        "stances of the samurai" : {

        },
        "fighting style" : {

        },
        "lethal resonation" : {

        },
        "subclassfeature3" : {

        },
        "chakra-fueld movement" : {

        },
        "bushido" : {

        },
        "strike of the void" : {

        },
        "unconquerable warriors" : {

        },
        "dismantle the weave" : {

        },
        "transcendant soul" : {

        }
    }
};