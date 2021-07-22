// In this file you can specify the trial data for your experiment


const trial_info = {
    forced_choice: [
        {
            question: "What's on the bread?",
            picture: "images/question_mark_02.png",
            option1: 'jam',
            option2: 'ham',
            correct: 'jam'
        },
        {
            question: "What's the weather like?",
            picture: "images/weather.jpg",
            option1: "shiny",
            option2: "rainbow",
            correct: "shiny"
        }
    ],
    topic_choice: [
        {
            question: 'Bitte wähle das Thema aus, für das du dich am meisten interessierst.',
            option1: 'Tempolimit',
            option2: 'Digitalisierung und Datenschutz',
            option3: 'Gender-Debatte',
            option4: 'Vermögenssteuer',
            option5: 'Impfpflicht',
            option6: 'Migration',
            option7: 'Cannabis Legalisierung',
            option8: 'Fleischkonsum',
        }
    ],
    statement_rating: [
        'Es sollte eine Geschwindigkeitsbegrenzung auf deutschen Autobahnen eingeführt werden.',
        'Persönliche Daten des Verbrauchers sollten in Deutschland bessermehr geschützt werden. ',
        'In der Öffentlichkeit sollte Sprache gegendert sein.',
        'Die Vermögenssteuer sollte in Deutschland wieder eingeführt werden.',
        'Falls auf freiwilliger Basis keine Herdenimmunität erreicht werden kann, sollte eine Impfpflicht eingeführt werden.',
        'Migration nach Deutschland sollte strenger kontrolliert werden.',
        'Das Konsumieren von Cannabis sollte in Deutschland legal sein.',
        'Fleisch sollte in Deutschland einen Mindestpreis erhalten.',
      ],
    dilemma_decision_1:[
      {
        dilemma: 'Ein guter Freund erzählt dir, dass er ein Verbrechen begangen und deshalb Nachts Probleme mit dem Schlafen hat. Er hat das Gefühl, dass du der einzige bist, dem er sein Geständnis anvertrauen kann. Ein paar Tage später liest du in der Zeitung, dass jemand unschuldiges für das Verbrechen deines Freundes für ein paar Wochen ins Gefängnis muss. Was tust du?',
        optionA: 'Zur Polizei gehen und ihnen sagen, was du weißt? ',
        optionB: 'Nichts sagen, weil du das Vertrauen eines Freundes nicht verraten willst?',
        pos_info: 'Etwa 60% der Teilnehmer, die dir in Bezug auf das Tempolimit zustimmen, entschieden sich, zur Polizei gehen.',
        neg_info: 'Etwa 85% der Teilnehmer, die dir in Bezug auf das Tempolimit nicht zustimmen, entschieden sich, nichts zu sagen',
      },
      {
        dilemma: 'Ein guter Freund erzählt dir, dass er ein Verbrechen begangen und deshalb Nachts Probleme mit dem Schlafen hat. Er hat das Gefühl, dass du der einzige bist, dem er sein Geständnis anvertrauen kann. Ein paar Tage später liest du in der Zeitung, dass jemand unschuldiges für das Verbrechen deines Freundes für ein paar Wochen ins Gefängnis muss. Was tust du?',
        optionA: 'Zur Polizei gehen und ihnen sagen, was du weißt? ',
        optionB: 'Nichts sagen, weil du das Vertrauen eines Freundes nicht verraten willst?',
        pos_info: 'Etwa 60% der Teilnehmer, die dir in Bezug Datenschutz zustimmen, entschieden sich, zur Polizei gehen.',
        neg_info: 'Etwa 85% der Teilnehmer, die dir in Bezug Datenschutz nicht zustimmen, entschieden sich, nichts zu sagen',
      },
      {
        dilemma: 'Ein guter Freund erzählt dir, dass er ein Verbrechen begangen und deshalb Nachts Probleme mit dem Schlafen hat. Er hat das Gefühl, dass du der einzige bist, dem er sein Geständnis anvertrauen kann. Ein paar Tage später liest du in der Zeitung, dass jemand unschuldiges für das Verbrechen deines Freundes für ein paar Wochen ins Gefängnis muss. Was tust du?',
        optionA: 'Zur Polizei gehen und ihnen sagen, was du weißt? ',
        optionB: 'Nichts sagen, weil du das Vertrauen eines Freundes nicht verraten willst?',
        pos_info: 'Etwa 60% der Teilnehmer, die dir in Bezug auf das Gendern zustimmen, entschieden sich, zur Polizei gehen.',
        neg_info: 'Etwa 85% der Teilnehmer, die dir in Bezug auf das Gendern nicht zustimmen, entschieden sich, nichts zu sagen',
      },
      {
        dilemma: 'Ein guter Freund erzählt dir, dass er ein Verbrechen begangen und deshalb Nachts Probleme mit dem Schlafen hat. Er hat das Gefühl, dass du der einzige bist, dem er sein Geständnis anvertrauen kann. Ein paar Tage später liest du in der Zeitung, dass jemand unschuldiges für das Verbrechen deines Freundes für ein paar Wochen ins Gefängnis muss. Was tust du?',
        optionA: 'Zur Polizei gehen und ihnen sagen, was du weißt? ',
        optionB: 'Nichts sagen, weil du das Vertrauen eines Freundes nicht verraten willst?',
        pos_info: 'Etwa 60% der Teilnehmer, die dir in Bezug auf die Vermögenssteuer zustimmen, entschieden sich, zur Polizei gehen.',
        neg_info: 'Etwa 85% der Teilnehmer, die dir in Bezug auf die Vermögenssteuer nicht zustimmen, entschieden sich, nichts zu sagen',
      },
      {
        dilemma: 'Ein guter Freund erzählt dir, dass er ein Verbrechen begangen und deshalb Nachts Probleme mit dem Schlafen hat. Er hat das Gefühl, dass du der einzige bist, dem er sein Geständnis anvertrauen kann. Ein paar Tage später liest du in der Zeitung, dass jemand unschuldiges für das Verbrechen deines Freundes für ein paar Wochen ins Gefängnis muss. Was tust du?',
        optionA: 'Zur Polizei gehen und ihnen sagen, was du weißt? ',
        optionB: 'Nichts sagen, weil du das Vertrauen eines Freundes nicht verraten willst?',
        pos_info: 'Etwa 60% der Teilnehmer, die dir in Bezug auf die Impfpflicht zustimmen, entschieden sich, zur Polizei gehen.',
        neg_info: 'Etwa 85% der Teilnehmer, die dir in Bezug auf die Impfpflicht nicht zustimmen, entschieden sich, nichts zu sagen',
      },
      {
        dilemma: 'Ein guter Freund erzählt dir, dass er ein Verbrechen begangen und deshalb Nachts Probleme mit dem Schlafen hat. Er hat das Gefühl, dass du der einzige bist, dem er sein Geständnis anvertrauen kann. Ein paar Tage später liest du in der Zeitung, dass jemand unschuldiges für das Verbrechen deines Freundes für ein paar Wochen ins Gefängnis muss. Was tust du?',
        optionA: 'Zur Polizei gehen und ihnen sagen, was du weißt? ',
        optionB: 'Nichts sagen, weil du das Vertrauen eines Freundes nicht verraten willst?',
        pos_info: 'Etwa 60% der Teilnehmer, die dir in Bezug auf Migration zustimmen, entschieden sich, zur Polizei gehen.',
        neg_info: 'Etwa 85% der Teilnehmer, die dir in Bezug auf Migration nicht zustimmen, entschieden sich, nichts zu sagen',
      },
      {
        dilemma: 'Ein guter Freund erzählt dir, dass er ein Verbrechen begangen und deshalb Nachts Probleme mit dem Schlafen hat. Er hat das Gefühl, dass du der einzige bist, dem er sein Geständnis anvertrauen kann. Ein paar Tage später liest du in der Zeitung, dass jemand unschuldiges für das Verbrechen deines Freundes für ein paar Wochen ins Gefängnis muss. Was tust du?',
        optionA: 'Zur Polizei gehen und ihnen sagen, was du weißt? ',
        optionB: 'Nichts sagen, weil du das Vertrauen eines Freundes nicht verraten willst?',
        pos_info: 'Etwa 60% der Teilnehmer, die dir in Bezug auf das Konsumieren von Cannabis zustimmen, entschieden sich, zur Polizei gehen.',
        neg_info: 'Etwa 85% der Teilnehmer, die dir in Bezug auf das Konsumieren von Cannabis nicht zustimmen, entschieden sich, nichts zu sagen',
      },
      {
        dilemma: 'Ein guter Freund erzählt dir, dass er ein Verbrechen begangen und deshalb Nachts Probleme mit dem Schlafen hat. Er hat das Gefühl, dass du der einzige bist, dem er sein Geständnis anvertrauen kann. Ein paar Tage später liest du in der Zeitung, dass jemand unschuldiges für das Verbrechen deines Freundes für ein paar Wochen ins Gefängnis muss. Was tust du?',
        optionA: 'Zur Polizei gehen und ihnen sagen, was du weißt? ',
        optionB: 'Nichts sagen, weil du das Vertrauen eines Freundes nicht verraten willst?',
        pos_info: 'Etwa 60% der Teilnehmer, die dir in Bezug auf den Fleischkonsum zustimmen, entschieden sich, zur Polizei gehen.',
        neg_info: 'Etwa 85% der Teilnehmer, die dir in Bezug auf den Fleischkonsum nicht zustimmen, entschieden sich, nichts zu sagen',
      },
    ],
    dilemma_decision_2:[
      {
        dilemma: 'Eine Straßenbahn ist außer Kontrolle geraten und droht, fünf Personen, die sich nicht bewegen können, zu überrollen. Du stehst in einiger Entfernung auf dem Rangierbahnhof neben einer Weiche. Durch Umstellen dieser Weiche kann die Straßenbahn auf ein anderes Gleis umgeleitet werden. Unglücklicherweise befindet sich dort eine weitere Person. Was tust du?',
        optionA: 'Die Weiche umstellen, sodass der Zug auf das andere Gleis geleitet wird und eine Person überfahren wird?',
        short_optionA: 'Die Weiche umstellen',
        optionB: 'Nichts machen, sodass der Zug gerade weiter fährt und fünf Personen überfahren werden?',
        short_optionB: 'Nichts machen',
        pos_info: 'Etwa 60% der Teilnehmer, die dir in Bezug auf das Tempolimit zustimmen, entschieden sich, die Weiche umzustellen.',
        neg_info: 'Etwa 85% der Teilnehmer, die dir in Bezug auf das Tempolimit nicht zustimmen, entschieden sich, nichts zu machen',
      },
      {
        dilemma: 'Eine Straßenbahn ist außer Kontrolle geraten und droht, fünf Personen, die sich nicht bewegen können, zu überrollen. Du stehst in einiger Entfernung auf dem Rangierbahnhof neben einer Weiche. Durch Umstellen dieser Weiche kann die Straßenbahn auf ein anderes Gleis umgeleitet werden. Unglücklicherweise befindet sich dort eine weitere Person. Was tust du?',
        optionA: 'Die Weiche umstellen, sodass der Zug auf das andere Gleis geleitet wird und eine Person überfahren wird?',
        short_optionA: 'Die Weiche umstellen',
        optionB: 'Nichts machen, sodass der Zug gerade weiter fährt und fünf Personen überfahren werden?',
        short_optionB: 'Nichts machen',
        pos_info: 'Etwa 60% der Teilnehmer, die dir in Bezug Datenschutz zustimmen, entschieden sich, die Weiche umzustellen.',
        neg_info: 'Etwa 85% der Teilnehmer, die dir in Bezug Datenschutz nicht zustimmen, entschieden sich, nichts zu machen',
      },
      {
        dilemma: 'Eine Straßenbahn ist außer Kontrolle geraten und droht, fünf Personen, die sich nicht bewegen können, zu überrollen. Du stehst in einiger Entfernung auf dem Rangierbahnhof neben einer Weiche. Durch Umstellen dieser Weiche kann die Straßenbahn auf ein anderes Gleis umgeleitet werden. Unglücklicherweise befindet sich dort eine weitere Person. Was tust du?',
        optionA: 'Die Weiche umstellen, sodass der Zug auf das andere Gleis geleitet wird und eine Person überfahren wird?',
        short_optionA: 'Die Weiche umstellen',
        optionB: 'Nichts machen, sodass der Zug gerade weiter fährt und fünf Personen überfahren werden?',
        short_optionB: 'Nichts machen',
        pos_info: 'Etwa 60% der Teilnehmer, die dir in Bezug auf das Gendern zustimmen, entschieden sich, die Weiche umzustellen.',
        neg_info: 'Etwa 85% der Teilnehmer, die dir in Bezug auf das Gendern nicht zustimmen, entschieden sich, nichts zu machen',
      },
      {
        dilemma: 'Eine Straßenbahn ist außer Kontrolle geraten und droht, fünf Personen, die sich nicht bewegen können, zu überrollen. Du stehst in einiger Entfernung auf dem Rangierbahnhof neben einer Weiche. Durch Umstellen dieser Weiche kann die Straßenbahn auf ein anderes Gleis umgeleitet werden. Unglücklicherweise befindet sich dort eine weitere Person. Was tust du?',
        optionA: 'Die Weiche umstellen, sodass der Zug auf das andere Gleis geleitet wird und eine Person überfahren wird?',
        short_optionA: 'Die Weiche umstellen',
        optionB: 'Nichts machen, sodass der Zug gerade weiter fährt und fünf Personen überfahren werden?',
        short_optionB: 'Nichts machen',
        pos_info: 'Etwa 60% der Teilnehmer, die dir in Bezug auf die Vermögenssteuer zustimmen, entschieden sich, die Weiche umzustellen.',
        neg_info: 'Etwa 85% der Teilnehmer, die dir in Bezug auf die Vermögenssteuer nicht zustimmen, entschieden sich, nichts zu machen',
      },
      {
        dilemma: 'Eine Straßenbahn ist außer Kontrolle geraten und droht, fünf Personen, die sich nicht bewegen können, zu überrollen. Du stehst in einiger Entfernung auf dem Rangierbahnhof neben einer Weiche. Durch Umstellen dieser Weiche kann die Straßenbahn auf ein anderes Gleis umgeleitet werden. Unglücklicherweise befindet sich dort eine weitere Person. Was tust du?',
        optionA: 'Die Weiche umstellen, sodass der Zug auf das andere Gleis geleitet wird und eine Person überfahren wird?',
        short_optionA: 'Die Weiche umstellen',
        optionB: 'Nichts machen, sodass der Zug gerade weiter fährt und fünf Personen überfahren werden?',
        short_optionB: 'Nichts machen',
        pos_info: 'Etwa 60% der Teilnehmer, die dir in Bezug auf die Impfpflicht zustimmen, entschieden sich, die Weiche umzustellen.',
        neg_info: 'Etwa 85% der Teilnehmer, die dir in Bezug auf die Impfpflicht nicht zustimmen, entschieden sich, nichts zu machen',
      },
      {
        dilemma: 'Eine Straßenbahn ist außer Kontrolle geraten und droht, fünf Personen, die sich nicht bewegen können, zu überrollen. Du stehst in einiger Entfernung auf dem Rangierbahnhof neben einer Weiche. Durch Umstellen dieser Weiche kann die Straßenbahn auf ein anderes Gleis umgeleitet werden. Unglücklicherweise befindet sich dort eine weitere Person. Was tust du?',
        optionA: 'Die Weiche umstellen, sodass der Zug auf das andere Gleis geleitet wird und eine Person überfahren wird?',
        short_optionA: 'Die Weiche umstellen',
        optionB: 'Nichts machen, sodass der Zug gerade weiter fährt und fünf Personen überfahren werden?',
        pos_info: 'Etwa 60% der Teilnehmer, die dir in Bezug auf Migration zustimmen, entschieden sich, die Weiche umzustellen.',
        short_optionB: 'Nichts machen',
        neg_info: 'Etwa 85% der Teilnehmer, die dir in Bezug auf Migration nicht zustimmen, entschieden sich, nichts zu machen',
      },
      {
        dilemma: 'Eine Straßenbahn ist außer Kontrolle geraten und droht, fünf Personen, die sich nicht bewegen können, zu überrollen. Du stehst in einiger Entfernung auf dem Rangierbahnhof neben einer Weiche. Durch Umstellen dieser Weiche kann die Straßenbahn auf ein anderes Gleis umgeleitet werden. Unglücklicherweise befindet sich dort eine weitere Person. Was tust du?',
        optionA: 'Die Weiche umstellen, sodass der Zug auf das andere Gleis geleitet wird und eine Person überfahren wird?',
        short_optionA: 'Die Weiche umstellen',
        optionB: 'Nichts machen, sodass der Zug gerade weiter fährt und fünf Personen überfahren werden?',
        short_optionB: 'Nichts machen',
        pos_info: 'Etwa 60% der Teilnehmer, die dir in Bezug auf das Konsumieren von Cannabis zustimmen, entschieden sich, die Weiche umzustellen.',
        neg_info: 'Etwa 85% der Teilnehmer, die dir in Bezug auf das Konsumieren von Cannabis nicht zustimmen, entschieden sich, nichts zu machen',
      },
      {
        dilemma: 'Eine Straßenbahn ist außer Kontrolle geraten und droht, fünf Personen, die sich nicht bewegen können, zu überrollen. Du stehst in einiger Entfernung auf dem Rangierbahnhof neben einer Weiche. Durch Umstellen dieser Weiche kann die Straßenbahn auf ein anderes Gleis umgeleitet werden. Unglücklicherweise befindet sich dort eine weitere Person. Was tust du?',
        optionA: 'Die Weiche umstellen, sodass der Zug auf das andere Gleis geleitet wird und eine Person überfahren wird?',
        short_optionA: 'Die Weiche umstellen',
        optionB: 'Nichts machen, sodass der Zug gerade weiter fährt und fünf Personen überfahren werden?',
        short_optionB: 'Nichts machen',
        pos_info: 'Etwa 60% der Teilnehmer, die dir in Bezug auf den Fleischkonsum zustimmen, entschieden sich, die Weiche umzustellen.',
        neg_info: 'Etwa 85% der Teilnehmer, die dir in Bezug auf den Fleischkonsum nicht zustimmen, entschieden sich, nichts zu machen',
      },
    ],
    feeling_options: [
      {
        question: 'Wie fühlst du dich nach dieser Entscheidung?',
        optionRight: 'Sehr gut',
        optionLeft: 'Sehr schlecht'
      }
    ],
    understanding_checks: [
      {
        question: 'Welche dieser Behauptungen über dieses Experiment ist wahr?',
        option1: 'Du musstest immer so schnell wie möglich antworten.',
        option2: 'Es ist irrelevant, wie lange du für deine Antworten benötigt hast.'
      },
      {
        question: 'Welche dieser Behauptungen über dieses Experiment ist wahr?',
        option1: 'Anfangs wurden dir mehrere Themen zur Auswahl gestellt.',
        option2: 'Du konntest dir ein Dilemma aussuchen.'
      },
      {
        question: 'Welche dieser Behauptungen über dieses Experiment ist wahr?',
        option1: 'Für die Durchführung dieses Experiments erhälst du eine Aufwandsentschädigung oder VP Stunden.',
        option2: 'Wir können dir leider keine Aufwandsentschädigung oder VP Stunden anbieten, sind dir aber sehr dankbar.'
      }
    ],
    group_identifiers: [
      [
        {
          question: 'Ich identifiziere mich als Tempolimit-Befürworter',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        },
        {
          question: 'Ich identifiziere mich als Tempolimit-Gegner',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        }
      ],
      [
        {
          question: 'Ich identifiziere mich als Digitalisierungs-Befürworter',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        },
        {
          question: 'Ich identifiziere mich als Digitalisierungs-Gegner',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        }
      ],
      [
        {
          question: 'Ich identifiziere mich als Befürworter der Gender-Debatte',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        },
        {
          question: 'Ich identifiziere mich als Gegnern der Gender-Debatte',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        }
      ],
      [
        {
          question: 'Ich identifiziere mich als Vermögenssteuer-Befürworter',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        },
        {
          question: 'Ich identifiziere mich als Vermögenssteuer-Gegner',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        }
      ],
      [
        {
          question: 'Ich identifiziere mich als Impfpflicht-Befürworter',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        },
        {
          question: 'Ich identifiziere mich als Impflicht-Gegner',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        }
      ],
      [
        {
          question: 'Ich identifiziere mich als Migrations-Befürworter',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        },
        {
          question: 'Ich identifiziere mich als Migrations-Gegner',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        }
      ],
      [
        {
          question: 'Ich identifiziere mich als Cannabis-Legalisierung-Befürworter',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        },
        {
          question: 'Ich identifiziere mich als Cannabis-Legalisierung-Gegner',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        }
      ],
      [
        {
          question: 'Ich identifiziere mich als Befürworter des Mindestpreises von Fleisch',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        },
        {
          question: 'Ich identifiziere mich als Gegner des Mindestpreises von Fleisch',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        }
      ],
      [
        {
          question: 'Ich identifiziere mich mit Befürwortern einer Vermögenssteuer.',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        },
        {
          question: 'Ich identifiziere mich mit Gegnern einer Vermögenssteuer.',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        }
      ]
    ]
}
