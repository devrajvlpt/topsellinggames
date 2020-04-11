import Service from '@ember/service';
import { inject } from "@ember/service";
import { computed } from "@ember/object"

export default Service.extend({
    store: inject(),
    
    topsellinggames: computed(function(){
        var results = this.store.peekAll('game-list')
        return results.filter(res => res.Year >=2000 );
    }),
    
    init(){        
        this._super(...arguments)
        this.searchQueryGames = [];
    },

    searchQuery(query){
        var results = this.store.peekAll('game-list')
        this.searchQueryGames = results.filter(res => res.Year >=query );
        console.log(this.searchQueryGames)
        return this.searchQueryGames
    }


    

});
