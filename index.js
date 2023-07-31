class ProductManager {
    #_products

    constructor() {
        this.#_products = []
    }

    #generateId() {
        if(this.#_products.length === 0)
        return this.#_products.id + 1
    }

    // setter
    addProduct(product) {
        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock)
        return '[ERROR] faltan campos obligatorios'
        // // verificacion de que el codigo no se repite
        const found = this.#_products.find(item => item.code === product.code)
        if (found) {
            return '[ERROR] el codigo ya existe'
        }
        const productToAdd = { id: this.#generateId, ...product}
        this.#_products.push(productToAdd)
        return productToAdd
    }


    // getter
    getProduct() {
        return this.#_products
    } 

    getProductById(id) {
        const found = this.#_products.find(item => item.id === id)
        if (!found) return '[ERROR] extraviado'
        return found
    }

    }

    const pm = new ProductManager ()
pm.addProduct = { title: 'SteelPro Aero AF', description: 'Lente de policarbonato', price: 3000, thumbnail: 'img/lente.jpg', code: 83940325, stock: 5}