function Go_BQuery() {
    var q = document.getElementById('Searching').value;
    if (q == "*") {
        document.getElementById("rep").innerHTML = resultat.soiree[0].name;
    }
}

var resultat = {
    "soiree":[ 
        {"name":"LMAO Night", "info":[
            {"adress":"25, Rue du ku à Lyon"},
            {"price":50}
        ]}
        {"name":"XParty", "info":[
            {"adress":"Ionis Campus à Lyon"},
            {"price":20}
        ]}
    ]
} 
//     "Crepes Party", "Chez Vincent"]}

/*var q = document.getElementById('Searching').value;
var v = "PTDR";
document.getElementById("rep").innerHTML = q;*/