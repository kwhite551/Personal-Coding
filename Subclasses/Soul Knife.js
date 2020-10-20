var iFileName = "Soul Knife [Created by Wizards of the Coast, Transcribed by Seneschal].js";
RequiredSheetVersion(13);

SourceList["UA:POR"] = {
	name : "Unearthed Arcana: Psionic Options Revisited",
	abbreviation : "UA:POR",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2020/dnd/downloads/UA2020_PsionicOptions.pdf",
    date : "2020/04/14",
    defaultExcluded : true,
};

AddSubClass("rogue", "Soul Knife", {
    regExpSearch : /^(?=.*soul)(?=.*knife).*$/i,
    subname : "Soul Knife",
    source : ["UA:POR", 3],
    abilitySave : 2,
    features : {
        "subclassfeature3" : {
            name : "Psionic Talent",
            source : ["UA:POR", 4],
            minlevel : 3,
            additional : levels.map(function(n) {
                return "Starting Psionic Talent Die: 1d" + (n < 5 ? 6 : n < 11 ? 8 : n < 17 ? 10 : 12);
            }),
            description : desc([
                "I use my Psionic Talent die (Psi Die) to use Psionic Talents",
                "On max roll, the size decreases (d6 to d4) and a roll of 1, it increases to start (d6 to d8)",
                "On a roll of 4 on a d4, I can't use the die again until I finish a long rest",
                "As a bonus action, I can restore the die to its starting size once per long rest",
                "See the notes sheet for Psionic Talents"
            ]),
            extraLimitedFeatures : {
                name : "Psi Replenishment",
                usages : 1, 
                recovery : "long rest",
            },
            toNotesPage : {
                name : "Soul Knife Psionic Talents",
                note : [
                    "\u2022 Psi-Bolstered Knack",
                    "   I use Psi Die roll on a failed ability check using a skill or tool I'm proficient in", 
                    "\u2022 Psychic Whispers",
                    "   As an action, I can speak telepathically to a Psi Die roll number of creatures",
                    "   The chosen creatures must speak a language regardless of if they share one",
                    "   It takes no action to send or recive a message or to end connection",
                ],
                popUpName : "Soul Knife Psionic Talents Part 1",
                source : ["UA:POR", 4],
            },
            action :  ["bonus action", "Psi Replenishment"],
        },
        "subclassfeatures3.1" : {
            name : "Psychic Blades",
            source : ["UA:POR", 4],
            minlevel : 3,
            description : desc([
                "I summon a psychic blade that can be used as a melee or ranged weapon",
                "It vanishes after I hit or miss the target and leaves no mark on the target",
                "I can use a bonus action to create a second blade after using the first",
                "The first blade deals 1d6 psychic damage and the second deals 1d4"
            ]),
            action : [
                ["action", " (part of attack)"],
                ["bonus action", "Second Blade"]
            ],
            weaponsAdd : ["Psychic Blade"]
        },
        "subclassfeature9" : {
            name : "Soul Blades",
            source : ["UA:POR", 4],
            minlevel : 9,
            description : "",
            action : [["bonus action", "Psychic Teleportation"]],
            toNotesPage : {
                name : "Soul Blade Talents",
                note : [
                    "\u2022 Homing Strikes",
                    "   If I miss with my Psychic blade, I use roll of Psi die and add it to attack roll",
                    "   Regardless of number rolled, the Psi Die will decrease by one die size",
                    "\u2022 Psychic Teleportation",
                    "   I throw a psychic blade up to 5 times highest Psi Die number of feet away",
                    "   I teleport to that space and my Psi Die decreases by one die size"
                ],
                popUpName : "Soul Knife Psionic Talents Part 2",
                amendTo : "Soul Knife Psionic Talents",
                source : ["UA:POR", 4],
            }
        },
        "subclassfeature13" : {
            name : "Psionic Veil",
            source : ["UA:POR", 5],
            minlevel : 13,
            description : desc([
                "As an action, I become invisible with anything I'm wearing or carrying",
                "This ends after 10 minutes or I damage a creature or force them to make a save",
                "I regain all uses after I finish a long rest or reduce my Talent die by one die size"
            ]),
            recovery : "long rest",
            usages : 1,
            action : ["action", ""],
        },
        "subclassfeature17" : {
            name : "Rend Mind",
            source : ["UA:POR", 5],
            minlevel : 17,
            description : desc([
                "If my psychic blade deals sneak attack damage, the creature makes a Wisdom save",
                "DC 8 + proficiency modifier + my Dexterity modifier",
                "On a failure, the target is stunned until the end of my next turn",
                "I regain all uses after I finish a long rest or reduce my Talent die by one die size"
            ]),
            recovery : "long rest",
            usages : 1,
        }
    }
});

WeaponsList["psychicBlade"] = {
	regExpSearch : /^(?=.*psychic)(?=.*\bblade?\b).*$/i,
	name : "Psychic Blade",
	source : ["UA:POR", 4],
	ability : 1,
	type : "Simple",
	damage : [1, 6, "psychic"],
	range : "Melee, 60 ft",
	description : "finesse, thrown, magical",
    abilitytodamage : true,
    atkCalc : ["if (isOffHand) { output.die = output.die.replace('1d6', '1d4'); };", "The second psychic blade only dies 1d4 damage intsead of 1d6."]
};