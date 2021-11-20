Vue.config.devtools = true,


new Vue({
    el :"#root",
    data:{
     userEmail : "",
     userEmailList:[],
     numerChiamate :0   
    },

    
    
    mounted (){

        //stampo la singola email a schermo
        const url = "https://flynn.boolean.careers/exercises/api/random/mail";


        //creo un ciclo for per riprodurre 10 volte il dato di url
        for (let i = 0; i < 10; i++) {

            axios.get(url).then((ajaxResponse) =>{

                /*  console.log(ajaxResponse.data);*/

                    //prendo l'informazioone che mi interessa all'interno del data
                    const rispostaServer = ajaxResponse.data;

                    //il valore di userEmail è la risposta che il server ci da nel data
                    this.userEmail = rispostaServer.response; 
                    /* console.log(this.userEmail) */

                    //inserisco il risultato  della rispostadel server nel nuovo array
                    this.userEmailList.push(this.userEmail)

                    console.log(rispostaServer.response)
                   /*  console.log(this.userEmailList) */

                this.numerChiamate++;
                /*   console.log(this.userEmailList ) */
        });
            
        }
    },
    
});
