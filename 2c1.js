async function postWith(url) {
    try {
        const link = await fetch(url);
        if (!link.ok) {
            throw new Error("Это капец");
        }

        const PostsThere = await link.json();
        return PostsThere.sort((a, b) => a.title.length - b.title.length);
    } catch {
        throw new Error("Oblom");
    }
}

(async () => {
    try {
        const posts = await postWith("https://jsonplaceholder.typicode.com/posts");
        console.log("Посты: ");
        console.log(posts);
    } catch {
        console.log("Unluck");
    }
})();
