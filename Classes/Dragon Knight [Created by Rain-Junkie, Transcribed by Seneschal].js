var iFileName = "Dragon Knight [Created by u/Rain-Junkie, Transcribed by Seneschal].js";
RequiredSheetVersion(13);

SourceList["RJ:DK"] = {
    name : "Rain-Junkie: Dragon Knight",
    abbreviation : "RJ:DK",
    group : "Reddit/r/UnearthedArcana",
    url : "https://www.gmbinder.com/share/-MDGLhlVkBJmWQ9ZNgPN",
    date : "2020/09/27"
};

ClassList["dragonKnight"] = {
    regExpSearch : /^(?=.*dragon)(?=.*knight).*$/i,
    name : "Dragon Knight",
    source : ["RJ:DK", 0],
    primaryAbility : "Strength or Dexterity and Constitution or Charisma",
    prereqs : "Strength and Charisma 13",
    die : 10,
    improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    saves : ["Con", "Cha"],
    skillstxt : {
        primary : "Choose two from Arcana, Athletics, Deception, Intimidation, Perception and Persuasion"
    },
    armorProfs : {
        primary : [true, true, true, true],
        secondary : [true, true, false, true]
    },
    weaponProfs : {
        primary : [true, true, []],
        secondary : [true, true, []]
    },
    equipment : "Dragon Knight starting equipment" +
    "\n \u2022 A martial weapon and shield  -or- two martial weapons" +
    "\n \u2022 Chain mail -or- scale mail -or- leather armor" +
    "\n \u2022 A light crossbow and 20 bolts -or- five javelins" +
    "\n \u2022 A dungeoneer's pack -or- an explorer's pack",
    subclasses : ["Dragon Knight Practice", []],
    attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    features : {
        "dragon covenant" : {
            name : "Dragon Covenant",
            source : ["RJ:DK", 4],
            minlevel : 1,
            description : desc([
                "Choose a Dragon Covenant using the \"Choose Features\" button "
            ]),
            languageProfs : ["Draconic"],
            actions : ["action", ""],
            choices : ["Black", "Blue", "Brass", "Bronze", "Copper", "Gold", "Green", "Red", "Silver", "White"],
            "black" : {
                name : "Black Dragon Covenant",
                description : desc([
                    "I have a covenant with a Black Dragon that serves as my companion",
                    "Select \"Dragon Companion\" on a companion page for its stats",
                    "If I die, my dragon companion dies in a number of hours equal to my Dragon Knight level",
                    "If my Dragon Companion dies, I use 25 gp worth of precious gems and 8 hours to revive it",
                    "I expend a number of hit dice equal to half my Dragon Knight level to perform this ritual",
                    "As an action, I can create sensory effects similar to the prestidigitation spell"
                ]),
                dmgres : ["Acid"]
            },
            "blue" : {
                name : "Blue Dragon Covenant",
                description : desc([
                    "I have a covenant with a Blue Dragon that serves as my companion",
                    "Select \"Dragon Companion\" on a companion page for its stats",
                    "If I die, my dragon companion dies in a number of hours equal to my Dragon Knight level",
                    "If my Dragon Companion dies, I use 25 gp worth of precious gems and 8 hours to revive it",
                    "I expend a number of hit dice equal to half my Dragon Knight level to perform this ritual",
                    "As an action, I can create sensory effects similar to the prestidigitation spell"
                ]),
                dmgres : ["Lightning"]
            },
            "brass" : {
                name : "Brass Dragon Covenant",
                description : desc([
                    "I have a covenant with a Brass Dragon that serves as my companion",
                    "Select \"Dragon Companion\" on a companion page for its stats",
                    "If I die, my dragon companion dies in a number of hours equal to my Dragon Knight level",
                    "If my Dragon Companion dies, I use 25 gp worth of precious gems and 8 hours to revive it",
                    "I expend a number of hit dice equal to half my Dragon Knight level to perform this ritual",
                    "As an action, I can create sensory effects similar to the prestidigitation spell"
                ]),
                dmgres : ["Fire"]
            },
            "bronze" : {
                name : "Bronze Dragon Covenant",
                description : desc([
                    "I have a covenant with a Bronze Dragon that serves as my companion",
                    "Select \"Dragon Companion\" on a companion page for its stats",
                    "If I die, my dragon companion dies in a number of hours equal to my Dragon Knight level",
                    "If my Dragon Companion dies, I use 25 gp worth of precious gems and 8 hours to revive it",
                    "I expend a number of hit dice equal to half my Dragon Knight level to perform this ritual",
                    "As an action, I can create sensory effects similar to the prestidigitation spell"
                ]),
                dmgres : ["Lightning"]
            },
            "copper" : {
                name : "Copper Dragon Covenant",
                description : desc([
                    "I have a covenant with a Copper Dragon that serves as my companion",
                    "Select \"Dragon Companion\" on a companion page for its stats",
                    "If I die, my dragon companion dies in a number of hours equal to my Dragon Knight level",
                    "If my Dragon Companion dies, I use 25 gp worth of precious gems and 8 hours to revive it",
                    "I expend a number of hit dice equal to half my Dragon Knight level to perform this ritual",
                    "As an action, I can create sensory effects similar to the prestidigitation spell"
                ]),
                dmgres : ["Acid"]
            },
            "gold" : {
                name : "Gold Dragon Covenant",
                description : desc([
                    "I have a covenant with a Gold Dragon that serves as my companion",
                    "Select \"Dragon Companion\" on a companion page for its stats",
                    "If I die, my dragon companion dies in a number of hours equal to my Dragon Knight level",
                    "If my Dragon Companion dies, I use 25 gp worth of precious gems and 8 hours to revive it",
                    "I expend a number of hit dice equal to half my Dragon Knight level to perform this ritual",
                    "As an action, I can create sensory effects similar to the prestidigitation spell"
                ]),
                dmgres : ["Fire"]
            },
            "green" : {
                name : "Green Dragon Covenant",
                description : desc([
                    "I have a covenant with a Green Dragon that serves as my companion",
                    "Select \"Dragon Companion\" on a companion page for its stats",
                    "If I die, my dragon companion dies in a number of hours equal to my Dragon Knight level",
                    "If my Dragon Companion dies, I use 25 gp worth of precious gems and 8 hours to revive it",
                    "I expend a number of hit dice equal to half my Dragon Knight level to perform this ritual",
                    "As an action, I can create sensory effects similar to the prestidigitation spell"
                ]),
                dmgres : ["Poison"]
            },
            "red" : {
                name : "Red Dragon Covenant",
                description : desc([
                    "I have a covenant with a Red Dragon that serves as my companion",
                    "Select \"Dragon Companion\" on a companion page for its stats",
                    "If I die, my dragon companion dies in a number of hours equal to my Dragon Knight level",
                    "If my Dragon Companion dies, I use 25 gp worth of precious gems and 8 hours to revive it",
                    "I expend a number of hit dice equal to half my Dragon Knight level to perform this ritual",
                    "As an action, I can create sensory effects similar to the prestidigitation spell"
                ]),
                dmgres : ["Fire"]
            },
            "silver" : {
                name : "Silver Dragon Covenant",
                description : desc([
                    "I have a covenant with a Silver Dragon that serves as my companion",
                    "Select \"Dragon Companion\" on a companion page for its stats",
                    "If I die, my dragon companion dies in a number of hours equal to my Dragon Knight level",
                    "If my Dragon Companion dies, I use 25 gp worth of precious gems and 8 hours to revive it",
                    "I expend a number of hit dice equal to half my Dragon Knight level to perform this ritual"
                ]),
                dmgres : ["Cold"]
            },
            "white" : {
                name : "White Dragon Covenant",
                description : desc([
                    "I have a covenant with a White Dragon that serves as my companion",
                    "Select \"Dragon Companion\" on a companion page for its stats",
                    "If I die, my dragon companion dies in a number of hours equal to my Dragon Knight level",
                    "If my Dragon Companion dies, I use 25 gp worth of precious gems and 8 hours to revive it",
                    "I expend a number of hit dice equal to half my Dragon Knight level to perform this ritual",
                    "As an action, I can create sensory effects similar to the prestidigitation spell"
                ]),
                dmgres : ["Cold"]
            }
        },
        "companion's bond" : {
            name : "Companion's Bond",
            source : ["RJ:DK", 4],
            minlevel : 1,
            description : desc([
                "My dragon obeys my commands as best it can or acts on its own if I am absent or incapacitated",
                "It shares my initiative if I am present or rolls its own otherwise",
                "My dragon can't take the Attack action and can't be used as a mount or fly with grappled creatures",
                "My dragon has my Dragon Knight level for spells such as \"polymorph\" or \"true polymorph\"",
                "See \"Dragon Companion\" on a companion page for further details",
            ])
        },
        "fighting style" : {
			name : "Fighting Style",
			source : ["RJ:DK", 5],
			minlevel : 2,
			description : desc([
                "Choose a Fighting Style using the \"Choose Feature\" button above",
            ]),
			choices : ["Archery", "Dueling", "Great Weapon Fighting", "Two-Weapon Fighting"],
			"archery" : FightingStyles.archery,
			"dueling" : FightingStyles.dueling,
			"great weapon fighting" : FightingStyles.great_weapon,
			"two-weapon fighting" : FightingStyles.two_weapon
        },
        "" : {

        }
    }
};

CreatureList["dragonCompanion"] = {
    name : "Dragon Companion",
    source : ["RJ:DK", 11],
    size : 3,
    type : "dragon",
    subtype : "",
    alignment : "Same as Dragon Knight",
    ac : 15,
    hp : 9,
    hd : [1, 10],
    speed : "20 ft, fly 30 ft",
    scores : [14, 8, 16, 10, 12, 14],
    saves : ["Con", "Cha"],
    skills : {
        "perception" : 5,
        "stealth" : 1
    },
    damage_immunities : "the Dragon Knight's chosen Element",
    senses : "Darkvision 60 ft",
    languages : "Draconic",
    challengeRating : "",
    proficiencyBonus : 2,
    attacksAction : 1,
    attacks : [{
        name : "Claw",
        ability : 1,
        damage : [1, 4, "slashing"],
        range : "Melee (5 ft)",
        modifiers : [4, "", "Str"],
    }],
    features : [{
        name : "Companion's Bond",
        description : "My dragon uses my proficiency bonus instead of its own and has an AC equal to 10 + Constituion modifier + my proficiency when not wearing barding"
    },
    {
        name : "Death Saves",
        description : "My dragon companion makes death saving throws when it reaches 0 hit points"
    },
    {
        name : "Ability Score Improvement",
        description : "My dragon companion receives Ability Score Improvements up to a max of 20 at the same level I do in Dragon Knight but cannot take feats"
    }],
    traits : [{
        name : "Companion's Bond - Proficiencies",
        description : "My dragon companion is proficient in two skills of my choice and is proficient with my saving throws"
    },
    {
        name : "Companion's Bond - Bond",
        description : "My dragon companion shares my ideal and alignment and has the bond: \"I will protect my knight; I will do the best I can for my knight; I will die for my knight.\""
    },
    {
        name : "Companion's Bond - Telepathy",
        description : "My dragon companion and I  always know the direction to one another, and can communicate with vague images, emotions, and feelings, regardless of distance"
    }],
    eval : function(prefix) {
		var HPmaxFld = tDoc.getField(prefix + "Comp.Use.HP.Max");
		HPmaxFld.setAction("Calculate", "event.value = (classes.known.dragonKnight : classes.totallevel) + Number(What('" + prefix + "Comp.Use.Ability.Con.Mod'));");
        tDoc.getField(prefix + "Comp.Use.HD.Level").setAction("Calculate", "event.value = classes.known.dragonKnight : 1;");
		Hide(prefix + "Buttons.Comp.Use.HP.Max");
		var ProfFld = tDoc.getField(prefix + "Comp.Use.Proficiency Bonus");
		ProfFld.setAction("Calculate", "event.value = Number(How('Proficiency Bonus'));");
		ProfFld.calcOrderIndex = tDoc.getField(prefix + "Comp.Use.Attack.1.To Hit").calcOrderIndex - 1;
	},
	removeeval : function(prefix) {
		if (prefix) {
            var HPmaxFld = tDoc.getField(prefix + "Comp.Use.HP.Max");
            tDoc.getField(prefix + "Comp.Use.HD.Level").setAction("Calculate", "");
			HPmaxFld.setAction("Calculate", "1");
			DontPrint(prefix + "Buttons.Comp.Use.HP.Max");
			var ProfFld = tDoc.getField(prefix + "Comp.Use.Proficiency Bonus");
			ProfFld.setAction("Calculate", "1");
		}
	}
};

// Functions for the Shadowmasters' companion
dragonKnight_companion_functions = {
	add : function(slvl) {
		if (slvl < 2) return;
		var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
		var prefix = false;
		if (AScompA) {
			for (var a = 1; a < AScompA.length; a++) {
				if (!What(AScompA[a] + 'Comp.Race')) {
					prefix = AScompA[a];
					break;
				}
			}
		}
		if (!prefix) prefix = DoTemplate('AScomp', 'Add');
		Value(prefix + 'Comp.Race', 'Dragon Companion');
		Uneditable(prefix + 'Comp.Race');
		var theType = tDoc.getField(prefix + 'Comp.Type');
		theType.readonly = true;
		if (!typePF) theType.textSize = 0;
		theType.value = 'Dragon Com' + (typePF ? "p." : ".");
		var theCompSetting = How(prefix + "Comp.Use.HP.Max").split(",");
		theCompSetting[3] = "fixed";
		tDoc.getField(prefix + "Comp.Use.HP.Max").submitName = theCompSetting.join();
		Value(prefix + "Comp.Desc.Alignment", What("Alignment"));
		AddString(prefix + 'Comp.Use.Features', What(prefix + 'Comp.Use.Traits'), true);
		Value(prefix + 'Comp.Use.Traits', '');
		Value(prefix + 'Cnote.Left', "Dragon Companion (Dragon Knight, RJ:DK 5):" +
			"\n\u2022 I have a dragon companion that I have a covenant with and it gains features based off the type of dragon" +
			"\n\u2022 If it dies, I use 25 gp gems per dragon Knight level, 8 hours, and half my Dragon Knight hit dice to revive it" +
			"\n\u2022 My companion uses my Proficiency Bonus instead of its own and also adds it to AC " +
			"\n\u2022 My companion gains a Hit Dice for every Dragon knight level I gain after 1st" +
			"\n\u2022 My companion can divide 2 points among its ability scores (to max 20) whenever I gain an ASI" +
			"\n\u2022 My companion is proficient in two skills and two saving throws of my choice" +
			"\n\u2022 My companion obeys my commands as best it can, or act on its own if I can't command it" +
			"\n\u2022 My companion rolls for initiative and takes actions as normal when I absent or incapacitated" +
		);
		// Now go to the companion page and show a pop-up explaining what's happening
		tDoc.getField(prefix + "Comp.Desc.Name").setFocus();
		if (IsNotReset && IsNotImport) {
			app.alert({
				cMsg : "The Dragon Companion has been added to the companion page\n\n" + toUni("Pick Two Skills and its Saving Throws") + "\nThe Shadow Companion gains proficiency with two skills and my saving throws. Because there is no automation for selecting these proficiencies, please do so manually.\n\n" + toUni("Ability Score Improvements") + "\nThe Dragon Companion gains Ability Score Improvements whenever your character gains them. There is no automation for adding these either, so please don't forget to increase the ability scores for the dragon companion when you get the reminder pop-up that the number of ASIs has changed.\nThe 'Notes' section on the companion page automatically keeps track of how many points you can increase the ability scores and what the base value of those scores are.",
				nIcon : 3,
				cTitle : "Don't forget the Skills, Saving Throws, and Ability Score Improvements!"
			})
		}
	},
	remove : function() {
		var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
		if (AScompA) {
			for (var a = 1; a < AScompA.length; a++) {
				if (What(AScompA[a] + 'Comp.Type').indexOf('Dragon Com') !== -1) {
					DoTemplate("AScomp", "Remove", AScompA[a]);
					return;
				}
			}
		}
	},
	update : function(oldLvl, newLvl) {
		if (newLvl < 2) return;
		// Get the prefix
		var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
		var prefix = false;
		if (AScompA) {
			for (var a = 1; a < AScompA.length; a++) {
				if (What(AScompA[a] + 'Comp.Type').indexOf('Dragon Com') !== -1) {
					prefix = AScompA[a];
					break;
				}
			}
		}
		if (!prefix) return;
		var thisCrea = CurrentCompRace[prefix] && CurrentCompRace[prefix].typeFound === "creature" ? CurrentCompRace[prefix] : false;
		if (!thisCrea) return;

		var theNotes = function (input) {
			var toReturn = "It acts as if it cast the spell, but it can use my modifiers for any attack rolls the spell requires";
			toReturn += input < 6 ? "" : "\n\u2022 As an action, my companion can use Frenzy, Whirlwind, Veil, or Threaten\n   It can do this a number of times per short rest equal to my Intelligence modifier";
			toReturn += input < 10 ? "" : "\n\u2022 My companion becomes a greater elemental, growing large in size and its HD increases to 1d10\n   Additionally, its speed becomes 40 ft and its touch attacks deal 2d6 damage";
			toReturn += input < 14 ? "" : "\n\u2022 My companion can, as an action, manifest or dismiss wings that give it a 60 ft fly speed";
			toReturn += input < 18 ? "" : "\n\u2022 My companion can, as an action once per short rest, use its breath weapon";
			return What("Unit System") === "imperial" ? toReturn : ConvertToMetric(toReturn, 0.5);
		}

		// Update the stats
		var profB = Number(How('Proficiency Bonus'));
		Value(prefix + 'Comp.Use.Proficiency Bonus', profB);
		Value(prefix + 'Comp.Use.AC', 10 + What(prefix + "Comp.Use.Ability.Con.Mod") + profB);

		// Add the HD
		Value(prefix + "Comp.Use.HD.Level", thisCrea.hd[0] + newLvl);

		if (oldLvl < 10 && newLvl >= 10) { // Update to Greater Shadow Elemental
			Value(prefix + "Comp.Use.HD.Die", 10);
			Value(prefix + "Comp.Use.Speed", What("Unit System") === "imperial" ? "40 ft" : ConvertToMetric("40 ft", 0.5));
			for (var i = 1; i <= 3; i++) {
				if ((/touch/i).test(What(prefix + "Comp.Use.Attack." + i + ".Weapon"))) {
					var theFld = prefix + "BlueText.Comp.Use.Attack." + i + ".Damage Die";
					var theDmgDie = What(theFld);
					Value(theFld, theDmgDie.replace(/1d6/i, "2d6"));
					break;
				}
			}
			PickDropdown(prefix + "Comp.Desc.Size", 2);
		} else if (oldLvl >= 10 && newLvl < 10) { // Remove the Greater Shadow Elemental
			Value(prefix + "Comp.Use.HD.Die", 6);
			Value(prefix + "Comp.Use.Speed", What("Unit System") === "imperial" ? thisCrea.speed : ConvertToMetric(thisCrea.speed, 0.5));
			for (var i = 1; i <= 3; i++) {
				if ((/touch/i).test(What(prefix + "Comp.Use.Attack." + i + ".Weapon"))) {
					var theFld = prefix + "BlueText.Comp.Use.Attack." + i + ".Damage Die";
					var theDmgDie = What(theFld);
					Value(theFld, theDmgDie.replace(/2d6/i, "1d6"));
					break;
				}
			}
			PickDropdown(prefix + "Comp.Desc.Size", thisCrea.size);
		}

		// Update the notes section
		//remove the old ASI line (if any)
		var ASIregex = /whenever I gain an ASI\r.*Currently.+(scores|Cha\))/;
		if ((ASIregex).test(What(prefix + "Cnote.Left"))) {
			ReplaceString(prefix + "Cnote.Left", "whenever I gain an ASI", false, "whenever I gain an ASI\\r.*Currently.+(scores|Cha\\))", true);
		}
		// calc new ASI
		var ASIs = 0;
		for (var aClass in classes.known) {
			var classLvL = Math.min(CurrentClasses[aClass].improvements.length, classes.known[aClass].level);
			ASIs += 2 * CurrentClasses[aClass].improvements[classLvL - 1];
		}
		var ASIstring = function (aCreat) {
			var toReturn = "whenever I gain an ASI\r   Currently, there are " + ASIs + " points ";
			toReturn += aCreat && aCreat.scores ? "(default: " + aCreat.scores[0] + " Str, " + aCreat.scores[1] + " Dex, " + aCreat.scores[2] + " Con, " + aCreat.scores[3] + " Int, " + aCreat.scores[4] + " Wis, " + aCreat.scores[5] + " Cha)" : "to divide among the ability scores";
			return toReturn;
		}
		var oldLvlText = theNotes(oldLvl);
		var newLvlText = theNotes(newLvl);
		if (oldLvlText !== newLvlText) ReplaceString(prefix + "Cnote.Left", newLvlText, false, oldLvlText);
		var creaASI = ASIstring(thisCrea);
		ReplaceString(prefix + "Cnote.Left", creaASI, false, "whenever I gain an ASI");

		// Update the features
		var feature6 = "\u25C6 Combat Prowess: As an action, the shadow companion can use one of the following abilities. These can be used a number of times equal to the shadowcaster's Int mod per short rest." +
		"\n \u2022 Frenzy: make two touch attacks against a single target." +
		"\n \u2022 Whirlwind: make a touch attack against each creature within 5 ft." +
		"\n \u2022 Veil: hide in an area of darkness so it is invisible, can't be hit by attacks or spells, but can no longer see outside of the darkness. If the area is replaced with bright light, the shadow companion takes 6d6 radiant damage." +
		"\n \u2022 Threaten: a creature within 30 ft must make a Wis save (shadowcaster's spell save DC) or be scared of the companion. For 1 minute, the target has disadv. on attacks not directed at the companion. At the end of each of its turns, the target can save again. Frighten effect.";
		feature6 = What("Unit System") === "imperial" ? feature6 : ConvertToMetric(feature6, 0.5);
		if (oldLvl < 6 && newLvl >= 6) {
			AddString(prefix + "Comp.Use.Traits", feature6, true);
		} else if (oldLvl >= 6 && newLvl < 6) {
			RemoveString(prefix + "Comp.Use.Traits", feature6, true);
		}

		// Update the traits
		var spd = What("Unit System") === "imperial" ? "60 ft" : "20 m";
		var trait14 = "\u25C6 Dark Wings: As an action, the shadow companion can manifest or dismiss a pair of wings that give it flying speed of " + spd + ".";
		var flySpd = (typePF ? "\n" : ", ") + "fly " + spd;
		if (oldLvl < 14 && newLvl >= 14) {
			AddString(prefix + "Comp.Use.Features", trait14, true);
			AddString(prefix + "Comp.Use.Speed", flySpd, false);
		} else if (oldLvl >= 14 && newLvl < 14) {
			RemoveString(prefix + "Comp.Use.Features", trait14, true);
			RemoveString(prefix + "Comp.Use.Speed", flySpd);
		}

		// Update the attacks
		if (oldLvl < 18 && newLvl >= 18) {
			for (var i = 1; i <= 3; i++) {
				if (!What(prefix + "Comp.Use.Attack." + i + ".Weapon")) {
					Value(prefix + "Comp.Use.Attack." + i + ".Weapon Selection", "Shadow Breath Weapon");
					break;
				}
			}
		} else if (oldLvl >= 18 && newLvl < 18) {
			for (var i = 1; i <= 3; i++) {
				if ((/^(?=.*shadow)(?=.*breath)(?=.*weapon).*$/i).test(What(prefix + "Comp.Use.Attack." + i + ".Weapon"))) {
					Value(prefix + "Comp.Use.Attack." + i + ".Weapon Selection", "");
				}
			}
		}
	}
};