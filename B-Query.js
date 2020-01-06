//Résultats disponibles
var resultats = [
    {
        "name": "LMAO Night",
        "info": {
            "adress": "25, Rue du ku à Lyon",
            "price": 50
        }
    },
    {
        "name": "XParty",
        "info": {
            "adress": "Ionis Campus à Lyon",
            "price": 20
        }
    }
];
//Fonction appelée lorsque l'on clique sur le bouton
function Go_bQuery() {
    //Contenu du champ de recherche
    var texte = document.getElementById('Searching').value;
    //Node HTML de résultats
    var resultat = document.getElementById('rep');

    //Si la valeur du champ de recherche n'est pas bon
    if (!isAlphaNumeric(texte)) {
        resultat.innerHTML = "Veuillez entrer un texte alphanumérique";
        return; //On s'arrete la
    }

    //Pour chaque donnée de la liste, on la parcours pour trouver celui recherchée
    for (var soireeIndex = 0; soireeIndex < resultats.length; soireeIndex++) {
        var soiree = resultats[soireeIndex];
        //Si le résultat correspond a la recherche
        if (
            soiree.name.includes(texte) ||
            soiree.info.adress.includes(texte)
        ) {
            //On affiche le résultat
            resultat.innerHTML = "Name: " + soiree.name + " | Adresse: " + soiree.info.adress + " | Prix: " + soiree.info.price;
            return; //On s'arrete la
        }
    }
    //Si aucun résultat n'est trouvé
    resultat.innerHTML = "Aucune soiree trouvee.";
}

//Détermine si la valeur est alphanumérique
function isAlphaNumeric(value) {
    return /^[a-zA-Z0-9]+$/.test(value)
}