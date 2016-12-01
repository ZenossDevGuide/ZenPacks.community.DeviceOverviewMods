Ext.onReady(function() {
    /* Modify the description summary (top right)   */
    var DEVICE_DESCRIPTION_ID = 'deviceoverviewpanel_descriptionsummary';
    Ext.ComponentMgr.onAvailable(DEVICE_DESCRIPTION_ID, function(){
        var overview = Ext.getCmp(DEVICE_DESCRIPTION_ID);

            /* The "name" field must match a DeviceInfo property */
 
            overview.addField({
                name: 'msexchangeversion',
                xtype: 'displayfield',
                fieldLabel: _t('MS Exchange Version')
            });
    });
});

