<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Client-side Language Lines
    |--------------------------------------------------------------------------
    |
    | These are messages made available to the client browser via JavaScript.
    | To compile this file run: php artisan october:util compile lang
    |
    */

    'markdowneditor' => [
        'formatting' => 'Formatting',
        'quote' => 'Quote',
        'code' => 'Code',
        'header1' => 'Header 1',
        'header2' => 'Header 2',
        'header3' => 'Header 3',
        'header4' => 'Header 4',
        'header5' => 'Header 5',
        'header6' => 'Header 6',
        'bold' => 'Bold',
        'italic' => 'Italic',
        'unorderedlist' => 'Unordered List',
        'orderedlist' => 'Ordered List',
        'video' => 'Video',
        'image' => 'Image',
        'link' => 'Link',
        'horizontalrule' => 'Insert Horizontal Rule',
        'fullscreen' => 'Full screen',
        'preview' => 'Preview',
    ],

    'mediamanager' => [
        'insert_link' => "Insert Media Link",
        'insert_image' => "Insert Media Image",
        'insert_video' => "Insert Media Video",
        'insert_audio' => "Insert Media Audio",
        'invalid_file_empty_insert' => "Please select file to insert a links to.",
        'invalid_file_single_insert' => "Please select a single file.",
        'invalid_image_empty_insert' => "Please select image(s) to insert.",
        'invalid_video_empty_insert' => "Please select a video file to insert.",
        'invalid_audio_empty_insert' => "Please select an audio file to insert.",
    ],

    'alert' => [
        'confirm_button_text' => 'OK',
        'cancel_button_text' => 'Cancel',
    ],

    'datepicker' => [
        'previousMonth' => 'Previous Month',
        'nextMonth' => 'Next Month',
        'months' => ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        'weekdays' => ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        'weekdaysShort' => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    ],

    'filter' => [
        'group' => [
            'all' => 'all'
        ],
        'dates' => [
            'all' => 'all',
            'filter_button_text' => 'Filter',
            'reset_button_text'  => 'Reset',
            'date_placeholder' => 'Date',
            'after_placeholder' => 'After',
            'before_placeholder' => 'Before'
        ]
    ],

    'eventlog' => [
        'show_stacktrace' => 'Show the stacktrace',
        'hide_stacktrace' => 'Hide the stacktrace',
        'tabs' => [
            'formatted' => 'Formatted',
            'raw' => 'Raw',
        ],
        'editor' => [
            'title' => 'Select the source code editor to use',
            'description' => 'Your OS environnement must be configured to listen to one of these URL schemes.',
            'openWith' => 'Open with',
            'remember_choice' => 'Remember the selected option for this browser session',
            'open' => 'Open',
            'cancel' => 'Cancel'
        ]
    ]
];
