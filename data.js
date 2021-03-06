/*Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni
icona, in cui è presente il nome dell’icona e l’icona stessa.

Milestone 2
Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare
le icone del colore corrispondente.

Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di
icone (animal, vegetable, user). Quando l’utente seleziona un tipo dalla select,
visualizzare solamente le icone corrispondenti.

BONUS
1- modificare la struttura dati fornita e valorizzare la proprietà “color” in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo “#” seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
2- popolare le options della select della milestone 3 dinamicamente.
*/

const cards = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa-solid',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa-solid',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa-solid',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa-solid',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa-solid',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa-solid',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa-solid',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa-solid',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fa-solid',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fa-solid',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fa-solid',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fa-solid',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fa-solid',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fa-solid',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fa-solid',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fa-solid',
		color: 'blue'
	}
];

//richiamo la funzione per stampare le cards
printCards(cards);

filterType();

//funzione per stampare le cards
function printCards(myObj){

	const cardsContainer = document.getElementById("dm-container-cards");

	//ciclo l'array di oggetti e stampo le cards nell'html
	myObj.forEach((element, index) => {
		cardsContainer.innerHTML += `
			<div class="mt-5 mx-5 dm-box d-flex flex-column justify-content-center align-items-center" id="dm-${element.type}">
				<i class="${element.family} ${element.prefix}${element.name} dm-icon-${element.color}"></i>
				<div class="title">${element.name}</div>
			</div>
		`
	});
}


/*creo una funzione che controlli la selezione effettuata dall'utente e 
stampi solo gli elementi selezionati*/
function filterType(){
	
	let select = document.getElementById("dm-type-filter");
	const cardsContainer = document.getElementById("dm-container-cards");
	
	select.addEventListener("change", function(){
		let selectedType = select.value
		cardsContainer.innerHTML = ""; //a ogni cambio cancello gli elementi dal DOM che poi verranno riscritti


		if(selectedType == "animal"){
			
			/*uso un Filter per inserire in una variabile solo gli elementi richiesti
			dall'utente*/
			let selectedAnimal = cards.filter((element) =>{
				if(element.type == "animal"){
					return true;
				}
				return false;
			})
			

			/*Con un forEach stampo gli elementi nella variabile creata col Filter*/
			selectedAnimal.forEach((element, index) =>{
				cardsContainer.innerHTML += `
				<div class="mt-5 mx-5 dm-box d-flex flex-column justify-content-center align-items-center" id="dm-${element.type}">
					<i class="${element.family} ${element.prefix}${element.name} dm-icon-${element.color}"></i>
					<div class="title">${element.name}</div>
				</div>
				`
			})
		
		//ripeto la stessa cosa per tutte le possibilità di scelta
		}else if(selectedType == "vegetable"){
			let selectedVegetable = cards.filter((element) =>{
				if(element.type == "vegetable"){
					return true;
				}
				return false;
			})
			
			selectedVegetable.forEach((element, index) =>{
				cardsContainer.innerHTML += `
				<div class="mt-5 mx-5 dm-box d-flex flex-column justify-content-center align-items-center" id="dm-${element.type}">
					<i class="${element.family} ${element.prefix}${element.name} dm-icon-${element.color}"></i>
					<div class="title">${element.name}</div>
				</div>
				`
			})
		}else if(selectedType == "user"){
			let selectedUser = cards.filter((element) =>{
				if(element.type == "user"){
					return true;
				}
				return false;
			})
			
			selectedUser.forEach((element, index) =>{
				cardsContainer.innerHTML += `
				<div class="mt-5 mx-5 dm-box d-flex flex-column justify-content-center align-items-center" id="dm-${element.type}">
					<i class="${element.family} ${element.prefix}${element.name} dm-icon-${element.color}"></i>
					<div class="title">${element.name}</div>
				</div>
				`
			})
		}else{
			
			cards.forEach((element, index) =>{
				cardsContainer.innerHTML += `
				<div class="mt-5 mx-5 dm-box d-flex flex-column justify-content-center align-items-center" id="dm-${element.type}">
					<i class="${element.family} ${element.prefix}${element.name} dm-icon-${element.color}"></i>
					<div class="title">${element.name}</div>
				</div>
				`
			})
		}
	})

}