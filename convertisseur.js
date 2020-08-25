document.addEventListener('DOMContentLoaded', function() {

    let apiUrl = "http://www.floatrates.com/daily/eur.json";

        fetch(apiUrl).then(function (data){ 
            return data.json()
        }).then(function (data){
            console.log(data)
            let monneyChoice = document.getElementById('monney-choice');

            for(nom in data) {
                let option = document.createElement("option");
                    monneyChoice.appendChild(option)
                    option.innerHTML = data[nom].name
            };

        })
    
      

    let input = document.getElementById('monnaie')[0];





})