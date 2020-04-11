import DS from 'ember-data'

export default DS.RESTAdapter.extend({
    host: 'http://starlord.hackerearth.com',

    pathForType() {
        return 'TopSellingGames'
    }
});
