const cep = document.querySelector("#cep")

const dataFiles = (result) =>{
    for(const campo in result)
    if(document.querySelector("#"+ campo)){
        document.querySelector("#"+ campo).value = result[campo]
    }
}

cep.addEventListener("blur",(e)=>{
    let search = cep.value.replace("-","")
    const options = {
        method: 'GET',RE
        mode: 'cors',
        cache: 'default'
    }


fetch(`https://viacep.com.br/ws/${search}/json/`, options)
.then(response => {response.json()
    .then(data => dataFiles(data))
})
.catch(erro => console.log("Deu erro" + erro, message))
})