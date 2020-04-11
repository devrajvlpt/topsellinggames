import DS from 'ember-data';

export default DS.RESTSerializer.extend({    
    primaryKey: 'Rank',    
    normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
        payload = { gameList : payload};
        console.log(payload)
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
    modelNameFromPayloadKey(key) {
        console.log(key)
        return key
      }
});
