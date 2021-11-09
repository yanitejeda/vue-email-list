Vue.config.devtools = true,


new Vue({
    el :"#root",
    data:{
     userEmail : "",   
    },

    
    
    mounted (){

        //stampo la singola email a schermo
        const url = "https://flynn.boolean.careers/exercises/api/random/mail";

        axios.get(url).then((ajaxResponse) =>{

            console.log(ajaxResponse.data);

            const rispostaServer = ajaxResponse.data;

            this.userEmail = rispostaServer.response; 
        });
    },
    
});
