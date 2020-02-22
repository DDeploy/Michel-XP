//Résultats disponibles
let db = [
    {
        "id": "1",
        "name": "LMAO Night",
        "_name": "lmao night",
        "info": {
            "adress": "25, Rue du ku à Lyon",
            "_adress": "25, rue du ku à lyon",
            "price": "50€",
            "description": "C'est incroyable",
        },
    },
    {
        "id": "2",
        "name": "Xparty",
        "_name": "xparty",
        "info": {
            "adress": "Ionis Campus à Lyon",
            "_adress": "ionis campus à lyon",
            "price": "20€",
            "description": "Soirée de ouf",
        },
    },
    {
        "id": "3",
        "name": "Soirée cuir et moustache",
        "_name": "soirée cuir & moustache",
        "info": {
            "adress": "25, Rue de la levrette à Lyon",
            "_adress": "25, rue de la levrette à lyon",
            "price": "5300€",
            "description": "On veut du cuir, de la moustache du cuir et moustache",
        },
    },
    {
            "id": "4",
            "name": "Soirée jacquie & michel",
            "_name": "Soirée Jacquie & Michel",
            "info": {
                "adress": "11 rue du professeur paul sysley 69003 Lyon",
                "_adress": "11 rue du professeur paul sysley 69003 Lyon",
                "price": "C'est gratuit Michel paie toutes les consomations",
                "description": "Non vous ne revez pas, il ne manquera plus que jacquie et la team sera complète",
            },
        },
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
    //Contenu du champ de recherche et node d'éléments HTML
    var errorEmoji = document
    var noResult = document.getElementById('ifNo');
    var textContainer = document.getElementById('Searching');
    var texte = textContainer.value.toLowerCase();
    //Node HTML de résultats
    var hName = document.getElementById('hName');
    var hAdress = document.getElementById('hAdress');
    var hPrice = document.getElementById('hPrice');

    //Si la valeur du champ de recherche n'est pas bon
    if (!isAlphaNumeric(texte)) {
        console.log("IsNotAlphanumeric");
        noResult.innerHTML = `"${textContainer.value}" ne fonctionne pas... Veuillez entrer un texte alphanumérique !`;
        return; //On s'arrete la
    }
    
    //Pour chaque donnée de la liste, on la parcours pour trouver celui recherchée
    for (var soireeIndex = 0; soireeIndex < db.length; soireeIndex++) {
        var soiree = db[soireeIndex];
        //Si le résultat correspond a la recherche
        if (
            soiree._name.includes(texte) ||
            soiree.info._adress.includes(texte)
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
    errorEmoji.innerHTML = "Aucune soiree trouvée.";
    noResult.innerHTML = "Aucune soiree trouvée.";
    document.getElementById("item-res").style.display = "none";
    noResultTrue = true;
}

//Détermine si la valeur est alphanumérique
function isAlphaNumeric(value) {
    return /^[a-zA-Z0-9\s']+$/.test(value)
}