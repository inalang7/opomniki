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
		var naziv_opomnika = document.querySelector("#naziv_opomnika").value;
		
		document.querySelector("#cas_opomnika").value="";
		document.querySelector("#naziv_opomnika").value="";
		
		document.querySelector("#opomniki").innerHTML += " <div class ='opomnik rob senca'><div class='naziv_opomnika'>"+naziv_opomnika+"</div> <div class='cas_opomnika'> Opomnik čez <span>"+cas_opomnika+"</span> sekund.</div> </div>";
		
	};
	document.querySelector("#dodajGumb").addEventListener('click', nastavitveOpomnikov);
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (var i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			if(cas === 0){
				window.alert("Opomnik!\n\nZadolžitev "+ opomnik.querySelector(".naziv_opomnika").innerHTML +" je potekla!")
				document.querySelector("#opomniki").removeChild(opomnik);
			}else{
				cas = cas-1;
				casovnik.innerHTML = cas;
 			}
		
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});