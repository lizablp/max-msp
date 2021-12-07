autowatch = 1;

inlets = 2;
outlets = 2;

function midiNoteIn(){
	var midiNoteIn = arguments[0];
	var midiNoteOut = Math.floor(midiNoteIn);
	var velocity = arguments[1];
	var pitchBend = (midiNoteIn - midiNoteOut) * 32;
	
	outlet(0, [midiNoteOut, velocity]);
	outlet(1, Math.round(pitchBend));
	
}

function loadbang(){ // appelé lorsque le patcher est chargé
	post("script loaded \n");
} 

function bag(){ //quand objet reçoit un bang dans l'une de ses inlets

	post("receive bang \n");
} 
function msg_int(v){} //quand objet reçoit un nombre entier
	
function msg_float(v){} //quand objet reçoit un nombre flottant
	
function list(){//quand objet reçoit une liste
	//Les éléments de la liste sont passés à la fonction intermédiaire de la variable argument (array)
	post("receive a list of " + arguments.length + " élements \n");
	post("First element is : " + arguments[0] + "\n");
}

function anything(){ //appelé dans tous les autres cas
	post("Got a message named " + messagename + " élements \n");
	post("arriving via inlet : " + inlet + "\n");
}