const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(event) {
            console.log(event);
        },
        handleMousemove(event) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})


app.mount('#app')