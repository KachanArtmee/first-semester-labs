function todododoos(url) {
    return fetch(url)
    .then(Answer => {
        if(!Answer.ok) throw new Error("badums");
        return Answer.json();
    })
    .then(todos => {
        const arr = [];
        for(let i = 0; i < todos.length; ++i) {
            if(todos[i].completed == false) arr.push(todos[i]);
        }
        return arr;
    })
}

todododoos("https://jsonplaceholder.typicode.com/todos")
.then(array => {
    console.log("falsy only(наверное): ");
    console.log(array);
})
.catch(() => {
    console.log("Всё, ниче не получилось");
})