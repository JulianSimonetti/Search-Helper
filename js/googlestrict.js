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

function goSearchStrict() {
    const strict = document.getElementById("strict").value;
    const relative = document.getElementById("relative").value;
    var query = "";

    var sTerms = strict.split(/(?:,+[ ]*)+/g);
    var sQuery = "";
    sTerms.forEach(term => {
        sQuery += '\"' + term + '\"' + ' ';
    });
    query = (sQuery + relative).trim();
 
    var url = "https://google.com#q=" + query;
    window.open(url);
    return;
}