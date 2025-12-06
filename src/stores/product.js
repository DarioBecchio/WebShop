
import { defineStore } from "pinia";
import axios from "axios";

export const useMainStore = defineStore('main', {
    state: () => ({
        base_api_url: 'test123',
        searchtext: "",
        loading: true,
    })

})

console.log("useMainStore import:", useMainStore.searchtext);

export const useProductStore = defineStore('products', {
    state: () => ({
        products: [],
        loading: false,
        error: null
    }),

    actions: {
        async fetchProducts() {
            this.loading = true
            this.error = null

            try {
                const res = await axios.get('https://dummyjson.com/products')

                this.products = res.data.products
                console.log(this.products);

            } catch (err) {
                this.error = "Errore nel caricamento dei prodotti"
                console.error(err)
            } finally {
                this.loading = false
            }
        }
    }


})

