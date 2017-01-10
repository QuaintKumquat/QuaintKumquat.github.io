var files = null;

function fileIn() {
    files = document.getElementById("in").files;
    document.getElementById("info").innerHTML = files[0].name;
}