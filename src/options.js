module.exports = {
    logger:                 null,                   // define logging instance. leave null for default
    logStackSize:           20,                     // limits the stack size of log outputs to collect
    debug:                  false,                  // set true to log more info
    baseUrl:                'https://videomail.io', // leave as it, permanent url to post videos
    socketUrl:              'wss://videomail.io',   // leave as it, permanent url to send frames
    siteName:               'videomail-client-demo',// Required for the API. If you change it, contact me
    cache:                  true,                   // reduces GET queries when loading videos
    insertCss:              true,                   // inserts predefined CSS, see examples
    enablePause:            true,                   // enable pause/resume button
    enableAutoPause:        true,                   // automatically pauses when window becomes inactive
    enableSpace:            true,                   // hitting space can pause recording
    disableSubmit:          false,                  // set this to true if you do not want to submit videos,
                                                    // but just want to record and replay these temporarily
    enableAutoValidation:   true,                   // automatically validates all form inputs if any exist

    selectors: {                                    // default CSS selectors you can alter, see examples
        containerId:    'videomail',
        replayClass:    'replay',
        userMediaClass: 'userMedia',
        visualsClass:   'visuals',
        buttonsClass:   'buttons',

        recordButtonClass: 'record',
        pauseButtonClass:  'pause',
        resumeButtonClass: 'resume',
        stopButtonClass:   'stop',
        backButtonClass:   'back',
        submitButtonClass: 'submit',

        keyInputName:      'videomail_key',

        formId:            null,                    // automatically detects form if any
        submitButtonId:    null                     // automatically detects submit button in the form
    },
    audio: {
        enabled: false                              // experimental, not working properly yet
    },
    video: {
        fps:            15,                         // depends on your connection
        limitSeconds:   30,                         // recording automatically stops after that limit
        countdown:      3,                          // set it to 0 or false to disable it
        width:          320,
        height:         240
    },
    image: {
        quality:    .35,
        types:      ['webp', 'jpeg']                // recommended settings to make most of all browsers
    },
    text: {
        paused:         'Paused',                   // alter these text if you have internationalisation
        processing:     'Processing',
        limitReached:   'Limit reached'
    },
    notifier: {
        entertain:         false,                   // when true, user is entertained while waiting, see examples
        entertainClass:    'bg',
        entertainLimit:    7,
        entertainInterval: 15000
    },
    timeouts: {
        userMedia:  5e3,                            // increase if you want user give more time to enable webcam
        connection: 1e4                             // increase if connection is slow
    },
    displayErrors:    true,                         // show errors inside the container?
    fakeUaString:     null                          // just for testing purposes to simulare VM on diff browsers
}
