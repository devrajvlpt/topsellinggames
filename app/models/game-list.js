import DS from 'ember-data'

export default DS.Model.extend({    
    Rank: DS.attr('number'),
    Name: DS.attr('string'),
    Platform: DS.attr('string'),
    Year: DS.attr('number'),
    Genre: DS.attr('string'),
    Publisher: DS.attr('string'),
    Global_Sales: DS.attr('number')
});
