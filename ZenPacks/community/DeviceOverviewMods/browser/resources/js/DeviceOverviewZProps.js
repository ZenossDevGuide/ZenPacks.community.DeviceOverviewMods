Ext.onReady(function() {
    /* Modify the snmpsummary (bottom right)   */
    var DEVICE_SNMP_ID = 'deviceoverviewpanel_snmpsummary';
    Ext.ComponentMgr.onAvailable(DEVICE_SNMP_ID, function(){
        var overview = Ext.getCmp(DEVICE_SNMP_ID);
 
            /* Remove the snmpCommunity field */
            overview.removeField('snmpCommunity'); 
 
            /* The "name" field must match a DeviceInfo property */

            overview.addField({
                name: 'zCommandUsernameAPI',
                xtype: 'displayfield',
                fieldLabel: _t('Command Username zProperty')
            });
    });
});

