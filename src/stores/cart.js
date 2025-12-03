import { defineStore } from "pinia";

export const useCartStore = ("cart", {
    state: () => ({
        items: [],
    }),

    getters: {
        totalItems: (state) => state.items.reduce((t, p) => t + p.qty, 0),
        totalPrice: (state) => state.items.reduce((t, p) => t + p.price * p.qty, 0),
    },

    actions: {
        addToCart(product) {
            const existing = this.items.find((i) => i.id === product.id);
            if (existing) {
                existing.qty++;
            } else {
                this.items.push({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.images,
                    qty: 1,
                });
            }
        }
    },

    removeFromCart(id) {
        this.items = this.items.filter((i) => i.id !== id);
    },

    clearCart() {
        this.items = [];
    }
})