var suggeri;
//var divReco = document.querySelector('.divRecomendacao');


var listaImagens = ["image/product-5.png","image/product-6.png","image/product-7.png", "image/product-8.png",
                    "image/product-1.png","image/product-2.png", "image/product-3.png","image/product-4.png",
                    "image/product-9.png","image/product-10.png","image/product-11.png","image/product-12.png",
                    "image/product-13.png","image/product-14.png","image/product-15.png","image/product-16.png"
                  ];

var listaValores = ["R$971","R$502", "R$58","R$888","R$702",
                    "R$158","R$742","R$202","R$602","R$100",
                    "R$200","R$200","R$45","R$25","R$15","R$78"
];

const urlSuggeri0 = 'https://suggeri.anvil.app/_/api/predict_item/eadb9555/A3JM6GV9MNOF9X';
const urlSuggeri1 = 'https://cd7jwv2auk4wzkrn.anvil.app/_/private_api/NAUJWAV2RPBGYXSGAHBTFQXI/predict_item/fca413d5/';
const urlSuggeri = 'https://suggeri.anvil.app/_/api/predict_item/2dcf0d2b/';

function getNr() {
  return  Math.floor(Math.random() *  16);
}

function MontaListaProduto (usuario,i) {
  lista = '';
    document.getElementById("p1").innerText = "Produto   " + suggeri[0];
    document.getElementById("v1").innerText = listaValores[getNr()];
    document.getElementById("i1").src = listaImagens[getNr()];

    document.getElementById("p2").innerText = "Produto   " + suggeri[1];
    document.getElementById("v2").innerText = listaValores[getNr()];
    document.getElementById("i2").src = listaImagens[getNr()];

    document.getElementById("p3").innerText = "Produto   " + suggeri[2];
    document.getElementById("v3").innerText = listaValores[getNr()];
    document.getElementById("i3").src = listaImagens[getNr()];

    document.getElementById("p4").innerText = "Produto   " + suggeri[3];
    document.getElementById("v4").innerText = listaValores[getNr()];
    document.getElementById("i4").src = listaImagens[getNr()];

    document.getElementById("p5").innerText = "Produto   " + suggeri[4];
    document.getElementById("v5").innerText = listaValores[getNr()];
    document.getElementById("i5").src = listaImagens[getNr()];
    document.getElementById("rec").innerText = "Recomendações do Usuário " +usuario;

  return lista;
}

function MontaListaProduto2 (usuario,i){
  var a;
  var b=1;
  if (i==1) {
    a=0;
  }
  else if (i==2){
    a=5;
  } else {
    a=10;
  }
  for(var ind=0;ind<5;ind++){
    document.getElementById("p"+b).innerText = "Produto   " + suggeri[ind];
    document.getElementById("v"+b).innerText = listaValores[a];
    document.getElementById("i"+b).src = listaImagens[a];
    a++;
    b++;
  }
  document.getElementById("rec").innerText = "Recomendações do Usuário " +i;
}


function obterRecomendacao(usuario,i){
  document.getElementsByTagName('input')[i-1].value = 'processando..';
  //Obter dados da api
  fetch(urlSuggeri + usuario)
    .then(response => response.json())
    .then(data => {
      suggeri = data;
     console.log(suggeri);
     if(suggeri == null) {
       //informar erro
       console.log("suggeri está nulo");
     }else{
       //divReco.innerHTML = MontaListaProduto(usuario);
       MontaListaProduto2(usuario,i);
     }
     document.getElementsByTagName('input')[i-1].value = 'sugerir';
    })
    .catch(err => console.log(err));
}

function obterRecomendacao1(usuario,i){

  //Obter dados da api
  fetch(urlSuggeri + usuario)
    .then(response => response.json())
    .then(data => {
      suggeri = data;
    })
    .catch(err => console.log(err));

  //Temporizador
  setTimeout(function () {
   console.log(suggeri);
   if(suggeri == null) {
     //informar erro
     console.log("suggeri está nulo");
   }else{
     //divReco.innerHTML = MontaListaProduto(usuario);
     MontaListaProduto2(usuario,i);
   }
 }, 2000);
}
