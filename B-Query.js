//Résultats disponibles
let db = [
    {
        "id": "1",
        "name": "LMAO Night",
        "_name": "lmao night",
        "info": {
            "adress": "25, Rue du ku à Lyon",
            "price": "50€",
        },
    },
    {
        "id": "2",
        "name": "Xparty",
        "_name": "xparty",
        "info": {
            "adress": "Ionis Campus à Lyon",
            "price": "20€",
        },
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
    var textContainer = document.getElementById('Searching');
    var texte = textContainer.value;
    //Node HTML de résultats
    //var resultat = document.getElementById('rep');
    var hName = document.getElementById('hName');
    var hAdress = document.getElementById('hAdress');
    var hPrice = document.getElementById('hPrice');

    //Si la valeur du champ de recherche n'est pas bon
    if (!isAlphaNumeric(texte)) {
        console.log("IsNotAlphanumeric");
        textContainer.value = "Veuillez entrer un texte alphanumérique";
        return; //On s'arrete la
    }
    
    textContainer.value.toLowerCase();
    //Pour chaque donnée de la liste, on la parcours pour trouver celui recherchée
    for (var soireeIndex = 0; soireeIndex < db.length; soireeIndex++) {
        var soiree = db[soireeIndex];
        //Si le résultat correspond a la recherche
        if (
            soiree._name.includes(texte) ||
            soiree.info.adress.includes(texte)
        ) {
            //enleve le message du résulat précedent
            if (noResultTrue)
                noResult.innerHTML = "";
            noResultTrue = false;
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
    document.getElementById("item-res").style.display = "none";
    noResultTrue = true;
}

//Détermine si la valeur est alphanumérique
function isAlphaNumeric(value) {
    return /^[a-zA-Z0-9]+$/.test(value)
}