// In this file you can find all instantiations of the views.

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  title: '',
  text: `<h1 style="margin-top: 10%; text-align: center" class='magpie-view-title'>Willkommen zu unserem Experiment!</h1>
         <p style="margin-top: 5%; font-size: 25px; text-align: center">Vielen Dank, dass du an unserer Studie teilnimmst.</p>
            `,
  buttonText: 'Weiter zu der Anleitung'
});

// After the introduction, the users are shown instructions on how to complete this experiment.
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

// The post_test view asks the user to enter data about age, gender, education and language.
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

// In the topic_choice view the user is asked to choose on of 8 topics.
const topic_choice = custom_topic_choice(
    // config information
    {
        trials: trial_info.topic_choice.length,
        name: 'topic_choice',
        data: trial_info.topic_choice
    }
);

// In the statement_rating view the user is asked to rate how much they agree with a statement that is related to their chosen topic.
const statement_rating = custom_statement_rating(
    // config information
    {
        trials: 1,
        name: 'statement_rating',
        data: trial_info.statement_rating
    }
);

// A view that gives more instructions specifically for the dilemma decsion views.
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

// In the dilemma_decision1 view, the user is confronted with the realistic dilemma.
const dilemma_decision1 = custom_dilemma_decision(
  {
    trials: 5,
    name: 'dilemma_decision1',
    data: trial_info.dilemma_decision_1,
  }
);

// In the dilemma_decision1 view, the user is confronted with the philosophical dilemma.
const dilemma_decision2 = custom_dilemma_decision(
  {
    trials: 5,
    name: 'dilemma_decision2',
    data: trial_info.dilemma_decision_2,
  }
);

// In the understanding_check view the user is asked three questions to check whether they were following the experiment properly.
const understanding_check = magpieViews.view_generator('sentence_choice',
  {
    trials: trial_info.understanding_checks.length,
    name: 'understanding_check',
    data: trial_info.understanding_checks
  }
)

// In the group_ident view it is checked whether the user actually identifies with its supposed ingroup and whether the user does not identifie with its outgroup.
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
