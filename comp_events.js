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
        	|| characterID === 30 || characterID === 32|| characterID === 32) {
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

function getRandomEvent(fatal, characterNames) {
	let eventList;

	if (fatal == 0) {
		switch (characterNames.length) {
		    case 1:
		        eventList = SafeEvents1;
		        break;
		    case 2:
		        eventList = SafeEvents2;
		        break;
		    case 3:
		        eventList = SafeEvents3;
		        break;
		    }
	} else if (fatal == 1) {
		switch (characterNames.length) {
		    case 1:
		        eventList = FatalEvents1;
		        break;
		    case 2:
		        eventList = FatalEvents2;
		        break;
		    case 3:
		        eventList = FatalEvents3;
		        break;
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


const SafeEvents1 = [
	"{P1} cheats and doesn't get caught.",
    "{P1} swallows some chalk powder and coughs for the rest of the meeting.",
    "{P1} thinks this event's mostly filler.",
    "Do or do not. There is no try.",
    "Don't panic.",
    "{P1} would rather be right than happy any day.",
    "There was a point to this event, but it has temporarily escaped the chronicler's mind.",
    "This event's definitely filler.",
    "This event's probably filler.",
    "Fun isn't something one considers when solving random problems to save your job. But this... does put a smile on {P1}'s face.",
    "Running out of time, {P1} uses π = 3, knowing they would call {him} an engineer. A small price to pay for salvation.",
    "Running out of time, {P1} uses g = 10, knowing they would call {him} an engineer. A small price to pay for salvation.",
    "{P1} boldly splits infinitives that no man had split before.",
    "{P1} arrives at the correct answer through the longest path possible. All of that and a drop of blood...",
    "{P1} solves the problem, but what did it cost? Everything.",
    "{P1} questions {his} sanity.",
    "{P1} claims to be omniscient.",
    "{P1} throws a chalk directly at the audience.",
    "{P1} spends a good 10 minutes ruminating, and by 'ruminating' I mean 'pondering', not 'chewing cud.'",
    "{P1} uses the chalk to destroy the chalk.",
    "{P1} gets distracted by trying to balance the chalk on the tip of {his} finger. Perfectly balanced, as all things should be.",
    "The hardest choices require the strongest wills. {P1} didn't make any choice at all and finished with a blank blackboard.",
    "{P1} looks at {his} colleagues' blackboards, then looks back at {himself} and comes to the conclusion that reality is often disappointing.",
    "{P1} leaves the puzzle as an exercise to the reader.",
    "{P1} fails to solve a trivial problem.",
    "{P1} makes the mistake of thinking one can solve any major problems just with potatoes.",
    "It's at times like this that {P1} really wishes {he}'d listened to what {his} mother said when {he} was young.",
    "{P1} just sits around and glares.",
    "{P1} really needs to cry.",
    "{P1} knows what it's like to lose. To feel so desperately that you're right, yet to fail nonetheless. It's frightening. Turns the legs to jelly.",
    "The audience boos as {P1} fails to demonstrate a simple theorem.",
    "For a moment, nothing happened for {P1}. Then, after a second or so, nothing continued to happen."]
    
    const SafeEvents2 = [
    "{P1} peaks at {P2}'s solution and manages to avoid elimination.",
    "{P1} sees {P2} cheating but decides not to say anything.",
    "{P1} uses distract. It doesn't affect {P2}...",
    "{P1} uses oppression. It doesn't affect {P2}...",
    "{P1} catches {P2} cheating and copies {his2} copied solution.",
    "{P1} gives {P2} an emotional Heimlich so {he2} could cough up that fear and anxiety.",
    "{P1} gives {P2} an emotional Heimlich so {he2} could cough up that chalk and anxiety.",
    "{P1} noticed {P2} turning into a penguin and politely asks {him2} to stop it.",
    "{P1} and {P2} get stuck in traffic and don't get there in time.",
    "{P1} distracts {P2}. It's super effective!",
    "{P1} oppresses {P2}. It's super effective!",
    "{P1} and {P2} demand rigidly defined areas of doubt and uncertainty."
    ]


const SafeEvents3 = [
	"{P1} says {P2}'s mother was a hamster, and {P3}'s father smelt of elderberries.",
    "{P1} interrupts this competition to annoy {P2} and {P3} and make things generally more irritating.",
    "{P1} waits to copy somebody else's solution, but after {P2} and {P3} fail, {he} says, 'Fine. I'll do it myself.'",
    "{P1} interrupts this competition to annoy {P2} and {P3} and make things generally more irritating."
    ]

const FatalEvents1 = [
	"{P1} fails to prove {he} exists and gets erased from the timeline.",
    "{P1} gives up and goes home.",
    "{P1} ignores the fire training and dies from a falling brick that was just recently standing there, in the air, exactly like bricks don't.",
    "{P1} writes the funniest joke in the world on the blackboard and dies from laughter. Many good men and women died trying to recover the body.",
    "{P1} fails to find the solution and is eliminated.",
    "{P1} doesn't know what WIMP means and is eliminated.",
    "{P1} transcends {his} existence.",
    "{P1} finds the solution to the problem, but sneezes and it escapes.",
    "{P1} falls asleep. Permanently.",
    "When seeing who {he} was up against, {P1} dies from fear.",
    "{P1} stares at {his} blackboard for four hours and dies from frustration.",
    "Life punches {P1} in the stomach.",
    "{P1} pines for the fjords and ceases to be. Bereft of life, {he} rest in peace.",
    "{P1} hoisted up a barrel and secured the rope below, but in the haste failed to see that a barrel full of bricks was heavier than {him}.",
    "{P1} is mugged on the way and gets shot in the eye.",
    "{P1} gets shot in a crime of passion.",
    "'Oh, that was easy', says {P1}, and goes on to prove that black is white and gets {himself} killed on the next zebra crossing.",
    "{P1} wonders if the world was always like this and {he}'s been too wrapped up in {himself} to notice.",
    "{P1} finds a car... which looks as if it knows where it’s going and follows it... somewhere that's not where {he}'s supposed to be.",
    "{P1} dies from shame, which is still a terminal disease in some parts of the Galaxy.",
    "{P1}, who has contemplated the very vectors of the atoms in the Big Bang itself, asks not to be molested with this pocket calculator stuff.",
    "Sometimes everything is suddenly really simple, you step out and see where you are really clearly. You see yourself, and you think, fuck this shit.",
    "A rebel aneurysm suddenly sneaks into {P1}'s brain.",
    "{P1} ignores the fire training and dies from a falling brick that was just recently standing there, in the air, exactly like bricks don't.",
    "{P1} felt that {his} whole life was some kind of dream and wondered whose it was and whether they were enjoying it.",
    "{P1} runs out of chalks. Gone. Reduced to atoms."]

const FatalEvents2 = [
    "{P1} refutes {P2}, who dies of embarrassment.",
    "{P1} looks at {P2}'s attempt at a solution and scoffs, 'You should have gone for the head.'",
    "{P1} spontaneously combusts while giving {P2} a hug.",
    "{P1} peeks at {P2}'s solution and laughs at {his2} face. {P2} was correct, but erases it and dies from lack of confidence.",
    "{P1} says, 'You have my respect, {P2}'. When this is done, half of them will still have a job. I hope they remember you.",
    "{P1} catches {P2} smiling, then quickly inspects {his2} board and says, 'Your optimism is misplaced, Asgardian.'",
    "{P1} proves {P2}'s inexistence by reductio ad absurdum, who then disappears in a puff of logic.",
    "{P1} looks at {P2}'s attempt at a solution and says, 'You should have gone for the ket.'"]

const FatalEvents3 = [ 
	    "{P1} and {P2} refute {P3}, who dies of embarrassment.",
    "{P1} and {P2} bully {P3} out of the competition.",
    "{P1} refutes {P2} and {P3}, causing them to die from embarrassment.",
    "{P1} tells the funniest joke in the world in German for distraction. {P2} and {P3} promptly die from laughter."
    ]
