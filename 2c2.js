async function sortComm(url) {
    try {
        const link = await fetch(url);
        if(!link.ok) throw new Error("Ppc");

        const comments = await link.json();
        return comments.sort((a, b) => {
             if(a.name > b.name) return 1;
            if(a.name < b.name) return -1;
            else return 0;
        })
    }
    catch {
        throw new Error("Vsyo");
    }
}

(async ()=> {
    try {
        const comments = await sortComm("https://jsonplaceholder.typicode.com/comments")
        
        console.log("Комменты: ");
        console.log(comments);
    }catch {
        console.log("Try again");
    }
})();