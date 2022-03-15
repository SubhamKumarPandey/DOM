fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => {
        //console.log(response)
        //console.log(response.json()); //to concert in readable obj
        ////console.log("API : "response.json());
        return response.json();
    })
    .then((data) => {
        //console.log("Data is :",data);
        var joke = data.value;
        console.log("JOKE:", joke);
    })
    .catch();