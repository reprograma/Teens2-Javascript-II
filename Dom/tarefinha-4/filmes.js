
const filmes = [
    {
        id: 1,
        nome: "The Social Dilemma",
        genero: "documetário",
        capa: "https://miro.medium.com/max/3840/1*CkdmUtjqOvkVIfrCpHiivQ.jpeg" 
    },
    {
        id: 2,
        nome: "Us",
        genero: "terror",
        capa: "https://carreiraliteraria.com/wp-content/uploads/2019/04/us.jpg" 
    },
    {
        id: 3,
        nome: "Bubble Boy",
        genero: "comédia romântica",
        capa: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT-_Re5e4tYpz0LzTarsYg48BQ4ksTaW-elPH9WBZ2xijUQI5W-" 
    },
    {
        id: 4,
        nome: "Get Out",
        genero: "terror",
        capa: "https://moviesense.files.wordpress.com/2017/05/getout1.jpg" 
    },
    {
        id: 5,
        nome: "Connected",
        genero: "série",
        capa: "https://m.media-amazon.com/images/M/MV5BMzVhOTA5MzYtYjk4ZC00M2U0LWI5MTAtM2JlMTEzYzE2M2RlXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_.jpg"
    },
    {
        id: 6,
        nome: "Coding, Explained",
        genero: "série",
        capa: "https://pro2-bar-s3-cdn-cf.myportfolio.com/82dfc9254a7e7b7bcfbe5a8e0c889e8f/baa2c896-f138-467f-9ce8-891a99b02fc0_car_202x158.png?h=1e743bcb6da22f3e25e05e7d92534a31" 
    },
    {
        id: 7,
        nome: "Sex Education",
        genero: "série",
        capa: "https://idris.com.br/dev/wp-content/uploads/2019/01/poltrona-Sex-education-poster.jpg" 
    },
    {
        id: 8,
        nome: "On My Block",
        genero: "série",
        capa: "https://br.web.img2.acsta.net/pictures/18/02/01/11/56/4746129.jpg" 
    }
]

let container = document.getElementById("container")


filmes.forEach(function(filme){
    //cria titulo

    let titulo = document.createElement("h1")

    //insere conteudo no titulo

    titulo.textContent = filme.nome

    //coloca o titulo na div

    container.appendChild(titulo)

    //cria paragrafo

    let paragrafo = document.createElement("p")

    //insere conteudo no paragrafo

    paragrafo.textContent = filme.genero

    //coloca o paragrafo na div

    container.appendChild(paragrafo)

    //cria uma imagem

    let img = document.createElement("img")

    //faz aparecer na tela com setAttribute

    img.setAttribute("src", `${filme.capa}`)
    
    img.style.width = "250px"
    img.style.height = "400px"

    //coloca a imagem na div

    container.appendChild(img)
})

console.log(filmes[1].genero)//terror


console.log(filmes[5].nome)//Coding, Explained


