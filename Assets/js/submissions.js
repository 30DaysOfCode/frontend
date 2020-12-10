let tableRow = document.querySelector('#submitcontent');
let dayInfo = document.getElementById('dayz').innerText;
let trackInfo = document.getElementById('trackz').innerText;
let levelInfo = document.getElementById('level').innerText;
let urlInfo = document.getElementById('url').innerHTML;
let pointInfo = document.getElementById('point').innerText;
let tableLength = document.querySelector('tbody').length;


function rowfunction(){
    let table = document.querySelector('tbody').insertRow(1);
    let day = table.insertCell(0);
    let track = table.insertCell(1);
    let level = table.insertCell(2);
    let url = table.insertCell(3);
    let points = table.insertCell(4);
    console.log(levelInfo);
    table.id = "submitcontent";
    day.innerHTML = parseInt(dayInfo) + 1;
    track.innerHTML = trackInfo;
    level.innerHTML = levelInfo;
    url.innerHTML = urlInfo;
    url.id = "url";
    points.innerHTML = pointInfo;
}
rowfunction();
