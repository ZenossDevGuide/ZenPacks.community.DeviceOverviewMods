# Device is the Python object that represents a standard Zenoss Device, defined in $ZENHOME/Products/ZenModel/Device.py
# DeviceInfo is the Python object that represents the info object of that standard Device, defined in $ZENHOME/Products/Zuul/infos/device.py
# Both need to be imported in order to monkey patch them.
#
# Check  $ZENHOME/Products/Zuul/infos/device.py for the names of the standard DeviceInfo fields that can be manipulated in the GUI.
from Products.ZenModel.Device import Device
from Products.Zuul.infos.device import DeviceInfo
from Products.Zuul.infos import ProxyProperty


# Monkey patching in __init__.py can change or add properties or methods, on existing objects

# The Device object already exists but does not have a contact property
# Create the contact property and set a default value for a device's contact.
Device.contact = 'Default is blank'

# Make a device's contact available through the API.
DeviceInfo.contact = ProxyProperty('contact')

# The Device object already exists but we need a new method to deliver a particular zProperty (zCommandUsername)
# You need to use the @property decorator for this to work.

@property
def zCommandUsername(self):
    return self._object.getProperty('zCommandUsername')

# Make the new property method  available through the API.
# It is the property of DeviceInfo (ie. zCommandUsernameAPI here) that must match with
#    a "name" field in a JavaScript .js file
DeviceInfo.zCommandUsernameAPI = zCommandUsername

