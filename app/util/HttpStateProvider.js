Ext.define('App.util.HttpStateProvider', {
    extend: 'Ext.state.Provider',
    requires: ['Ext.state.Provider', 'Ext.Ajax'],
    alias: 'util.HttpProvider',

    config: {
        userId: null,
        url: null,
        stateRestoredCallback: null
    },

    constructor: function (config) {

        if (!config.userId) {
            throw 'App.util.HttpStateProvider: Missing userId';
        }
        if (!config.url) {
            throw 'App.util.HttpStateProvider: Missing url';
        }

        this.initConfig(config);
        var me = this;

        me.restoreState();
        me.callParent(arguments);
    },

    set: function (name, value) {

        var me = this;

        if (typeof value == 'undefined' || value === null) {
            me.clear(name);
            return;
        }

        me.saveStateForKey(name, value);
        me.callParent(arguments);
    },

    // private
    restoreState: function () {

        var me = this,
        callback = me.getStateRestoredCallback();

        Ext.Ajax.request({
            url: me.getUrl(),
            method: 'GET',
            params: {
                userId: me.getUserId(),
            },
            success: function (response, options) {
                var result = JSON.parse(response.responseText.trim());
                for (var property in result) {
                    if (result.hasOwnProperty(property)) {
                        me.state[property] = me.decodeValue(result[property]);
                    }
                }
                
                if (callback) { callback();}
            },
            failure: function () {
                console.log('App.util.HttpStateProvider: restoreState failed', arguments);
                if (callback) { callback(); }
            }
        });        
    },

    // private
    clear: function (name) {

        var me = this;

        me.clearStateForKey(name);
        me.callParent(arguments);
    },

    // private
    saveStateForKey: function (key, value) {

        var me = this;

        Ext.Ajax.request({
            url: me.getUrl(),
            method: 'POST',
            params: {
                userId: me.getUserId(),
                key: key,
                value: me.encodeValue(value)
            },
            failure: function () {
                console.log('App.util.HttpStateProvider: saveStateForKey failed', arguments);
            }
        });
    },

    // private
    clearStateForKey: function (key) {

        var me = this;

        Ext.Ajax.request({
            url: me.getUrl(),
            method: 'DELETE',
            params: {
                userId: me.getUserId(),
                key: key
            },
            failure: function () {
                console.log('App.util.HttpStateProvider: clearStateForKey failed', arguments);
            }
        });
    }
});