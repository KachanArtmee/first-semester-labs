function UserWith(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("Блин, облом");
            return response.json();
        })
        .then(KachansArray => {
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
        });
}

UserWith("https://jsonplaceholder.typicode.com/users")
    .then(users => {
        console.log("Юзеры с чем-то там:");
        console.log(users);
    })
    .catch(() => {
        console.log("Ты тут, если юзеры не дошли");
    });