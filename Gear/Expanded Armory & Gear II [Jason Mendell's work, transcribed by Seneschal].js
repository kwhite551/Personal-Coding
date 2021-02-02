var iFileName = "Expanded Armory & Gear II [Jason Mendell's work, transcribed by Seneschal].js";
RequiredSheetVersion(13);

SourceList["JM:EAG"] = {
	name : "Jason Mendell - Expanded Armory and Gear II",
	abbreviation : "JM:EAGII",
	group : "Dungeon Masters Guild",
    url : "https://www.dmsguild.com/product/179621/DD-5e--Expanded-Armory--Gear-Vol-2",
    defaultExcluded : true,
	date : "2020/02/04"
};

WeaponsList["bladed tonfa"] = {
    regExpSearch : /^(?=.*bladed)(?=.*tonfa).*$/i,
    name : "Bladed Tonfa",
    source : ["JM:EAGII", 2],
    list : "melee",
    ability : 1,
    type : "Martial",
    damage : [1, 4, "slashing"],
    range : "Melee",
    weight : 2,
    description : "Finesse, light; Target has disadv. on save vs. being disarmed",
    abilitytodamage : true,
    monkweapon : true
};
WeaponsList["cutlass"] = {
    regExpSearch : /cutlass/i,
    name : "Cutlass",
    source : ["JM:EAGII", 2],
    list : "melee",
    ability : 1,
    type : "Martial",
    damage : [1, 6, "slashing"],
    range : "Melee",
    weight : 3,
    description : "Finesse, light, adv. to resist being disarmed of this weapon",
    abilitytodamage : true
};
WeaponsList["dire flail"] = {
    regExpSearch : /^(?=.*dire)(?=.*flail).*$/i,
    name : "Dire Flail",
    source : ["JM:EAGII", 2],
    list : "melee",
    type : "Martial",
    ability : 1,
    damage : [1, 8, "bludgeoning"],
    range : "Melee",
    weight : 10,
    description : "two-handed; Target disadv. on save vs. knocked prone/disarmed; Can count as dual-wielding",
    abilitytodamage : true
};
WeaponsList["double mace"] = {
    regExpSearch : /^(?=.*double)(?=.*mace).*$/i,
    name : "Double Mace",
    source : ["JM:EAGII", 2],
    list : "melee",
    type : "Martial",
    ability : 1,
    damage : [1, 8, "bludgeoning"],
    range : "Melee",
    weight : 25,
    description : "heavy, two-handed; Can count as dual-wielding",
    abilitytodamage : true
};
WeaponsList["double scimitar"] = {
    regExpSearch : /^(?=.*double)(?=.*scimitar).*$/i,
    name : "Double Scimitar",
    source : ["JM:EAGII", 2],
    list : "melee",
    type : "Martial",
    ability : 1,
    damage : [1, 6, "slashing"],
    range : "Melee",
    weight : 15,
    description : "two-handed; Can count as dual-wielding",
    abilitytodamage : true
};
WeaponsList["double bladed sword"] = {
    regExpSearch : /^(?=.*double)(?=.*bladed)(?=.*sword).*$/i,
    name : "Double Bladed Sword",
    source : ["JM:EAGII", 2],
    list : "melee",
    type : "Martial",
    ability : 1,
    damage : [1, 8, "slashing"],
    range : "Melee",
    weight : 10,
    description : "two-handed; Can count as dual-wielding",
    abilitytodamage : true
};
WeaponsList["gladius"] = {
    regExpSearch : /gladius/i,
    name : "Gladius",
    source : ["JM:EAGII", 2],
    list : "melee",
    ability : 1,
    type : "Martial",
    damage : [1, 6, "slashing"],
    range : "Melee",
    weight : 3,
    description : "Finesse, light",
    abilitytodamage : true
};
WeaponsList["hook sword"] = {
    regExpSearch :  /^(?=.*hook)(?=.*sword).*$/i,
    name : "Hook Sword",
    source : ["JM:EAGII", 2],
    list : "melee",
    ability : 1,
    type : "Martial",
    damage : [1, 6, "slashing"],
    range : "Melee",
    weight : 3,
    description : "Finesse, light; Target disadv. on save vs. knocked prone/disarmed; Attach to other Hook Sword and attack with Reach",
    abilitytodamage : true,
    monkweapon : true
};
WeaponsList["jian"] = {
    regExpSearch : /jian/i,
    name : "Jian",
    source : ["JM:EAGII", 2],
    list : "melee",
    ability : 1,
    type : "Martial",
    damage : [1, 8, "slash./pierc."],
    range : "Melee",
    weight : 2,
    description : "Finesse, light",
    abilitytodamage : true
};
WeaponsList["kanabo"] = {
    regExpSearch : /kanabo/i,
    name : "Kanabo",
    source : ["JM:EAGII", 2],
    list : "melee",
    ability : 1,
    type : "Martial",
    damage : [1, 12, "bludgeoning"],
    range : "Melee",
    weight : 20,
    description : "Heavy, two-handed",
    abilitytodamage : true
};
WeaponsList["khopesh"] = {
    regExpSearch : /khopesh/i,
    name : "Khopesh",
    source : ["JM:EAGII", 2],
    list : "melee",
    ability : 1,
    type : "Martial",
    damage : [1, 6, "slashing"],
    range : "Melee",
    weight : 4,
    description : "Finesse; Target disadv. on save vs. knocked prone",
    abilitytodamage : true
};
WeaponsList["kopis"] = {
    regExpSearch : /kopis/i,
    name : "Kopis",
    source : ["JM:EAGII", 2],
    list : "melee",
    ability : 1,
    type : "Martial",
    damage : [1, 6, "slashing"],
    range : "Melee",
    weight : 3,
    description : "Finesse, light",
    abilitytodamage : true
};
WeaponsList["kukri"] = {
    regExpSearch : /kukri/i,
    name : "Kukri",
    source : ["JM:EAGII", 2],
    list : "melee",
    ability : 1,
    type : "Martial",
    damage : [1, 4, "slashing"],
    range : "Melee",
    weight : 2,
    description : "Finesse, light",
    abilitytodamage : true
};
WeaponsList["kunai"] = {
    regExpSearch : /kunai/i,
    name : "Kunai",
    source : ["JM:EAGII", 2],
    list : "melee",
    ability : 1,
    type : "Martial",
    damage : [1, 4, "piercing"],
    range : "Melee, 20/60 ft",
    weight : 2,
    description : "Finesse, light, thrown",
    abilitytodamage : true,
    monkweapon : true
};
WeaponsList["naginata"] = {
    regExpSearch : /naginata/i,
    name : "Naginata",
    source : ["JM:EAGII", 2],
    list : "melee",
    ability : 1,
    type : "Martial",
    damage : [1, 12, "slashing"],
    range : "Melee",
    weight : 15,
    description : "Reach, two-handed; disadv. when attacking within 5 ft",
    abilitytodamage : true
};
WeaponsList["orc double axe"] = {
    regExpSearch : /^(?=.*orc)(?=.*double)(?=.*axe).*$/i,
    name : "Orc Double Axe",
    source : ["JM:EAGII", 2],
    list : "melee",
    ability : 1,
    type : "Martial",
    damage : [1, 8, "slashing"],
    range : "Melee",
    weight : 15,
    description : "Heavy, two-handed; Can count as dual-wielding",
    abilitytodamage : true
};
WeaponsList["ranseur"] = {
    regExpSearch : /ranseur/i,
    name : "Ranseur",
    source : ["JM:EAGII", 2],
    list : "melee",
    ability : 1,
    type : "Martial",
    damage : [2, 4, "piercing"],
    range : "Melee",
    weight : 12,
    description : "Reach, two-handed; Target disadv. on save vs. disarmed",
    abilitytodamage : true
};
WeaponsList["ring blade"] = {
    regExpSearch : /^(?=.*ring)(?=.*blade).*$/i,
    name : "Ring Blade",
    source : ["JM:EAGII", 2],
    list : "melee",
    ability : 1,
    type : "Martial",
    damage : [1, 10, "slashing"],
    range : "Melee, 10/30",
    weight : 8,
    description : "Finesse, thrown, two-handed; Target disadv. on save vs. knocked prone",
    abilitytodamage : true
};
WeaponsList["sapara"] = {
    regExpSearch : /sapara/i,
    name : "Sapara",
    source : ["JM:EAGII", 2],
    list : "melee",
    ability : 1,
    type : "Martial",
    damage : [1, 4, "slashing"],
    range : "Melee",
    weight : 2,
    description : "Finesse, light; Target disadv. on save vs. knocked prone",
    abilitytodamage : true
};
WeaponsList["spiked chain"] = {
    regExpSearch : /^(?=.*spiked)(?=.*chain).*$/i,
    name : "Spiked Chain",
    source : ["JM:EAGII", 2],
    list : "melee",
    type : "Martial",
    damage : [2, 4, "piercing"],
    range : "Melee",
    weight : 10,
    description : "Finesse, light; Target disadv. on save vs. knocked prone",
    abilitytodamage : true
};
WeaponsList["harpoon"] = {
    regExpSearch : /harpoon/i,
    name : "Harpoon",
    source : ["JM:EAGII", 2],
    list : "ranged",
    type : "Martial",
    damage : [1, 10, "piercing"],
    range : "20/60 ft",
    weight : 6,
    description : "Thrown; Pierces target on hit and deals 1d10 dmg when pulled out; Target can't move more than 30ft while holding rope, str. check contest or cut rope to get away",
    abilitytodamage : true
};
WeaponsList["slingshot"] = {
    regExpSearch : /slingshot/i,
    name : "Slingshot",
    source : ["JM:EAGII", 2],
    list : "ranged",
    type : "Martial",
    damage : [1, 4, "bludgeoning"],
    range : "20/60 ft",
    weight : 1,
    description : "Ammunition, finesse, two-handed",
    abilitytodamage : true,
};