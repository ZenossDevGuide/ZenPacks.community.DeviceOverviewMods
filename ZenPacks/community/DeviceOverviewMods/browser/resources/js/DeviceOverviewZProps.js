Ext.onReady(function() {
    var DEVICE_SNMP_ID = 'deviceoverviewpanel_snmpsummary';
    Ext.ComponentMgr.onAvailable(DEVICE_SNMP_ID, function(){
        var overview = Ext.getCmp(DEVICE_SNMP_ID);
 
            /* overview.removeField('snmpCommunity'); */
 
            overview.addField({
                name: 'zCommandUsername',
                xtype: 'displayfield',
                fieldLabel: _t('Command Username zProperty')
            });
    });
});

