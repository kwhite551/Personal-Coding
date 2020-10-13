var iFileName = "Seneschal's Spectacular Species [Created and Transcribed by Seneschal].js";
RequiredSheetVersion(13);

SourceList["S:SSS"] = {
    name : "Seneschal: Seneschal's Spectacular Species",
    abbreviation : "S:SSS",
    group : "Friendly Bunch Homebrew",
    date : "2020/09/15",
    url : "Seneschal's Spectacular Species"
};

RaceList["guardianLupin"] = {
    regExpSearch : /^(?=.*Guardian)(?=.*Lupin).*$/i,
    name : "Guardian Lupin",
    sortname : "Lupin, Guardian",
    source : ["S:SSS", 2],
    size : 3,
    speed : {
        walk : { spd : 35, enc : 25 }
    },
    defaultExcluded : true,
    languageProfs : ["Common", "Lupin"],
    weaponsAdd : ["Lupin's Bite", "Lupin's Claws"],
    vision : [["Darkvision", 60], ["Keen Smell and Hearing", 0]],
	dmgres : ["Cold"],
    skills : ["Perception"],
    skillstxt : "Choose Nature or Survival",
    age : "Lupin mature by their late teens and live to around 200 years.",
	height : "Lupin range from 5 to over 6 feet tall (5'4\" + 2d8\")",
    weight : "Lupin weigh near 200 lb (150 + 2d8 \xD7 1d4 lb)",
    scorestxt : "+2 Wisdom and +1 Constitution",
	improvement : "Guardian Lupin: +2 Wisdom, +1 Constitution;",
    scores : [0, 0, 1, 0, 2, 0],
    trait : "Guardian Lupin (+2 Wisdom and +1 Constitution)\n Nature's Weapons: I use my claws to deal 1d6 slashing damage and my bite to deal 1d6 piercing damage.\n Canine Agility: When moving on my turn in combat, I add +10 to my movement speed if I hold no items.\n Adventurer's Luck: After failing a save, attack roll, or ability check, I can reroll the and use the new roll. I regain this ability on a long rest.",
    features : {
        "adventurer's luck" : {
            name : "Adventurer's Luck",
            minlevel : 1,
            usagescalc : "event.value = Math.max(1, What('Prof'));",
            recovery : "long rest"
        }
    }
};

RaceList["oratorLupin"] = {
    regExpSearch : /^(?=.*Orator)(?=.*Lupin).*$/i,
    name : "Orator Lupin",
    sortname : "Lupin, Orator",
    source : ["S:SSS", 2],
    size : 3,
    speed : {
        walk : { spd : 35, enc : 25 }
    },
    defaultExcluded : true,
    languageProfs : ["Common", "Lupin"],
    weaponsAdd : ["Lupin's Bite", "Lupin's Claws"],
    vision : [["Darkvision", 60], ["Keen Smell and Hearing", 0]],
    dmgres : ["Cold"],
    savetxt : {
        adv_vs : ["charmed"]
    },
    skills : ["Perception"],
    age : "Lupin mature by their late teens and live to around 200 years.",
	height : "Orator Lupin range from 5 to over 6 feet tall (5'4\" + 2d10\")",
    weight : "Orator Lupin weigh near 200 lb (175 + 2d10 \xD7 2d4 lb)",
    scorestxt : "+2 Wisdom and +1 Charimsa",
	improvement : "Orator Lupin: +2 Wisdom, +1 Charisma;",
    scores : [0, 0, 0, 0, 2, 1],
    trait : "Orator Lupin (+2 Wisdom and +1 Charisma)\n Nature's Weapons: I use my claws to deal 1d6 slashing damage and my bite to deal 1d6 piercing damage.\n Canine Agility: When moving on my turn in combat, I add +10 to my movement speed if I hold no items.\n Way with Animals: I can cast the Speak with Animals spell as a ritual only. At 3rd level, I can cast Animal Messenger as a ritual only.",
    spellcastingAbility : 5,
    features : {
        "speak with animals" : {
			name : "Speak with Animals",
			minlevel : 1,
			spellcastingBonus : {
				name : "Speak with Animals",
				spells : ["speak with animals"],
                selection : ["speak with animals"],
                firstCol : "(R)"
			}
		},
		"animal messenger" : {
			name : "Animal Messenger",
			minlevel : 3,
			spellcastingBonus : {
				name : "Animal Messenger",
				spells : ["animal messenger"],
				selection : ["animal messenger"],
				firstCol : "(R)"
            }
        },
        spellChanges : {
            "speak with animals" : {
                time : "10 min",
                changes : "I can cast this spell only as a ritual, thus its casting time is 10 minutes longer."
            },
            "animal messenger" : {
                time : "10 min",
                changes : "I can cast this spell only as a ritual, thus its casting time is 10 minutes longer."
            }
        }
    }
};

RaceList["warriorLupin"] = {
    regExpSearch : /^(?=.*Warrior)(?=.*Lupin).*$/i,
    name : "Warrior Lupin",
    sortname : "Lupin, Warrior",
    source : ["S:SSS", 2],
    size : 3,
    speed : {
        walk : { spd : 35, enc : 25 }
    },
    defaultExcluded : true,
    languageProfs : ["Common", "Lupin"],
    weaponsAdd : ["Lupin's Bite", "Lupin's Claws"],
    weaponProfs : [false, false, ["3 marital weapons of your choice"]],
    vision : [["Darkvision", 60], ["Keen Smell and Hearing", 0]],
    dmgres : ["Cold"],
    savetxt : {
        adv_vs : ["frightened"]
    },
    skills : ["Perception"],
    age : "Lupin mature by their late teens and live to around 200 years.",
	height : "Lupin range from 5 to over 6 feet tall (5'4\" + 2d8\")",
    weight : "Lupin weigh near 200 lb (140 + 2d8 \xD7 1d4 lb)",
    scorestxt : "+2 Wisdom and +1 Strength or Dexterity",
    improvement : "Warrior Lupin: +2 Wisdom, +1 Strength or Dexterity;",
    trait : "Warrior Lupin (+2 Wisdom and +1 Strength or Dexterity)\n Nature's Weapons: I use my claws to deal 1d6 slashing damage and my bite to deal 1d6 piercing damage.\n Canine Agility: When moving on my turn in combat, I add +10 to my movement speed if I hold no items.\n Bloody Roar: As an action, I force all creatures within 30 feet of me to make a Charisma save (DC 8 + my proficiency modifier + Constitution modifier). On a failure, they are frightened of me for 1 minute.",
    scores : [0, 0, 0, 0, 2, 0],
    features : {
        "bloody roar" : {
            name : "Bloody Roar",
            action : ["action", ""]
        }
    }
};

RaceList["arachni"] = {
    regExpSearch : /arachni/i,
    name : "Arachni",
    sortname : "Arachni",
    source : ["S:SSS", 3],
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20 },
        climb : { spd : 30, enc : 20 }
    },
    languageProfs : ["Common", 1],
    weaponsAdd : ["Arachni Bite", "Arachni Claw"],
    vision : ["Darkvision", 60],
    dmgres : ["poison"],
    savetxt : {
        adv_vs : ["poisoned"]
    },
    age : "Arachni mature physically by 10 and mentally by late teens. They live up to 200 years old.",
    height : "Arachni range between 5 and 6 feet tall (4'8\" + 2d8\")",
    weight : "Arachni weigh above 150 lb (150 + 2d8 \xD7 1d4 lb)",
    scorestxt : "+2 Charisma and +1 to two ability scores",
    improvement : "Arachni: +2 Charisma and +1 to two ability scores",
    scores : [0,0,0,0,0,2],
    trait : "Arachni (+2 Charimsa, +1 to two ability scores)\n Arachnid's Weapons: I use my claws to deal 1d6 slashing and walk through webs as if they weren't difficult terrain. My bite deals 1d6 piercing. When a bite hits, the creature rolls a Constitution Save (DC 8 + my proficiency modifier + Constitution modifier). On a failure, poisoned and 2d6 Acid damage. Increases by 1d6 at 6th, 11th, and 16th level.\n Archanid's Web: I can grapple a target with spider claws. As an action, I can restrain a grappled target within a silk cocoon that has 2 hp. Target makes a strength check against Arachni Bite DC. I can also craft a web between two objects 30 feet apart. It is difficult terrain to any creature that enters the web except me.",
    features : {
        "arachnid's web" : {
            name : "Arachnid's Web",
            action : ["action", "(restrain only on grappled target)"]
        }
    }
}


WeaponsList["lupinBite"] = {
	regExpSearch : /^(?=.*lupin)(?=.*\bbites?\b).*$/i,
	name : "Lupin's Bite",
	source : ["S:SSS", 2],
	ability : 1,
	type : "Natural",
	damage : [1, 6, "piercing"],
	range : "Melee",
	description : "",
	abilitytodamage : true,
};
WeaponsList["lupinClaws"] = {
	regExpSearch : /^(?=.*lupin)(?=.*\bclaws?\b).*$/i,
	name : "Lupin's Claws",
	source : ["S:SSS", 2],
	ability : 1,
	type : "Natural",
	damage : [1, 6, "slashing"],
	range : "Melee",
	description : "",
	abilitytodamage : true,
	monkweapon : true
};
WeaponsList["arachniBite"] = {
	regExpSearch : /^(?=.*arachni)(?=.*\bbites?\b).*$/i,
	name : "Arachni Bite",
	source : ["S:SSS", 3],
	ability : 1,
	type : "Natural",
	damage : [1, 6, "piercing"],
	range : "Melee",
	description : "On a failed Constitution save, 2d6 Acid damage and poisoned, 3d6 at 6th, 4d6 at 11th, and 5d6 at 16;",
	abilitytodamage : true,
};
WeaponsList["arachniClaws"] = {
	regExpSearch : /^(?=.*arachni)(?=.*\bclaws?\b).*$/i,
	name : "Arachni Claws",
	source : ["S:SSS", 3],
	ability : 1,
	type : "Natural",
	damage : [1, 6, "slashing"],
	range : "Melee",
	description : "",
	abilitytodamage : true,
	monkweapon : true
};