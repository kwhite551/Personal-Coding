var iFileName = "Beastmaster Companions.js";
RequiredSheetVersion(13);

CreatureList["beast of the sky"] = {
	name : "Beast of the Sky",
	source : ["TCoE", 61],
	size : 4,
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 5,
	hd : [1, 6],
	speed : "10 ft, fly 60 ft",
	scores : [6, 16, 13, 8, 14, 11],
	saves : ["", "", "", "", "", ""],
	senses : "Darkvision 60 ft",
	passivePerception : 12,
	languages : "understands the languages of its master (me)",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Shred",
		ability : 2,
		damage : [1, 6, "slashing"],
        range : "Melee (5 ft)"
	}],
	features : [{
		name : "Primal Rebirth",
		description : "If the beast has died within the last hour, I can use my action to touch it and expend a spell slot of 1st level or higher. The beast returns to life after 1 minute with all its hit points restored."
	}],
	traits : [{
		name : "Flyby",
		description : "The beast doesn't provoke opportunity attacks when it flies out of an enemy's reach."
	}],
	eval : function(prefix) {
		tDoc.getField(prefix + "Comp.Use.HP.Max").setAction("Calculate", "event.value = (classes.known.ranger ? classes.known.ranger.level : classes.known.rangerua ? classes.known.rangerua.level : 1) * 5 + 5);");
		tDoc.getField(prefix + "Comp.Use.HD.Level").setAction("Calculate", "event.value = classes.known.ranger ? classes.known.ranger.level : classes.known.rangerua ? classes.known.rangerua.level : 1;");
	},
	removeeval : function(prefix) {
		if (!prefix) return;
		tDoc.getField(prefix + "Comp.Use.HP.Max").setAction("Calculate", "");
		tDoc.getField(prefix + "Comp.Use.HD.Level").setAction("Calculate", "");
	}
}
CreatureList["beast of the land"] = {
	name : "Beast of the Land",
	source : ["TCoE", 61],
	size : 3,
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 5,
	hd : [1, 8],
	speed : "40 ft, climb 40 ft",
	scores : [14, 14, 15, 8, 14, 11],
	saves : ["", "", "", "", "", ""],
	senses : "Darkvision 60 ft",
	passivePerception : 14,
	languages : "understands the languages of its master (me)",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Maul",
		ability : 1,
		damage : [1, 6, "slashing"],
		range : "Melee (5 ft)",
		description : "If used after moving 20 ft straight in the same round, see Charge trait"
	}],
	features : [{
		name : "Primal Rebirth",
		description : "If the beast has died within the last hour, I can use my action to touch it and expend a spell slot of 1st level or higher. The beast returns to life after 1 minute with all its hit points restored."
	}],
	traits : [{
		name : "Charge",
		description : "If the beast moves at least 20 ft straight toward a target and then hits it with a maul attack on the same turn, the target takes an extra 1d6 slashing damage. If the target is a creature, it must succeed on a Strength saving throw against my spell save DC or be knocked prone."
	}],
	eval : function(prefix) {
		tDoc.getField(prefix + "Comp.Use.HP.Max").setAction("Calculate", "event.value = (classes.known.ranger ? classes.known.ranger.level : classes.known.rangerua ? classes.known.rangerua.level : 1) * 5 + 5);");
		tDoc.getField(prefix + "Comp.Use.HD.Level").setAction("Calculate", "event.value = classes.known.ranger ? classes.known.ranger.level : classes.known.rangerua ? classes.known.rangerua.level : 1;");
	},
	removeeval : function(prefix) {
		if (!prefix) return;
		tDoc.getField(prefix + "Comp.Use.HP.Max").setAction("Calculate", "");
		tDoc.getField(prefix + "Comp.Use.HD.Level").setAction("Calculate", "");
	}
}
CreatureList["beast of the sea"] = {
	name : "Beast of the Sea",
	source : ["TCoE", 61],
	size : 3,
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 5,
	hd : [1, 8],
	speed : "5 ft, swim 60 ft",
	scores : [14, 14, 15, 8, 14, 11],
	saves : ["", "", "", "", "", ""],
	senses : "Darkvision 60 ft",
	passivePerception : 12,
	languages : "understands the languages of its master (me)",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Binding Strike",
		ability : 1,
		damage : [1, 6, "pierc./bludgeon"],
		range : "Melee (5 ft)",
		description : "On hit, target is grappled (escape DC is spell DC) and beast can't use attack on other target"
	}],
	features : [{
		name : "Primal Rebirth",
		description : "If the beast has died within the last hour, I can use my action to touch it and expend a spell slot of 1st level or higher. The beast returns to life after 1 minute with all its hit points restored."
	}],
	traits : [{
        name : "Amphibious",
        description : "The beast can breathe both air and water."
	}],
	eval : function(prefix) {
		tDoc.getField(prefix + "Comp.Use.HP.Max").setAction("Calculate", "event.value = (classes.known.ranger ? classes.known.ranger.level : classes.known.rangerua ? classes.known.rangerua.level : 1) * 5 + 5);");
		tDoc.getField(prefix + "Comp.Use.HD.Level").setAction("Calculate", "event.value = classes.known.ranger ? classes.known.ranger.level : classes.known.rangerua ? classes.known.rangerua.level : 1;");
	},
	removeeval : function(prefix) {
		if (!prefix) return;
		tDoc.getField(prefix + "Comp.Use.HP.Max").setAction("Calculate", "");
		tDoc.getField(prefix + "Comp.Use.HD.Level").setAction("Calculate", "");
	}
}