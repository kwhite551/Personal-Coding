/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Race
	Effect:		This script adds a player race, called the "Wolf Ferra" and it's subraces and variants for each subrace
				This is taken from my personal world anvil on Kesia (https://www.worldanvil.com/w/kesia-seneschal-the-world-builder/a/neko-article)
				This race is made by myself and Perry
	Code by:	Seneschal
	Date:		2019-09-26 (sheet v13.0.0beta19)
*/

var iFileName = "Wolf Ferra [Created by Perry, transcribed by Seneschal].js";
RequiredSheetVersion(13);

SourceList["P:WF"] = { //Object name; This is the way the source is called upon, so the way you would enter it as the "Source" in any other of the JavaScript Syntax. Note that this is case sensitive! //Also note that this has to be an unique value. Look at the default sources in the "Complete SourceList.js" file
	name : "Perry's Wolf Ferra", //Required; The name of the source as written in full. This will be used in the tooltips/mouseover text.
	abbreviation : "P:WF", //Required; The abbreviation of the source. This can only be letters and a colon! This will be used to refer to the source in the form fields //Note that this doesn't have to be the same as the way the source is called upon, but it can be for convenience
	group : "Friendly Bunch Homebrew", //Optional; Adding this will make the sheet put the source into a group when using the "Sources" function where you can include/exclude sources. // The default options for this are "Unearthed Arcana", "Official Sources", "Official Sources (small)", and "default". // If you enter "default", the source can't be excluded using the "Sources" function
	date : "2019/09/24", //Optional; the date of the resource, written as year/month/day
}

//Create Wolf Ferra Object
RaceList["wolfFerra"] = {
	regExpSearch : /^(?=.*wolf)(?=.*ferra).*$/i,
	name : "Wolf Ferra",
	sortname : "Ferra, Wolf",
	source : [["P:WN", 0]],
	plural : "Wolf Ferra",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		climb : { spd : 10, enc : 0 }
	},
	languageProfs : ["Common", "Wolfspeak"],
	weaponsAdd : ["Wolf Ferra's Bite", "Wolf Ferra's Claws"],
	vision : [["Superior Darkvision", 120],["Wolf Tails and Ears: Advantage on Wisdom (Perception) sound rolls", ""],["Wolf Eyes: Advantage on Wisdom (Perception) sight rolls", ""]],
	savetxt : {
		text : ["Athletics", "Proficient when sprinting"]
	},
	skills : ["Perception"],
	age : " mature physically and mentally by 10 years and live up to 350 years.",
	height : " range from under 5 to 6 feet tall (4'8\" + 2d6\")",
	weight : " weigh around 108 lb (90 + 2d6 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to 1,8 meters tall (148 + 5d8 cm)",
	weightMetric : " weight around 48 kg ( 40 + 5d8 \xD7 2d4 / 10 kg)",
	improvements : "Wolf Ferra: +2 Strength, +1 Charisma",
	scores : [2, 0, 0, 0, 0, 1],
	trait : "Wolf Ferra (+2 Strength, +1 Charisma)\n Canine Claws and Teeth: Access to bite and claw attacks and climbing speed.\n" 
	+ "Wolf Tails and Ears: Advantage on sound Wisdom (Perception) checks. Proficient in Athletics when sprinting. Advantage on Dexterity Saving throws against going prone.\n"
	+ "Wolf Eyes: You have advantage on Wisdom (Perception) rolls that rely on sight.\n"
	+ "Pack Tactics: Advantage on enemies who are within 5 feet of a conscious ally. Disadvantage on Wisdom (Survival) when tracking 2 or more Wolf Ferra and Wisdom (Perception) when trying to see 3 or more."
}

//Wolf Ferra Weapons
	WeaponsList["wolf ferra bite"] = {
	regExpSearch : /^(?=.*wolf ferra)(?=.*\bbites?\b).*$/i,
	name : "Wolf Ferra's Bite",
	source : ["P:WN", 0],
	ability : 1,
	type : "Natural",
	damage : [1, 4, "piercing"],
	range : "Melee",
	description : "On successful hit, roll grapple check. On success, enemy is knocked prone",
	abilitytodamage : true,
};
WeaponsList["wolf ferra claws"] = {
	regExpSearch : /^(?=.*wolf ferra)(?=.*\bclaws?\b).*$/i,
	name : "Wolf Ferra's Claws",
	source : ["P:WN", 0],
	ability : 1,
	type : "Natural",
	damage : [1, 4, "slashing"],
	range : "Melee",
	description : "",
	abilitytodamage : true,
	monkweapon : true
};