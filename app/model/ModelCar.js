Ext.define('App.model.ModelCar', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'category', type: 'string' },
        { name: 'name', type: 'string' },
        { name: 'vendor', type: 'string' }
    ]
});