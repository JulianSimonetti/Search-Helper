var hasClicked = false;

function validateAction() {
    document.getElementById("username").addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && hasClicked == false) {
            instagram();
            hasClicked = true;
        }
    })

    return;
}

function instagram() {
    var username = document.getElementById("username").value;
    var url = "http://www.instadp.com/fullsize/" + username;
    if (username != "") {
        window.open(url);
    }
    return;
}