const fs = require('fs'); 

fs.writeFile("dados.txt", "teste de dev", ()=>{
    console.log("Arquivo adicionado com sucesso!");
})

fs.readFile("dados.txt", "utf-8", (data) => {
    console.log("Lendo arquivo...");
    console.log(data);
});