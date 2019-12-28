function Go_BQuery() {
    var q = document.getElementById('Searching').value;
    if (!(q >= 48 && q <= 57) &&
        !(q >= 65 && q <= 90) &&
        !(q >= 97 && 122)) {
        if (q == "")
            document.getElementById("rep").innerHTML = "Error, you have to write an input please.";
        else if (resultat.soiree[0].name.includes(q)) {
            document.getElementById("rep").innerHTML = resultat.soiree[0].name;
        } else if (resultat.soiree[1].name.includes(q)) {
            document.getElementById("rep").innerHTML = resultat.soiree[1].name;
        } else if (resultat.soiree[0].info[0].adress.includes(q)) {
            document.getElementById("rep").innerHTML = resultat.soiree[0].name[0].adress;
        } else {
            document.getElementById("rep").innerHTML = 'Error 404, \'' + q + '\' n\'a pas été trouvé';
        }
    }
}

var resultat = {
    "soiree": [{
            "name": "LMAO Night",
            "info": [{
                    "adress": "25, Rue du ku à Lyon"
                },
                {
                    "price": 50
                }
            ]
        },
        {
            "name": "XParty",
            "info": [{
                    "adress": "Ionis Campus à Lyon"
                },
                {
                    "price": 20
                }
            ]
        }
    ]
}
//     "Crepes Party", "Chez Vincent"]}

/*var q = document.getElementById('Searching').value;
var v = "PTDR";
document.getElementById("rep").innerHTML = q;*/