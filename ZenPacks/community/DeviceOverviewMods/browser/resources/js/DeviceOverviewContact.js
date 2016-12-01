Ext.onReady(function() {
    /* Modify the system summary panel (inner bottom left)   */
    var DEVICE_SYSYTEM_ID = 'deviceoverviewpanel_systemsummary';
    Ext.ComponentMgr.onAvailable(DEVICE_SYSYTEM_ID, function(){
        var overview = Ext.getCmp(DEVICE_SYSYTEM_ID);
 
            /* The "name" field must match a DeviceInfo property */

            overview.addField({
                name: 'contact',
                xtype: 'displayfield',
                fieldLabel: _t('Contact')
            });
    });
});

