const boton = document.getElementById("boton");

const mensaje = document.getElementById("mensaje");


boton.addEventListener("click",()=>{


mensaje.innerHTML=`

Mi hermosa <b>Danita</b> ❤️<br><br>

Hoy quiero aprovechar este día para decirte lo importante que eres para mí.<br><br>

Gracias, mi amor, por estar conmigo aun cuando no he tenido nada. Nunca olvidaré que has permanecido a mi lado en los momentos difíciles y que has compartido conmigo tanto las alegrías como los desafíos.<br><br>

Te mereces todo lo bonito de este mundo, y trabajaré cada día para poder dártelo.<br><br>

Gracias por tu paciencia, por tu cariño y por creer en mí.<br><br>

❤️ Feliz Día de la Novia ❤️<br><br>

Te amo muchísimo y espero seguir celebrando muchos momentos como este a tu lado. 💕

`;


boton.style.display="none";


crearCorazones();


});



function crearCorazones(){


for(let i=0;i<30;i++){


let corazon=document.createElement("div");

corazon.className="corazon";

corazon.innerHTML="❤️";


corazon.style.left=Math.random()*100+"vw";

corazon.style.bottom="-50px";

corazon.style.fontSize=(20+Math.random()*35)+"px";

corazon.style.animationDuration=(3+Math.random()*5)+"s";


document.body.appendChild(corazon);


setTimeout(()=>{

corazon.remove();

},7000);


}


}
