function postFromLowTohight(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Чота не так");
            }
            return response.json();
        })
        .then(posts => {
            return posts.sort((a, b) => a.title.length - b.title.length);
        });
}


postFromLowTohight('https://jsonplaceholder.typicode.com/posts')
    .then(sortedPosts => {
        console.log('Отсортированные посты:');
        console.log(sortedPosts);
    })
    .catch(() => {
        console.error("Не получилось");
    });
