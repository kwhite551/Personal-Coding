/*	-WHAT IS THIS?-
	The script featured here is an explanation of how to make your own custom addition to MPMB's D&D 5e Character Tools.
	To add your own content to the Character Sheet, use the syntax below and save it in a file. You can then import this file directly to the sheet using the "Import" button and "Import/Export" bookmark.
	There you can either import the file as a whole or just copy the text into a dialogue.

	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, either by importing consecutive files or pasting the scripts into the dialogue.
	It is recommended to enter the code in a freshly downloaded or reset sheet before adding any other information so that there won't be any conflicts.
*/

/*	-INFORMATION-
	Subject:	(sub)race
	Effect:		This is the syntax for adding a new (sub)race to the sheet.
				Note that you will need to define a race using this syntax once for every sub-race (i.e. there is a separate entry for High Elf, Wood Elf, and Dark Elf)
				You will use this for a race that doesn't have a subrace, like Dragonborn and also for a subrace of a race, like Hill Dwarf and Mountain Dwarf.
				You do not make a separate entry for the parent of a subrace. So there is no Dwarf or Elf entry!
				For races that have variants, like the human, you can define a variant using the RaceSubList. Any variant defined like that will only be selectable through the "Racial Options" button
	Sheet:		v13.00.00 (2018-??-??) [identical to v12.999 syntax, except v12.999 uses 'borrow' for the burrow speed]
*/

var iFileName = "Lupin [Created by Seneschal, Transcribed by Seneschal].js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

//Creating Source for Lupin
SourceList["S:L"] = { //Object name; This is the way the source is called upon, so the way you would enter it as the "Source" in any other of the JavaScript Syntax. Note that this is case sensitive! //Also note that this has to be an unique value. Look at the default sources in the "Complete SourceList.js" file
	name : "Seneschal: Lupin", //Required; The name of the source as written in full. This will be used in the tooltips/mouseover text.
	abbreviation : "S:L", //Required; The abbreviation of the source. This can only be letters and a colon! This will be used to refer to the source in the form fields //Note that this doesn't have to be the same as the way the source is called upon, but it can be for convenience
	group : "Friendly Bunch Homebrew", //Optional; Adding this will make the sheet put the source into a group when using the "Sources" function where you can include/exclude sources. // The default options for this are "Unearthed Arcana", "Official Sources", "Official Sources (small)", and "default". // If you enter "default", the source can't be excluded using the "Sources" function
	date : "2019/09/24", //Optional; the date of the resource, written as year/month/day
}

//Lupin Race
RaceList["lupin"] = { //Object name; Note the use of only lower case! Also note the absence of the word "var" and the use of brackets []
	regExpSearch : /lupin/i,
	name : "Lupin",
	source : ["S:L", 0],
	size : 3,
	speed : {
		walk : { spd : 35, enc : 25 }
	},
	languageProfs : ["Common", "Lupin", 1],
	weaponsAdd : ["Lupin's Bite", "Lupin's Claws"],
	vision : [["Darkvision,", 60]],
	dmgres : ["Cold"],
	skills : ["Perception"],
	age : "Lupin mature by their late teens and live to around 200 years.",
	height : "Lupin range from 5 to over 6 feet tall (5'4\" + 2d8\")",
	weight : "Lupin weigh around 138 lb (120 + 2d8 \xD7 1d4 lb)",
	heightMetric : "Lupin range from 1,5 to 1,8 metres tall (162 + 5d8 cm)",
	weightMetric : "Lupin weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	scorestxt : "+2 Wisdom and +1 Constitution",
	improvement : "Lupin: +2 Wisdom, +1 Constitution;",
	scores : [0, 0, 1, 0, 2, 0],
	trait : "Lupin (+2 Wisdom and +1 Constitution)\n Nature's Weapons: I am proficient with my claws and bite. My claws deal 1d6 slashing damage and my bite deals 1d6 piercing damage.\n Digitigrade: As part of my movement, I can get on all fours, increasing my current movement speed by 10 feet.\n Lupin Hearing: I am proficient in Perception and have advantage on all checks that require hearing and smell.",
};

//Lupin Weapons
WeaponsList["lupin bite"] = {
	regExpSearch : /^(?=.*lupin)(?=.*\bbites?\b).*$/i,
	name : "Lupin's Bite",
	source : ["S:L", 0],
	ability : 1,
	type : "Natural",
	damage : [1, 6, "piercing"],
	range : "Melee",
	description : "",
	abilitytodamage : true,
};
WeaponsList["lupin claws"] = {
	regExpSearch : /^(?=.*lupin)(?=.*\bclaws?\b).*$/i,
	name : "Lupin's Claws",
	source : ["S:L", 0],
	ability : 1,
	type : "Natural",
	damage : [1, 6, "slashing"],
	range : "Melee",
	description : "",
	abilitytodamage : true,
	monkweapon : true
};