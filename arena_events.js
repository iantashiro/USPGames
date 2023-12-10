const arenaList = ["jair", "covid", "strike", "budget"];

function replacePronouns(characterName, sentence) {
    const pronouns = {
        "{he}": "he",
        "{his}": "his",
        "{him}": "him",
        "{himself}": "himself"
    };

    const characterID = characterIDMap[characterName];


    if (characterID !== undefined) {
        // Update pronouns based on character gender, in the order defined in constants.js
        if (characterID === 3 || characterID === 7 || characterID === 8
        	|| characterID === 30 || characterID === 31|| characterID === 32) {
            pronouns["{he}"] = "she";
            pronouns["{his}"] = "her";
            pronouns["{him}"] = "her";
            pronouns["{himself}"] = "herself";
        }
    }

    // Replace pronouns in the sentence
    Object.keys(pronouns).forEach(key => {
        const regex = new RegExp(`${key}`, "gi");
        sentence = sentence.replace(regex, pronouns[key]);
    });

    return sentence;
}

function getRandomEvent(arena, fatal, characterNames) {
	let eventList;

	switch (arena) {
        case "covid":
        	if (fatal == 0) {
				eventList = covidSurvival;
				break;
  	  		} else if (fatal == 1) {
				switch (characterNames.length) {
					case 1:
						eventList = covidFatal1;
						break;
					case 2:
						eventList = covidFatal2;
						break;
					case 3:
						eventList = covidFatal3;
						break;
				}
			}
        case "jair":
        	if (fatal == 0) {
				eventList = jairSurvival;
				break;
  	  		} else if (fatal == 1) {
				switch (characterNames.length) {
					case 1:
						eventList = jairFatal1;
						break;
					case 2:
						eventList = jairFatal2;
						break;
					case 3:
						eventList = jairFatal3;
						break;
				}
			}
		case "budget":
        	if (fatal == 0) {
				eventList = budgetSurvival;
				break;
  	  		} else if (fatal == 1) {
				switch (characterNames.length) {
					case 1:
						eventList = budgetFatal1;
						break;
					case 2:
						eventList = budgetFatal2;
						break;
					case 3:
						eventList = budgetFatal3;
						break;
				}
			}
		case "strike":
        	if (fatal == 0) {
				eventList = strikeSurvival;
				break;
  	  		} else if (fatal == 1) {
				switch (characterNames.length) {
					case 1:
						eventList = strikeFatal1;
						break;
					case 2:
						eventList = strikeFatal2;
						break;
					case 3:
						eventList = strikeFatal3;
						break;
				}
			}
	}

    const randomIndex = Math.floor(Math.random() * eventList.length);
    const eventTemplate = eventList[randomIndex];

    // Replace placeholders with the selected characters in the event
    const formattedEvent = eventTemplate.replace(/\{P\d\}/g, match => {
        const placeholderIndex = parseInt(match.charAt(2)) - 1;
        return characterNames[placeholderIndex];
    });

    // Replace pronouns in the formatted event
    const eventWithPronouns = replacePronouns(characterNames[0], formattedEvent);
    return eventWithPronouns;
}

const covidSurvival = [
	"{P1} stays safe working at home.",
	"{P1} slept through the whole thing."
	]

const covidFatal1 = [
	"{P1} returns from an international conference and perishes while on quarentine.",
	"{P1} quits {his} job and starts selling toilet paper stolen from the university.",
    "{P1} refuses to take the vaccine or even wear a mask and becomes an outcast among colleagues.",
    ]

const covidFatal2 = [
	"{P1} is tested positive and runs as fast as {he} can to cough direclty into {P2}'s face, {his} secretly self-declared nemesis.",
	"{P1} and {P2} refuse to wear a mask and die due to some kind of weird cosmic karma or whatever.",
    "{P1} and {P2} get mad their classes were cancelled and organize a mask-burning protest on campus.",
    "{P1} and {P2} join an anti-vax group and lose their jobs.",
    ]
    
const covidFatal3 = [
	"{P1} is tested positive and goes around offerering a handshake to {his} enemies. {P2} and {P3} were among the ones who accepted.",
	"{P1} and {P2} contract the virus from {P3}, who is the sole survivor of the group, but dies anyway a week later from a lack of toilet paper.",
	"{P1} coughs on a meeting with {P2} and {P3}.",
    "{P1} hosts a COVID-themed party, inviting {P2} and {P3} for an nice evening of shared viruses.",
    ]



const jairSurvival = [
	"{P1} complies.",
	"{P1} has no idea what is going on and works as per usual."
	]
	
const jairFatal1 = [
	"{P1} joins a protest and is never seen again.",
	"{P1} is arrested for defecating for two days in a row.",
	"{P1} sacrifices {himself} by hitting Jair's head with a legitimate, British, cricket bat before becoming swiss cheese.",
	"{P1} publishes a paper about amazon deforestation and gets fired."]

const jairFatal2 = [
	"{P1} reports {P2} to DOPS.",
	"{P1} and {P2} are exiled.",
	"{P1} gives a lecture on quantum mechanics and gets arrested for propagating cultural marxism after being snitched on by {P2}."]

const jairFatal3 = [
	"India retaliates Brazil's dictatorship. {P1}, {P2} and {P3} get nuked by Gandhi.",
	"{P1}, {P2} and {P3} are burnt alive in a public square by a group of christian neo-charismatic activists.",
	"{P1}, {P2} and {P3} dies during a guerrilla warfare."
    ]



const budgetSurvival = [
	"{P1} keeps {his} job.",
	"{P1} is safe. For now..."
	]

const budgetFatal1 = [
    "{P1} invests the research budget in a failed cryptocurrency scheme, leading to financial ruin.",
    "{P1} gets sacked and has to make a living selling {his} art on the beach.",
    "{P1} is cut from the research group and decides to pursue a career in stand-up comedy after repeatedly being told {he} is a joke.",
    ]
    
const budgetFatal2 = [   
	"{P1} and {P2} haven't published anything relevant in the last year and get axed.",
	"{P1} and {P2} are out because they are generally unpleasant people.",
	"{P1} starts a rivalry with {P2} over research funding, resulting in both of them losing their jobs.",
    "{P1} and {P2} attempt to prove that cats can fly using helium balloons, causing a catastrophic lab accident and losing their funding."
	]

const budgetFatal3 = [
	"{P1} and {P2} fabricate a rumour to get {P3} fired, but they get laid off as well.",
	"The budget destined to {P1}, {P2} and {P3} is used to pay for security turnstiles nobody asked for.",
	"{P1} and {P2} publish a paper with fabricated data to get more funding, leading to a scandal that costs them their careers."
    ]
    
    

const strikeSurvival = [
	"{P1} sleeps through it.",
	"{P1} is glad {he} has an excuse to work from home."
	]    
    
const strikeFatal1 = [
	"{P1} gives a lecture to 0 students and is forced to retire by invalidity.",
	"{P1} drops a locker on a female student's head and goes to prison.",
	"{P1} accidentally sets {his} own office on fire while shouting at the protesters."
]

const strikeFatal2 = [
	"{P1} and {P2} die from disappointment.",
	"{P1} and {P2} injure themselves trying to go through a picket."
]

const strikeFatal3 = [
	"{P1}, {P2} and {P3} give up on this generation and retire.",
    "{P1}, {P2} and {P3} attempt to disrupt the protest but face unexpected consequences after dealing a respectable amount of emotional damage, leading to their downfall",

]
