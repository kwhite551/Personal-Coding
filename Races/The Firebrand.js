var iFileName = "The Firebrand[Created by Perry Folk, Transcribed by Seneschal].js";
RequiredSheetVersion(12.999);

//Creating firebrand Object
RaceList["firebrand"] = {
	regExpSearch : /^(?=.*Firebrand)(?=.*firebrand).*$/i,
		name : "Firebrand",
		source : [["S3N", 1]],
		plural : "Firebrand",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 },
			fly : { spd : 40, enc : 30 },
		},
		defaultExcluded : true,
		languageProfs : ["Common", "Draconic"],
		vision : [["Darkvision,", 60]],
		weaponprofs : [false, false, ["Put your four weapons here"]],
		armor : [false, true, true, false],
		weaponOptions : {
			regExpSearch : /^(?=.*breath)(?=.*weapon).*$/i,
			name : "Breath weapon",
			source : [["SRD", 5], ["P", 34]],
			ability : 3,
			type : "Natural",
			damage : [2, 8, "fire"],
			range : "15-ft cone",
			description : "Hits all in area; Dex save, success - half damage; Usable only once per long rest",
			abilitytodamage : false,
			dc : true,
			dbBreathWeapon : true
		},
		weaponsAdd : ["Breath Weapon"],
		age : " Manufactured reach physical adulthood at age 1, mental adulthood at age 5 and live around 100 years. Natural reach physical adulthood at 15, mental adulthood at late teens, and live around 250 years",
		height : " stand well over 6 feet tall (6'2\" + 2d12\")",
		weight : " weigh around 240 lb (175 + 2d12 \xD7 2d8 lb)",
		heightMetric : " stand well over 1,8 metres tall (182 + 5d8 cm)",
		weightMetric : " weigh around 110 kg (80 + 5d8 \xD7 4d6 / 10 kg)",
		scores : [0, 0, 0, 0, 0, 2],
		trait : "firebrand: (+2 Charimsa, +1 to two stats of your choice)\nDraconic Ancestry: Choose one type of dragon using the \"Racial Options\" button. I gain a breath weapon and damage resistance as determined by the dragon type chosen.\nBreath Weapon: Exhale destructive energy As a bonus action with a size, shape, saving throw type, and damage type as found in the table. All in the area must make a saving throw with DC 8 + Con modifier + prof bonus. It does 2d8 (+1d8 at level 3, 5, 7, 11, 13, 15. 17, 19) damage, half as much damage on a successful save. I can use it again after a long rest. \nTrance: Firebrand meditate 4 hours a day semiconscious. You regain the same benefits a human does from 8 hours of sleep for a long rest after resting with a trance."
		+ "\n" + "Draconic Tactics: As a bonus action, you can call out to one ally who can hear or see you in a 30 foot radius. As a reaction, they can move up to their current movement speed and make one attack."
		+ "\n" + "Draconic Inspiration: Any ally within 30 feet of you has advantage on Wisdom saving throw against being frightened.",
		features : {
			"draconic tactics" : {
				name : "Draconic Tactics",
				action : ["bonus action", ""]
			},
			"draconic inspiration" : {
				name : "Draconic Inspiration",
				action : ["reaction", ""]
			},
			"draconic ancestry" : {
				name : "Draconic Ancestry",
				limfeaname : "Breath Weapon",
				minlevel : 1,
				usages : 1,
				additional : levels.map(function (n) {
					return (n < 3 ? 2 : n < 5 ? 3 : n < 7 ? 4 : n < 9 ? 5 : n < 11 ? 6 : n < 13 ? 7 : n < 15 ? 8 : n < 17 ? 9 : n < 19 ? 10 : 11) + 'd8';
				}),
				recovery : "long rest",
				action : ["bonus action", ""],
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							if (v.theWea.dbBreathWeapon && CurrentRace.known === 'firebrand') {
								fields.Damage_Die = (CurrentRace.level < 3 ? 2 : CurrentRace.level < 5 ? 3 : CurrentRace.level < 7 ? 4 : currentRace.level < 9 ? 5 : currentRace.level < 11 ? 6 : currentRace.level < 13 ? 7 : currentRace.level < 15 ? 8 : currentRace.level < 17 ? 9 : currentRace.level < 19 ? 10 : 11) + 'd8';
								if (CurrentRace.variant) {
									fields.Damage_Type = CurrentRace.dmgres[0];
									fields.Description = fields.Description.replace(/(dex|con) save/i, ((/cold|poison/i).test(CurrentRace.dmgres[0]) ? 'Con' : 'Dex') + ' save');
									fields.Range = (/Black|Blue|Brass|Bronze|Copper/i).test(CurrentRace.variant) ? '5-ft \u00D7 30-ft line' : '15-ft cone';
								}
							};
						}
					]
				}
			}
			
		},
		variants : ["Black", "Blue", "Brass", "Bronze", "Copper", "Gold", "Green", "Red", "Silver", "White"]
};