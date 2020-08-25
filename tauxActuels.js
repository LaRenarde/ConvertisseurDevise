

function monnaieChange(apiUrl, ad){ 
    fetch(apiUrl).then(function (data){ 
        return data.json()
    }).then(function (data){
        ad(data);  
    })
}

function tauxChange(data){
    console.log(data)
}


document.addEventListener("DOMContentLoaded", function(){

    let apiUrl = "http://www.floatrates.com/daily/eur.json";

    monnaieChange(apiUrl, function(data){
        tauxChange(data);
    })
});