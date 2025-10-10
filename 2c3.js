async function UserWith(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Блин, облом");
        }

        const KachansArray = await response.json();
        const arr = [];

        for (let i = 0; i < KachansArray.length; i++) {
            const user = KachansArray[i];
            arr.push({
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
                phone: user.phone
            });
        }

        return arr;
    } catch (error) {
        throw error; 
    }
}

(async () => {
    try {
        const users = await UserWith("https://jsonplaceholder.typicode.com/users");
        console.log("Юзеры с чем-то там:");
        console.log(users);
    } catch {
        console.log("Ты тут, если юзеры не дошли");
    }
})();