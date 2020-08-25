document.addEventListener('DOMContentLoaded', function() {

    let apiUrl = "http://www.floatrates.com/daily/eur.json";

        fetch(apiUrl).then(function (data){ 
            return data.json()
        }).then(function (data){
            console.log(data)
            //TODO

        })
    
      

    let input = document.getElementById('monnaie')[0];

    let euro = 10;

    let dollarUS = document.getElementById('dollarUS');
        dollarUS = 1.18;


    let livreUK = document.getElementById('livreUK');
        livreUK = 0.9;


    let dollarAUD = document.getElementById('dollarAUD');
        dollarAUD = 1.64;


    let dollarCAD = document.getElementById('dollarCAD');
        dollarCAD = 1.56;


    let japaneseYen = document.getElementById('japaneseYen');
        japaneseYen = 125.23;

    let convertMonney = document.getElementById('monney-choice').addEventListener('change', function(e) {
        console.log(e);

})