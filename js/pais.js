var inputNumber = document.getElementById("number");

function init() {
    
    //var imgFlag = document.getElementById("peruFlag");
    var imgFlag = $('#peruFlag');
    
    var select = localStorage.getItem('country_select'); 
    var country_url = paises[select].imageURL;
    
   // imgFlag.src = country_url;
    imgFlag.attr('src', 'img/am.png');
    
    
    
    
    //var button = document.getElementById("next");
    var button = $('#next');
    
    
    //button.addEventListener('click',onButtonClick);
   // button.on('click',onButtonClick);
    
}

function onButtonClick() {
    
    localStorage.setItem('Number', inputNumber.value);
    
    //var mensajeNumber = document.getElementById("mensajeNumber");
    var mensajeNumber = $('#mensajeNumber');
    
    
    if(inputNumber.value == '') {
        
        mensajeNumber.html("<br><h5 class='text-center' style='color:#FF1493';>Debes escribir tu número telefónico</h5>")
        
    } else {
        mensajeNumber.empty ();
        onCode();
        //location.href = 'signup.html';
    }    
}

function onCode() {

    var lab = "LAB-";
    var aleatorio = Math.floor((Math.random()*999)+100);
    var concat = (lab += aleatorio);
    alert("Tu código de usuario es : " + concat);
}

function validateNumber(_evt){
    
    number = window.event.keyCode;


    if((number>=48 && number<=57)|| number==8 || number==32){
            
    } else {
        
        _evt.preventDefault();
    }     
} 

