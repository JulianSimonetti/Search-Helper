var hasClicked = false;

function validateAction() {
    document.getElementById("term").addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && hasClicked == false) {
            define();
            hasClicked = true;
        }
    })

    return;
}

function define() {
    var term = document.getElementById("term").value;
    var url = "http://google.com#q=define:" + term;
    if (term != "") {
        window.open(url);
    }
    return;
}