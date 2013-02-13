Introduction
============

JSBlur was written purely out of annoyance on why it was farily difficult to
define a "blur" sort of event for DOM elements, like divs or modals, that 
behaves correctly.  

Dependencies
============

- jQuery

How to use
============

JSUtils is an object that is instanciated to the public variable as window.jsutils.  The main 
method of this object to register a blur event takes 3 arguments, defined below.

  
  
  @param {object} selectorToRegister The jquery selector to be registered for blur events
  @param {boolean} unregisterAfter Should the selector be unregistered after being blur'd so it's not listened for anymore.  Set to true for auto-generated elements that should registered each time generated
  @param {object} callback An optional callback to be executed when the provided selector is blur'd
  

Examples

  Basic example
  jsblur.registerBlurEvent($('#divName'));

  More verbose example
  jsblur.registerBlurEvent($('#divName'),false,null);

  How to use with an element that is dynamically created & removed from the DOM
  jsblur.registerBlurEvent($('#divName'),true,null);

  Example with a callback
  var callbackFunction = function(){
    alert('element blurred');
  }
  jsblur.registerBlurEvent($('#divName'),false,callbackFunction);

JSFiddle

  http://jsfiddle.net/cthorne66/GRwLC/10/

License
=======

The MIT License

Copyright (c) 2012 CleverTech

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
