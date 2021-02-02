var iFileName = "Exploring Eberron [Created by Keith Baker, Transcribed by Seneschal].js";
RequiredSheetVersion(13);

SourceList["KB:EE"] = {
    name : "Keith Baker: Exploring Eberron",
    abbreviation : "KB:EE",
    group : "Dungeon Master's Guild",
    url : "https://www.dmsguild.com/product/315887/Exploring-Eberron",
    date : "2020/07/30",
    defaultExcluded : true
};

if (ClassList.artificer && ClassList.artificer.features["infuse item"]) {
    AddFeatureChoice(ClassList.artificer.features["infuse item"], true, "Bane Weapon (prereq: level 6 artificer)", {
        name : "Bane Weapon",
        source : ["KB:EE", 215],
        description : desc([
            "The weapon has a +1 bonus to attack and damage rolls made with it",
            "I choose a creature type: beast, celestial, dragon, fiend, giant, or undead",
            "When a creature of that type is hit, I can expend a charge out of 4 to deal an extra 2d6 weapon damage"
        ]),
        usages : 4,
        recovery : "dawn",
        additional : "1d4 regained",
        chooseGear : {
			type : "weapon",
			prefixOrSuffix : "brackets",
			descriptionChange : ["replace", "weapon"]
		}
    }),
    AddFeatureChoice(ClassList.artificer.features["infuse item"], true, "Fortify Defense (prereq: level 6 artificer)", {
        name : "Fortify Defense",
        source : ["KB:EE", 215],
        description : desc([
            "The armor has a +1 bonus to AC while a creature wears it",
            "When a creature wearing the armor is hit with a critical hit, a charge can be expended to make it a normal hit",
            "Any effect caused by the critical hit is negated as well",
            "This armor has 4 charges and regains 1d4 of them at dawn"
        ]),
        usages : 4,
        recovery : "dawn",
        additional : "1d4 regained",
        chooseGear : {
			type : "armor",
			prefixOrSuffix : "brackets",
			descriptionChange : ["replace", "armor"]
		}
    }),
    AddFeatureChoice(ClassList.artificer.features["infuse item"], true, "Fortify Defense (prereq: level 6 artificer)", {
        
    })
};


AddSubClass("artificer", "forge adept", {
    regExpSearch : /^(?=.*forge)(?=.*adept)/i,
    subname : "Forge Adept",
    spellcastingExtra : ["armor of agathys", "shield of faith", "spiritual weapon", "warding bond", "beacon of hope", "remove curse", "death ward", "fire shield", "banishing smite", "wall of force"],
    attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    features : {
        "subclassfeature3" : {
            name : "Battle Ready",
            source : ["KB:EE", 214],
            minlevel : 3,
            toolProfs : ["Smith's Tools"],
            description : desc([
                "When I attack with a magic weapon, I can use Intelligence for attack and damage rolls"
            ]),
            weaponProfs : [false, true, false]
        },
        "subclassfeature3.1" : {
            name : "Ghaal'Shaarat",
            source : ["KB:EE", 214],
            minlevel : 3,
            description : desc([
                "I turn one simple or martial melee weapon into my ghaal’shaarat weapon",
                "My weapon gains a +1 to damage and attack rolls unless the bonus was already higher",
                "This increases to +2 at 8th level and +3 at 13th",
                "If my weapon has the thrown property, it returns to my hand immediately after a ranged attack",
                "The benefits only apply to me until the weapon is destroyed or I imbue a new item"
            ]),
            calcChanges : {
                atkCalc : [
                    function (fields, v, output) {
                        "if (classes.known.artificier && classes.known.artificier > 2 && (/ghaal’shaarat/i).test(v.weaponText) { output.extraDmg += 1 && output.extraHit += 1 };",
                        "else if (classes.known.artificier && classes.known.artificier > 7 && (/ghaal’shaarat/i).test(v.weaponText) { output.extraDmg += 2 && output.extraHit += 2 };",
                        "else if (classes.known.artificier && classes.known.artificier > qw && (/ghaal’shaarat/i).test(v.weaponText) { output.extraDmg += 3 && output.extraHit += 3 };"
                    },
                    "My ghaal’shaarat weapon gains a bonus to hit and damage"
                ]
            }
        },
        "subclassfeature9" : {
            name : "Runes of War",
            source : ["KB:EE", 214],
            minlevel : 9,
            usages : "Intelligence modifier per ",
            usagescalc : Math.max(1, What('Int Mod')),
            recovery : "long rest",
            action : ["action", ""],
            description : desc([
                "As an action, I activate a 30 ft radius aura that lasts for 1 minute",
                "This ends early if my concentration ends (like a spell)",
                "I choose either acid, cold, fire, lightning, or thunder",
                "Each creature of my choice deals an extra 1d4 damage of that type"
            ])
        },
        "subclassfeature15" : {
            name : "Perfect Weapon",
            source : ["KB:EE", 215],
            minlevel : 15,
            description : desc([
                "I can transfer some of my ghaal’shaarat bonus to my AC when I first attack with it on my turn",
                "For every 1 I reduce my attack and damage bonus by, I add +1 to my AC",
                "This bonus stays in effect until the start of my next turn",
                "Additionally, I gain one of the benefits until the end of my next long rest",
                "\u2022 I am resistant to psychic damage and can't be charmed or frightened",
                "\u2022 I deal an extra 1d6 acid, cold, fire, lightning, or thunder damage with my ghaal’shaarat"
            ])
        }
    }
});

AddSubClass("artificer", "maverick", {
    regExpSearch : /maverick/i,
    subname : "Maverick",
    features : {
        "subclassfeature3" : {

        },
        "subclassfeature3.1" : {

        },
        "subclassfeature5" : {

        },
        "subclassfeature9" : {

        },
        "subclassfeature9.1" : {

        },
        "subclassfeature15" : {

        }
    }
});

AddSubClass("bard", "dirge singer", {

});

AddSubClass("cleric", "mind domain", {

});

AddSubClass("druid", "circle of the forged", {

});

AddSubClass("monk", "way of the living weapon", {

});

RaceList["court aasimar"] = {
    regExpSearch : /^(?=.*court)(?=.*aasimar)/i,
    name : "Court Aasimar",
    sortname : "Aasimar, Seeker",
    source : ["KB:EE", 208],
    plural : "Court Aasimar",
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20 }
    },
    vision : [["Darkvision", 60]],
    dmgres : ["Necrotic", "Radiant"],
    languageProfs : ["Common", "Celestial", "Elvish"],
    savetxt : {
        text : ["Magic can't put me to sleep"],
        adv_vs : ["charmed"]
    },
    age : "Court Aasimar mature at the same rate as elves and leave up to 1,000 years",
	height : "Court Aasimar range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : "Court Aasimar weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : "Court Aasimar range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : "Court Aasimar weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
    scores : [0, 1, 0, 0, 0, 2],
    scorestxt : "+2 Charisma, +1 Dexterity",
    trait : "Court Aasimar (+2 Charisma, +1 Dexterity)\nLight Bearer: I know the Light cantrip.\nHealing Hands: As an action, once per long rest, I can touch to heal for my level in HP.\nGuidance From the Past: Once per short or long rest when I'm 3rd level, I can use an action to transform, I summon misty tendrils that whisper advice to me. For 1 minute or until I end it as a bonus action, I have advantage on all Wisdom checks and saving throws.\nTrance: Court Aasimar don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, thus needing only 4 hours for a long rest.",
    spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Light Bearer",
		spells : ["light"],
		selection : ["light"],
		firstCol : 'atwill'
	},
    features : {
        "healing hands" : {
			name : "Healing Hands",
			usages : 1,
			minlevel : 1,
			recovery : "long rest",
			additional : levels.map(function (n) { return n + " HP"; }),
			action : ["action", ""]
        },
        "guidance from the past" : {
            name : "Guidance From the Past",
            usages : 1,
            minlevel : 3,
            recovery : "short rest",
            action : [["action", " (start)"], ["bonus action", " (end)"]]
        }
    }
};

RaceList["seeker aasimar"] = {
    regExpSearch : /^(?=.*seeker)(?=.*aasimar)/i,
    name : "Seeker Aasimar",
    sortname : "Aasimar, Seeker",
    source : ["KB:EE", 208],
    plural : "Seeker Aasimar",
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20 }
    },
    vision : [["Darkvision", 60]],
    dmgres : ["Necrotic", "Radiant"],
    languageProfs : ["Common", "Celestial"],
    age : "Seeker Aasimar reach adulthood in their late teens and live around 160 years",
	height : "Seeker Aasimar range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : "Seeker Aasimar weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : "Seeker Aasimar range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
    weightMetric : "Seeker Aasimar weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
    scores : [0, 0, 1, 0, 0, 2],
    traits : "Seeker Aasimar (+2 Charisma, +1 Constitution)\nLight Bearer: I know the Light cantrip.\nHealing Hands: As an action, once per long rest, I can touch to heal for my level in HP.\nShroud of Life and Death: Once per long rest when I'm 3rd level, I can use an action to transform, summoning a nimbus of crimson blood around me. For 1 minute or until I end it as a bonus action, one creature within 30 feet of me takes damage equal to half my level (rounded up). When I or an ally is reduced to 0 hp but not killed outright, I can use a reaction to reduce them to 0 hit points, ending the transformation early. I shed dim light in a 10 foot radius.",
    spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Light Bearer",
		spells : ["light"],
		selection : ["light"],
		firstCol : 'atwill'
	},
    features : {
        "healing hands" : {
			name : "Healing Hands",
			usages : 1,
			minlevel : 1,
			recovery : "long rest",
			additional : levels.map(function (n) { return n + " HP"; }),
			action : ["action", ""]
        },
        "shroud of life and death" : {
            name : "Shroud of Life and Death",
			usages : 1,
			minlevel : 3,
			recovery : "long rest",
			additional : levels.map(function (n) { return n < 3 ? "" : "+" + n + " damage"; }),
            action : [["action", " (start)"], ["bonus action", " (end)"], ["reaction", " (save ally)"]]
        }
    }
};

RaceList["ruinbound dwarf"] = {
    regExpSearch : /^(?=.*ruinbound)(?=.*dwarf)/i,
    name : "Ruinbound Dwarf",
    sortname : "Dwarf, Ruinbound",
    source : ["KB:EE", 210],
    plural : "Ruinbound Dwarves",
    scores : [0, 0, 2, 0, 0, 1],
    scorestxt : "+2 Constiution, +1 Charisma",
    size : 3,
	speed : {
		walk : { spd : 25, enc : 25 }
	},
	languageProfs : ["Common", "Dwarvish"],
	vision : [["Darkvision", 60]],
	savetxt : { adv_vs : ["poison"] },
    dmgres : ["Poison"],
    toolProfs : [["Smith, brewer, or mason tools", 1]],
	age : " are considered young until they are 50 and live about 350 years",
	height : " stand between 4 and 5 feet tall (4' + 2d4\")",
	weight : " weigh around 150 lb (130 + 2d4 \xD7 2d6 lb)",
	heightMetric : " stand between 1,2 and 1,5 metres tall (120 + 5d4 cm)",
    weightMetric : " weigh around 75 kg (60 + 5d4 \xD7 4d6 / 10 kg)",
	trait : "Ruinbound Dwarf (+1 Charisma, +2 Constitution)\nStonecunning: Whenever I make an Intelligence (History) check related to the origin of stonework, I am considered proficient in the History skill and add double my proficiency bonus to the check, instead of my normal proficiency bonus.\nPersonal Symbiont: I choose acid splash, guidance (self only), infestation, light, mage hand, poison spray, or ray of frost. I must show my symbiont fully to cast the cantrip and can switch to a different cantrip when I finish a long rest.\nSymbiont Mastery: I can attune to one magic item that has the Symbiotic Nature property without using an attunement slot. I can end an attunement to a Symbiotic Nature magic item when I finish a long rest.",
    spellcastingBonus : {
        spells : ["acid splash", "guidance", "infestation", "light", "mage hand", "poison spray", "ray of frost"],
        name : "Personal Symbiont",
        selection : ["acid splash", "guidance", "infestation-xgte", "light", "mage hand", "poison spray", "ray of frost"],
        spellcastingAbility : 6,
    }
};

RaceList["aereni elf"] = {
    regExpSearch : /^(?=.*aereni)(?=.*elf)/i,
    name : "Aereni Elf",
    sortname : "Elf, Aereni",
    source : ["KB:EE", 209],
    plural : "Aereni Elves",
    size : 3,
    speed : {
        walk : { spd : 30, enc : 30 }
    },
    languageProfs : ["Common", "Elvish"],
	vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
    skills : ["Perception"],
    skillstxt : "Choose one skill or tool proficiency granted by my race, class, or background. My proficiency bonus is doubled for any ability check I make using this chosen proficiency.",
    age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from under 5 to over 6 feet tall (4'6\" + 2d10\")",
	weight : " weigh around 115 lb (90 + 2d10 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d10 cm)",
	weightMetric : " weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
    scores : [0, 2, 0, 0, 0, 0],
    scorestxt : "+2 Dexterity, +1 Intelligence or Wisdom",
    traits : "Aereni Elf (+2 Dexterity, +1 Intelligence or Wisdom)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, thus needing only 4 hours for a long rest.\nCantrip: I know one cantrip of my choice from the cleric or wizard spell list. Intelligence is my spellcasting ability for wizard spells and Wisdom is for cleric spells.",
	spellcastingBonus : {
		name : "Aereni Elf Cantrip",
		"class" : ["cleric", "wizard"],
		level : [0, 0],
		firstCol : 'atwill'
	}
};

RaceList["guide hobgoblin"] = {
    regExpSearch : /^(?=.*guide)(?=.*hobgoblin)/i,
    name : "Guide Hobgoblin",
    sortname : "Hobgoblin, Guide",
    source : ["KB:EE", 209],
    plural : "Guide Hobgoblins",
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20 }
    },
    languageProfs : ["Common", "Goblin"],
    vision : [["Darkvision", 60]],
    savetxt : {
        adv_vs : ["charmed"]
    },
    vision : [["Darkvision", 60]],
    skillstxt : "Choose two from History, Medicine, Performance, or Persuasion",
    age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh between 150 and 200 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
    weightMetric : " weigh between 70 and 90 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
    scores : [0, 0, 2, 0, 0, 0],
    scorestxt : "+2 Constitution, +1 Intelligence or Wisdom",
    trait : "Guide Hobgoblin (+2 Constitution, +1 Intelligence or Wisdom)\nLead By Example: Once per short or long rest if I fail an ability check, I gain a bonus to the roll equal to the number of allies I see with 30 feet up to a max of +5.",
    features : {
        "lead by example" : {
            name : "Lead by Example",
            minlevel : 1,
            recovery : "short rest",
            usages : 1,
        }
    }
};

RaceList["soldier hobgoblin"] = {
    regExpSearch : /^(?=.*soldier)(?=.*hobgoblin)/i,
    name : "Soldier Hobgoblin",
    sortname : "Hobgoblin, Soldier",
    source : ["KB:EE", 209],
    plural : "Soldier Hobgoblins",
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20 }
    },
    languageProfs : ["Common", "Goblin"],
    vision : [["Darkvision", 60]],
    savetxt : {
        adv_vs : ["charmed"]
    },
    skillstxt : "Choose two from Athletics, Intimidation, Perception, or Survival",
    age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh between 150 and 200 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
    weightMetric : " weigh between 70 and 90 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
    scores : [0, 0, 2, 0, 0, 0],
    scorestxt : "+2 Constitution, +1 Dexterity or Strength",
    trait : "Guide Hobgoblin (+2 Constitution, +1 Intelligence or Wisdom)\nThe Arts of War: Once per short or long rest if I fail a saving throw or miss an attack roll, I gain a bonus to the roll equal to the number of allies I see with 30 feet up to a max of +5.",
    features : {
        "the arts of war" : {
            name : "The Arts of War",
            minlevel : 1,
            recovery : "short rest",
            usages : 1,
        }
    }
};

RaceList["artisan goblin"] = {
    regExpSearch : /^(?=.*artisan)(?=.*goblin)/i,
    name : "Artisan Goblin",
    sortname : "Goblin, Artisan",
    plural : "Artisan Goblins",
    source : ["KB:EE", 211],
    size : 4,
    speed : {
        walk : { spd : 30, enc : 20 }
    },
    languageProfs : ["Common", "Goblin"],
    toolProfs : [["Artisan's Tools", 1]],
    vision : [["Darkvision", 60]],
    age : " rearch adulthood at age 8 and live up to 60 years",
	height : " are between 3 and a half and 4 feet tall (3'5\" + 2d4\")",
	weight : " weigh between 40 and 70 lb (35 + 2d4 \xD7 1 lb)",
	heightMetric : " are between 100 and 120 cm tall (100 + 5d4 cm)",
	weightMetric : " weigh between 20 and 30 kg (17 + 5d4 \xD7 2 / 10 kg)",
    scores : [0, 2, 0, 2, 0, 0],
    scorestxt : "+2 Dexterity, +2 Intelligence",
    trait : "Artisan Goblin (+2 Dexterity, +2 Intelligence)\nNaturally Stealthy: I can attempt to hide even when I am obscured only by a creature that is at least one size larger than me.\nBasic Training: I have proficiency in one artisan tool of my choice."
};

RaceList["khesh'dar goblin"] = {
    regExpSearch : /^(?=.*artisan)(?=.*goblin)/i,
    name : "Artisan Goblin",
    sortname : "Goblin, Artisan",
    plural : "Artisan Goblins",
    source : ["KB:EE", 211],
    size : 4,
    speed : {
        walk : { spd : 30, enc : 20 }
    },
    languageProfs : ["Common", "Goblin"],
    toolProfs : [["Artisan's Tools", 1]],
    vision : [["Darkvision", 60]],
    age : " rearch adulthood at age 8 and live up to 60 years",
	height : " are between 3 and a half and 4 feet tall (3'5\" + 2d4\")",
	weight : " weigh between 40 and 70 lb (35 + 2d4 \xD7 1 lb)",
	heightMetric : " are between 100 and 120 cm tall (100 + 5d4 cm)",
	weightMetric : " weigh between 20 and 30 kg (17 + 5d4 \xD7 2 / 10 kg)",
    scores : [0, 2, 0, 2, 0, 0],
    scorestxt : "+2 Dexterity, +2 Intelligence",
    trait : "Artisan Goblin (+2 Dexterity, +2 Intelligence)\nNaturally Stealthy: I can attempt to hide even when I am obscured only by a creature that is at least one size larger than me.\nThe Silent Arts: I am proficient in stealth. I add double my proficiency bonus for any ability checks I make using that skill."
};

RaceList["dhakaani bugbear"] = {
    regExpSearch : /^(?=.*dhakaani)(?=.*bugbear)/i,
    name : "Dhakaani Bugbear",
    sortname : "Bugbear, Dhakaani",
    plural : "Dhakaani Bugbears",
    source : ["KB:EE", 211],
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20 }
    },
    languageProfs : ["Common", "Goblin"],
    vision : [["Darkvision", 60]],
    savetxt : {
        adv_vs : ["frightened"]
    },
    age : " rearch adulthood at age 16 and live up to 80 years",
	height : " are between 6 and 8 feet tall (6'0\" + 2d12\")",
	weight : " weigh between 250 and 350 lb (200 + 2d12 \xD7 2d6 lb)",
	heightMetric : " are between 1,9 and 2,4 metres tall (185 + 5d12 cm)",
    weightMetric : " weigh between 115 and 160 kg (90 + 5d12 \xD7 4d6 / 10 kg)",
    scores : [2, 0, 0, 0, 0, 0],
    carryingCapacity : 2,
    scorestxt : "+2 Strength, +1 Dexterity or Constitution",
    trait : "Dhakaani Bugbear (+2 Strength, +1 Dexterity or Constituion)\nPowerful Build: I count as one size larger for my carrying capacity, push, drag, and lift.\nLong-limbed: When I make a melee attack on my turn, your reach for it is 5 feet greater than normal.\nStand by the Strong: When an ally within 30 feet I can see fails a saving throw against being frightened, I can use my reaction to allow it to reroll the save."
};

RaceList["znir gnoll"] = {
    regExpSearch : /^(?=.*znir)(?=.*gnoll)/i,
    name : "Znir Gnoll",
    sortname : "Znir Gnoll",
    plural : "Znir Gnolls",
    source : ["KB:EE", 211],
    size : 3,
    speed : {
        walk : { spd: 30, enc : 20 }
    },
    languageProfs : ["Gnoll", "Goblin or Common"],
    age : "Znir Gnolls reach adulthood by the age of 5 and live up to 30 years.",
    height : "Znir Gnolls generally stand around 7 to 8 feet in height",
    weight : "Znir Gnolls weigh between 250 and 320 lbs.",
    skillstxt : "Choose from one of the following : Perception, Stealth, or Survival",
    scores : [0, 0, 1, 0, 0, 0],
    weaponAdd : ["gnoll-bite"],
    scorestxt : "+2 Strength or Dexterity, +1 Constitution",
    traits : "Znir Gnoll (+2 Strength or Dexterity, +1 Constitution)\nBite: I can bite for 1d6 piercing damage instead of using unarmed strikes.\nRampage: As a bonus action when I reduce a creature to 0 HP with a melee attack on my turn, I can move up to half my speed and make a bite attack.",
    features : {
        "rampage" : {
			name : "Rampage",
			minlevel : 1,
            action : ["bonus action",""]
        }
    }
};
WeaponsList["gnoll-bite"] = {
    regExpSearch : /gnoll bite/i,
    name : "Gnoll Bite",
    source : ["KB:EE", 212],
    ability : 1,
    type : "Natural",
    damage : [1, 4, "piercing"],
    range : "Melee",
    list : "melee",
    isAlwaysProf : true,
    abilitytodamage : true
};

AddRacialVariant("scourge aasimar", "fernian aasimar", {
    regExpSearch : /^(?=.*fernian)(?=.*aasimar)/i,
    name : "Fernian Aasimar",
    source : ["KB:EE", 209],
    plural : "Fernian Aasimar",
    dmgres : ["Necrotic", "Fire"],
    trait : "Fernian Aasimar (+2 Charisma, +1 Constitution)\nHealing Hands: As an action, once per long rest, I can touch to heal for my level in HP.\nShroud of Flames: When I use Radiant Consumption, I deal fire damage instead of radiant damage.\nSpirit of Fire: I know the Produce Flames cantrip. Charisma is my spellcasting ability for it.",
    spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Spirit of Fire",
		spells : ["produce flames"],
		selection : ["produce flames"],
		firstCol : 'atwill'
	},
	features : {
		"healing hands" : {
			name : "Healing Hands",
			usages : 1,
			minlevel : 1,
			recovery : "long rest",
			additional : levels.map(function (n) { return n + " HP"; }),
			action : ["action", ""]
		},
		"radiant consumption (shroud of flames)" : {
			name : "Radiant Consumption (Shroud of Flames)",
			usages : 1,
			minlevel : 3,
			recovery : "long rest",
			additional : levels.map(function (n) {
				if (n < 3) return ""
				return  Math.ceil(n/2) + "/" + n + " damage";
			}),
			action : [["action", " (start)"], ['bonus action', ' (end)']]
		}
	}
});

AddRacialVariant("fallen aasimar", "mabaran aasimar", {
    regExpSearch : /^(?=.*mabaran)(?=.*aasimar)/i,
    name : "Mabaran Aasimar",
    source : ["KB:EE", 209],
    plural : "Mabaran Aasimar",
    trait : "Mabaran Aasimar (+2 Charisma, +1 Constitution)\nConsuming Touch: Once per long rest as an action, I make a melee spell attack against a creature I can touch. The target takes necrotic damage equal to my level and I regain hit points equal to half the damage dealt (rounded up). Charisma is my spellcasting ability for this trait.\nHerald of Doom: I know the Toll The Dead cantrip. Charisma is my spellcasting modifier for this spell.",
    spellcastingAbility : 6,
    spellcastingBonus : {
		name : "Herald of Doom",
		spells : ["toll the dead-xgte"],
		selection : ["toll the dead-xgte"],
		firstCol : 'atwill'
	},
	features : {
		"consuming touch" : {
            name : "Consuming Touch",
            minlevel : 1,
            additional : levels.map(function (n) {
                if (n < 3 ) return ""
                return n + " damage;" + Math.ceil(n/2) + "/" + n + " hp"
            })
        }
	}
});

FeatsList["changeling metamorphosis"] = {

};

FeatsList["focused persona"] = {
    
};

FeatsList["aereni halflife"] = {
    
};

FeatsList["quori bond"] = {
    
};

FeatsList["thoughtsinger"] = {

};

FeatsList["superior shifting"] = {

};

FeatsList["envoy specialist"] = {

};

FeatsList["juggernaut plating"] = {

};

BackgroundList["changeling traveler"] = {
    regExpSearch : /changeling traveler/i,
    name : "Changeling Traveler",
    source :["KB:EE", 205],
    skills : ["Deception", "Insight"],
    gold : 5,
    equipleft : [
        ["shiftweave garment", 1, ""],
        ["one trinket of special significance", 1, ""]
    ],
    equipright : [
        ["Belt Pouch (with coins)", 1, 1],
    ],
    feature : "The Right Face For The Job",
    trait : [
        "I love people and seek the stories of each stranger I meet.",
        "I embrace all beliefs, trying a new religion every few days.",
        "I feel obliged to humiliate arrogant and entitled people.",
        "Whenever I come to a new place, I collect local rumors and spread gossip.",
        "I thrive on change and hate standing still.",
        "I don’t just want to defeat my enemies; I want to make them look foolish.",
        "I’m always looking for weaknesses in others to exploit.",
        "I love uncovering secrets, whether arcane lore or mere gossip."
    ],
    ideal : [
        ["Freedom", 
            "Freedom: I go wherever I please and don’t let rules or laws limit my actions. (Chaotic)"
        ],
        ["Survival", 
            "Survival: I will do whatever it takes to ensure the survival and prosperity of myself and the people I care about. (Neutral)"
        ],
        ["Empathy",
            "Empathy: I try to understand everyone that I meet, to imagine what it would be like to live their lives. (Good)"
        ],
        ["Change",
            "Change: We should challenge every tradition and always strive for innovation. (Chaotic)"
        ],
        ["Predator",
            "Predator: Anyone I can deceive deserves their fate. (Evil)",
        ],
        ["Knowledge",
            "Knowledge: Secrets are the only currency that matters. (Any)",
        ]
    ],
    bond : [
        "Someone died saving my life, but they live on through me as one of my personas.",
        "I’ve inherited the persona of a great folk hero, but I’m afraid I can’t live up to their reputation.",
        "I’ve inherited a persona that’s become known as an infamous villain, and I’m determined to redeem the identity.",
        "My family was betrayed by a rival changeling clan, and I’m determined to avenge them.",
        "I joined a criminal gang to learn useful skills, then abandoned the identity; I still care about my old comrades, but I’m afraid to go back.",
        "I embarrassed a powerful noble I once served; their hired thugs are looking for me, but someone I love is still in their employ."
    ],
    flaw : [
        "I don’t really understand the concept of “personal property.",
        "I consider a good story to be more important than the truth, and I’ll always add a little flair.",
        "I’m suspicious of everyone and everything.",
        "I live in the moment and never plan for the future.",
        "If someone wrongs me, I won’t rest until I’ve taken revenge.",
        "It’s difficult for me to be honest, even with my closest friends."
    ],
    extra : [
        "Select A Changeling Persona",
        "Traveling merchant",
        "Charismatic outlaw",
        "Itinerant tinker",
        "Wandering priest",
        "Investigative reporter",
        "Bounty hunter",
        "Grim mercenary",
        "Beloved storyteller"
    ],
    toolProfs : [["Thieves' Tools", "Dex"]],
    languageProfs : ["Skin Cant"],
};

BackgroundFeatureList["the right face for the job"] = {
    description : "With DM approval, my personas are well-established in a community. I can gain modest food and lodging and access to local gossip if I play my role. I can ask members of my Changeling Clan about information or help if it doesn't put them at risk. I am expected to help with a reasonable request from a clan member.",
    source : ["KB:EE", 206]
};

BackgroundFeatureList["goblinoid hospitality"] = {
    description : "I can find a place to hide, rest, or recuperate in any sizable community of goblins. They’ll shield me from the law or anyone else searching for me, though they won’t risk their lives for me.",
    source : ["KB:EE", 207]
};

BackgroundFeatureList["uul dhakaan"] = {
    description : "I have a connection to the Uul Dhakaan, the dream of the Dhakaani Empire. I am more likely than most to remember my dreams, and I may have a mentor who offers me guidance. Whenever I take a long rest, there’s a chance I’ll receive a vision, a mission, or a clue about my current situation.",
    source : ["KB:EE", 207]
};

BackgroundList["malenti"] = {
    regExpSearch : /malenti/i,
    name : "Malenti",
    source : ["KB:EE", 207],
    skills : ["Deception", "Insight"],
    gold : 30,
    equipright : [
        ["A Seashell", 1, ""],
        ["Traveler's Clothes", 1, 4]
    ],
    feature : "Stolen Identity",
    trait : [
        "I love to eat and I’m always eager to try new forms of food and drink.",
        "I express many concepts using aquatic metaphors.",
        "I won’t indulge weakness, especially in myself.",
        "When it comes to romance, I’m a fish out of water.",
        "I’m insatiably curious and always asking questions.",
        "I love the water and never pass up a chance for a swim.",
        "I’m always taking notes on the people I meet and things I see.",
        "I consider the people of Khorvaire to be primitive barbarians. Even though I’m one of them. Really."
    ],
    ideal : [
        ["Victory", 
            "Victory: I’ll use any means necessary to defeat my enemy. (Neutral to Evil)"
        ],
        ["The Mission", 
            "The Mission: My mission means more to me than my friends or my life. (Lawful)"
        ],
        ["Strength",
            "Strength: Life is a struggle, and only the strong will survive. I must be strong. (Any)"
        ],
        ["Commitment",
            "Commitment: Once I commit to a task, I always see it through. (Lawful)"
        ],
        ["Knowledge",
            "Knowledge: I’ve given up my previous life to gain information for my people. (Neutral)",
        ],
        ["Victim's Ideals",
            "Victim's Ideals: I find myself drawn to the ideals of my victim, which could include strange ideas of honor or compassion. (Any)",
        ]
    ],
    bond : [
        "I need to learn as much as possible about the nations and cultures of the surface.",
        "I’m supposed to protect and observe one of the other player characters, but I don’t know why.",
        "I’m searching for information on one of the fiendish overlords and fighting its agents.",
        "I want to study all ancient surface civilizations, like the giants, demons, and goblins.",
        "I want to study the magical capabilities of the Five Nations and to investigate the Mourning.",
        "I’m interested in manifest zones and planar exploration."
    ],
    flaw : [
        "I don’t understand the concepts of charity or mercy.",
        "I have trouble expressing gentle emotions.",
        "I view everyone as a possible enemy and am always considering ways to defeat them.",
        "I often need to help my victim’s family or friends.",
        "I feel torn between my loyalty to the Dominion and the values of my victim.",
        "I’ve inherited the consequences of my victim’s terrible mistakes."
    ],
    extra : [
        "Choose a Tour of Duty",
        "I replaced my victim in their youth, and have a well-established relationship with family and friends.",
        "I replaced my victim during the Last War, and may have fought in some of the battles myself.",
        "My victim was lost at sea years ago and presumed dead; I have only just “miraculously” returned.",
        "My victim’s parents or siblings also been replaced by malenti, and are serving as spies in a major city.",
        "I replaced my victim only a month ago, as they returned from a trip to Stormreach.",
        "I replaced my victim a year ago, but the circumstances were difficult and some of my old acquaintances are still suspicious."
    ],
    toolProfs : [["Thieves’ tools, poisoner’s kit, or forgery kit", 1]],
    languageProfs : ["Sahuagin"]
};

BackgroundFeatureList["stolen identity"] = {
    description : "I assume the background memories of the dryskin I impersonated. I gain one of the following background features: By Popular Demand (entertainer), Criminal Contact(criminal), Military Rank(soldier), Position of Privilage(noble), or Shelter of the Faithful(priest). I can't change this feature once I choose it and people expect me to act like the background.",
    source : ["KB:EE", 207]
};

BackgroundFeatureList["aquatic adaption"] = {
    description : "If I am a Malenti, my assumed form has no particular reputation or influence. But you were magebred to operate both above and below the water, and possess the ability to breathe underwater. This is granted by gills set along my ribs, which are clearly not normal for my apparent species. If my torso is exposed, this will certainly draw attention",
    source : ["KB:EE", 207]
};

MagicItemsList["battle rod"] = {
    name : "Battle Rod",
    source : ["KB:EE", 221],
    type : "rod",
    rarity : "common",
    description : "This serves as my spellcasting focus. When I wield it with 2 hands, the range for my cantrip doubles but all attack rolls past the original range have disadv. All saving throws against the cantrip past the first range made by a target have adv.",
    descriptionFull : "The battle rod was developed as an alternative to the longer war staff, and has gained popularity with wandslingers across Khorvaire. The battle rod serves as a spellcasting focus and can be used by any spellcaster who can use a rod as a focus. When held in two hands, you can use the rod to cast cantrips at up to twice the standard range. However, when you cast a cantrip beyond the standard range, your attack rolls have disadvantage, and other creatures have advantage on any saving throws made against your cantrip. So a fire bolt cast using a battle rod has a range of 240 feet, but attack rolls against targets more than 120 feet away are made at disadvantage.",
    prereqeval : function(v) { return v.isSpellcaster; }
};
MagicItemsList["charlatan's gloves"] = {

};
MagicItemsList["drybrooch"] = {

};
MagicItemsList["duster"] = {

};
MagicItemsList["fortify defense"] = {

};
MagicItemsList["integrated tool"] = {

};
MagicItemsList["lamplighter"] = {

};
MagicItemsList["spark"] = {

};
MagicItemsList["talking wand"] = {

};
MagicItemsList["thurimbar rod"] = {

};
