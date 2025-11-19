import { createRouter, createWebHistory } from "vue-router";
import Cart from "../pages/Cart.vue";
import Account from "../pages/Account.vue";
import SearchResults from "../pages/SearchResults.vue";
import Main from "../components/Main.vue";
import WishList from "../pages/WishList.vue";
import Category from "../pages/Category.vue";




const routes = [
    {
        path: "/",
        name: "Home",
        component: Main
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart
    },
    {
        path: "/account",
        name: "Account",
        component: Account
    },
    {
        path: "/searchresults",
        name: "SearchResults",
        component: SearchResults
    },
    {
        path: "/wishlist",
        name: "WishList",
        component: WishList
    },
    {
        path: "/category/:category",
        name: "Category",
        component: Category
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router