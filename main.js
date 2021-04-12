var sparks = 0;
var pieces = 0;
var basicStructure = 0

function sparkClick(number)
{
    sparks = sparks + number;
    document.getElementById("sparks").innerHTML = sparks;
};

function generatePieces()
{
    var cost = Math.floor(Math.random() * 10) + 1;
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
        document.getElementById('info').innerHTML = " ";
    }
}

function createBasicStructure()
{
    var cost = 5;
    if (pieces >= cost)
    {
        basicStructure++;
        pieces = pieces - cost;
        document.getElementById('basicStructures').innerHTML = basicStructure; 
        document.getElementById('pieces').innerHTML = pieces;
        
    }
}



window.setInterval(function(){
	
	generatePieces();
    if (pieces > 5)
    {
        document.getElementById("basicStructure").style.visibility = "visible";
    }
	
}, 1000);
