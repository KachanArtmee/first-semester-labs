class SausageProduct extends Product {
    #isSmoked;

    constructor(price = 0, name = "", inStock = false, isSmoked = false) {
        super(price, name, inStock);
        this.isSmoked = isSmoked;
    }

    get isSmoked() {
        if (super.isDeleted()) {
            console.error("Продукт удален");
            return null;
        }
        return this.#isSmoked;
    }

    set isSmoked(value) {
        if (super.isDeleted()) {
            console.error("Продукт удален");
            return;
        }
        this.#isSmoked = Boolean(value);
    }

    show() {
        if (super.isDeleted()) {
            alert("Продукт удален");
            return;
        }
        alert("Информация о сосисках\n" +
            `ID: ${super.id}\n` +
            `Название: ${super.name}\n` +
            `Цена: $${super.price}\n` +
            `В наличии: ${super.inStock}\n` +
            `Копченые: ${this.#isSmoked ? 'Да' : 'Нет'}\n`);
    }

    copy() {
        if (super.isDeleted()) {
            console.error("Продукт удален");
            return null;
        }
        console.log(`Создана ссылка на сосиски "${super.name}"`);
        return this;
    }

    static clone(originalSausage) {
        if (originalSausage.isDeleted()) {
            console.error("Продукт удален");
            return null;
        }
        console.log(`Создан клон сосисок "${originalSausage.name}"`);
        return new SausageProduct(
            originalSausage.price,
            originalSausage.name,
            originalSausage.inStock,
            originalSausage.isSmoked
        );
    }
}