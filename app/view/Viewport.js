Ext.define('App.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: ['Ext.grid.Panel'],
    style: 'padding:25px',
    layout: 'vbox',
    items: [
       {
           xtype: 'gridpanel',
           stateful: true,
           stateId:'model-cars-grid',
           width: 650,
           height: 350,
           title: 'Ext JS Grid - Stateful - Server',
           store: 'ModelCars',
           columns: [
                {
                    text: 'Id',
                    hidden: true,  
                    dataIndex: 'id'
                },
                {
                    text: 'Name',
                    sortable: true,  
                    dataIndex: 'name',
                    flex: 3   
                },
                {
                    text: 'Vendor',
                    sortable: true,
                    dataIndex: 'vendor',
                    flex:2
                },
                {
                    text: 'Category',
                    sortable: true,
                    dataIndex: 'category',
                    flex: 2
                }
           ]
       }
    ]
});