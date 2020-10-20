var iFileName = "Koibold [Roxiroon's Work, Transcribed by Sensecahl].js";
RequiredSheetVersion(13);

SourceList["RR:K"] = {
    name : "Roxiroon : Koibold",
    abbreviation : "RR:K",
    group : "Friendly Bunch Homebrew",
    defaultExcluded : true,
    date : "2020/09/13"
};

RaceList["koibold"] = {
    regExpSearch : /koibold/i,
    name : "Koibold",
    sortname : "Koibold",
    plural : "Koibolds",
    size : 4,
    speed : {
        walk : { spd : 30, enc : 20},
        swim : { spd : 30, enc : 20}
    },
    defaultExcluded : true,
    languageProfs : ["Common", "Draconic", "Aquan"],
    vision : [["Darkvision", 60]],
    age : "Koibolds reach adulthood at age 6 and can live up to 160 years.",
    height : "Koibolds are between 2 and 3 feet tall (2'1\" + 2d4\")",
    weight : "Koibolds weigh between 50 and 60 pounds (25 + 2d4 \xD7 1d4 lb)",
    scorestxt : "+2 Dexterity and +1 Wisdom",
    scores : [0, 2, 0, 0, 1, 0],
    trait : "Koibold (+2 Dexterity and +1 Wisdom)\n Amphibious: I can breathe air and water\n Keeper of the Sea: I can communicate simple ideas to beasts that can breathe water.\n Water Weaver: I can cast the Shape Water cantrip. Once I reach 3rd level, I can cast the Create or Destroy Water Spell at the 2nd level once per long rest. Wisdom is my spellcasting ability for these spells.\nAquatic Aristan: As part of a short rest, I an harvest underwater materials or plants size small or larger to create one of the following items: a shield, a shortsword, a trident, or 1d4 darts or daggers. This requires appropriate tools.\n Silent as Water: I have advantage on Dexterity (Stealth) checks when in water.",
    spellcastingAbility : 5,
    features : {
        "shape water" : {
			name : "Control Air and Water (level 1)",
			minlevel : 1,
			spellcastingBonus : {
				name : "Control Air and Water (1)",
				spells : ["shape water"],
                selection : ["shape water"],
                firstCol : 'atwill'
			}
		},
		"create or destroy water" : {
			name : "Control Air and Water (level 3)",
			limfeaname : "Create or Destroy Water (Level 2)",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Control Air and Water (3)",
				spells : ["create or destroy water"],
				selection : ["create or destroy water"],
				firstCol : 'oncelr'
			}
		}
	}
};