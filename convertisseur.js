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
                    option.setAttribute("value", data[nom].rate)
            };


            document.getElementById('monney-choice').addEventListener('change', function (e) {
                let input = document.getElementById("monnaie").value
                let valeurEnEuros = input* e.srcElement.value;
                console.log(valeurEnEuros)

            })

        })

        let button = document.getElementById('button');
            button
    
      

    let input = document.getElementById('monnaie')[0];





})