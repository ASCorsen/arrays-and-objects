// ==========================================
// 1. Declareer een variabele en sla daar een array met vier jaartallen (zoals 2021) in op. Log dit in de terminal.
// ==========================================
const yearsCounter = [2021, 2020, 2019, 2018];
console.log(yearsCounter[2])

// ==========================================
// 2. Declareer een variabele en sla daar een array met drie van jouw hobbies (zoals muziek luisteren en koekjes eten) in op. Log dit in de terminal.
// ==========================================

const hobbyDrew = ["Gamen", "Fitness", "Ben & Jerry's!"];
console.log("Wat zijn mijn hobby's? : " + hobbyDrew)

// ==========================================
// 3a. Declareer een variabele met daarin een array met de waardes 3, 4, 5, 7 en 2
// 3b. Zorg er nu voor dat je de eerste waarde uit die array in de terminal logt             // geeft 3
// ==========================================
const valueChart = [3, 4, 5, 7, 2];
console.log("3b. Zorg er nu voor dat je de eerste waarde uit die array in de terminal logt : " + valueChart[0])

// ==========================================
// 4a. Declareer een variabele met daarin een array met de waardes groen, geel, rood, paars, blauw en oranje.
// Nu gaan we de waardes weer aanspreken!
// 4b. Zorg ervoor dat je de vijfde waarde uit bovenstaande array in de terminal logt       // geeft blauw
// 4c. Zorg ervoor dat je de tweede waarde uit bovenstaande array in de terminal logt       // geeft geel
// ==========================================

const colorPalet = ["Groen", "Geel","Rood", "Paars","Blauw","Oranje"];
console.log(colorPalet[5])
console.log(colorPalet[2])
console.log("Nu alle 2 laten zien : " + colorPalet[5] + " en " + colorPalet[2]);

// ==========================================
// 5a. Declareer een variabele met daarin een array met de waardes 21, 22, 23, 25, 25 en log dit in de terminal
// 5b. Overschrijf één van de items in de array dusdanig dat de cijferreeks netjes doorloopt (je mag de declaratie op de vorige regel niet aanpassen).
// 5c. Log de array in de terminal                                                          // geeft [ 21, 22, 23, 24, 25 ]
// ==========================================
const valueChart2 = [21, 22, 23, 25, 25];
valueChart2[3] = 24;
console.log("5c. Log de array in de terminal : "+ valueChart2)

// ==========================================
// 6a. Declareer een variabele met daarin een array met de waardes bladerdeeg, knoflook, spinazie
// 6b. Overschrijf daarna de waarde bladerdeeg met lasagne bladen (je mag de declaratie op de vorige regel niet aanpassen).
// 6c. Log de de array in de terminal                                                       // geeft [ 'lasagne bladen', 'knoflook', 'spinazie' ]
// 6d. Log de lengte van de array in de terminal                                            // geeft 3
// ==========================================

const recipe = ["bladerdeeg", "knoflook"," spinazie"]
recipe[0] = "lasagne bladen";
console.log("Gerecht ingerdienten:  " + recipe)
const recipeIngredients = recipe.length
console.log("Aantal ingerdienten: " + recipeIngredients)