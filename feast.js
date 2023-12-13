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
    "{P1} likes potatoes, gonna mash up potatoes, if you don't like {his} masher {he}'ll see you later.",
    "{P1} doesn't know if {he}'ll upset the status quo if someone throws poison in the water main.",
    "{P1} finds out that numbers written on restaurant checks don't follow the same mathematical laws as numbers written on any other pieces of paper.",  
    "{P1} wishes to complain in the strongest possible terms about a song they played in the party about a lumberjack who wears women's clothes.",
    "The food didn't go well with {P1}, who spends the rest of the evening in the restroom.",
    "{P1} stands so incredibly still, that {he} becomes invisible to the eye.",
    "{P1} goes to a machine which provides {him} with a plastic cup filled with a liquid that was almost, but not quite, entirely unlike tea.",
    "{P1} is bitten by a soup snake... because in terms of the soup that {he} was eating, wait... no, that doesn't make any sense.",
    "It may seem like {P1} will finally be brought to justice, but why would any players think that they could really trust us?"
	]


const SafeEvents2 = [
    "{P1} and {P2} share the last piece of cake.",
    "{P1} and {P2} have too much to drink and become nemesis over something neither of them will ever remember...",
    "{P1} is convinced {P2} poisoned {his} food, and orders 20 small pizza-like bread with toppings.",
    "{P1} notices {P2} is turning into a penguin, who is decisively asked to stop it.",
    "It gives {P1} a headache just trying to think down to {P2}'s level.",
    "{P1} unplugs the microphone during {P2}'s speech.",
]


const SafeEvents3 = [
    "{P1}, {P2} and {P3} talk about the fact that anyone who is capable of getting themselves made director of the funding agency should on no account be allowed to do the job.",
	"{P1} and {P2} try to throw peanuts into {P3}'s glass of win, but fail miserably. ",
    ]

const FatalEvents1 = [
    "{P1} fails to prove {he} exists and gets erased from the timeline.",
    "{P1} gives up and becomes a farmer.",
    "When nobody was expecting, {P1} is caught by spanish inquisition and forced to sit to death on a comfy chair.",
    "{P1} finds out {he} has a fatal lobster allergy five seconds before dying from it.",
    "{P1} gets publicly shamed to death for saying {he} thinks the current president isn't a huge waste of this planet's oxygen.",
    "{P1} finds out {he} has a fatal soy allergy five seconds before dying from it.",
    "{P1} dies from alcohol overdose.",
    "{P1} decides to take the stairs after the tragic elevator incident and tragically dies from the fall.",
    "{P1} could not live with {his} own failure. Where did that bring {him}? Back to this.",
    "{P1} is murdered by an angry student who failed {his} course.",
    "{P1} chokes on the turkey and perishes.",
    "{P1} can't stand the pressure of Academia, and decides to retire.",
    "{P1} has a little too much to drink and passes out.",
    "{P1} wasn't invited to the party.",
    "{P1} can't count the reasons {he} should stay. One by one they all just fade away.",
    "{P1}'s mind spontaneously decay into a potato soup.",
    "{P1} never wanted to be a scientist anyway. {he} wanted to be a lumberjack. The smell of freshcut timber! The crash of might trees!",
    "There's no happy endings, this tale is all sorrows and woes. You might think that justice and {P1} win the day, but that's not how the story goes.",
    "{P1} hallucinates. Spoiler alert! A villain comes to steal and murder, if I were {him} I wouldn't stay one minute further.",
    "Some people smile at the end of the day. Some laugh, I suppose. But to {P1} there's nothing but gloom and despair. That's just how the story goes",
    "{P1} end up in a fiendish plot with logs and hypnotism. The very thought of working with {him} should be met with skepticism.",
    "It's a race against the clock to find any vestigial chance, {P1} couldn't use more rescuing before this feast ends.",
    "Something dreadful happens with a big, sharp, rusty knife. So if I were {P1}, I'd find some other way to spend {his} life.",
    "The lions in the Hinterlands are hungry and quite fierce. There is literally no place {P1} could've visited that's any weirse.",
    "{P1}'s story soon ends in tragedy upon a costal shelf. I beg of you, I beg of you, stop playing, save yourself.",
    "{P1} goes to go get ice, and drops {his} keys. As {he} thinks 'that was dumb', {P1} gets strangled to death with a plastic sack.",
    "{P1} is killed by {his} unborn grandson. The young man's name? Albert Einstein.",
    "A bowl of petunias comes into existance forty-two meters above {P1}'s head and gravity pulls it down to both of their deaths.",
    "{P1} shouts to the whole room that there’s an infinite number of monkeys outside who want to talk about a script for Hamlet they’ve worked out and is never taken seriously again.",
    "As soon as {P1} realized that {he} was substantially the loser after all, it was as if a weight lifted itself off {his} shoulders.",
    "{P1} falls off {his} chair and suffers a fatal internal hemorrhage of blood, leading to {his} ultimate demise.",
    "{P1}'s teeth spontaneously liquify and drips down the back of {his} throat.",
    "{P1} eats the pineapple pizza and gets fired for racism.",
    "We polled a bunch of scientists, 99 percent agree, there must be something better for {P1} to be.",
    "{P1} stumbles on {his} son and gets brutally murdered by him.",
    "{P1} gets unpluged from the Matrix.",
    "{P1} mixes bleach and ammonia while cleaning and inhales the deadly mixture.",
    "{P1} eats an apple pie contaminated with Cs-137.",
    "{P1} ingets a gluten-infested, peanut-filled shrimp and dies to the fatal triple allergy.",
    "{P1} had breathed enough water in the pool earlier to causes {his} vocals cords to spasm and close up, and dies of asphyxiation.",
    "{P1} shakes the snack machine, who doesn't like being shaken and falls onto {him} to get its revenge.",
    "{P1} is spontaneously dematerialised due to quantum fluctuations caused by an abnormal density of physicists in a small volume.",
    "A rebel aneurysm suddenly sneaks into {P1}'s brain.",
    "{P1} suffers a water-induced bronchospasm and dies to the resulting lack of oxygen in {his} body.",
    "You might think that {P1} ought to prevail, a solution {he}'d have found. Who would've thought {he}'d fail, and in a pool be found.",
    "{P1} drank water too fast.",
    "{P1}'s food was too dry.",
    ]

const FatalEvents2 = [
    "{P1} refutes {P2}, who dies of embarrassment.",
    "{P1} spontaneously combusts while giving {P2} a hug.",
    "{P1} says, 'You have my respect, {P2}'. When this is done, half of them will still have a job. I hope they remember you.",
    "{P1} proves {P2}'s inexistence by reductio ad absurdum, who then disappears in a puff of logic.",
    "{P1} and {P2} fight over the last piece of pudding like little children.",
    "{P1} are only here for the free food before changing carreers.",
    "{P1} and {P2} share the last piece of cake. Of their lives.",
    "{P1} is convinced {P2} poisoned {his} food, and orders 20 small pizza-like bread with toppings.",
    "It gives {P1} a headache just trying to think down to {P2}'s level, but they both die mysteriously anyway.",
    "{P1} unplugs the microphone during {P2}'s speech, starting a catfight which gets both fired.",
    "{P1} says to {P2} that anyone who is capable of getting themselves made director should on no account be allowed to do the job, and get snitched on by {P3}, who is also fired."
    ]

const FatalEvents3 = [ 
	"{P1} and {P2} refute {P3}, who dies of embarrassment.",
    "{P1} and {P2} bully {P3} out of the feast.",
    "{P1} refutes {P2} and {P3}, causing them to die from embarrassment.",
    "{P1} tells the funniest joke in the world in German for distraction. {P2} and {P3} promptly choke and die from laughter.",
    "{P1}'s paper gets accepted in Nature. {P2} and {P3} die of jealousy.",
    "{P1} and {P2} are deep below the sea, hoping to avoid {P3}'s horrid company. But they reach the edge of the planet and fall. Metaphorically speaking, of course.",
    "{P1} drops some orange juice. {P2} slips on it, launching forward a peanut directly through {P3}'s throat, who dies of allergies.",
    "{P1} tries to kill {his} nemesis with a death ray, but misses miserably, causing {P2} and {P3} to perish instead."
    ]
