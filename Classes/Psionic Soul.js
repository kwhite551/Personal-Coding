var iFileName = "Psionic Soul [Created by Wizards of the Coast, Transcribed by Seneschal].js";
RequiredSheetVersion(13);

SourceList["UA:POR"] = {
	name : "Unearthed Arcana: Psionic Options Revisited",
	abbreviation : "UA:POR",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2020/dnd/downloads/UA2020_PsionicOptions.pdf",
	date : "2020/04/14"
};

AddSubClass("sorcerer", "psionic soul", {
    regExpSearch : /^(?=.*psionic)(?=.*soul).*$/i,
    subname : "Psionic Soul",
    source : ["UA:POR", 5],
    features : {
        "subclassfeature1" : {
            name : "Psionic Talent",
            source : ["UA:POR", 6],
            minlevel : 1,
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
                name : "Psionic Soul Psionic Talents",
                note : [
                    "\u2022 Psionic Discovery",
                    "   I meditate for 10 minutes which can be done during a rest",
                    "   I learn a sorcerer spell of a level I have spell slots for",
                    "   The spell must be from the divination or enchanment school",
                    "   I know the spell for a number of hours equal to my Psi Die roll",
                    "\u2022 Psychic Sorcery",
                    "   When I cast a spell, I roll my Psi Die and cast with no verbal components",
                    "   If I roll the spell's level or higher, no somatic or material required",
                    "\u2022 Telepathic Speech",
                    "   As a bonus action, I choose one creature I can see and roll my Psi Die",
                    "   For a number of hours equal to that roll, we can speak telepathically",
                    "   The distance must be equal to or less than a number of miles equal to the roll",
                    "   We must share a langauge to understand each other",
                    "   The connection ends early if I use this ability on a different creature"
                ],
                popUpName : "Psionic Soul Psionic Talents",
                source : ["UA:POR", 6],
            },
            action : [
                ["bonus action", "Psi Replenishment"],
                ["bonus action", "Telepathic Speech"],
            ]
        },
        "subclassfeature6" : {
            name : "Psychic Strike",
            source : ["UA:POR", 6],
            minlevel : 6,
            description : desc([
                "I can deal psychic damage to a creature I damage with a sorcerer spell",
                "The psychic damage is equal to a roll of my Psi Die and is dealt once per turn",
                "The sorcerer spell must have used a spell slot"
            ]),
        },
        "subclassfeature14" : {
            name : "Mind Over Body",
            source : ["UA:POR", 6],
            minlevel : 14,
            description : desc([
                "As a bonus action, I spend 1 or more sorcery points to transform",
                "It lasts a number of hours equal to the number rolled on my Psi Die",
                "For each sorcery point used, I gain one of the following benefits of my choice:",
                "\u2022 I see any invisible creature within 60 feet not behind full cover",
				"\u2022 I gain a flying speed equal to my walking speed and I can hover",
                "\u2022 I gain a swimming speed equal to twice my walking speed",
                "  I have the ability to breathe water",
                "\u2022 I can move, with equipment, through any space as narrow as 1 inch without squeezing",
				"  I can spend 5 ft of movement to escape form a grapple or from nonmagical restraints",
            ]),
            action : ["bonus action", ""]
        },
        "subclassfeature18" : {
            name : "Psychic Aura",
            source : ["UA:POR", 7],
            minlevel : 18,
            description : desc([
                "As a bonus action, I radiate a 30 ft radius aura of psychic energy", 
                "This lasts for 1 minute, until I am incapacitated, or until I lose my Psi Die",
                "If a creature starts their turn or moves into it for the first time, they take damage",
                "The damage is equal to a roll of my Psi Die + my Charisma modifier psychic damage",
                "If the creature takes that damage, their speed is halved until the start of its next turn"
            ]),
            action : ["bonus action", ""]
        }
    }
});