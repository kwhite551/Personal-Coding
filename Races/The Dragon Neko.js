/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Race
	Effect:		This script adds a player race, called the "Dragon Neko" and it's subraces and variants for each subrace
				This is taken from my personal world anvil on Kesia (https://www.worldanvil.com/w/kesia-seneschal-the-world-builder/a/neko-article)
				This race is made by myself and Perry
	Code by:	Seneschal
	Date:		2019-09-26 (sheet v13.0.0beta19)
*/

SourceList["P:DN"] = { //Object name; This is the way the source is called upon, so the way you would enter it as the "Source" in any other of the JavaScript Syntax. Note that this is case sensitive! //Also note that this has to be an unique value. Look at the default sources in the "Complete SourceList.js" file
	name : "Perry: Dragon Neko", //Required; The name of the source as written in full. This will be used in the tooltips/mouseover text.
	abbreviation : "P:DN", //Required; The abbreviation of the source. This can only be letters and a colon! This will be used to refer to the source in the form fields //Note that this doesn't have to be the same as the way the source is called upon, but it can be for convenience
	group : "Friendly Bunch Homebrew", //Optional; Adding this will make the sheet put the source into a group when using the "Sources" function where you can include/exclude sources. // The default options for this are "Unearthed Arcana", "Official Sources", "Official Sources (small)", and "default". // If you enter "default", the source can't be excluded using the "Sources" function
	date : "2019/09/26", //Optional; the date of the resource, written as year/month/day
}

var iFileName = "Dragon Neko [Created by Perry, transcribed by Seneschal].js";
RequiredSheetVersion(13);

//Create Feral Dragon Neko Object
RaceList["feral dragon neko"] = {
	regExpSearch : /^(?=.*feral)(?=.*dragon)(?=.*neko).*$/i,
	name : "Feral Dragon Neko",
	sortname : "Neko, Feral Dragon",
	source : [["P:DN", 0]],
	plural : "Feral Dragon Neko",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		fly : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Draconic"],
	weaponsAdd : ["Breath Weapon"],
	weaponOptions : {
		regExpSearch : /^(?=.*draconic)(?=.*tail).*$/i,
		name : "Draconic Tail",
		source : [["P:DN", 0]],
		ability : 1,
		type : "natural",
		damage : [1, 6, "bludgeoning"],
		range : "Melee",
		description : "Str save, failure - knocked prone",
		ablitytodamage : true,
		dc : true
	},
	vision : [["Greater Dragon Tracking: Advantage on Wisdom (Perception) and Wisdom (Survival) checks that rely on smell", ""]],
	age : " mature physically and mentally by their late teens and live up to 200 years.",
	height : " range from under 5 to 6 feet tall (4'8\" + 2d6\")",
	weight : " weigh around 108 lb (90 + 2d6 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to 1,8 meters tall (148 + 5d8 cm)",
	weightMetric : " weight around 48 kg ( 40 + 5d8 \xD7 2d4 / 10 kg)",
	scores : [1, 0, 1, 0, 0, 1],
	trait : "Feral Dragon Neko\nDraconic Ancestry: Choose one type of dragon using the \"Racial Options\" button. I gain a breath weapon and damage resistance as determined by the dragon type chosen.\nBreath Weapon: As an action once per short rest, exhale destructive energy as an action with a size, shape, save, and damage type as found in the table.\nDraconic Wings: Thanks to your draconic nature, you have two draconic wings sprouting from your back. You have a flying speed of 30 feet while you aren't wearing heavy armor. \nDraconic Tail: A draconic tail sprouts from the base of your spine. As an action, you can use it as a strength melee attack dealing 1d6 bludgeoning damage to one creature if it hits. On a hit, the creature must roll a Strength saving throw and are knocked prone on a failure. \nAnimalistic Survival. The draconic blood in you is stronger than your fellow Dragon Nekos. You have advantage on Constitution saving throws against poison and disease and resistance to poison damage. \nGreater Dragon Tracking. Thanks to your closer connection to dragons, your sense of smell is stronger as well. You have advantage on Wisdom (Survival) and Wisdom (Perception) checks using your sense of smell.",
	features : {
		"draconic ancestry" : {
			name : "Draconic Ancestry",
			limfeaname : "Breath Weapon",
			minlevel : 1,
			usages : 1,
			additional : levels.map(function (n) {
				return (n < 6 ? 2 : n < 11 ? 3 : n < 16 ? 4 : 5) + 'd6';
			}),
			recovery : "short rest",
			action : ["action", ""],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.theWea.dbBreathWeapon && CurrentRace.known === 'feral dragon neko' && CurrentRace.variant) {
							fields.Damage_Type = CurrentRace.dmgres[0];
							fields.Description = fields.Description.replace(/(dex|con) save/i, ((/cold|poison/i).test(CurrentRace.dmgres[0]) ? 'Con' : 'Dex') + ' save');
							fields.Range = (/black|blue|brass|bronze|copper/i).test(CurrentRace.variant) ? '5-ft \u00D7 30-ft line' : '15-ft cone';
						};
					}
				]
			}
		}
	},
	abilitySave : 1,
	variants : []
}

//Create Servant Dragon Neko Object
RaceList["servant dragon neko"] = {
	regExpSearch : /^(?=.*servant)(?=.*dragon)(?=.*neko).*$/i,
	name : "Servant Dragon Neko",
	sortname : "Neko, Servant Dragon",
	source : [["P:DN", 0]],
	plural : "Servant Dragon Neko",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		fly : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Draconic"],
	weaponsAdd : ["Breath Weapon"],
	weaponOptions : {
		regExpSearch : /^(?=.*draconic)(?=.*tail).*$/i,
		name : "Draconic Tail",
		source : [["P:DN", 0]],
		ability : 1,
		type : "natural",
		damage : [1, 6, "bludgeoning"],
		range : "Melee",
		description : "Str save, failure - knocked prone",
		ablitytodamage : true,
		dc : true
	},
	age : " mature physically and mentally by their late teens and live up to 200 years.",
	height : " range from under 5 to 6 feet tall (4'8\" + 2d6\")",
	weight : " weigh around 108 lb (90 + 2d6 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to 1,8 meters tall (148 + 5d8 cm)",
	weightMetric : " weight around 48 kg ( 40 + 5d8 \xD7 2d4 / 10 kg)",
	scores : [1, 0, 1, 0, 0, 1],
	trait : "Servant Dragon Neko\nDraconic Ancestry: Choose one type of dragon using the \"Racial Options\" button. I gain a breath weapon and damage resistance as determined by the dragon type chosen.\nBreath Weapon: As an action once per short rest, exhale destructive energy as an action with a size, shape, save, and damage type as found in the table.\nDraconic Wings: Thanks to your draconic nature, you have two draconic wings sprouting from your back. You have a flying speed of 30 feet while you aren't wearing heavy armor. \nDraconic Tail: A draconic tail sprouts from the base of your spine. As an action, you can use it as a strength melee attack dealing 1d6 bludgeoning damage to one creature if it hits. On a hit, the creature must roll a Strength saving throw and are knocked prone on a failure. \nVersaltity: Your subrace was the main one enslaved and made servants of the draconic slaves. Due to this experience of servitude, you are proficient in 1 language, skill, or tool of your choice.",
	skillstxt : "Pick one language, skill, or tool of your choice",
	features : {
		"draconic ancestry" : {
			name : "Draconic Ancestry",
			limfeaname : "Breath Weapon",
			minlevel : 1,
			usages : 1,
			additional : levels.map(function (n) {
				return (n < 6 ? 2 : n < 11 ? 3 : n < 16 ? 4 : 5) + 'd6';
			}),
			recovery : "short rest",
			action : ["action", ""],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.theWea.dbBreathWeapon && CurrentRace.known === 'servant dragon neko' && CurrentRace.variant) {
							fields.Damage_Type = CurrentRace.dmgres[0];
							fields.Description = fields.Description.replace(/(dex|con) save/i, ((/cold|poison/i).test(CurrentRace.dmgres[0]) ? 'Con' : 'Dex') + ' save');
							fields.Range = (/black|blue|brass|bronze|copper/i).test(CurrentRace.variant) ? '5-ft \u00D7 30-ft line' : '15-ft cone';
						};
					}
				]
			}
		}
	},
	abilitySave : 1,
	variants : []
}

//Create Warrior Dragon Neko Object
RaceList["warrior dragon neko"] = {
	regExpSearch : /^(?=.*warrior)(?=.*dragon)(?=.*neko).*$/i,
	name : "Warrior Dragon Neko",
	sortname : "Neko, Warrior Dragon",
	source : [["P:DN", 0]],
	plural : "Warrior Dragon Neko",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		fly : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Draconic"],
	weaponsAdd : ["Breath Weapon"],
	weaponOptions : {
		regExpSearch : /^(?=.*draconic)(?=.*tail).*$/i,
		name : "Draconic Tail",
		source : [["P:DN", 0]],
		ability : 1,
		type : "natural",
		damage : [1, 6, "bludgeoning"],
		range : "Melee",
		description : "Str save, failure - knocked prone",
		ablitytodamage : true,
		dc : true
	},
	age : " mature physically and mentally by their late teens and live up to 200 years.",
	height : " range from under 5 to 6 feet tall (4'8\" + 2d6\")",
	weight : " weigh around 108 lb (90 + 2d6 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to 1,8 meters tall (148 + 5d8 cm)",
	weightMetric : " weight around 48 kg ( 40 + 5d8 \xD7 2d4 / 10 kg)",
	scores : [1, 0, 1, 0, 0, 1],
	trait : "Warrior Dragon Neko\nDraconic Ancestry: Choose one type of dragon using the \"Racial Options\" button. I gain a breath weapon and damage resistance as determined by the dragon type chosen.\nBreath Weapon: As an action once per short rest, exhale destructive energy as an action with a size, shape, save, and damage type as found in the table.\nDraconic Wings: Thanks to your draconic nature, you have two draconic wings sprouting from your back. You have a flying speed of 30 feet while you aren't wearing heavy armor. \nDraconic Hardiness: Your subrace was breed to be warriors and fight on the front lines. You were subjected to hard labor in the past and that awakened the draconic constitution you have. As an action, you can regain 2d6 Temporary Hit Points. After you use this ability, you cannot use it again until you finish a short or long rest.",
	features : {
		"draconic ancestry" : {
			name : "Draconic Ancestry",
			limfeaname : "Breath Weapon",
			minlevel : 1,
			usages : 1,
			additional : levels.map(function (n) {
				return (n < 6 ? 2 : n < 11 ? 3 : n < 16 ? 4 : 5) + 'd6';
			}),
			recovery : "short rest",
			action : ["action", ""],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.theWea.dbBreathWeapon && CurrentRace.known === 'warrior dragon neko' && CurrentRace.variant) {
							fields.Damage_Type = CurrentRace.dmgres[0];
							fields.Description = fields.Description.replace(/(dex|con) save/i, ((/cold|poison/i).test(CurrentRace.dmgres[0]) ? 'Con' : 'Dex') + ' save');
							fields.Range = (/black|blue|brass|bronze|copper/i).test(CurrentRace.variant) ? '5-ft \u00D7 30-ft line' : '15-ft cone';
						};
					}
				]
			}
		},
		"Draconic Hardiness" : {
			limfeaname : "Draconic Hardiness",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : ["action", ""]
		}
	},
	abilitySave : 1,
	variants : []
}

//Create Feral Dragon Neko Variants
AddRacialVariant("feral dragon neko", "black", {
		regExpSearch : /black/i,
		name : "Black feral dragon neko",
		plural : "Black feral dragon neko",
		source : [["P:DN", 0]],
		improvements : "+1 Strength, +1 Constitution, +1 Charisma",
		trait : "Black feral dragon neko (+1 Strength, +1 Constitution, +1 Charisma)"
		+ "\n" + "Draconic Wings: Thanks to your draconic nature, you have two draconic wings sprouting from your back. You have a flying speed of 30 feet while you aren't wearing heavy armor"
		+ "\n" + "Draconic Tail: A draconic tail sprouts from the base of your spine. As an action, you can use it as a strength melee attack dealing 1d6 bludgeoning damage to one creature if it hits. On a hit, the creature must roll a Strength saving throw and are knocked prone on a failure."
		+ "\n" + "Animalistic Survival: The draconic blood in you is stronger than your fellow Dragon Nekos. You have advantage on Constitution saving throws against poison and disease and resistance to poison damage."
		+ "\n" + "Greater Dragon Tracking: Thanks to your closer connection to dragons, your sense of smell is stronger as well. You have advantage on Wisdom (Survival) and Wisdom (Perception) checks using your sense of smell."
		+ "\n" + "Acid Breath Weapon:"
		+ "\n   " + "As a bonus action, I exhale destructive energy in a 5 ft by 30 ft line."
		+ "\n   " + "All in the area must make a Dex saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 acid damage, half as much damage on a successful save."
		+ "\n   " + "This damage increases with 1d6 at level 5, 11, and 17."
		+ "\n   " + "I can't use this feature again until I finish a long rest.",
		dmgres : ["Acid"]
});
AddRacialVariant("feral dragon neko" , "blue", {
		regExpSearch : /blue/i,
		name : "Blue feral dragon neko",
		plural : "Blue feral dragon neko",
		source : [["P:DN", 0]],
		improvements : "+1 Strength, +1 Constitution, +1 Charisma",
		trait : "Blue feral dragon neko (+1 Strength, +1 Constitution, +1 Charisma)"
		+ "\n" + "Draconic Wings: Thanks to your draconic nature, you have two draconic wings sprouting from your back. You have a flying speed of 30 feet while you aren't wearing heavy armor"
		+ "\n" + "Draconic Tail: A draconic tail sprouts from the base of your spine. As an action, you can use it as a strength melee attack dealing 1d6 bludgeoning damage to one creature if it hits. On a hit, the creature must roll a Strength saving throw and are knocked prone on a failure."
		+ "\n" + "Animalistic Survival: The draconic blood in you is stronger than your fellow Dragon Nekos. You have advantage on Constitution saving throws against poison and disease and resistance to poison damage."
		+ "\n" + "Greater Dragon Tracking: Thanks to your closer connection to dragons, your sense of smell is stronger as well. You have advantage on Wisdom (Survival) and Wisdom (Perception) checks using your sense of smell."
		+ "\n" + "Lightning Breath Weapon:"
		+ "\n   " + "As a bonus action, I exhale destructive energy in a 5 ft by 30 ft line."
		+ "\n   " + "All in the area must make a Dex saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 lightning damage, half as much damage on a successful save."
		+ "\n   " + "This damage increases with 1d6 at level 5, 11, and 17."
		+ "\n   " + "I can't use this feature again until I finish a long rest.",
		dmgres : ["Lightning"]
});
AddRacialVariant("feral dragon neko", "brass", {
		regExpSearch : /brass/i,
		name : "Brass feral dragon neko",
		plural : "Brass feral dragon neko",
		source : [["P:DN", 0]],
		improvements : "+1 Strength, +1 Constitution, +1 Charisma",
		trait : "Brass feral dragon neko (+1 Strength, +1 Constitution, +1 Charisma)"
		+ "\n" + "Draconic Wings: Thanks to your draconic nature, you have two draconic wings sprouting from your back. You have a flying speed of 30 feet while you aren't wearing heavy armor"
		+ "\n" + "Draconic Tail: A draconic tail sprouts from the base of your spine. As an action, you can use it as a strength melee attack dealing 1d6 bludgeoning damage to one creature if it hits. On a hit, the creature must roll a Strength saving throw and are knocked prone on a failure."
		+ "\n" + "Animalistic Survival: The draconic blood in you is stronger than your fellow Dragon Nekos. You have advantage on Constitution saving throws against poison and disease and resistance to poison damage."
		+ "\n" + "Greater Dragon Tracking: Thanks to your closer connection to dragons, your sense of smell is stronger as well. You have advantage on Wisdom (Survival) and Wisdom (Perception) checks using your sense of smell."
		+ "\n" + "Fire Breath Weapon:"
		+ "\n   " + "As a bonus action, I exhale destructive energy in a 5 ft by 30 ft line."
		+ "\n   " + "All in the area must make a Dex saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 fire damage, half as much damage on a successful save."
		+ "\n   " + "This damage increases with 1d6 at level 5, 11, and 17."
		+ "\n   " + "I can't use this feature again until I finish a long rest.",
		dmgres : ["Fire"]
});
AddRacialVariant("feral dragon neko", "bronze", {
		regExpSearch : /bronze/i,
		name : "Bronze feral dragon neko",
		plural : "Bronze feral dragon neko",
		source : [["P:DN", 0]],
		improvements : "+1 Strength, +1 Constitution, +1 Charisma",
		trait : "Bronze feral dragon neko (+1 Strength, +1 Constitution, +1 Charisma)"
		+ "\n" + "Draconic Wings: Thanks to your draconic nature, you have two draconic wings sprouting from your back. You have a flying speed of 30 feet while you aren't wearing heavy armor"
		+ "\n" + "Draconic Tail: A draconic tail sprouts from the base of your spine. As an action, you can use it as a strength melee attack dealing 1d6 bludgeoning damage to one creature if it hits. On a hit, the creature must roll a Strength saving throw and are knocked prone on a failure."
		+ "\n" + "Animalistic Survival: The draconic blood in you is stronger than your fellow Dragon Nekos. You have advantage on Constitution saving throws against poison and disease and resistance to poison damage."
		+ "\n" + "Greater Dragon Tracking: Thanks to your closer connection to dragons, your sense of smell is stronger as well. You have advantage on Wisdom (Survival) and Wisdom (Perception) checks using your sense of smell."
		+ "\n" + "Lightning Breath Weapon:"
		+ "\n   " + "As a bonus action, I exhale destructive energy in a 5 ft by 30 ft line."
		+ "\n   " + "All in the area must make a Dex saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 lightning damage, half as much damage on a successful save."
		+ "\n   " + "This damage increases with 1d6 at level 5, 11, and 17."
		+ "\n   " + "I can't use this feature again until I finish a long rest.",
		dmgres : ["Lightning"]
});
AddRacialVariant("feral dragon neko", "copper", {
		regExpSearch : /copper/i,
		name : "Copper feral dragon neko",
		plural : "Copper feral dragon neko",
		source : [["P:DN", 0]],
		improvements : "+1 Strength, +1 Constitution, +1 Charisma",
		trait : "Copper feral dragon neko (+1 Strength, +1 Constitution, +1 Charisma)"
		+ "\n" + "Draconic Wings: Thanks to your draconic nature, you have two draconic wings sprouting from your back. You have a flying speed of 30 feet while you aren't wearing heavy armor"
		+ "\n" + "Draconic Tail: A draconic tail sprouts from the base of your spine. As an action, you can use it as a strength melee attack dealing 1d6 bludgeoning damage to one creature if it hits. On a hit, the creature must roll a Strength saving throw and are knocked prone on a failure."
		+ "\n" + "Animalistic Survival: The draconic blood in you is stronger than your fellow Dragon Nekos. You have advantage on Constitution saving throws against poison and disease and resistance to poison damage."
		+ "\n" + "Greater Dragon Tracking: Thanks to your closer connection to dragons, your sense of smell is stronger as well. You have advantage on Wisdom (Survival) and Wisdom (Perception) checks using your sense of smell."
		+ "\n" + "Acid Breath Weapon:"
		+ "\n   " + "As a bonus action, I exhale destructive energy in a 5 ft by 30 ft line."
		+ "\n   " + "All in the area must make a Dex saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 acid damage, half as much damage on a successful save."
		+ "\n   " + "This damage increases with 1d6 at level 5, 11, and 17."
		+ "\n   " + "I can't use this feature again until I finish a long rest.",
		dmgres : ["Acid"]
});
AddRacialVariant("feral dragon neko", "gold", {
		regExpSearch : /gold/i,
		name : "Gold feral dragon neko",
		plural : "Gold feral dragon neko",
		source : [["P:DN", 0]],
		improvements : "+1 Strength, +1 Constitution, +1 Charisma",
		trait : "Gold feral dragon neko (+1 Strength, +1 Constitution, +1 Charisma)"
		+ "\n" + "Draconic Wings: Thanks to your draconic nature, you have two draconic wings sprouting from your back. You have a flying speed of 30 feet while you aren't wearing heavy armor"
		+ "\n" + "Draconic Tail: A draconic tail sprouts from the base of your spine. As an action, you can use it as a strength melee attack dealing 1d6 bludgeoning damage to one creature if it hits. On a hit, the creature must roll a Strength saving throw and are knocked prone on a failure."
		+ "\n" + "Animalistic Survival: The draconic blood in you is stronger than your fellow Dragon Nekos. You have advantage on Constitution saving throws against poison and disease and resistance to poison damage."
		+ "\n" + "Greater Dragon Tracking: Thanks to your closer connection to dragons, your sense of smell is stronger as well. You have advantage on Wisdom (Survival) and Wisdom (Perception) checks using your sense of smell."
		+ "\n" + "Fire Breath Weapon:"
		+ "\n   " + "As a bonus action, I exhale destructive energy in a 15 ft cone."
		+ "\n   " + "All in the area must make a Dex saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 fire damage, half as much damage on a successful save."
		+ "\n   " + "This damage increases with 1d6 at level 5, 11, and 17."
		+ "\n   " + "I can't use this feature again until I finish a long rest.",
		dmgres : ["Fire"]
});
AddRacialVariant("feral dragon neko", "green", {
		regExpSearch : /green/i,
		name : "Green feral dragon neko",
		plural : "Green feral dragon neko",
		source : [["P:DN", 0]],
		improvements : "+1 Strength, +1 Constitution, +1 Charisma",
		trait : "Green feral dragon neko (+1 Strength, +1 Constitution, +1 Charisma)"
		+ "\n" + "Draconic Wings: Thanks to your draconic nature, you have two draconic wings sprouting from your back. You have a flying speed of 30 feet while you aren't wearing heavy armor"
		+ "\n" + "Draconic Tail: A draconic tail sprouts from the base of your spine. As an action, you can use it as a strength melee attack dealing 1d6 bludgeoning damage to one creature if it hits. On a hit, the creature must roll a Strength saving throw and are knocked prone on a failure."
		+ "\n" + "Animalistic Survival: The draconic blood in you is stronger than your fellow Dragon Nekos. You have advantage on Constitution saving throws against poison and disease and resistance to poison damage."
		+ "\n" + "Greater Dragon Tracking: Thanks to your closer connection to dragons, your sense of smell is stronger as well. You have advantage on Wisdom (Survival) and Wisdom (Perception) checks using your sense of smell."
		+ "\n" + "Poison Breath Weapon:"
		+ "\n   " + "As a bonus action, I exhale destructive energy in a 15 ft cone."
		+ "\n   " + "All in the area must make a Con saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 poison damage, half as much damage on a successful save."
		+ "\n   " + "This damage increases with 1d6 at level 5, 11, and 17."
		+ "\n   " + "I can't use this feature again until I finish a long rest.",
		dmgres : ["Poison"]
});
AddRacialVariant("feral dragon neko", "red", {
		regExpSearch : /red/i,
		name : "Red feral dragon neko",
		plural : "Red feral dragon neko",
		source : [["P:DN", 0]],
		improvements : "+1 Strength, +1 Constitution, +1 Charisma",
		trait : "Red feral dragon neko (+1 Strength, +1 Constitution, +1 Charisma)"
		+ "\n" + "Draconic Wings: Thanks to your draconic nature, you have two draconic wings sprouting from your back. You have a flying speed of 30 feet while you aren't wearing heavy armor"
		+ "\n" + "Draconic Tail: A draconic tail sprouts from the base of your spine. As an action, you can use it as a strength melee attack dealing 1d6 bludgeoning damage to one creature if it hits. On a hit, the creature must roll a Strength saving throw and are knocked prone on a failure."
		+ "\n" + "Animalistic Survival: The draconic blood in you is stronger than your fellow Dragon Nekos. You have advantage on Constitution saving throws against poison and disease and resistance to poison damage."
		+ "\n" + "Greater Dragon Tracking: Thanks to your closer connection to dragons, your sense of smell is stronger as well. You have advantage on Wisdom (Survival) and Wisdom (Perception) checks using your sense of smell."
		+ "\n" + "Fire Breath Weapon:"
		+ "\n   " + "As a bonus action, I exhale destructive energy in a 15 ft cone."
		+ "\n   " + "All in the area must make a Dex saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 fire damage, half as much damage on a successful save."
		+ "\n   " + "This damage increases with 1d6 at level 5, 11, and 17."
		+ "\n   " + "I can't use this feature again until I finish a long rest.",
		dmgres : ["Fire"]
});
AddRacialVariant("feral dragon neko", "silver", {
		regExpSearch : /silver/i,
		name : "Silver feral dragon neko",
		plural : "Silver feral dragon neko",
		source : [["P:DN", 0]],
		improvements : "+1 Strength, +1 Constitution, +1 Charisma",
		trait : "Silver feral dragon neko (+1 Strength, +1 Constitution, +1 Charisma)"
		+ "\n" + "Draconic Wings: Thanks to your draconic nature, you have two draconic wings sprouting from your back. You have a flying speed of 30 feet while you aren't wearing heavy armor"
		+ "\n" + "Draconic Tail: A draconic tail sprouts from the base of your spine. As an action, you can use it as a strength melee attack dealing 1d6 bludgeoning damage to one creature if it hits. On a hit, the creature must roll a Strength saving throw and are knocked prone on a failure."
		+ "\n" + "Animalistic Survival: The draconic blood in you is stronger than your fellow Dragon Nekos. You have advantage on Constitution saving throws against poison and disease and resistance to poison damage."
		+ "\n" + "Greater Dragon Tracking: Thanks to your closer connection to dragons, your sense of smell is stronger as well. You have advantage on Wisdom (Survival) and Wisdom (Perception) checks using your sense of smell."
		+ "\n" + "Cold Breath Weapon:"
		+ "\n   " + "As a bonus action, I exhale destructive energy in a 15 ft cone."
		+ "\n   " + "All in the area must make a Con saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 cold damage, half as much damage on a successful save."
		+ "\n   " + "This damage increases with 1d6 at level 5, 11, and 17."
		+ "\n   " + "I can't use this feature again until I finish a long rest.",
		dmgres : ["Cold"]
});
AddRacialVariant("feral dragon neko", "white", {
		regExpSearch : /white/i,
		name : "White feral dragon neko",
		plural : "White feral dragon neko",
		source : [["P:DN", 0]],
		improvements : "+1 Strength, +1 Constitution, +1 Charisma",
		trait : "White feral dragon neko (+1 Strength, +1 Constitution, +1 Charisma)"
		+ "\n" + "Draconic Wings: Thanks to your draconic nature, you have two draconic wings sprouting from your back. You have a flying speed of 30 feet while you aren't wearing heavy armor"
		+ "\n" + "Draconic Tail: A draconic tail sprouts from the base of your spine. As an action, you can use it as a strength melee attack dealing 1d6 bludgeoning damage to one creature if it hits. On a hit, the creature must roll a Strength saving throw and are knocked prone on a failure."
		+ "\n" + "Animalistic Survival: The draconic blood in you is stronger than your fellow Dragon Nekos. You have advantage on Constitution saving throws against poison and disease and resistance to poison damage."
		+ "\n" + "Greater Dragon Tracking: Thanks to your closer connection to dragons, your sense of smell is stronger as well. You have advantage on Wisdom (Survival) and Wisdom (Perception) checks using your sense of smell."
		+ "\n" + "Cold Breath Weapon:"
		+ "\n   " + "As a bonus action, I exhale destructive energy in a 15 ft cone."
		+ "\n   " + "All in the area must make a Con saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 cold damage, half as much damage on a successful save."
		+ "\n   " + "This damage increases with 1d6 at level 5, 11, and 17."
		+ "\n   " + "I can't use this feature again until I finish a long rest.",
		dmgres : ["Cold"]
});

//Create Servant Dragon Neko Variants
AddRacialVariant("servant dragon neko", "black", {
		regExpSearch : /black/i,
		name : "Black servant dragon neko",
		plural : "Black servant dragon neko",
		source : [["P:DN", 0]],
		improvements : "+1 Strength, +1 Constitution, +1 Charisma",
		trait : "Black servant dragon neko (+1 Strength, +1 Constitution, +1 Charisma)"
		+ "\n" + "Draconic Wings: Thanks to your draconic nature, you have two draconic wings sprouting from your back. You have a flying speed of 30 feet while you aren't wearing heavy armor"
		+ "\n" + "Draconic Tail: A draconic tail sprouts from the base of your spine. As an action, you can use it as a strength melee attack dealing 1d6 bludgeoning damage to one creature if it hits. On a hit, the creature must roll a Strength saving throw and are knocked prone on a failure."
		+ "\n" + "Versaltity: Your subrace was the main one enslaved and made servants of the draconic slaves. Due to this experience of servitude, you are proficient in 1 language, skill, or tool of your choice."
		+ "\n" + "Acid Breath Weapon:"
		+ "\n   " + "As a bonus action, I exhale destructive energy in a 5 ft by 30 ft line."
		+ "\n   " + "All in the area must make a Dex saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 acid damage, half as much damage on a successful save."
		+ "\n   " + "This damage increases with 1d6 at level 5, 11, and 17."
		+ "\n   " + "I can't use this feature again until I finish a long rest.",
		skillstxt : "Pick one language, skill, or tool of your choice",
		dmgres : ["Acid"]
});
AddRacialVariant("servant dragon neko" , "blue", {
		regExpSearch : /blue/i,
		name : "Blue servant dragon neko",
		plural : "Blue servant dragon neko",
		source : [["P:DN", 0]],
		improvements : "+1 Strength, +1 Constitution, +1 Charisma",
		trait : "Blue servant dragon neko (+1 Strength, +1 Constitution, +1 Charisma)"
		+ "\n" + "Draconic Wings: Thanks to your draconic nature, you have two draconic wings sprouting from your back. You have a flying speed of 30 feet while you aren't wearing heavy armor"
		+ "\n" + "Draconic Tail: A draconic tail sprouts from the base of your spine. As an action, you can use it as a strength melee attack dealing 1d6 bludgeoning damage to one creature if it hits. On a hit, the creature must roll a Strength saving throw and are knocked prone on a failure."
		+ "\n" + "Versaltity: Your subrace was the main one enslaved and made servants of the draconic slaves. Due to this experience of servitude, you are proficient in 1 language, skill, or tool of your choice."
		+ "\n" + "Lightning Breath Weapon:"
		+ "\n   " + "As a bonus action, I exhale destructive energy in a 5 ft by 30 ft line."
		+ "\n   " + "All in the area must make a Dex saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 lightning damage, half as much damage on a successful save."
		+ "\n   " + "This damage increases with 1d6 at level 5, 11, and 17."
		+ "\n   " + "I can't use this feature again until I finish a long rest.",
		skillstxt : "Pick one language, skill, or tool of your choice",
		dmgres : ["Lightning"]
});
AddRacialVariant("servant dragon neko", "brass", {
		regExpSearch : /brass/i,
		name : "Brass servant dragon neko",
		plural : "Brass servant dragon neko",
		source : [["P:DN", 0]],
		improvements : "+1 Strength, +1 Constitution, +1 Charisma",
		trait : "Brass servant dragon neko (+1 Strength, +1 Constitution, +1 Charisma)"
		+ "\n" + "Draconic Wings: Thanks to your draconic nature, you have two draconic wings sprouting from your back. You have a flying speed of 30 feet while you aren't wearing heavy armor"
		+ "\n" + "Draconic Tail: A draconic tail sprouts from the base of your spine. As an action, you can use it as a strength melee attack dealing 1d6 bludgeoning damage to one creature if it hits. On a hit, the creature must roll a Strength saving throw and are knocked prone on a failure."
		+ "\n" + "Versaltity: Your subrace was the main one enslaved and made servants of the draconic slaves. Due to this experience of servitude, you are proficient in 1 language, skill, or tool of your choice."
		+ "\n" + "Fire Breath Weapon:"
		+ "\n   " + "As a bonus action, I exhale destructive energy in a 5 ft by 30 ft line."
		+ "\n   " + "All in the area must make a Dex saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 fire damage, half as much damage on a successful save."
		+ "\n   " + "This damage increases with 1d6 at level 5, 11, and 17."
		+ "\n   " + "I can't use this feature again until I finish a long rest.",
		dmgres : ["Fire"]
});
AddRacialVariant("servant dragon neko", "bronze", {
		regExpSearch : /bronze/i,
		name : "Bronze servant dragon neko",
		plural : "Bronze servant dragon neko",
		source : [["P:DN", 0]],
		improvements : "+1 Strength, +1 Constitution, +1 Charisma",
		trait : "Bronze servant dragon neko (+1 Strength, +1 Constitution, +1 Charisma)"
		+ "\n" + "Draconic Wings: Thanks to your draconic nature, you have two draconic wings sprouting from your back. You have a flying speed of 30 feet while you aren't wearing heavy armor"
		+ "\n" + "Draconic Tail: A draconic tail sprouts from the base of your spine. As an action, you can use it as a strength melee attack dealing 1d6 bludgeoning damage to one creature if it hits. On a hit, the creature must roll a Strength saving throw and are knocked prone on a failure."
		+ "\n" + "Versaltity: Your subrace was the main one enslaved and made servants of the draconic slaves. Due to this experience of servitude, you are proficient in 1 language, skill, or tool of your choice."
		+ "\n" + "Lightning Breath Weapon:"
		+ "\n   " + "As a bonus action, I exhale destructive energy in a 5 ft by 30 ft line."
		+ "\n   " + "All in the area must make a Dex saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 lightning damage, half as much damage on a successful save."
		+ "\n   " + "This damage increases with 1d6 at level 5, 11, and 17."
		+ "\n   " + "I can't use this feature again until I finish a long rest.",
		skillstxt : "Pick one language, skill, or tool of your choice",
		dmgres : ["Lightning"]
});
AddRacialVariant("servant dragon neko", "copper", {
		regExpSearch : /copper/i,
		name : "Copper servant dragon neko",
		plural : "Copper servant dragon neko",
		source : [["P:DN", 0]],
		improvements : "+1 Strength, +1 Constitution, +1 Charisma",
		trait : "Copper servant dragon neko (+1 Strength, +1 Constitution, +1 Charisma)"
		+ "\n" + "Draconic Wings: Thanks to your draconic nature, you have two draconic wings sprouting from your back. You have a flying speed of 30 feet while you aren't wearing heavy armor"
		+ "\n" + "Draconic Tail: A draconic tail sprouts from the base of your spine. As an action, you can use it as a strength melee attack dealing 1d6 bludgeoning damage to one creature if it hits. On a hit, the creature must roll a Strength saving throw and are knocked prone on a failure."
		+ "\n" + "Versaltity: Your subrace was the main one enslaved and made servants of the draconic slaves. Due to this experience of servitude, you are proficient in 1 language, skill, or tool of your choice."
		+ "\n" + "Acid Breath Weapon:"
		+ "\n   " + "As a bonus action, I exhale destructive energy in a 5 ft by 30 ft line."
		+ "\n   " + "All in the area must make a Dex saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 acid damage, half as much damage on a successful save."
		+ "\n   " + "This damage increases with 1d6 at level 5, 11, and 17."
		+ "\n   " + "I can't use this feature again until I finish a long rest.",
		skillstxt : "Pick one language, skill, or tool of your choice",
		dmgres : ["Acid"]
});
AddRacialVariant("servant dragon neko", "gold", {
		regExpSearch : /gold/i,
		name : "Gold servant dragon neko",
		plural : "Gold servant dragon neko",
		source : [["P:DN", 0]],
		improvements : "+1 Strength, +1 Constitution, +1 Charisma",
		trait : "Gold servant dragon neko (+1 Strength, +1 Constitution, +1 Charisma)"
		+ "\n" + "Draconic Wings: Thanks to your draconic nature, you have two draconic wings sprouting from your back. You have a flying speed of 30 feet while you aren't wearing heavy armor"
		+ "\n" + "Draconic Tail: A draconic tail sprouts from the base of your spine. As an action, you can use it as a strength melee attack dealing 1d6 bludgeoning damage to one creature if it hits. On a hit, the creature must roll a Strength saving throw and are knocked prone on a failure."
		+ "\n" + "Versaltity: Your subrace was the main one enslaved and made servants of the draconic slaves. Due to this experience of servitude, you are proficient in 1 language, skill, or tool of your choice."
		+ "\n" + "Fire Breath Weapon:"
		+ "\n   " + "As a bonus action, I exhale destructive energy in a 15 ft cone."
		+ "\n   " + "All in the area must make a Dex saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 fire damage, half as much damage on a successful save."
		+ "\n   " + "This damage increases with 1d6 at level 5, 11, and 17."
		+ "\n   " + "I can't use this feature again until I finish a long rest.",
		skillstxt : "Pick one language, skill, or tool of your choice",
		dmgres : ["Fire"]
});
AddRacialVariant("servant dragon neko", "green", {
		regExpSearch : /green/i,
		name : "Green servant dragon neko",
		plural : "Green servant dragon neko",
		source : [["P:DN", 0]],
		improvements : "+1 Strength, +1 Constitution, +1 Charisma",
		trait : "Green servant dragon neko (+1 Strength, +1 Constitution, +1 Charisma)"
		+ "\n" + "Draconic Wings: Thanks to your draconic nature, you have two draconic wings sprouting from your back. You have a flying speed of 30 feet while you aren't wearing heavy armor"
		+ "\n" + "Draconic Tail: A draconic tail sprouts from the base of your spine. As an action, you can use it as a strength melee attack dealing 1d6 bludgeoning damage to one creature if it hits. On a hit, the creature must roll a Strength saving throw and are knocked prone on a failure."
		+ "\n" + "Versaltity: Your subrace was the main one enslaved and made servants of the draconic slaves. Due to this experience of servitude, you are proficient in 1 language, skill, or tool of your choice."
		+ "\n" + "Poison Breath Weapon:"
		+ "\n   " + "As a bonus action, I exhale destructive energy in a 15 ft cone."
		+ "\n   " + "All in the area must make a Con saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 poison damage, half as much damage on a successful save."
		+ "\n   " + "This damage increases with 1d6 at level 5, 11, and 17."
		+ "\n   " + "I can't use this feature again until I finish a long rest.",
		skillstxt : "Pick one language, skill, or tool of your choice",
		dmgres : ["Poison"]
});
AddRacialVariant("servant dragon neko", "red", {
		regExpSearch : /red/i,
		name : "Red servant dragon neko",
		plural : "Red servant dragon neko",
		source : [["P:DN", 0]],
		improvements : "+1 Strength, +1 Constitution, +1 Charisma",
		trait : "Red servant dragon neko (+1 Strength, +1 Constitution, +1 Charisma)"
		+ "\n" + "Versaltity: Your subrace was the main one enslaved and made servants of the draconic slaves. Due to this experience of servitude, you are proficient in 1 language, skill, or tool of your choice."
		+ "\n" + "Fire Breath Weapon:"
		+ "\n   " + "As a bonus action, I exhale destructive energy in a 15 ft cone."
		+ "\n   " + "All in the area must make a Dex saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 fire damage, half as much damage on a successful save."
		+ "\n   " + "This damage increases with 1d6 at level 5, 11, and 17."
		+ "\n   " + "I can't use this feature again until I finish a long rest.",
		skillstxt : "Pick one language, skill, or tool of your choice",
		dmgres : ["Fire"]
});
AddRacialVariant("servant dragon neko", "silver", {
		regExpSearch : /silver/i,
		name : "Silver servant dragon neko",
		plural : "Silver servant dragon neko",
		source : [["P:DN", 0]],
		improvements : "+1 Strength, +1 Constitution, +1 Charisma",
		trait : "Silver servant dragon neko (+1 Strength, +1 Constitution, +1 Charisma)"
		+ "\n" + "Draconic Wings: Thanks to your draconic nature, you have two draconic wings sprouting from your back. You have a flying speed of 30 feet while you aren't wearing heavy armor"
		+ "\n" + "Draconic Tail: A draconic tail sprouts from the base of your spine. As an action, you can use it as a strength melee attack dealing 1d6 bludgeoning damage to one creature if it hits. On a hit, the creature must roll a Strength saving throw and are knocked prone on a failure."
		+ "\n" + "Versaltity: Your subrace was the main one enslaved and made servants of the draconic slaves. Due to this experience of servitude, you are proficient in 1 language, skill, or tool of your choice."
		+ "\n" + "Cold Breath Weapon:"
		+ "\n   " + "As a bonus action, I exhale destructive energy in a 15 ft cone."
		+ "\n   " + "All in the area must make a Con saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 cold damage, half as much damage on a successful save."
		+ "\n   " + "This damage increases with 1d6 at level 5, 11, and 17."
		+ "\n   " + "I can't use this feature again until I finish a long rest.",
		skillstxt : "Pick one language, skill, or tool of your choice",
		dmgres : ["Cold"]
});
AddRacialVariant("servant dragon neko", "white", {
		regExpSearch : /white/i,
		name : "White servant dragon neko",
		plural : "White servant dragon neko",
		source : [["P:DN", 0]],
		improvements : "+1 Strength, +1 Constitution, +1 Charisma",
		trait : "White servant dragon neko (+1 Strength, +1 Constitution, +1 Charisma)"
		+ "\n" + "Draconic Wings: Thanks to your draconic nature, you have two draconic wings sprouting from your back. You have a flying speed of 30 feet while you aren't wearing heavy armor"
		+ "\n" + "Draconic Tail: A draconic tail sprouts from the base of your spine. As an action, you can use it as a strength melee attack dealing 1d6 bludgeoning damage to one creature if it hits. On a hit, the creature must roll a Strength saving throw and are knocked prone on a failure."
		+ "\n" + "Versaltity: Your subrace was the main one enslaved and made servants of the draconic slaves. Due to this experience of servitude, you are proficient in 1 language, skill, or tool of your choice."
		+ "\n" + "Cold Breath Weapon:"
		+ "\n   " + "As a bonus action, I exhale destructive energy in a 15 ft cone."
		+ "\n   " + "All in the area must make a Con saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 cold damage, half as much damage on a successful save."
		+ "\n   " + "This damage increases with 1d6 at level 5, 11, and 17."
		+ "\n   " + "I can't use this feature again until I finish a long rest.",
		skillstxt : "Pick one language, skill, or tool of your choice",
		dmgres : ["Cold"]
});

//Create Warrior Neko Variants
AddRacialVariant("warrior dragon neko", "black", {
		regExpSearch : /black/i,
		name : "Black warrior dragon neko",
		plural : "Black warrior dragon neko",
		source : [["P:DN", 0]],
		improvements : "+1 Strength, +1 Constitution, +1 Charisma",
		trait : "Black warrior dragon neko (+1 Strength, +1 Constitution, +1 Charisma)"
		+ "\n" + "Draconic Hardiness: Your subrace was breed to be warriors and fight on the front lines. You were subjected to hard labor in the past and that awakened the draconic constitution you have. As an action, you can regain 2d6 Temporary Hit Points. After you use this ability, you cannot use it again until you finish a short or long rest."
		+ "\n" + "Acid Breath Weapon:"
		+ "\n   " + "As a bonus action, I exhale destructive energy in a 5 ft by 30 ft line."
		+ "\n   " + "All in the area must make a Dex saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 acid damage, half as much damage on a successful save."
		+ "\n   " + "This damage increases with 1d6 at level 5, 11, and 17."
		+ "\n   " + "I can't use this feature again until I finish a long rest.",
		dmgres : ["Acid"]
});
AddRacialVariant("warrior dragon neko" , "blue", {
		regExpSearch : /blue/i,
		name : "Blue warrior dragon neko",
		plural : "Blue warrior dragon neko",
		source : [["P:DN", 0]],
		improvements : "+1 Strength, +1 Constitution, +1 Charisma",
		trait : "Blue warrior dragon neko (+1 Strength, +1 Constitution, +1 Charisma)"
		+ "\n" + "Draconic Hardiness: Your subrace was breed to be warriors and fight on the front lines. You were subjected to hard labor in the past and that awakened the draconic constitution you have. As an action, you can regain 2d6 Temporary Hit Points. After you use this ability, you cannot use it again until you finish a short or long rest."
		+ "\n" + "Lightning Breath Weapon:"
		+ "\n   " + "As a bonus action, I exhale destructive energy in a 5 ft by 30 ft line."
		+ "\n   " + "All in the area must make a Dex saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 lightning damage, half as much damage on a successful save."
		+ "\n   " + "This damage increases with 1d6 at level 5, 11, and 17."
		+ "\n   " + "I can't use this feature again until I finish a long rest.",
		dmgres : ["Lightning"]
});
AddRacialVariant("warrior dragon neko", "brass", {
		regExpSearch : /brass/i,
		name : "Brass warrior dragon neko",
		plural : "Brass warrior dragon neko",
		source : [["P:DN", 0]],
		improvements : "+1 Strength, +1 Constitution, +1 Charisma",
		trait : "Brass warrior dragon neko (+1 Strength, +1 Constitution, +1 Charisma)"
		+ "\n" + "Draconic Hardiness: Your subrace was breed to be warriors and fight on the front lines. You were subjected to hard labor in the past and that awakened the draconic constitution you have. As an action, you can regain 2d6 Temporary Hit Points. After you use this ability, you cannot use it again until you finish a short or long rest."
		+ "\n" + "Fire Breath Weapon:"
		+ "\n   " + "As a bonus action, I exhale destructive energy in a 5 ft by 30 ft line."
		+ "\n   " + "All in the area must make a Dex saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 fire damage, half as much damage on a successful save."
		+ "\n   " + "This damage increases with 1d6 at level 5, 11, and 17."
		+ "\n   " + "I can't use this feature again until I finish a long rest.",
		dmgres : ["Fire"]
});
AddRacialVariant("warrior dragon neko", "bronze", {
		regExpSearch : /bronze/i,
		name : "Bronze warrior dragon neko",
		plural : "Bronze warrior dragon neko",
		source : [["P:DN", 0]],
		improvements : "+1 Strength, +1 Constitution, +1 Charisma",
		trait : "Bronze warrior dragon neko (+1 Strength, +1 Constitution, +1 Charisma)"
		+ "\n" + "Draconic Hardiness: Your subrace was breed to be warriors and fight on the front lines. You were subjected to hard labor in the past and that awakened the draconic constitution you have. As an action, you can regain 2d6 Temporary Hit Points. After you use this ability, you cannot use it again until you finish a short or long rest."
		+ "\n" + "Lightning Breath Weapon:"
		+ "\n   " + "As a bonus action, I exhale destructive energy in a 5 ft by 30 ft line."
		+ "\n   " + "All in the area must make a Dex saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 lightning damage, half as much damage on a successful save."
		+ "\n   " + "This damage increases with 1d6 at level 5, 11, and 17."
		+ "\n   " + "I can't use this feature again until I finish a long rest.",
		dmgres : ["Lightning"]
});
AddRacialVariant("warrior dragon neko", "copper", {
		regExpSearch : /copper/i,
		name : "Copper warrior dragon neko",
		plural : "Copper warrior dragon neko",
		source : [["P:DN", 0]],
		improvements : "+1 Strength, +1 Constitution, +1 Charisma",
		trait : "Copper warrior dragon neko (+1 Strength, +1 Constitution, +1 Charisma)"
		+ "\n" + "Draconic Hardiness: Your subrace was breed to be warriors and fight on the front lines. You were subjected to hard labor in the past and that awakened the draconic constitution you have. As an action, you can regain 2d6 Temporary Hit Points. After you use this ability, you cannot use it again until you finish a short or long rest."
		+ "\n" + "Acid Breath Weapon:"
		+ "\n   " + "As a bonus action, I exhale destructive energy in a 5 ft by 30 ft line."
		+ "\n   " + "All in the area must make a Dex saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 acid damage, half as much damage on a successful save."
		+ "\n   " + "This damage increases with 1d6 at level 5, 11, and 17."
		+ "\n   " + "I can't use this feature again until I finish a long rest.",
		dmgres : ["Acid"]
});
AddRacialVariant("warrior dragon neko", "gold", {
		regExpSearch : /gold/i,
		name : "Gold warrior dragon neko",
		plural : "Gold warrior dragon neko",
		source : [["P:DN", 0]],
		improvements : "+1 Strength, +1 Constitution, +1 Charisma",
		trait : "Gold warrior dragon neko (+1 Strength, +1 Constitution, +1 Charisma)"
		+ "\n" + "Draconic Hardiness: Your subrace was breed to be warriors and fight on the front lines. You were subjected to hard labor in the past and that awakened the draconic constitution you have. As an action, you can regain 2d6 Temporary Hit Points. After you use this ability, you cannot use it again until you finish a short or long rest."
		+ "\n" + "Fire Breath Weapon:"
		+ "\n   " + "As a bonus action, I exhale destructive energy in a 15 ft cone."
		+ "\n   " + "All in the area must make a Dex saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 fire damage, half as much damage on a successful save."
		+ "\n   " + "This damage increases with 1d6 at level 5, 11, and 17."
		+ "\n   " + "I can't use this feature again until I finish a long rest.",
		dmgres : ["Fire"]
});
AddRacialVariant("warrior dragon neko", "green", {
		regExpSearch : /green/i,
		name : "Green warrior dragon neko",
		plural : "Green warrior dragon neko",
		source : [["P:DN", 0]],
		improvements : "+1 Strength, +1 Constitution, +1 Charisma",
		trait : "Green warrior dragon neko (+1 Strength, +1 Constitution, +1 Charisma)"
		+ "\n" + "Draconic Hardiness: Your subrace was breed to be warriors and fight on the front lines. You were subjected to hard labor in the past and that awakened the draconic constitution you have. As an action, you can regain 2d6 Temporary Hit Points. After you use this ability, you cannot use it again until you finish a short or long rest."
		+ "\n" + "Poison Breath Weapon:"
		+ "\n   " + "As a bonus action, I exhale destructive energy in a 15 ft cone."
		+ "\n   " + "All in the area must make a Con saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 poison damage, half as much damage on a successful save."
		+ "\n   " + "This damage increases with 1d6 at level 5, 11, and 17."
		+ "\n   " + "I can't use this feature again until I finish a long rest.",
		dmgres : ["Poison"]
});
AddRacialVariant("warrior dragon neko", "red", {
		regExpSearch : /red/i,
		name : "Red warrior dragon neko",
		plural : "Red warrior dragon neko",
		source : [["P:DN", 0]],
		improvements : "+1 Strength, +1 Constitution, +1 Charisma",
		trait : "Red warrior dragon neko (+1 Strength, +1 Constitution, +1 Charisma)"
		+ "\n" + "Draconic Hardiness: Your subrace was breed to be warriors and fight on the front lines. You were subjected to hard labor in the past and that awakened the draconic constitution you have. As an action, you can regain 2d6 Temporary Hit Points. After you use this ability, you cannot use it again until you finish a short or long rest."
		+ "\n" + "Fire Breath Weapon:"
		+ "\n   " + "As a bonus action, I exhale destructive energy in a 15 ft cone."
		+ "\n   " + "All in the area must make a Dex saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 fire damage, half as much damage on a successful save."
		+ "\n   " + "This damage increases with 1d6 at level 5, 11, and 17."
		+ "\n   " + "I can't use this feature again until I finish a long rest.",
		dmgres : ["Fire"]
});
AddRacialVariant("warrior dragon neko", "silver", {
		regExpSearch : /silver/i,
		name : "Silver warrior dragon neko",
		plural : "Silver warrior dragon neko",
		source : [["P:DN", 0]],
		improvements : "+1 Strength, +1 Constitution, +1 Charisma",
		trait : "Silver warrior dragon neko (+1 Strength, +1 Constitution, +1 Charisma)"
		+ "\n" + "Draconic Hardiness: Your subrace was breed to be warriors and fight on the front lines. You were subjected to hard labor in the past and that awakened the draconic constitution you have. As an action, you can regain 2d6 Temporary Hit Points. After you use this ability, you cannot use it again until you finish a short or long rest."
		+ "\n" + "Cold Breath Weapon:"
		+ "\n   " + "As a bonus action, I exhale destructive energy in a 15 ft cone."
		+ "\n   " + "All in the area must make a Con saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 cold damage, half as much damage on a successful save."
		+ "\n   " + "This damage increases with 1d6 at level 5, 11, and 17."
		+ "\n   " + "I can't use this feature again until I finish a long rest.",
		dmgres : ["Cold"]
});
AddRacialVariant("warrior dragon neko", "white", {
		regExpSearch : /white/i,
		name : "White warrior dragon neko",
		plural : "White warrior dragon neko",
		source : [["P:DN", 0]],
		improvements : "+1 Strength, +1 Constitution, +1 Charisma",
		trait : "White warrior dragon neko (+1 Strength, +1 Constitution, +1 Charisma)"
		+ "\n" + "Draconic Hardiness: Your subrace was breed to be warriors and fight on the front lines. You were subjected to hard labor in the past and that awakened the draconic constitution you have. As an action, you can regain 2d6 Temporary Hit Points. After you use this ability, you cannot use it again until you finish a short or long rest."
		+ "\n" + "Cold Breath Weapon:"
		+ "\n   " + "As a bonus action, I exhale destructive energy in a 15 ft cone."
		+ "\n   " + "All in the area must make a Con saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 cold damage, half as much damage on a successful save."
		+ "\n   " + "This damage increases with 1d6 at level 5, 11, and 17."
		+ "\n   " + "I can't use this feature again until I finish a long rest.",
		dmgres : ["Cold"]
});