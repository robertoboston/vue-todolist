const {
    createApp
} = Vue;

createApp({
    data(){
        return {
            newItem : " ",
            list : [
                {
                   text: "comprare il latte",
                   done : false

                },
                {
                    text: "comprare il pane",
                    done : false
 
                },
                {
                    text: "comprare la frutta",
                    done : false
 
                },
                {
                    text: "comprare la carne",
                    done : false
 
                },
                {
                    text: "comprare il formaggio",
                    done : false
 
                }
            ]

        }
    },
    methods: {
        addItem(){
            let object ={
                text : this.newItem,
                done : false
            }
            this.list.push(object)
           this.newItem = " "

        },
        removeItem(index){
           this.list.splice(index , 1)
        },
        checkItem(index){
            this.list[index].done = true
        }

        
    },
}).mount("#app")