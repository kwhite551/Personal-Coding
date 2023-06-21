var iFileName = "Spellsword [Created by Brandon Coulson, transcribed by Seneschal].js";
RequiredSheetVersion("13.0.8");

SourceList["BC"] = {
    name: "Brandon Coulson",
    abbreviation : "BC",
    abbreviationSpellsheet : "B",
    date: "2018/08/14",
    group: "BC",
    url: "https://drive.google.com/file/d/1g9DPxyh96vHNO-OpBmgw3BqSqUNWvout/view"
}

ClassList["spellsword"] = {
    name : "Spellsword",
    regExpSearch: /spellsword/i,
    source : ["BC"],
    primaryAbility: "Intelligence or Charisma",
    prereqs: "Strength 13 or Dexterity 13 and Intelligence 13 or Charisma 13",
    die: 8,
    improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    saves: ["Con", "Int"],
    skillstxt : {
        primary : "Choose two from Arcana, Athletics, History, Insight, Intimidation, Investigation, Perception, and Persuasion."
    },
    armorProfs : [
        [true, true, false, false],
        [true, false, false, false]
    ],
    weaponProfs : [
        [true, true, []],
        [true, false, ["one martial weapon"]]
    ],
    equpiment : "Spellsword starting equipment:\n \u2022 a one-handed simple or martial weapon -or- a simple or martial weapon with the versatile property\n \u2022 a light crossbow with 20 bolts -or- two daggers\n \u2022 leather armor -or- scale mail (if proficient)\n \u2022 a dungeoneer's pack -or- an explorer's pack",
    attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    subclasses : ["Arcane Paradigm", ["Abjurant Champion", "Blood Magus", "Sword Sage", "Unseen Seer"]],
    features : {
        "arcane aegis" : {
            name : "Arcane Aegis",
            source : ["BC", 3],
            minlevel : 1,
            description : desc([
                "As a bonus action, I add +2 to my AC",
                "This bonus lasts as long as I have more than 0 HP and no shield",
                "I can dismiss as a free action",
                "Counts as a 1st-level abjuration spell agaisnt dispelling, antimagic field, etc."
            ])
        },
        "fighting style" : {
            name : "Fighting Style",
            source : ["BC", 3],
            minlevel : 2,
            description : desc([
                "Choose a Fighting Style using the \"Choose Feature\" button above",
            ]),
			choices : ["Defense", "Dueling", "Great Weapon Fighting", "Two-Weapon Fighting"],
			"defense" : FightingStyles.defense,
			"dueling" : FightingStyles.dueling,
			"great weapon fighting" : FightingStyles.great_weapon,
			"two-weapon fighting" : FightingStyles.two_weapon
        },
        "aether" : {
            name : "Aether",
            source : ["BC", 4],
            minlevel : 2,
            description : desc([
                "I gain access to Aether Points ti fuel powers or grant beneficial effects",
                "I start with 2 Aether Points and gain more as I level up in this class.",
                "I start with four known features and gain more as I level up",
                "Check the Notes page for "
            ]),
            toNotesPage : [{
                name : "Aether Features",
                note : [
                    "Spell Strike",
                    "When I use the attack action, I can use a bonus action to cast a spell",
                    "This spell must require a spell attack roll and a cast of 1 action or less",
                    ""
                ]
            }]
        },
        "revelation" : {
            name : "Revelation",
            source : ["BC", 4],
            minlevel : 3,

        },
        "spellsword arcana" : {
            name : "Spellsword Arcana",
            source : ["BC", 5],
            minlevel : 3,

        },
        "improved spell strike" : {
            name : "Improved Spell Strike",
            source : ["BC", 5],
            minlevel : 11,

        },
        "indomitable" : {
            name : "Indomitable",
            source : ["BC", 5],
            minlevel : 15,

        },
        "perfect spell strike" : {
            name : "Perfect Spell Strike",
            source : ["BC", 5],
            minlevel : 18,

        },
        "boundless aether" : {
            name : "Boundless Aether",
            source : ["BC", 6],
            minlevel : 20,

        }
    }
}