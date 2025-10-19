const sausages = [
    new SausageProduct(3.5, "Молочные сосиски", true, false),
    new SausageProduct(5.2, "Копченые сардельки", true, true)
];

let productCopy = null;
let productClone = null;

function showAllProducts() {
    sausages.forEach((sausage, index) => {
        setTimeout(() => {
            sausage.show();
        }, index * 100);
    });
}


function deleteFirstProduct() {
    if (sausages[0] && !sausages[0].isDeleted()) {
        sausages[0].delete();
        alert("Первая сосиска удалена! Попробуйте теперь посмотреть информацию о ней.");
    } else {
        alert("Первая сосиска уже удалена или не существует");
    }
}

function copySecondProduct() {
    if (sausages[1] && !sausages[1].isDeleted()) {
        productCopy = sausages[1].copy();
        alert("Создана ссылка на вторую сосиску! Теперь нажмите 'Показать информацию о копии'");
    } else {
        alert("Вторая сосиска удалена или не существует");
    }
}

function showCopyInfo() {
    if (productCopy) {
        productCopy.show();
    } else {
        alert("Сначала создайте копию через кнопку 'Скопировать вторую сосиску'");
    }
}

function cloneFirstProduct() {
    if (sausages[0] && !sausages[0].isDeleted()) {
        productClone = SausageProduct.clone(sausages[0]);
        alert("Создан клон первой сосиски! Проверьте консоль для подтверждения.");

        setTimeout(() => {
            alert(`Проверка: sausages[0] === productClone: ${sausages[0] === productClone}\nЭто разные объекты!`);
        }, 200);
    } else {
        alert("Первая сосиска удалена или не существует");
    }
}