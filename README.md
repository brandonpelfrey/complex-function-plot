A WebGL-based complex expression parser and plotter.

When an expression is entered, the PEG.js parser based on the grammar defined in the page
generates an string of functions equivalent to the complex expression. These functions are
pre-defined in a GLSL shader 'template'.

TODO: Document all the possible things you can do in expressions.

* Uses PEG.js to parse a grammar which describes complex-valued expressions.
* Uses THREE.js for handling the ugly bits with actually getting a fullscreen quad and compiling shaders, etc.

