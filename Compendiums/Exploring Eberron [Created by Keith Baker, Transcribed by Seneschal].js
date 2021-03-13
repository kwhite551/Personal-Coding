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
        additional : "simple or martial weapon; requires attunement",
        eval : function (lvl, chc) {
            AddMagicItem("Bane Weapon");
        },
        removeeval : function (lvl, chc) {
            var loc = CurrentMagicItems.known.indexOf("Bane Weapon");
            if (loc == -1) return;
            MagicItemClear(loc + 1, true);
        }
    }),
    AddFeatureChoice(ClassList.artificer.features["infuse item"], true, "Fortify Defense (prereq: level 6 artificer)", {
        name : "Fortify Defense",
        source : ["KB:EE", 216],
        description : desc([
            "The armor has a +1 bonus to AC while a creature wears it",
            "When a creature wearing the armor is hit with a critical hit, a charge can be expended to make it a normal hit",
            "Any effect caused by the critical hit is negated as well",
            "This armor has 4 charges and regains 1d4 of them at dawn"
        ]),
        additional : "suit of armor; requires attunement",
        prereqeval : function(v) { return classes.known.artificer.level >= 6; },
        eval : function (lvl, chc) {
            AddMagicItem("Fortify Defense");
        },
        removeeval : function (lvl, chc) {
            var loc = CurrentMagicItems.known.indexOf("Fortify Defense");
            if (loc == -1) return;
            MagicItemClear(loc + 1, true);
        }
    }),
    AddFeatureChoice(ClassList.artificer.features["infuse item"], true, "Healing Salve (prereq: level 6 artificer)", {
        name : "Healing Salve",
        source : ["KB:EE", 216],
        description : desc([
            "As an action, I expend 1 charge and touch a creature to heal them for 1d6 + my Int modifier hp",
            "This item has 4 charges and regains 1d4 of them at dawn"
        ]),
        additional : "a jar of lotion",
        prereqeval : function(v) { return classes.known.artificer.level >= 6; },
        eval : function (lvl, chc) {
            AddMagicItem("Healing Salve");
        },
        removeeval : function (lvl, chc) {
            var loc = CurrentMagicItems.known.indexOf("Healing Salve");
            if (loc == -1) return;
            MagicItemClear(loc + 1, true);
        }
    }),
    AddFeatureChoice(ClassList.artificer.features["infuse item"], true, "Quiver of Energy (prereq: level 6 artificer)", {
        name : "Quiver of Energy",
        source : ["KB:EE", 216],
        description : desc([
            "I choose between cold, fire, lightning or poison damage",
            "The first time I hit a target with ammunition from this quiver, I deal an extra 1d6 of that damage"
        ]),
        additional : "a quiver; requires attunement",
        prereqeval : function(v) { return classes.known.artificer.level >= 6; },
        eval : function (lvl, chc) {
            AddMagicItem("Quiver of Energy");
        },
        removeeval : function (lvl, chc) {
            var loc = CurrentMagicItems.known.indexOf("Quiver of Energy");
            if (loc == -1) return;
            MagicItemClear(loc + 1, true);
        }
    }),
    AddFeatureChoice(ClassList.artificer.features["infuse item"], true, "Resistance Breaker", {
        name : "Resistance Breaker",
        source : ["KB:EE", 216],
        description : desc([
            "When I hit a creature, I can expend 1 charge to nullify all damage resistances of that target",
            "This weapon has 5 charges and regains 1d4 + 1 charges at dawn"
        ]),
        additional : "a simple or martial weapon",
        eval : function (lvl, chc) {
            AddMagicItem("Resistance Breaker");
        },
        removeeval : function (lvl, chc) {
            var loc = CurrentMagicItems.known.indexOf("Resistance Breaker");
            if (loc == -1) return;
            MagicItemClear(loc + 1, true);
        }
    }),
    AddFeatureChoice(ClassList.artificer.features["infuse item"], true, "Silent Weapon", {
        name : "Silent Weapon",
        source : ["KB:EE", 216],
        description : desc([
            "I have +1 to attack and damage rolls made with this magic weapon",
            "When I miss a ranged attack roll with this weapon while hidden, my position isn't revealed"
        ]),
        additional : "a simple or martial ranged weapon",
        eval : function (lvl, chc) {
            AddMagicItem("Silent Weapon");
        },
        removeeval : function (lvl, chc) {
            var loc = CurrentMagicItems.known.indexOf("Silent Weapon");
            if (loc == -1) return;
            MagicItemClear(loc + 1, true);
        }
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
                        "else if (classes.known.artificier && classes.known.artificier > 13 && (/ghaal’shaarat/i).test(v.weaponText) { output.extraDmg += 3 && output.extraHit += 3 };"
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
            name : "Arcane Breakthroughs",
            source : ["KB:EE", 215],
            minlevel : 3,
            description : desc([
                "I can gain a spell list from my choice of bard, cleric, druid, paladin, ranger, sorcerer, warlock, or wizard",
                "I can also prepare a number of additional spells from my breakthrough list when preparing artificer spells",
                "This number of spells and spell list increases as I gain more levels in artificer."
            ]),
            additional : levels.map(function (n) {
                if (n<3) return ""
                return n < 5 ? "1st level spell" : n < 9 ? "1st level spell; 2nd level spell" : n < 13 ? "1st level spell; 2nd level spell; 3rd level spell" : n < 17 ? "1st level spell; 2nd level spell; 3rd level spell; 4th level spell" : "1st level spell; 2nd level spell; 3rd level spell; 4th level spell; 5th level spell"
            }),
            extrachoices : ["Bard", "Cleric", "Druid", "Paladin", "Ranger", "Sorcerer", "Warlock", "Wizard"],
            "bard" : {
                name : "Bard",
                source : ["KB:EE", 215],
                spellcastingBonus : {
                    "class" : ["bard"]
                }
            },
            "cleric" : {
                name : "Cleric",
                source : ["KB:EE", 215],
                spellcastingBonus : {
                    "class" : ["cleric"]
                }
            },
            "druid" : {
                name : "Druid",
                source : ["KB:EE", 215],
                spellcastingBonus : {
                    "class" : ["druid"]
                }
            },
            "paladin" : {
                name : "Paladin",
                source : ["KB:EE", 215],
                spellcastingBonus : {
                    "class" : ["paladin"]
                }
            },
            "ranger" : {
                name : "Ranger",
                source : ["KB:EE", 215],
                spellcastingBonus : {
                    "class" : ["ranger"]
                }
            },
            "sorcerer" : {
                name : "Sorcerer",
                source : ["KB:EE", 215],
                spellcastingBonus : {
                    "class" : ["sorcerer"]
                }
            },
            "warlock" : {
                name : "Warlock",
                source : ["KB:EE", 215],
                spellcastingBonus : {
                    "class" : ["warlock"]
                }
            },
            "wizard" : {
                name : "Wizard",
                source : ["KB:EE", 215],
                spellcastingBonus : {
                    "class" : ["wizard"]
                }
            }
        },
        "subclassfeature3.1" : {
            name : "Cantrip Specialist",
            source : ["KB:EE", 215],
            minlevel : 3,
            description : desc([
                "I know an additinonal cantrip than what is allowed for my artificer level",
                "When I finish a short rest, I can replace a cantrip with another artificer or breakthrough cantrip",
                "If it is a breakthrough cantrip, this counts as an artitifcer cantrip"
            ]),
            additional : "One extra cantrip"
        },
        "subclassfeature5" : {
            name : "Cantrip Savant",
            source : ["KB:EE", 215],
            minlevel : 5,
            description : desc([
                "I gain a +1 bonus to my attack roll and save DC for artificer spells",
                "This doesn't apply if my spellcasting focus grants a higher bonus",
                "This bonus increases at 9th level and 15th level",
                "As an action, I can replace an artificer cantrip I know with a different cantrip",
                "This can come from my artificer or breakthrough spell list",
                "I can use this action once and regain its use after a long rest"
            ]),
            action : ["action", "Cantrip Swap"],
            usages : 1,
            recovery : "long rest",
            calcChanges : {
                spellCalc : [
                    levels.map(function (type, n) {
                        if (n < 9 && (type == "dc" && type == "attack")) return 1;
                        if (n < 15 && (type == "dc" && type == "attack")) return 2;
                        if (type == "dc" && type == "attack") return 3;
                    })
                ]
            }
        },
        "subclassfeature9" : {
            name : "Superior Breakthroughs",
            source : ["KB:EE", 215],
            minlevel : 9,
            description : desc([
                "I can cast a prepared breakthrough spell two spell slots higher than the current cast",
                "I can use this feature a number of times equal to my Intelligence modifier",
                "I regain all uses after a short or long rest"
            ]),
            usages : "Intelligence modifier per",
            usagescalc : "event.value = Math.max(1, What('Int Mod'));",
            recovery : "short rest"
        },
        "subclassfeature9.1" : {
            name : "Work in Progress",
            source : ["KB:EE", 215],
            minlevel : 9,
            description : desc([
                "I can replace a prepared artificer spell with any spell from my spell list",
                "This new spell counts as a prepared spell",
                "I can use this feature once and regain its use after a short or long rest"
            ]),
            usages : 1,
            recovery : "short rest",
        },
        "subclassfeature15" : {
            name : "Final Breakthrough",
            source : ["KB:EE", 215],
            minlevel : 15,
            description : desc([
                "I gain 1 extra spell slot of each spell level I can prepare",
                "These spell slots can only be used to cast Breakthrough spells",
            ]),
        }
    }
});

AddSubClass("bard", "dirge singer", {
    regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*dirge)(?=.*(singer)).*$/i,
    subname : "College of the Dirge Singer",
    features : {
        "subclassfeature3.bardic inpsiration" : {
            name : "Bardic Inspiration",
            source : [["SRD", 12], ["P", 53]],
            minlevel : 1,
            description : desc([
                "As a bonus action, I give a creature in 60 ft that can hear me an inspiration die (max 1)",
                "For 10 min, the recipient can add it to one ability check, attack roll, or saving throw",
                "This addition can be done after seeing the d20 roll, but before knowing the outcome"
            ]),
            additional : ["d6", "d6", "d6", "d6", "d6", "d6", "d6", "d6", "d6", "d8", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10", "d10", "d10"],
            usages : "Charisma modifier per ",
            usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
            recovery : levels.map(function (n) {
                return n < 5 ? "long rest" : "short rest";
            }),
            action : ["bonus action", ""],
            eval : function() {
				processActions(false, "Bard: Bardic Inspiration", ClassList.bard.features["subclassfeature2.bardic inspiration"].action, "Bardic Inspiration");
			}
		},
        "subclassfeature3" : {
            name : "Broad Inspiration",
            source : ["KB:EE", 216],
            minlevel : 3,
            description : desc([
                "I learn the guidance cantrip as a bard spell that doesn't count against my cantrip amount",
                "As a bonus action, I can give two people inspiration within 60 feet of me",
                "This uses one of my Bardic Inspiration uses",
                "My bardic inspiration becomes a d8 at 10th level and d10 at 15th level instead"
            ])
        },
        "subclassfeature3.1" : {
            name : "Keeper of History",
            source : ["KB:EE", 216],
            minevel : 3,
            description : desc([
                "I gain proficiency in either History or Performance",
                "if I am proficient in both skills, I gain proficiency in my choice of:",
                "Arcana, Intimdiation, or Deception",
                "Additionally, I choose either History or Performance to gain expertise in"
            ]),
            skillstxt : "History, Performance, or my choice of Arcana, Intimidation, or Deception",
            extrachoices : ["History", "Performance"],
            "history" : {
                name : "History Expertise",
                source : ["KB:BE", 216],
                description : desc([""]),
                skills : [["History", "only"]]
            },
            "performance" : {
                name : "Performance Expertise",
                source : ["KB:BE", 216],
                description : desc([""]),
                skills : [["Performance", "only"]]
            }
        },
        "subclassfeature6" : {
            name : "Commanding Voice",
            source : ["KB:EE", 216],
            minlevel : 6,
            description : desc([
                "As a reaction, I can have a creature with my bardic inspiration die attack again",
                "This creature must use the attack action for me to grant an additional attack",
                "The creature rolls the Bardic Inspiraiton die and attacks the number rolled to damage"
            ]),
            action : ["reaction", ""]
        },
        "subclassfeature14" : {
            name : "Master commander",
            source : ["KB:EE", 216],
            minlevel : 14,
            description : desc([
                "I can use Countercharm as a bonus action",
                "If charmed or frightened, a creature immediately makes a save against the effect",
                "A creature benefiting from Countercharm gains a d4 to an ability check or saving throw"
            ]),
            action : ["bonus action", "Countercharm"]
        }
    }
});

AddSubClass("cleric", "mind domain", {
    regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*mind).*$/i,
    subname : "Mind Domain",
    source : ["KB:EE", 217],
    spellcastingExtra : ["command", "dissonant whispers", "detect thoughts", "phantasmal force", "enemies abound", "fear", "confusion", "phantasmal killer", "dominate person", "telekinesis"],
    features : {
        "subclassfeature1" : {
            name : "Flash of Insight",
            source : ["KB:EE", 217],
            minlevel : 1,
            description : desc([
                "I can reroll an ability check after I see the result but before it is failure or success",
                "I gain a bonus to this reroll equal to half my cleric level"
            ]),
            additional : levels.map(function (n) { return "+" + Math.floor(n/2);}),
            usages : 2,
            recovery : "short rest"
        },
        "subclassfeature1.1" : {
            name : "Psychic Force",
            minlevel : 1,
            source : ["KB:EE", 217],
            description : desc([
                "When I cast a cantrip that deals radiant damage, it can deal psychic damage instead"
            ])
        },
        "subclassfeature1.2" : {
            name : "Channel Divinity: Psychic Feedback",
            source : ["KB:EE", 217],
            minlevel : 1,
            description : desc([
                "I can impose disadvantage on a creature's Wisdom save within 30 feet as a reaction",
                "I must use this ability before learning the outcome of the roll",
                "If the spell or effect that caused the save isn't mine, I deal psychic damage",
                "The creature takes psychic damage equal to half my cleric level before their save"
            ]),
            additional : levels.map(function (n) { return "+" + Math.floor(n/2);})
        },
        "subclassfeature6" : {
            name : "Gestalt Anchor",
            source : ["KB:EE", 217],
            minlevel : 6,
            description :desc([
                "I grant a +2 bonus to Int, Wis, or Cha saves for me or allies within 10 feet of me",
                "I must be conscious to grant this bonus"
            ])
        },
        "subclassfeature8" : {
            name : "Potent Spellcasting",
            source : ["KB:EE", 217],
            minlevel : 8,
            description : desc([
                "I add my Wisdom modifier to damage I deal with cleric cantrips"
            ])
        },
        "subclassfeature17" : {
            name : "Bend Reality",
            source : ["KB:EE", 217],
            minlevel : 17,
            description : desc([
                "I can replace an ally's failed save with a 20 within 30 feet of me",
                "I can use this feature once and regain all uses after a short or long rest"
            ]),
            usages : 1,
            recovery : "short rest"
        }
    }
});

AddSubClass("druid", "circle of the forged", {
    regExpSearch : /^(?=.*(druid|shaman))((?=.*\forged\b)|((?=.*\bmany\b)(?=.*\bforms?\b))).*$/i,
    subname : "Circle of the Forged",
    source : ["KB:EE", 217],
    features : {
        "subclassfeature2.wild shape" : {
			name : "Wild Shape",
			source : ["KB:EE", 217],
			minlevel : 2,
			description : desc([
				"As an action, I assume the shape of a beast I have seen before with these rules:",
				" \u2022 I gain all its game statistics except Intelligence, Wisdom, or Charisma",
				" \u2022 I get its skill/saving throw prof. while keeping my own, using whichever is higher",
				" \u2022 I assume the beast's HP and HD; I get mine back when I revert back",
				" \u2022 I can't cast spells in beast form, but transforming doesn't break concentration",
				" \u2022 I retain features from class, race, etc., but I don't retain special senses",
				" \u2022 I can choose whether equipment falls to the ground, merges, or stays worn",
				" \u2022 I revert if out of time or unconscious; if KOd by damage, excess damage carries over"
			]),
			usages : 2,
			recovery : "short rest",
			additional : levels.map(function (n) {
				if (n < 2) return "";
				var cr = Math.max(1, Math.floor(n/3));
				var hr = Math.floor(n/2);
				var restr = n < 4 ? ", no fly/swim" : n < 8 ? ", no fly" : "";
				return "CR " + cr + restr + "; " + hr + (restr.length ? " h" : " hours");
			}),
			eval : function() {
				processActions(false, "Druid: Wild Shape", ClassList.druid.features["subclassfeature2.wild shape"].action, "Wild Shape");
			}
		},
        "subclassfeature2.1" : {
            name : "Skin of Steel",
            source : ["KB:EE", 218],
            minlevel : 2,
            description : desc([
                "While transformed by Wild Shape, I gain the following benefits",
                " \u2022 +2 bonus to AC",
                " \u2022 Advantage on saves against poisoned",
                " \u2022 Resistance to poison damage",
                " \u2022 I don't need to eat, drink or breathe",
                " \u2022 I am immune to disease",
                " \u2022 I don't need to sleep and can't be put to sleep by magic"
            ]),
            dmgres : [["poison", "poison (in Wild Shape)"]],
            savetxt : {
                text : ["I don't need to eat, drink, sleep, or breathe; I can't be put to sleep by magic"],
                immune : ["disease"],
                adv_vs : ["poisoned"]
            }
        },
        "subclassfeature6" : {
            name : "Elemental Fury",
            source : ["KB:EE", 218],
            minlevel : 6,
            description : desc([
                "When I use Wild Shape, I choose between acid, cold, fire, or lightning",
                "When I hit with a melee attack for the first time, I can expend a spell slot to do +1d6 damage",
                "This increases by +1d6 for each spell slot level above 1st",
                "The damage types and effects are detailed in \"Page 3 Notes\""
            ]),
            toNotesPage : [{
                name : "Acid Elemental Fury",
                source : ["KB:EE", 218],
                note : [
                    "A creature I hit makes a Constitution save against my Druid spell DC",
                    "On a failure, their AC is reduced by half my Wisdom modifier (min 1)",
                    "At the start of its turn for the next minute, it makes another save",
                    "On a success, the effect ends"
                ],
                page3Notes : true,
                popupName : "Elemental Fury (Acid)"
            },{
                name : "Cold Elemental Fury",
                source : ["KB:EE", 218],
                note : [
                    "A creature I hit makes a Constitution save against my Druid spell DC for 1 min",
                    "On a failure, their movement speed is reduced to 0",
                    "They also have disadvantage on Strength and Dexterity saves",
                    "On a success, the effect ends"
                ],
                page3Notes : true,
                popupName : "Elemental Fury (Cold)"
            },{
                name : "Fire Elemental Fury",
                source : ["KB:EE", 218],
                note : [
                    "A creature I hit makes a Constitution save against my Druid spell DC for 1 min",
                    "On a failure, they take fire damage equal to half my Wisdom modifier (min 1)",
                    "On a success, the effect ends",
                    "A creature within 5 ft can use an action to douse the flames",
                    "Any effect that would douse flames (submerged in water) ends the effect as well"
                ],
                page3Notes : true,
                popupName : "Elemental Fury (Fire)"
            },{
                name : "Lightning Elemental Fury",
                source : ["KB:EE", 218],
                note : [
                    "A creature I hit makes a Constitution save against my Druid spell DC",
                    "On a failure, they lose their reaction until the start of their next turn",
                    "The first attack it makes on its turn is made with disadvantage",
                    "On a success, the effect ends"
                ],
                page3Notes : true,
                popupName : "Elemental Fury (Lightning)"
            }]
        },
        "subclassfeature10" : {
            name : "Adamantine Hide",
            source : ["KB:EE", 218],
            minlevel : 10,
            description : desc([
                "While transformed by Wild Shape, I am resistant to nonmagical bludgeoning/piercing/slashing",
                "I can Wild Shape as a reaction when I take damage and the damage is applied to my beast form"
            ]),
            action : ["reaction", " (when taking damage)"],
            dmgres : [["Nonmagical Bludgeoning", "Nonmagic Bludgeon. (Wild Shape)"], ["Nonmagical Piercing", "Nonmagic Piercing (Wild Shape)"], ["Nonmagical Slashing", "Nonmagic Slashing (Wild Shape)"]],
        },
        "subclassfeature14" : {
            name : "Constructed Perfection",
            source : ["KB:EE", 218],
            minlevel : 14,
            description : desc([
                "While transformed by Wild Shape, I am immunne to the following conditions:",
                "Charmed, Frightened, Paralyzed, Petrified, Poisoned",
                "I am also immune to poison damage while in beast form"
            ]),
            savetxt : {
                immune : ["charmed", "frightened", "paralyzed", "petrified", "poisoned", "poison damaged"]
            }
        }
    }
});

AddSubClass("monk", "way of the living weapon", {
    regExpSearch : /^(?=.*living)(?=.*weapon)/,
    subname : "Way of the Livig Weapon",
    source : ["KB:EE", 218],
    features : {
        "subclassfeature3" : {
            name : "Martial Discpline",
            source : ["KB:EE", 218],
            minlevel : 3,
            description : desc([
                "Choose a Martial Discipline using the \"Choose Features\" button above"
            ]),
            choices : ["Forged Heart", "Nightmare Shroud", "Traveler's Blade", "Weretouched"],
            "forged heart" : {
                name : "Forged Heart Martial Discipline",
                source : ["KB:EE", 218],
                description : desc([
                    "My unarmed strikes are considered adamantine weapons",
                    "When I hit a creature with an unarmed strike, I can spend 1 ki point to force a Strength save",
                    "On a failure, the creature takes 2d6 damage of the unarmed strike's type",
                    "They are also pushed up to 15 ft away from me",
                    "On a success, they take 1d6 damage and aren't pushed back"
                ]),
                calcChanges : {
                    atkCalc : [
                        function (fields, v, output) {
                            if (v.baseWeaponName == "unarmed strike" && !v.thisWeapon[1] && !(/counts as( a)? adamantine/i).test(fields.Description)) {
								fields.Description += (fields.Description ? '; ' : '') + 'Counts as adamatine weapon';
							};
						},
						"My unarmed strikes count as adamatine weapons."
                    ]
                }
            },
            "nightmare shroud" : {
                name : "Nightmare Shroud Martial Discipline",
                source : ["KB:EE", 219],
                description : desc([
                    "When I hit a creature with an unarmed strike, I can spend 1 ki point to force a Wisdom save",
                    "On a failure, the creature takes 1d6 psychic damage and becomes frightened of me",
                    "This lasts until the end of my next turn",
                    "On a success, the creature is immune to the fear effect of this ability for 24 hours"
                ])
            },
            "traveler's blade" : {
                name : "Traveler's Blade Martial Discpline",
                source : ["KB:EE", 219],
                description : desc([
                    "My reach extends by 5 ft",
                    "At the start of my turn, I can spend up to 4 ki points to extend my reach",
                    "Each ki point extends my reach by 5 ft"
                ])
            },
            "weretouched" : {
                name : "Weretouched Martial Discipline",
                source : ["KB:EE", 219],
                description : desc([
                    "Once per turn, I can spend 1 ki point when I hit a creature with an unarmed strike",
                    "The creature takes 1d4 slashing damage at the end of its turn for 1 minute",
                    "This bleeding efffect ends early if the creature has 1 or more hit point restored",
                    "It also ends when a healer's kit is used or they succed a Wisdom save",
                    "The DC is equal to my ki save DC",
                    "At 6th level, this slashing damage is magical"
                ])
            }
        },
        "subclassfeature3.1" : {
            name : "Mutable Strike",
            source : ["KB:EE", 219],
            minlevel : 3,
            description : desc([
                "When I make an unarmed strike, I can switch between bludgeoning/piercing/slashing damage"
            ])
        },
        "subclassfeature6" : {
            name : "Manifest Blow",
            source : ["KB:EE", 219],
            minlevel : 6,
            description : desc([
                "I choose one of the following damage types when I finish a long rest",
                "bludgeoning, piercing, slashing, cold, lighning, necrotic, psychic, or thunder",
                "The first creature I hit with an unarmed strike on my turn takes damage",
                "If I select bludgeoning, piercing, or slashing, it benefits from Ki-Empowered Strikes",
            ]),
            additional : levels.map(function(n){
                if (n < 6 ? "" : n < 11 ? "1d6 damage" : "2d6 damage");
            })
        },
        "subclassfeature11" : {
            name : "Reflexive Adapation",
            source : ["KB:EE", 219],
            minlevel : 11,
            description : desc([
                "When I make a Strength (Athletics)/Dexterity (Acrobatics) check, I can spend 1 ki point",
                "I can roll an additional d20 after I roll but before I learn the outcome",
                "I choose either d20 for the check, omitting the highest if made with disadvantage",
            ])
        },
        "subclassfeature17" : {
            name : "Perfect Form",
            source : ["KB:EE", 219],
            minlevel : 17,
            description :desc([
                "Choose a Perfect using the \"Choose Features\" button above"
            ]),
            choices : ["Forged Heart", "Nightmare Shroud", "Traveler's Blade", "Weretouched"],
            "forged heart" : {
                name : "Forged Heart Perfect Form",
                source : ["KB:EE", 219],
                description : desc([
                    "When I am hit by an attack, I can add my Wisdom modifier to my AC as a reaction",
                    "This includes the triggering attack and lasts until the start of my next turn"
                ]),
                action : ["reaction", ""]
            },
            "nightmare shroud" : {
                name : "Nightmare Shroud Perfect Form",
                source : ["KB:EE", 219],
                description : desc([
                    "When I damage a creature with Manifest blows, 3 creatures within 30 feet take damage",
                    "I choose these creatures and they take psychic damage equal to half my monk level"
                ]),
                additional : levels.map(function (n) { return "+" + Math.floor(n/2) + " psychic damage";}),
            },
            "traveler's blade" : {
                name : "Traveler's Blade Perfect Form",
                source : ["KB:EE", 219],
                description : desc([
                    "When I deal piercing/slashing damage with an unarmed strike, I deal extra damage",
                    "The creature takes an extra 1d8 poison damage and makes a Constitution save",
                    "The DC is equal to my ki save DC",
                    "On a failure, the creature is poisoned until the end of its next turn"
                ])
            },
            "weretouched" : {
                name : "Weretouched Perform Form",
                source : ["KB:EE", 219],
                description : desc([
                    "When I use Flurry of Blows, I make 3 extra attacks as a bonus action instead of two",
                    "I have advantage on these extra attacks"
                ]),
                action : ["bonus action", " (part of Flurry of Blows)"]
            }
        }
    }
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
    traits : "Seeker Aasimar (+2 Charisma, +1 Constitution)\nLight Bearer: I know the Light cantrip.\nHealing Hands: As an action, once per long rest, I can touch to heal for my level in HP.\nShroud of Life and Death: Once per long rest when I'm 3rd level, I can use an action to transform, summoning a nimbus of crimson blood around me. For 1 minute or until I end it as a bonus action, one creature within 30 ft of me takes damage equal to half my level (rounded up). When I or an ally is reduced to 0 hp but not killed outright, I can use a reaction to reduce them to 0 hit points, ending the transformation early. I shed dim light in a 10 foot radius.",
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
    trait : "Guide Hobgoblin (+2 Constitution, +1 Intelligence or Wisdom)\nThe Arts of War: Once per short or long rest if I fail a saving throw or miss an attack roll, I gain a bonus to the roll equal to the number of allies I see with 30 ft up to a max of +5.",
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
    trait : "Dhakaani Bugbear (+2 Strength, +1 Dexterity or Constituion)\nPowerful Build: I count as one size larger for my carrying capacity, push, drag, and lift.\nLong-limbed: When I make a melee attack on my turn, your reach for it is 5 ft greater than normal.\nStand by the Strong: When an ally within 30 ft I can see fails a saving throw against being frightened, I can use my reaction to allow it to reroll the save."
};
RaceList["znir gnoll"] = {
    regExpSearch : /^(?=.*znir)(?=.*gnoll)/i,
    name : "Znir Gnoll",
    sortname : "Gnoll, Znir",
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
    weaponOptions : [{
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
    }],
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

FeatsList["aereni halflife"] = {
    name : "Aereni Halflife",
    source : ["KB:EE", 212],
    prerequisite : "Elf (Aereni)",
    prereqeval : function () {
        return CurrentRace.known.indexOf('aereni elf') !== -1;
    },
    scorestxt : "+1 Intelligence or Wisdom",
    description : "I am resistant to radiant and necrotic damage. I have advantage on death saving throws. If I cast a spell that deals necrotic damage, I can have it deal radiant damage instead.\n[+1 Intelligence or Wisdom]",
    descriptionFull : "You’ve undergone rituals that bind you to Irian and the Undying Court. Many who undergo this process have a desiccated appearance, similar to a mummy; it’s up to you whether you are affected in this way. Regardless of your appearance, you gain the following benefits:\n \u2022 Increase your Intelligence or Wisdom score by 1, to a maximum of 20.\n \u2022 You gain resistance to necrotic and radiant damage, and you have advantage on death saving throws.\n \u2022 If you cast a spell that deals necrotic damage, you can choose to have it inflict radiant damage instead."
};
FeatsList["changeling metamorphosis"] = {
    name : "Changeling Metamorphosis",
    source : ["KB:EE", 212],
    prerequisite : "Changeling",
    prereqeval : function() {
        return CurrentRace.known.indexOf('changeling') !== -1;
    },
    scores : [0, 0, 1, 0, 0, 0],
    scorestxt : "+1 Constitution",
    descriptionFull : "Your ability to shapechange is more than skin deep. Increase your Constitution score by 1, to a maximum of 20. In addition, when you use your Shapechanging trait, you can choose one of the following benefits, which lasts until you use your Shapechanging trait again. Some of these benefits require specific physical features, such as gills or claws, that can be seen by observers.",
    description : "I gain benefits from my Shapechanging trait which last until I use the Shapechanging trait again. These benefits are detailed on the Notes page.\n[+1 Constitution]",
    toNotesPage : [{
        name : "Shapechanging Benefits",
        source : ["KB:EE", 212],
        note : [
            "Aquatic Adaption",
            "I can breathe underwater and gain a swimming speed equal to my walking speed",
            "Darkvision",
            "I gain darkvision with a range of 60 feet",
            "Natural Weapons",
            "I am proficient with unarmed strikes",
            "My unarmed strikes deal 1d6 bludgeoning/piercing/slashing"
        ]
    }]
};
FeatsList["focused persona"] = {
    name : "Focused Persona",
    source : ["KB:EE", 213],
    prerequisite : "Changeling",
    prereqeval : function() {
        return CurrentRace.known.indexOf('changeling') !== -1;
    },
    scores : [0, 0, 0, 0, 0, 1],
    scorestxt : "+1 Charisma",
    descriptionFull : "You’ve developed personas that help you focus your talents. Work with your DM to define two unique personas —identities with distinct appearances and personalities. You gain the following benefits:\n \u2022 Increase your Charisma score by 1, to a maximum of 20.\n \u2022 Choose a tool and define a persona associated with it. While you are using your Shapechanging trait to assume the identity of that persona, you are proficient with that tool. If you are already proficient in it, your proficiency bonus is doubled for any ability check you make using that tool while assuming that persona.\n \u2022 Choose a skill you’re proficient in and define a different persona associated with it. While you are using your Shapechanging trait to assume the identity of that persona, your proficiency bonus is doubled for any ability check you make using that skill.",
    description : "I choose a tool and a persona to gain proficiency or expertise in said tool if already proficient. I choose a skill and a persona to gain expertise in skill. These only apply when using the persona.\n[+1 Charisma]"
};
FeatsList["quori bond"] = {
    name : "Quori Bond",
    source : ["KB:EE", 213],
    prerequisite : "Kalashtar",
    scorestxt : "+1 Wisdom or Charisma",
    prereqeval : function() {
        return CurrentRace.known.indexOf('kalashtar') !== -1;
    },
    descriptionFull : "The quori are tied to emotions. The tsucora feed on fear. The hashalaq are master manipulators. The kalaraq are the nobility of nightmares. The du’ulora harness fury. Your bond with your quori spirit is unusually strong, and you can draw on a fraction of its power and instincts. When you choose this feat, choose your quori lineage: hashalaq, du’ulora, kalaraq, or tsucora. You gain the following benefits:\n \u2022 Increase your Wisdom or Charisma score by 1, to a maximum of 20.\n \u2022 Each quori lineage is associated with a particular skill. When you use that skill, you can roll 1d4 and add the number rolled to the ability check.\n \u2022 Each quori lineage is associated with a particular spell. You learn this spell and can cast it at its lowest level. Once you cast it using this feat, you can’t do so again until you finish a long rest. Your spellcasting ability for this spell is Wisdom or Charisma, chosen when you select this feat.",
    description : "I choose a quori lineage. Based off my lineage, I gain one spell I can cast at the lowest level and add 1d4 to a skill related to my lineage.\n[+1 Wisdom or Charisma]",
    choices : ["Du'lora", "Hashalaq", "Kalaraq", "Tsucora"],
    "du'lora" : {
        name : "Du'lora Bond",
        description : "I am of the Du'lora lineage. I can cast Crown of Madness at the 2nd level once per long rest, using Wisdom or Charisma as my spellcasting ability. I add 1d4 to an ability check using the Intidmidation skill.\n[+1 Wisdom or Charisma]",
        spellCastingBonus : {
            name : "Du'lora Lineage",
            spells : ["crown of madness"],
            selection : ["crown of madness"],
            firstCol : "oncelr",
        },
        skillstxt : "+1d4 to Intimidation"
    },
    "hashlaq" : {
        name : "Hashalaq Bond",
        description : "I am of the Hashalaq lineage. I can cast Suggestion at the 2nd level once per long rest, using Wisdom or Charisma as my spellcasting ability. I add 1d4 to an ability check using the Persuasion skill.\n[+1 Wisdom or Charisma]",
        spellCastingBonus : {
            name : "Hashalaq Lineage",
            spells : ["suggestion"],
            selection : ["suggestion"],
            firstCol : "oncelr",
        },
        skillstxt : "+1d4 to Persuasion"
    },
    "kalaraq" : {
        name : "Kalaraq Bond",
        description : "I am of the Kalaraq lineage. I can cast Mind Spike at the 2nd level once per long rest, using Wisdom or Charisma as my spellcasting ability. I add 1d4 to an ability check using the Perception skill.\n[+1 Wisdom or Charisma]",
        spellCastingBonus : {
            name : "Kalaraq Lineage",
            spells : ["mind spike"],
            selection : ["mind spike"],
            firstCol : "oncelr",
        },
        skillstxt : "+1d4 to Perception"
    },
    "tsucora" : {
        name : "Tsucora Bond",
        description : "I am of the Tsucora lineage. I can cast Wrathful Smite at the 2nd level once per long rest, using Wisdom or Charisma as my spellcasting ability. I add 1d4 to an ability check using the Intimidation skill.\n[+1 Wisdom or Charisma]",
        spellCastingBonus : {
            name : "Tsucora Lineage",
            spells : ["wrathful smite"],
            selection : ["wrathful smite"],
            firstCol : "oncelr",
        },
        calcChanges : {
            spellChanges : {
                "wrathful smite" : {
                    description : "Next melee weapon hit +3d6 Psychic dmg and save or frightened; it can take 1 a for extra save",
	        descriptionFull : "The next time you hit with a melee weapon attack during this spell's duration, your attack deals an extra 3d6 psychic damage. Additionally, if the target is a creature, it must make a Wisdom saving throw or be frightened of you until the spell ends. As an action, the creature can make a Wisdom check against your spell save DC to steel its resolve and end this spell.",
                    changes : "The Tsucora lineage's Wrathful Smite deals 3d6 damage instead of 1d6"
                }
            }
        },
        skillstxt : "+1d4 to Intimidation"
    }
};
FeatsList["thoughtsinger"] = {
    name : "Thoughtsinger",
    source : ["KB:EE", 213],
    prerequisite : "Kalashtar",
    prereqeval : function() {
        return CurrentRace.known.indexOf('kalashtar') !== -1;
    },
    scorestxt : "+1 Wisdom or Charisma",
    descriptionFull : "You have honed your telepathic abilities, allowing you to link to and guide your companions as a united group. You gain the following benefits:\n \u2022 Increase your Wisdom or Charisma score by 1, to a maximum of 20.\n \u2022 When using your Mind Link trait, you can maintain links to up to 6 creatures at a time. When you establish a link, you decide whether the linked creature can telepathically communicate only with you, or if they can telepathically communicate with all of the creatures you are linked to at once. Likewise, you can communicate with one specific creature, or you can communicate with all creatures you’re currently linked to.\n \u2022 If you can speak telepathically to an ally using your Mind Link trait, you can use the Help action to aid them in attacking a creature, even if you are more than 5 feet away from them.",
    description : "I can maintain my Mind Link with up to 6 creatures, choosing whether they can speak to each other or just me and whether I can communicate to a specific one or all of them. I can also use the help action to aid them even if I'm more than 5 ft away.\n[+1 Wisdom or Charisma]"
};
FeatsList["superior shifting"] = {
    name : "Superior Shifting",
    source : ["KB:eE", 213],
    prerequisite : "Shifter",
    prereqeval : function() {
        return CurrentRace.known.indexOf('shifter') !== -1;
    },
    scorestxt : "+1 to One Ability Score",
    descriptionFull : "You have a strong connection to the beast within, strengthening your body and your ability to shift. You gain the following benefits:\n \u2022 Choose one of the ability scores affected by your subrace’s Ability Score Increase. Increase this ability score by 1, to a maximum of 20.\n \u2022 When you use your Shifting trait, the transformation lasts for ten minutes, until you die, or until you end it as a bonus action.\n \u2022 You can use your Shifting trait one additional time. You regain all uses when you complete a short or long res",
    description : "My shifter transformation lasts for 10 minutes, until I die, or until I end it as a bonus action. I can shift an additional time and I regain all uses when I finish a short or long rest.\n[+1 to One Ability Score]"
};
FeatsList["envoy specialist"] = {
    name : "Envoy Specialist",
    source : ["KB:EE", 213],
    prerequisite : "Warforged",
    prereqeval : function() {
        return CurrentRace.known.indexOf('warforged') !== -1;
    },
    scorestxt : "+1 to One Ability Score",
    descriptionFull : "You have modified your body to perform a specific task, integrating a tool directly into your body. You gain the following benefits.\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You gain proficiency with one tool of your choice.\n \u2022 Choose one of these tools you are proficient with that weighs 10 pounds or less: an artisan’s tool, forgery kit, herbalism kit, poisoner’s kit, thieves’ tools, or a musical instrument. You have a working model of this tool integrated into your body. It can’t be removed, and as long as you have a hand free, you can make use of the integrated tool.\n \u2022 Your proficiency bonus is doubled when you make ability checks using this integrated tool.",
    description : ""
};
FeatsList["juggernaut plating"] = {
    name : "Envoy Specialist",
    source : ["KB:EE", 213],
    prerequisite : "Warforged",
    prereqeval : function() {
        return CurrentRace.known.indexOf('warforged') !== -1;
    },
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


MagicItemsList["bane weapon"] = {
    name : "Bane Weapon",
    source : ["KB:EE", 215],
    type : "weapon",
    attunement : true,
    description : "I have a +1 bonus to attack and damage rolls made with this magic weapon. This weapon has 4 charges and I can expend 1 charge to deal an extra 2d6 damage against a creature type I choose during infusion. This weapon regains 1d4 charges daily at dawn.",
    descriptionFull : "This magic weapon grants a +1 bonus to attack and damage rolls made with it. When you infuse this item, choose one of the following creature types: aberration, beast, celestial, dragon, fiend, giant, or undead. The weapon has 4 charges. When the wielder hits a creature of this type with the weapon, they can expend 1 charge and inflict an additional 2d6 damage of the weapon’s type with the attack. The weapon regains 1d4 charges daily at dawn.",
    chooseGear : {
        type : "weapon",
        prefixOrSuffix : "brackets",
        itemName1stPage : ["suffix", "Bane"]
    },
    usages : 4,
    recovery : "Dawn",
    additional : "regains 1d4",
    prereqeval : function(v) { return classes.known.artificer.level >= 6; },
    choices : ["Aberration", "Beast", "Celestial", "Dragon", "Fiend", "Giant", "Undead"],
    "aberration" : {
        name : "Abberration Bane Weapon",
        description : "I have a +1 bonus to attack and damage rolls made with this magic weapon. This weapon has 4 charges I can expend 1 charge to deal an extra 2d6 damage against Abberations. This weapon regains 1d4 charges daily at dawn."
    },
    "beast" : {
        name : "Beast Bane Weapon",
        description : "I have a +1 bonus to attack and damage rolls made with this magic weapon. This weapon has 4 charges I can expend 1 charge to deal an extra 2d6 damage against Beasts. This weapon regains 1d4 charges daily at dawn."
    },
    "celestial" : {
        name : "Celeastial Bane Weapon",
        description : "I have a +1 bonus to attack and damage rolls made with this magic weapon. This weapon has 4 charges I can expend 1 charge to deal an extra 2d6 damage against Celestials. This weapon regains 1d4 charges daily at dawn."
    },
    "dragon" : {
        name : "Dragon Bane Weapon",
        description : "I have a +1 bonus to attack and damage rolls made with this magic weapon. This weapon has 4 charges I can expend 1 charge to deal an extra 2d6 damage against Dragons. This weapon regains 1d4 charges daily at dawn."
    },
    "fiend" : {
        name : "Fiend Bane Weapon",
        description : "I have a +1 bonus to attack and damage rolls made with this magic weapon. This weapon has 4 charges I can expend 1 charge to deal an extra 2d6 damage against Fiends. This weapon regains 1d4 charges daily at dawn."
    },
    "giant" : {
        name : "Giant Bane Weapon",
        description : "I have a +1 bonus to attack and damage rolls made with this magic weapon. This weapon has 4 charges I can expend 1 charge to deal an extra 2d6 damage against Giants. This weapon regains 1d4 charges daily at dawn."
    },
    "undead" : {
        name : "Undead Bane Weapon",
        description : "I have a +1 bonus to attack and damage rolls made with this magic weapon. This weapon has 4 charges I can expend 1 charge to deal an extra 2d6 damage against Undead. This weapon regains 1d4 charges daily at dawn."
    },
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
    name : "Charalatan's Gloves",
    source : ["KB:EE", 221],
    type : "wonderous item",
    rarity : "common",
    description : "As an action, I can make an illusory image that lasts for 1 minute or until my concentration ends. A creature can determine it's an illusion with a successful Intelligence (Investigation) check contested by my Charisma (Deception) check.",
    descriptionFull : "While wearing a pair of charlatan’s gloves, you can use an action to produce an illusory image that fits in the palm of your hand. The image lasts for 1 minute or until your concentration ends (as if you were concentrating on a spell). The image can’t create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it.If a creature uses its action to examine the image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check contested by your Charisma (Deception) check. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature.",  
    action : ["action", " (Create Illusion)"]
};
MagicItemsList["drybrooch"] = {
    name : "Dyrbrooch",
    source : ["KB:EE", 221],
    type : "wonderous item",
    rarity : "common",
    description : "I can create or dismiss a dome of energy above my head that repeals moderate quantities of frozen or liquid water such as rain, snow, bird droppings, or other similar nuisances, but can't protect against harsh environmental hazards or attacks.",
    descriptionFull : "While holding or wearing a drybrooch, you can use an action to summon or dismiss a dome of energy that manifests just above your head. This energy repels moderate quantities of frozen and liquid water, such as rain, snow, bird droppings, or other similar nuisances, but can’t be used to protect against harsh environmental hazards or attacks.Typically, a drybrooch field is silvery and translucent. More expensive models have illusions woven into the field; one popular drybrooch creates the image of a sunny blue sky overhead.",
    action : ["action", " (summon/dismiss)"]
};
MagicItemsList["duster"] = {
    name : "Duster",
    source : ["KB:EE", 221],
    type : "wonderous item",
    rarity : "common",
    description : "as an action, I can create or dismiss a dome of energy above my head that repeals moderate quantities of frozen or liquid water such as rain, snow, bird droppings, or other similar nuisances, but can't protect against harsh environmental hazards or attacks.",
    descriptionFull : "While holding this wand, you can use an action to instantly clean an area within 10 feet of you that is no larger than 1 cubic foot, removing dirt and grime. There are many variations of the duster; the two-handed staff of cleansing covers a five-foot cube with a single action, while the bright basin cleans clothing and cloth objects placed within it.",
    action : ["action", " (clean)"]
};
MagicItemsList["fortify defense"] = {
    name : "Fortify Defense",
    source : ["KB:EE", 216],
    type : "armor",
    attunement : true,
    usages : 4,
    recovery : "dawn",
    additional : "regains 1d4",
    action : ["reaction", " (suffer critical hit)"],
    description : "I gain a +1 bonus to AC while wearing this armor. This armor has 4 charges and regains 1d4 at dawn. As a reaction, I can expend 1 charge when I suffer a critical hit and count it as a normal hit, negating effects of that critical hits.",
    descriptionFull : "A creature gains a +1 bonus to Armor Class while wearing this armor. The armor has 4 charges. As a reaction when the wearer suffers a critical hit, they can expend 1 charge and count that hit as a normal hit instead. Any effects triggered by the critical hit are negated. The armor regains 1d4 expended charges daily at dawn",
    chooseGear : {
        type : "armor",
        prefixOrSuffix : "brackets",
        itemName1stPage : ["suffix", "Fortified"]
    },
    extraAC : [{
        mod : 1,
        magic : true,
        text : "I gain a +1 bonus to AC while wearing this armor.",
    }]
};
MagicItemsList["healing salve"] = {
    name : "Healing Salve",
    source : ["KB:EE", 216],
    type : "jar of lotion",
    usages : 4,
    recovery : "dawn",
    action : ["action", ""],
    description : "This item has 4 charges and regains all charges at dawn. As an action, i can expend a charge and touch one creature, healing them a number of hit points equal to 1d6 + my Intelligence modifier.",
    descriptionFull : "You can apply this magical salve to heal the wounds of you or your companions. The healing salve has 4 charges. As an action, you can expend one charge and touch a creature, healing that creature a number of hit points equal to 1d6 + your Intelligence modifier.  The salve regains all expended charges daily at dawn."
};
MagicItemsList["integrated tool"] = {
    name : "Integrated Tool",
    source : ["KB:EE", 221],
    type : "wonderous item",
    rarity : "common",
    description : "",
    descriptionFull : "An integrated tool attaches to the body of a warforged, and is designed to serve as one of the following tools that weighs 10 pounds or less: an artisan’s tool, forgery kit, herbalism kit, poisoner’s kit, thieves’ tools, or a musical instrument.You must incorporate the tool into your body before you can use it. Over the course of 1 hour, you can attach the tool or remove it from your body, remaining in contact with it for the whole hour; this can be done over a short or long rest.While you’re alive, the tool can’t be removed from your body against your will. While the integrated tool has become part of your body, you must still have a hand free to make use of it. You can only have one integrated tool attached to your body at a time."
};
MagicItemsList["lamplighter"] = {
    name : "Lamplighter",
    source : ["KB:EE", 221],
    type : "wand",
    rarity : "common",
    description : "",
    descriptionFull : "While you are holding this wand, you can use an action to instantaneously light or snuff out a candle, torch, small campfire, or similar source of flame within 10 feet of you.",
    action : ["action", " (light/snuff)"]
};
MagicItemsList["quiver of energy"] = {
    name : "Quiver of Energy",
    source : ["KB:EE", 216],
    type : "quiver",
    attunement : true,
    description : "I pick cold, fire, lightning, or poison damage when I infuse this item. The first time the bearer hits a target with a weapon attack using ammunition from this quiver, it deals 1d6 damage of that type.",
    descriptionFull : "When you infuse this item, choose one damage type: cold, fire, lightning, or poison. The first time each turn that the bearer hits a target with a weapon attack using ammunition drawn from this quiver, the attack deals an extra 1d6 damage of the chosen type.",
    choices : ["Cold", "Fire", "Lightning", "Poison"],
    "cold" : {
        name : "Quiver of Cold",
        description : "The first time the bearer hits a target with a weapon attack using ammunition from this quiver, it deals 1d6 cold damage."
    },
    "fire" : {
        name : "Quiver of Fire",
        description : "The first time the bearer hits a target with a weapon attack using ammunition from this quiver, it deals 1d6 fire damage."
    },
    "lightning" : {
        name : "Quiver of Lightning",
        description : "The first time the bearer hits a target with a weapon attack using ammunition from this quiver, it deals 1d6 lightning damage."
    },
    "poison" : {
        name : "Quiver of Poison",
        description : "The first time the bearer hits a target with a weapon attack using ammunition from this quiver, it deals 1d6 poison damage."
    }
};
MagicItemsList["spark"] = {
    name : "Spark",
    source : ["KB:EE", 222],
    type : "wonderous item",
    rarity : "common",
    description : "",
    descriptionFull : "The spark is a small oval stone engraved with Fernian glyphs. While you are holding the spark, you can use a bonus action to touch a candle, torch, small campfire, or similar object, instantly igniting it into flame."
};
MagicItemsList["talking wand"] = {
    name : "Talking Wand",
    source : ["KB:EE", 222],
    type : "wand",
    rarity : "common",
    description : "",
    descriptionFull : "While you are holding this wand, your voice and other sounds you produce are three times as loud as normal. House Phiarlan makes use of the thunderous amulet, a similar device that leaves the wearer’s hands free."
};
MagicItemsList["thurimbar rod"] = {
    name : "Thurimbar Rod",
    source : ["KB:EE", 222],
    type : "rod",
    rarity : "common",
    description : "",
    descriptionFull : "The Thurimbar rod is a magical instrument developed by the gnomes of Zilargo. While holding the rod, you can use an action to produce auditory illusions that unerringly replicate the sound of any instrument with which you’re proficient, with an effect similar to the minor illusion spell, with the sound emanating from the rod. To determine the quality of the performance, make a Charisma check with the musical instrument you’re replicating. If you are proficient with the Thurimbar rod itself, you can produce unearthly music unlike any natural instrument."
};
MagicItemsList["war staff"] = {
    name : "War Staff",
    source : ["KB:EE", 222],
    type : "staff",
    rarity : "common",
    description : "",
    descriptionFull : "Aundair developed the war staff to help wandslingers match the range of Thranish archers, but it quickly spread across Khorvaire. Any spellcaster who can use a staff as an arcane focus can attune to a war staff. While holding this staff in both hands, you can use it as an arcane focus. Any cantrip cast using it can be cast at up to four times the standard range. However, when you cast a cantrip at more than twice the standard range, your attack rolls have disadvantage, and other creatures have advantage on any saving throws made against your cantrip. So a fire bolt cast using a war staff has a range of 480 feet, but attack rolls against targets more than 240 feet away are made at disadvantage."
}
