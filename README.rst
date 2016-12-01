=====================================
ZenPacks.community.DeviceOverviewMods
=====================================


Description
===========
This ZenPack provides various customisations of a Device Overview panel.


Features
========

Device and component object classes
-----------------------------------
* None


Modeler Plugins
---------------

* None


Monitoring Templates
--------------------

* None


GUI modifications
-----------------

The Device Overview panel is made up of several separate areas, each of which can be independently modified:

*    deviceoverviewpanel_summary (top-left)
*    deviceoverviewpanel_idsummary (top-middle)
*    deviceoverviewpanel_descriptionsummary (top-right)
*    deviceoverviewpanel_customsummary (bottom-left)
*    deviceoverviewpanel_systemsummary (inner panel in bottom-left)
*    deviceoverviewpanel_snmpsummary (bottom-right)

These panels are defined in $ZENHOME/Products/ZenUI3/browser/resources/js/zenoss/DeviceOverviewPanel.js

This ZenPack provides the following:

* For devices of object class DEVICE:

  * Add a contact property to the systemsummary panel
  * Add a zCommandUsername to the snmpsummary panel
  * Remove the snmpcommunity property from the snmpsummary panel

* For devices of object class ZenPacks.zenoss.Microsoft.Windows.Device.Device:
  
  * Add an msexchangeversion property to the descriptionsummary panel

The contact property and the zCommandUsername property method are defined in __init__.py in the base directory.

Usage
=====




Requirements & Dependencies
===========================

* Zenoss Versions Supported:  4.x
* External Dependencies: 


* Installation Notes: 

  - Restart zenoss entirely after installation 



Download
========
Download the appropriate package for your Zenoss version from the list
below.

* Zenoss 4.0+ `Latest Package for Python 2.7`_

ZenPack installation
======================

This ZenPack can be installed from the .egg file using either the GUI or the
zenpack command line. 

To install in development mode, find the repository on github and use the *Download ZIP* button
(right-hand margin) to download a tgz file and unpack it to a local directory, say,
/code/ZenPacks .  Install from /code/ZenPacks with::
  zenpack --link --install ZenPacks.community.DeviceOverviewMods
  Restart zenoss after installation.


Limitations and Troubleshooting
===============================



Change History
==============
* 1.0.0
   - Initial Release


Screenshots
===========

See the screenshots directory.


.. External References Below. Nothing Below This Line Should Be Rendered

.. _Latest Package for Python 2.7: https://github.com/ZenossDevGuide/ZenPacks.community.DeviceOverviewMods/blob/master/dist/ZenPacks.community.DeviceOverviewMods-1.0.0-py2.7.egg?raw=true

Acknowledgements
================


