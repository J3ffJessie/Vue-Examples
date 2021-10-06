const app = Vue.createApp({
    data() {
        return {
            url: "https://j3dev.tech",
            showBooks: true,
            books: [{
                    title: 'name of the wind',
                    author: 'patrick rothfuss',
                    img: 'assets/book1.jpeg',
                    isfav: true
                },
                {
                    title: 'the way of kings',
                    author: 'brandon sanderson',
                    img: 'assets/book2.jpeg',
                    isfav: true
                },
                {
                    title: 'the final empire',
                    author: 'brandon sanderson',
                    img: 'assets/book3.jpeg',
                    isfav: true
                },
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleFav(book) {
            book.isfav = !book.isfav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isfav)
        }
    }
})


app.mount('#app')