var sparks = 0;

function sparkClick(number){
    sparks = sparks + number;
    document.getElementById("sparks").innerHTML = sparks;
};

var pieces = 0;

function generatePieces()
{
    var cost = Math.floor(Math.random() * 10);
    if (sparks >= cost)
    {
        pieces++;
        sparks = sparks - cost;
        document.getElementById('pieces').innerHTML = pieces; 
        document.getElementById('sparks').innerHTML = sparks;
        document.getElementById('info').innerHTML = "One piece was generated for " + cost + " sparks";
    }
    else
    {
        document.getElementById('info').innerHTML = "";
    }
}



window.setInterval(function(){
	
	generatePieces();
	
}, 1000);
