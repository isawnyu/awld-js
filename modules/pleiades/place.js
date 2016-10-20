// Module: Pleiades places

define(function() {
    return {
        name: 'Pleiades Places',
        type: 'place',
        toDataUri: function(uri) {
            return uri.replace(/^http:/, 'https:') + '/json';
        },
        corsEnabled: true,
        // add name to data
        parseData: function(data) {
            data.name = data.title;
            data.latlon = data.reprPoint && data.reprPoint.reverse();
            data.description = 'A place described in the Pleiades gazetteer: ' + data.description + " <br/><a href='http://pelagios.dme.ait.ac.at/api/places/http%3A%2F%2Fpleiades.stoa.org%2Fplaces%2F"+data.id+"'>Further information at Pelagios</a>";
            return data;
        }
    };
});
