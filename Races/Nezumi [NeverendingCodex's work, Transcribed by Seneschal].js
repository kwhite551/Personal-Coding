var iFileName = "Nezumi [NeverendingCodex's work, Transcribed by Seneschal].js";
RequiredSheetVersion(13);

SourceList["NC:N"] = {
    name : "NeverendingCodex: Nezumi",
    abbreviation : "NC:N",
    group : "Reddit/r/UnearthedArcana",
    url : "https://www.reddit.com/r/UnearthedArcana/comments/gqx7c6/the_nezumi_new_race_for_5e_that_lets_you_play_as/",
    date : "2020/05/26"
}

RaceList["Nezumi"] = {
    regExpSearch : /nezumi/i,
    name : "Nezumi",
    sortname: "Nezumi",
    source : ["NC:N", 0],
    plural : "Nezumi",
    size : 3,
    speed : { walk : { spd : 30, enc : 20 }},
    defaultExcluded : true,
    languageProfs : ["Common", "Nezumi"],
    weaponsAdd : ["Claws"],
    skills : ["Stealth"],
    vision : [["Darkvision", 60], ["Keen Smell: advantage on Wisdom (Perception) checks that rely on smell", ""]],
    dmgres : ["Poison"],
    savetxt : {
        adv_vs : ["poison", "disease"]
    },
    age : "Nezumi reach adulthood at age 15 and live up to 200 years, though 50 is considered old due to short and violent lives",
    height : "Nezumi are as tall as a human (4'8\" + 2d10\")",
    weight : "Nezumi weigh around 155 lb (110 + 2d10 \xD7 2d4 lb)",
    scores : [0, 1, 2, 0, 0, 0],
    improvement : "+2 Constitution, +1 Dexterity",
    trait : "Nezumi (+2 Constitution, +1 Dexterity)" +
    "\nKeen Smell: I have advantage on Wisdom (Perception) checks that rely on smell" +
    "\nNatural Skulkers: I have proficiency in the Stealth Skill" +
    "\nNezumi Resistence: I am resistant to Poison damage and have advantage on saves against poison and disease" +
    "\nClaws: I have claws as a natural weapon that deal 1d4 + my Strength modifier slashing damage"
}