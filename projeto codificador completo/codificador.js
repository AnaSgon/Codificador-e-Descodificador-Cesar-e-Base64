

var encrypt = document.getElementById("encrypted")
var descripted = document.getElementById("descripted")
var i = document.getElementById("i");
   i = i.value;

       /*if(i > 1) {
           i--;
           document.getElementById("i").innerHTML = i;
       }

       if(i < 25) {
           i++;
           document.getElementById("i").innerHTML = i;
       }*/




   function encryptSentence() {

      var sentence = document.getElementById("sentence").value.toUpperCase();
      var result = "";
      var values = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
      var i = document.getElementById("i");
      i = i.value;
      if(i > 1 <25) { i++;}
       
       
      

        for(a = 0; a <sentence.length; a++) {

         PosicaoLetra = sentence.charCodeAt(a) - 64;
         LetraDeslocada = (PosicaoLetra + i) % 26;
         LetraDeslocada = LetraDeslocada == 0 ? 26 : LetraDeslocada;
          // LetraDeslocada += 64;//
          result += values[LetraDeslocada-2];

         document.getElementById("encrypted").innerText = result;

        }

  

    }

   function descriptSentence() {

      let sentence = document.getElementById("sentence").value.toUpperCase();
      let result = "";
      let values = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
      let i = document.getElementById("i");
      i = i.value;
      if(i > 1 ) { i++;}
     
     
       
       
            

        for(a = 0; a <sentence.length; a++) {

         PosicaoLetra = sentence.charCodeAt(a) - 64;
         LetraDeslocada = (PosicaoLetra + i) % 26;
         LetraDeslocada = LetraDeslocada == 0 ? 26 : LetraDeslocada;
          // LetraDeslocada += 64;//
          result += values[LetraDeslocada-i-1];

         document.getElementById("descripted").innerText = result;

        }
   }

  /*String teste = “teste, de, frase”;
   //Usando split
   String[] testeArray = teste.split( “,” );*/
   // Uma string qualquer

   function codbase(){

       var string = document.getElementById("texto")
       string = texto.value

       var emBase64 = btoa(string)
       console.log(emBase64)

       var deBase64 = atob(emBase64)
       console.log(deBase64)

       document.getElementById("emcode").innerText = emBase64;


   }

   function decodbase(){

      var string = document.getElementById("texto")
      string = texto.value

      var emBase64 = btoa(string)
      console.log(emBase64)

      var deBase64 = atob(emBase64)
      console.log(deBase64)

       document.getElementById("decode").innerText = deBase64;


     }