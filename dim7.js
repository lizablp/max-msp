inlets = 1;
outlets = 1;

var pitch = 48; //C3
var count = 0;
var scale = 0;

function bang()
{
	
	outlet(0 , pitch + scale + * 3);
	
	if (count <= 2){
		scale++;
	}
	else if (count > 2 && count <= 5){
		scale--;
	}
	
	count++;
	if (count > 5){
		count = 0;
	}
}