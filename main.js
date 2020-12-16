const addButton = document.querySelector('.add');
const input = document.querySelector('.input');
const container = document.querySelector('.container');

//Create item Class
class item{

	constructor(itemName){
		//Create the item div
		this.createDiv(itemName);
	}

	createDiv(itemName){
		//Create Input
		let input = document.createElement('input');
		input.value = itemName;
		input.disabled = true;
		input.classList.add('item_input');

		//Create itemBox
		let itemBox = document.createElement('div');
		itemBox.classList.add('item');

		//Create Edit Button
		let editButton = document.createElement('button');
		editButton.innerHTML = '<i class="fa fa-edit"></i>';
		editButton.classList.add('edit');

		//Create Remove Button
		let removeButton = document.createElement('button');
		removeButton.innerHTML = '<i class="fa fa-trash"></i>';
		removeButton.classList.add('remove');

		container.appendChild(itemBox);

		itemBox.appendChild(input);
		itemBox.appendChild(editButton);
		itemBox.appendChild(removeButton);

		//Event Listener

		editButton.addEventListener('click',() => this.edit(input));

		removeButton.addEventListener('click', () => this.remove(itemBox));

	}

	edit(input){
		input.disabled = !input.disabled;
	}

	remove(item){
		container.removeChild(item);
	}

}

function check() {
	if (input.value != '') {
		new item(input.value);
		input.value = "";
	}
}

addButton.addEventListener('click', check);

window.addEventListener('keydown' ,(e) =>{
	if (e.which == 13) {
		check();
	}
});


//create obj
new item('Sport');

