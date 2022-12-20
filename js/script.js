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

        removeItem(index){
           this.list.splice(index , 1)
        },
        checkItem(index){

            let check = this.list[index]

            if(check.done == false){
                check.done = true
            }
            else{
                check.done = false
            }

        },
        addItem(){
            let object ={
                text : this.newItem,
                done : false
            }
            this.list.push(object)
           this.newItem = " "

        }
    },
}).mount("#app")