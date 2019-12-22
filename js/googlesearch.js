var hasClicked = false;

function validateAction() {
    document.getElementById("search").addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && hasClicked == false) {
            goSearch();
            hasClicked = true;
        }
    })

    return;
}

function goSearch() {
    var search = document.getElementById("search").value;
    var url = "http://google.com#q=" + search;
    if (search != "") {
        window.open(url);
        document.getElementById("search").value = "";
    }
    return;
}