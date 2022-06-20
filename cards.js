var card_dict = JSON.parse(
	'[' +
		'{' + 
			'"name" : "Mysterious Elf",' + 
			'"id" : "142",' + 
			'"deck" : "neutral",' + 
			'"row" : "close",' + 
			'"strength" : "0",' + 
			'"ability" : "hero spy",' + 
			'"filename" : "mysterious_elf",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Decoy",' + 
			'"id" : "1",' + 
			'"deck" : "special",' + 
			'"row" : "",' + 
			'"strength" : "",' + 
			'"ability" : "decoy",' + 
			'"filename" : "decoy",' + 
			'"count" : "3"' + 
		'}, {' + 
			'"name" : "Biting Frost",' + 
			'"id" : "4",' + 
			'"deck" : "weather",' + 
			'"row" : "",' + 
			'"strength" : "",' + 
			'"ability" : "frost",' + 
			'"filename" : "frost",' + 
			'"count" : "3"' + 
		'}, {' + 
			'"name" : "Cirilla Fiona Elen Riannon",' + 
			'"id" : "139",' + 
			'"deck" : "neutral",' + 
			'"row" : "close",' + 
			'"strength" : "15",' + 
			'"ability" : "hero",' + 
			'"filename" : "ciri",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Clear Weather",' + 
			'"id" : "7",' + 
			'"deck" : "weather",' + 
			'"row" : "",' + 
			'"strength" : "",' + 
			'"ability" : "clear",' + 
			'"filename" : "clear",' + 
			'"count" : "2"' + 
		'}, {' + 
			'"name" : "Commander\'s Horn",' + 
			'"id" : "2",' + 
			'"deck" : "special",' + 
			'"row" : "",' + 
			'"strength" : "",' + 
			'"ability" : "horn",' + 
			'"filename" : "horn",' + 
			'"count" : "3"' + 
		'}, {' + 
			'"name" : "Dandelion",' + 
			'"id" : "11",' + 
			'"deck" : "neutral",' + 
			'"row" : "close",' + 
			'"strength" : "2",' + 
			'"ability" : "horn",' + 
			'"filename" : "dandelion",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Emiel Regis Rohellec Terzieff",' + 
			'"id" : "",' + 
			'"deck" : "neutral",' + 
			'"row" : "close",' + 
			'"strength" : "5",' + 
			'"ability" : "",' + 
			'"filename" : "emiel",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Geralt of Rivia",' + 
			'"id" : "138",' + 
			'"deck" : "neutral",' + 
			'"row" : "close",' + 
			'"strength" : "15",' + 
			'"ability" : "hero",' + 
			'"filename" : "geralt",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Impenetrable Fog",' + 
			'"id" : "5",' + 
			'"deck" : "weather",' + 
			'"row" : "",' + 
			'"strength" : "",' + 
			'"ability" : "fog",' + 
			'"filename" : "fog",' + 
			'"count" : "3"' + 
		'}, {' + 
			'"name" : "Scorch",' + 
			'"id" : "3",' + 
			'"deck" : "special",' + 
			'"row" : "",' + 
			'"strength" : "",' + 
			'"ability" : "scorch",' + 
			'"filename" : "scorch",' + 
			'"count" : "3"' + 
		'}, {' + 
			'"name" : "Torrential Rain",' + 
			'"id" : "6",' + 
			'"deck" : "weather",' + 
			'"row" : "",' + 
			'"strength" : "",' + 
			'"ability" : "rain",' + 
			'"filename" : "rain",' + 
			'"count" : "2"' + 
		'}, {' + 
			'"name" : "Triss Merigold",' + 
			'"id" : "141",' + 
			'"deck" : "neutral",' + 
			'"row" : "close",' + 
			'"strength" : "7",' + 
			'"ability" : "hero",' + 
			'"filename" : "triss",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Vesemir",' + 
			'"id" : "9",' + 
			'"deck" : "neutral",' + 
			'"row" : "close",' + 
			'"strength" : "6",' + 
			'"ability" : "",' + 
			'"filename" : "vesemir",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Villentretenmerth",' + 
			'"id" : "8",' + 
			'"deck" : "neutral",' + 
			'"row" : "close",' + 
			'"strength" : "7",' + 
			'"ability" : "scorch_c",' + 
			'"filename" : "villen",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Yennefer of Vengerberg",' + 
			'"id" : "140",' + 
			'"deck" : "neutral",' + 
			'"row" : "ranged",' + 
			'"strength" : "7",' + 
			'"ability" : "hero medic",' + 
			'"filename" : "yennefer",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Zoltan Chivay",' + 
			'"id" : "10",' + 
			'"deck" : "neutral",' + 
			'"row" : "close",' + 
			'"strength" : "5",' + 
			'"ability" : "",' + 
			'"filename" : "zoltan",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Olgierd von Everec",' + 
			'"id" : "",' + 
			'"deck" : "neutral",' + 
			'"row" : "agile",' + 
			'"strength" : "6",' + 
			'"ability" : "morale",' + 
			'"filename" : "olgierd",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Gaunter O\'Dimm",' + 
			'"id" : "",' + 
			'"deck" : "neutral",' + 
			'"row" : "siege",' + 
			'"strength" : "2",' + 
			'"ability" : "muster",' + 
			'"filename" : "gaunter_odimm",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Gaunter O\'Dimm - Darkness",' + 
			'"id" : "",' + 
			'"deck" : "neutral",' + 
			'"row" : "ranged",' + 
			'"strength" : "4",' + 
			'"ability" : "muster",' + 
			'"filename" : "gaunter_odimm_darkness",' + 
			'"count" : "3"' + 
		'}, {' + 
			'"name" : "Cow",' + 
			'"id" : "",' + 
			'"deck" : "neutral",' + 
			'"row" : "ranged",' + 
			'"strength" : "0",' + 
			'"ability" : "avenger",' + 
			'"filename" : "cow",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Bovine Defense Force",' + 
			'"id" : "",' + 
			'"deck" : "neutral",' + 
			'"row" : "close",' + 
			'"strength" : "8",' + 
			'"ability" : "",' + 
			'"filename" : "chort",' + 
			'"count" : "0"' + 
		'}, {' + 
			'"name" : "Foltest - King of Temeria",' + 
			'"id" : "5",' + 
			'"deck" : "realms",' + 
			'"row" : "leader",' + 
			'"strength" : "",' + 
			'"ability" : "foltest_king",' + 
			'"filename" : "foltest_silver",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Foltest - Lord Commander of the North",' + 
			'"id" : "8",' + 
			'"deck" : "realms",' + 
			'"row" : "leader",' + 
			'"strength" : "",' + 
			'"ability" : "foltest_lord",' + 
			'"filename" : "foltest_gold",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Foltest - The Siegemaster",' + 
			'"id" : "6",' + 
			'"deck" : "realms",' + 
			'"row" : "leader",' + 
			'"strength" : "",' + 
			'"ability" : "foltest_siegemaster",' + 
			'"filename" : "foltest_copper",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Foltest - The Steel-Forged",' + 
			'"id" : "7",' + 
			'"deck" : "realms",' + 
			'"row" : "leader",' + 
			'"strength" : "",' + 
			'"ability" : "foltest_steelforged",' + 
			'"filename" : "foltest_bronze",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Foltest - Son of Medell",' + 
			'"id" : "",' + 
			'"deck" : "realms",' + 
			'"row" : "leader",' + 
			'"strength" : "",' + 
			'"ability" : "foltest_son",' + 
			'"filename" : "foltest_son_of_medell",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Ballista",' + 
			'"id" : "79",' + 
			'"deck" : "realms",' + 
			'"row" : "siege",' + 
			'"strength" : "6",' + 
			'"ability" : "",' + 
			'"filename" : "ballista",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Blue Stripes Commando",' + 
			'"id" : "92",' + 
			'"deck" : "realms",' + 
			'"row" : "close",' + 
			'"strength" : "4",' + 
			'"ability" : "bond",' + 
			'"filename" : "blue_stripes",' + 
			'"count" : "3"' + 
		'}, {' + 
			'"name" : "Catapult",' + 
			'"id" : "75",' + 
			'"deck" : "realms",' + 
			'"row" : "siege",' + 
			'"strength" : "8",' + 
			'"ability" : "bond",' + 
			'"filename" : "catapult_1",' + 
			'"count" : "2"' + 
		'}, {' + 
			'"name" : "Crinfrid Reavers Dragon Hunter",' + 
			'"id" : "87",' + 
			'"deck" : "realms",' + 
			'"row" : "ranged",' + 
			'"strength" : "5",' + 
			'"ability" : "bond",' + 
			'"filename" : "crinfrid",' + 
			'"count" : "3"' + 
		'}, {' + 
			'"name" : "Dethmold",' + 
			'"id" : "76",' + 
			'"deck" : "realms",' + 
			'"row" : "ranged",' + 
			'"strength" : "6",' + 
			'"ability" : "",' + 
			'"filename" : "dethmold",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Dun Banner Medic",' + 
			'"id" : "88",' + 
			'"deck" : "realms",' + 
			'"row" : "siege",' + 
			'"strength" : "5",' + 
			'"ability" : "medic",' + 
			'"filename" : "banner_nurse",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Esterad Thyssen",' + 
			'"id" : "11",' + 
			'"deck" : "realms",' + 
			'"row" : "close",' + 
			'"strength" : "10",' + 
			'"ability" : "hero",' + 
			'"filename" : "esterad",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "John Natalis",' + 
			'"id" : "10",' + 
			'"deck" : "realms",' + 
			'"row" : "close",' + 
			'"strength" : "10",' + 
			'"ability" : "hero",' + 
			'"filename" : "natalis",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Kaedweni Siege Expert",' + 
			'"id" : "98",' + 
			'"deck" : "realms",' + 
			'"row" : "siege",' + 
			'"strength" : "1",' + 
			'"ability" : "morale",' + 
			'"filename" : "kaedwen_siege",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Kaedweni Siege Expert",' + 
			'"id" : "99",' + 
			'"deck" : "realms",' + 
			'"row" : "siege",' + 
			'"strength" : "1",' + 
			'"ability" : "morale",' + 
			'"filename" : "kaedwen_siege_1",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Kaedweni Siege Expert",' + 
			'"id" : "100",' + 
			'"deck" : "realms",' + 
			'"row" : "siege",' + 
			'"strength" : "1",' + 
			'"ability" : "morale",' + 
			'"filename" : "kaedwen_siege_2",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Keira Metz",' + 
			'"id" : "84",' + 
			'"deck" : "realms",' + 
			'"row" : "ranged",' + 
			'"strength" : "5",' + 
			'"ability" : "",' + 
			'"filename" : "keira",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Philippa Eilhart",' + 
			'"id" : "12",' + 
			'"deck" : "realms",' + 
			'"row" : "ranged",' + 
			'"strength" : "10",' + 
			'"ability" : "hero",' + 
			'"filename" : "philippa",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Poor Fucking Infantry",' + 
			'"id" : "95",' + 
			'"deck" : "realms",' + 
			'"row" : "close",' + 
			'"strength" : "1",' + 
			'"ability" : "bond",' + 
			'"filename" : "poor_infantry",' + 
			'"count" : "4"' + 
		'}, {' + 
			'"name" : "Prince Stennis",' + 
			'"id" : "86",' + 
			'"deck" : "realms",' + 
			'"row" : "close",' + 
			'"strength" : "5",' + 
			'"ability" : "spy",' + 
			'"filename" : "stennis",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Redanian Foot Soldier",' + 
			'"id" : "96",' + 
			'"deck" : "realms",' + 
			'"row" : "close",' + 
			'"strength" : "1",' + 
			'"ability" : "",' + 
			'"filename" : "redania",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Redanian Foot Soldier",' + 
			'"id" : "97",' + 
			'"deck" : "realms",' + 
			'"row" : "close",' + 
			'"strength" : "1",' + 
			'"ability" : "",' + 
			'"filename" : "redania_1",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Sheldon Skaggs",' + 
			'"id" : "91",' + 
			'"deck" : "realms",' + 
			'"row" : "ranged",' + 
			'"strength" : "4",' + 
			'"ability" : "",' + 
			'"filename" : "sheldon",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Siege Tower",' + 
			'"id" : "81",' + 
			'"deck" : "realms",' + 
			'"row" : "siege",' + 
			'"strength" : "6",' + 
			'"ability" : "",' + 
			'"filename" : "siege_tower",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Siegfried of Denesle",' + 
			'"id" : "83",' + 
			'"deck" : "realms",' + 
			'"row" : "close",' + 
			'"strength" : "5",' + 
			'"ability" : "",' + 
			'"filename" : "siegfried",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Sigismund Dijkstra",' + 
			'"id" : "89",' + 
			'"deck" : "realms",' + 
			'"row" : "close",' + 
			'"strength" : "4",' + 
			'"ability" : "spy",' + 
			'"filename" : "dijkstra",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Síle de Tansarville",' + 
			'"id" : "85",' + 
			'"deck" : "realms",' + 
			'"row" : "ranged",' + 
			'"strength" : "5",' + 
			'"ability" : "",' + 
			'"filename" : "sheala",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Thaler",' + 
			'"id" : "94",' + 
			'"deck" : "realms",' + 
			'"row" : "siege",' + 
			'"strength" : "1",' + 
			'"ability" : "spy",' + 
			'"filename" : "thaler",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Sabrina Glevissig",' + 
			'"id" : "90",' + 
			'"deck" : "realms",' + 
			'"row" : "ranged",' + 
			'"strength" : "4",' + 
			'"ability" : "",' + 
			'"filename" : "sabrina",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Vernon Roche",' + 
			'"id" : "9",' + 
			'"deck" : "realms",' + 
			'"row" : "close",' + 
			'"strength" : "10",' + 
			'"ability" : "hero",' + 
			'"filename" : "vernon",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Ves",' + 
			'"id" : "82",' + 
			'"deck" : "realms",' + 
			'"row" : "close",' + 
			'"strength" : "5",' + 
			'"ability" : "",' + 
			'"filename" : "ves",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Yarpen Zigrin",' + 
			'"id" : "93",' + 
			'"deck" : "realms",' + 
			'"row" : "close",' + 
			'"strength" : "2",' + 
			'"ability" : "",' + 
			'"filename" : "yarpen",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Trebuchet",' + 
			'"id" : "77",' + 
			'"deck" : "realms",' + 
			'"row" : "siege",' + 
			'"strength" : "6",' + 
			'"ability" : "",' + 
			'"filename" : "trebuchet",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Trebuchet",' + 
			'"id" : "78",' + 
			'"deck" : "realms",' + 
			'"row" : "siege",' + 
			'"strength" : "6",' + 
			'"ability" : "",' + 
			'"filename" : "trebuchet_1",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Emhyr var Emreis - His Imperial Majesty",' + 
			'"id" : "1",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "leader",' + 
			'"strength" : "",' + 
			'"ability" : "emhyr_imperial",' + 
			'"filename" : "emhyr_silver",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Emhyr var Emreis - Emperor of Nilfgaard",' + 
			'"id" : "2",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "leader",' + 
			'"strength" : "",' + 
			'"ability" : "emhyr_emperor",' + 
			'"filename" : "emhyr_copper",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Emhyr var Emreis - the White Flame",' + 
			'"id" : "3",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "leader",' + 
			'"strength" : "",' + 
			'"ability" : "emhyr_whiteflame",' + 
			'"filename" : "emhyr_bronze",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Emhyr var Emreis - The Relentless",' + 
			'"id" : "4",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "leader",' + 
			'"strength" : "",' + 
			'"ability" : "emhyr_relentless",' + 
			'"filename" : "emhyr_gold",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Emhyr var Emreis - Invader of the North",' + 
			'"id" : "",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "leader",' + 
			'"strength" : "",' + 
			'"ability" : "emhyr_invader",' + 
			'"filename" : "emhyr_invader_of_the_north",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Albrich",' + 
			'"id" : "68",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "ranged",' + 
			'"strength" : "2",' + 
			'"ability" : "",' + 
			'"filename" : "albrich",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Assire var Anahid",' + 
			'"id" : "52",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "ranged",' + 
			'"strength" : "6",' + 
			'"ability" : "",' + 
			'"filename" : "assire",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Black Infantry Archer",' + 
			'"id" : "47",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "ranged",' + 
			'"strength" : "10",' + 
			'"ability" : "",' + 
			'"filename" : "black_archer",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Black Infantry Archer",' + 
			'"id" : "48",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "ranged",' + 
			'"strength" : "10",' + 
			'"ability" : "",' + 
			'"filename" : "black_archer_1",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Cahir Mawr Dyffryn aep Ceallach",' + 
			'"id" : "54",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "close",' + 
			'"strength" : "6",' + 
			'"ability" : "",' + 
			'"filename" : "cahir",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Cynthia",' + 
			'"id" : "60",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "ranged",' + 
			'"strength" : "4",' + 
			'"ability" : "",' + 
			'"filename" : "cynthia",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Etolian Auxiliary Archers",' + 
			'"id" : "72",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "ranged",' + 
			'"strength" : "1",' + 
			'"ability" : "medic",' + 
			'"filename" : "archer_support",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Etolian Auxiliary Archers",' + 
			'"id" : "73",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "ranged",' + 
			'"strength" : "1",' + 
			'"ability" : "medic",' + 
			'"filename" : "archer_support_1",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Fringilla Vigo",' + 
			'"id" : "53",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "ranged",' + 
			'"strength" : "6",' + 
			'"ability" : "",' + 
			'"filename" : "fringilla",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Heavy Zerrikanian Fire Scorpion",' + 
			'"id" : "49",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "siege",' + 
			'"strength" : "10",' + 
			'"ability" : "",' + 
			'"filename" : "heavy_zerri",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Impera Brigade Guard",' + 
			'"id" : "67",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "close",' + 
			'"strength" : "3",' + 
			'"ability" : "bond",' + 
			'"filename" : "imperal_brigade",' + 
			'"count" : "4"' + 
		'}, {' + 
			'"name" : "Letho of Gulet",' + 
			'"id" : "147",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "close",' + 
			'"strength" : "10",' + 
			'"ability" : "hero",' + 
			'"filename" : "letho",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Menno Coehoorn",' + 
			'"id" : "148",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "close",' + 
			'"strength" : "10",' + 
			'"ability" : "hero medic",' + 
			'"filename" : "menno",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Morteisen",' + 
			'"id" : "64",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "close",' + 
			'"strength" : "3",' + 
			'"ability" : "",' + 
			'"filename" : "morteisen",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Morvran Voorhis",' + 
			'"id" : "149",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "siege",' + 
			'"strength" : "10",' + 
			'"ability" : "hero",' + 
			'"filename" : "moorvran",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Nausicaa Cavalry Rider",' + 
			'"id" : "71",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "close",' + 
			'"strength" : "2",' + 
			'"ability" : "bond",' + 
			'"filename" : "nauzicaa_2",' + 
			'"count" : "3"' + 
		'}, {' + 
			'"name" : "Puttkammer",' + 
			'"id" : "66",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "ranged",' + 
			'"strength" : "3",' + 
			'"ability" : "",' + 
			'"filename" : "puttkammer",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Rainfarn",' + 
			'"id" : "61",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "close",' + 
			'"strength" : "4",' + 
			'"ability" : "",' + 
			'"filename" : "rainfarn",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Renuald aep Matsen",' + 
			'"id" : "56",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "ranged",' + 
			'"strength" : "5",' + 
			'"ability" : "",' + 
			'"filename" : "renuald",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Rotten Mangonel",' + 
			'"id" : "65",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "siege",' + 
			'"strength" : "3",' + 
			'"ability" : "",' + 
			'"filename" : "rotten",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Shilard Fitz-Oesterlen",' + 
			'"id" : "51",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "close",' + 
			'"strength" : "7",' + 
			'"ability" : "spy",' + 
			'"filename" : "shilard",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Siege Engineer",' + 
			'"id" : "55",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "siege",' + 
			'"strength" : "6",' + 
			'"ability" : "",' + 
			'"filename" : "siege_engineer",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Siege Technician",' + 
			'"id" : "74",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "siege",' + 
			'"strength" : "0",' + 
			'"ability" : "medic",' + 
			'"filename" : "siege_support",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Stefan Skellen",' + 
			'"id" : "50",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "close",' + 
			'"strength" : "9",' + 
			'"ability" : "spy",' + 
			'"filename" : "stefan",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Sweers",' + 
			'"id" : "69",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "ranged",' + 
			'"strength" : "2",' + 
			'"ability" : "",' + 
			'"filename" : "sweers",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Tibor Eggebracht",' + 
			'"id" : "150",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "ranged",' + 
			'"strength" : "10",' + 
			'"ability" : "hero",' + 
			'"filename" : "tibor",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Vanhemar",' + 
			'"id" : "62",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "ranged",' + 
			'"strength" : "4",' + 
			'"ability" : "",' + 
			'"filename" : "vanhemar",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Vattier de Rideaux",' + 
			'"id" : "63",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "close",' + 
			'"strength" : "4",' + 
			'"ability" : "spy",' + 
			'"filename" : "vattier",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Vreemde",' + 
			'"id" : "70",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "close",' + 
			'"strength" : "2",' + 
			'"ability" : "",' + 
			'"filename" : "vreemde",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Young Emissary",' + 
			'"id" : "58",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "close",' + 
			'"strength" : "5",' + 
			'"ability" : "bond",' + 
			'"filename" : "young_emissary",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Young Emissary",' + 
			'"id" : "59",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "close",' + 
			'"strength" : "5",' + 
			'"ability" : "bond",' + 
			'"filename" : "young_emissary_1",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Zerrikanian Fire Scorpion",' + 
			'"id" : "57",' + 
			'"deck" : "nilfgaard",' + 
			'"row" : "siege",' + 
			'"strength" : "5",' + 
			'"ability" : "",' + 
			'"filename" : "zerri",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Eredin - Commander of the Red Riders",' + 
			'"id" : "134",' + 
			'"deck" : "monsters",' + 
			'"row" : "leader",' + 
			'"strength" : "",' + 
			'"ability" : "eredin_commander",' + 
			'"filename" : "eredin_silver",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Eredin - Bringer of Death",' + 
			'"id" : "136",' + 
			'"deck" : "monsters",' + 
			'"row" : "leader",' + 
			'"strength" : "",' + 
			'"ability" : "eredin_bringer_of_death",' + 
			'"filename" : "eredin_bronze",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Eredin - Destroyer of Worlds",' + 
			'"id" : "137",' + 
			'"deck" : "monsters",' + 
			'"row" : "leader",' + 
			'"strength" : "",' + 
			'"ability" : "eredin_destroyer",' + 
			'"filename" : "eredin_gold",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Eredin - King of the Wild Hunt",' + 
			'"id" : "135",' + 
			'"deck" : "monsters",' + 
			'"row" : "leader",' + 
			'"strength" : "",' + 
			'"ability" : "eredin_king",' + 
			'"filename" : "eredin_copper",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Eredin Bréacc Glas - The Treacherous",' + 
			'"id" : "",' + 
			'"deck" : "monsters",' + 
			'"row" : "leader",' + 
			'"strength" : "",' + 
			'"ability" : "eredin_treacherous",' + 
			'"filename" : "eredin_the_treacherous",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Arachas ",' + 
			'"id" : "27",' + 
			'"deck" : "monsters",' + 
			'"row" : "close",' + 
			'"strength" : "4",' + 
			'"ability" : "muster",' + 
			'"filename" : "arachas",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Arachas ",' + 
			'"id" : "28",' + 
			'"deck" : "monsters",' + 
			'"row" : "close",' + 
			'"strength" : "4",' + 
			'"ability" : "muster",' + 
			'"filename" : "arachas_1",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Arachas ",' + 
			'"id" : "29",' + 
			'"deck" : "monsters",' + 
			'"row" : "close",' + 
			'"strength" : "4",' + 
			'"ability" : "muster",' + 
			'"filename" : "arachas_2",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Arachas- Behemoth",' + 
			'"id" : "15",' + 
			'"deck" : "monsters",' + 
			'"row" : "siege",' + 
			'"strength" : "6",' + 
			'"ability" : "muster",' + 
			'"filename" : "arachas_behemoth",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Botchling",' + 
			'"id" : "26",' + 
			'"deck" : "monsters",' + 
			'"row" : "close",' + 
			'"strength" : "4",' + 
			'"ability" : "",' + 
			'"filename" : "poroniec",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Celaeno Harpy",' + 
			'"id" : "38",' + 
			'"deck" : "monsters",' + 
			'"row" : "agile",' + 
			'"strength" : "2",' + 
			'"ability" : "",' + 
			'"filename" : "celaeno_harpy",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Cockatrice",' + 
			'"id" : "36",' + 
			'"deck" : "monsters",' + 
			'"row" : "ranged",' + 
			'"strength" : "2",' + 
			'"ability" : "",' + 
			'"filename" : "cockatrice",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Crone - Brewess",' + 
			'"id" : "16",' + 
			'"deck" : "monsters",' + 
			'"row" : "close",' + 
			'"strength" : "6",' + 
			'"ability" : "muster",' + 
			'"filename" : "witch_velen",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Crone - Weavess",' + 
			'"id" : "17",' + 
			'"deck" : "monsters",' + 
			'"row" : "close",' + 
			'"strength" : "6",' + 
			'"ability" : "muster",' + 
			'"filename" : "witch_velen_1",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Crone - Whispess",' + 
			'"id" : "18",' + 
			'"deck" : "monsters",' + 
			'"row" : "close",' + 
			'"strength" : "6",' + 
			'"ability" : "muster",' + 
			'"filename" : "witch_velen_2",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Draug",' + 
			'"id" : "143",' + 
			'"deck" : "monsters",' + 
			'"row" : "close",' + 
			'"strength" : "10",' + 
			'"ability" : "hero",' + 
			'"filename" : "draug",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Earth Elemental",' + 
			'"id" : "12",' + 
			'"deck" : "monsters",' + 
			'"row" : "siege",' + 
			'"strength" : "6",' + 
			'"ability" : "",' + 
			'"filename" : "earth_elemental",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Endrega",' + 
			'"id" : "34",' + 
			'"deck" : "monsters",' + 
			'"row" : "ranged",' + 
			'"strength" : "2",' + 
			'"ability" : "",' + 
			'"filename" : "endrega",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Fiend",' + 
			'"id" : "13",' + 
			'"deck" : "monsters",' + 
			'"row" : "close",' + 
			'"strength" : "6",' + 
			'"ability" : "",' + 
			'"filename" : "fiend",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Fire Elemental",' + 
			'"id" : "14",' + 
			'"deck" : "monsters",' + 
			'"row" : "siege",' + 
			'"strength" : "6",' + 
			'"ability" : "",' + 
			'"filename" : "fire_elemental",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Foglet",' + 
			'"id" : "39",' + 
			'"deck" : "monsters",' + 
			'"row" : "close",' + 
			'"strength" : "2",' + 
			'"ability" : "",' + 
			'"filename" : "fogling",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Forktail",' + 
			'"id" : "19",' + 
			'"deck" : "monsters",' + 
			'"row" : "close",' + 
			'"strength" : "5",' + 
			'"ability" : "",' + 
			'"filename" : "forktail",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Frightener",' + 
			'"id" : "23",' + 
			'"deck" : "monsters",' + 
			'"row" : "close",' + 
			'"strength" : "5",' + 
			'"ability" : "",' + 
			'"filename" : "frightener",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Gargoyle",' + 
			'"id" : "37",' + 
			'"deck" : "monsters",' + 
			'"row" : "ranged",' + 
			'"strength" : "2",' + 
			'"ability" : "",' + 
			'"filename" : "gargoyle",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Ghoul",' + 
			'"id" : "44",' + 
			'"deck" : "monsters",' + 
			'"row" : "close",' + 
			'"strength" : "1",' + 
			'"ability" : "muster",' + 
			'"filename" : "ghoul",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Ghoul",' + 
			'"id" : "45",' + 
			'"deck" : "monsters",' + 
			'"row" : "close",' + 
			'"strength" : "1",' + 
			'"ability" : "muster",' + 
			'"filename" : "ghoul_1",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Ghoul",' + 
			'"id" : "46",' + 
			'"deck" : "monsters",' + 
			'"row" : "close",' + 
			'"strength" : "1",' + 
			'"ability" : "muster",' + 
			'"filename" : "ghoul_2",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Grave Hag",' + 
			'"id" : "25",' + 
			'"deck" : "monsters",' + 
			'"row" : "ranged",' + 
			'"strength" : "5",' + 
			'"ability" : "",' + 
			'"filename" : "gravehag",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Griffin",' + 
			'"id" : "21",' + 
			'"deck" : "monsters",' + 
			'"row" : "close",' + 
			'"strength" : "5",' + 
			'"ability" : "",' + 
			'"filename" : "gryffin",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Harpy",' + 
			'"id" : "35",' + 
			'"deck" : "monsters",' + 
			'"row" : "agile",' + 
			'"strength" : "2",' + 
			'"ability" : "",' + 
			'"filename" : "harpy",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Ice Giant",' + 
			'"id" : "24",' + 
			'"deck" : "monsters",' + 
			'"row" : "siege",' + 
			'"strength" : "5",' + 
			'"ability" : "",' + 
			'"filename" : "frost_giant",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Imlerith",' + 
			'"id" : "144",' + 
			'"deck" : "monsters",' + 
			'"row" : "close",' + 
			'"strength" : "10",' + 
			'"ability" : "hero",' + 
			'"filename" : "imlerith",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Kayran",' + 
			'"id" : "146",' + 
			'"deck" : "monsters",' + 
			'"row" : "agile",' + 
			'"strength" : "8",' + 
			'"ability" : "hero morale",' + 
			'"filename" : "kayran",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Leshen",' + 
			'"id" : "145",' + 
			'"deck" : "monsters",' + 
			'"row" : "ranged",' + 
			'"strength" : "10",' + 
			'"ability" : "hero",' + 
			'"filename" : "leshen",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Nekker",' + 
			'"id" : "41",' + 
			'"deck" : "monsters",' + 
			'"row" : "close",' + 
			'"strength" : "2",' + 
			'"ability" : "muster",' + 
			'"filename" : "nekker",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Nekker",' + 
			'"id" : "42",' + 
			'"deck" : "monsters",' + 
			'"row" : "close",' + 
			'"strength" : "2",' + 
			'"ability" : "muster",' + 
			'"filename" : "nekker_1",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Nekker",' + 
			'"id" : "43",' + 
			'"deck" : "monsters",' + 
			'"row" : "close",' + 
			'"strength" : "2",' + 
			'"ability" : "muster",' + 
			'"filename" : "nekker_2",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Plague Maiden",' + 
			'"id" : "20",' + 
			'"deck" : "monsters",' + 
			'"row" : "close",' + 
			'"strength" : "5",' + 
			'"ability" : "",' + 
			'"filename" : "mighty_maiden",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Vampire - Bruxa",' + 
			'"id" : "33",' + 
			'"deck" : "monsters",' + 
			'"row" : "close",' + 
			'"strength" : "4",' + 
			'"ability" : "muster",' + 
			'"filename" : "bruxa",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Vampire - Ekimmara",' + 
			'"id" : "30",' + 
			'"deck" : "monsters",' + 
			'"row" : "close",' + 
			'"strength" : "4",' + 
			'"ability" : "muster",' + 
			'"filename" : "ekkima",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Vampire - Fleder",' + 
			'"id" : "31",' + 
			'"deck" : "monsters",' + 
			'"row" : "close",' + 
			'"strength" : "4",' + 
			'"ability" : "muster",' + 
			'"filename" : "fleder",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Vampire - Garkain",' + 
			'"id" : "32",' + 
			'"deck" : "monsters",' + 
			'"row" : "close",' + 
			'"strength" : "4",' + 
			'"ability" : "muster",' + 
			'"filename" : "garkain",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Vampire - Katakan",' + 
			'"id" : "",' + 
			'"deck" : "monsters",' + 
			'"row" : "close",' + 
			'"strength" : "5",' + 
			'"ability" : "muster",' + 
			'"filename" : "katakan",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Werewolf",' + 
			'"id" : "22",' + 
			'"deck" : "monsters",' + 
			'"row" : "close",' + 
			'"strength" : "5",' + 
			'"ability" : "",' + 
			'"filename" : "werewolf",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Wyvern",' + 
			'"id" : "40",' + 
			'"deck" : "monsters",' + 
			'"row" : "ranged",' + 
			'"strength" : "2",' + 
			'"ability" : "",' + 
			'"filename" : "wyvern",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Toad",' + 
			'"id" : "",' + 
			'"deck" : "monsters",' + 
			'"row" : "ranged",' + 
			'"strength" : "7",' + 
			'"ability" : "scorch_r",' + 
			'"filename" : "toad",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Francesca Findabair - Queen of Dol Blathanna",' + 
			'"id" : "13",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "leader",' + 
			'"strength" : "",' + 
			'"ability" : "francesca_queen",' + 
			'"filename" : "francesca_silver",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Francesca Findabair - the Beautiful",' + 
			'"id" : "14",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "leader",' + 
			'"strength" : "",' + 
			'"ability" : "francesca_beautiful",' + 
			'"filename" : "francesca_gold",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Francesca Findabair - Daisy of the Valley",' + 
			'"id" : "15",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "leader",' + 
			'"strength" : "",' + 
			'"ability" : "francesca_daisy",' + 
			'"filename" : "francesca_copper",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Francesca Findabair - Pureblood Elf",' + 
			'"id" : "16",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "leader",' + 
			'"strength" : "",' + 
			'"ability" : "francesca_pureblood",' + 
			'"filename" : "francesca_bronze",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Francesca Findabair - Hope of the Aen Seidhe",' + 
			'"id" : "",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "leader",' + 
			'"strength" : "",' + 
			'"ability" : "francesca_hope",' + 
			'"filename" : "francesca_hope_of_the_aen_seidhe",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Ciaran aep Easnillien",' + 
			'"id" : "122",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "agile",' + 
			'"strength" : "3",' + 
			'"ability" : "",' + 
			'"filename" : "ciaran",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Barclay Els",' + 
			'"id" : "106",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "agile",' + 
			'"strength" : "6",' + 
			'"ability" : "",' + 
			'"filename" : "barclay",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Dennis Cranmer",' + 
			'"id" : "102",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "close",' + 
			'"strength" : "6",' + 
			'"ability" : "",' + 
			'"filename" : "dennis",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Dol Blathanna Archer",' + 
			'"id" : "121",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "ranged",' + 
			'"strength" : "4",' + 
			'"ability" : "",' + 
			'"filename" : "dol_archer",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Dol Blathanna Scout",' + 
			'"id" : "107",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "agile",' + 
			'"strength" : "6",' + 
			'"ability" : "",' + 
			'"filename" : "dol_infantry",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Dol Blathanna Scout",' + 
			'"id" : "108",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "agile",' + 
			'"strength" : "6",' + 
			'"ability" : "",' + 
			'"filename" : "dol_infantry_1",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Dol Blathanna Scout",' + 
			'"id" : "109",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "agile",' + 
			'"strength" : "6",' + 
			'"ability" : "",' + 
			'"filename" : "dol_infantry_2",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Dwarven Skirmisher",' + 
			'"id" : "123",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "close",' + 
			'"strength" : "3",' + 
			'"ability" : "muster",' + 
			'"filename" : "dwarf",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Dwarven Skirmisher",' + 
			'"id" : "124",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "close",' + 
			'"strength" : "3",' + 
			'"ability" : "muster",' + 
			'"filename" : "dwarf_1",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Dwarven Skirmisher",' + 
			'"id" : "125",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "close",' + 
			'"strength" : "3",' + 
			'"ability" : "muster",' + 
			'"filename" : "dwarf_2",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Eithné",' + 
			'"id" : "17",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "ranged",' + 
			'"strength" : "10",' + 
			'"ability" : "hero",' + 
			'"filename" : "eithne",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Elven Skirmisher",' + 
			'"id" : "127",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "ranged",' + 
			'"strength" : "2",' + 
			'"ability" : "muster",' + 
			'"filename" : "elf_skirmisher",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Elven Skirmisher",' + 
			'"id" : "128",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "ranged",' + 
			'"strength" : "2",' + 
			'"ability" : "muster",' + 
			'"filename" : "elf_skirmisher_1",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Elven Skirmisher",' + 
			'"id" : "129",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "ranged",' + 
			'"strength" : "2",' + 
			'"ability" : "muster",' + 
			'"filename" : "elf_skirmisher_2",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Filavandrel aen Fidhail",' + 
			'"id" : "104",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "agile",' + 
			'"strength" : "6",' + 
			'"ability" : "",' + 
			'"filename" : "filavandrel",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Havekar Healer",' + 
			'"id" : "131",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "ranged",' + 
			'"strength" : "0",' + 
			'"ability" : "medic",' + 
			'"filename" : "havekar_nurse",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Havekar Healer",' + 
			'"id" : "132",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "ranged",' + 
			'"strength" : "0",' + 
			'"ability" : "medic",' + 
			'"filename" : "havekar_nurse_1",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Havekar Healer",' + 
			'"id" : "133",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "ranged",' + 
			'"strength" : "0",' + 
			'"ability" : "medic",' + 
			'"filename" : "havekar_nurse_2",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Havekar Smuggler",' + 
			'"id" : "110",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "close",' + 
			'"strength" : "5",' + 
			'"ability" : "muster",' + 
			'"filename" : "havekar_support",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Havekar Smuggler",' + 
			'"id" : "111",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "close",' + 
			'"strength" : "5",' + 
			'"ability" : "muster",' + 
			'"filename" : "havekar_support_1",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Havekar Smuggler",' + 
			'"id" : "112",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "close",' + 
			'"strength" : "5",' + 
			'"ability" : "muster",' + 
			'"filename" : "havekar_support_2",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Ida Emean aep Sivney",' + 
			'"id" : "103",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "ranged",' + 
			'"strength" : "6",' + 
			'"ability" : "",' + 
			'"filename" : "ida",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Iorveth",' + 
			'"id" : "20",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "ranged",' + 
			'"strength" : "10",' + 
			'"ability" : "hero",' + 
			'"filename" : "iorveth",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Isengrim Faoiltiarna",' + 
			'"id" : "19",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "close",' + 
			'"strength" : "10",' + 
			'"ability" : "hero morale",' + 
			'"filename" : "isengrim",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Mahakaman Defender",' + 
			'"id" : "115",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "close",' + 
			'"strength" : "5",' + 
			'"ability" : "",' + 
			'"filename" : "mahakam",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Mahakaman Defender",' + 
			'"id" : "116",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "close",' + 
			'"strength" : "5",' + 
			'"ability" : "",' + 
			'"filename" : "mahakam_1",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Mahakaman Defender",' + 
			'"id" : "117",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "close",' + 
			'"strength" : "5",' + 
			'"ability" : "",' + 
			'"filename" : "mahakam_2",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Mahakaman Defender",' + 
			'"id" : "118",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "close",' + 
			'"strength" : "5",' + 
			'"ability" : "",' + 
			'"filename" : "mahakam_3",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Mahakaman Defender",' + 
			'"id" : "119",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "close",' + 
			'"strength" : "5",' + 
			'"ability" : "",' + 
			'"filename" : "mahakam_4",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Milva",' + 
			'"id" : "101",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "ranged",' + 
			'"strength" : "10",' + 
			'"ability" : "morale",' + 
			'"filename" : "milva",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Riordain",' + 
			'"id" : "130",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "ranged",' + 
			'"strength" : "1",' + 
			'"ability" : "",' + 
			'"filename" : "riordain",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Saesenthessis",' + 
			'"id" : "18",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "ranged",' + 
			'"strength" : "10",' + 
			'"ability" : "hero",' + 
			'"filename" : "saskia",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Toruviel",' + 
			'"id" : "126",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "ranged",' + 
			'"strength" : "2",' + 
			'"ability" : "",' + 
			'"filename" : "toruviel",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Vrihedd Brigade Recruit",' + 
			'"id" : "120",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "ranged",' + 
			'"strength" : "4",' + 
			'"ability" : "",' + 
			'"filename" : "vrihedd_cadet",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Vrihedd Brigade Veteran",' + 
			'"id" : "113",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "agile",' + 
			'"strength" : "5",' + 
			'"ability" : "",' + 
			'"filename" : "vrihedd_brigade",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Vrihedd Brigade Veteran",' + 
			'"id" : "114",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "agile",' + 
			'"strength" : "5",' + 
			'"ability" : "",' + 
			'"filename" : "vrihedd_brigade_1",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Yaevinn",' + 
			'"id" : "105",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "agile",' + 
			'"strength" : "6",' + 
			'"ability" : "",' + 
			'"filename" : "yaevinn",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Berserker",' + 
			'"id" : "",' + 
			'"deck" : "skellige",' + 
			'"row" : "close",' + 
			'"strength" : "4",' + 
			'"ability" : "berserker",' + 
			'"filename" : "berserker",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Birna Bran",' + 
			'"id" : "",' + 
			'"deck" : "skellige",' + 
			'"row" : "close",' + 
			'"strength" : "2",' + 
			'"ability" : "medic",' + 
			'"filename" : "birna",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Blueboy Lugos",' + 
			'"id" : "",' + 
			'"deck" : "skellige",' + 
			'"row" : "close",' + 
			'"strength" : "6",' + 
			'"ability" : "",' + 
			'"filename" : "blueboy",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Cerys",' + 
			'"id" : "",' + 
			'"deck" : "skellige",' + 
			'"row" : "close",' + 
			'"strength" : "10",' + 
			'"ability" : "hero muster",' + 
			'"filename" : "cerys",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Clan Brokva Archer",' + 
			'"id" : "",' + 
			'"deck" : "skellige",' + 
			'"row" : "ranged",' + 
			'"strength" : "6",' + 
			'"ability" : "",' + 
			'"filename" : "brokva_archer",' + 
			'"count" : "2"' + 
		'}, {' + 
			'"name" : "Clan Dimun Pirate",' + 
			'"id" : "",' + 
			'"deck" : "skellige",' + 
			'"row" : "ranged",' + 
			'"strength" : "6",' + 
			'"ability" : "scorch",' + 
			'"filename" : "dimun_pirate",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Cerys - Clan Drummond Shield Maiden",' + 
			'"id" : "",' + 
			'"deck" : "skellige",' + 
			'"row" : "close",' + 
			'"strength" : "4",' + 
			'"ability" : "bond",' + 
			'"filename" : "shield_maiden",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Cerys - Clan Drummond Shield Maiden",' + 
			'"id" : "",' + 
			'"deck" : "skellige",' + 
			'"row" : "close",' + 
			'"strength" : "4",' + 
			'"ability" : "bond",' + 
			'"filename" : "shield_maiden_1",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Cerys - Clan Drummond Shield Maiden",' + 
			'"id" : "",' + 
			'"deck" : "skellige",' + 
			'"row" : "close",' + 
			'"strength" : "4",' + 
			'"ability" : "bond",' + 
			'"filename" : "shield_maiden_2",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Clan Heymaey Skald",' + 
			'"id" : "",' + 
			'"deck" : "skellige",' + 
			'"row" : "close",' + 
			'"strength" : "4",' + 
			'"ability" : "",' + 
			'"filename" : "heymaey",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Clan Tordarroch Armorsmith",' + 
			'"id" : "",' + 
			'"deck" : "skellige",' + 
			'"row" : "close",' + 
			'"strength" : "4",' + 
			'"ability" : "",' + 
			'"filename" : "tordarroch",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Clan an Craite Warrior",' + 
			'"id" : "",' + 
			'"deck" : "skellige",' + 
			'"row" : "close",' + 
			'"strength" : "6",' + 
			'"ability" : "bond",' + 
			'"filename" : "craite_warrior",' + 
			'"count" : "3"' + 
		'}, {' + 
			'"name" : "Donar an Hindar",' + 
			'"id" : "",' + 
			'"deck" : "skellige",' + 
			'"row" : "close",' + 
			'"strength" : "4",' + 
			'"ability" : "",' + 
			'"filename" : "donar",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Draig Bon-Dhu",' + 
			'"id" : "",' + 
			'"deck" : "skellige",' + 
			'"row" : "siege",' + 
			'"strength" : "2",' + 
			'"ability" : "horn",' + 
			'"filename" : "draig",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Ermion",' + 
			'"id" : "",' + 
			'"deck" : "skellige",' + 
			'"row" : "ranged",' + 
			'"strength" : "8",' + 
			'"ability" : "hero mardroeme",' + 
			'"filename" : "ermion",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Hemdall",' + 
			'"id" : "",' + 
			'"deck" : "skellige",' + 
			'"row" : "close",' + 
			'"strength" : "11",' + 
			'"ability" : "hero",' + 
			'"filename" : "hemdall",' + 
			'"count" : "0"' + 
		'}, {' + 
			'"name" : "Hjalmar",' + 
			'"id" : "",' + 
			'"deck" : "skellige",' + 
			'"row" : "ranged",' + 
			'"strength" : "10",' + 
			'"ability" : "hero",' + 
			'"filename" : "hjalmar",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Holger Blackhand",' + 
			'"id" : "",' + 
			'"deck" : "skellige",' + 
			'"row" : "siege",' + 
			'"strength" : "4",' + 
			'"ability" : "",' + 
			'"filename" : "holger",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Kambi",' + 
			'"id" : "",' + 
			'"deck" : "skellige",' + 
			'"row" : "close",' + 
			'"strength" : "0",' + 
			'"ability" : "avenger_kambi",' + 
			'"filename" : "kambi",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Light Longship",' + 
			'"id" : "",' + 
			'"deck" : "skellige",' + 
			'"row" : "ranged",' + 
			'"strength" : "4",' + 
			'"ability" : "muster",' + 
			'"filename" : "light_longship",' + 
			'"count" : "3"' + 
		'}, {' + 
			'"name" : "Madman Lugos",' + 
			'"id" : "",' + 
			'"deck" : "skellige",' + 
			'"row" : "close",' + 
			'"strength" : "6",' + 
			'"ability" : "",' + 
			'"filename" : "madmad_lugos",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Mardroeme",' + 
			'"id" : "",' + 
			'"deck" : "special",' + 
			'"row" : "",' + 
			'"strength" : "",' + 
			'"ability" : "mardroeme",' + 
			'"filename" : "mardroeme",' + 
			'"count" : "3"' + 
		'}, {' + 
			'"name" : "Olaf",' + 
			'"id" : "",' + 
			'"deck" : "skellige",' + 
			'"row" : "agile",' + 
			'"strength" : "12",' + 
			'"ability" : "morale",' + 
			'"filename" : "olaf",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Skellige Storm",' + 
			'"id" : "",' + 
			'"deck" : "weather",' + 
			'"row" : "",' + 
			'"strength" : "",' + 
			'"ability" : "rain fog",' + 
			'"filename" : "storm",' + 
			'"count" : "3"' + 
		'}, {' + 
			'"name" : "Svanrige",' + 
			'"id" : "",' + 
			'"deck" : "skellige",' + 
			'"row" : "close",' + 
			'"strength" : "4",' + 
			'"ability" : "",' + 
			'"filename" : "svanrige",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "Transformed Vildkaarl",' + 
			'"id" : "",' + 
			'"deck" : "skellige",' + 
			'"row" : "close",' + 
			'"strength" : "14",' + 
			'"ability" : "morale",' + 
			'"filename" : "vildkaarl",' + 
			'"count" : "0"' + 
		'}, {' + 
			'"name" : "Transformed Young Vildkaarl",' + 
			'"id" : "",' + 
			'"deck" : "skellige",' + 
			'"row" : "ranged",' + 
			'"strength" : "8",' + 
			'"ability" : "bond",' + 
			'"filename" : "young_vildkaarl",' + 
			'"count" : "0"' + 
		'}, {' + 
			'"name" : "Udalryk",' + 
			'"id" : "",' + 
			'"deck" : "skellige",' + 
			'"row" : "close",' + 
			'"strength" : "4",' + 
			'"ability" : "",' + 
			'"filename" : "udalryk",' + 
			'"count" : "1"' + 
		'}, {' + 
			'"name" : "War Longship",' + 
			'"id" : "",' + 
			'"deck" : "skellige",' + 
			'"row" : "siege",' + 
			'"strength" : "6",' + 
			'"ability" : "bond",' + 
			'"filename" : "war_longship",' + 
			'"count" : "2"' + 
		'}, {' + 
			'"name" : "Young Berserker",' + 
			'"id" : "",' + 
			'"deck" : "skellige",' + 
			'"row" : "ranged",' + 
			'"strength" : "2",' + 
			'"ability" : "berserker",' + 
			'"filename" : "young_berserker",' + 
			'"count" : "3"' + 
		'}, {' + 
			'"name" : "Crach an Craite",' + 
			'"id" : "",' + 
			'"deck" : "skellige",' + 
			'"row" : "leader",' + 
			'"strength" : "",' + 
			'"ability" : "crach_an_craite",' + 
			'"filename" : "crach_an_craite",' + 
			'"count" : "0"' + 
		'}, {' + 
			'"name" : "King Bran",' + 
			'"id" : "",' + 
			'"deck" : "skellige",' + 
			'"row" : "leader",' + 
			'"strength" : "",' + 
			'"ability" : "king_bran",' + 
			'"filename" : "king_bran",' + 
			'"count" : "0"' + 
		'}, {' + 
			'"name" : "Schirru",' + 
			'"id" : "",' + 
			'"deck" : "scoiatael",' + 
			'"row" : "siege",' + 
			'"strength" : "8",' + 
			'"ability" : "scorch_s",' + 
			'"filename" : "schirru",' + 
			'"count" : "1"' + 
		'}' +
	']'
);
