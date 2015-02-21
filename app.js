Ext.application({
    name: 'App',
    requires: ['App.util.HttpStateProvider'],
    models: ['ModelCar'],
    stores: ['ModelCars'],
    views: ['Viewport'],
    launch: function () {
        var v;
        Ext.state.Manager.setProvider(new App.util.HttpStateProvider({
            userId: 'test user', url: '../../../api/StatefulGridExample', stateRestoredCallback: function () {
                if (!v) {
                    v = Ext.create('App.view.Viewport');
                }
            }}));         
    }
});