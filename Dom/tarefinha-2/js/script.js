//1- capturar todos os meus gatinhos e guardar numa variavel - OK
//2- percorrer essa lista de gatinhos - OK
//3- ligar o click 
  //3.1 - criar uma condicional que torna o gatinho visivel ou invisivel 

//vamos utilizar o querySelectorALl, que é uma coleção para percorrer nos elementos
//para acessar div utiliza # antes no nome da div
//para acessar classe utilize . antes do nome da classe


const meusGatinhos = document.querySelectorAll('.item__imagem')

meusGatinhos.forEach(function(gato){
  //vamos ligar o click
  //vamos chamar cada gato e adicionar um addEventListener
  //o addEventListener recebe dois paramentros, um que le ouve e outro q ele executa
  //o que executa é a nossa função  

  gato.addEventListener('click', function(){
    console.log('gatinho clicando')
     /*
    condição:  
    computado quero que você execute alguma coisa...
    a o clicar remova essa classe, e torne ele invisivel
    mas caso não exista ao clicar, eu equero que adicione
  */ 
    if (gato.classList.contains('invisivel')) {
      gato.classList.remove('invisivel')
    } else {
      gato.classList.add('invisivel')
    }


})
})

 