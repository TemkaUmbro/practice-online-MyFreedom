export async function get() {
    const response = await fetch('https://project-artsiomumbryian-default-rtdb.firebaseio.com/data.json');
    const data = await response.json();
    return data;
}

export async function getAll() {
    const response = await fetch('https://project-artsiomumbryian-default-rtdb.firebaseio.com/todos.json');
    const object = await response.json();
    const array = Object.entries(object).map((item) => ({uniqueId: item[0], ...item[1]}))
    return array;
}

export async function getById(uniqueId) {
    const response = await fetch(`https://project-artsiomumbryian-default-rtdb.firebaseio.com/todos/${uniqueId}.json`);
    const object = await response.json();
    return object;
}

export async function add({todo}) {
    await fetch('https://project-artsiomumbryian-default-rtdb.firebaseio.com/todos.json', {
        method: 'POST',
        body: JSON.stringify(todo),
    });
}

export async function update({uniqueId, completed, title, userId}) {
    return fetch(`https://project-artsiomumbryian-default-rtdb.firebaseio.com/todos/${uniqueId}.json`, {
        method: 'PATCH',
        body: JSON.stringify({completed, title, userId})
    });
}

export async function remove({uniqueId}) {
    return fetch(`https://project-artsiomumbryian-default-rtdb.firebaseio.com/todos/${uniqueId}.json`, {
        method: 'DELETE'
    });
}
