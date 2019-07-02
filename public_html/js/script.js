$(function(){
    $('.menu-toogle').click(function(){
        $('.nav').slideToggle();
    });
/** Pegando data */
    let data = new Date();
    //let adate = data.getDate()+'/'+(data.getMonth()+1)+'/'+data.getFullYear()+' - '+data.getHours()+':'+data.getMinutes();
    let dataEnd = data.toLocaleDateString('pt-br');
    let horaEnd = data.toLocaleTimeString('pt-br');

    let dataEl = document.querySelector("#data");
    dataEl.value = dataEnd+' - '+horaEnd;

/** pegando Ip */

    let ipEl = document.querySelector('#ip');
    $.getJSON('https://ipapi.co/json/', function(data) {
        console.log(JSON.stringify(data, null, 2));
        let ip = JSON.stringify(data.ip);
        ipEl.value = JSON.parse(ip);
    });

    /** não deixa o usuário baixar sem enviar dados */
    $('#download').click(function(e){
        let email =  document.querySelector('[name=email]');
        let nome =  document.querySelector('[name=name]');
        let btn = document.querySelector('#form button');
       if(email.value == '' && nome.value == ''){
           alert('Formulário vazio');
           e.preventDefault();
       }else{
        //btn.submit();
       }
    }); 

/** enviando form */
    
    $('.form-footer').submit(function(e) {
        e.preventDefault();
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




