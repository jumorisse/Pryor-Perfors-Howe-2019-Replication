// This file contains the templates of all customized views_seq

// Custom Post View
//
// Asks the participant to enter info on their age, gender, education and language. Once entered (or not) the user continues by clicking 'weiter'.
const custom_post = function(config) {
    const view = {
        name: config.name,
        CT: 0,
        trials: config.trials,
        data: config.data,
        // The render functions gets the magpie object as well as the current trial in view counter as input
        render: function (CT, magpie) {
          // html defining how the view will look and what will be asked and offered as answer options
            $("main").html(`
                <div class='magpie-view'>
                <div class='magpie-view magpie-post-test-view'>
                <h1 class='magpie-view-title'>${config.title}</h1>
                <section class="magpie-text-container">
                <p class="magpie-view-text">${config.text}</p>
                </section>
                <form>
                    <p class='magpie-view-text'>
                        <label for="age">${config.age_question}:</label>
                        <input type="number" name="age" min="18" max="110" id="age" />
                    </p>
                    <p class='magpie-view-text'>
                        <label for="gender">${config.gender_question}:</label>
                        <select id="gender" name="gender">
                            <option></option>
                            <option value="${config.gender_male}">${config.gender_male}</option>
                            <option value="${config.gender_female}">${config.gender_female}</option>
                            <option value="${config.gender_other}">${config.gender_other}</option>
                        </select>
                    </p>
                    <p class='magpie-view-text'>
                        <label for="education">${config.edu_question}:</label>
                        <select id="education" name="education">
                            <option></option>
                            <option value="${config.edu_graduated_lower_degree}">${config.edu_graduated_lower_degree}</option>
                            <option value="${config.edu_graduated_high_school}">${config.edu_graduated_high_school}</option>
                            <option value="${config.edu_graduated_college}">${config.edu_graduated_college}</option>
                            <option value="${config.edu_higher_degree}">${config.edu_higher_degree}</option>
                        </select>
                    </p>
                    <p class='magpie-view-text'>
                        <label for="languages">${config.languages_question}:</label>
                        <select id="languages" name="languages">
                            <option></option>
                            <option value="${config.languages_german}">${config.languages_german}</option>
                            <option value="${config.languages_other}">${config.languages_other}</option>
                        </select>
                    </p>
                    <button id="next" class='magpie-view-button'>${config.button_text}</button>
                </div>`);
            // This function will handle  the participants' response
            const handle_click = function(e) {
                // prevents the form from submitting
                e.preventDefault();

                // records the post test info
                magpie.global_data.age = $("#age").val();
                magpie.global_data.gender = $("#gender").val();
                magpie.global_data.education = $("#education").val();
                magpie.global_data.languages = $("#languages").val();

                // continue with the next view
                magpie.findNextView();
            };
            // the handle_click function will be executed once the participant presses 'next'
            $('#next').on("click", handle_click);
        }
    };
    // We have to return the view, so that it can be used in 05_views.js
    return view;
};

// Custom Topic Choice view
//
// Builds up on the button choice view and asks the participant to choose one topic. View ends once the user clicks on a topic.
const custom_topic_choice = function(config) {
    const view = {
        name: config.name,
        CT: 0,
        trials: config.trials,
        data: config.data,
        // The render functions gets the magpie object as well as the current trial in view counter as input
        render: function (CT, magpie) {
            // html defining how the 8 different topics will be displayed and coded
            $("main").html(`
                <div class='magpie-view'>
                <h1 style=" margin-bottom: -8%" class='magpie-view-title'>Welches Thema interessiert dich am meisten?</h1>
                </div>
                <div style="width: 49%; float:left; margin-left: 23%" class='magpie-view'>
                <button style="width: 50%; margin:1%" id="0" class='magpie-view-button'>Tempolimit</button>
                <button style="width: 50%; margin:1%" id="1" class='magpie-view-button'>Digitalisierung und Datenschutz</button>
                <button style="width: 50%; margin:1%" id="2" class='magpie-view-button'>Gender-Debatte</button>
                <button style="width: 50%; margin:1%" id="3" class='magpie-view-button'>Vermögenssteuer</button>
                </div>
                <div style="width: 49%; float:left; margin-left: -23%" class='magpie-view'>
                <button style="width: 50%; margin:1%" id="4" class='magpie-view-button'>Impfpflicht</button>
                <button style="width: 50%; margin:1%" id="5" class='magpie-view-button'>Migration</button>
                <button style="width: 50%; margin:1%" id="6" class='magpie-view-button'>Cannabis Legalisierung</button>
                <button style="width: 50%; margin:1%" id="7" class='magpie-view-button'>Fleischkonsum</button>
                </div>`);
            // This function will handle  the response
            const handle_click = function(e) {
                // we record the trial name, number and the user's response as trial_data
                let trial_data = {
                    trial_name: config.name,
                    trial_number: CT + 1,
                    response: e.target.id
                };

                // Here, we save the trial_data
                magpie.trial_data.push(trial_data);

                // Now, we will continue with the next view
                magpie.findNextView();
                console.log(magpie);
            };

            // We will add the handle_click functions to all 8 buttons
            $('#0').on("click", handle_click);
            $('#1').on("click", handle_click);
            $('#2').on("click", handle_click);
            $('#3').on("click", handle_click);
            $('#4').on("click", handle_click);
            $('#5').on("click", handle_click);
            $('#6').on("click", handle_click);
            $('#7').on("click", handle_click);
            $('#8').on("click", handle_click);
        }
    };
    // We have to return the view, so that it can be used in 05_views.js
    return view;
};

// Custom Statement Rating View
//
// Building up on the rating scale view.
// Shows the user a statement about their previously chosen topic and asks the user to rate how much they agree with the shown statement.
const custom_statement_rating = function(config) {
    const view = {
        name: config.name,
        CT: 0,
        trials: config.trials,
        data: config.data,
        // The render functions gets the magpie object as well as the current trial in view counter as input
        render: function (CT, magpie) {
            var response = magpie.trial_data[0].response;
            // html for showing the statement based on the user's response in the topic choice and displaying the rating scale.
            $("main").html(`
                    <div class='magpie-view'>
                    <h1 class='magpie-view-title'>Bewerte die folgende Aussage:</h1>
                    <p style="font-weight: bold" class='magpie-view-question'>${config.data[response]}</p>
                    </div>
                    <div style="text-align: center; margin-top: -5%" class='magpie-view'>
                    <strong class='magpie-response-rating-option magpie-view-text'>Ich stimme gar nicht zu</strong>
                    <label for="-5" class='magpie-response-rating'>-5</label>
                    <input type="radio" name="answer" id="-5" value="-5" />
                    <label for="-4" class='magpie-response-rating'>-4</label>
                    <input type="radio" name="answer" id="-4" value="-4" />
                    <label for="-3" class='magpie-response-rating'>-3</label>
                    <input type="radio" name="answer" id="-3" value="-3" />
                    <label for="-2" class='magpie-response-rating'>-2</label>
                    <input type="radio" name="answer" id="-2" value="-2" />
                    <label for="-1" class='magpie-response-rating'>-1</label>
                    <input type="radio" name="answer" id="-1" value="-1" />
                    <label for="0" class='magpie-response-rating'>0</label>
                    <input type="radio" name="answer" id="0" value="0" />
                    <label for="1" class='magpie-response-rating'>1</label>
                    <input type="radio" name="answer" id="1" value="1" />
                    <label for="2" class='magpie-response-rating'>2</label>
                    <input type="radio" name="answer" id="2" value="2" />
                    <label for="3" class='magpie-response-rating'>3</label>
                    <input type="radio" name="answer" id="3" value="3" />
                    <label for="4" class='magpie-response-rating'>4</label>
                    <input type="radio" name="answer" id="4" value="4" />
                    <label for="5" class='magpie-response-rating'>5</label>
                    <input type="radio" name="answer" id="5" value="5" />
                    <strong class='magpie-response-rating-option magpie-view-text'>Ich stimme voll zu</strong>
                    </div>`);

            // This function will handle  the response
            const handle_click = function(e) {
                // we record the trial name, number and the user's response as trial_data
                let trial_data = {
                    trial_name: config.name,
                    trial_number: CT + 1,
                    response: e.target.id
                };

                // Here, we save the trial_data
                magpie.trial_data.push(trial_data);

                // Now, we will continue with the next view
                magpie.findNextView();
            };

            // We will add the handle_click functions to all possible ratings
            $('#-5').on("click", handle_click);
            $('#-4').on("click", handle_click);
            $('#-3').on("click", handle_click);
            $('#-2').on("click", handle_click);
            $('#-1').on("click", handle_click);
            $('#0').on("click", handle_click);
            $('#1').on("click", handle_click);
            $('#2').on("click", handle_click);
            $('#3').on("click", handle_click);
            $('#4').on("click", handle_click);
            $('#5').on("click", handle_click);
        }
    };
    // We have to return the view, so that it can be used in 05_views.js
    return view;
};

// Custom Dilemma Decision View
//
// Always runs 5 trials:
// 1st trial: The user is assigned randomly (with equal chance) to the experimental conditions, i.e. either both infos shown or only ingroup info shown and either
//            ingroup favors option A or ingroup favors option B. The dilemma is displayed and the user can continued by clicking 'weiter'.
// 2nd trial: Additionally to the dilemma, the decision options are displayed. Again, the user can continue by pressing 'weiter'.
// 3rd trial: Additionally to dilemma and options, the ingroup info is displayed. Depending on the both_infos condition (assigned in trial 1) also the outgroup info is displayed.
//            The user continues by pressing 'weiter'.
// 4th trial: Additionally to dilemma, options and in-/outgroup info, 6 buttons are displayed that show the different levels of the two decision options.
//            The user is asked to pick one. Once the user clicks on one button, the trial is over. This trial builds up on the button choice view.
// 5th trial: The previously displayed elements are not displayed any longer. Instead the user is asked how he/she feels about their decision and can answer by clicking
//            different levels between 'sehr gut' and 'garnicht gut'. This view builds up on the rating scale view.
const custom_dilemma_decision = function(config) {
    const view = {
        name: config.name,
        CT: 0,
        trials: config.trials,
        data: config.data,
        // The render functions gets the magpie object as well as the current trial in view counter as input
        render: function (CT, magpie) {
            // loads the topic choice and statement rating of the user. This is needed to show the correct in-/outgroup info
            var response = magpie.trial_data[0].response;
            var rating = magpie.trial_data[1].response;
            if (CT == 0) {
              // In the first trial (if this the first dilemma the user is shown) the user is assigned to one experimental condition (50/50 chance) determining whether
              // only ingroup or also outgroup info will be shown.
              if (magpie.currentTrialCounter < 10) {
                var both_infos = Math.random() < 0.5;
              }
              // If this is the second dilemma for the user, the both_info condition is the same as for the first one.
              if (magpie.currentTrialCounter > 10){
                var both_infos = magpie.trial_data[2].both_infos;
              }
              // Always in the first trial of this view, the user is assigned to one condition determining which option its ingroup favors (50/50 chance).
              var ingroup_info_a = Math.random() < 0.5;
            }
            if (CT == 1) {
              // The both_infos condition is always retrieved from the first time this view was run
              var both_infos = magpie.trial_data[2].both_infos;
              // The ingroup norm condition is always retrieved from the latest run of the first trial of this view.
              if (magpie.currentTrialCounter < 12) {
                var ingroup_info_a = magpie.trial_data[2].ingroup_info_a;
              }
              if (magpie.currentTrialCounter >= 12) {
                var ingroup_info_a = magpie.trial_data[7].ingroup_info_a;
              }
            };
            if (CT == 2) {
              var both_infos = magpie.trial_data[2].both_infos;
              if (magpie.currentTrialCounter < 12) {
                var ingroup_info_a = magpie.trial_data[2].ingroup_info_a;
              }
              if (magpie.currentTrialCounter >= 12) {
                var ingroup_info_a = magpie.trial_data[7].ingroup_info_a;
              }
            };
            if (CT == 3) {
              var both_infos = magpie.trial_data[2].both_infos;
              if (magpie.currentTrialCounter < 12) {
                var ingroup_info_a = magpie.trial_data[2].ingroup_info_a;
              }
              if (magpie.currentTrialCounter >= 12) {
                var ingroup_info_a = magpie.trial_data[7].ingroup_info_a;
              }
            };
            if (CT == 4) {
              var both_infos = magpie.trial_data[2].both_infos;
              if (magpie.currentTrialCounter < 12) {
                var ingroup_info_a = magpie.trial_data[2].ingroup_info_a;
              }
              if (magpie.currentTrialCounter >= 12) {
                var ingroup_info_a = magpie.trial_data[7].ingroup_info_a;
              }
            };

            // Just displays the dilemma
            if (CT == 0) {
              $("main").html(`<div style="text-align: center" class='magpie-view'>
                      <h1 class='magpie-view-title'>Was ein Dilemma!</h1>
                      <p class='magpie-view-question magpie-view-qud'>${config.data[response].dilemma}
                      </br>
                      <button id="next" class='magpie-view-button' class="magpie-nodisplay">WEITER</button>
                      </div>`);
            };

            // Displays the dilemma and the two decision options
            if (CT == 1) {
                $("main").html(`<div style="text-align: center" class='magpie-view'>
                        <h1 class='magpie-view-title'>Die Antwortmöglichkeiten</h1>
                        <p class='magpie-view-question magpie-view-qud'>${config.data[response].dilemma}
                        </br> </br>Entweder: ${config.data[response].optionA}
                        </br>Oder: ${config.data[response].optionB}
                        </br>
                        <button id="next" class='magpie-view-button' class="magpie-nodisplay">WEITER</button>
                        </div>`);
            };

            // Displays the dilemma, options and the in-/outgroup info (based on the user's conditions, see if statements)
            if (CT == 2) {
              if (both_infos == true) {
                if (ingroup_info_a == true) {
                  $("main").html(`<div style="text-align: center" class='magpie-view'>
                          <h1 class='magpie-view-title'>Wie haben die Anderen entschieden?</h1>
                          <p class='magpie-view-question magpie-view-qud'>${config.data[response].dilemma}
                          </br> </br>Entweder: ${config.data[response].optionA}
                          </br>Oder: ${config.data[response].optionB}
                          </br> </br>  ${config.data[response].ingroup_a}
                          </br> </br> ${config.data[response].outgroup_b} </p>
                          </br>
                          <button id="next" class='magpie-view-button' class="magpie-nodisplay">WEITER</button>
                          </div>`);
                };
                if (ingroup_info_a == false) {
                  $("main").html(`<div style="text-align: center" class='magpie-view'>
                          <h1 class='magpie-view-title'>Wie haben die Anderen entschieden?</h1>
                          <p class='magpie-view-question magpie-view-qud'>${config.data[response].dilemma}
                          </br> </br>Entweder: ${config.data[response].optionA}
                          </br>Oder: ${config.data[response].optionB}
                          </br> </br>  ${config.data[response].ingroup_b}
                          </br> </br> ${config.data[response].outgroup_a} </p>
                          </br>
                          <button id="next" class='magpie-view-button' class="magpie-nodisplay">WEITER</button>
                          </div>`);
                };
              };
              if (both_infos == false) {
                if (ingroup_info_a == true) {
                  $("main").html(`<div style="text-align: center" class='magpie-view'>
                          <h1 class='magpie-view-title'>Wie haben die Anderen entschieden?</h1>
                          <p class='magpie-view-question magpie-view-qud'>${config.data[response].dilemma}
                          </br> </br>Entweder: ${config.data[response].optionA}
                          </br>Oder: ${config.data[response].optionB}
                          </br> </br> ${config.data[response].ingroup_a} </p>
                          </br>
                          <button id="next" class='magpie-view-button' class="magpie-nodisplay">WEITER</button>
                          </div>`);
                };
                if (ingroup_info_a == false) {
                  $("main").html(`<div style="text-align: center" class='magpie-view'>
                          <h1 class='magpie-view-title'>Wie haben die Anderen entschieden?</h1>
                          <p class='magpie-view-question magpie-view-qud'>${config.data[response].dilemma}
                          </br> </br>Entweder: ${config.data[response].optionA}
                          </br>Oder: ${config.data[response].optionB}
                          </br> </br> ${config.data[response].ingroup_b} </p>
                          </br>
                          <button id="next" class='magpie-view-button' class="magpie-nodisplay">WEITER</button>
                          </div>`);
                };

              };
            };

            // Displays the dilemma, options, in-/outgroup info and the buttons with which the user can make their decision.
            if (CT == 3) {
              if (both_infos == true) {
                if (ingroup_info_a == true) {
                  $("main").html(`<div style="text-align: center" class='magpie-view'>
                          <h1 class='magpie-view-title'>Wie würdest du entscheiden?</h1>
                          <p class='magpie-view-question magpie-view-qud'>${config.data[response].dilemma}
                          </br> </br>Entweder: ${config.data[response].optionA}
                          </br>Oder: ${config.data[response].optionB}
                          </br> </br>  ${config.data[response].ingroup_a} </br> </br> ${config.data[response].outgroup_b} </p>
                          <h2 class='magpie-view-question'>Wie würdest du dich entscheiden?</h2>
                          </div>
                          <div style="width: 49%; float:left; margin-left: 23%; margin-top:-5%" class='magpie-view'>
                          <button style="width: 50%; margin:1%" id="1" class='magpie-view-button'>Definitiv: ${config.data[response].optionA}</button>
                          <button style="width: 50%; margin:1%" id="2" class='magpie-view-button'>Ziemlich sicher: ${config.data[response].optionA}</button>
                          <button style="width: 50%; margin:1%" id="3" class='magpie-view-button'>Vermutlich: ${config.data[response].optionA}</button>
                          </div>
                          <div style="width: 49%; float:left; margin-left: -23%; margin-top:-5%" class='magpie-view'>
                          <button style="width: 50%; margin:1%" id="4" class='magpie-view-button'>Vermutlich: ${config.data[response].optionB}</button>
                          <button style="width: 50%; margin:1%" id="5" class='magpie-view-button'>Ziemlich sicher: ${config.data[response].optionB}</button>
                          <button style="width: 50%; margin:1%" id="6" class='magpie-view-button'>Definitiv: ${config.data[response].optionB}</button>
                          </div>`);
                };
                if (ingroup_info_a == false) {
                  $("main").html(`<div style="text-align: center" class='magpie-view'>
                          <h1 class='magpie-view-title'>Wie würdest du entscheiden?</h1>
                          <p class='magpie-view-question magpie-view-qud'>${config.data[response].dilemma}
                          </br> </br>Entweder: ${config.data[response].optionA}
                          </br>Oder: ${config.data[response].optionB}
                          </br> </br>  ${config.data[response].ingroup_b} </br> </br> ${config.data[response].outgroup_a} </p>
                          <h2 class='magpie-view-question'>Wie würdest du dich entscheiden?</h2>
                          </div>
                          <div style="width: 49%; float:left; margin-left: 23%; margin-top:-5%" class='magpie-view'>
                          <button style="width: 50%; margin:1%" id="1" class='magpie-view-button'>Definitiv: ${config.data[response].optionA}</button>
                          <button style="width: 50%; margin:1%" id="2" class='magpie-view-button'>Ziemlich sicher: ${config.data[response].optionA}</button>
                          <button style="width: 50%; margin:1%" id="3" class='magpie-view-button'>Vermutlich: ${config.data[response].optionA}</button>
                          </div>
                          <div style="width: 49%; float:left; margin-left: -23%; margin-top:-5%" class='magpie-view'>
                          <button style="width: 50%; margin:1%" id="4" class='magpie-view-button'>Vermutlich: ${config.data[response].optionB}</button>
                          <button style="width: 50%; margin:1%" id="5" class='magpie-view-button'>Ziemlich sicher: ${config.data[response].optionB}</button>
                          <button style="width: 50%; margin:1%" id="6" class='magpie-view-button'>Definitiv: ${config.data[response].optionB}</button>
                          </div>`);
                };
              };
              if (both_infos == false) {
                if (ingroup_info_a == true) {
                  $("main").html(`<div style="text-align: center" class='magpie-view'>
                          <h1 class='magpie-view-title'>Wie würdest du entscheiden?</h1>
                          <p class='magpie-view-question magpie-view-qud'>${config.data[response].dilemma}
                          </br> </br>Entweder: ${config.data[response].optionA}
                          </br>Oder: ${config.data[response].optionB}
                          </br> </br> ${config.data[response].ingroup_a} </p>
                          <h2 class='magpie-view-question'>Wie würdest du dich entscheiden?</h2>
                          </div>
                          <div style="width: 49%; float:left; margin-left: 23%; margin-top:-5%" class='magpie-view'>
                          <button style="width: 50%; margin:1%" id="1" class='magpie-view-button'>Definitiv: ${config.data[response].optionA}</button>
                          <button style="width: 50%; margin:1%" id="2" class='magpie-view-button'>Ziemlich sicher: ${config.data[response].optionA}</button>
                          <button style="width: 50%; margin:1%" id="3" class='magpie-view-button'>Vermutlich: ${config.data[response].optionA}</button>
                          </div>
                          <div style="width: 49%; float:left; margin-left: -23%; margin-top:-5%" class='magpie-view'>
                          <button style="width: 50%; margin:1%" id="4" class='magpie-view-button'>Vermutlich: ${config.data[response].optionB}</button>
                          <button style="width: 50%; margin:1%" id="5" class='magpie-view-button'>Ziemlich sicher: ${config.data[response].optionB}</button>
                          <button style="width: 50%; margin:1%" id="6" class='magpie-view-button'>Definitiv: ${config.data[response].optionB}</button>
                          </div>`);
                };
                if (ingroup_info_a == false) {
                  $("main").html(`<div style="text-align: center" class='magpie-view'>
                          <h1 class='magpie-view-title'>Wie würdest du entscheiden?</h1>
                          <p class='magpie-view-question magpie-view-qud'>${config.data[response].dilemma}
                          </br> </br>Entweder: ${config.data[response].optionA}
                          </br>Oder: ${config.data[response].optionB}
                          </br> </br> ${config.data[response].ingroup_b} </p>
                          <h2 class='magpie-view-question'>Wie würdest du dich entscheiden?</h2>
                          </div>
                          <div style="width: 49%; float:left; margin-left: 23%; margin-top:-5%" class='magpie-view'>
                          <button style="width: 50%; margin:1%" id="1" class='magpie-view-button'>Definitiv: ${config.data[response].optionA}</button>
                          <button style="width: 50%; margin:1%" id="2" class='magpie-view-button'>Ziemlich sicher: ${config.data[response].optionA}</button>
                          <button style="width: 50%; margin:1%" id="3" class='magpie-view-button'>Vermutlich: ${config.data[response].optionA}</button>
                          </div>
                          <div style="width: 49%; float:left; margin-left: -23%; margin-top:-5%" class='magpie-view'>
                          <button style="width: 50%; margin:1%" id="4" class='magpie-view-button'>Vermutlich: ${config.data[response].optionB}</button>
                          <button style="width: 50%; margin:1%" id="5" class='magpie-view-button'>Ziemlich sicher: ${config.data[response].optionB}</button>
                          <button style="width: 50%; margin:1%" id="6" class='magpie-view-button'>Definitiv: ${config.data[response].optionB}</button>
                          </div>`);
                };
              };
            };

            // Displays only a statement and options from which the user can choose how they feeld about their choice.
            if (CT == 4) {
              $("main").html(`
                      <div class='magpie-view'>
                      <h1 class='magpie-view-title'></h1>
                      <p style="font-weight: bold" class='magpie-view-question'>Wie fühlst du dich nach dieser Entscheidung?</p>
                      </div>
                      <div style="text-align: center; margin-top: -5%" class='magpie-view'>
                      <strong class='magpie-response-rating-option magpie-view-text'>Garnicht gut</strong>
                      <label for="-3" class='magpie-response-rating'>-3</label>
                      <input type="radio" name="answer" id="-3" value="-3" />
                      <label for="-2" class='magpie-response-rating'>-2</label>
                      <input type="radio" name="answer" id="-2" value="-2" />
                      <label for="-1" class='magpie-response-rating'>-1</label>
                      <input type="radio" name="answer" id="-1" value="-1" />
                      <label for="0" class='magpie-response-rating'>0</label>
                      <input type="radio" name="answer" id="0" value="0" />
                      <label for="1" class='magpie-response-rating'>1</label>
                      <input type="radio" name="answer" id="1" value="1" />
                      <label for="2" class='magpie-response-rating'>2</label>
                      <input type="radio" name="answer" id="2" value="2" />
                      <label for="3" class='magpie-response-rating'>3</label>
                      <input type="radio" name="answer" id="3" value="3" />
                      <strong class='magpie-response-rating-option magpie-view-text'>Sehr gut</strong>
                      </div>`);
            };


            // This function will handle  the response
            const handle_click = function(e) {
                // we record the trial name, number, response and both of the user's assigned conditions as trial_data
                let trial_data = {
                    trial_name: config.name,
                    trial_number: CT + 1,
                    response: e.target.id,
                    both_infos: both_infos,
                    ingroup_info_a: ingroup_info_a
                };

                // Here, we save the trial_data
                magpie.trial_data.push(trial_data);

                // Now, we will continue with the next view
                magpie.findNextView();
            };

            // For trial 1 to 3 we will add the handle_click function to the 'weiter'/'next' button
            if (CT == 0) {
              $('#next').on("click", handle_click);
            };

            if (CT == 1) {
              $('#next').on("click", handle_click);
            };

            if (CT == 2) {
              $('#next').on("click", handle_click);
            };

            // For trial 4, we add the handle_click function to all buttons representing a dilemma decision
            if (CT == 3) {
              $('#1').on("click", handle_click);
              $('#2').on("click", handle_click);
              $('#3').on("click", handle_click);
              $('#4').on("click", handle_click);
              $('#5').on("click", handle_click);
              $('#6').on("click", handle_click);
            };

            // For trial 5, we add the handle_click function to all possible ratings of the statement
            if (CT == 4) {
              $('#-3').on("click", handle_click);
              $('#-2').on("click", handle_click);
              $('#-1').on("click", handle_click);
              $('#0').on("click", handle_click);
              $('#1').on("click", handle_click);
              $('#2').on("click", handle_click);
              $('#3').on("click", handle_click);
            };
        }
    };
    // We have to return the view, so that it can be used in 05_views.js
    return view;
};

// Custom Group Identification View
//
// Builds up on the rating scale view.
// Always runs 2 trials:
// 1st trial: Asks whether user identifies with people who are advocates of the user's chosen topic/the related statement.
// 2nd trial: Asks whether user identifies with people who are against the user's chosen topic/the related statement.
const group_identification = function(config) {
    const view = {
        name: config.name,
        CT: 0,
        trials: config.trials,
        data: config.data,
        // The render functions gets the magpie object as well as the current trial in view counter as input
        render: function (CT, magpie) {
          var response = magpie.trial_data[0].response;
          var rating = magpie.trial_data[1].response;
            // The question and the two options (user identifies or does not identifie) are displayed as well as the buttons representing the different
            // levels of agreement between those two options.
            $("main").html(`
                <div class='magpie-view'>
                <h1 class='magpie-view-title'> Abschlussbefragung</h1>
                <p class='magpie-view-question magpie-view-qud'>Bitte bewerte, wie sehr die folgenden Aussagen auf dich zustimmen oder nicht zustimmen:</p>
                <p class='magpie-view-question'>${config.data[response][CT].question}</p>
                </div>
                <div style="text-align: center; margin-top: -5%" class='magpie-view'>
                <strong class='magpie-response-rating-option magpie-view-text'>${config.data[response][CT].option2}</strong>
                <label for="-3" class='magpie-response-rating'>-3</label>
                <input type="radio" name="answer" id="-3" value="-3" />
                <label for="-2" class='magpie-response-rating'>-2</label>
                <input type="radio" name="answer" id="-2" value="-2" />
                <label for="-1" class='magpie-response-rating'>-1</label>
                <input type="radio" name="answer" id="-1" value="-1" />
                <label for="0" class='magpie-response-rating'>0</label>
                <input type="radio" name="answer" id="0" value="0" />
                <label for="1" class='magpie-response-rating'>1</label>
                <input type="radio" name="answer" id="1" value="1" />
                <label for="2" class='magpie-response-rating'>2</label>
                <input type="radio" name="answer" id="2" value="2" />
                <label for="3" class='magpie-response-rating'>3</label>
                <input type="radio" name="answer" id="3" value="3" />
                <strong class='magpie-response-rating-option magpie-view-text'>${config.data[response][CT].option1}</strong>
                </div>`);
            // This function will handle  the response
            const handle_click = function(e) {
                // we record the trial name, number and the user's response as trial_data
                let trial_data = {
                    trial_name: config.name,
                    trial_number: CT + 1,
                    response: e.target.id
                };

                // Here, we save the trial_data
                magpie.trial_data.push(trial_data);

                // Now, we will continue with the next view
                magpie.findNextView();
                console.log(magpie);
            };

            // We will add the handle_click functions to all buttons representing the different levels of agreement with either option.
            $('#-3').on("click", handle_click);
            $('#-2').on("click", handle_click);
            $('#-1').on("click", handle_click);
            $('#0').on("click", handle_click);
            $('#1').on("click", handle_click);
            $('#2').on("click", handle_click);
            $('#3').on("click", handle_click);
        }
    };
    // We have to return the view, so that it can be used in 05_views.js
    return view;
};
