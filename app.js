const input = document.querySelector('#input');
const addButton = document.querySelector(".add");
const container = document.querySelector(".container");
const header = document.querySelector(".header");
	
//Create Ul
const itemBox = document.querySelector(".item");

//add button click function
addButton.addEventListener('click',addTodo);

//todo add
function addTodo(){
	var inputValue = input.value;
	var errorDiv = document.createElement('div');


		if (inputValue != '') {
			//todo Div
			const todoDiv = document.createElement('div');
			todoDiv.classList.add('todo');

			let list = document.createElement('li');
				list.innerText = inputValue;
				list.classList.add('list');

				todoDiv.appendChild(list);

			let removeButton = document.createElement('button');
				removeButton.innerHTML = 'X';
				removeButton.classList.add('close');

				list.appendChild(removeButton);

				//li to div
				itemBox.appendChild(todoDiv);

				/* -- Local Storage save todo list -- */
				// localStorage.setItem("TODO", JSON.stringify(LIST));
				// localStorage.getItem("TODO");

			//input value be empty
			input.value = "";

			// errorDiv.innerHTML="";
		}else{
			errorDiv.innerHTML = "<div class='alert alert-danger'>Field is empty</div>";
			errorDiv.classList.add('errorMsg');

			header.appendChild(errorDiv);
			console.log(errorDiv.childNodes.length);

			
		}
}

//----------Delete function --------------//

// const remove = document.querySelector('.close');

itemBox.addEventListener('click',removeItem);

	function removeItem(e) {
		let item = e.target;
		// alert(item);

		if (item.classList[0] === 'close') {
			let todo = item.parentElement;

			todo.remove();
		}

		if (item.classList[0] === 'list') {
			const todo = item.parentElement;
			todo.classList.toggle('checked');
		}
	}

