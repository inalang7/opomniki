window.addEventListener('load', function() {
	//stran nalozena
	var pridobijIme = function() {
		var uporabnik = document.querySelector("#uporabnisko_ime").value;
		document.querySelector("#uporabnik").innerHTML = uporabnik;
		document.querySelector(".pokrivalo").style.visibility="hidden";
		
	};
	document.querySelector("#prijavniGumb").addEventListener('click', pridobijIme);
	var nastavitveOpomnikov = function() {
		var cas_opomnika = document.querySelector("#cas_opomnika").value;
		var naziv = document.querySelector("#naziv_opomnika").value;
		document.getElementById("cas_opomnika").value="";
		document.getElementById("naziv_opomnika").value="";
		document.querySelector("#opomniki").innerHTML += " <div class='opomnik'><div class='naziv_opomnika'>"+naziv+"</div> <div class='cas_opomnika'> Opomnik čez <span>"+cas_opomnika+"</span> sekund.</div> </div>";
		
	};
	document.querySelector("#dodajGumb").addEventListener('click', nastavitveOpomnikov);
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});