var hasClicked = false;

//function validateActionStrict() {
function validateActionStrict(field) {
    document.getElementById(field).addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && hasClicked == false) {
            goSearchStrict();
            hasClicked = true;
        }
    });

    return;
}

//function validateActionRelative() {
//    document.getElementById("relative").addEventListener('keydown', (e) => {
//        if (e.key === 'Enter' && hasClicked == false) {
//            goSearchStrict();
//            hasClicked = true;
//        }
//    });

//    return;
//}

//function validateActionSite() {
//    document.getElementById("site").addEventListener('keydown', (e) => {
//        if (e.key === 'Enter' && hasClicked == false) {
//            goSearchStrict();
//            hasClicked = true;
//        }
//    });

//    return;
//}

function goSearchStrict() {
    const strict = document.getElementById("strict").value;
    const excluded = document.getElementById("excluded").value;
    const relative = document.getElementById("relative").value;
    const site = document.getElementById("site").value;
    if ([strict, excluded, relative, site].some(valeur => valeur != "") == false) {return;}
    var query = "";
    var uQuery = "";

    var sTerms = strict.substring(strict.indexOf(/[^, ]+/g) + 1).split(/(?:,+[ ]*)+/g);
    var sQuery = "";
    sTerms.forEach(sTerm => {
        sQuery += '\"' + sTerm + '\"' + ' ';
    });

    var eTerms = excluded.substring(excluded.indexOf(/[^, ]+/g) + 1).split(/(?: +|[,]+)+/g);
    var eQuery = "";
    if (eTerms.some(e => (/.+/g).test(e)) == true) {
        eTerms.forEach(eTerm => {
            eQuery += '-' + eTerm + ' ';
        });
    }

    if (eQuery != "") {
        uQuery += eQuery;
    }

    if (site != "") {
        uQuery += "site:" + site;
    }

    query = ((sQuery + relative).trim() + ' ' + uQuery).trim();
 
    var url = "https://google.com#q=" + query.replace("\"\"", "");
    window.open(url);
    return;
}