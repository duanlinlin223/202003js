let pro = document.getElementById("province");
let city = document.getElementById("city");
let coun = document.getElementById("country");
let data;
let xhr = new XMLHttpRequest();
xhr.open("get","./json/regionData.json",false);
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)){
        data = JSON.parse(xhr.responseText)
    }
}
xhr.send();
// console.log(data)
function bindHtml(){
    
}