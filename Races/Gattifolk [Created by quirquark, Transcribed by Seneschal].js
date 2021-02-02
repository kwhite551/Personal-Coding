var iFileName = "Gattifolk [Created by quirquark, Transcribed by Seneschal].js";
RequiredSheetVersion(13);

SourceList["QQ:GF"] = {
    name : "quirquark: Gattifolk",
    abbreviation : "QQ:GF",
    group : "Friendly Bunch Homebrew",
    url : "https://drive.google.com/file/d/1SHAaGOAhVp3TVgw19k7ywGcAUSbDOibB/view",
    defaultExcluded : true,
    date : "2020/12/22"
};
RaceList["Chartreux-Gattifolk"] = {
    regExpSearch : /^(?=.*chartreux)(?=.*gattifolk).*$/i,
    name : "Chartreux Gattifolk",
    sortname : "Gattifolk, Chartreux",
    source : ["QQ:GF", 2],
    plural : "Gattifolk",
    size : 4,
    speed : {
        walk : {spd : 35, enc : 25}
    },
    languageProfs : ["Common", 1],
    weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*(\bcat\b))(?=.*claw).*$/i,
		name : "Cat Claws",
		source : ["QQ:GF", 2],
		damage : [1, 4, "slashing"]
	},
	vision : [["Darkvision,", 60]],
    dmgres : ["Cold"],
    skillstxt : "Choose one from Insight, Perception, or Stealth",
    toolProfs : ["Tool or Musical Instrument", 1],
    age : "Gattifolk reach maturity in their early 20s and can live well into their second century.",
    height : "Gattifolk range from about 3’ to 4’ in height.",
    scores : [1, 0, 0, 0, 0, 2],
    scorestxt : "+2 Charisma and +1 to Strength",
    trait : "Chatreux Gattifolk (+2 Charisma, +1 Strength)\nCat's Claws: I can use my retractable claws to make unarmed strikes dealing 1d4 slashing damage.\nFeline Nimbleness: I can move through the space of any creature that is of a size larger than me."
};
RaceList["Malkin-Gattifolk"] = {
    regExpSearch : /^(?=.*malkin)(?=.*gattifolk).*$/i,
    name : "Malkin Gattifolk",
    sortname : "Gattifolk, Malkin",
    source : ["QQ:GF", 2],
    plural : "Gattifolk",
    size : 4,
    speed : {
        walk : {spd : 35, enc : 25}
    },
    languageProfs : ["Common", 1],
    weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*(\bcat\b))(?=.*claw).*$/i,
		name : "Cat Claws",
		source : ["QQ:GF", 2],
		damage : [1, 4, "slashing"]
	},
	vision : [["Darkvision,", 60]],
    skillstxt : "Choose one from Insight, Perception, or Stealth",
    toolProfs : ["Tool or Musical Instrument", 1],
    age : "Gattifolk reach maturity in their early 20s and can live well into their second century.",
    height : "Gattifolk range from about 3’ to 4’ in height.",
    scores : [0, 1, 0, 0, 0, 2],
    scorestxt : "+2 Charisma and +1 to Dexterity",
    abilitySave : 2,
    trait : "Malkin Gattifolk (+2 Charisma, +1 Dexterity)\nCat's Claws: I can use my retractable claws to make unarmed strikes dealing 1d4 slashing damage.\nFeline Nimbleness: I can move through the space of any creature that is of a size larger than me.\nTripping Hazard: Once per my turn, I can trip a creature who's space I move through. They must make a Dexterity save (DC 8 + Dexterity Modifier + Proficiency Bonus). On a failure, they are knocked prone.",
    features : {
        "tripping hazard" : {
            name : "Tripping Hazard",
            minlevel : 1,
            usages : 1,
            recovery : "per turn"
        }
    }
};
RaceList["Skirrish-Gattifolk"] = {
    regExpSearch : /^(?=.*skirrish)(?=.*gattifolk).*$/i,
    name : "Skirrish Gattifolk",
    sortname : "Gattifolk, Skirrish",
    source : ["QQ:GF", 2],
    plural : "Gattifolk",
    size : 4,
    speed : {
        walk : {spd : 35, enc : 25}
    },
    languageProfs : ["Common", 1],
    weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*(\bcat\b))(?=.*claw).*$/i,
		name : "Cat Claws",
		source : ["QQ:GF", 2],
		damage : [1, 4, "slashing"]
    },
    spellcastingAbility : 4,
	vision : [["Darkvision,", 60]],
    dmgres : ["poison"],
    savetxt : {
        adv_vs : ["poisoned", "disease"]
    },
    skillstxt : "Choose one from Insight, Perception, or Stealth",
    toolProfs : ["Tool or Musical Instrument", 1],
    age : "Gattifolk reach maturity in their early 20s and can live well into their second century.",
    height : "Gattifolk range from about 3’ to 4’ in height.",
    scores : [0, 0, 1, 0, 0, 2],
    scorestxt : "+2 Charisma and +1 to Constitution",
    trait : "Skirrish Gattifolk (+2 Charisma, +1 Constitution)\nCat's Claws: I can use my retractable claws to make unarmed strikes dealing 1d4 slashing damage.\nFeline Nimbleness: I can move through the space of any creature that is of a size larger than me."
};
RaceList["Abys-Gattifolk"] = {
    regExpSearch : /^(?=.*abys)(?=.*gattifolk).*$/i,
    name : "Abys Gattifolk",
    sortname : "Gattifolk, Abys",
    source : ["QQ:GF", 2],
    plural : "Gattifolk",
    size : 4,
    speed : {
        walk : {spd : 35, enc : 25}
    },
    languageProfs : ["Common", 1],
    weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*(\bcat\b))(?=.*claw).*$/i,
		name : "Cat Claws",
		source : ["QQ:GF", 2],
		damage : [1, 4, "slashing"]
    },
    spellcastingBonus : {
		name : "Esoteric Knowledge",
		"class" : "bard",
		level : [0, 0],
		firstCol : 'atwill'
	},
	vision : [["Darkvision,", 60]],
    skillstxt : "Choose one from Insight, Perception, or Stealth",
    toolProfs : ["Tool or Musical Instrument", 1],
    age : "Gattifolk reach maturity in their early 20s and can live well into their second century.",
    height : "Gattifolk range from about 3’ to 4’ in height.",
    scores : [0, 0, 0, 1, 0, 2],
    scorestxt : "+2 Charisma and +1 to Intelligence",
    trait : "Abys Gattifolk (+2 Charisma, +1 Intelligence)\nCat's Claws: I can use my retractable claws to make unarmed strikes dealing 1d4 slashing damage.\nFeline Nimbleness: I can move through the space of any creature that is of a size larger than me.\nEsoteric Knowledge: I know one cantrip of my choice from the bard spell list. Intelligence is my spellcasting ability for it."
};