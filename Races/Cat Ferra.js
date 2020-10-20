var iFileName = "Cat Ferra [D&D Beyond and Perry Folk, transcribed by Seneschal]";
RequiredSheetVersion(12.999);

SourceList["DnD-B:N"] = {
	name : "D&D Beyond: Neko",
	abbreviation : "DnD-B:N",
	group : "D&D Beyond",
	defaultExcluded : true,
	url : "https://www.dndbeyond.com/races/21001-neko",
	date : "2018/04/11"
};

RaceList["catFerra"] = {
	regExpSearch : /^(?=.*cat)(?=.*ferra).*$/i,
	name : "Cat Ferra",
	sortname : "Ferra, Cat",
	source : ["DnD-B:N",0],
	plural : "Cat ferra",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	vision : [["Darkvision", 60], ["Cat's Hearing: Advantage on Wisdom(Perception) checks that involve hearing while all four of ears aren't covered", ""]],
	skills : ["Perception", "Stealth"],
	age : " mature physically and mentally by their late teens and have the same lifespan as humans.",
	height : " range from under 5 to 6 feet tall (4'8\" + 2d8\")",
	weight : " weigh around 108 lb (90 + 2d8 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to 1,8 meters tall (148 + 5d8 cm)",
	weightMetric : " weight around 48 kg ( 40 + 5d8 \xD7 2d4 / 10 kg)",
	improvements : "Cat Ferra: +2 Dexterity, +1 Charisma",
	scores : [0, 2, 0, 0, 0, 1],
	trait : "Cat Ferra (+2 Dexterity, +1 Charisma)\n Cat's Talent: I have proficiency in Perception and Stealth.\n Feline Charms: I can attach decorations to my tail to gain advantage on Persuasion. Decorations only work once before breaking unless I spend 10 times the amount of gold to have it made permanant.",
};