var hasClicked = false;

function validateActionStrict() {
    document.getElementById("strict").addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && hasClicked == false) {
            goSearchStrict();
            hasClicked = true;
        }
    });

    return;
}

function validateActionRelative() {
    document.getElementById("relative").addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && hasClicked == false) {
            goSearchStrict();
            hasClicked = true;
        }
    });

    return;
}

function validateActionSite() {
    document.getElementById("site").addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && hasClicked == false) {
            goSearchStrict();
            hasClicked = true;
        }
    });

    return;
}

function goSearchStrict() {
    const strict = document.getElementById("strict").value;
    const relative = document.getElementById("relative").value;
    const site = document.getElementById("site").value;
    var query = "";
    var uQuery = "";

    var sTerms = strict.split(/(?:,+[ ]*)+/g);
    var sQuery = "";
    sTerms.forEach(term => {
        sQuery += '\"' + term + '\"' + ' ';
    });

    if (site != "") {
        uQuery = "site:" + site;
    }
    query = ((sQuery + relative).trim() + ' ' + uQuery).trim();
 
    var url = "https://google.com#q=" + query;
    window.open(url);
    return;
}