

var StringJSON = readJSON('portfolioBoxs.json');
var parseJSON = JSON.parse(StringJSON);
var str = "";
for(var i = 0; i < parseJSON.length; i++) {
    
    str += "<div class='box'>";
    str += "<a href='" + parseJSON[i].path + "'>";
    str += "<h1>" + parseJSON[i].title + "</h1>";
    str += "<h3>" + parseJSON[i].description + "</h3>";
    str += "</a>";
    str += "</div>";
}
document.getElementById("g").innerHTML = str;




function readJSON(file) {
    var request = new XMLHttpRequest();
    request.open('GET', file, false);
    request.send(null);
    if (request.status == 200)
        return request.responseText;
};