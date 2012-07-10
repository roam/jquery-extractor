# jQuery Extractor

Extractor is a jQuery plugin wrapping jQuery UI's dialog widget to turn part
of a page into a dialog and to put it back where it belongs when closing the
dialog.

Have a look at [the demo](http://roam.be/lab/extractor/).

* * *

## Usage

Normally you would set up a dialog like this:

    $('#comments').dialog({
        width: 400,
        close: function(evt, ui) {
            ...
        }
    });

If you want to move the comments back to where they were *originally* when
closing the dialog, all you'd have to do is this:

    $('#comments').extractor({
        width: 400,
        close: function(evt, ui) {
            ...
        }
    });

So include the necessary jQuery UI files as usual, then download
jquery.extractor.js, include it and (optionally) add the following rule to your
CSS file to turn the close icon from the jQuery dialog into a pin:

    .ui-extractor .ui-dialog-titlebar .ui-icon-closethick {
        background-position: -144px -144px;
    }

The `ui-extractor` class is applied to the dialog, so you can style the content
differently depending on whether it is part of the page or loaded into the
dialog.

Finally, add a way to invoke the dialog:

    $('a#load-comments-in-dialog').click(function(evt) {
        evt.preventDefault();
        $('#comments').extractor({
            width: 500,
            height: 400
        });
    });

* * *

## Credits
Thanks to [Farhan Shahid](https://plus.google.com/116313504051156157687) for
reporting and fixing a bug with overriding the dialog options.