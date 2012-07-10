/**
 * @preserve Extractor 1.1
 * Copyright 2011 Kevin Wetzels - Licensed under the MIT License.
 */
(function($) {

    var extractorCount = 0;

    $.fn.extractor = function(opts) {
        var attrKeys = opts.attributesToSave || ['class', 'style'];
        this.each(function() {
            var e = $(this);
            // Since loading the dialog will override the class and style
            // attributes of the content, we want to keep track of their
            // original values.
            var attrs = {};
            for (var i = 0, len = attrKeys.length; i < len; ++i) {
                var k = attrKeys[i];
                var v = e.attr(k);
                attrs[k] = (v ? v : '');
            }
            // Get or generate the id of the content loaded into the modal.
            var id = e.attr('id');
            if (!$.trim(id)) {
                id = 'extractor-' + (++extractorCount);
                e.attr('id', id);
            }
            // Generate the placeholder so we know where to put the content
            // when the dialog is closed.
            var placeholderId = 'extractor-placeholder-' + id;
            $('<div id="' + placeholderId + '"></div>').insertBefore(e).hide();
            // Get a hold of the options we have to alter
            var originalClose = (opts.close ? opts.close : $.noop);
            var c = opts.dialogClass;
            // Override those options
            var options = $.extend(true, opts, {
                close: function(evt, ui) {
                    // Perform the regular close
                    originalClose(evt, ui);
                    // And place the content back where it belongs
                    var o = $('#' + id);
                    o.dialog('destroy');
                    o.attr(attrs);
                    $('#' + placeholderId).replaceWith(o);
                    // IE needs this
                    $('#' + id).show();
                },
                dialogClass: (c ? c : '') + ' ui-extractor'
            });
            // Ready to rock.
            e.dialog(options);
        });
        return this;
    };

})(jQuery);
