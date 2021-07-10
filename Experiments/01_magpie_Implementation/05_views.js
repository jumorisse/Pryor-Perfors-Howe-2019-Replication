// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  title: 'Wilkommen!',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `Willkommen zu unserem Experiment!
            <br />
            <br />
            Vielen Dank, dass du an unserer Studie teilnimmst.
            <br />
            <br />
            `,
  buttonText: 'Weiter zu der Anleitung'
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'Anleitung',
  text: `In dieser Befragung knüpfen wir an eine zuvor veröffentlichte Studie an, in der untersucht wurde, wie Menschen sich in moralischen Dilemmata fühlen.
        <br/>
        <br/>
        In der vorherigen Studie wurde ein moralisches Dilemma beschrieben, dass zwei mögliche Handlungsoptionen beinhaltete.
        <br/>
        Die Teilnehmer wählten aus, welche Handlung sie bevorzugten und mussten bewerten, wie sie sich bei der Ausführung dieser Handlung fühlen würden.
        <br/>
        <br/>
        In dieser Studie wird Ihnen ein Szenario präsentiert, dass ein moralisches Dilemma beschreibt.
        <br/>
        Sie werden wählen, welche Handlung Sie durchführen würden und dann eine Bewertung abgeben, wie gut oder schlecht Sie sich nach der Durchführung dieser Handlung fühlen würden.`,
  buttonText: 'Beginne mit dem Experiment'
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Persönliche Informationen',
  text: 'Bitte trage die folgenden Informationen ein. Alle Eingaben sind anonymisiert und helfen uns lediglich die Ergebnisse zu analysieren.',
  buttonText: 'Weiter',
  age_question: 'Alter',
  gender_question: 'Geschlecht',
  gender_male: 'männlich',
  gender_female: 'weiblich',
  gender_other: 'divers',
  edu_question: 'Höchster Bildungsabschluss',
  edu_graduated_lower_degree: 'Real- oder Hauptschulabschluss',
  edu_graduated_high_school: 'Abitur',
  edu_graduated_college: 'Hochschulabschluss',
  edu_higher_degree: 'Universitärer Abschluss',
  languages_question: 'Muttersprache',
  // comments_question: 'Weitere Kommentare'
});

const subject_decision = magpieViews.view_generator("dropdown_choice", {
  trials: trial_info.dropdown_choice_trials.length,
  // name should be identical to the variable name
  name: 'subject_decision',
  data: trial_info.dropdown_choice_trials
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/


// Here, we initialize a normal forced_choice view
const forced_choice_2A = magpieViews.view_generator("forced_choice", {
  // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
  trials: trial_info.forced_choice.length,
  // name should be identical to the variable name
  name: 'forced_choice_2A',
  data: trial_info.forced_choice,
  // you can add custom functions at different stages through a view's life cycle
  // hook: {
  //     after_response_enabled: check_response
  // }
});

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale