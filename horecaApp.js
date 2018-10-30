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
				input = parseInt(prompt('Hoeveel bitterballen wilt u toevoegen (8 of 16)?'));
			
				if(input == '8'){
					aantalSmallSnack = aantalSmallSnack + parseInt(prompt('Hoeveel bitterbalschalen van aantal stuks wilt u bestellen?'));
				}
				if(input == '16'){
					aantalLargeSnack = aantalLargeSnack + parseInt(prompt('Hoeveel bitterbalschalen van aantal stuks wilt u bestellen?'));
				}
			}
			else if (input == 'stop'){
				prijs();
			}
			else{
				alert('wij hebben geen ' + input + ' vandaag.')
			}

	
 }

function prijs(){
	var totaal = prijsFris*aantalFris + prijsBier*aantalBier + prijsWijn*aantalWijn + prijsSmallSnack*aantalSmallSnack + prijsLargeSnack*aantalLargeSnack

	document.write('fris: €' + prijsFris*aantalFris + '<br>')
	document.write('bier: €' + prijsBier*aantalBier + '<br>')
	document.write('wijn: €' + prijsWijn*aantalWijn + '<br>')
	document.write('snack: €' + prijsSmallSnack*aantalSmallSnack + '<br>')
	document.write('snack: €' + prijsLargeSnack*aantalLargeSnack + '<br>')
	document.write('totaal: €' + totaal)
}

