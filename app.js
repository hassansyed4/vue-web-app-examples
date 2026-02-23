const app = Vue.createApp({
        //data, functions
        data(){ //function
            return { //below all are reactive vairables
                showBooks: true,
                title: 'The Final Empire',
                author: 'San Francisco',
                age: 45,
                x: 0, //x, this is object of ComponentInstance
                y: 0,  ////y also is object of ComponentInstance
                books: [
                    {title: 'name of the wind', author: 'Saud Habib'},
                    {title: 'the way of kings', author: 'Sameer DX'},
                    {title: 'the final empire', author: 'Zen Khan'},

                ]

            }
        },
        methods: { //this is called Object
            toggleShowBooks() {
                this.showBooks = !this.showBooks     //Toggling a Boolean value       
            }, 
            changeTitle(abc){
                this.title = abc
            },
            handleEvent(e, data){
                console.log(e, e.type)
                if (data){
                    console.log(data)
                }
            },
            handleMousemove(e){ //e is Event object
                this.x = e.offsetX
                this.y = e.offsetY
            }

        }
    })

app.mount('#app')



// Vue.createApp({
//   data(){},
//   methods:{},
//   computed:{},
//   mounted(){}
// })