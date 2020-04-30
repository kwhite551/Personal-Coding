/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This script adds a class called "The Marked One" and it's 2 subclasses
				This class is made by /u/Xenomorphy000 and can be found here: https://www.gmbinder.com/share/-LeBSo7FyeillPfG3-QI
				and here: https://www.reddit.com/r/UnearthedArcana/comments/csgn33/marked_one_v23_a_dishonored_inspired_class/
	Code by:	Seneschal
	Date:		2019-09-27 (sheet v13.0.0beta19)
*/

var iFileName = "The Marked One [Created by Xenomorphy, transcribed by Seneschal].js";
RequiredSheetVersion(13.);

SourceList["X:TMO"] = {
	name : "/u/Xenomorphy000: The Marked One",
	abbreviation : "X:TMO",
	group: "Reddit/r/UnearthedArcana",
	url : "https://www.reddit.com/r/UnearthedArcana/comments/csgn33/marked_one_v23_a_dishonored_inspired_class/",
	date : "2019/08/19"
}

ClassList["themarkedone"] = {
	regExpSearch : /^(?=.*marked)(?=.*one).*$/i,
	name : "Marked One",
	source : ["X:TMO", 0],
	primaryAbility : "Charisma",
	prereqs : "",
	die : 8,
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves : ["Dex", "Cha"],
	skillstxt : {
		primary : "Choose two from Acrobatics, Athletics, Insight, Intimidation, Investigation, Perception, Sleight of Hand and Stealth."
	},
	armorProfs : {
		primary : [true, false, false, false],
		secondary : [true, false, false, false]
	},
	weaponProfs : {
		primary : [true, false, ["hand crossbows", "rapiers", "shortswords"]],
		secondary : [true, false, ["hand crossbows", "rapiers", "shortswords"]]
	},
	equipment : "Marked One starting equipment:" +
		"\n \u2022 a rapier -or- a shortsword;" +
		"\n \u2022 hand crossbow and 20 bolts -or- a shortsword;" +
		"\n \u2022 a burglar's pack -or- an explorer's pack;" +
		"\n \u2022 Leather armor and two daggers;" +
		"\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Void Specialization", []],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	abilitySave : 6,
	features : {
		"the mark" : {
			name : "The Mark",
			source : ["X:TMO", 3],
			minlevel : 1,
			description : "\n    " + "I have a mark of the void placed somewhere easily visible on my body." +
			"\n    " + "It can't be obstructed by anything but light material (bandage, cloth, gloves, etc)" +
			"\n    " + "It glows faintly when I use a void power, enough for observers to notice" +
			"\n    " + "Every supernatural ability requires somatic components, not verbal or material"
		},
		"void powers" : {
			name : "Void Powers",
			source : ["X:TMO", 3],
			minlevel : 1,
			description : "\n    " + "I gain access to a Void Power, a mystical ability that lets me manipulate the world" +
			"\n    " + "I start with 1 Void Power and gain more as I level up in this class." +
			"\n    " + "Choose a Void Power using the \"Choose Feature\" button above",
			additional : levels.map(function (n) {
				return n < 2 ? "1 Void Power" : n < 5 ? "2 Void Powers" : n < 10 ? "3 Void Powers" : n < 15 ? "4 Void Powers" : "5 Void Powers";
				}),
			extraname : "Void Power",
			extrachoices : ["bend time (prereq level 5)", "blink", "dark vision", "domino", "doppleganger(prereq level 8)", "devouring swarm(prereq level 5)", "far reach", "mesmerize(prereq level 7)", "possession(prereq level 10)", "shadow walk(prereq level 10)", "windblast(prereq level 5)"],
			"bend time (prereq level 5)" : {
				name : "Bend Time",
				description : "\n    " + "I can spend 4 Void Points to cast Haste on myself.",
				source : ["X:TMO", 9],
				spellcastingBonus : {
					name : "Bend Time",
					spells : ["haste"],
					selection : ["haste"],
					prereqeval : "classes.known.themarkedone.level >= 9"
				},
			},
			"blink" : {
				name : "Blink",
				description : "\n    " + "Spend 1 Void Point to cast Misty Step.",
				source : ["X:TMO", 9],
				spellcastingBonus : {
					name : "Blink",
					spells : ["misty step"],
					selection : ["misty step"]
				}
			},
			"dark vision" : {
				name : "Dark Vision",
				description : "\n    " + "Spend 1 Void Point to Darkvision on self but duration is only 1 minute.",
				source : ["X:TMO", 9],
				spellcastingBonus : {
					name : "Darkvision",
					spells : ["darkvision"],
					selection : ["darkvision"]
				}
			},
			"domino" : {
				name : "Domino",
				description : "\n    " + "Spend 3 void points as an action to link two creatures within 60 ft of me, 30 ft of each other." +
				"\n    " + "When one target takes damage, the other takes half damage.",
				source : ["X:TMO", 9],
				action : ["action", ""]
			},
			"doppleganger(prereq level 8)" : {
				name : "Doppelgänger",
				description : "\n    " + "Spend 5 void points to summon a copy of yourself within 30 ft as an action." +
				"\n    " + "It persists for one minute or until it is killed." +
				"\n    " + "It treats your allies as its allies and your enemies as its enemies." +
				"\n    " + "I must concentrate on this ability during the duration.",
				source : ["X:TMO", 9],
				action : ["action", ""],
				prereqeval : "classes.known.themarkedone.level >= 8"
			},
			"devouring swarm(prereq level 5)" : {
				name : "Devouring Swarm",
				description : "\n    " + "Spend 2 Void Points to summon a \Swarm of Rats\ within 30ft of me as an action." +
				"\n    " +  "This ability lasts for 10 minutes and the swarm treats me and your allies" +
				"\n    " + "as allies and your enemies as enemies.",
				source : ["X:TMO", 10],
				action : ["action", ""],
				prereqeval : "classes.known.themarkedone.level >= 5"
			},
			"far reach" : {
				name : "Far Reach",
				description : "\n    " + "Spend 1 Void Point to be pulled to a point within 40ft of me as a bonus action." +
				"\n    " + "If I encounter an obstacle, I stop immediately and fall if I am in midair.",
				source : ["X:TMO", 10],
				action : ["bonus action", ""]
			},
			"mesmerize(prereq level 7)" : {
				name : "Mesmerize",
				description : "\n    " + "Spend 6 Void Points to summon a void spirit that enthralls 2 creatures" +
				"\n    " + "It appears within 30ft of me and chooses two creatures within 30ft of it" +
				"\n    " + "Each creature targeted must make a Wisdom saving throw against your void save DC" +
				"\n    " + "On a failure, they are paralyzed for a number of rounds equal to your Cha modifier" +
				"\n    " + "or until they are struck. Your allies are not targeted by this creature.",
				source : ["X:TMO", 10],
				action : ["action", ""],
				prereqeval : "classes.known.themarkedone.level >= 7"
			},
			"possession(prereq level 10)" : {
				name : "Possession",
				description : "\n    " + "Spend 8 Void Points as an action to move your conscious into a beast" +
				"\n    " + "and your body into the void. A beast I target must roll a Wisdom Saving Throw" +
				"\n    " + "On a failure, I control where the creature moves for a number of rounds equal to" +
				"\n    " + "your Cha modifier or until I end it early. The beast can't use any action," +
				"\n    " + "bonus action, or reaction other than to dash and can't communicate if it could.",
				source : ["X:TMO", 10],
				action : ["action", "(begin)"],
				prereqeval : "classes.known.themarkedone.level >= 10"
			},
			"shadow walk(prereq level 10)" : {
				name : "Shadow Walk",
				description : "\n    " + "Spend 8 Void Points to turn me and my equipment into a shadow." +
				"\n    " + "I gain the following benefits as a shadow:" +
				"\n    \u2022 " + "Advantage on all stealth checks." +
				"\n    \u2022 " + "Unable to do verbal or somatic components." +
				"\n    \u2022 " + "The special Shadow Attack Action." +
				"\n    \u2022 " + "Resistance to bludgeoning, piercing, slashing." +
				"\n    " +  "Once a minute has passed or I have used a shadow attack, the shadow form ends.",
				source : ["X:TMO", 11],
				action : ["action", ""],
				prereqeval : "classes.known.themarkedone.level >= 10",
				weaponsAdd : ["Shadow Attack"],
				weaponOptions : {
					rexExpSearch : /shadow atack/i,
					name : "Shadow Attack",
					source : ["X:TMO", 11],
					list : "themarkedone",
					ability : 2,
					damage : [6, 6, "necrotic"],
					range : "melee",
					abilitytodamage : false
				}
			},
			"windblast(prereq level 5)" : {
				name : "Windblast",
				description : "\n    " + "Spend 4 Void Points to create 15 ft cone gust of wind" +
				"\n    " + "All creatures in cone make a strength saving throw" +
				"\n    " + "On failure, 4d6 bludgeoning damage, pushed back 10ft" +
				"\n    " + "On success, creatures takes half damage, isn't pushed back" +
				"\n    " + "Objects are knocked away and take double damage.",
				source : ["X:TMO", 11],
				action : ["action", ""],
				prereqeval : "classes.known.themarkedone.level >= 5",
				weaponsAdd : ["Windblast"],
				weaponOptions : {
					rexExpSearch : /windblast/i,
					name : "Windblast",
					source : ["X:TMO", 11],
					list : "the marked one",
					damage : [4, 6, "bludgeoning"],
					range : "15 ft cone",
					ability : 6,
					abilitytoDamage : false,
					dc : true
				}
			}
		},
		"void points" : {
			name : "Void Points",
			source : ["X:TMO", 4],
			minlevel : 1,
			usages : [2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19, 21, 22, 23, 24],
			description : "\n    " + "I can use Void Points to activate a Void Power" +
			"\n    " + "These increase per Marked One level and recharge on a short or long rest" +
			"\n    " + "DC for any Void Saves is 8 + Cha modifier + my proficiency",
			recovery : "short rest"
		},
		"enhanced traversal" : {
			name : "Enhanced Traversal",
			source : ["X:TMO", 4],
			minlevel : 1,
			description : "\n    " + "I gain the following benefits:" +
			"\n    \u2022 " + "My movement speed is increased by 10 feet" +
			"\n    \u2022 " + "I can reduce fall damage by three times my Marked One class",
			action : ["reaction", ""],
			additional : levels.map(function (n) {
				return n*3 + " damage";
			}),
			speed : {
				allModes : "+10"
			}
		},
		"enhanced strength" : {
			name : "Enhanced Strength",
			source : ["X:TMO", 4],
			minlevel : 2,
			description : "\n    " + "I gain the following benefits:" +
			"\n    \u2022 " + "I can make a running high/long jump without moving prior" +
			"\n    \u2022 " + "My high and long jump distance is increased by a number of feet" +
			"\n    \u2022 " + "equal to twice my proficiency modifier",
			additional : levels.map(function (n) {
				return (n < 5 ? 4 : n < 9 ? 6 : n < 13 ? 8 : n < 17 ? 10 : 12) + " feet";
			})
		},
		"blood thirst" : {
			name : "Blood Thirst",
			source : ["X:TMO", 4],
			minlevel : 2,
			description : "\n    " + "After activating a Void Power, I have adv. on my next attack roll."
		},
		"subclassfeature3" : {
			name : "Void Specialization",
			source : ["X:TMO", 4],
			minlevel : 3,
			description : "\n    " + "Choose a Void Specialization I strive to emulate and put it in the \"Class\" field" + 
			"\n   " + "Choose either Void Knife or Bone Crafter"
		},
		"void upgrades" : {
			name : "Void Upgrades",
			source : ["X:TMO", 4],
			minlevel : 3,
			description : "\n    " + "I get enhancements to my void powers as I level up." +
			"\n    " + "Each time I level up, I can learn a new void power and replace one" +
			"\n    " + "I would know at my level.",
			additional : levels.map(function (n) {
				return n < 5  ? "1 Void Upgrade" : n < 7 ? "2 Void Powers" : n < 9 ? "3 Void Powers" : n < 11 ? "4 Void Powers" : n < 13 ? "5 Void Powers" : n < 15 ? "6 Void Powers" : n < 17 ? "8 Void Powers" : n < 19 ? "9 Void Powers" : "10 Void Powers";
			}),
			extraname : "Void Upgrades",
			extrachoices : [
			"lasting bend time (prereq: bend time)", "relativity (prereq: bend time)", "stop time (prereq: level 17 & bend time)",
			"blink assault (prereq: blink)", "greater blink (prereq: blink)", "redirective blink (prereq: blink)", "greater dark vision (prereq: dark vision)",
			"premonition (prereq: dark vision && greater dark vision)", "link three (prereq: domino)", "link four (prereq: domino && link three)",
			"deadly shade (prereq: doppleganger)", "twin shades (prereq: doppleganger)", "transposition (prereq: doppleganger)",
			"greater swarm (prereq: devouring swarm)", "twin swarms (prereq: devouring swarm)", "pull objects and creatures (prereq: far reach)",
			"decelerate (prereq: far reach)", "lasting mesmerize (prereq: mesmerize)", "mesmerize three (prereq: mesmerize)", 
			"mesmerize four (prereq: mesmerize and mesmerize three)", "chain hosts (prereq: possession)", "humanoid possession (prereq: possession)",
			"lasting possession (prereq: possession)", "improved shadow attack (prereq: shadow walk)", "greater shadow attack (prereq: shadow walk and improved shadow attack)",
			"shadow movement (prereq: shadow walk)", "greater windblast (prereq: windblast)", "shockwave (prereq: windblast)"
			],
			"lasting bend time (prereq: bend time)" : {
				name : "Lasting Bend Time",
				source : ["X:TMO", 9],
				description : "\n    " + "Duration for Bend Time haste increased to 10 minutes",
				prereqeval : "classes.known.themarkedone.level >= 17" && function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('bend time (prereq level 5)') != -1; 
				}
			},
			"relativity (prereq: bend time)" : {
				name : "Relativity",
				source : ["X:TMO", 9],
				description : "\n    " + "I have advantage on saves to keep concentration on Haste by Bend Time",
				prereqeval : "classes.known.themarkedone.level >= 17" && function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('bend time (prereq level 5)') != -1; 
				}
			},
			"stop time (prereq: level 17 & bend time)" : {
				name : "Stop Time",
				source : ["X:TMO", 9],
				description : "\n    " + "I can pay an extra 6 Void Points to cast Time Stop with Bend Time",
				prereqeval : "classes.known.themarkedone.level >= 17" && function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('bend time (prereq level 5)') != -1
				},
				spellcastingBonus : {
					name : "Stop Time",
					spells : ["time stop"],
					selection : ["time stop"]
				}
			},
			"blink assault (prereq: blink)" : {
				name : "Blink Assault",
				source : ["X:TMO", 9],
				description : "\n    " + "Hitting an enemy of my size or smaller with a melee weapon"  +
				"\n    " + "within a round after blinking also knocks them prone.",
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('blink') != -1; 
				}
			},
			"greater blink (prereq: blink)" : {
				name : "Greater Blink",
				source : ["x:TMO", 9],
				description : "\n    " + "Range of Misty Step cast by Blink increases to 60 ft",
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('blink') != -1; 
				}
			},
			"redirective blink (prereq: blink)" : {
				name : "Redirective Blink",
				source : ["X:TMO", 9],
				description : "\n    " + "I can use blink in reaction to being attacked or spotted while stealthed",
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('blink') != -1; 
				},
				action : ["reaction", ""]
			},
			"greater dark vision (prereq: dark vision)" : {
				name : "Greater Dark vision",
				source : ["X:TMO", 9],
				description : "\n    " + "I can spend an extra void point allows me to see living creatures" + 
				"\n    " + "through walls and objects out to a range of 30ft while Darkvision is active",
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('dark vision') != -1; 
				}
			},
			"premonition (prereq: dark vision && greater dark vision)" : {
				name : "Premonition",
				source : ["X:TMO", 9],
				description : "\n    " + "While Greater Dark Vision is active, I have advantage on stealth checks" +
				"\n    " + "as I see the routes creatures I am hiding from are going to take before they take them",
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('dark vision') != -1 && GetFeatureChoice('class', 'themarkedone', 'void upgrades', true).indexOf('greater dark vision (prereq: dark vision)') != -1;
				}
			},
			"link three (prereq: domino)" : {
				name : "Link Three",
				source : ["X:TMO", 9],
				description : "\n    " + "The number of targets I can link increases to 3",
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('domino') != -1
				}
			},
			"link four (prereq: domino && link three)" : {
				name : "Link Four",
				source : ["X:TMO", 9],
				description : "\n    " + "The number of targets I can link increases to 4",
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('domino') != -1 && GetFeatureChoice('class', 'themarkedone', 'void upgrades', true).indexOf('link three') != -1;
				}
			},
			"deadly shade (prereq: doppleganger)" : {
				name : "Deadly Shade",
				source : ["X:TMO", 9],
				description :  "\n    " + "My doppleganger can attack twice, instead of once, on each one of it's turns",
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('doppleganger(prereq level 8)') != -1
				}
			},
			"twin shades (prereq: doppleganger)" : {
				name : "Twin Shades",
				source : ["X:TMO", 9],
				description :  "\n    " + "I can spend an extra 2 void points to summon two doppelgängers at once",
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('doppleganger(prereq level 8)') != -1
				}
			},
			"transposition (prereq: doppleganger)" : {
				name : "Transposition",
				source : ["X:TMO", 10],
				description : "\n    " + "As a bonus action, I switch places with an existing doppelgänger.",
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('doppleganger(prereq level 8)') != -1
				},
				action : ["bonus action", ""]
			},
			"greater swarm (prereq: devouring swarm)" : {
				name : "Greater Swarm",
				source : ["X:TMO", 10],
				description : "\n    " + "I summon more rats in the swarm, giving it 20 more hitpoints.",
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('devouring swarm(prereq level 5)') != -1
				}
			},
			"twin swarms (prereq: devouring swarm)" : {
				name : "Twin Swarm",
				source : ["X:TMO", 10],
				description : "\n    " + "I can summon two smaller rat swarms, each having half the max hp of the bigger swarm",
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('devouring swarm(prereq level 5)') != -1
				}
			},
			"pull objects and creatures (prereq: far reach)" : {
				name : "Pull Objects and Creatures",
				source : ["X:TMO", 10],
				description : "\n    " + "I can target objects and creatures one size larger or smaller than me within range" +
				"\n    " + "If I do, the target is pulled towards me. If it is a creature," + 
				"\n    " + "it must make a Dex save against my Void Save DC or be pulled next to me and knocked prone on a failure",
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('far reach') != -1
				}
			},
			"decelerate (prereq: far reach)" : {
				name : "Decelerate",
				source : ["X:TMO", 10],
				description : "\n    " + "I can use far reach as a reaction to grab onto the surface I fell from",
				action : ["reaction", ""],
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('far reach') != -1
				}
			},
			"lasting mesmerize (prereq: mesmerize)" : {
				name : "Lasting Mesmerize",
				source : ["X:TMO", 10],
				description : "\n    " + "Mesmerize lasts a number of rounds equal to double my Cha modifier",
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('mesmerize(prereq level 7)') != -1
				}
			},
			"mesmerize three (prereq: mesmerize)" : {
				name : "Mesmerize Three",
				source : ["X:TMO", 10],
				description :  "\n    " + "Mesmerize can target up to 3 people",
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('mesmerize(prereq level 7)') != -1
				}
			},
			"mesmerize four (prereq: mesmerize and mesmerize three)" : {
				name : "Mesmerize Four",
				source : ["X:TMO", 10],
				description : "\n    " + "Mesmerize can target up to 4 people",
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('mesmerize(prereq level 7)') != -1 && GetFeatureChoice('class', 'themarkedone', 'void upgrades', true).indexOf('mesmerize four (prereq: mesmerize and mesmerize three)') != -1;
				}
			},
			"chain hosts (prereq: possession)" : {
				name : "Chain Hosts",
				source : ["X:TMO", 11],
				description : "\n    " + "I can spend one Void Point when possession ends to switch to another target" +
				"\n    " + "The second target must be within 30ft of the first host at the moment of switching",
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('possession(prereq level 10)') != -1;
				}
			},
			"humanoid possession (prereq: possession)" : {
				name : "Humanoid Possession",
				source : ["X:TMO", 11],
				description : "\n    " + "I can target humanoids with Possession",
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('possession(prereq level 10)') != -1;
				}
			},
			"lasting possession (prereq: possession)" : {
				name : "Lasting Possession",
				source : ["X:TMO", 11],
				description : "\n    " + "The possession now lasts a number of rounds equal to double my Cha modifier",
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('possession(prereq level 10)') != -1;
				}
			},
			"improved shadow attack (prereq: shadow walk)" : {
				name : "Improved Shadow Attack",
				source : ["X:TMO", 11],
				description : "\n    " + "I can use shadow attack twice before my shadow form ends",
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('shadow walk(prereq level 10)') != -1;
				}
			},
			"greater shadow attack (prereq: shadow walk and improved shadow attack)" : {
				name : "Greater Shadow Attack",
				source : ["X:TMO", 11],
				description : "\n    " + "I can use Shadow Attack three times before my shadow form ends",
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('shadow walk(prereq level 10)') != -1 && GetFeatureChoice('class', 'themarkedone', 'void upgrades', true).indexOf('improved shadow attack (prereq: shadow walk)') != -1;
				}
			},
			"shadow movement (prereq: shadow walk)" : {
				name : "Shadow Movement",
				source : ["X:TMO", 11],
				description : "\n    " + "While in shadow form, I gain the following benefits" +
				"\n    \u2022 " + "I can move through spaces as narrow as 1 inch without squeezing" +
				"\n    \u2022 " + "My movement speed increases by 10ft",
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('shadow walk(prereq level 10)') != -1;
				}
			},
			"greater windblast (prereq: windblast)" : {
				name : "Greater Windblast",
				source : ["X:TMO", 11],
				description : "\n    " + "I can spend an extra 2 Void Points to have Windblast deal an extra" +
				"\n    " + "6d6 bludgeoning damage and push an enemy back 20ft on a failure",
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('windblast(prereq level 5)') != -1;
				}
			},
			"shockwave (prereq: windblast)" : {
				name : "Shockwave",
				source : ["X:TMO", 11],
				description : "\n    " + "I can use Windblast as a reaction against a ranged attack" +
				"\n    " + "It increases my AC by 5 against all ranged attacks until the end of my turn",
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('windblast(prereq level 5)') != -1;
				},
				action : ["reaction", ""],
			}
		},
		"expertise" : {
			name : "Expertise",
			source : ["X:TMO", 4],
			minlevel : 6,
			description : "\n    " + "I can choose two skills to get double my proficiency bonus in",
			skillstxt : "Expertise in two skills"
		},
		"deflect" : {
			name : "Deflect",
			source : ["X:TMO", 4],
			minlevel : 7,
			description : "\n    " + "When a creature attacks me, I can use my reaction to add my proficiency bonus to my AC",
			action : ["reaction", ""]
		},
		"void refill" : {
			name : "Void Refill",
			source : ["X:TMO", 4],
			minlevel : 10,
			description : "\n    " + "As an action, I can regain 4 of my Void Points but must make a DC 10 Con save" +
			"\n    " + "On a failure, I take 1 point of exhaustion" +
			"\n    " + "After I use this feature once, the DC increases by 5 for each subsequent use until" +
			"\n    " + "I finish a long rest",
			action : ["action", ""]
		},
		"evasion" : {
			name : "Evasion",
			source : ["X:TMO", 5],
			minlevel : 11,
			description : "\n    " + "When I make a dex save that allows me to take half damage on a success, I take" +
			"\n    " + "no damage on a success and half damage on a failure",
		},
		"whispers of the void" : {
			name : "Whispers of the Void",
			source : ["X:TMO", 5],
			minlevel : 14,
			description : "\n    " + "I can cast detect thoughts without any verbal or material components" +
			"\n    " + "I can use this feature a number of times equal to my Cha modifier and regain them" +
			"\n    " + "after I finish a long rest",
			spellcastingBonus : {
				name : "Whispers of the Void",
				spells : ["detect thoughts"],
				selection : ["detect thoughts"]
			},
			action : ["action", ""],
			usages : "Charisma modifier per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			recovery : "long rest"
		},
		"improved blood thirst" : {
			name : "Improved Blood Thirst",
			source : ["X:TMO", 5],
			minlevel : 15,
			description : "\n    " + "In addition to normal Blood Thirst, I get one free attack with a Void Power" +
			"\n    " + "This attack also has advantage"
		},
		"improved void refill" : {
			name : "Improved Void Refill",
			source : ["X:TMO", 5],
			minlevel : 18,
			description : "\n    " + "The base DC for Void Refill is now 5"
		},
		"body of the void" : {
			name : "Body of the Void",
			source : ["X:TMO", 5],
			minlevel : 20,
			description : "\n    " + "My Dex and Cha increase by 2 to a new max of 22",
			scores : [0, 2, 0, 0, 0, 2],
			scoresMaximum : [0, 22, 0, 0, 0, 22]
		}
	}
}

AddSubClass("themarkedone", "void knife", {
	regExpSearch : /^(?=.*void)(?=.*knife).*$/i,
	subname : "Void Knife",
	source : ["X:TMO", 5],
	fullname : "Void Knife of the Marked One",
	features : {
		"subclassfeature3" : {
			name : "Death Blow",
			source : ["X:TMO", 5],
			minlevel : 3,
			description : "\n    " + "If I hit a surprised enemy, I deal damage equal to a number of d6 equal to" +
			"\n    " + "double my proficiency mod once per round." +
			"\n    " + "I get proficiency in stealth or one Marked One skill if already proficient.",
			skills : ["Stealth"],
			skillstxt : "Proficiency in stealth; choose one Marked One skill if already proficient",
		},
		"subclassfeature9" : {
			name : "Enhanced Reflexes",
			source : ["X:TMO", 5],
			minlevel : 9,
			description : "\n    " + "I have adv. on initiative and can use 2 reactions per round",
			action : ["reaction", " (2 reactions per round)"]
		},
		"subclassfeature13" : {
			name : "Shadow Kill",
			source : ["X:TMO", 6],
			minlevel : 13,
			description : "\n    " + "Killing a surprised enemy turns their body to ash, leaving behind magical equipment." +
			"\n    " + "Their body and soul is sent to the void during this instance."
		},
		"subclassfeature17" : {
			name : "Void Step",
			source : ["X:TMO", 6],
			minlevel : 17,
			description : "\n    " + "As a bonus action, I can step into the void, taking no action to leave as well" +
			"\n    " + "While in the void, I can only interact with creatures on that plane and creatures can't see me" +
			"\n    " + "except if they have a special ability that allows them to." +
			"\n    " + "I ignore all objects and effects not in the void and can see 60ft into the plane I came from" +
			"\n    " + "At the end of my turn, I am taken out of the Void at my current position." +
			"\n    " + "If I am in an object, I am pushed out to the nearest empty space," +
			"\n    " + "taking 1d10 force dmg per 5ft." +
			"\n    " + "The first creature I attack after coming out of the void counts as surprised.",
			usages : "Charisma mod per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			recovery : "long rest",
		}
	}
});

AddSubClass("themarkedone", "bone crafter", {
	regExpSearch : /^(?=.*bone)(?=.*crafter).*$/i,
	subname : "Bone Crafter",
	source : ["X:TMO", 6],
	fullname : "Bone Crafter of the Marked One",
	features : {
		"subclassfeature3" : {
			name : "Bonecrafting",
			source : ["X:TMO", 6],
			minlevel : 3,
			description : "\n    " + "During a long rest, I can craft a bonecharm with 15gp of material per trait" +
			"\n    " + "I can only use one trait among all the bonecharms I possess" +
			"\n    " + "If I already have a bonecharm of novice, adept, or master, a new one turns the old to ash" +
			"\n    " + "I am the only one who can benefit from bone charms" +
			"\n    " + "They are destroyed and turned to ash if they are off me for an hour" +
			"\n    " + "Enhanced versions of each trait aren't unlocked until level 17",
			extraname : "Bone Traits",
			extrachoices : ["acrobat (novice)", "adrenaline surge (novice)", "agile recovery (novice)", "aquatic nature (novice)", 
			"imbue void (novice)", "strong lungs (novice)", "swift shadow (novice)", "swift stalker (novice)", 
			"agile will (adept & prereq: possession)", "elemental resistance (adept)", "enduring allies (adept & prereq: doppleganger)", 
			"resilient power (adept & prereq: doppleganger)", "robust (adept)", "shadow embrace (adept & prereq: shadow walk)",
			"spirited (adept)", "syngeric swarm (adept & prereq: devouring swarm)", "unsteady hand (adept)", "arcane bypass (master)",
			"falling star (master)", "redirection (master & prereq: windblast & shockwave)", "stoneskin (master)",
			"void armor (master)", "void favor (master)", "void rapture (master & prereq: mesmerize)"],
			"acrobat (novice)" : {
				name : "Acrobat",
				source : ["X:TMO", 7],
				description : "\n    " + "I have a climbing speed equal to my movement speed" + 
				"\n    " + "If I end my turn on a vertical surface or the ceiling without something to grab onto, I fall",
				speed : {
					climb : { spd : "walk", enc : 0 }
				}
			},
			"adrenaline surge (novice)" : {
				name : "Adrenaline Surge",
				source : ["X:TMO", 7],
				description : "\n    " + "I gain 5 temp hp when I reduce an enemy to 0 hp" +
				"\n    " + "\t Enhanced version: For each additional trait I have" +
				"\n    " + "\t increase temp hp gained by 5"
			},
			"agile recovery (novice)" : {
				name : "Agile Recovery",
				source : ["X:TMO", 7],
				description : "\n    " + "Damage reduction from Enhanced Traversal increases to 5 times marked one level." +
				"\n    " + "\t Enhanced version: Increase multiple for each time this" +
				"\n    " + "\t trait is activated to a max of 4",
				additional : levels.map(function (n) {
					return (n*5) + " damage" + ";" + (n*6) + " damage" + ";" + (n*7) + " damage" + ";" + (n*8) + " damage" + ";" + (n*9) + " damage";
				})
			},
			"aquatic nature (novice)" : {
				name : "Aquatic Nature",
				source : ["X:TMO", 6],
				description : "\n    " + "I can swimming speed equal to my walking speed",
				speed : { swim : { spd : "walk", enc : 0 }}
			},
			"imbue void (novice)" : {
				name : "Imbue Void",
				source : ["X:TMO", 6],
				description : "\n    " + "My weapon attacks count as magical for the purpose of overcoming resistances" +
				"\n    " + "\t  Enhanced version: +1 bonus to attack and damage per trait"
			},
			"strong lungs (novice)" : {
				name : "Strong Lungs",
				source : ["X:TMO", 6],
				description : "\n    " + "I can hold my breath for an hour."
			},
			"swift shadow (novice)" : {
				name : "Swift Shadow",
				source : ["X:TMO,", 6],
				description : "\n    " + "I can travel at a normal pace while still using stealth"
			},
			"swift stalker (novice)" : {
				name : "Swift Stalker",
				source : ["X:TMO", 6],
				description : "\n    " + "I can travel at fast pace without penalty to my passive perception"
			},
			"agile will (adept & prereq: possession)" : {
				name : "Agile Will",
				source : ["X:TMO", 6],
				description : "\n    " + "My possession lasts double my cha mod and triple with Lasting Posession",
				prereqeval : "classes.known.themarkedone.level >= 9" && function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('possession(prereq level 10)') != -1
				}
			},
			"elemental resistance (adept)" : {
				name : "Elemental Resistance",
				source : ["X:TMO", 6],
				description : "\n    " + "I gain resistance to either acid, cold, fire, lightning, or thunder"
			},
			"enduring allies (adept & prereq: doppleganger)" : {
				name : "Enduring Allies",
				source : ["X:TMO", 6],
				description : "\n    " + "My doppleganger now lasts for two minutes",
				prereqeval : "classes.known.themarkedone.level >= 9" && function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('possession(prereq level 10)') != -1
				}
			},
			"resilient power (adept & prereq: doppleganger)" : {
				name : "Resilient Power",
				source : ["X:TMO", 6],
				description : "\n    " + "my doppleganger gets 20 more hitpoints",
				prereqeval : "classes.known.themarkedone.level >= 9" && function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('possession(prereq level 10)') != -1
				}
			},
			"robust (adept)" : {
				name : "Robust",
				source : ["X:TMO", 6],
				description : "\n    " + "Healing potions heal an extra amount equal to my Cha modifier" +
				"\n    " + "\t Enhanced Version: For each robust trait, additional healing increased by" +
				"\n    " + "\t Cha modifier"
			},
			"shadow embrace (adept & prereq: shadow walk)" : {
				name : "Shadow Embrace",
				source : ["X:TMO", 8],
				description : "\n    " + "My shadow form lasts for two minutes",
				prereqeval : "classes.known.themarkedone.level >= 9" && function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('shadow walk(prereq level 10)') != -1
				}
			},
			"spirited (adept)" : {
				name : "Spirited",
				soruce : ["X:TMO", 8],
				description : "\n    " + "My void refill grants an extra 2 Void Points when used"
			},
			"syngeric swarm (adept & prereq: devouring swarm)" : {
				name : "Syngeric Swarm",
				source : ["X:TMO", 8],
				description : "\n    " + "My rat swarm lasts for twenty minutes",
				prereqeval : "classes.known.themarkedone.level >= 9" && function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('devouring swarm(prereq level 5)') != -1
				}
			},
			"unsteady hand (adept)" : {
				name : "Unsteady Hand",
				source : ["X:TMO", 8],
				description : "\n    " + "I can cast counterspell at 5th level once per long rest" +
				"\n    " + "\t Enhanced Version: For each trait, I get an additional use of Unsteady Hand",
				spellcastingBonus : {
					name : "Unsteady Hand",
					spells : ["counterspell"],
					selection : ["counterspell"]
				}
			},
			"arcane bypass (master)" : {
				name : "Arcane Bypass",
				source : ["X:TMO", 8],
				description : "\n    " + "I advantage on my choice of Str, Dex, Con, Int, Wis, Cha saves" +
				"\n    " + "\t Enhanced Version: For each trait, I gain an additional choice"
			},
			"falling star (master)" : {
				name : "Falling Star",
				source : ["X:TMO", 8],
				description : "\n    " + "I gain a Void Point for bringing a creature to 0 hp" +
				"\n    " + "\t Enhanced Version: For each trait, add an additional Void Point"
			},
			"redirection (master & prereq: windblast & shockwave)" : {
				name : "Redirection",
				source : ["X:TMO", 8],
				description : "\n    " + "If a ranged attack misses me with shockwave, I can redirect it" +
				"\n    " + "I use the attack roll of the attacker against him, dealing 3d6 weapon damage" +
				"\n    " + "\t Enhanced Version: For each trait, add an additional d6",
				prereqeval : "classes.known.themarkedone.level >= 9" && function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('windblast(prereq level 5)') != -1
					&& GetFeatureChoice('class', 'themarkedone', 'void upgrades', true).indexOf('shockwave (prereq: windblast)') != -1
				}
			},
			"stoneskin (master)" : {
				name : "Stoneskin",
				source : ["X:TMO", 8],
				description : "\n    " + "I have resistance to bludgeoning, piercing, and slashing damage",
				dmgres : [["Bludgeoning", "Bludgeon."], ["Piercing", "Piercing"], ["Slashing", "Slashing"]],
			},
			"void armor (master)" : {
				name : "Void Armor",
				source : ["X:TMO", 8],
				description : "\n    " + "I gain +1 AC" +
				"\n    " + "\t Enhanced Version: For each trait, add +1 to AC"
			},
			"void favor (master)" : {
				name : "Void Favor",
				source : ["X:TMO", 8],
				description : "\n    " + "10% chance to not spend Void Points when using Void Power" +
				"\n    " + "\t Enhanced Version: For each trait, add 2%"
			},
			"void rapture (master & prereq: mesmerize)" : {
				name : "Void Rapture",
				source : ["X:TMO", 8],
				description : "\n    " + "When I cast Mesmerize, I cast 3rd level sleep on each person affected" +
				"\n    " + "\t Enhanced Version: For each trait, increase sleep level by 2.",
				prereqeval : "classes.known.themarkedone.level >= 13" && function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('mesmerize(prereq level 7)') != -1
				},
				spellcastingBonus : {
					name : "Void Rapture",
					spells : ["sleep"],
					selection : ["sleep"]
				}
			}
		},
		"subclassfeature3.1" : {
			name : "Novice Bonecrafter",
			source : ["X:TMO", 6],
			minlevel : 3,
			description : "\n    " + "I can place novice traits on my bonecharm" +
			"\n    " + "The max number of traits on a bonecharm I can have is 2"
		},
		"subclassfeature9" : {
			name : "Adept Bonecrafter",
			source : ["X:TMO", 6],
			minlevel : 9,
			description : "\n    " + "I can place adept traits on my bonecharm" +
			"\n    " + "The max number of traits on a bonecharm I can have is 3"
		},
		"subclassfeature13" : {
			name : "Master Bonecrafter",
			source : ["X:TMO", 6],
			minlevel : 13,
			description : "\n    " + "I can place master traits on my bonecharm" +
			"\n    " + "The max number of traits on a bone charm I can have is 4"
		},
		"subclassfeature17" : {
			name : "Bone Synergy",
			source : ["X:TMO, 6"],
			minlevel : 17,
			description : "\n    " + "I can use the same trait up to 4 times, making it enhanced" +
			"\n    " + "I can craft a bonecharm that uses Novice, Adept, and Master traits" +
			"\n    " + "I can only have one bonecharm of that type on me at a time"
		}
	}
});

CreatureList["doppleganger"] = {
	name : "Void Dopplegänger",
	source : ["X:TMO", 9],
	size : 3,
	type : "Humanoid",
	subtype : "",
	alignment : "My Alignment",
	ac : Value('Comp.Use.AC', Number(How('Comp.Use.AC'))),
	hp :  ((8+Number(What('Con'))*levels.map(function(n){return n;})/2)),
	hd : [levels.map(function(n){return n;}), 8],
	speed : "30 ft",
	scores : [14, 16, 14, 10, 14, 8],
	saves : ["", 5, "", "", "", 1],
	skills : {
		"acrobatics" : 5,
		"athletics" : 4
	},
	senses : "",
	passivePerception : 12,
	languages : "All langauges I know",
	challengeRating : "3",
	proficiencyBonus : levels.map(function(n){
		return n < 13 ? 4 : n < 17 ? 5 : 6;
	}),
	attacksAction : 1,
	attacks : [],
	traits : [{
		name : "Duration",
		description : "A doppleganger can only appear for 1 minute"
	}, {
		name : "Restrictions",
		description : "A doppleganger can only dash towards an enemy or attack an enemy. It will follow you until it disappears or sees enemies."
	}, {
		name : "Health",
		description : "It's max health is equal to your max hp divided by 2"
	}]
};