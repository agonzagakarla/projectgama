$(function(){
    $('.menu-toogle').click(function(){
        $('.nav').slideToggle();
    });

    $("#form").submit(function(e) {
        e.preventDefault();
      
        var $form = $(this);
        $.post($form.attr("action"), $form.serialize()).then(function() {
          alert("Thank you!");
        });
      });
});

let data = new Date();
//let adate = data.getDate()+'/'+(data.getMonth()+1)+'/'+data.getFullYear()+' - '+data.getHours()+':'+data.getMinutes();
let dataEnd = data.toLocaleDateString('pt-br');
let horaEnd = data.toLocaleTimeString('pt-br');

let dataEl = document.querySelector("#data");
dataEl.value = dataEnd+' - '+horaEnd;



let ipEl = document.querySelector('#ip');
$.getJSON('https://ipapi.co/json/', function(data) {
    console.log(JSON.stringify(data, null, 2));
    var ip = JSON.stringify(data.ip);
    ipEl.value = JSON.parse(ip);
});


