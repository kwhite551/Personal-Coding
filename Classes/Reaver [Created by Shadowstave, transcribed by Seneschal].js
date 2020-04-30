/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This script adds a class called "Reaver" and it's Blood Mage subclass
				This class is made by Shadowstave and can be found here: https://docs.google.com/document/d/1IacaXgxGdpSy-nbjpkvrMp5aroZQ-pMCRTtaZgZMmho/edit
	Code by:	Seneschal
	Date:		2019-09-28 (sheet v13.0.0beta19)
*/

var iFileName = "Reaver [Created by Shadowstave, transcribed by Seneschal].js";
RequiredSheetVersion(13.);

SourceList["SS:R"] = {
	name : "Shadowstave: Reaver",
	abbreviation : "SS:R",
	group: "Friendly Bunch Homebrew",
	url : "https://docs.google.com/document/d/1IacaXgxGdpSy-nbjpkvrMp5aroZQ-pMCRTtaZgZMmho/edit",
	date : "2019/09/28"
}

ClassList["reaver"] = {
	regExpSearch : /reaver/i,
	name : "Reaver",
	source : ["SS:R", 0],
	primaryAbility : "Constitution",
	prereqs : "",
	die : 12,
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves : ["Dex", "Int"],
	skillstxt : {
		primary : "Choose three from Acrobatics, History, Perception, Survival, Intimidation, Arcana, Insight"
	},
	subclasses : ["Blood Variation", []],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	armorProfs : {
		primary : [false, false, false, false],
		secondary : [false, false, false, false]
	},
	weaponProfs : {
		primary : [true, true],
		secondary : [true, true]
	},
	toolProfs : {
			primary : ["Alchemist's Tools"],
			secondary : ["Alcehmist's Tools"]
		},
	equipment : "Reaver Starting equpiment:" +
	"\n \u2022 Any combination of two simple weapons or martial weapons;" +
		"\n \u2022 Blood Warrior's Clothes -or- Blood Warrior's robes;" +
		"\n \u2022 Ritual knife, Alchemist's Tools, Explorer's Pack;",
	features : {
		"unarmored defense" : {
				name : "Unarmored Defense",
				source : [["SRD", 8], ["P", 48], ["SS:R", 2]],
				minlevel : 1,
				description : "\n   " + "Without armor, my AC is 10 + Dexterity modifier + Constitution modifier",
				addarmor : "Unarmored Defense (Con)"
		},
		"potion making" : {
			name : "Potion Making",
			source : ["SS:R", 2],
			minlevel : 1,
			description : "\n   " + "Any potion made by spending hit points is made in 30 minutes"
		},
		"subclassfeature1" : {
			"Blood Variation" : {
				name : "Blood Variation",
				source : ["SS:R", 2],
				minlevel : 1,
				description : "\n   " + "Choose a Blood Variation you strive to emulate and put it in the \"Class\" field" + "\n   " + "Choose either Blood Alcehmist or Blood Mage"
			}
		},
		"blood arts" : {
			name : "Blood Arts",
			source : ["SS:R", 2],
			minlevel : 2,
			description : "\n   " + "You gain a number of blood arts die. They increase in die size and amounts at specific levels." +
			"\n   " + "Use the \choose features\ button to select your Blood Arts.",
			additional : ["", "2d4", "2d4", "2d4", "3d6", "3d6", "4d8", "4d8", "5d10", "5d10", "5d10", "6d12", "6d12", "6d12", "7d20", "7d20", "7d20", "8d20", "8d20", "8d20"],
			extraname : "Blood Arts",
			extrachoices : ["blood strike", "reinforcement of blood"],
			"blood strike" : {
				name : "Blood Strike",
				source : ["SS:R", 8],
				description : "\n   " + "As a bonus action, roll your Blood Arts die and take damage equal to the result."
				+ "\n   " + "You then make a ranged magical attack on an enemy within 90 feet with your intelligence as the modifier."
				+ "\n   " + "On a success, they take force damage equal to double the number rolled on your Blood Arts die."
				+ "\n   " + "At 17th level, this damage increases to triple the number rolled on your Blood Arts die."
			},
			"reinforcement of blood" : {
				name : "Reinforcement of Blood",
				source : ["SS:R", 8],
				description : "\n   " + "As a bonus action, I roll my Blood Arts die and take damage equal to the result. " +
				"\n   " + "Gain Temporary Hit Points equal to double the number rolled on your Blood Arts die. This lasts for 1 minute."
			}
		},
		"Pain as Fuel" : {
			name : "Pain as Fuel",
			source : ["SS:R", 2],
			minlevel : 3,
			description : "\n   " + "At increments of 3/4 max health, 1/2 max health, and 1/4 max health, I gain" +
			"\n   " + "an extra damage die that does not stack with the other die.",
			additional : ["", "", "1d4;1d6;1d8", "1d4;1d6;1d8", "1d4;1d6;1d8", "1d4;1d6;1d8", "1d4;1d6;1d8", "1d4;1d6;1d8", "1d4;1d6;1d8", "1d4;1d6;1d8", "1d4;1d6;1d8", "1d4;1d6;1d8", "1d6;1d8;1d10", "1d6;1d8;1d10", "1d6;1d8;1d10", "1d6;1d8;1d10", "1d8;1d10;1d12", "1d8;1d10;1d12", "1d8;1d10;1d12", "1d8;1d10;1d12"]
		},
		"Strength of Body" : {
			name : "Strength of Body",
			source : ["SS:R", 2],
			minlevel : 5,
			description : "\n   " + "I gain proficiency in Constitution saving throws",
			saves : ["Con"]
		},
		"Another's Blood" : {
			name : "Another's Blood",
			source : ["SS:R", 3],
			minlevel : 6,
			description : "\n   " + "Create a potion with a creature's blood to do one of the following:" +
			"\n   \u2022   " + "Track the creature" +
			"\n   \u2022   " + "Disguise yourself as the creature" +
			"\n   \u2022   " + "Inflict a curse as described in inflict curse" +
			"\n   " + "In addition, I can make health potions with my own blood" +
			"\n   " + "These potions restore 2d6 hit poitions" +
			"\n   " + "At 12th level, I can take an extra 1d6 damage to create a 3d6 greater health potion" +
			"\n   " + "At 17th level, this increases to 2d6 if I make a 4d6 superior health potion" +
			"\n   " + "This ability can only be used once per long rest and any potion left is inert as well."
		},
		"Pain Resistance" : {
			name : "Pain Resistance",
			source : ["SS:R", 3],
			minlevel : 9,
			description : "\n   " + "My Constitution increases by 2 and my maximum increases to 22",
			scores : [0, 0, 2, 0, 0, 0],
			scoresMaximum : [0, 0, 22, 0, 0, 0]
		}
	}
}

AddSubClass("reaver", "blood mage", {
	regExpSearch : /blood mage/i,
	subname : "Blood Mage",
	fullname : "Reaver (Blood Mage)",
	source : ["SS:R", 4],
	abilitySave : 4,
	spellcastingFactor : 1,
	spellcastingKnown : {
		cantrips : [4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
		spells : [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15, 15]
	},
	spellcastingList : {
		class : "any",
		level : [0,9],
		spells : ["fire bolt", "blade ward", "message", "toll the dead", "thunderclap", "ray of frost", "produce flame", "minor illusion", "mold earth", "create bonfire", "control flames", "chill touch", "shape water", "prestidigitation", "absorb elements", "chromatic orb", "chaos bolt", "detect magic", "detect poison and disease", "disguise self", "earth tremor", "ice knife", "purify food and drink", "shield", "thunderwave", "witch bolt", "alarm", "create or destroy water", "compelled duel", "find familiar", "magic missile", "identify", "bane", "inflict wounds", "sleep", "silent image", "hex", "hellish rebuke", "comprehend languages", "blur", "barkskin", "continual flame", "dragon's breath", "earthbind", "flaming sphere", "heat metal", "gust of wind", "invisibility", "magic weapon", "mind spike", "misty step", "scorching ray", "darkness", "protection from poison", "shatter", "cloud of daggers", "aganazzar's scorcher", "alter self", "calm emotions", "blink", "counterspell", "dispel magic", "fireball", "protection from energy", "call lightning", "lightning bolt", "magic circle", "nondetection", "thunderstep", "vampiric touch", "wall of water", "wind wall", "water breathing", "water walk", "remove curse", "slow", "major image", "haste", "fire shield", "wall of fire", "blight", "control water", "water sphere", "vitrolic sphere", "greater invisibilty", "ice storm", "locate creature", "stone shape", "stoneskin", "storm sphere", "cone of cold", "far step", "immolation", "maelstorm", "wall of stone", "wall of force", "telekinesis", "enervation", "control winds", "cloudkill", "legend lore", "scrying", "mislead", "teleportation circle", "transmute rock", "chain lightning", "flesh to stone", "investiture of fire", "investiture of ice", "investiture of stone", "investiture of wind", "wall of ice", "primordial ward", "wind walk", "fire storm", "simulacrum", "whirlwind", "delayed blast fireball", "finger of death", "teleport", "prismatic spray", "forcecage", "earthquake", "antimagic field", "abi-dalzim's horrid wilting", "incendiary cloud", "clone", "wish", "meteor swarm", "storm of vengeance", "invulnerability", "weird"]
	},
	features : {
		"subclassfeature1" : {
			name : "Blood Magic",
			source : ["SS:R", 4],
			minlevel : 1,
			description : "\n   " + "I can cast blood mage cantrips/spells that I know, using intelligence as my spellcasting modifier" +
			"\n   " + "I use my ritual knife as my spellcasting focus" +
			"\n   " + "I can only cast spells if I deal damage equal to the requirement" + 
			"\n   \u2022   " + "1st level spells cost 5 hp" +
			"\n   \u2022   " + "2nd level spells cost 10 hp" +
			"\n   \u2022   " + "3rd level spells cost 15 hp" +
			"\n   \u2022   " + "4th level spells cost 20 hp" +
			"\n   \u2022   " + "5th level spells cost 25 hp" +
			"\n   \u2022   " + "6th level spells cost 30 hp" +
			"\n   \u2022   " + "7th level spells cost 35 hp" +
			"\n   \u2022   " + "8th level spells cost 40 hp" +
			"\n   \u2022   " + "9th level spells cost 50 hp" +
			"\n   " + "I can spend 5 more hp on a spell to increase it in level to a max of 6th level" +
			"\n   " + "For 6th level spells and above, I can't increase the spell level except by one level" +
			"\n   " + "If I spend 30 hp or more in 3 hours, I roll a Con save equal to 20 - my prof modifier" +
			"\n   " + "If I succeed, I cast the spell as normal. If I fail, the spell fails and I take the damage" +
			"\n   " + "This limit is reset every 3 hours or when I finish a short or long rest." +
			"\n   " + "At 9th level, it increases to 40 and at 15th level, it increases to 50" +
			"\n   " + "You can expend temporary hit points and they do not count toward the total" +
			"\n   " + "When you are healed, the threshold is increased by the number of hp you heal",
			additional : ["4 cantrips \u0026 2 spells known", "4 cantrips \u0026 3 spells known", "4 cantrips \u0026 4 spells known", "5 cantrips \u0026 5 spells known", "5 cantrips \u0026 6 spells known", "5 cantrips \u0026 7 spells known", "5 cantrips \u0026 8 spells known", "5 cantrips \u0026 9 spells known", "5 cantrips \u0026 10 spells known", "6 cantrips \u0026 11 spells known", "6 cantrips \u0026 12 spells known", "6 cantrips \u0026 12 spells known", "6 cantrips \u0026 13 spells known", "6 cantrips \u0026 13 spells known", "6 cantrips \u0026 14 spells known", "6 cantrips \u0026 14 spells known", "6 cantrips \u0026 15 spells known", "6 cantrips \u0026 15 spells known", "6 cantrips \u0026 15 spells known", "6 cantrips \u0026 15 spells known"]
		},
		"subclassfeature3" : {
			name : "Spell Leech",
			source : ["SS:R", 4],
			minlevel : 3,
			description : "\n   " + "I gain temporary hit points when I reduce an enemy to 0 hitpoints with a spell" +
			"\n   " + "The number of temp hp is equal to 12 + my Con modifier and it lasts for 1 minute"
		},
		"subclassfeature7" : {
			name : "blood repair",
			source : ["SS:R", 5],
			minlevel : 7,
			description : "\n   " + "I can create a potion to cast a single spell without spending hp" +
			"\n   " + "I take damage equal to the spell maximum I want to cast if it is lower than 6th level" +
			"\n   " + "It can only be done once per long rest and the potion is rendered inert afterward",
			usage : 1,
			recovery : "long rest"
		},
	}
});