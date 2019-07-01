$(function(){
    $('.menu-toogle').click(function(){
        $('.nav').slideToggle();
    });

});

let data = new Date();
let adate = data.getDate()+'/'+(data.getMonth()+1)+'/'+data.getFullYear()+' - '+data.getHours()+':'+data.getMinutes();
let dataEnd = data.toLocaleDateString('pt-br');
let horaEnd = data.toLocaleTimeString();

let dataEl = document.querySelector("#data");
dataEl.value = dataEnd+' - '+horaEnd;



let ipEl = document.querySelector('#ip');
$.getJSON('https://ipapi.co/json/', function(data) {
    console.log(JSON.stringify(data, null, 2));
    var ip = JSON.stringify(data.ip);
    ipEl.value = JSON.parse(ip);
    console.log(typeof(JSON.parse(ip)))
});

