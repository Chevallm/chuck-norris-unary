var debug = false;
// Le message d'origine
var MESSAGE = readline();
if(debug)printErr("Message: " + MESSAGE);
// Valoriser debug à true pour afficher les informations de debug

var laSortieDeCeMagnifiqueProgrammeASCII = "";

// Fonction qui génère une chaine de caractère selon si le code est un 0 ou un 1 et selon son nombre
var generateUnaryString = function(type,number) {
    var output = "";    
    if(type == 1) {
        output += "0 ";
    } else if(type == 0){
        output += "00 ";
    }
    for(var i = 0; i < number; i++ ) {
        output += "0";
    }
    return output;
}

// Fonction qui encode la chaine binaire en "unary"
var encodeBinToUnary = function(bin) {
    var i = 0;
    var nombreDeCaractereParfaitementIdentiqueAuPrecedent = 0;
    var caractereActuel = bin.substring(0,1);
    var codeUnary = "";
    
    if(debug)printErr("Le mot binaire est : " + bin + " et sa taille : " + bin.length );
    
    while(i <= bin.length) {
        leCaractere = bin.substring(i,i+1);
        
        
        if(debug)printErr("nb char " + nombreDeCaractereParfaitementIdentiqueAuPrecedent);
        
        if(leCaractere != caractereActuel || i == bin.length) {
            codeUnary += generateUnaryString(caractereActuel,nombreDeCaractereParfaitementIdentiqueAuPrecedent);
            if(i != bin.length) {
                codeUnary += " ";
            }
            if(debug)printErr("Le charactere : [" + caractereActuel + "], le nombre de caractere identique [" + nombreDeCaractereParfaitementIdentiqueAuPrecedent + "]");
            nombreDeCaractereParfaitementIdentiqueAuPrecedent = 0;
            caractereActuel = leCaractere;
            
            
        }
        nombreDeCaractereParfaitementIdentiqueAuPrecedent++;
        i++;
        
    
    }
    if(debug)printErr("Le code unary de " + bin + " = " + codeUnary);
    return codeUnary;
    
}

// Fonction qui corrige le comportement de l'objet Number qui enlève les 0 avant (ex: 0110 == 110)
var ajouterLesZeros = function(bin) {
    var leBinaire = bin.toString(2);
    var nombreDeZeroARajouter = 7 - leBinaire.length;
    var binAvecLesZero = "";
    for(var i = 0; i < nombreDeZeroARajouter; i++) {
     binAvecLesZero += "0";   
    }
    binAvecLesZero += leBinaire;
    if(debug)printErr("bin avec les 0 : " + binAvecLesZero);
    return binAvecLesZero;
}

// Tampom mémoire qui stocke les caractères de la chaine
var leCode = "";

//Pour chaque caractère
for (var i = 0; i < MESSAGE.length; i++) {
    if(debug)printErr("Caractère: " + i + " = " + MESSAGE.substring(i,i+1) + " (bin = " + MESSAGE.substring(i,i+1).charCodeAt(0).toString(2)) + ")" ;   
    // Ajouter le caractère (en binaire) à la chaine en passant par la fonction ajouterLesZeros
    leCode += ajouterLesZeros(MESSAGE.substring(i,i+1).charCodeAt(0));       
}

// Valorisation de la chaine sérialisée finale (en "unary")
laSortieDeCeMagnifiqueProgrammeASCII += encodeBinToUnary(leCode);
print(laSortieDeCeMagnifiqueProgrammeASCII);