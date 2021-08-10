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
  title: '',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside margin-top: 10%; font-size: 30px; margin-left: 30%;
  text: `<h1 style="margin-top: 10%; text-align: center" class='magpie-view-title'>Willkommen zu unserem Experiment!</h1>
         <p style="margin-top: 5%; font-size: 25px; text-align: center">Vielen Dank, dass du an unserer Studie teilnimmst.</p>
            `,
  buttonText: 'Weiter zu der Anleitung'
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'Anleitung',
  text: `In dieser Befragung knüpfen wir an eine zuvor veröffentlichte Studie an, in der untersucht wurde, wie Menschen sich in moralischen Dilemmata fühlen.
         </br>
         </br>
         In der vorherigen Studie wurde ein moralisches Dilemma beschrieben, das zwei mögliche Handlungsoptionen beinhaltete.
         Die Teilnehmer wählten aus, welche Handlung sie bevorzugten und mussten bewerten, wie sie sich bei der Ausführung dieser Handlung fühlen würden.
         </br>
         </br>
         In dieser Studie wird dir ein Szenario präsentiert, das ein moralisches Dilemma beschreibt.
         Du entscheidest, welche Handlung du durchführen würdest und gibst dann eine Bewertung ab, wie gut oder schlecht du dich nach der Durchführung dieser Handlung fühlen würdest.
         </div>`,
  buttonText: 'Beginne mit dem Experiment'
});

const post_test = custom_post(
  {
    trials: 1,
    name: 'post_test',
    title: 'Persönliche Informationen',
    text: `Bitte trage die folgenden Informationen ein. <br/> Alle Eingaben sind anonymisiert!`,
    age_question: 'Alter',
    gender_question: 'Geschlecht',
    gender_male: 'Männlich',
    gender_female: 'Weiblich',
    gender_other: 'Divers',
    edu_question: 'Höchster Bildungsabschluss',
    edu_graduated_lower_degree: 'Real- oder Hauptschulabschluss',
    edu_graduated_high_school: 'Abitur',
    edu_graduated_college: 'Hochschulabschluss',
    edu_higher_degree: 'Universitärer Abschluss',
    languages_question: 'Muttersprache',
    languages_german: 'Deutsch',
    languages_other: 'Andere',
    button_text: 'Weiter',
  }
);

// In the post test questionnaire you can ask your participants addtional questions
/*const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Persönliche Informationen',
  text: `Bitte trage die folgenden Informationen ein. <br/> Alle Eingaben sind anonymisiert!`,
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
  buttonText: 'Weiter',
  // comments_question: 'Weitere Kommentare'
});
*/

const topic_choice = custom_press_a_button(
    // config information
    {
        trials: trial_info.topic_choice.length,
        name: 'topic_choice',
        data: trial_info.topic_choice
    }
);

const statement_rating = custom_statement_rating(
    // config information
    {
        trials: 1,
        name: 'statement_rating',
        data: trial_info.statement_rating
    }
);

const dilemma_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'dilemma_instructions1',
  title: 'Anleitung für den nächsten Schritt',
  text: `Als nächstes wirst du mit einer Entscheidungssituation konfrontiert und erhälst Informationen darüber, wie sich andere Teilnehmer entschieden haben.
        <br/>
        <br/>
        Lies dir das Dilemma genau durch und nimm dir Zeit dich für eine der beiden Möglichkeiten zu entscheiden.`,
  buttonText: 'Weiter zum Dilemma'
});

const dilemma_decision1 = custom_dilemma_decision(
  {
    trials: 5,
    name: 'dilemma_decision1',
    data: trial_info.dilemma_decision_1,
  }
);

const rate_feeling1 = magpieViews.view_generator('slider_rating',
  {
    trials: trial_info.feeling_options.length,
    name: 'rate_feeling1',
    data: trial_info.feeling_options
  }
);

const dilemma_decision2 = custom_dilemma_decision(
  {
    trials: 5,
    name: 'dilemma_decision2',
    data: trial_info.dilemma_decision_2,
  }
);

const rate_feeling2 = magpieViews.view_generator('slider_rating',
  {
    trials: trial_info.feeling_options.length,
    name: 'rate_feeling2',
    data: trial_info.feeling_options
  }
);

const understanding_check = magpieViews.view_generator('sentence_choice',
  {
    trials: trial_info.understanding_checks.length,
    name: 'understanding_check',
    data: trial_info.understanding_checks
  }
)
const group_ident = group_identification(
  {
    trials: 2,
    name: 'group_ident',
    data: trial_info.group_identifiers
  }
)

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});
