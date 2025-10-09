function sortCommentsBy(url) {
    return fetch(url)
    .then(response=> {
        if(!response.ok) {
            throw new Error("Чота прям не так");
        }
        return response.json();
    })
    .then(comments => {
        return comments.sort((a, b) => {
            if(a.name > b.name) return 1;
            if(a.name < b.name) return -1;
            else return 0;
        })
    })
}


sortCommentsBy('https://jsonplaceholder.typicode.com/comments')
.then(comments => {
    console.log("Комментарии такие вот:");
    console.log(comments);
})
.catch(()=> {
    console.log("Ошибка, блин");
})