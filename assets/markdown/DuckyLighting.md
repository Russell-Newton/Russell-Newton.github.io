A standalone Python project that controls the by-key lighting of a Ducky One2 RGB keyboard.
* Reverse-engineered Ducky’s USB protocol for lighting up the board by individual keys.
* Utilized a distribution of HIDAPI with a modified version of python-easyhid (C wrapper).
* Designed a metaclass to organize effect layers in a lighting configuration.