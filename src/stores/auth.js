import { defineStore } from "pinia";


export const useAuthStore = defineStore("auth", {
    state: () => ({
        users: [],
        currentUser: null,
    }),


    actions: {
        register(data) {
            const exists = this.users.find((u) => u.email === data.email);
            if (exists) {
                alert("Email già registrata!");
                return;
            }


            this.users.push({ ...data });
            alert("Registrazione completata!");
            console.log(this.users);

        },


        login(data) {
            const user = this.users.find(
                (u) => u.email === data.email && u.password === data.password
            );


            if (!user) {
                alert("Credenziali non valide!");
                return;
            }


            this.currentUser = user;
            alert("Login effettuato!");
        },

    },


});