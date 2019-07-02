$(function(){
    $('.menu-toogle').click(function(){
        $('.nav').slideToggle();
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
        let ip = JSON.stringify(data.ip);
        ipEl.value = JSON.parse(ip);
    });

    $('#download').click(function(e){
        let email =  document.querySelector('[name=email]');
        let nome =  document.querySelector('[name=name]');
        let btn = document.querySelector('#form');
       if(email.value == '' && nome.value == ''){
           alert('Formulário vazio');
           e.preventDefault();
       }else{
        btn.trigger('submit');
       }
    }); 




$('button[type="submit"]').click(function(){
    $("#form").submit(function(e) {        
        let $form = $(this);
        $.post($form.attr("action"), $form.serialize()).then(function() {
           let email =  document.querySelector('[name=email]');
           let nome =  document.querySelector('[name=name]');
           let msg =  document.querySelector('.msg');
           email.value = '';
           nome.value = '';
            msg.innerHTML = '<p class="msg-sucesso">Enviado com sucesso </p>'
        });
      });
});
    


});




