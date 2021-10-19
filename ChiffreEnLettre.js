const DatanumberForAnappropriateFunction = (number) => {
    
    let TheNumberButString = ""+number
    let lengths = TheNumberButString.length
    let EnLettre = ""
    if (lengths == 1)
    EnLettre = FonctionPourLesUnites (number)
    
    if (lengths == 2)
    EnLettre = FonctionPourLesDeuxChiffres (number)

    if (lengths == 3)
    EnLettre = FonctionPourLesTroisChiffres (number)

    return EnLettre
}

const FonctionPourLesUnites = (data) => {
    
    const unites = ["Zero","un","deux","trois","quatre","cinq","six","sept","huit","neuf"]
    
    return unites[data]
    
    // let chiffre = ""+data
    // let lettre = ""
    // switch (chiffre[0]) {
    //     case "0":
    //         lettre = "Zero"
    //         break;

    //     case "1":
    //         lettre = "un"
    //         break;
        
    //     case "2":
    //         lettre = "deux"
    //         break;

    //     case "3":
    //         lettre = "trois"
    //         break;

    //     case "4":
    //         lettre = "quatre"
    //         break;

    //     case "5":
    //         lettre = "cinq"
    //         break;

    //     case "6":
    //         lettre = "six"
    //         break;

    //     case "7":
    //         lettre = "sept"
    //         break;

    //     case "8":
    //         lettre = "huit"
    //         break;

    //     case "9":
    //         lettre = "neuf"
    //         break;

    //     default:
    //         break;
    // }

    // return lettre 


    
}

 const FonctionPourLesDeuxChiffres  = (data) => {

    let chiffre = ""+data //afaka atao .toString
    let chiffreComponment = ""
    let lettre = ""
    let dizaines = ["dix","onze","douze","treize","quatorze","quinze","seize","dix-sept","dix-huit","diz-neuf"]

    if (chiffre[0] == "1"){
        return dizaines[Number(chiffre[1])]
    }
    
    switch (chiffre[0]) {

        case "2":
            lettre = "vingt"
            break;
        
        case "3":
            lettre = "trente"
            break;

        case "4":
            lettre = "quarante"
            break;

        case "5":
            lettre = "cinquante"
            break;

        case "6":
            lettre = "soisante"
            break;

        case "7":
                lettre = "soisante dix"
            break;

        case "8":
            lettre = "quatre vingt" 
            break;

        case "9":    
            lettre = "quatre vingt dix"
            break;

        default:
            break;
    }

    if (chiffre[1] != "0"){
        chiffreComponment = FonctionPourLesUnites(chiffre[1])

        if (chiffreComponment == "un")
            chiffreComponment = " et un"

        else
            chiffreComponment = "-" + chiffreComponment
    }

    if (chiffre[0] == "7"){
        if (chiffre[1] == "1"){
            return "soisante et onze"
        }
        return "soisante " + dizaines[Number(chiffre[1])]
    }
    if (chiffre[0] == "9"){
        return "quatre-ving " + dizaines[Number(chiffre[1])]
    }

    return lettre + "" + chiffreComponment

}

const FonctionPourLesTroisChiffres = (data) => {

    let chiffre = ""+data
    let lettre = ""
    let LesDeuxDernierChiffres = ""+ chiffre[1]+ chiffre[2]

    if (chiffre[0] == "1"){

        if (LesDeuxDernierChiffres == "00"){

            lettre ="cent"
        }
        else if (chiffre[1] == "0"){

            lettre = "cent "+ FonctionPourLesUnites (chiffre[2])
        }
        	else{
                
                lettre = "cent " + FonctionPourLesDeuxChiffres(LesDeuxDernierChiffres)
            }
    }
    else{
        
        if (LesDeuxDernierChiffres == "00"){

            lettre = FonctionPourLesUnites(chiffre[0]) + " cent"
        }
        else if (chiffre[1] == "0"){

            lettre = FonctionPourLesUnites(chiffre[0]) + " cent "+ FonctionPourLesUnites (chiffre[2])
        }
        	else{
                
                lettre = FonctionPourLesUnites(chiffre[0]) + " cent " + FonctionPourLesDeuxChiffres(LesDeuxDernierChiffres)
            }
    }

    return lettre
}



var ito = DatanumberForAnappropriateFunction(199)
console.log(ito)