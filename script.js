"use strict"

//json
{
var card_dict = JSON.parse('[ { "name": "Mysterious Elf", "id": "142", "deck": "neutral", "row": "close", "strength": "0", "ability": "hero spy", "filename": "mysterious_elf", "count": "1" }, { "name": "Decoy", "id": "1", "deck": "special", "row": "", "strength": "", "ability": "decoy", "filename": "decoy", "count": "3" }, { "name": "Biting Frost", "id": "4", "deck": "weather", "row": "", "strength": "", "ability": "frost", "filename": "frost", "count": "3" }, { "name": "Cirilla Fiona Elen Riannon", "id": "139", "deck": "neutral", "row": "close", "strength": "15", "ability": "hero", "filename": "ciri", "count": "1" }, { "name": "Clear Weather", "id": "7", "deck": "weather", "row": "", "strength": "", "ability": "clear", "filename": "clear", "count": "2" }, { "name": "Commander\'s Horn", "id": "2", "deck": "special", "row": "", "strength": "", "ability": "horn", "filename": "horn", "count": "3" }, { "name": "Dandelion", "id": "11", "deck": "neutral", "row": "close", "strength": "2", "ability": "horn", "filename": "dandelion", "count": "1" }, { "name": "Emiel Regis Rohellec Terzieff", "id": "", "deck": "neutral", "row": "close", "strength": "5", "ability": "", "filename": "emiel", "count": "1" }, { "name": "Geralt of Rivia", "id": "138", "deck": "neutral", "row": "close", "strength": "15", "ability": "hero", "filename": "geralt", "count": "1" }, { "name": "Impenetrable Fog", "id": "5", "deck": "weather", "row": "", "strength": "", "ability": "fog", "filename": "fog", "count": "3" }, { "name": "Scorch", "id": "3", "deck": "special", "row": "", "strength": "", "ability": "scorch", "filename": "scorch", "count": "3" }, { "name": "Torrential Rain", "id": "6", "deck": "weather", "row": "", "strength": "", "ability": "rain", "filename": "rain", "count": "2" }, { "name": "Triss Merigold", "id": "141", "deck": "neutral", "row": "close", "strength": "7", "ability": "hero", "filename": "triss", "count": "1" }, { "name": "Vesemir", "id": "9", "deck": "neutral", "row": "close", "strength": "6", "ability": "", "filename": "vesemir", "count": "1" }, { "name": "Villentretenmerth", "id": "8", "deck": "neutral", "row": "close", "strength": "7", "ability": "scorch_c", "filename": "villen", "count": "1" }, { "name": "Yennefer of Vengerberg", "id": "140", "deck": "neutral", "row": "ranged", "strength": "7", "ability": "hero medic", "filename": "yennefer", "count": "1" }, { "name": "Zoltan Chivay", "id": "10", "deck": "neutral", "row": "close", "strength": "5", "ability": "", "filename": "zoltan", "count": "1" }, { "name": "Olgierd von Everec", "id": "", "deck": "neutral", "row": "agile", "strength": "6", "ability": "agile morale", "filename": "olgierd", "count": "1" }, { "name": "Gaunter O\'Dimm", "id": "", "deck": "neutral", "row": "siege", "strength": "2", "ability": "muster", "filename": "gaunter_odimm", "count": "1" }, { "name": "Gaunter O\'Dimm - Darkness", "id": "", "deck": "neutral", "row": "ranged", "strength": "4", "ability": "muster", "filename": "gaunter_odimm_darkness", "count": "3" }, { "name": "Cow", "id": "", "deck": "neutral", "row": "ranged", "strength": "0", "ability": "avenger", "filename": "cow", "count": "1" }, { "name": "Bovine Defense Force", "id": "", "deck": "neutral", "row": "close", "strength": "8", "ability": "", "filename": "chort", "count": "0" }, { "name": "Foltest - King of Temeria", "id": "5", "deck": "realms", "row": "leader", "strength": "", "ability": "foltest_king", "filename": "foltest_silver", "count": "1" }, { "name": "Foltest - Lord Commander of the North", "id": "8", "deck": "realms", "row": "leader", "strength": "", "ability": "foltest_lord", "filename": "foltest_gold", "count": "1" }, { "name": "Foltest - The Siegemaster", "id": "6", "deck": "realms", "row": "leader", "strength": "", "ability": "foltest_siegemaster", "filename": "foltest_copper", "count": "1" }, { "name": "Foltest - The Steel-Forged", "id": "7", "deck": "realms", "row": "leader", "strength": "", "ability": "foltest_steelforged", "filename": "foltest_bronze", "count": "1" }, { "name": "Foltest - Son of Medell", "id": "", "deck": "realms", "row": "leader", "strength": "", "ability": "foltest_son", "filename": "foltest_son_of_medell", "count": "1" }, { "name": "Ballista", "id": "79", "deck": "realms", "row": "siege", "strength": "6", "ability": "", "filename": "ballista", "count": "1" }, { "name": "Blue Stripes Commando", "id": "92", "deck": "realms", "row": "close", "strength": "4", "ability": "bond", "filename": "blue_stripes", "count": "3" }, { "name": "Catapult", "id": "75", "deck": "realms", "row": "siege", "strength": "8", "ability": "bond", "filename": "catapult_1", "count": "2" }, { "name": "Crinfrid Reavers Dragon Hunter", "id": "87", "deck": "realms", "row": "ranged", "strength": "5", "ability": "bond", "filename": "crinfrid", "count": "3" }, { "name": "Dethmold", "id": "76", "deck": "realms", "row": "ranged", "strength": "6", "ability": "", "filename": "dethmold", "count": "1" }, { "name": "Dun Banner Medic", "id": "88", "deck": "realms", "row": "siege", "strength": "5", "ability": "medic", "filename": "banner_nurse", "count": "1" }, { "name": "Esterad Thyssen", "id": "11", "deck": "realms", "row": "close", "strength": "10", "ability": "hero", "filename": "esterad", "count": "1" }, { "name": "John Natalis", "id": "10", "deck": "realms", "row": "close", "strength": "10", "ability": "hero", "filename": "natalis", "count": "1" }, { "name": "Kaedweni Siege Expert", "id": "98", "deck": "realms", "row": "siege", "strength": "1", "ability": "morale", "filename": "kaedwen_siege", "count": "1" }, { "name": "Kaedweni Siege Expert", "id": "99", "deck": "realms", "row": "siege", "strength": "1", "ability": "morale", "filename": "kaedwen_siege_1", "count": "1" }, { "name": "Kaedweni Siege Expert", "id": "100", "deck": "realms", "row": "siege", "strength": "1", "ability": "morale", "filename": "kaedwen_siege_2", "count": "1" }, { "name": "Keira Metz", "id": "84", "deck": "realms", "row": "ranged", "strength": "5", "ability": "", "filename": "keira", "count": "1" }, { "name": "Philippa Eilhart", "id": "12", "deck": "realms", "row": "ranged", "strength": "10", "ability": "hero", "filename": "philippa", "count": "1" }, { "name": "Poor Fucking Infantry", "id": "95", "deck": "realms", "row": "close", "strength": "1", "ability": "bond", "filename": "poor_infantry", "count": "4" }, { "name": "Prince Stennis", "id": "86", "deck": "realms", "row": "close", "strength": "5", "ability": "spy", "filename": "stennis", "count": "1" }, { "name": "Redanian Foot Soldier", "id": "96", "deck": "realms", "row": "close", "strength": "1", "ability": "", "filename": "redania", "count": "1" }, { "name": "Redanian Foot Soldier", "id": "97", "deck": "realms", "row": "close", "strength": "1", "ability": "", "filename": "redania_1", "count": "1" }, { "name": "Sheldon Skaggs", "id": "91", "deck": "realms", "row": "ranged", "strength": "4", "ability": "", "filename": "sheldon", "count": "1" }, { "name": "Siege Tower", "id": "81", "deck": "realms", "row": "siege", "strength": "6", "ability": "", "filename": "siege_tower", "count": "1" }, { "name": "Siegfried of Denesle", "id": "83", "deck": "realms", "row": "close", "strength": "5", "ability": "", "filename": "siegfried", "count": "1" }, { "name": "Sigismund Dijkstra", "id": "89", "deck": "realms", "row": "close", "strength": "4", "ability": "spy", "filename": "dijkstra", "count": "1" }, { "name": "Síle de Tansarville", "id": "85", "deck": "realms", "row": "ranged", "strength": "5", "ability": "", "filename": "sheala", "count": "1" }, { "name": "Thaler", "id": "94", "deck": "realms", "row": "siege", "strength": "1", "ability": "spy", "filename": "thaler", "count": "1" }, { "name": "Sabrina Glevissig", "id": "90", "deck": "realms", "row": "ranged", "strength": "4", "ability": "", "filename": "sabrina", "count": "1" }, { "name": "Vernon Roche", "id": "9", "deck": "realms", "row": "close", "strength": "10", "ability": "hero", "filename": "vernon", "count": "1" }, { "name": "Ves", "id": "82", "deck": "realms", "row": "close", "strength": "5", "ability": "", "filename": "ves", "count": "1" }, { "name": "Yarpen Zigrin", "id": "93", "deck": "realms", "row": "close", "strength": "2", "ability": "", "filename": "yarpen", "count": "1" }, { "name": "Trebuchet", "id": "77", "deck": "realms", "row": "siege", "strength": "6", "ability": "", "filename": "trebuchet", "count": "1" }, { "name": "Trebuchet", "id": "78", "deck": "realms", "row": "siege", "strength": "6", "ability": "", "filename": "trebuchet_1", "count": "1" }, { "name": "Emhyr var Emreis - His Imperial Majesty", "id": "1", "deck": "nilfgaard", "row": "leader", "strength": "", "ability": "emhyr_imperial", "filename": "emhyr_silver", "count": "1" }, { "name": "Emhyr var Emreis - Emperor of Nilfgaard", "id": "2", "deck": "nilfgaard", "row": "leader", "strength": "", "ability": "emhyr_emperor", "filename": "emhyr_copper", "count": "1" }, { "name": "Emhyr var Emreis - the White Flame", "id": "3", "deck": "nilfgaard", "row": "leader", "strength": "", "ability": "emhyr_whiteflame", "filename": "emhyr_bronze", "count": "1" }, { "name": "Emhyr var Emreis - The Relentless", "id": "4", "deck": "nilfgaard", "row": "leader", "strength": "", "ability": "emhyr_relentless", "filename": "emhyr_gold", "count": "1" }, { "name": "Emhyr var Emreis - Invader of the North", "id": "", "deck": "nilfgaard", "row": "leader", "strength": "", "ability": "emhyr_invader", "filename": "emhyr_invader_of_the_north", "count": "1" }, { "name": "Albrich", "id": "68", "deck": "nilfgaard", "row": "ranged", "strength": "2", "ability": "", "filename": "albrich", "count": "1" }, { "name": "Assire var Anahid", "id": "52", "deck": "nilfgaard", "row": "ranged", "strength": "6", "ability": "", "filename": "assire", "count": "1" }, { "name": "Black Infantry Archer", "id": "47", "deck": "nilfgaard", "row": "ranged", "strength": "10", "ability": "", "filename": "black_archer", "count": "1" }, { "name": "Black Infantry Archer", "id": "48", "deck": "nilfgaard", "row": "ranged", "strength": "10", "ability": "", "filename": "black_archer_1", "count": "1" }, { "name": "Cahir Mawr Dyffryn aep Ceallach", "id": "54", "deck": "nilfgaard", "row": "close", "strength": "6", "ability": "", "filename": "cahir", "count": "1" }, { "name": "Cynthia", "id": "60", "deck": "nilfgaard", "row": "ranged", "strength": "4", "ability": "", "filename": "cynthia", "count": "1" }, { "name": "Etolian Auxiliary Archers", "id": "72", "deck": "nilfgaard", "row": "ranged", "strength": "1", "ability": "medic", "filename": "archer_support", "count": "1" }, { "name": "Etolian Auxiliary Archers", "id": "73", "deck": "nilfgaard", "row": "ranged", "strength": "1", "ability": "medic", "filename": "archer_support_1", "count": "1" }, { "name": "Fringilla Vigo", "id": "53", "deck": "nilfgaard", "row": "ranged", "strength": "6", "ability": "", "filename": "fringilla", "count": "1" }, { "name": "Heavy Zerrikanian Fire Scorpion", "id": "49", "deck": "nilfgaard", "row": "siege", "strength": "10", "ability": "", "filename": "heavy_zerri", "count": "1" }, { "name": "Impera Brigade Guard", "id": "67", "deck": "nilfgaard", "row": "close", "strength": "3", "ability": "bond", "filename": "imperal_brigade", "count": "4" }, { "name": "Letho of Gulet", "id": "147", "deck": "nilfgaard", "row": "close", "strength": "10", "ability": "hero", "filename": "letho", "count": "1" }, { "name": "Menno Coehoorn", "id": "148", "deck": "nilfgaard", "row": "close", "strength": "10", "ability": "hero medic", "filename": "menno", "count": "1" }, { "name": "Morteisen", "id": "64", "deck": "nilfgaard", "row": "close", "strength": "3", "ability": "", "filename": "morteisen", "count": "1" }, { "name": "Morvran Voorhis", "id": "149", "deck": "nilfgaard", "row": "siege", "strength": "10", "ability": "hero", "filename": "moorvran", "count": "1" }, { "name": "Nausicaa Cavalry Rider", "id": "71", "deck": "nilfgaard", "row": "close", "strength": "2", "ability": "bond", "filename": "nauzicaa_2", "count": "3" }, { "name": "Puttkammer", "id": "66", "deck": "nilfgaard", "row": "ranged", "strength": "3", "ability": "", "filename": "puttkammer", "count": "1" }, { "name": "Rainfarn", "id": "61", "deck": "nilfgaard", "row": "close", "strength": "4", "ability": "", "filename": "rainfarn", "count": "1" }, { "name": "Renuald aep Matsen", "id": "56", "deck": "nilfgaard", "row": "ranged", "strength": "5", "ability": "", "filename": "renuald", "count": "1" }, { "name": "Rotten Mangonel", "id": "65", "deck": "nilfgaard", "row": "siege", "strength": "3", "ability": "", "filename": "rotten", "count": "1" }, { "name": "Shilard Fitz-Oesterlen", "id": "51", "deck": "nilfgaard", "row": "close", "strength": "7", "ability": "spy", "filename": "shilard", "count": "1" }, { "name": "Siege Engineer", "id": "55", "deck": "nilfgaard", "row": "siege", "strength": "6", "ability": "", "filename": "siege_engineer", "count": "1" }, { "name": "Siege Technician", "id": "74", "deck": "nilfgaard", "row": "siege", "strength": "0", "ability": "medic", "filename": "siege_support", "count": "1" }, { "name": "Stefan Skellen", "id": "50", "deck": "nilfgaard", "row": "close", "strength": "9", "ability": "spy", "filename": "stefan", "count": "1" }, { "name": "Sweers", "id": "69", "deck": "nilfgaard", "row": "ranged", "strength": "2", "ability": "", "filename": "sweers", "count": "1" }, { "name": "Tibor Eggebracht", "id": "150", "deck": "nilfgaard", "row": "ranged", "strength": "10", "ability": "hero", "filename": "tibor", "count": "1" }, { "name": "Vanhemar", "id": "62", "deck": "nilfgaard", "row": "ranged", "strength": "4", "ability": "", "filename": "vanhemar", "count": "1" }, { "name": "Vattier de Rideaux", "id": "63", "deck": "nilfgaard", "row": "close", "strength": "4", "ability": "spy", "filename": "vattier", "count": "1" }, { "name": "Vreemde", "id": "70", "deck": "nilfgaard", "row": "close", "strength": "2", "ability": "", "filename": "vreemde", "count": "1" }, { "name": "Young Emissary", "id": "58", "deck": "nilfgaard", "row": "close", "strength": "5", "ability": "bond", "filename": "young_emissary", "count": "1" }, { "name": "Young Emissary", "id": "59", "deck": "nilfgaard", "row": "close", "strength": "5", "ability": "bond", "filename": "young_emissary_1", "count": "1" }, { "name": "Zerrikanian Fire Scorpion", "id": "57", "deck": "nilfgaard", "row": "siege", "strength": "5", "ability": "", "filename": "zerri", "count": "1" }, { "name": "Eredin - Commander of the Red Riders", "id": "134", "deck": "monsters", "row": "leader", "strength": "", "ability": "eredin_commander", "filename": "eredin_silver", "count": "1" }, { "name": "Eredin - Bringer of Death", "id": "136", "deck": "monsters", "row": "leader", "strength": "", "ability": "eredin_bringer_of_death", "filename": "eredin_bronze", "count": "1" }, { "name": "Eredin - Destroyer of Worlds", "id": "137", "deck": "monsters", "row": "leader", "strength": "", "ability": "eredin_destroyer", "filename": "eredin_gold", "count": "1" }, { "name": "Eredin - King of the Wild Hunt", "id": "135", "deck": "monsters", "row": "leader", "strength": "", "ability": "eredin_king", "filename": "eredin_copper", "count": "1" }, { "name": "Eredin Bréacc Glas - The Treacherous", "id": "", "deck": "monsters", "row": "leader", "strength": "", "ability": "eredin_treacherous", "filename": "eredin_the_treacherous", "count": "1" }, { "name": "Arachas ", "id": "27", "deck": "monsters", "row": "close", "strength": "4", "ability": "muster", "filename": "arachas", "count": "1" }, { "name": "Arachas ", "id": "28", "deck": "monsters", "row": "close", "strength": "4", "ability": "muster", "filename": "arachas_1", "count": "1" }, { "name": "Arachas ", "id": "29", "deck": "monsters", "row": "close", "strength": "4", "ability": "muster", "filename": "arachas_2", "count": "1" }, { "name": "Arachas- Behemoth", "id": "15", "deck": "monsters", "row": "siege", "strength": "6", "ability": "muster", "filename": "arachas_behemoth", "count": "1" }, { "name": "Botchling", "id": "26", "deck": "monsters", "row": "close", "strength": "4", "ability": "", "filename": "poroniec", "count": "1" }, { "name": "Celaeno Harpy", "id": "38", "deck": "monsters", "row": "agile", "strength": "2", "ability": "agile", "filename": "celaeno_harpy", "count": "1" }, { "name": "Cockatrice", "id": "36", "deck": "monsters", "row": "ranged", "strength": "2", "ability": "", "filename": "cockatrice", "count": "1" }, { "name": "Crone - Brewess", "id": "16", "deck": "monsters", "row": "close", "strength": "6", "ability": "muster", "filename": "witch_velen", "count": "1" }, { "name": "Crone - Weavess", "id": "17", "deck": "monsters", "row": "close", "strength": "6", "ability": "muster", "filename": "witch_velen_1", "count": "1" }, { "name": "Crone - Whispess", "id": "18", "deck": "monsters", "row": "close", "strength": "6", "ability": "muster", "filename": "witch_velen_2", "count": "1" }, { "name": "Draug", "id": "143", "deck": "monsters", "row": "close", "strength": "10", "ability": "hero", "filename": "draug", "count": "1" }, { "name": "Earth Elemental", "id": "12", "deck": "monsters", "row": "siege", "strength": "6", "ability": "", "filename": "earth_elemental", "count": "1" }, { "name": "Endrega", "id": "34", "deck": "monsters", "row": "ranged", "strength": "2", "ability": "", "filename": "endrega", "count": "1" }, { "name": "Fiend", "id": "13", "deck": "monsters", "row": "close", "strength": "6", "ability": "", "filename": "fiend", "count": "1" }, { "name": "Fire Elemental", "id": "14", "deck": "monsters", "row": "siege", "strength": "6", "ability": "", "filename": "fire_elemental", "count": "1" }, { "name": "Foglet", "id": "39", "deck": "monsters", "row": "close", "strength": "2", "ability": "", "filename": "fogling", "count": "1" }, { "name": "Forktail", "id": "19", "deck": "monsters", "row": "close", "strength": "5", "ability": "", "filename": "forktail", "count": "1" }, { "name": "Frightener", "id": "23", "deck": "monsters", "row": "close", "strength": "5", "ability": "", "filename": "frightener", "count": "1" }, { "name": "Gargoyle", "id": "37", "deck": "monsters", "row": "ranged", "strength": "2", "ability": "", "filename": "gargoyle", "count": "1" }, { "name": "Ghoul", "id": "44", "deck": "monsters", "row": "close", "strength": "1", "ability": "muster", "filename": "ghoul", "count": "1" }, { "name": "Ghoul", "id": "45", "deck": "monsters", "row": "close", "strength": "1", "ability": "muster", "filename": "ghoul_1", "count": "1" }, { "name": "Ghoul", "id": "46", "deck": "monsters", "row": "close", "strength": "1", "ability": "muster", "filename": "ghoul_2", "count": "1" }, { "name": "Grave Hag", "id": "25", "deck": "monsters", "row": "ranged", "strength": "5", "ability": "", "filename": "gravehag", "count": "1" }, { "name": "Griffin", "id": "21", "deck": "monsters", "row": "close", "strength": "5", "ability": "", "filename": "gryffin", "count": "1" }, { "name": "Harpy", "id": "35", "deck": "monsters", "row": "agile", "strength": "2", "ability": "agile", "filename": "harpy", "count": "1" }, { "name": "Ice Giant", "id": "24", "deck": "monsters", "row": "siege", "strength": "5", "ability": "", "filename": "frost_giant", "count": "1" }, { "name": "Imlerith", "id": "144", "deck": "monsters", "row": "close", "strength": "10", "ability": "hero", "filename": "imlerith", "count": "1" }, { "name": "Kayran", "id": "146", "deck": "monsters", "row": "agile", "strength": "8", "ability": "hero agile morale", "filename": "kayran", "count": "1" }, { "name": "Leshen", "id": "145", "deck": "monsters", "row": "ranged", "strength": "10", "ability": "hero", "filename": "leshen", "count": "1" }, { "name": "Nekker", "id": "41", "deck": "monsters", "row": "close", "strength": "2", "ability": "muster", "filename": "nekker", "count": "1" }, { "name": "Nekker", "id": "42", "deck": "monsters", "row": "close", "strength": "2", "ability": "muster", "filename": "nekker_1", "count": "1" }, { "name": "Nekker", "id": "43", "deck": "monsters", "row": "close", "strength": "2", "ability": "muster", "filename": "nekker_2", "count": "1" }, { "name": "Plague Maiden", "id": "20", "deck": "monsters", "row": "close", "strength": "5", "ability": "", "filename": "mighty_maiden", "count": "1" }, { "name": "Vampire - Bruxa", "id": "33", "deck": "monsters", "row": "close", "strength": "4", "ability": "muster", "filename": "bruxa", "count": "1" }, { "name": "Vampire - Ekimmara", "id": "30", "deck": "monsters", "row": "close", "strength": "4", "ability": "muster", "filename": "ekkima", "count": "1" }, { "name": "Vampire - Fleder", "id": "31", "deck": "monsters", "row": "close", "strength": "4", "ability": "muster", "filename": "fleder", "count": "1" }, { "name": "Vampire - Garkain", "id": "32", "deck": "monsters", "row": "close", "strength": "4", "ability": "muster", "filename": "garkain", "count": "1" }, { "name": "Vampire - Katakan", "id": "", "deck": "monsters", "row": "close", "strength": "5", "ability": "muster", "filename": "katakan", "count": "1" }, { "name": "Werewolf", "id": "22", "deck": "monsters", "row": "close", "strength": "5", "ability": "", "filename": "werewolf", "count": "1" }, { "name": "Wyvern", "id": "40", "deck": "monsters", "row": "ranged", "strength": "2", "ability": "", "filename": "wyvern", "count": "1" }, { "name": "Toad", "id": "", "deck": "monsters", "row": "ranged", "strength": "7", "ability": "scorch_r", "filename": "toad", "count": "1" }, { "name": "Francesca Findabair - Queen of Dol Blathanna", "id": "13", "deck": "scoiatael", "row": "leader", "strength": "", "ability": "francesca_queen", "filename": "francesca_silver", "count": "1" }, { "name": "Francesca Findabair - the Beautiful", "id": "14", "deck": "scoiatael", "row": "leader", "strength": "", "ability": "francesca_beautiful", "filename": "francesca_gold", "count": "1" }, { "name": "Francesca Findabair - Daisy of the Valley", "id": "15", "deck": "scoiatael", "row": "leader", "strength": "", "ability": "francesca_daisy", "filename": "francesca_copper", "count": "1" }, { "name": "Francesca Findabair - Pureblood Elf", "id": "16", "deck": "scoiatael", "row": "leader", "strength": "", "ability": "francesca_pureblood", "filename": "francesca_bronze", "count": "1" }, { "name": "Francesca Findabair - Hope of the Aen Seidhe", "id": "", "deck": "scoiatael", "row": "leader", "strength": "", "ability": "francesca_hope", "filename": "francesca_hope_of_the_aen_seidhe", "count": "1" }, { "name": "Ciaran aep Easnillien", "id": "122", "deck": "scoiatael", "row": "agile", "strength": "3", "ability": "agile", "filename": "ciaran", "count": "1" }, { "name": "Barclay Els", "id": "106", "deck": "scoiatael", "row": "agile", "strength": "6", "ability": "agile", "filename": "barclay", "count": "1" }, { "name": "Dennis Cranmer", "id": "102", "deck": "scoiatael", "row": "close", "strength": "6", "ability": "", "filename": "dennis", "count": "1" }, { "name": "Dol Blathanna Archer", "id": "121", "deck": "scoiatael", "row": "ranged", "strength": "4", "ability": "", "filename": "dol_archer", "count": "1" }, { "name": "Dol Blathanna Scout", "id": "107", "deck": "scoiatael", "row": "agile", "strength": "6", "ability": "agile", "filename": "dol_infantry", "count": "1" }, { "name": "Dol Blathanna Scout", "id": "108", "deck": "scoiatael", "row": "agile", "strength": "6", "ability": "agile", "filename": "dol_infantry_1", "count": "1" }, { "name": "Dol Blathanna Scout", "id": "109", "deck": "scoiatael", "row": "agile", "strength": "6", "ability": "agile", "filename": "dol_infantry_2", "count": "1" }, { "name": "Dwarven Skirmisher", "id": "123", "deck": "scoiatael", "row": "close", "strength": "3", "ability": "muster", "filename": "dwarf", "count": "1" }, { "name": "Dwarven Skirmisher", "id": "124", "deck": "scoiatael", "row": "close", "strength": "3", "ability": "muster", "filename": "dwarf_1", "count": "1" }, { "name": "Dwarven Skirmisher", "id": "125", "deck": "scoiatael", "row": "close", "strength": "3", "ability": "muster", "filename": "dwarf_2", "count": "1" }, { "name": "Eithné", "id": "17", "deck": "scoiatael", "row": "ranged", "strength": "10", "ability": "hero", "filename": "eithne", "count": "1" }, { "name": "Elven Skirmisher", "id": "127", "deck": "scoiatael", "row": "ranged", "strength": "2", "ability": "muster", "filename": "elf_skirmisher", "count": "1" }, { "name": "Elven Skirmisher", "id": "128", "deck": "scoiatael", "row": "ranged", "strength": "2", "ability": "muster", "filename": "elf_skirmisher_1", "count": "1" }, { "name": "Elven Skirmisher", "id": "129", "deck": "scoiatael", "row": "ranged", "strength": "2", "ability": "muster", "filename": "elf_skirmisher_2", "count": "1" }, { "name": "Filavandrel aen Fidhail", "id": "104", "deck": "scoiatael", "row": "agile", "strength": "6", "ability": "agile", "filename": "filavandrel", "count": "1" }, { "name": "Havekar Healer", "id": "131", "deck": "scoiatael", "row": "ranged", "strength": "0", "ability": "medic", "filename": "havekar_nurse", "count": "1" }, { "name": "Havekar Healer", "id": "132", "deck": "scoiatael", "row": "ranged", "strength": "0", "ability": "medic", "filename": "havekar_nurse_1", "count": "1" }, { "name": "Havekar Healer", "id": "133", "deck": "scoiatael", "row": "ranged", "strength": "0", "ability": "medic", "filename": "havekar_nurse_2", "count": "1" }, { "name": "Havekar Smuggler", "id": "110", "deck": "scoiatael", "row": "close", "strength": "5", "ability": "muster", "filename": "havekar_support", "count": "1" }, { "name": "Havekar Smuggler", "id": "111", "deck": "scoiatael", "row": "close", "strength": "5", "ability": "muster", "filename": "havekar_support_1", "count": "1" }, { "name": "Havekar Smuggler", "id": "112", "deck": "scoiatael", "row": "close", "strength": "5", "ability": "muster", "filename": "havekar_support_2", "count": "1" }, { "name": "Ida Emean aep Sivney", "id": "103", "deck": "scoiatael", "row": "ranged", "strength": "6", "ability": "", "filename": "ida", "count": "1" }, { "name": "Iorveth", "id": "20", "deck": "scoiatael", "row": "ranged", "strength": "10", "ability": "hero", "filename": "iorveth", "count": "1" }, { "name": "Isengrim Faoiltiarna", "id": "19", "deck": "scoiatael", "row": "close", "strength": "10", "ability": "hero morale", "filename": "isengrim", "count": "1" }, { "name": "Mahakaman Defender", "id": "115", "deck": "scoiatael", "row": "close", "strength": "5", "ability": "", "filename": "mahakam", "count": "1" }, { "name": "Mahakaman Defender", "id": "116", "deck": "scoiatael", "row": "close", "strength": "5", "ability": "", "filename": "mahakam_1", "count": "1" }, { "name": "Mahakaman Defender", "id": "117", "deck": "scoiatael", "row": "close", "strength": "5", "ability": "", "filename": "mahakam_2", "count": "1" }, { "name": "Mahakaman Defender", "id": "118", "deck": "scoiatael", "row": "close", "strength": "5", "ability": "", "filename": "mahakam_3", "count": "1" }, { "name": "Mahakaman Defender", "id": "119", "deck": "scoiatael", "row": "close", "strength": "5", "ability": "", "filename": "mahakam_4", "count": "1" }, { "name": "Milva", "id": "101", "deck": "scoiatael", "row": "ranged", "strength": "10", "ability": "morale", "filename": "milva", "count": "1" }, { "name": "Riordain", "id": "130", "deck": "scoiatael", "row": "ranged", "strength": "1", "ability": "", "filename": "riordain", "count": "1" }, { "name": "Saesenthessis", "id": "18", "deck": "scoiatael", "row": "ranged", "strength": "10", "ability": "hero", "filename": "saskia", "count": "1" }, { "name": "Toruviel", "id": "126", "deck": "scoiatael", "row": "ranged", "strength": "2", "ability": "", "filename": "toruviel", "count": "1" }, { "name": "Vrihedd Brigade Recruit", "id": "120", "deck": "scoiatael", "row": "ranged", "strength": "4", "ability": "", "filename": "vrihedd_cadet", "count": "1" }, { "name": "Vrihedd Brigade Veteran", "id": "113", "deck": "scoiatael", "row": "agile", "strength": "5", "ability": "agile", "filename": "vrihedd_brigade", "count": "1" }, { "name": "Vrihedd Brigade Veteran", "id": "114", "deck": "scoiatael", "row": "agile", "strength": "5", "ability": "agile", "filename": "vrihedd_brigade_1", "count": "1" }, { "name": "Yaevinn", "id": "105", "deck": "scoiatael", "row": "agile", "strength": "6", "ability": "agile", "filename": "yaevinn", "count": "1" } ]');
}

var ability_dict = {
	clear: {
		name: "Clear Weather",
		description: "Removes all Weather Cards (Biting Frost, Impenetrable Fog and Torrential Rain) effects. "
	},
	frost: {
		name: "Biting Frost",
		description: "Sets the strength of all Close Combat cards to 1 for both players. "
	},
	fog: {
		name: "Impenetrable Fog",
		description: "Sets the strength of all Ranged Combat cards to 1 for both players. "
	},
	rain: {
		name: "Torrential Rain",
		description: "Sets the strength of all Siege Combat cards to 1 for both players. "
	},
	storm: {
		name: "Skellige Storm",
		description: "Reduces the Strength of all Range and Siege Units to 1. "
	},
	hero: {
		name: "hero",
		description: "Not affected by any Special Cards or abilities. "
	},
	decoy: {
		name: "Decoy",
		description: "Swap with a card on the battlefield to return it to your hand. "
	},
	horn: {
		name: "Commander's Horn",
		description: "Doubles the strength of all unit cards in that row. Limited to 1 per row. ",
		placed: async card => await card.animate("horn")
	},
	mardroeme: {
		name: "Mardroeme",
		description: "Triggers transformation of all Berserker cards on the same row. ",
		placed: (card, player) => conle.log("TODO mardroeme") // needs row info
	},
	scorch: {
		name: "Scorch",
		description: "Discard after playing. Kills the strongest card(s) on the battlefield. ",
		activated: async card => {	
			let maxUnits = board.row.map( r => [r,r.maxUnits()] ).filter( p => p[1].length > 0);
			let maxPower = maxUnits.reduce( (a,p) => Math.max(a, p[1][0].power), 0 );
			let scorched = maxUnits.filter( p => p[1][0].power === maxPower);
			let cards = scorched.reduce( (a,p) => a.concat( p[1].map(u => [p[0], u])), []);
			
			await Promise.all(cards.map( async u => await u[1].animate("scorch", true, false)) );
			await Promise.all(cards.map( async u => await board.toGrave(u[1], u[0])) );
			await board.toGrave(card, card.holder.hand);
		}
	},
	scorch_c: {
		name: "Scorch - Close Combat",
		description: "Destroy your enemy's strongest Close Combat unit(s) if the combined strength of all his or her Close Combat units is 10 or more. ",
		placed: async (card) => await board.getRow(card, "close", card.holder.opponent()).scorch()
	},
	scorch_r: {
		name: "Scorch - Ranged",
		description: "Destroy your enemy's strongest Ranged Combat unit(s) if the combined strength of all his or her Ranged Combat units is 10 or more. ",
		placed: async (card) => await board.getRow(card, "ranged", card.holder.opponent()).scorch()
	},
	scorch_s: {
		name: "Scorch - Siege",
		description: "Destroys your enemy's strongest Siege Combat unit(s) if the combined strength of all his or her Siege Combat units is 10 or more. ",
		placed: async (card) => await board.getRow(card, "siege", card.holder.opponent()).scorch()
	},
	agile: {
		name:"agile", 
		description: "Can be placed in either the Close Combat or the Ranged Combat row. Cannot be moved once placed. "
	},
	muster: {
		name:"muster", 
		description: "Find any cards with the same name in your deck and play them instantly. ",
		placed: async (card) => {
			let i = card.name.indexOf('-');
			let cardName = i === -1 ?  card.name : card.name.substring(0, i);
			let pred = c => c.name.startsWith(cardName);
			
			let units = card.holder.hand.getCards(pred).map(x => [card.holder.hand, x])
			.concat(card.holder.deck.getCards(pred).map( x => [card.holder.deck, x] ) );
			
			if (units.length === 0)
				return;
			
			await card.animate("muster");
			await Promise.all( units.map( async p =>  await board.addCardToRow(p[1], p[1].row, p[1].holder, p[0])));
		}
	},
	spy: {
		name: "spy",
		description: "Place on your opponent's battlefield (counts towards your opponent's total) and draw 2 cards from your deck. ",
		placed: async (card) => {
			await card.animate("spy");
			for (let i=0;i<2;i++) {
				if (card.holder.deck.cards.length > 0)
					await card.holder.deck.draw(card.holder.hand);
			}
			card.holder = card.holder.opponent();
		}
	},
	medic: {
		name: "medic",
		description: "Choose one card from your discard pile and play it instantly (no Heroes or Special Cards). ",
		placed: async (card) => {
			let grave = board.getRow(card, "grave", card.holder);
			let units = card.holder.grave.findCards(c => c.isUnit());
			if (units.length <= 0)
				return;
			let wrapper = {card : null};
			if (game.randomRespawn) 
				 wrapper.card = grave.findCardsRandom(c => c.isUnit());
			else if (card.holder.controller instanceof ControllerAI)
				wrapper.card =  card.holder.controller.medic(card, grave);
			else
				await ui.queueCarousel(card.holder.grave, 1, (c, i) => wrapper.card=c.cards[i], c => c.isUnit(), true);
			let res = wrapper.card;
			grave.addCard(grave.removeCard(res));
			await res.animate("medic");
			await res.autoplay(grave);
		}
	},
	morale: {
		name: "Morale",
		description: "Adds +1 to all units in the row (excluding itself). ",
		placed: async card => await card.animate("morale")
	},
	bond: {
		name: "Tight Bond",
		description: "Place next to a card with the same name to double the strength of both cards. ",
		placed: async card => {
			let bonds = board.getRow(card, card.row, card.holder).findCards(c => c.name === card.name);
			if (bonds.length > 1)
				await Promise.all( bonds.map(c => c.animate("bond")) );
		}
	},
	avenger: {
		name: "Avenger",
		description: "When this card is removed from the battlefield, it summons a powerful new Unit Card to take its place. ",
		removed: async (card) => {
			let bdf = new Card(card_dict[21], card.holder);
			await board.addCardToRow(bdf, "close", card.holder);
		}
	},
	avenger_kambi: {
		name: "Avenger",
		description: "When this card is removed from the battlefield, it summons a powerful new Unit Card to take its place. ",
		removed: async card => await console.log("TODO")
		//TODO
	},
	foltest_king: {
		description: "Pick an Impenetrable Fog card from your deck and play it instantly.",
		activated: async card => {
			let out = card.holder.deck.findCard(c => c.name === "Impenetrable Fog");
			if (out)
				await out.autoplay(card.holder.deck);
		}
	},
	foltest_lord: {
		description: "Clear any weather effects (resulting from Biting Frost, Torrential Rain or Impenetrable Fog cards) in play.",
		activated: async () => await weather.clearWeather()
	},
	foltest_siegemaster: {
		description: "Doubles the strength of all your Siege units (unless a Commander's Horn is also present on that row).",
		activated: async card => await board.getRow(card, "siege", card.holder).leaderHorn()
	},
	foltest_steelforged: {
		description: "Destroy your enemy's strongest Siege unit(s) if the combined strength of all his or her Siege units is 10 or more.",
		activated: async card => await ability_dict["scorch_s"].placed(card)
	},
	foltest_son: {
		description: "Destroy your enemy's strongest Ranged Combat unit(s) if the combined strength of all his or her Ranged Combat units is 10 or more.",
		activated: async card => await ability_dict["scorch_r"].placed(card)
	},
	emhyr_imperial: {
		description: "Pick a Torrential Rain card from your deck and play it instantly.",
		activated: async card => {
			let out = card.holder.deck.findCard(c => c.name === "Torrential Rain");
			if (out)
				await out.autoplay(card.holder.deck);
		}
	},
	emhyr_emperor: {
		description: "Look at 3 random cards from your opponent's hand.",
		activated: async card => {
			if (card.holder.controller instanceof ControllerAI)
				return;
			let container = new CardContainer();
			container.cards = card.holder.opponent().hand.findCardsRandom(() => true, 3);
			Carousel.curr.cancel();
			await ui.viewCardsInContainer(container);
		}
	},
	emhyr_whiteflame: {
		description: "Cancel your opponent's Leader Ability."
	},
	emhyr_relentless: {
		description: "Draw a card from your opponent's discard pile.",
		activated: async card => {
			let grave = board.getRow(card, "grave", card.holder.opponent());
			if (grave.findCards(c => c.isUnit()).length === 0)
				return;
			if (card.holder.controller instanceof ControllerAI) {
				let newCard = card.holder.controller.medic(card, grave);
				newCard.holder = card.holder;
				await board.toHand(newCard, grave);
				return;
			}
			Carousel.curr.cancel();
			await ui.queueCarousel(grave, 1, (c,i) => {
				let newCard = c.cards[i];
				newCard.holder = card.holder;
				board.toHand(newCard, grave);
			}, c => c.isUnit(), true);
		}
	},
	emhyr_invader: {
		description: "Abilities that restore a unit to the battlefield restore a randomly-chosen unit. Affects both players.",
		gameStart: () => game.randomRespawn = true
	},
	eredin_commander: {
		description: "Double the strength of all your Close Combat units (unless a Commander's horn is 	also present on that row).",
		activated: async card => await board.getRow(card, "close", card.holder).leaderHorn()
	},
	eredin_bringer_of_death: {
		name: "Eredin : Bringer of Death",
		description: "Restore a card from your discard pile to your hand.",
		activated: async card => {
			let newCard;
			if (card.holder.controller instanceof ControllerAI) {
				newCard = card.holder.controller.medic(card, card.holder.grave)
			} else {
				Carousel.curr.exit();
				await ui.queueCarousel(card.holder.grave, 1, (c,i) => newCard = c.cards[i], c => c.isUnit(), false, false);
			}
			if (newCard)
				await board.toHand(newCard, card.holder.grave);
		}
	},
	eredin_destroyer: {
		description: "Discard 2 card and draw 1 card of your choice from your deck.",
		activated: async card => {
			let hand = board.getRow(card, "hand", card.holder);
			let deck = board.getRow(card, "deck", card.holder);
			if (card.holder.controller instanceof ControllerAI) {
				//card.holder.controller.discard();
				//card.holder.controller.redraw();	//TODO
				//return;
			} else
				Carousel.curr.exit();
			await ui.queueCarousel(hand, 2, (c,i) => board.toGrave(c.cards[i], c), () => true);
			await ui.queueCarousel(deck, 1, (c,i) => board.toHand(c.cards[i], deck), () => true, true);
		}
	},
	eredin_king: {
		description: "Pick any weather card from your deck and play it instantly.",
		activated: async card => {
			let deck = board.getRow(card, "deck", card.holder);
			if (card.holder.controller instanceof ControllerAI) {  //TODO
//				//play card with largest weight
				
			} else
				Carousel.curr.cancel();
			await ui.queueCarousel(deck, 1, (c,i) => board.toWeather(c.cards[i], deck), c => c.faction === "weather", true);
		}
	},
	eredin_treacherous: {
		description: "Doubles the strength of all spy cards (affects both players).",
		gameStart: () => game.doubleSpyPower = true
	},
	francesca_queen: {
		description: "Destroy your enemy's strongest Close Combat unit(s) if the combined strength of all his or her Close Combat units is 10 or more.",
		activated: async card => await ability_dict["scorch_c"].placed(card)
	},
	francesca_beautiful: {
		description: "Doubles the strength of all your Ranged Combat units (unless a Commander's Horn is also present on that row).",
		activated: async card => await board.getRow(card, "ranged", card.holder).leaderHorn()
	},
	francesca_daisy: {
		description: "Draw an extra card at the beginning of the battle.",
		placed: card => game.gameStart.push( () => {
			let draw = card.holder.deck.removeCard(0);
			card.holder.hand.addCard( draw );
			return true;
		})
	},
	francesca_pureblood: {
		description: "Pick a Biting Frost card from your deck and play it instantly.",
		activated: async card => {
			let out = card.holder.deck.findCard(c => c.name === "Biting Frost");
			if (out)
				await out.autoplay(card.holder.deck);
		}
	},
	francesca_hope: {
		description: "Move agile units to whichever valid row maximizes their strength (don't move units already in optimal row).",
		activated: async card => {
			let close = board.getRow(card, "close");
			let ranged =  board.getRow(card, "ranged");
			let cards = validCards(close).concat( validCards(ranged) );
			await Promise.all(cards.map(async p => await board.moveTo(p.card, p.row === close ? ranged : close, p.row) ) );
			
			function validCards(cont) {
				return cont.findCards(c => c.row === "agile").filter(c => shouldMove(c,cont)).map(c => ({card:c, row:cont}))
			}
			
			function shouldMove(card, source) {
				return card.power < (source === close ? ranged : close).calcCardScore(card);
			}
		}
	},
	crach_an_craite: {
		description: "Shuffle all cards from each player's graveyard back into their decks.",
		activated: async card => {
			Promise.all(card.holder.grave.map(c => board.toDeck(c, card.holder.grave)));
			await Promise.all(card.holder.opponent().grave.map(c => board.toDeck(c, card.holder.opponent().grave)));
		}
	},
	king_bran: {
		description: "Units only lose half their Strength in bad weather conditions.",
		placed: card => board.row.filter((c,i) => card.holder === player_me ^ i<3).forEach(r => r.halfWeather = true)
	}
};

let factions = {
	realms: {
		name: "Northern Realms",
		factionAbility: player => game.roundStart.push( async () => {
			if (game.roundCount > 1 && game.roundHistory[game.roundCount-2].winner === player) {
				player.deck.draw(player.hand);
				await ui.notification("north", 1200);
			}
			return false;
		}),
		description: "Draw a card from your deck whenever you win a round."
	},
	nilfgaard: {
		name: "Nilfgaardian Empire",
		description: "Wins any round that ends in a draw."
	},
	monsters: {
		name: "Monsters",
		factionAbility: player => game.roundEnd.push( () => {
			let units = board.row.filter( (r,i) => player === player_me ^ i < 3)
				.reduce((a,r) => r.cards.filter(c => c.isUnit()).concat(a), []);
			if (units.length === 0)
				return;
			let card = units[randomInt(units.length)];
			card.noRemove = true;
			game.roundStart.push( async () => {
				await ui.notification("monsters", 1200);
				delete card.noRemove;
				return true; 
			});
			return false;
		}),
		description: "Keeps a random Unit Card out after each round."
	},
	scoiatael: {
		name: "Scoia'tael",
		factionAbility: player => game.gameStart.push( async () => {
			let notif = "";
			if (player === player_me) {
				await ui.popup("Go First", () => game.firstPlayer = player, "Let Opponent Start", () => game.firstPlayer = player.opponent(), "Would you like to go first?", "The Scoia'tael faction perk allows you to decide who will get to go first.");
				notif = game.firstPlayer.tag + "-first";
			} else if (player.hand instanceof HandAI) {
				if (Math.random() < 0.5) {
					game.firstPlayer = player;
					notif = "scoiatael";
				} else {
					game.firstPlayer = player.opponent();
					notif = game.firstPlayer.tag + "-first";
				}
			} else {
				//sleepUntil(game.firstPlayer); //TODO online
			}
			await ui.notification(notif,1200);
			return true;
		}),
		description: "Decides who takes first turn."
/*	},
	skellige: {
		name: "Skellige",
		factionAbility: player => game.roundStart.push( async () => {
			if (game.round != 3)
				return true;
			await ui.notification("skellige-" + player.tag, 1200);
			await Promise.all(player.grave.findCardsRandom(c => c.isUnit(), 2).map(c => board.toRow(c, player.grave)));
			return false;
		}),
		description: "2 random cards from the graveyard are placed on the battlefield at the start of the third round."
	*/
	}
}

//let premade_deck = [
	//'{"faction":"realms","leader":24,"cards":[[5,1],[1,3],[2,1],[3,1],[8,1],[33,1],[34,1],[39,1],[51,1],[29,2],[12,1],[14,1],[15,1],[27,1],[17,1],[45,1],[54,1],[55,1],[30,3],[32,1],[41,1],[28,3],[19,3],[47,1],[6,1],[18,1],[49,1],[0,1]]}', '{"faction":"nilfgaard","leader":59,"cards":[[1,3],[2,1],[3,1],[8,1],[63,1],[64,1],[70,1],[73,1],[75,1],[84,1],[81,1],[14,1],[15,1],[17,1],[90,1],[91,1],[19,3],[88,1],[71,4],[6,1],[18,1],[67,1],[68,1],[0,1],[83,1]]}', '{"faction":"monsters","leader":93,"cards":[[5,1],[1,3],[10,1],[9,1],[11,1],[3,1],[8,1],[124,1],[125,1],[138,1],[14,1],[15,1],[101,1],[105,1],[106,1],[107,1],[17,1],[135,1],[98,1],[99,1],[100,1],[102,1],[19,3],[131,1],[132,1],[133,1],[134,1],[6,1],[18,1],[127,1],[128,1],[129,1],[0,1]]}', '{"faction":"scoiatael","leader":141,"cards":[[5,1],[1,3],[2,1],[3,1],[8,1],[167,1],[173,1],[14,1],[15,1],[148,1],[149,1],[17,1],[162,1],[163,1],[164,1],[19,3],[151,1],[152,1],[153,1],[18,1],[159,1],[160,1],[0,1]]}','{"faction":"monsters","leader":94,"cards":[[10,3],[4,1],[125,1],[14,1],[15,1],[101,1],[105,1],[106,1],[107,1],[17,1],[135,1],[98,1],[99,1],[100,1],[19,3],[131,1],[132,1],[133,1],[134,1],[0,1]]}'
//];

let premade_deck = [
	'{"faction":"realms","leader":24,"cards":[[5,1],[1,3],[2,1],[3,1],[8,1],[33,1],[34,1],[39,1],[51,1],[29,2],[12,1],[14,1],[15,1],[27,1],[17,1],[45,1],[54,1],[55,1],[30,3],[32,1],[41,1],[28,3],[19,3],[47,1],[6,1],[18,1],[49,1],[0,1]]}','{"faction":"realms","leader":24,"cards":[[5,1],[1,3],[2,1],[4,1],[9,1],[11,1],[3,1],[8,1],[33,1],[34,1],[39,1],[51,1],[29,2],[12,1],[14,1],[15,1],[27,1],[17,1],[45,1],[54,1],[55,1],[30,3],[32,1],[41,1],[28,3],[19,3],[47,1],[6,1],[18,1],[49,1],[0,1]]}','{"faction":"nilfgaard","leader":59,"cards":[[5,1],[1,3],[10,1],[2,1],[4,1],[9,1],[11,1],[3,1],[8,1],[63,1],[64,1],[70,1],[73,1],[75,1],[84,1],[81,1],[14,1],[15,1],[17,1],[90,1],[91,1],[19,3],[88,1],[71,4],[6,1],[18,1],[67,1],[68,1],[0,1],[83,1]]}','{"faction":"monsters","leader":93,"cards":[[5,1],[1,3],[10,1],[4,1],[9,1],[11,1],[3,1],[8,1],[124,1],[125,1],[138,1],[14,1],[15,1],[101,1],[105,1],[106,1],[107,1],[17,1],[135,1],[98,1],[99,1],[100,1],[102,1],[19,3],[131,1],[132,1],[133,1],[134,1],[6,1],[18,1],[127,1],[128,1],[129,1],[0,1]]}','{"faction":"monsters","leader":94,"cards":[[5,1],[1,1],[10,3],[4,1],[9,1],[11,1],[3,1],[8,1],[125,1],[14,1],[15,1],[101,1],[105,1],[106,1],[107,1],[17,1],[135,1],[98,1],[99,1],[100,1],[19,3],[131,1],[132,1],[133,1],[134,1],[0,1]]}','{"faction":"scoiatael","leader":141,"cards":[[5,1],[1,3],[10,1],[2,1],[4,1],[9,1],[11,1],[3,1],[8,1],[167,1],[173,1],[14,1],[15,1],[148,1],[149,1],[17,1],[162,1],[163,1],[164,1],[19,3],[151,1],[152,1],[153,1],[18,1],[159,1],[160,1],[0,1]]}'
];

/*
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

var data = 
readTextFile("cards.json", function(text) {
	data = JSON.parse(text);
	
});
*/
class Controller {
	
}

class ControllerAI {
	constructor(player) {
		this.player = player;
	}
	
	// Collects data and weighs options before taking a weighted random action
	async startTurn(player){
		if (player.opponent().passed && (player.winning || 
				player.deck.faction === "nilfgaard" && player.total === player.opponent().total) ){
			await player.passRound();
			return;
		}
		let data_max = this.getMaximums();
		let data_board = this.getBoardData();
		let weights = player.hand.cards.map(c => 
			({weight: this.weightCard(c, data_max, data_board), action: async () => await this.playCard(c, data_max, data_board)}) );
		if (player.leaderAvailable)
			weights.push( {weight: this.weightLeader(player.leader), action: async () => await player.activateLeader()} );
		weights.push( {weight: this.weightPass(), action: async () => await player.passRound()} );
		let weightTotal = weights.reduce( (a,c) => a + c.weight, 0);
		if (weightTotal === 0)
			await player.passRound();
		else {
			let rand = randomInt(weightTotal);
			for (var i=0; i < weights.length; ++i) {
				rand -= weights[i].weight;
				if (rand < 0)
					break;
			}
			await weights[i].action();
		}
	}
	
	// Collects data about card with the hightest power on the board
	getMaximums(){
		let rmax = board.row.map(r =>  ({row: r, cards: r.cards.filter(c => c.isUnit()).reduce( (a,c) => 
			(!a.length|| a[0].power < c.power) ? [c] : a[0].power === c.power ? a.concat([c]) : a
		, []) }) );
		
		let max = rmax.filter((r,i) => r.cards.length && i < 3).reduce((a,r) => Math.max(a, r.cards[0].power), 0);
		let max_me = rmax.filter((r,i) => i < 3 && r.cards.length && r.cards[0].power === max).reduce((a,r) => 
			a.concat(r.cards.map(c => ({row:r, card:c})))
		, []);
		
		max = rmax.filter((r,i) => r.cards.length && i > 2).reduce((a,r) => Math.max(a, r.cards[0].power), 0);
		let max_op = rmax.filter((r,i) => i > 2 && r.cards.length && r.cards[0].power === max).reduce((a,r) => 
			a.concat(r.cards.map(c => ({row:r, card:c})))
		, []);
		
		return {rmax: rmax, me: max_me, op: max_op};
	}
	
	// Collects data about the types of cards on the board and in each player's graves
	getBoardData(){
		let data = this.countCards(new CardContainer());
		Object.keys([0,1,2]).map(i => board.row[i]).forEach(r => this.countCards(r, data));
		data.grave_me = this.countCards(this.player.grave);
		data.grave_op = this.countCards(this.player.opponent().grave);
		return data;
	}
	
	// Catalogs the kinds of cards in a given CardContainer
	countCards(container, data){
		data = data ? data : {spy: [], medic: [], bond: {}, scorch: []};
		container.cards.filter(c => c.isUnit()).forEach(c => {
			for (let x of c.abilities) {
				switch (x) {
					case "spy":
					case "medic":
						data[x].push(c);
						break;
					case "scorch_r": case "scorch_c": case "scorch_s":
						data["scorch"].push(c);
						break;
					case "bond":
						if (!data.bond[c.name])
							data.bond[c.name] = 0;
						data.bond[c.name]++;
				}
			}
		});
		return data;
	}
	
	redraw() {  //TODO
		
	}
	
	discard() { //TODO
		
	}
	
	// Tells the Player that this object controls to play a card
	async playCard(c, max, data){
		if (c.name === "Commander's Horn")
			await this.horn(c);
		else if (c.name === "Mardroeme")
			await this.mardroeme(c);
		else if (c.name === "Decoy")
			await this.decoy(c, max, data);
		else if (c.name === "Scorch")
			await this.scorch(c, max, data);
		else
			await this.player.playCard(c);
	}
	
	// Plays a Commander's Horn to the most beneficial row. Assumes at least one viable row.
	async horn(card){
		let rows = [0,1,2].map(i => board.row[i]).filter(r => r.special === null);
		let max_row;
		let max = 0;
		for (let i=0; i<rows.length; ++i) {
			let r = rows[i];
			let dif = [0, 0];
			this.calcRowPower(r, dif, true);
			r.effects.horn++;
			this.calcRowPower(r, dif, false);
			r.effects.horn--;
			let score = dif[1] - dif[0];
			if (max < score){
				max = score;
				max_row = r;
			}
		}
		await this.player.playCardToRow(card, max_row);
	}
	
	// Plays a Mardroeme to the most beneficial row. Assumes at least one viable row.
	async mardroeme(card){ // TODO skellige
		console.log("TODO mardroeme");
	}
	
	// Selects a card to remove from a Grave. Assumes at least one valid card.
	medic(card, grave){
		let data = this.countCards(grave);
		let targ;
		if (data.spy.length){
			let min = data.spy.reduce( (a,c) => Math.min(a, c.power), Number.MAX_VALUE);
			targ = data.spy.filter(c => c.power === min)[0];
		} else if (data.medic.length) {
			let max = data.medic.reduce( (a,c) => Math.max(a, c.power), Number.MIN_VALUE);
			targ = data.medic.filter(c => c.power === max)[0];
		} else if (data.scorch.length) {
			targ = data.scorch[randomInt(data.scorch.length)];
		} else {
			let units = grave.findCards(c => c.isUnit())
			targ = units.reduce( (a,c) => a < c.power ? c : a, units[0] );
		}
		return targ;
	}
	
	// Selects a card to return to the Hand and replaces it with a Decoy. Assumes at least one valid card.
	async decoy(card, max, data) {
		let targ, row;
		if (data.spy.length){
			let min = data.spy.reduce( (a,c) => Math.min(a, c.power), Number.MAX_VALUE);
			targ = data.spy.filter(c => c.power === min)[0];
		} else if (data.medic.length) {
			targ = data.medic[randomInt(data.medic.length)];
		} else if (data.scorch.length) {
			targ = data.scorch[randomInt(data.scorch.length)];
		} else {
			let pairs = max.rmax.filter((r,i) => i<3 && r.cards.length).reduce((a,r) => 
				r.cards.map(c => ({r:r.row, c:c})).concat(a)
			, []);
			let pair = pairs[randomInt(pairs.length)];
			targ = pair.c;
			row = pair.r;
		}
		
		for (let i = 0; !row ; ++i){
			if (board.row[i].cards.indexOf(targ) !== -1){
				row = board.row[i];
				break;
			}
		}
		
		setTimeout(() => board.toHand(targ, row), 1000);
		await this.player.playCardToRow(card, row);
	}
	
	// Tells the controlled Player to play the Scorch card
	async scorch(card, max, data){
		await this.player.playScorch(card);
	}
	
	// Assigns a weight for how likely the conroller is to Pass the round
	weightPass(){
		if (this.player.health === 1)
			return 0;
		let dif = this.player.opponent().total - this.player.total;
		if (dif > 30)
			return 100;
		if (dif < -30 && this.player.opponent().handsize - this.player.handsize > 2)
			return 100;
		return Math.floor(Math.abs(dif));
	}
	
	// Assigns a weight for how likely the controller is to activate its leader ability
	weightLeader(card) {
		return 10 + (game.roundCount-1) * 15;
	}
	
	// Assigns a weights for how likely the controller with play a card from its hand
	weightCard(card, max, data){
		if (card.name === "Scorch") {
			let power_op = max.op.length ? max.op[0].card.power : 0;
			let power_me = max.me.length ? max.me[0].card.power : 0;
			let total_op = power_op * max.op.length;
			let total_me = power_me * max.me.length;
			return power_me > power_op ? 0 : power_me < power_op ? total_op : Math.max(0, total_op - total_me);
		}
		if (card.name === "Decoy") {
			return data.spy.length ? 50 : data.medic.length ? 15 : data.scorch.length  ? 10 : max.me.length ? 1 : 0;
		}
		if (card.isSpecial){
			let rows = [0,1,2].map(i => board.row[i]).filter(r => r.special === null);
			if (!rows.length)
				return 0;
			if (card.name === "Commander's Horn"){
				let dif = [0,0];
				rows = rows.map(r => {let dif = [0,0]; this.calcRowPower(r, dif, true); return dif[0]})
				return Math.max(...rows)/2;
			}
			if (card.name === "Mardroeme") {
				if (!rows.length) return 0;
			}
		}
		if (card.row === "weather") {
			let rows;
			if (card.name === "Clear Weather")
				rows = Object.values(weather.types).filter(t => t.count > 0).flatMap(t => t.rows);
			else
				rows = Object.values(weather.types).filter(t => t.count === 0 && t.name === card.abilities[0]).flatMap(t => t.rows);
			if (!rows.length)
				return 1;
			let dif = [0,0];
			rows.forEach( r => {
				let state = r.effects.weather;
				this.calcRowPower(r, dif, true);
				r.effects.weather = !state;
				this.calcRowPower(r, dif, false);
				r.effects.weather = state;
			});
			return Math.max(0, dif[1] - dif[0]);
		}
		
		let row = board.getRow(card, card.row === "agile" ? "close" : card.row, this.player);
		let score = row.calcCardScore(card);
		switch(card.abilities[0]) {
			case "bond": 
			case "morale":
			case "horn":
				let dif = [0,0];
				this.calcRowPower(row, dif, true);
				row.updateState(card, true);
				this.calcRowPower(row, dif, false);
				dif[0] -= row.calcCardScore(card);
				row.updateState(card, false);
				score = Math.max(0, dif[1] - dif[0]);
				break;
			case "medic": 
				let units = this.player.grave.findCards(c => c.isUnit());
				let grave = data.grave_me;
				score = !units.length ? Math.min(1,score) : score + (grave.spy.length ? 50 : grave.medic.length ? 15 : grave.scorch.length  ? 10 : 0)
				break;
			case "spy": score = 15 + score; break;
			case "muster": score *= 3; break;
		}
		
		return score;
	}
	
	// Calculates the current power of a row associated with each Player
	calcRowPower(r, dif, add){
		r.findCards(c => c.isUnit()).forEach(c => {
			let p = r.calcCardScore(c); 
			c.holder === this.player ? (dif[0]+= add ? p : -p) : (dif[1]+= add ? p : -p);
		});
	}
}

// Can make actions during turns like playing cards that it owns
class Player {
	constructor(id, name, deck) {
		this.id = id;
		this.tag = (id === 0) ? "me" : "op";
		this.controller = (id === 0) ? new Controller() : new ControllerAI(this);
		
		this.hand = (id === 0) ? new Hand(document.getElementById("hand-row")) : new HandAI();
		this.grave =  new Grave( document.getElementById("grave-" + this.tag));
		this.deck = new Deck(deck.faction, document.getElementById("deck-" + this.tag));
		this.deck_data = deck;
		
		this.leader = new Card(deck.leader, this);
		this.elem_leader = document.getElementById("leader-" + this.tag);
		this.elem_leader.children[0].appendChild( this.leader.elem );
		
		this.reset();
		
		this.name = name;
		document.getElementById("name-" + this.tag).innerHTML = name;
		
		document.getElementById("deck-name-" +this.tag).innerHTML = factions[deck.faction].name;
		document.getElementById("stats-" + this.tag).getElementsByClassName("profile-img")[0].children[0].children[0];
		let x = document.querySelector("#stats-" +this.tag+ " .profile-img > div > div");
		x.style.backgroundImage = iconURL("deck_shield_" + deck.faction);
	}
	
	// Sets default values
	reset(){
		this.grave.reset();
		this.hand.reset();
		this.deck.reset();
		this.deck.initializeFromID(this.deck_data.cards, this);
		
		this.health = 2;
		this.total = 0;
		this.passed = false;
		this.handsize = 10;
		this.winning = false;
	
		this.enableLeader();
		this.setPassed(false);
		document.getElementById("gem1-" +this.tag).classList.add("gem-on");
		document.getElementById("gem2-" +this.tag).classList.add("gem-on");
	}
	
	// Returns the opponent Player
	opponent(){
		return board.opponent(this);
	}
	
	// Updates the player's total score and notifies the gamee
	updateTotal(n){
		this.total += n;
		document.getElementById("score-total-" + this.tag).children[0].innerHTML = this.total;
		board.updateLeader();
	}
	
	// Puts the player in the winning state
	setWinning(isWinning) {
		if (this.winning ^ isWinning)
			document.getElementById("score-total-" + this.tag).classList.toggle("score-leader");
		this.winning = isWinning;
	}
	
	// Puts the player in the passed state
	setPassed(hasPassed) {
		if (this.passed ^ hasPassed)
			document.getElementById("passed-" + this.tag).classList.toggle("passed");
		this.passed = hasPassed;
	}
	
	// Sets up board for turn
	async startTurn(){
		document.getElementById("stats-" + this.tag).classList.add("current-turn");
		if (this.leaderAvailable)
			this.elem_leader.children[1].classList.remove("hide");
		
		if (this === player_me) {
			document.getElementById("pass-button").classList.remove("noclick");
		}
		
		if (this.controller instanceof ControllerAI) {
			await this.controller.startTurn(this);
		}
	}
	
	// Passes the round and ends the turn
	passRound(){
		this.setPassed(true);
		this.endTurn();
	}
	
	// Plays a scorch card
	async playScorch(card){
		await this.playCardAction(card, async () => await ability_dict["scorch"].activated(card));
	}
	
	// Plays a card to a specific row
	async playCardToRow(card, row){
		await this.playCardAction(card, async () => await board.moveTo(card, row, this.hand));
	}
	
	// Plays a card to the board
	async playCard(card){
		await this.playCardAction(card, async () => await card.autoplay(this.hand));
	}
	
	// Shows a preview of the card being played, plays it to the board and ends the turn
	async playCardAction(card, action){
		ui.showPreviewVisuals(card);
		await sleep(1000);
		ui.hidePreview(card);
		await action();
		this.endTurn();
	}
	
	// Handles end of turn visuals and behavior the notifies the game
	endTurn(){
		if (!this.passed && !this.canPlay())
			this.setPassed(true);
		if (this === player_me){
			document.getElementById("pass-button").classList.add("noclick");
		}
		document.getElementById("stats-" + this.tag).classList.remove("current-turn");
		this.elem_leader.children[1].classList.add("hide");
		game.endTurn()
	}
	
	// Tells the the Player if it won the round. May damage health.
	endRound(win){
		if (!win) {
			if (this.health < 1)
				return;
			document.getElementById("gem" + this.health + "-" +this.tag).classList.remove("gem-on");
			this.health--;
		}
		this.setPassed(false);
		this.setWinning(false);
	}
	
	// Returns true if the Player can make any action other than passing
	canPlay() {
		return this.hand.cards.length > 0 || this.leaderAvailable;
	}
	
	// Use a leader's Activate ability, then disable the leader
	async activateLeader() {
		ui.showPreviewVisuals(this.leader);
		await sleep(1500);
		ui.hidePreview(this.leader);
		await this.leader.activated[0](this.leader, this);
		this.disableLeader();
		this.endTurn();
	}
	
	// Disable access to leader ability and toggles leader visuals to off state
	disableLeader(){
		this.leaderAvailable = false;
		let elem = this.elem_leader.cloneNode(true);
		this.elem_leader.parentNode.replaceChild(elem, this.elem_leader);
		this.elem_leader = elem;
		this.elem_leader.children[0].classList.add("fade");
		this.elem_leader.children[1].classList.add("hide");
		this.elem_leader.addEventListener("click", async () => await ui.viewCard(this.leader), false);
	}
	
	// Enable access to leader ability and toggles leader visuals to on state
	enableLeader() {
		this.leaderAvailable = this.leader.activated.length > 0;
		let elem = this.elem_leader.cloneNode(true);
		this.elem_leader.parentNode.replaceChild(elem, this.elem_leader);
		this.elem_leader = elem;
		this.elem_leader.children[0].classList.remove("fade");
		this.elem_leader.children[1].classList.remove("hide");
		
		if (this.id === 0 && this.leader.activated.length > 0){
			this.elem_leader.addEventListener("click", 
				async () => await ui.viewCard(this.leader, async () => await this.activateLeader()),
				false);
		} else {
			this.elem_leader.addEventListener("click", async () => await ui.viewCard(this.leader), false);
		}
		
		// TODO set crown color
	}
	
}

// Handles the adding, removing and formatting of cards in a container
class CardContainer {
	constructor(elem) {
		this.elem = elem;
		this.cards = [];
	}
	
	// Returns the first card that satisfies the predcicate. Does not modify container.
	findCard(predicate){
		for (let i=this.cards.length-1; i>=0; --i)
			if (predicate(this.cards[i]))
				return this.cards[i];
	}
	
	// Returns a list of cards that satisfy the predicate. Does not modify container.
	findCards(predicate){
		return this.cards.filter(predicate);
	}
	
	// Returns a list of up to n cards that satisfy the predicate. Does not modify container.
	findCardsRandom(predicate, n){
		let valid = predicate ? this.cards.filter(predicate) : this.cards;
		if (valid.length === 0)
			return [];
		if (!n || n === 1)
			return valid[randomInt(valid.length)];
		let out = [];
		for (let i=Math.min(n, valid.length); i>0 ; --i){
			let index = randomInt(valid.length);
			out.push( valid.splice(index,1)[0] );
		}
		return out;
	}
	
	// Removes and returns a list of cards that satisy the predicate.
	getCards(predicate){
		return this.cards.reduce((a,c,i) => ( predicate(c,i)?[i]:[] ).concat(a), []).map( i => this.removeCard(i));
	}
	
	// Removes and returns a card that satisfies the predicate.
	getCard(predicate) {
		for (let i=this.cards.length-1; i>=0; --i)
			if (predicate(this.cards[i]))
				return this.removeCard(i);
	}
	
	// Removes and returns any cards up to n that satisfy the predicate.
	getCardsRandom(predicate, n) {
		return this.findCardsRandom(predicate, n).forEach( c => this.removeCard(c) );
	}
	
	// Adds a card to the container along with its associated HTML element.
	addCard(card, index){
		this.cards.push(card);
		this.addCardElement(card, index?index:0);
		this.resize();
	}
	
	// Removes a card from the container along with its associated HTML element.
	removeCard(card, index){
		if (this.cards.length === 0)
			throw "Cannot draw from empty " + this.constructor.name;
		card = this.cards.splice( isNumber(card)? card : this.cards.indexOf(card) , 1)[0];
		this.removeCardElement(card, index?index:0);
		this.resize();
		return card;
	}
	
	// Adds a card to a pre-sorted CardContainer
	addCardSorted(card){
		let i = this.getSortedIndex(card);
		this.cards.splice(i, 0, card);
		return i;
	}
	
	// Returns the expected index of a card in a sorted CardContainer
	getSortedIndex(card){
		for (var i=0; i<this.cards.length; ++i)
			if (Card.compare(card, this.cards[i]) < 0)
				break;
		return i;
	}
	
	// Adds a card to a random index of the CardContainer
	addCardRandom(card){
		this.cards.push(card);
		let index = randomInt(this.cards.length);
		if (index !== this.cards.length-1) {
			let t = this.cards[this.cards.length-1];
			this.cards[this.cards.length-1] = this.cards[index];
			this.cards[index] = t;
		}
		return index;
	}
	
	// Removes the HTML elemenet associated with the card from this CardContainer
	removeCardElement(card, index){
		if (this.elem)
			this.elem.removeChild(card.elem);
	}
	
	// Adds the HTML elemenet associated with the card to this CardContainer
	addCardElement(card, index){
		if (this.elem){
			if (index === this.cards.length)
				thise.elem.appendChild(card.elem);
			else
				this.elem.insertBefore(card.elem, this.elem.children[index]);
		}
	}
	
	// Empty function to be overried by subclasses that resize their content
	resize(){}
	
	// Modifies the margin of card elements inside a row-like container to stack properly
	resizeCardContainer(overlap_count, gap, coef) {
		let n = this.elem.children.length;
		let param = (n < overlap_count) ?  "" + gap+"vw" : defineCardRowMargin(n, coef);
		let children = this.elem.getElementsByClassName("card");
		for (let x of children)
			x.style.marginLeft = x.style.marginRight = param;
		
		function defineCardRowMargin(n, coef = 0){
			return "calc((100% - (4.45vw * " + n + ")) / (2*" +n+ ") - (" +coef+ "vw * " +n+ "))";
		}
	}
	
	// Allows the row to be clicked
	setSelectable(){
		this.elem.classList.add("row-selectable");
	}
	
	// Disallows teh row to be clicked
	clearSelectable() {
		this.elem.classList.remove("row-selectable");
		for (card in this.cards)
			card.elem.classList.add("noclick");
	}
	
	// Returns the container to its default, empty state
	reset() {
		while(this.cards.length)
			this.removeCard(0);
		if (this.elem)
			while(this.elem.firstChild)
				this.elem.removeChild(this.elem.firstChild);
		this.cards = [];
	}
	
}

// Contians all used cards in the order that they were discarded
class Grave extends CardContainer {
	constructor(elem) {
		super(elem)
		elem.addEventListener("click", () => ui.viewCardsInContainer(this), false);
	}
	
	// Override
	addCard(card){
		this.setCardOffset(card, this.cards.length);
		super.addCard(card, this.cards.length);
	}
	
	// Override
	removeCard(card){
		let n = isNumber(card) ? card : this.cards.indexOf(card);
		return super.removeCard(card, n);
	}
	
	// Override
	removeCardElement(card, index){
		card.elem.style.left = "";
		super.removeCardElement(card, index);
		for (let i=index; i<this.cards.length; ++i)
			this.setCardOffset(this.cards[i], i);
	}
	
	// Offsets the card element in the deck
	setCardOffset(card, n){
		card.elem.style.left =  -0.03 * n +"vw";
	}
}

// Contains a randomized set of cards to be drawn from
class Deck extends CardContainer {
	constructor(faction, elem){
		super(elem);
		this.faction = faction;

		this.counter = document.createElement("div");
		this.counter.classList = "deck-counter center";
		this.counter.appendChild( document.createTextNode(this.cards.length) );
		this.elem.appendChild(this.counter);
	}
	
	// Creates duplicates of cards with a count of more than one, then initializes deck
	initializeFromID(card_id_list, player){
		this.initialize( card_id_list.reduce((a,c) => a.concat(clone(c.count, card_dict[c.index])), []), player);
		function clone(n ,elem) { for (var  i=0, a=[]; i<n; ++i) a.push(elem); return a; }
	}
	
	// Populates a this deck with a list of card data and associated those cards with the owner of this deck.
	initialize(card_data_list, player){
		//console.log(card_data_list);
		for (let i=0; i<card_data_list.length; ++i) {
			let card = new Card(card_data_list[i], player);
			card.holder = player;
			this.addCardRandom(card);
			this.addCardElement();
		}
		this.resize();
	}
	
	// Override
	addCard(card){
		this.addCardRandom(card);
		this.addCardElement();
		this.resize();
	}
	
	// Sends the top card to the passed hand
	async draw(hand){
		if (hand === player_op.hand)
			hand.addCard(this.removeCard(0));
		else
			await board.toHand(this.cards[0], this);
	}
	
	// Draws a card and sends it to the container before adding a card from the container back to the deck.
	swap(container, card){
		container.addCard(this.removeCard(0));
		this.addCard(card);
	}
	
	// Override
	addCardElement() {
		let elem = document.createElement("div");
		elem.classList.add("deck-card");
		elem.style.backgroundImage = iconURL("deck_back_" + this.faction, "jpg");
		this.setCardOffset(elem, this.cards.length-1);
		this.elem.insertBefore(elem, this.counter);
	}
	
	// Override
	removeCardElement(){
		this.elem.removeChild(this.elem.children[this.cards.length]).style.left = "";
	}
	
	// Offsets the card element in the deck
	setCardOffset(elem, n){
		elem.style.left =  -0.03 * n +"vw";
	}
	
	// Override
	resize(){
		this.counter.innerHTML = this.cards.length;
		this.setCardOffset(this.counter, this.cards.length);
	}
	
	// Override
	reset() {
		super.reset();
		this.elem.appendChild(this.counter);
	}
}

// Hand used by computer AI. Has an offscreen HTML element for card transitions.
class HandAI extends CardContainer {
	constructor() {
		super(undefined);
		this.counter = document.getElementById("hand-count-op"); 
		this.hidden_elem = document.getElementById("hand-op");
	}
	resize() {this.counter.innerHTML = this.cards.length; }
}

// Hand used by current player
class Hand extends CardContainer {
	constructor(elem){
		super(elem);
		this.counter = document.getElementById("hand-count-me");
	}
	
	// Override
	addCard(card){
		let i = this.addCardSorted(card);
		this.addCardElement(card, i);
		this.resize();
	}
	
	// Override
	resize() {
		this.counter.innerHTML = this.cards.length;
		this.resizeCardContainer(11, 0.075, .00225);
	}
}

// Contains active cards and effects. Calculates the current score of each card and the row.
class Row extends CardContainer {
	constructor(elem) {
		super(elem.getElementsByClassName("row-cards")[0]);
		this.elem_parent = elem;
		this.elem_special = elem.getElementsByClassName("row-special")[0];
		this.special = null;
		this.total = 0;
		this.effects = {weather:false, bond: {}, morale: 0, horn: 0, mardroeme: 0};
		this.elem.addEventListener("click", () => ui.selectRow(this), true);
		this.elem_special.addEventListener("click", () => ui.selectRow(this), false, true);
	}
	
	// Override
	async addCard(card) {
		if (card.isSpecial()) {
			this.special = card;
			this.elem_special.appendChild(card.elem);
		} else {
			let index = this.addCardSorted(card);
			this.addCardElement(card, index);
			this.resize();
		}
		this.updateState(card, true);
		for (let x of card.placed) 
			await x(card);
		card.elem.classList.add("noclick");
		await sleep(600);
		this.updateScore();
	}
	
	// Override
	removeCard(card) {
		card = isNumber(card) ? card === -1 ? this.special : this.cards[card] : card;
		if (card.isSpecial()) {
			this.special = null;
			this.elem_special.removeChild(card.elem);
		} else {
			super.removeCard(card);
			card.resetPower();
		}
		this.updateState(card, false);
		for (let x of card.removed)
			x(card);
		this.updateScore();
		return card;
	}
	
	// Override
	removeCardElement(card, index) {
		super.removeCardElement(card, index);
		let x = card.elem;
		x.style.marginLeft = x.style.marginRight = "";
		x.classList.remove("noclick");
	}
	
	// Updates a card's effect on the row
	updateState(card, activate){
		for (let x of card.abilities){
			switch (x) {
				case "morale":
				case "horn":
				case "mardroeme": this.effects[x]+= activate ? 1 : -1; break;
				case "bond": 
					if (!this.effects.bond[card.id()])
						this.effects.bond[card.id()] = 0;
					this.effects.bond[card.id()] += activate ? 1 : -1;
					break;
			}
		}
	}
	
	// Activates weather effect and visuals
	addOverlay(overlay){
		this.effects.weather = true;
		this.elem_parent.getElementsByClassName("row-weather")[0].classList.add(overlay);
		this.updateScore();
	}
	
	// Deactivates weather effect and visuals
	removeOverlay(overlay){
		this.effects.weather = false;
		this.elem_parent.getElementsByClassName("row-weather")[0].classList.remove(overlay);
		this.updateScore();
	}
	
	// Override
	resize(){
		this.resizeCardContainer(10, 0.075, .00325);
	}
	
	// Updates the row's score by summing the current power of its cards
	updateScore() {
		let total = 0;
		for (let card of this.cards) {
			total += this.cardScore(card);
		}
		let player = this.elem_parent.parentElement.id === "field-op" ? player_op : player_me;
		player.updateTotal(total - this.total);
		this.total = total;
		this.elem_parent.getElementsByClassName("row-score")[0].innerHTML = this.total;
	}
	
	// Calculates and set the card's current power
	cardScore(card){
		let total = this.calcCardScore(card);
		card.setPower(total);
		return total;
	}
	
	// Calculates the current power of a card affected by row affects
	calcCardScore(card) {
		if (card.name === "decoy")
			return 0;
		let total = card.basePower;
		if (card.hero)
			return total;
		if (this.effects.weather) 
			total = Math.min(1, total);
		if (game.doubleSpyPower && card.abilities.includes("spy"))
			total *= 2;
		let bond = this.effects.bond[card.id()];
		if (isNumber(bond) && bond > 1)
			total *= Number(bond);
		total += Math.max(0, this.effects.morale + (card.abilities.includes("morale") ? -1 : 0 ));
		if (this.effects.horn - (card.abilities.includes("horn") ? 1 : 0) >  0 )
			total *= 2;
		return total;
	}
	
	// Applies a temporary leader horn affect that is removed at the end of the round
	async leaderHorn(){
		if (this.special !== null)
			return;
		let horn = new Card(card_dict[5], null);
		await this.addCard(horn);
		game.roundEnd.push( () => this.removeCard(horn) );
	}
	
	// Applies a local scorch effect to this row
	async scorch() {
		if (this.total >= 10)
			await Promise.all( this.maxUnits().map( async c => {
				await c.animate("scorch", true, false);
				await board.toGrave(c, this);
			}));
	}
	
	// Removes all cards and effects from this row
	clear() {
		if (this.special != null)
			board.toGrave(this.special, this);
		this.cards.filter(c => !c.noRemove).forEach(c => board.toGrave(c, this) );
	}

	// Returns all regular unit cards with the heighest power
	maxUnits(){
		let max = [];
		for (let i=0; i<this.cards.length; ++i){
			let card = this.cards[i];
			if (!card.isUnit())
				continue;
			if (!max[0] || max[0].power < card.power)
				max = [card];
			else if (max[0].power === card.power)
				max.push(card);
		}
		return max;
	}
	
	// Override
	reset(){
		super.reset();
		while(this.special)
			this.removeCard(this.special);
		while(this.elem_special.firstChild)
			this.elem_special.removeChild(this.elem_speical.firstChild);
		this.total = 0;
		//["rain","fog","frost"].forEach( w => this.removeOverlay(w) );
		this.effects = {weather:false, bond: {}, morale: 0, horn: 0, mardroeme: 0};
	}
}

// Handles how weather effects are added and removed
class Weather extends CardContainer {
	constructor(elem) {
		super(elem);
		this.types = {
			rain: {name:"rain", count: 0, rows: []},
			fog: {name:"fog", count: 0, rows: []},
			frost: {name:"frost", count: 0, rows: []}
		}
		let i=0;
		for (let key of Object.keys(this.types))
			this.types[key].rows = [board.row[i], board.row[5-i++]];
		
		this.elem.addEventListener("click",() => ui.selectRow(this), false);
	}
	
	// Adds a card if unique and clears all weather if 'clear weather' card added
	async addCard(card) {
		super.addCard(card);
		card.elem.classList.add("noclick");
		if (card.name === "Clear Weather"){
			// TODO Sunlight animation
			await sleep(500);
			this.clearWeather();
		} else {
			this.changeWeather(card, x => ++this.types[x].count === 1, (r,t) => r.addOverlay(t.name));
			for (let i=this.cards.length-2; i>=0; --i) {
				if (card.name === this.cards[i].name) {
					await sleep(750);
					await board.toGrave(card, this);
					break;
				}
			}
		}
		await sleep(750);
	}
	
	// Override
	removeCard(card){
		card = super.removeCard(card);
		card.elem.classList.remove("noclick");
		this.changeWeather(card, x => --this.types[x].count === 0, (r,t) => r.removeOverlay(t.name));
		return card;
	}
	
	// Checks if a card's abilities are a weather type. If the predicate is met, perfom the action
	// on the type's associated rows
	changeWeather(card, predicate, action) {
		for (let x of card.abilities) {
			if (x in this.types && predicate(x)){
				for (let r of this.types[x].rows)
					action(r, this.types[x]);
			}
		}
	}
	
	// Removes all weather effects and cards
	async clearWeather() {
		await Promise.all(this.cards.map((c,i)=>this.cards[this.cards.length-i-1]).map(c => board.toGrave(c, this)));
	}
	
	// Override
	resize() {
		this.resizeCardContainer(4, 0.075, .045);
	}
	
	// Override
	reset(){
		super.reset();
		Object.keys(this.types).map(t => this.types[t].count = 0);
	}
}

// 
class Board {
	constructor() {
		this.op_score = 0;
		this.me_score = 0;
		this.row = [];
		for (let x=0; x<6; ++x) {
			let elem = document.getElementById( (x<3)?"field-op":"field-me" ).children[x%3];
			this.row[x] = new Row(elem);
		}
	}
	
	// Get the opponent of this Player
	opponent(player){
		return player === player_me ? player_op : player_me;
	}
	
	// Sends and translates a card from the source to the Deck of the card's holder
	async toDeck(card, source){
		await this.moveTo(card, "deck", source);
	}
	
	// Sends and translates a card from the source to the Grave of the card's holder
	async toGrave(card, source){
		await this.moveTo(card, "grave", source);
	}

	// Sends and translates a card from the source to the Hand of the card's holder
	async toHand(card, source) {
		await this.moveTo(card, "hand", source);
	}

	// Sends and translates a card from the source to Weather
	async toWeather(card, source) {
		await this.moveTo(card, weather, source);
	}
	
	// Sends and translates a card from the source to the Deck of the card's combat row
	async toRow(card, source) {
		let row = (card.row === "agile") ? "close" : card.row ? card.row : "close";
		await this.moveTo(card, row, source);
	}
	
	// Sends and translates a card from the source to a specified row name or CardContainer
	async moveTo(card, dest, source) {
		if (isString(dest))
			dest = this.getRow(card, dest);
		await translateTo(card, source ? source : null, dest);
		await dest.addCard(source ? source.removeCard(card) : card);
	}
	
	// Sends and translates a card from the source to a row name associated with the passed player
	async addCardToRow(card, row_name, player, source) {
		let row = this.getRow(card, row_name, player);
		await translateTo(card, source, row);
		await row.addCard(card);
	}
	
	// Returns the CardCard associated with the row name that the card would be sent to
	getRow(card, row_name, player){
		player = player ? player : card ? card.holder : player_me;
		let isMe = player === player_me;
		let isSpy = card.abilities.includes("spy");
		switch (row_name) {
			case "weather": return weather; break;
			case "close":  return this.row[ isMe^isSpy ? 3 : 2];
			case "ranged": return this.row[ isMe^isSpy ? 4 : 1];
			case "siege":  return this.row[ isMe^isSpy ? 5 : 0];
			case "grave": return player.grave;
			case "deck": return player.deck;
			case "hand": return player.hand;
			default: console.error( card.name + " sent to incorrect row \"" +row_name+ "\" by " +card.holder.name );
		}
	}
	
	// Updates which player currently is in the lead
	updateLeader() {
		let dif = player_me.total - player_op.total;
		player_me.setWinning(dif > 0);
		player_op.setWinning(dif < 0);
	}
}

class Game {
	constructor() {
		this.endScreen = document.getElementById("end-screen");
		let buttons = this.endScreen.getElementsByTagName("button");
		this.customize_elem = buttons[0];
		this.replay_elem = buttons[1];
		this.customize_elem.addEventListener("click", () => this.returnToCustomization(), false);
		this.replay_elem.addEventListener("click", () => this.restartGame(), false);
		this.reset();
	}
	
	reset() {
		this.firstPlayer;
		this.currPlayer = null;
		
		this.gameStart = [];
		this.roundStart = [];
		this.roundEnd = [];
		this.turnStart = [];
		this.turnEnd = [];
		
		this.roundCount = 0;
		this.roundHistory = [];
		
		this.randomRespawn = false;
		this.doubleSpyPower = false;
		
		weather.reset();
		board.row.forEach(r => r.reset());
	}
	
	// Sets up player faction abilities and psasive leader abilities
	initPlayers(p1, p2){
		let l1 = ability_dict[p1.leader.abilities[0]];
		let l2 = ability_dict[p2.leader.abilities[0]];
		if (l1 === ability_dict["emhyr_whiteflame"] || l2 === ability_dict["emhyr_whiteflame"]){
			p1.disableLeader();
			p2.disableLeader();
		} else {
			initLeader(p1, l1);
			initLeader(p2, l2);
		}
		if (p1.deck.faction === p2.deck.faction && p1.deck.faction === "scoiatael")
			return;
		initFaction(p1);
		initFaction(p2);
		
		function initLeader(player, leader){
			if (leader.placed)
				leader.placed(player.leader);
			Object.keys(leader).filter(key => game[key]).map(key => game[key].push(leader[key]));
		}
		
		function initFaction(player){
			if (factions[player.deck.faction] && factions[player.deck.faction].factionAbility)
				factions[player.deck.faction].factionAbility(player);
		}
	}
	
	// Sets initializes player abilities, player hands and redraw
	async startGame() {
		ui.toggleMusic_elem.classList.remove("music-customization");
		this.initPlayers(player_me, player_op);
		await Promise.all([...Array(10).keys()].map( async () => {
			await player_me.deck.draw(player_me.hand);
			await player_op.deck.draw(player_op.hand);
		}));
		
		await this.runEffects(this.gameStart);
		if (!this.firstPlayer)
			this.firstPlayer = await this.coinToss();
		this.initialRedraw();
	}
	
	// Simulated coin toss to determine who starts game
	async coinToss(){
		this.firstPlayer = (Math.random() < 0.5) ? player_me : player_op;
		await ui.notification(this.firstPlayer.tag + "-coin", 1200);
		return this.firstPlayer;
	}
	
	// Allows the player to swap out up to two cards from their iniitial hand
	async initialRedraw(){
		await ui.queueCarousel(player_me.hand, 2, async (c, i) => await player_me.deck.swap(c, c.removeCard(i)), c => true, true, true, "Choose up to 2 cards to redraw.");
		ui.enablePlayer(false);
		game.startRound();
	}
	
	// Initiates a new round of the game
	async startRound(){
		this.roundCount++;
		this.currPlayer = (this.roundCount%2 === 0) ? this.firstPlayer : this.firstPlayer.opponent();
		await this.runEffects(this.roundStart);
		
		if ( !player_me.canPlay() )
			player_me.setPassed(true);
		if ( !player_op.canPlay() )
			player_op.setPassed(true);
		
		if (player_op.passed && player_me.passed)
			return this.endRound();
		
		if (this.currPlayer.passed)
			this.currPlayer = this.currPlayer.opponent();
		
		await ui.notification("round-start", 1200);
		if (this.currPlayer.opponent().passed)
			await ui.notification(this.currPlayer.tag + "-turn", 1200);
		
		this.startTurn();
	}
	
	// Starts a new turn. Enables client interraction in client's turn.
	async startTurn() {
		await this.runEffects(this.turnStart);
		if (!this.currPlayer.opponent().passed){
			this.currPlayer = this.currPlayer.opponent();
			await ui.notification(this.currPlayer.tag + "-turn", 1200);
		}
		ui.enablePlayer(this.currPlayer === player_me);
		this.currPlayer.startTurn();
	}
	
	// Ends the current turn and may end round. Disables client interraction in client's turn.
	async endTurn() {
		if (this.currPlayer === player_me)
			ui.enablePlayer(false);
		await this.runEffects(this.turnEnd);
		if (this.currPlayer.passed)
			await ui.notification(this.currPlayer.tag + "-pass", 1200);
		if (player_op.passed && player_me.passed)
			this.endRound();
		else
			this.startTurn();
	}
	
	// Ends the round and may end the game. Determines final scores and the round winner.
	async endRound() {
		let dif = player_me.total - player_op.total;
		if (dif === 0) {
			let nilf_me = player_me.deck.faction === "nilfgaard", nilf_op = player_op.deck.faction === "nilfgaard";
			dif = nilf_me ^ nilf_op ? nilf_me ? 1 : -1 : 0;
		}
		let winner = dif > 0 ? player_me : dif < 0 ? player_op : null;
		let verdict = {winner: winner, score_me: player_me.total, score_op: player_op.total}
		this.roundHistory.push(verdict);
		
		await this.runEffects(this.roundEnd);
		
		board.row.forEach( row => row.clear() );
		weather.clearWeather();
		
		player_me.endRound( dif > 0);
		player_op.endRound( dif < 0);
		
		if (dif > 0)
			await ui.notification("win-round", 1200);
		else if (dif < 0)
			await ui.notification("lose-round", 1200);
		else
			await ui.notification("draw-round", 1200);
		
		if (player_me.health === 0 || player_op.health === 0)
			this.endGame();
		else
			this.startRound();
	}
	
	// Sets up and displays the end-game screen
	async endGame() {
		let endScreen = document.getElementById("end-screen");
		let rows = endScreen.getElementsByTagName("tr");
		rows[1].children[0].innerHTML = player_me.name;
		rows[2].children[0].innerHTML = player_op.name;
		
		for (let i=1; i<4; ++i) {
			let round = this.roundHistory[i-1];
			rows[1].children[i].innerHTML = round ? round.score_me : 0;
			rows[1].children[i].style.color = round && round.winner === player_me ? "goldenrod" : "";
			
			rows[2].children[i].innerHTML = round ? round.score_op : 0;
			rows[2].children[i].style.color = round && round.winner === player_op ? "goldenrod" : "";
		}
		
		endScreen.children[0].className = "";
		if (player_op.health <= 0 && player_me.health <= 0) {
			endScreen.getElementsByTagName("p")[0].classList.remove("hide");
			endScreen.children[0].classList.add("end-draw");
		} else if (player_op.health === 0){
			endScreen.children[0].classList.add("end-win");
		} else {
			endScreen.children[0].classList.add("end-lose");
		}
		
		fadeIn(endScreen, 300);
		ui.enablePlayer(true);
	}
	
	// Returns the client to the deck customization screen
	returnToCustomization(){
		this.reset();
		player_me.reset();
		player_op.reset();
		ui.toggleMusic_elem.classList.add("music-customization");
		this.endScreen.classList.add("hide");
		document.getElementById("deck-customization").classList.remove("hide");
	}
	
	// Restarts the last game with the dame decks
	restartGame(){
		this.reset();
		player_me.reset();
		player_op.reset();
		this.endScreen.classList.add("hide");
		this.startGame();
	}
	
	// Executes effects in list. If effect returns true, effect is removed.
	async runEffects(effects){
		for (let i=effects.length-1; i>=0; --i){
			let effect = effects[i];
			if (await effect())
				effects.splice(i,1)
		}
	}
	
}

// Contians information and behavior of a Card
class Card {

	constructor(card_data, player) {
		this.name = card_data.name;
		this.basePower = this.power = Number(card_data.strength);
		this.faction = card_data.deck;
		this.abilities = (card_data.ability === "") ? [] : card_data.ability.split(" ");
		this.row = (card_data.deck === "weather") ? card_data.deck : card_data.row;
		this.filename = card_data.filename;
		this.placed = [];
		this.removed = [];
		this.activated = [];
		this.holder = player;
		
		this.hero = false;
		if (this.abilities.length > 0) {
			if (this.abilities[0] === "hero") {
				this.hero = true;
				this.abilities.splice(0, 1);
			}
			for (let x of this.abilities) {
				let ab = ability_dict[x];
				if ("placed" in ab) this.placed.push(ab.placed);
				if ("removed" in ab) this.removed.push(ab.removed);
				if ("activated" in ab) this.activated.push(ab.activated);
			}
		}
		
		this.elem = this.createCardElem(this);
		
		this.desc_name = this.abilities.length > 0 ? ability_dict[this.abilities[this.abilities.length-1]].name : (this.hero) ? "Hero" : "";
		if (this.row === "leader")
			this.desc_name = "Leader Ability";
		this.desc = "";
		for (let i=this.abilities.length-1; i>=0; --i) {
			this.desc += ability_dict[this.abilities[i]].description;
		}
		if (this.hero)
			this.desc += ability_dict["hero"].description;
	}
	
	// Returns the identifier for this type of card
	id() {
		return this.name;
	}
	
	// Sets and displays the current power of this card
	setPower(n){
		if (this.name === "Decoy")
			return;
		let elem = this.elem.children[0].children[0];
		if (n !== this.power) {
			this.power = n;
			elem.innerHTML = this.power;
		}
		elem.style.color = (n>this.basePower) ? "goldenrod" : (n<this.basePower) ? "red" : "";
	}
	
	// Resets the power of this card to default
	resetPower(){
		this.setPower(this.basePower);
	}
	
	// Automatically sends and translates this card to its apropriate row from the passed source
	async autoplay(source){
		await board.toRow(this, source);
	}
	
	// Animates an ability effect
	async animate(name, bFade = true, bExpand = true) {
		if (name === "scorch") {
			return await this.scorch(name);
		}
		let anim = this.elem.children[3];
		anim.style.backgroundImage = iconURL("anim_" + name);
		await sleep(50);
		
		if (bFade) fadeIn(anim, 300);
		if (bExpand) anim.style.backgroundSize = "100% auto";
		await sleep(300);
		
		if (bExpand) anim.style.backgroundSize = "80% auto";
		await sleep(1000);
		
		if (bFade) fadeOut(anim, 300);
		if (bExpand) anim.style.backgroundSize = "40% auto";
		await sleep(300);
		
		anim.style.backgroundImage = "";
	}
	
	// Animates the scorch effect
	async scorch(name){
		let anim = this.elem.children[3];
		anim.style.backgroundSize = "cover";
		anim.style.backgroundImage = iconURL("anim_" + name);
		await sleep(50);
		
		fadeIn(anim, 300);
		await sleep(1300);
		
		fadeOut(anim, 300);
		await sleep(300);
		
		anim.style.backgroundSize = "";
		anim.style.backgroundImage = "";
	}
	
	// Returns true if this is a combat card that is not a Hero
	isUnit(){
		return !this.hero && (this.row === "close" || this.row === "ranged" || this.row === "siege" || this.row === "agile");
	}
	
	// Returns true if card is sent to a Row's special slot
	isSpecial() {
		return this.name === "Commander's Horn" || this.name === "Mardroeme";
	}

	// Compares by type then power then name
	static compare(a, b){
		var dif = factionRank(a) - factionRank(b);
		if (dif !== 0)
			return dif;
		dif = a.basePower - b.basePower;
		if (dif && dif !== 0)
			return dif;
		return a.name.localeCompare(b.name);
		
		function factionRank(c){ return c.faction === "special" ? -2 : (c.faction === "weather") ? -1 : 0; }
	}
	
	// Creates an HTML element based on the card's properties
	createCardElem(card){
		let elem = document.createElement("div");
		elem.style.backgroundImage = smallURL(card.faction + "_" + card.filename);
		elem.classList.add("card");
		elem.addEventListener("click", () => ui.selectCard(card), false);
		
		if (card.row === "leader")
			return elem;
		
		let power = document.createElement("div");
		elem.appendChild(power);
		let bg;
		if (card.hero) {
			bg = "power_hero";
			elem.classList.add("hero");
		} else if (card.faction === "weather") {
			bg = "power_" + card.abilities[0];
		} else if (card.faction === "special") {
			bg = "power_" + card.abilities[0];
			elem.classList.add("special");
		} else {
			bg = "power_normal";
		}
		power.style.backgroundImage = iconURL(bg);
		
		let row = document.createElement("div");
		elem.appendChild(row);
		if (card.row === "close" || card.row === "ranged" || card.row === "siege" || card.row === "agile") {
			let num = document.createElement("div");
			num.appendChild( document.createTextNode(card.basePower) );
			num.classList.add("center");
			power.appendChild(num);
			row.style.backgroundImage = iconURL("card_row_" + card.row);
		}

		let abi = document.createElement("div");
		elem.appendChild(abi);
		if (card.faction !== "special" && card.faction !== "weather" && card.abilities.length > 0) {
			let str =  card.abilities[card.abilities.length-1];
			if (str === "scorch_c" || str == "scorch_r" || str === "scorch_s")
				str = "scorch";
			abi.style.backgroundImage = iconURL("card_ability_" + str);
		}
		
		elem.appendChild( document.createElement("div") ); // animation overlay
		return elem;
	}
}

// Handles notifications and client interration with menus
class UI {
	constructor() {
		this.carousels = [];
		this.notif_elem = document.getElementById("notification-bar");
		this.preview = document.getElementsByClassName("card-preview")[0];
		this.previewCard = null;
		this.lastRow = null;
		document.getElementById("pass-button").addEventListener("click", () => player_me.passRound(), false);
		document.getElementById("click-background").addEventListener("click", () => ui.cancel(), false);
		this.youtube;
		this.mute = false;
		this.ytActive = false;
		this.toggleMusic_elem = document.getElementById("toggle-music");
		this.toggleMusic_elem.addEventListener("click", () => this.toggleMusic(), false);
	}
	
	// Enables or disables client interration
	enablePlayer(enable){
		let main = document.getElementsByTagName("main")[0].classList;
		if (enable) main.remove("noclick"); else main.add("noclick");
	}
	
	// Initializes the youtube background music object
	initYouTube(){
		this.youtube = new YT.Player('youtube', {
			videoId: "UE9fPWy1_o4",
			playerVars:  { "autoplay" : 1, "controls" : 0, "loop" : 1, "playlist" : "UE9fPWy1_o4", "rel" : 0, "version" : 3, "modestbranding" : 1 },
			events: { /*'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange*/ }
		});
	}
	
	// Called when client toggles the music
	toggleMusic(){
		if (this.mute){
			this.youtube.playVideo();
			this.toggleMusic_elem.classList.remove("fade");
		} else {
			this.youtube.pauseVideo();
			this.toggleMusic_elem.classList.add("fade");
		}
		this.mute = !this.mute;
	}
	
	// Enables or disables backgorund music 
	setYouTubeEnabled(enable){
		if (this.ytActive === enable)
			return;
		if (enable && !this.mute)
			ui.youtube.playVideo();
		else
			ui.youtube.pauseVideo();
		this.ytActive = enable;
}
	
	// Called when the player selects a selectable card
	async selectCard(card) {
		let row = this.lastRow;
		let pCard = this.previewCard;
		if (card === pCard)
			return;
		if (pCard === null || card.holder.hand.cards.includes(card)) {
			this.setSelectable(null, false);
			this.showPreview(card);
		} else if (pCard.name === "Decoy") {
			this.hidePreview(card);
			this.enablePlayer(false);
			board.toHand(card, row);
			await board.moveTo(pCard, row, pCard.holder.hand);
			pCard.holder.endTurn();
		}
	}
	
	// Called when the player selects a selectable CardContainer
	async selectRow(row){
		this.lastRow = row;
		if (this.previewCard === null) {
			await ui.viewCardsInContainer(row);
			return;
		}
		if (this.previewCard.name === "Decoy")
			return;
		let card = this.previewCard;
		let holder = card.holder;
		this.hidePreview();
		this.enablePlayer(false);
		if (card.name === "Scorch"){
			this.hidePreview();
			await ability_dict["scorch"].activated(card);
		} else if (card.name === "Decoy") {
			return;
		} else {
			await board.moveTo(card, row, card.holder.hand);
		}
		holder.endTurn();
	}
	
	// Called when the client cancels out of a card-preview
	cancel(){
		this.hidePreview();
	}
	
	// Displays a card preview then enables and highlights potential card destinations
	showPreview(card) {
		this.showPreviewVisuals(card);
		this.setSelectable(card, true);
		document.getElementById("click-background").classList.remove("noclick");
	}
	
	// Sets up the graphics and description for a card preview
	showPreviewVisuals(card){
		this.previewCard = card;
		this.preview.classList.remove("hide");
		this.preview.getElementsByClassName("card-lg")[0].style.backgroundImage = largeURL(card.faction+"_"+card.filename);
		let desc_elem = this.preview.getElementsByClassName("card-description")[0];
		this.setDescription(card, desc_elem);
	}
	
	// Hides the card preview then disables and removes highlighting from card destinations
	hidePreview(){
		document.getElementById("click-background").classList.add("noclick");
		player_me.hand.cards.forEach( c => c.elem.classList.remove("noclick") );
		
		this.preview.classList.add("hide");
		this.setSelectable(null, false);
		this.previewCard = null;
		this.lastRow = null;
	}
	
	// Sets up description window for a card
	setDescription(card, desc){
		if (card.hero || card.abilities.length > 0 || card.faction === "faction") {
			desc.classList.remove("hide");
			let str = card.abilities.length ? card.abilities[card.abilities.length-1] : "";
			if (str === "scorch_c" || str == "scorch_r" || str === "scorch_s")
				str = "scorch";
			if (card.row === "leader" || card.faction === "faction" || card.abilities.length === 0)
				desc.children[0].style.backgroundImage = "";
			else
				desc.children[0].style.backgroundImage = iconURL("card_ability_" + str);
			desc.children[1].innerHTML = card.desc_name;
			desc.children[2].innerHTML = card.desc;
		} else {
			desc.classList.add("hide");
		}
	}
	
	// Displayed a timed notification to the client
	async notification(name, duration){
		if (!duration)
			duration = 1200;
		duration = Math.max(400, duration);
		const fadeSpeed = 150;
		this.notif_elem.children[0].id = "notif-" + name;
		fadeIn(this.notif_elem, fadeSpeed);
		fadeOut(this.notif_elem, fadeSpeed, duration - fadeSpeed);
		await sleep(duration);
	}
	
	// Displays a cancellable Carousel for a single card 
	async viewCard(card, action) {
		if (card === null)
			return;
		let container = new CardContainer();
		container.cards.push(card);
		await this.viewCardsInContainer(container, action);
	}
	
	// Displays a cancellable Carousel for all cards in a container
	async viewCardsInContainer(container, action) {
		action = action ? action : function() {return this.cancel();};
		await this.queueCarousel(container, 1, action, () => true, false, true);
	}
	
	// Displays a Carousel menu of filtered container items that match the predicate.
	// Suspends gameplay until the Carousel is closed. Automatically picks random card if activated for AI player
	async queueCarousel(container, count, action, predicate, bSort, bQuit, title){
		if (game.currPlayer === player_op) {
			if (player_op.controller instanceof ControllerAI)
				for (let i=0; i<count; ++i){
					let cards = container.cards.reduce((a,c,i) => !predicate || predicate(c) ? a.concat([i]) : a, []);
					await action(container, cards[randomInt(cards.length)]);
				}
			return;
		}
		let carousel = new Carousel(container, count, action, predicate, bSort, bQuit, title);
		if (Carousel.curr === undefined || Carousel.curr === null)
			carousel.start();
		else {
			this.carousels.push(carousel);
			return;
		}
		await sleepUntil( () => this.carousels.length === 0 && !Carousel.curr, 100);
	}
	
	// Starts the next queued Carousel
	quitCarousel(){
		if (this.carousels.length > 0) {
			this.carousels.shift().start();
		}
	}
	
	// Displays a custom confirmation menu 
	async popup(yesName, yes, noName, no, title, description) {
		let p = new Popup(yesName, yes, noName, no, title, description);
		await sleepUntil( () => !Popup.curr) 
	}
	
	// Enables or disables selection and highlighting of rows specific to the card
	setSelectable(card, enable){
		if(!enable) {
			for (let row of board.row){
				row.elem.classList.remove("row-selectable");
				row.elem.classList.remove("noclick");
				row.elem_special.classList.remove("row-selectable");
				row.elem_special.classList.remove("noclick");
				row.elem.classList.add("card-selectable");
				
				for (let card of row.cards) {
					card.elem.classList.add("noclick");
				}
			}
			weather.elem.classList.remove("row-selectable");
			weather.elem.classList.remove("noclick");
			return;
		}
		if (card.faction === "weather") {
			for (let row of board.row){
				row.elem.classList.add("noclick");
				row.elem_special.classList.add("noclick");
			}
			weather.elem.classList.add("row-selectable");
			return;
		}
		
		weather.elem.classList.add("noclick");
		
		if (card.name === "Scorch") {
			for (let r of board.row){
				r.elem.classList.add("row-selectable");
				r.elem_special.classList.add("row-selectable");
			}
			return;
		}
		if (card.isSpecial()){
			for (let i=0; i<6; i++){
				let r = board.row[i];
				if (i < 3 || r.special !== null){
					r.elem.classList.add("noclick");
					r.elem_special.classList.add("noclick");
				} else {
					r.elem_special.classList.add("row-selectable");
				}
			}
			return;
		}
		
		board.row.forEach( r => r.elem_special.classList.add("noclick") );
		
		if (card.name === "Decoy"){
			for (let i=0; i<6; ++i) {
				let r = board.row[i];
				let units = r.cards.filter(c => c.isUnit());
				if (i < 3 || units.length === 0) {
					r.elem.classList.add("noclick");
					r.elem_special.classList.add("noclick");
					r.elem.classList.remove("card-selectable");
				} else {
					r.elem.classList.add("row-selectable");
					units.forEach( c => c.elem.classList.remove("noclick") );
				}
			}
			return;
		}
		
		let currRows = card.row === "agile" ? [board.getRow(card, "close", card.holder), board.getRow(card, "ranged", card.holder)] : [board.getRow(card, card.row, card.holder)];
		for (let i=0; i<6; i++){
			let row = board.row[i];
			if (currRows.includes(row)) {
				row.elem.classList.add("row-selectable");
			} else {
				row.elem.classList.add("noclick");
			}
		}
	
	}
}

// Displays up to 5 cards for the client to cycle through and select to perform an action
// Clicking the middle card performs the action on that card "count" times
// Clicking adejacent cards shifts the menu to focus on that card
class Carousel {
	constructor(container, count, action, predicate, bSort, bExit = false, title) {
		if (count <= 0 || !container || !action || container.cards.length === 0)
			return ;
		this.container = container;
		this.count = count;
		this.action = action ? action : () => this.cancel();
		this.predicate = predicate;
		this.bSort = bSort;
		this.indices = [];
		this.index = 0;
		this.bExit = bExit;
		this.title = title;
		this.cancelled = false;
		
		if (!Carousel.elem) {
			Carousel.elem = document.getElementById("carousel");
			Carousel.elem.children[0].addEventListener("click", () => Carousel.curr.cancel(), false);
		}
		this.elem = Carousel.elem;
		document.getElementsByTagName("main")[0].classList.remove("noclick");
		
		this.elem.children[0].classList.remove("noclick");
		this.previews = this.elem.getElementsByClassName("card-lg");
		this.desc = this.elem.getElementsByClassName("card-description")[0];
		this.title_elem = this.elem.children[2];
	}
	
	// Initializes the current Carousel
	start(){
		if (!this.elem)
			return;
		this.indices = this.container.cards.reduce((a,c,i)=> (!this.predicate || this.predicate(c)) ? a.concat([i]) : a, []);
		if (this.indices.length <= 0)
			return this.exit();
		if (this.bSort)
			this.indices.sort( (a, b) => Card.compare(this.container.cards[a],this.container.cards[b]) );
		
		this.update();
		Carousel.setCurrent(this);
		
		if (this.title) {
			this.title_elem.innerHTML = this.title;
			this.title_elem.classList.remove("hide");
		} else {
			this.title_elem.classList.add("hide");
		}
		
		this.elem.classList.remove("hide");
		ui.enablePlayer(true);
	}
	
	// Called by the client to cycle cards displayed by n
	shift(event, n){
		(event || window.event).stopPropagation();
		this.index = Math.max(0, Math.min(this.indices.length-1, this.index+n));
		this.update();
	}
	
	// Called by client to perform action on the middle card in focus
	async select(event) {
		(event || window.event).stopPropagation();
		--this.count;
		if (this.isLastSelection())
			this.elem.classList.add("hide");
		if (this.count <= 0)
			ui.enablePlayer(false);
		await this.action(this.container, this.indices[this.index]);
		if (this.isLastSelection() && !this.cancelled)
			return this.exit();
		this.update();
	}
	
	// Called by client to exit out of the current Carousel if allowed. Enables player interraction.
	cancel(){
		if (this.bExit){
			this.cancelled = true;
			this.exit();
		}
		ui.enablePlayer(true);
	}
	
	// Returns true if there are no more cards to view or select
	isLastSelection(){
		return this.count <= 0 || this.indices.length === 0;
	}
	
	// Updates the visuals of the current selection of cards
	update(){
		this.indices = this.container.cards.reduce((a,c,i)=> (!this.predicate || this.predicate(c)) ? a.concat([i]) : a, []);
		if (this.index >= this.indices.length)
			this.index =  this.indices.length-1;
		for (let i=0; i<this.previews.length; i++) {
			let curr = this.index - 2 + i;
			if (curr >= 0 && curr < this.indices.length) {
				let card = this.container.cards[this.indices[curr]];
				this.previews[i].style.backgroundImage = largeURL(card.faction + "_" + card.filename);
				this.previews[i].classList.remove("hide");
				this.previews[i].classList.remove("noclick");
			} else {
				this.previews[i].style.backgroundImage = "";
				this.previews[i].classList.add("hide");
				this.previews[i].classList.add("noclick");
			}
		}
		ui.setDescription(this.container.cards[this.indices[this.index]], this.desc);
	}
	
	// Clears and quits the current carousel
	exit() {
		for (let x of this.previews)
			x.style.backgroundImage = "";
		this.elem.classList.add("hide");
		Carousel.clearCurrent();
		ui.quitCarousel();
	}
	
	// Statically sets the current carousel
	static setCurrent(curr) {
		this.curr = curr;
	}
	
	// Statically clears the current carousel
	static clearCurrent() {
		this.curr = null;
	}
}

// Custom confirmation windows
class Popup {
	constructor(yesName, yes, noName, no, header, description){
		this.yes = yes ? yes : ()=>{};
		this.no = no ? no : ()=>{};
		
		this.elem = document.getElementById("popup");
		let main = this.elem.children[0];
		main.children[0].innerHTML = header ? header : "";
		main.children[1].innerHTML = description ? description : "";
		main.children[2].children[0].innerHTML = (yesName) ? yesName : "Yes";
		main.children[2].children[1].innerHTML = (noName) ? noName : "No";
		
		this.elem.classList.remove("hide");
		Popup.setCurrent(this);
		ui.enablePlayer(true);
	}
	
	// Sets this as the current popup window
	static setCurrent(curr){ this.curr = curr; }
	
	// Unsets this as the current popup window
	static clearCurrent()  { this.curr = null; }
	
	// Called when client selects the positive aciton
	selectYes() {
		this.clear()
		this.yes();
		return true;
	}
	
	// Called when client selects the negative option
	selectNo() {
		this.clear();
		this.no();
		return false;
	}
	
	// Clears the popup and diables player interraction
	clear() {
		ui.enablePlayer(false);
		this.elem.classList.add("hide");
		Popup.clearCurrent();
	}
	
}

// Screen used to customize, import and export deck contents
class DeckMaker {
	constructor() {
		this.elem = document.getElementById("deck-customization");
		this.bank_elem = document.getElementById("card-bank");
		this.deck_elem = document.getElementById("card-deck");
		this.leader_elem = document.getElementById("card-leader");
		this.leader_elem.children[1].addEventListener("click", () => this.selectLeader(), false);
		
		this.faction = "realms";
		this.setFaction(this.faction, true);
		
		let start_deck = JSON.parse(premade_deck[0]);
		start_deck.cards = start_deck.cards.map(c => ({index: c[0], count: c[1]}) );
		this.setLeader(start_deck.leader);
		this.makeBank(this.faction, start_deck.cards);
		
		this.change_elem = document.getElementById("change-faction");
		this.change_elem.addEventListener("click", () => this.selectFaction(), false);
		
		document.getElementById("download-deck").addEventListener("click", () => this.downloadDeck(), false);
		document.getElementById("add-file").addEventListener("change", () => this.uploadDeck(), false);
		document.getElementById("start-game").addEventListener("click", () => this.startNewGame(), false);
		
		this.update();
	}
	
	// Called when client selects a deck faction. Clears previous cards and makes valid cards available.
	setFaction(faction_name, silent){
		if (!silent && this.faction === faction_name)
			return false;
		if (!silent && !confirm("Changing factions will clear the current deck. Continue? "))
			return false;
		this.elem.getElementsByTagName("h1")[0].innerHTML = factions[faction_name].name;
		this.elem.getElementsByTagName("h1")[0].style.backgroundImage = iconURL("deck_shield_" + faction_name);
		document.getElementById("faction-description").innerHTML = factions[faction_name].description;
		
		this.leaders = 
			card_dict.map((c,i) => ({index: i, card:c}) )
			.filter(c => c.card.deck === faction_name && c.card.row === "leader");
		if (!this.leader || this.faction !== faction_name) {
			this.leader = this.leaders[0];
			this.leader_elem.children[1].style.backgroundImage = largeURL(this.leader.card.deck + "_" + this.leader.card.filename);
		}
		this.faction = faction_name;
		return true;
	}
	
	// Called when client selects a leader for their deck
	setLeader(index){
		this.leader = this.leaders.filter( l => l.index == index)[0];
		this.leader_elem.children[1].style.backgroundImage = largeURL(this.leader.card.deck + "_" + this.leader.card.filename);
	}
	
	// Constructs a bank of cards that can be used by the faction's deck.
	// If a deck is provided, will not add cards to bank that are already in the deck.
	makeBank(faction, deck) {
		this.clear();
		let cards = card_dict.map((c,i) => ({card:c, index:i})).filter(
		p => [faction, "neutral", "weather", "special"].includes(p.card.deck) && p.card.row !== "leader");
		
		cards.sort( function(id1, id2) {
			let a = card_dict[id1.index], b = card_dict[id2.index];
			let c1 = {name: a.name, basePower: -a.strength, faction: a.deck};
			let c2 = {name: b.name, basePower: -b.strength, faction: b.deck};
			return Card.compare(c1, c2);
		});
		
		
		let deckMap = {};
		if (deck){
			for (let i of Object.keys(deck)) deckMap[deck[i].index] = deck[i].count;
		}
		cards.forEach( p => {
			let count = deckMap[p.index] !== undefined ? Number(deckMap[p.index]) : 0;
			this.makePreview(p.index, Number.parseInt(p.card.count) - count, this.bank_elem, this.bank,);
			this.makePreview(p.index, count, this.deck_elem, this.deck);
		});
	}
	
	// Creates HTML elements for the card previews
	makePreview(index, num, container_elem, cards){
		let card_data = card_dict[index];
		
		let elem = document.createElement("div");
		elem.style.backgroundImage = largeURL(card_data.deck + "_" + card_data.filename);
		elem.classList.add("card-lg");
		let count = document.createElement("div");
		elem.appendChild(count);
		container_elem.appendChild(elem);
		
		let bankID = {index: index, count: num, elem: elem};
		let isBank = cards === this.bank;
		count.innerHTML = bankID.count;
		cards.push(bankID);
		let cardIndex = cards.length-1;
		elem.addEventListener("click", () => this.select(cardIndex, isBank), false);

		return bankID;
	}
	
	// Updates the card preview elements when any changes are made to the deck
	update(){
		for (let x of this.bank) {
			if (x.count)
				x.elem.classList.remove("hide");
			else
				x.elem.classList.add("hide");
		}
		let total = 0, units = 0, special = 0, strength = 0, hero = 0;
		for (let x of this.deck) {
			let card_data = card_dict[x.index];
			if (x.count)
				x.elem.classList.remove("hide");
			else
				x.elem.classList.add("hide");
			total += x.count;
			if (card_data.deck === "special" || card_data.deck === "weather") {
				special += x.count;
				continue;
			}
			units += x.count;
			strength += card_data.strength * x.count;
			if (card_data.ability.split(" ").includes("hero"))
				hero += x.count;
		}
		this.stats = {total: total, units: units, special: special, strength: strength, hero: hero};
		this.updateStats();
	}
	
	// Updates and displays the statistics describing the cards currently in the deck
	updateStats(){
		let stats = document.getElementById("deck-stats");
		stats.children[1].innerHTML = this.stats.total;
		stats.children[3].innerHTML = this.stats.units +(this.stats.units < 22 ? "/22" : "");
		stats.children[5].innerHTML = this.stats.special + "/10";
		stats.children[7].innerHTML = this.stats.strength;
		stats.children[9].innerHTML = this.stats.hero;
		
		stats.children[3].style.color = this.stats.units < 22 ? "red" : "";
		stats.children[5].style.color = (this.stats.special > 10) ? "red" : "";
	}
	
	// Opens a Carousel to allow the client to select a leader for their deck
	selectLeader(){
		let container = new CardContainer();
		container.cards = this.leaders.map(c => {
			let card = new Card(c.card, player_me);
			card.data = c;
			return card;
		});
		
		let index = this.leaders.indexOf(this.leader);
		ui.queueCarousel(container, 1, (c,i) => {
			let data = c.cards[i].data;
			this.leader = data;
			this.leader_elem.children[1].style.backgroundImage = largeURL(data.card.deck + "_" + data.card.filename);
		}, () => true, false, true);
		Carousel.curr.index = index;
		Carousel.curr.update();
	}
	
	// Opens a Carousel to allow the client to select a faction for their deck
	selectFaction() {
		let container = new CardContainer();
		container.cards = Object.keys(factions).map( f => {
			return {abilities: [f], filename: f, desc_name: factions[f].name, desc: factions[f].description, faction: "faction"};
		});
		let index = container.cards.reduce((a,c,i) => c.filename === this.faction ? i : a, 0);
		ui.queueCarousel(container, 1, (c,i) => {
			let change = this.setFaction(c.cards[i].filename);
			if (!change)
				return;
			this.makeBank(c.cards[i].filename);
			this.update();
		}, () => true, false, true);
		Carousel.curr.index = index;
		Carousel.curr.update();
	}
	
	// Called when client selects s a preview card. Moves it from bank to deck or vice-versa then updates;
	select(index, isBank){
		if (isBank) {
			this.add(index, this.deck);
			this.remove(index, this.bank);
		} else {
			this.add(index, this.bank);
			this.remove(index, this.deck);
		}
		this.update();
	}
	
	// Adds a card to container (Bank or deck)
	add(index, cards) {
		let id = cards[index];
		id.elem.children[0].innerHTML = ++id.count;
	}
	
	// Removes a card from container (bank or deck)
	remove(index, cards) {
		let id = cards[index];
		id.elem.children[0].innerHTML = --id.count;
	}
	
	// Removes all elements in the bank and deck
	clear(){
		while (this.bank_elem.firstChild)
			this.bank_elem.removeChild(this.bank_elem.firstChild);
		while (this.deck_elem.firstChild)
			this.deck_elem.removeChild(this.deck_elem.firstChild);
		this.bank = [];
		this.deck = [];
		this.stats = {};
	}
	
	// Verifies current deck, creates the players and their decks, then starts a new game
	startNewGame(){
		let warning = "";
		if (this.stats.units < 22)
			warning += "Your deck must have at least 22 unit cards. \n";
		if (this.stats.special > 10)
			warning += "Your deck must have no more than 10 special cards. \n";
		if (warning != "")
			return alert(warning);
		
		let me_deck = { 
			faction: this.faction,
			leader: card_dict[this.leader.index], 
			cards: this.deck.filter(x => x.count > 0)
		};
		
		let op_deck = JSON.parse( premade_deck[randomInt(Object.keys(premade_deck).length)] );
		op_deck.cards = op_deck.cards.map(c => ({index:c[0], count:c[1]}) );
		//op_deck.leader = card_dict[op_deck.leader];		
		let leaders = card_dict.filter(c => c.row === "leader" && c.deck === op_deck.faction);
		op_deck.leader = leaders[randomInt(leaders.length)];
		
		player_me = new Player(0, "Player 1", me_deck );
		player_op = new Player(1, "Player 2", op_deck);
		
		this.elem.classList.add("hide");
		game.startGame();
	}
	
	// Converts the current deck to a JSON string
	deckToJSON(){
		let obj = {
			faction: this.faction,
			leader: this.leader.index, 
			cards: this.deck.filter(x => x.count > 0).map(x => [x.index, x.count] )
		};
		return JSON.stringify(obj);
	}
	
	// Called by the client to downlaod the current deck as a JSON file
	downloadDeck(){
		let json = this.deckToJSON();
		let str = "data:text/json;charset=utf-8," + encodeURIComponent(json);
		let hidden_elem = document.getElementById('download-json');
		hidden_elem.href = str;
		hidden_elem.download = "GwentDeck.json";
		hidden_elem.click();
	}
	
	// Called by the client to upload a JSON file representing a new deck
	uploadDeck() {
		let files = document.getElementById("add-file").files;
		if (files.length <= 0)
			return false;
		let fr = new FileReader();
		fr.onload = e => {
			try {
				this.deckFromJSON(e.target.result);
			} catch (e) {
				alert("Uploaded deck is not formatted correctly!");
			}
		}
		fr.readAsText(files.item(0));
		document.getElementById("add-file").value = "";
	}
	
	// Creates a deck from a JSON file's contents and sets that as the current deck
	// Notifies client with warnings if the deck is invalid
	deckFromJSON(json) {
		let deck;
		try {
			deck = JSON.parse(json);
		} catch (e) {
			alert("Uploaded deck is not parsable!");
			return;
		}
		let warning = "";
		if (card_dict[deck.leader].row !== "leader")
			warning += "'" + card_dict[deck.leader].name + "' is cannot be used as a leader\n";
		if (deck.faction != card_dict[deck.leader].deck)
			warning += "Leader '" + card_dict[deck.leader].name + "' doesn't match deck faction '" + deck.faction + "'.\n";
		
		let cards = deck.cards.filter( c => {
			let card = card_dict[c[0]];
			if (!card) {
				warning += "ID " + c[0] + " does not correspond to a card.\n";
				return false
			}
			if (![deck.faction, "neutral", "special", "weather"].includes(card.deck)) {
				warning += "'" + card.name + "' cannot be used in a deck of faction type '" + deck.faciton +"'\n";
				return false;
			}
			if (card.count < c[1]) {
				warning += "Deck contains " + c[1] + "/" + card.count + " available " + card_dict[c.index].name + " cards\n";
				return false;
			}
			return true;
		})
		.map(c => ({index:c[0], count:Math.min(c[1], card_dict[c[0]].count)}) );
		
		if (warning && !confirm(warning + "\n\n\Continue importing deck?"))
			return;
		this.setFaction(deck.faction, true);
		if (card_dict[deck.leader].row === "leader" && deck.faction === card_dict[deck.leader].deck){
			this.leader = this.leaders.filter(c => c.index === deck.leader)[0];
			this.leader_elem.children[1].style.backgroundImage = largeURL(this.leader.card.deck + "_" + this.leader.card.filename);
		}
		this.makeBank(deck.faction, cards);
		this.update();
	}
}

// Translates a card between two containers
async function translateTo(card, container_source, container_dest){
	if (!container_dest || !container_source)
		return;
	if (container_dest === player_op.hand && container_source === player_op.deck)
		return;
	
	let elem = card.elem;
	let source = !container_source ? card.elem : getSourceElem(card, container_source, container_dest);
	let dest = getDestinationElem(card, container_source, container_dest);
	if (!isInDocument(elem))
		source.appendChild(elem);
	let x = trueOffsetLeft(dest) - trueOffsetLeft(elem) +dest.offsetWidth/2 - elem.offsetWidth;
	let y = trueOffsetTop(dest) - trueOffsetTop(elem) +dest.offsetHeight/2 - elem.offsetHeight/2;
	if (container_dest instanceof Row && container_dest.cards.length !== 0 && !card.isSpecial() ){
		x += (container_dest.getSortedIndex(card) === container_dest.cards.length) ? elem.offsetWidth/2 : -elem.offsetWidth/2;
	}
	if (card.holder.controller instanceof ControllerAI)
		x += elem.offsetWidth/2;
	if (container_source instanceof Row && container_dest instanceof Grave && !card.isSpecial()) {
		let mid = trueOffset(container_source.elem, true) + container_source.elem.offsetWidth/2;
		x += trueOffset(elem, true) - mid;
	}
	await translate(elem, x, y);
	
	// Returns true if the element is visible in the viewport
	function isInDocument(elem){
		return elem.getBoundingClientRect().width !== 0;
	}
	
	// Returns the true offset of a nested element in the viewport
	function trueOffset(elem, left){
		let total =0
		let curr = elem;
		while (curr){
			total += (left ? curr.offsetLeft : curr.offsetTop);
			curr = curr.parentElement;
		}
		return total;
	}
	function trueOffsetLeft(elem) {	return trueOffset(elem, true); }
	function trueOffsetTop(elem) { return trueOffset(elem, false); }
	
	// Returns the source container's element to transition from
	function getSourceElem(card, source, dest){
		if (source instanceof HandAI)
			return source.hidden_elem;
		if (source instanceof Deck)
			return source.elem.children[source.elem.children.length-2];
		return source.elem;
	}

	// Returns the destination container's element to transition to
	function getDestinationElem(card, source, dest){
		if (dest instanceof HandAI)
			return dest.hidden_elem;
		if (card.isSpecial() && dest instanceof Row)
			return dest.elem_special;
		if (dest instanceof Row || dest instanceof Hand || dest instanceof Weather){
			if (dest.cards.length === 0)
				return dest.elem;
			let index = dest.getSortedIndex(card);
			let dcard = dest.cards[index === dest.cards.length ? index-1 : index];
			return dcard.elem;
		}
		return dest.elem;
	}
}

// Translates an element by x from the left and y from the top
async function translate(elem, x, y){
	let vw100 = 100 / document.getElementById("dimensions").offsetWidth;
	x*=vw100;
	y*=vw100 ;
	elem.style.transform = "translate(" + x + "vw, " + y + "vw)";
	let margin = elem.style.marginLeft;
	elem.style.marginRight = -elem.offsetWidth*vw100 + "vw"; //"-4.45vw";
	elem.style.marginLeft = "";
	await sleep(499);
	elem.style.transform = "";
	elem.style.position = "";
	elem.style.marginLeft = margin;
	elem.style.marginRight = margin;
}

// Fades out an element until hidden over the duration
async function fadeOut(elem, duration, delay) {
	await fade(false, elem, duration, delay);
}

// Fades in an element until opaque over the duration
async function fadeIn(elem, duration, delay){
	await fade(true, elem, duration, delay);
}

// Fades an element over a duration 
async function fade(fadeIn, elem, dur, delay){
	if (delay)
		await sleep(delay)
	let op = fadeIn ?  0.1 : 1;
	elem.style.opacity = op;
	elem.style.filter = "alpha(opacity=" + (op * 100) + ")";
	if (fadeIn)
		elem.classList.remove("hide");
	let timer = setInterval( async function() {
		op += op * (fadeIn ? 0.1 : -0.1);
		if (op >= 1) {
			clearInterval(timer);
			return;
		} else if (op <= 0.1) {
			elem.classList.add("hide");
			elem.style.opacity = "";
			elem.style.filter = "";
			clearInterval(timer);
			return;
		}
		elem.style.opacity = op;
		elem.style.filter = "alpha(opacity=" + (op * 100) + ")";
	}, dur/24);
}

//      Get Image paths   
function iconURL(name, ext = "png"){
	return imgURL("icons/" + name, ext);
}
function largeURL(name, ext="jpg"){
	return imgURL("lg/" + name, ext) 
}
function smallURL(name, ext="jpg"){
	return imgURL("sm/" + name, ext);
}
function imgURL(path, ext) {
	return "url('img/" + path + "." + ext;
}

// Returns true if n is an Number
function isNumber(n) { 
	return !isNaN(parseFloat(n)) && isFinite(n);
}

// Returns true if s is a String
function isString(s){
	return typeof(s) === 'string' || s instanceof String;
}

// Returns a random integer in the range [0,n)
function randomInt(n)  {
	return Math.floor(Math.random() * n);
}

// Pauses execution until the passed number of milliseconds as expired
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
  //return new Promise(resolve => setTimeout(() => {if (func) func(); return resolve();}, ms));
}

// Suspends execution until the predicate condition is met, checking every ms milliseconds
function sleepUntil(predicate, ms) {
	return new Promise(resolve => {
		let timer = setInterval( function () {
			if (predicate()) {
				clearInterval(timer);
				resolve();
			}
		}, ms)
	});
}

// Initializes the interractive YouTube object
function onYouTubeIframeAPIReady() {
	ui.initYouTube();
}

/*----------------------------------------------------*/

var ui = new UI();
var board = new Board();
var weather = new Weather(document.getElementById("weather"));
var game = new Game();
var player_me, player_op;

ui.enablePlayer(false);
let dm = new DeckMaker();
