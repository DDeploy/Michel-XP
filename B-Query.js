//Résultats disponibles
var resultats = [
    {
        "id": "1",
        "name": "LMAO Night",
        "info": {
            "adress": "25, Rue du ku à Lyon",
            "price": "50€"
        }
    },
    {
        "id": "2",
        "name": "XParty",
        "info": {
            "adress": "Ionis Campus à Lyon",
            "price": "20€"
        }
    }
];

let noResultTrue;
let pre_display;

//Fonction qui masque le cadre de résultat
function loading () {
    pre_display = document.getElementById("item-res").style.display;
    document.getElementById("item-res").style.display = "none";
}
//Fonction appelée lorsque l'on clique sur le bouton
function Go_bQuery() {
    //Contenu du champ de recherche
    var noResult = document.getElementById('ifNo');
    var texte = document.getElementById('Searching').value;
    //Node HTML de résultats
    //var resultat = document.getElementById('rep');
    var hName = document.getElementById('hName');
    var hAdress = document.getElementById('hAdress');
    var hPrice = document.getElementById('hPrice');

    //Si la valeur du champ de recherche n'est pas bon
    if (!isAlphaNumeric(texte)) {
        texte.innerHTML = "Veuillez entrer un texte alphanumérique";
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
            //enleve le message du résulat précedent
            if (noResultTrue)
            noResult.innerHTML = "";
            //On affiche le résultat
            //resultat.innerHTML = "Name: " + soiree.name + " | Adresse: " + soiree.info.adress + " | Prix: " + soiree.info.price;
            document.getElementById("item-res").style.display = pre_display;
            hName.innerHTML = soiree.name;
            hAdress.innerHTML = soiree.info.adress;
            hPrice.innerHTML = soiree.info.price;
            return; //On s'arrete la
        }
    }
    //Si aucun résultat n'est trouvé
    noResult.innerHTML = "Aucune soiree trouvée.";
    noResultTrue = true;
}

//Détermine si la valeur est alphanumérique
function isAlphaNumeric(value) {
    return /^[a-zA-Z0-9]+$/.test(value)
}