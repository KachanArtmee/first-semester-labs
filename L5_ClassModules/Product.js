class Product {
    #name;
    #price;
    #inStock;
    #id;
    #isDeleted = false;

    constructor(price = 0, name = "", inStock = false) {
        this.#id = Date.now() + Math.random();
        this.price = price;
        this.name = name;
        this.inStock = inStock;
    }

    delete() { 
        this.#isDeleted = true;
        console.log(`Продукт "${this.#name}" удален`);
    }
    
    isDeleted() { 
        return this.#isDeleted; 
    }
    
    set price(value) {
        if (this.#isDeleted) {
            console.error("Продукт удален");
            return;
        }
        if (+value == value && +value >= 0) {
            this.#price = +value;
        } else {
            this.#price = 0;
        }
    }
    
    get price() {
        if (this.#isDeleted) {
            console.error("Продукт удален");
            return null;
        }
        return this.#price;
    }

    set name(value) {
        if (this.#isDeleted) {
            console.error("Продукт удален");
            return;
        }
        if (value && value.toString().trim().length > 0) {
            this.#name = value.toString().trim();
        } else {
            this.#name = "";
        }
    }
    
    get name() {
        if (this.#isDeleted) {
            console.error("Продукт удален");
            return null;
        }
        return this.#name;
    }

    set inStock(value) {
        if (this.#isDeleted) {
            console.error("Продукт удален");
            return;
        }
        this.#inStock = value;
    }
    
    get inStock() {
        if (this.#isDeleted) {
            console.error("Продукт удален");
            return null;
        }
        return this.#inStock;
    }

    get id() {
        if (this.#isDeleted) {
            console.error("Продукт удален");
            return null;
        }
        return this.#id;
    }

    show() {
        if (this.#isDeleted) {
            alert("Продукт удален");
            return;
        }
        alert("Информация\n" +
            `ID: ${this.#id}\n` +
            `Название: ${this.#name}\n` +
            `Цена: $${this.#price}\n` +
            `В наличии: ${this.#inStock}\n`);
    }

    copy() {
        if (this.#isDeleted) {
            console.error("Продукт удален");
            return null;
        }
        console.log(`Создана ссылка на продукт "${this.#name}"`);
        return this;
    }

    static clone(originalProduct) {
        if (originalProduct.#isDeleted) {
            console.error("Продукт удален");
            return null;
        }
        console.log(`Создан клон продукта "${originalProduct.#name}"`);
        return new Product(
            originalProduct.price,
            originalProduct.name,
            originalProduct.inStock
        );
    }
}