async function tododododododos(url) {
    try {
        const link = await fetch(url);

        const todoss = await link.json();
        const arr = [];
        for(let i = 0; i < todoss.length; ++i) {
            if(todoss[i].completed == false) arr.push(todoss[i]);
        }
        return arr;
    }catch {
        throw new Error("ajajajaj");
    }
}


(async() => {
    try {
        const todos = await tododododododos("https://jsonplaceholder.typicode.com/todos");

    console.log("falsy todos");
    console.log(todos);
    }catch {
        console.log("Ehu");
    }
})();