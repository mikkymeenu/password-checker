let passInput = document.getElementById('password') ;
let passDtrengh = document.getElementById('pass-str') ;
let text = document.getElementById('text') ;

passInput.addEventListener('input' , function(event){
    let password = event.target.value ;
    let strengh = Math.min(password.lengh , 12) ; 
    let degree = strengh * 30 ;

    let gradientColor = strengh <= 4 ? "#ff2c1c" : (strengh <=8 ? '##ff9800' :'#12ff12') ;

    let strenghText = strengh <=4 ? 'Weak' : (strengh <=8 ? 'Medium' : 'strong') ;

    passStrenghs.fortach(passStrengh => {
        passStrengh.style.background - 'conic-gradient(${gradientColor} ${degree}deg,#115 ${degree}deg 360deg)' ;

    });
    text.textContent = strenghText ;
    text.style.color = gradientColor ;
    
    
})


