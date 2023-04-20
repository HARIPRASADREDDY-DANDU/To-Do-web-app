const form = document.querySelector('#todo-form');
const titleInput = document.querySelector('#title');
const descriptionInput = document.querySelector('#description');
const table = document.querySelector('#todo-table');

form.addEventListener('submit', function(e) {
	e.preventDefault();
	
	const title = titleInput.value;
	const description = descriptionInput.value;
	
	if(title.trim() && description.trim()) {
		const row = table.insertRow(-1);
		const titleCell = row.insertCell(0);
		const descriptionCell = row.insertCell(1);
		const actionCell = row.insertCell(2);
		
		titleCell.textContent = title;
		descriptionCell.textContent = description;
		actionCell.innerHTML = '<button style=" border-radius: 20px; border-style: none; padding:10px; margin-right:20px">🚮</button>';
		
		titleInput.value = '';
		descriptionInput.value = '';
	}
});

table.addEventListener('click', function(e) {
	if(e.target.tagName === 'BUTTON') {
		e.target.parentNode.parentNode.remove();
	}
});
