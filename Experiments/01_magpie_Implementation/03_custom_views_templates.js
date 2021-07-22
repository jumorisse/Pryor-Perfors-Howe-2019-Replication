// In this file you can create your own custom view templates


// A view template is a function that returns a view,
// this functions gets some config (e.g. trial_data, name, etc.) information as input
// A view is an object, that has a name, CT (the counter of how many times this view occurred in the experiment),
// trials the maximum number of times this view is repeated
// and a render function, the render function gets CT and the magpie-object as input
// and has to call magpie.findNextView() eventually to proceed to the next view (or the next trial in this view),
// if it is an trial view it also makes sense to call magpie.trial_data.push(trial_data) to save the trial information
const custom_post = function(config) {
    const view = {
        name: config.name,
        CT: 0,
        trials: config.trials,
        data: config.data,
        // The render functions gets the magpie object as well as the current trial in view counter as input
        render: function (CT, magpie) {
            // Here, you can do whatever you want, eventually you should call magpie.findNextView()
            // to proceed to the next view and if it is an trial type view,
            // you should save the trial information with magpie.trial_data.push(trial_data)

            // Normally, you want to display some kind of html, to do this you append your html to the main element
            // You could use one of our predefined html-templates, with (magpie.)stimulus_container_generators["<view_name>"](config, CT)
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
                        <label for="languages" name="languages">${config.languages_question}:<br /><span></</span></label>
                        <input type="text" id="languages"/>
                    </p>
                    <button id="next" class='magpie-view-button'>${config.button_text}</button>
                </div>`);
            // This function will handle  the response
            const handle_click = function(e) {
                // We will just save the response and continue to the next view
                // prevents the form from submitting
                e.preventDefault();

                // records the post test info
                magpie.global_data.age = $("#age").val();
                magpie.global_data.gender = $("#gender").val();
                magpie.global_data.education = $("#education").val();
                magpie.global_data.languages = $("#languages").val();

                // Now, we will continue with the next view
                magpie.findNextView();
            };

            // We will add the handle_click functions to both buttons
            $('#next').on("click", handle_click);

            // That's everything for this view
        }
    };
    // We have to return the view, so that it can be used in 05_views.js
    return view;
};

const custom_press_a_button = function(config) {
    const view = {
        name: config.name,
        CT: 0,
        trials: config.trials,
        data: config.data,
        // The render functions gets the magpie object as well as the current trial in view counter as input
        render: function (CT, magpie) {
            // Here, you can do whatever you want, eventually you should call magpie.findNextView()
            // to proceed to the next view and if it is an trial type view,
            // you should save the trial information with magpie.trial_data.push(trial_data)

            // Normally, you want to display some kind of html, to do this you append your html to the main element
            // You could use one of our predefined html-templates, with (magpie.)stimulus_container_generators["<view_name>"](config, CT)
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
                // We will just save the response and continue to the next view
                let trial_data = {
                    trial_name: config.name,
                    trial_number: CT + 1,
                    response: e.target.id
                };
                // Often it makes sense to also save the config information
                // trial_data = magpieUtils.view.save_config_trial_data(config.data[CT], trial_data);

                // Here, we save the trial_data
                magpie.trial_data.push(trial_data);

                // Now, we will continue with the next view
                magpie.findNextView();
                console.log(magpie);
            };

            // We will add the handle_click functions to both buttons
            $('#0').on("click", handle_click);
            $('#1').on("click", handle_click);
            $('#2').on("click", handle_click);
            $('#3').on("click", handle_click);
            $('#4').on("click", handle_click);
            $('#5').on("click", handle_click);
            $('#6').on("click", handle_click);
            $('#7').on("click", handle_click);
            $('#8').on("click", handle_click);

            // That's everything for this view
        }
    };
    // We have to return the view, so that it can be used in 05_views.js
    return view;
};

const custom_statement_rating = function(config) {
    const view = {
        name: config.name,
        CT: 0,
        trials: config.trials,
        data: config.data,
        // The render functions gets the magpie object as well as the current trial in view counter as input
        render: function (CT, magpie) {
            var response = magpie.trial_data[0].response;
            // Here, you can do whatever you want, eventually you should call magpie.findNextView()
            // to proceed to the next view and if it is an trial type view,
            // you should save the trial information with magpie.trial_data.push(trial_data)

            // Normally, you want to display some kind of html, to do this you append your html to the main element
            // You could use one of our predefined html-templates, with (magpie.)stimulus_container_generators["<view_name>"](config, CT) ${magpie.trial_data[0].response} or ${config.data[response]}

            // Ich habe unser problems gelöst: ids in topic choice sind indices für unser statements array in 04_trials. Möglich, trotzdem bei 0 anzufangen zu zählen und später beim indexen [response - 1 zu nehmen?]
            // <p class='magpie-view-question magpie-view-qud'>TEST</p>
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
                // We will just save the response and continue to the next view
                let trial_data = {
                    trial_name: config.name,
                    trial_number: CT + 1,
                    response: e.target.id
                };
                // Often it makes sense to also save the config information
                // trial_data = magpieUtils.view.save_config_trial_data(config.data[CT], trial_data);

                // Here, we save the trial_data
                magpie.trial_data.push(trial_data);

                // Now, we will continue with the next view
                magpie.findNextView();
            };

            // We will add the handle_click functions to both buttons
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

            // That's everything for this view
        }
    };
    // We have to return the view, so that it can be used in 05_views.js
    return view;
};

const custom_dilemma_decision = function(config) {
    const view = {
        name: config.name,
        CT: 0,
        trials: config.trials,
        data: config.data,
        // The render functions gets the magpie object as well as the current trial in view counter as input
        render: function (CT, magpie) {
            var response = magpie.trial_data[0].response;
            var rating = magpie.trial_data[1].response;
            if (CT == 0) {
              var both_infos = Math.random() < 0.5;
            }
            if (CT == 1) {
              var both_infos = magpie.trial_data[2].both_infos;
            };
            if (CT == 2) {
              var both_infos = magpie.trial_data[2].both_infos;
            };
            if (CT == 3) {
              var both_infos = magpie.trial_data[2].both_infos;
            };
            // Here, you can do whatever you want, eventually you should call magpie.findNextView()
            // to proceed to the next view and if it is an trial type view,
            // you should save the trial information with magpie.trial_data.push(trial_data)

            // Normally, you want to display some kind of html, to do this you append your html to the main element
            // You could use one of our predefined html-templates, with (magpie.)stimulus_container_generators["<view_name>"](config, CT) ${magpie.trial_data[0].response} or ${config.data[response]}

            // Ich habe unser problems gelöst: ids in topic choice sind indices für unser statements array in 04_trials. Möglich, trotzdem bei 0 anzufangen zu zählen und später beim indexen [response - 1 zu nehmen?]
            if (CT == 0) {
              $("main").html(`<div style="text-align: center" class='magpie-view'>
                      <h1 class='magpie-view-title'>Wie würdest du entscheiden?</h1>
                      <p class='magpie-view-question magpie-view-qud'>${config.data[response].dilemma}
                      </br>
                      <button id="next" class='magpie-view-button' class="magpie-nodisplay">WEITER</button>
                      </div>`);
            };

            if (CT == 1) {
                $("main").html(`<div style="text-align: center" class='magpie-view'>
                        <h1 class='magpie-view-title'>Wie würdest du entscheiden?</h1>
                        <p class='magpie-view-question magpie-view-qud'>${config.data[response].dilemma}
                        </br> </br>A: ${config.data[response].optionA}
                        </br> B: ${config.data[response].optionB}
                        </br>
                        <button id="next" class='magpie-view-button' class="magpie-nodisplay">WEITER</button>
                        </div>`);
            };

            if (CT == 2) {
              if (rating >= 0) {
                if (both_infos == true) {
                  $("main").html(`<div style="text-align: center" class='magpie-view'>
                          <h1 class='magpie-view-title'>Wie würdest du entscheiden?</h1>
                          <p class='magpie-view-question magpie-view-qud'>${config.data[response].dilemma}
                          </br> </br>A: ${config.data[response].optionA}
                          </br> B: ${config.data[response].optionB}
                          </br> </br>  ${config.data[response].pos_info}
                          </br> </br> ${config.data[response].neg_info} </p>
                          </br>
                          <button id="next" class='magpie-view-button' class="magpie-nodisplay">WEITER</button>
                          </div>`);
                };
                if (both_infos == false) {
                  $("main").html(`<div style="text-align: center" class='magpie-view'>
                          <h1 class='magpie-view-title'>Wie würdest du entscheiden?</h1>
                          <p class='magpie-view-question magpie-view-qud'>${config.data[response].dilemma}
                          </br> </br> A: ${config.data[response].optionA}
                          </br> B: ${config.data[response].optionB}
                          </br> </br> ${config.data[response].pos_info} </p>
                          </br>
                          <button id="next" class='magpie-view-button' class="magpie-nodisplay">WEITER</button>
                          </div>`);
                };
              };

              if (rating <= 0) {
                if (both_infos == true) {
                  $("main").html(`<div style="text-align: center" class='magpie-view'>
                          <h1 class='magpie-view-title'>Wie würdest du entscheiden?</h1>
                          <p class='magpie-view-question magpie-view-qud'>${config.data[response].dilemma}
                          </br> </br>A: ${config.data[response].optionA}
                          </br> B: ${config.data[response].optionB}
                          </br> </br> ${config.data[response].neg_info} </br> </br> ${config.data[response].pos_info} </p>
                          </br>
                          <button id="next" class='magpie-view-button' class="magpie-nodisplay">WEITER</button>
                          </div>`);
                };
                if (both_infos == false) {
                  $("main").html(`<div style="text-align: center" class='magpie-view'>
                          <h1 class='magpie-view-title'>Wie würdest du entscheiden?</h1>
                          <p class='magpie-view-question magpie-view-qud'>${config.data[response].dilemma}
                          </br> </br>A: ${config.data[response].optionA}
                          </br> B: ${config.data[response].optionB}
                          </br> </br> ${config.data[response].neg_info} </p>
                          </br>
                          <button id="next" class='magpie-view-button' class="magpie-nodisplay">WEITER</button>
                          </div>`);
                };
              };
            };

            if (CT == 3) {
              if (rating >= 0) {
                if (both_infos == true) {
                  $("main").html(`<div style="text-align: center" class='magpie-view'>
                          <h1 class='magpie-view-title'>Wie würdest du entscheiden?</h1>
                          <p class='magpie-view-question magpie-view-qud'>${config.data[response].dilemma}
                          </br> </br>A: ${config.data[response].optionA}
                          </br> B: ${config.data[response].optionB}
                          </br> </br>  ${config.data[response].pos_info} </br> </br> ${config.data[response].neg_info} </p>
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
                if (both_infos == false) {
                  $("main").html(`<div style="text-align: center" class='magpie-view'>
                          <h1 class='magpie-view-title'>Wie würdest du entscheiden?</h1>
                          <p class='magpie-view-question magpie-view-qud'>${config.data[response].dilemma}
                          </br> </br>A: ${config.data[response].optionA}
                          </br> B: ${config.data[response].optionB}
                          </br> </br> ${config.data[response].pos_info} </p>
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

              if (rating <= 0) {
                if (both_infos == true) {
                  $("main").html(`<div style="text-align: center" class='magpie-view'>
                          <h1 class='magpie-view-title'>Wie würdest du entscheiden?</h1>
                          <p class='magpie-view-question magpie-view-qud'>${config.data[response].dilemma}
                          </br> </br>A: ${config.data[response].optionA}
                          </br> B: ${config.data[response].optionB}
                          </br> </br> ${config.data[response].neg_info} </br> </br> ${config.data[response].pos_info} </p>
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
                if (both_infos == false) {
                  $("main").html(`<div style="text-align: center" class='magpie-view'>
                          <h1 class='magpie-view-title'>Wie würdest du entscheiden?</h1>
                          <p class='magpie-view-question magpie-view-qud'>${config.data[response].dilemma}
                          </br> </br>A: ${config.data[response].optionA}
                          </br> B: ${config.data[response].optionB}
                          </br> </br> ${config.data[response].neg_info} </p>
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


            // This function will handle  the response
            const handle_click = function(e) {
                // We will just save the response and continue to the next view
                let trial_data = {
                    trial_name: config.name,
                    trial_number: CT + 1,
                    response: e.target.id,
                    both_infos: both_infos
                };
                // Often it makes sense to also save the config information
                // trial_data = magpieUtils.view.save_config_trial_data(config.data[CT], trial_data);

                // Here, we save the trial_data
                magpie.trial_data.push(trial_data);

                // Now, we will continue with the next view
                magpie.findNextView();
            };

            // We will add the handle_click functions to both buttons
            if (CT == 0) {
              $('#next').on("click", handle_click);
            };

            if (CT == 1) {
              $('#next').on("click", handle_click);
            };

            if (CT == 2) {
              $('#next').on("click", handle_click);
            };

            if (CT == 3) {
              $('#1').on("click", handle_click);
              $('#2').on("click", handle_click);
              $('#3').on("click", handle_click);
              $('#4').on("click", handle_click);
              $('#5').on("click", handle_click);
              $('#6').on("click", handle_click);
            };

            // That's everything for this view
        }
    };
    // We have to return the view, so that it can be used in 05_views.js
    return view;
};


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
            // Here, you can do whatever you want, eventually you should call magpie.findNextView()
            // to proceed to the next view and if it is an trial type view,
            // you should save the trial information with magpie.trial_data.push(trial_data)

            // Normally, you want to display some kind of html, to do this you append your html to the main element
            // You could use one of our predefined html-templates, with (magpie.)stimulus_container_generators["<view_name>"](config, CT) ${config.data[response][CT].option1}
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
                // We will just save the response and continue to the next view
                let trial_data = {
                    trial_name: config.name,
                    trial_number: CT + 1,
                    response: e.target.id
                };
                // Often it makes sense to also save the config information
                // trial_data = magpieUtils.view.save_config_trial_data(config.data[CT], trial_data);

                // Here, we save the trial_data
                magpie.trial_data.push(trial_data);

                // Now, we will continue with the next view
                magpie.findNextView();
                console.log(magpie);
            };

            // We will add the handle_click functions to both buttons
            $('#-3').on("click", handle_click);
            $('#-2').on("click", handle_click);
            $('#-1').on("click", handle_click);
            $('#0').on("click", handle_click);
            $('#1').on("click", handle_click);
            $('#2').on("click", handle_click);
            $('#3').on("click", handle_click);

            // That's everything for this view
        }
    };
    // We have to return the view, so that it can be used in 05_views.js
    return view;
};
