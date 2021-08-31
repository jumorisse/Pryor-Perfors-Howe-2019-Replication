// In this file you initialize and configure your experiment using magpieInit

$("document").ready(function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };

    // calls magpieInit
    // in debug mode this returns the magpie-object, which you can access in the console of your browser
    // e.g. >> window.magpie_monitor or window.magpie_monitor.findNextView()
    // in all other modes null will be returned
    window.magpie_monitor = magpieInit({
        // Here we specify all views we are using and their order
        views_seq: [
            intro,
            post_test,
            instructions,
            topic_choice,
            statement_rating,
            dilemma_instructions,
            _.shuffle([dilemma_decision1, dilemma_decision2]),
            understanding_check,
            group_ident,
            thanks,
        ],
        // Here we specify the deployment info.
        deploy: {
            experimentID: "283",
            serverAppURL: "https://magpie-demo.herokuapp.com/api/submit_experiment/",
            // Possible deployment methods are:
            // "debug" and "directLink"
            // As well as "MTurk", "MTurkSandbox" and "Prolific"
            deployMethod: "debug",
            contact_email: "jmorisse@uni-osnabrueck.de",
        },
        // We don't incorporate a progress bar.
        progress_bar: {
            in: [
                // list the view-names of the views for which you want a progress bar
            ],
             // Possible styles are "default", "separate" and "chunks"
            style: "separate",
            width: 100
        }
    });
});
