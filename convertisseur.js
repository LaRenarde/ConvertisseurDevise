document.addEventListener('DOMContentLoaded', function() {

    let input = document.getElementById('monnaie')[0];

    let euro = 10;

    let dollarUS = document.getElementById('dollarUS');

    let livreUK = document.getElementById('livreUK');

    let dollarAUD = document.getElementById('dollarAUD');

    let dollarCAD = document.getElementById('dollarCAD');

    let japaneseYen = document.getElementById('japaneseYen');


    for(nom in data) {
        let monneyChoice = document.getElementById('monney-choice');
        let option = document.createElement("option");
            monneyChoice.appendChild(option)
            option.innerHTML = pays.value
    };


        

       


    });


    
    
    
    /*.addEventListener('change', function(e) {
        if (f) {
            dollarUS.value 
        }
    });*/




});