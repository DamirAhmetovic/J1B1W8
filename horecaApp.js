//wat wil je bestellen? -> fris
//hoeveel fris wil je bestellen? -> aantal
//aan maken van var: aantalbier, aantalfris en aantalwijn
//const prijs bier=2.50
//const prijs wijn=3.00
//const prijs fris=1.50
//je moet hem in een loop zetten net als dat leeftijd ding dus wanneer je stop in en dan moet hij stoppen (toon berekening)
//laat de rekening zien
//function calculatePrice (drink, total)
//return drink en total;
//calculatePrice(aantalbier, prijsbier)
			  //(aantalfris, prijsfris)
			  //(aantalwijn, prijswijn)

//snacks schaal 8
	   //schaal 16

//function aan maken add snacks

//calculatePrice(aantalfris, prijsfris)




var aantalFris = 0;
var aantalBier = 0;
var aantalWijn = 0;
var aantalSmallSnack = 0;
var aantalLargeSnack = 0;

const prijsBier = 2.5;
const prijsWijn = 3;
const prijsFris = 1.5;
const prijsSmallSnack = 3.5;
const prijsLargeSnack = 6.5;  



addToOrder();

function addToOrder(){
	while ( input != 'stop'){
	    var input = prompt('wat wilt u bestellen');
			if (input == 'fris'){
				aantalFris = aantalFris + parseInt(prompt('hoeveel fris wilt u bestellen'));
			}
			else if (input == 'bier'){
				aantalBier = aantalBier + parseInt(prompt('hoeveel bier wilt u bestellen'));
			}
			else if (input == 'wijn'){
				aantalWijn = aantalWijn + parseInt(prompt('hoeveel wijn wilt u bestellen'));
			}
			else if (input == 'snack'){
				addSnackToOrder();
			}
			else if (input == 'stop'){
				prijs();
			}
			else{	
				alert('wij hebben geen ' + input + ' vandaag.')
		}
	}
}


function addSnackToOrder(){
	// hier code om snack toe te voegen inclusief foutmelding anders dan 10 of 18
	input = parseInt(prompt('Hoeveel bitterballen wilt u toevoegen (8 of 16)?'));
			
				if(input == '8'){
					aantalSmallSnack = aantalSmallSnack + parseInt(prompt('Hoeveel bitterbalschalen van aantal stuks wilt u bestellen?'));
				}
				else if(input == '16'){
					aantalLargeSnack = aantalLargeSnack + parseInt(prompt('Hoeveel bitterbalschalen van aantal stuks wilt u bestellen?'));
				}
				else{
					alert('het getal ' + input + ' is ongeldig.');
				}

}


function prijs(){
	if(aantalFris >= 1){
		document.write('fris: €' + prijsFris*aantalFris + ' aantal fris besteld ' + aantalFris + '<br>')
}
	if(aantalBier >= 1){
		document.write('bier: €' + prijsBier*aantalBier + ' aantal bier besteld ' + aantalBier + '<br>')
}
	if(aantalWijn >= 1){		
		document.write('wijn: €' + prijsWijn*aantalWijn + ' aantal wijn besteld ' + aantalWijn + '<br>')
}
	if(aantalSmallSnack >= 1){
		document.write('snack: €' + prijsSmallSnack*aantalSmallSnack + ' aantal schalen met 8 bitterballen besteld ' + aantalSmallSnack + '<br>')
}
	if(aantalLargeSnack >= 1){
		document.write('snack: €' + prijsLargeSnack*aantalLargeSnack + ' aantal schalen met 16 bitterballen besteld ' + aantalLargeSnack + '<br>')
}	





	var totaal = prijsFris*aantalFris + prijsBier*aantalBier + prijsWijn*aantalWijn + prijsSmallSnack*aantalSmallSnack + prijsLargeSnack*aantalLargeSnack

	document.write('totaal: €' + totaal)
}

