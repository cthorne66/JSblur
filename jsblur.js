JSblur = function EventUtils() {
    var registeredSelectors = [];
    var closableClass = 'closable';
    var construct = function construct() {};

    
    /**
     * Establish listening for certain click and keystroke events
     */
    $(document).on('mouseup.offClick, keydown.offClick', function(e) {
        var input = (e.keyCode ? e.keyCode : e.which);
        if (input == 1 || input === 27) { //left mouse click or escape key
            performBlurEvents(e);
        }
    });

    /**
     * This is how you register DOM elements for blur type events
     * @param {object} selectorToRegister The jquery selector to be registered for blur events
     * @param {boolean} unregisterAfter Should the selector be unregistered after being blur'd so it's not listened for anymore.  Set to true for auto-generated elements that should registered each time generated
     * @param {object} callback An optional callback to be executed when the provided selector is blur'd
     */
    this.registerBlurEvent = function(selectorToRegister, unregisterAfter, callback) {
        var unreg = (typeof unregisterAfter != 'undefined' && unregisterAfter) ? true : false;
        var arr = {'selector': selectorToRegister,'callback': callback,'unregisterAfter': unreg};
        registeredSelectors.push(arr);
    };

    var performBlurEvents = function(e) {
        var itemsToUnregister = [];
        var el = e.target || '';
        var tag = el.tagName || '';
        $.each(registeredSelectors, function(index, obj) {
            var isVisible = $(obj.selector).css('display') == 'block';
            var isClickedOutside = $(el).closest(obj.selector).length === 0;
            var isClosable = ($(el).hasClass(closableClass) || (tag == 'LABEL' && $(el).find(':input').hasClass(closableClass)));
            if (isVisible && (isClickedOutside || isClosable)) {
                if (hasCallback(obj.callback)) {
                    obj.callback(obj.selector);
                } else {
                    obj.selector.hide();
                }
                if (obj.unregisterAfter) {
                    itemsToUnregister.push(index);
                }
            }
        });
        if (itemsToUnregister.length > 0) {
            arr = itemsToUnregister.reverse();
            $.each(arr, function(index, item) {
                registeredSelectors.splice(item, 1);
            });
        }
    };

    var hasCallback = function(callback) {
        return (callback !== null && typeof callback !== 'undefined') ? true : false;
    };
    construct();
};
window.jsblur = new JSblur();