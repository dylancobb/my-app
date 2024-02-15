const todo = { todoID: '001', todo: 'Learn AWS' };

fetch('https://2hblh18o3b.execute-api.eu-west-2.amazonaws.com/prod/todos', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(todo)
})
	.then((response) => response.json())
	.then((data) => console.log(data))
	.catch((error) => console.error('Error:', error));
