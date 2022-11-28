
const contenedor = document.getElementById("contenedor-tarjetas");
console.log(contenedor);

fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(respuesta => respuesta.json())
    .then(data => {
        const dataApi = data.results;
        const imageUrl= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
        console.log(dataApi);

        let acc = "";
        for (let i =0; i <dataApi.length; i++){
            acc = 
            acc +
            `  
               <div class="card">
                   <div class="container-img">
                     <img src="${imageUrl}${i+1}.png" alt =${dataApi[i].name}>
                    </div>
                    <p>
                      ${dataApi[i].name}
                    </p>
                </div>
       
            `;

        }
    

        contenedor.innerHTML=acc;
        console.log(dataApi)
    });
   

