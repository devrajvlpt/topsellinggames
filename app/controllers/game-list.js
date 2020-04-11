import Controller from '@ember/controller';
import { inject as service } from '@ember/service'

export default Controller.extend({
    gameUtils: service(),

    actions:{
        searchQuery(queryString){
            console.log("Query", queryString)
            
            this.gameUtils.searchQuery(queryString)
        }
    }
});
