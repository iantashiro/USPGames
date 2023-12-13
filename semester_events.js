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
	"{P1} finds out {he} is a sleeping cylon agent.",
	"{P1} sees a kitten stuck in a tree. Then the kitten jumped off and it hung itself.",
	"{P1}'s got a theory, some kid is dreaming, and we're inside {his} wacky broadway nightmare.",
	"{P1} identifies as a pudding.",
	"{P1} can't catch a break and catches a cold.",
	"{P1} publishes a controversial paper.",
	"{P1} has a brilliant idea, but doesn't write it down on a napkin because there was no napkin around.",
	"{P1} is stuck.",
	"{P1} receives a boatload of money from FAPESP to organize an event for no reason.",
	"{P1} throws the course syllabus out the window.",
	"{P1} uploads last semester's grades on JupiterWeb.",
	"{P1} questions {his} sanity.",
	"{P1} gets new pawns to move around as {he} pleases.",
	"{P1} is never satisfied where {he} is....Only the children know what they’re looking for.",
	"{P1} hurts a student's feelings.",
	"{P1} teaches {his} students they're not children anymore.",
	"{P1} needs answers like a fish needs a bicycle.",
	"{P1} gets a FAPESP scholarship for {his} student.",
	"{P1} creates a microverse to power {his} car battery.",
	"{P1} claims to be omniscient.",
	"{P1} invents the universe to make an apple pie from scratch.",
	"{P1} declares war on the moon, even though it's round and has no doors.",
	"{P1} wakes up with a pineapple on {his} nightstand, and no memory of the night before.",
	"{P1} throws a chalk directly at a student's forehead.",
	"{P1}'s spends the semester ruminating, and by 'ruminating' I mean 'pondering', not 'chewing cud.'",
	"{P1} prays that there's intelligent life somewhere out in space, cause there's bugger all down here on Earth.",
	"{P1} is chewing on life's gristle, but doesn't grumble, and gives a whistle. And this helps things turn out for the best.",
	"{P1}'s life seems jolly rotten. There's something he's forgotten, and that's to laugh and smile and dance and sing.",
	"{P1} is feeling in the dumps, but is not silly chumps, {he} just purses {his} lips and whistles, that's the thing.",
	"{P1} watches a dog cross the street and wonders: what is a dog really? Is it a wave, or a collection of particles?",
	"One of the things {P1} had always found hardest to understand about humans was their habit of continually stating and repeating the very obvious.",
	"{P1} talks to a computer at great length and explains {his} view of the Universe to it. Then it commits suicide.",
	"{P1} didn't want to be human, {he} wanted to see gamma rays, hear X-rays, smell dark matter.",
	"{P1} discards radioactive waste on {his} neighbours yard.",
]
    
    
const SafeEvents2 = [
    "During a congregation, {P1} asks to give a quick announcement, and when it ceased to be quick, {P2} unplugs the microphone.",
    "{P1} and {P2} work on a paper together.",
    "{P1} accuses {P2} of plagiarism!",
    "{P1} and {P2} have lunch together.",
    "{P1} fiercely defends the scale-up method, but fails to change {P2}'s mind.",
    "{P1} and {P2} passionately argue over the scale-up method.",
    "{P1} claims {P2} is incapable of teaching an introductory course.",
    "Evil research group's evil {P1} and evil {P2} return to the prime timeline and destroy the good versions of themselves.",
    "{P1} says the scale-up method is stupid and doesn't work. {P2} viciously disagrees, and nobody's mind is changed in the slightest.",
    "{P1} totally steals {P2}'s yellow umbrella.",
    ]
    
const SafeEvents3 = [
    "Something interesting is yet to happen to {P1}, {P2}, and {P3} this semester.",
    "{P1}, {P2}, and {P3} work together to discover a revolutionary energy source. They destroy it to avoid getting killed by the oil magnates.",
    "Shortly after lunch, {P1}, {P2}, and {P3} discover that humans didn't go to the Sun because it burns.",
    "{P1}, {P2}, and {P3} get lured to a conveniently empty room through music to find out they're sleeper cylon agents.",
    "{P1} recites some self-composed poetry to {P2} and {P3}, which is so terrible it causes everyone within hearing radius to die from massive internal bleeding."
];


const FatalEvents1 = [
	"{P1} gets Zoom bombed by some ridiculously low IQ primates and loses all hope in humanity and quits {his} job.",	
	"{P1}'s inability to adapt to online classes inevitably leads to  {him} failing the entire class.",	
	"{P1} suffers a lethal injury while cooking with a chainsaw.",	
	"{P1} is bitten by a soup snake... because of the soup that {he} was eating, wait, no, that doesn't make any sense.",	
	"{P1} orders a bat and starts a pandemic outbreak.",	
	"{P1} has an epiphany and joins to a communist revolutionary vanguard party.",	
	"{P1} forgets to bring a towel on a trip to participate in a conference and suffers the consequences.",	
	"{P1} didn't want to be human, {he} wanted to see gamma rays, heard X-rays, smell dark matter and died trying.",	
	"{P1} moves to Iran to work on their nuclear program against US imperialism.",	
	"{P1} suggets coconuts migrate and is forced to retire due to a malfunctioning brain.",	
	"While walking home at night, some homicidal maniac comes after {P1} with a bunch of loganberries.",	
	"{P1} can't stand the pressure of Academia, and decides to retire.",	
	"{P1} suddenly suffers a fatal heart attack.",	
	"{P1} gets hit by a bus.",	
	"{P1} suffers a stroke and retires.",	
	"Sometimes life's a bitch and then {P1} dies.",	
	"{P1} builds a time machine and dies by stepping on a butterfly.",	
	"{P1} is murdered by an angry student who failed {his} course.",
	"{P1} develops Alzheimer's and retires, but he's still {P1}.",	
	"{P1} publishes a brilliant, groundbreaking paper, but makes an arithmetic mistake on page 2 and dies from pure shame.",	
	"{P1} dies of sleep deprivation at 1AM, shortly after replying to a student's e-mail.",	
	"The fact that {P1} hasn't made any significant progress in the last 9 years causes  {him} to die from frustration.",	
	"{P1} starts to feel the symptons of pararibulitis.",	
	"{P1} embarasses {himself} in public and uses a one-minute time machine.",	
	"{P1} goes to the park and awaits the arrival of a 28-foot-tall lizard-god saviour, and dies from disappointment.",
	"{P1} burns {his} foot on a George Foreman grill.",
	"{P1} has an epiphany and becomes a philosopher.",
	"{P1} gets dishonorably discharged and exiled.",
	"{P1} sells {his} soul to a bank.",
	"One morning {P1} felt rather full, {his} head felt heavy, which made  {him} shake, then fell from a ladder and burst {his} skull.",
	"{P1} gets hit by a huge ball of dark matter.",
	"{P1} cuts the mightiest tree in the university, with a herring! Gravity quickly arranges a meeting between the falling tree and {P1}'s head.",
	"{P1} feels that {his} whole life is some kind of dream and {he} sometimes wonders whose it was and whether they were enjoying it.",
	"Life is quite absurd and death's the final word, {P1} faces the curtain with a bow. Forgets about {his} sins, and gives the audience a grin.",
	"It's a brand new day, and the sun is high, all the birds are singing that {P1} is gonna die.",
	"Life's a piece of shit when you look at it. Life's a laugh, death's a joke. {P1} sees it's all a show, and keeps them laughing as {he} goes.",
	"A bloodvessel in {P1}'s brain bursts, killing  {him} instantly.",
	"{P1} was found floating in the ocean moments after {his} body was discarded there.",
	"{P1} falsifies data to support {his} theory and loses the respect of {his} peers.",
	"{P1} works really hard on a really important presentation, but writes everything in yellow.",
	"{P1} works really hard on a really important presentation, but writes everything in Comic Sans and is never taken seriously again.",
	"{P1} picks up a letter Q and hurls it into a distant pivet bush where it hits a rabbit, who jumps onto {his} neck with its ponty teeth.",
	"{P1} punches a hole in the wall and is sent to a 10-week anger management program.",
	"{P1} discovers he's merely the product of a deranged imagination and promptly disappears in a puff of epiphany.",
	"{P1} has their moment of great opportunity in life, and happens to miss it, then everything else becomes eerily easy.",
	"{P1} begins to suspect that the entire multidimensional infinity of the Universe is almost certainly being run by a bunch of maniacs.",
	"During an experiment, {P1} suffers an electrical discharge. Feeling the power increase — that resistance is being overcome, {he} was happy.",
	"Life. Loathe it, or ignore it. {P1} just can't like it.",
	"{P1} spends a year dead for tax reasons and, spoiler alert, actually dies in the end.",
	"Walking back from lunch, {P1} chokes on {his} own saliva and fails to survive.",
	"{P1} invents a new imaginary disease to skip work and dies from it.",
	"{P1} dies from old while waiting for the bus on the first week of the semester.",
	"An evil tree drops a leaf in {P1}'s way, causing  {him} to slip and die from a massive cranial bleeding.",
	"An evil tree drops a leaf in {P1}'s way, causing  {him} to slip and die from a massive cranial bleeding.",
	"Walking down the stairs, {P1} destroys a spiderweb with {his} face and dies.",
	"Waling through the campus, a tree hits {P1} by falling onto {his} head.",
	"{P1} murders an annoying anarcho-capitalist student in class and goes to jail, despite the support of 90 percent of the students.",
	"{P1} is attacked by a killer rabbit while fishing.",
	"{P1} slips on a banana peel while trying to avoid a spider bite.",
	"{P1} gets electrocuted after slipping on the bath tub.",
	"{P1} dies in the train after a lightning strikes causes a jet engine to fall onto {his} head.",
	"{P1}'s laziness kills  {him} by a tragic elevator fall.",
	"{P1} gets stung by a bee, a wasp and a hornet and dies painfully.",
	"{P1} finds out {he} has lung cancer and dies from building a drug empire.",
	"{P1} forgets to bring a towel on a trip to participate in a conference and suffers the consequences.",
	"{P1} morally harasses students during a recorded online class and loses {his} job.",
	"{P1} publishes satellite data showing a significant increase in deforestation in the Amazon rainforest and gets fired by a brainless little brat."
	"{P1} forgets to do {his} Spanish lesson and has to beg for {his} life in Spanish.",
	"{P1} breaks {his} Spanish streak, so the mightly green owl breaks {his} legs.",
	"{P1} finds out {he}'s an NPC from a computer game and gets fired after wasting {his} research grant trying to prove it."
	"{P1} quits {his} job to follow {his} childhood dream of becoming an iceberg hunter.",
	"{P1} buys a brand new chair, but it is too soft."
	"{P1} steps on branch.",
	"{P1} uses commas as decimal separators on a simulation and wastes 6 months of the university's cluster's processing time."
		
]

	
const FatalEvents2 = [
	"{P1} conducts an experiment to find out if a swallow can fly with a coconut. The coconut gets dropped on {P2}'s head, who dies instantly.",
	"{P1} proves {P2}'s inexistence by reductio ad absurdum, who then disappears in a puff of logic.",
	"{P1} forgets to type the sequence 4 8 15 16 23 42 into {his} computer and {P2} dies as a consequence.",
	"{P1} feels bad about sabotaging {P2}'s experiment and dies from guilt.",
	"{P1} steals {P2}'s research.",
	"{P1} feels schadenfreude when finding out {P2}'s theory miserably failed to explain experimental results.",
	"USPNET sends a terminator from the future to kill {P1} and {P2}.",
	"{P1}'s indecisiviness fractures the timeline, and takes {P2} with {him}.",
	"{P1} realises {he} has no bad memories of {P2} and shoots for the head.",
	"{P1} helps {P2} escape the matrix.",
	"{P1} looks back and is sent to the past. {P2} blinks and goes to live with {him}.",
	"{P1} and {P2} seem to be having extreme difficulty with their lifestyles.",
	"It's a nice day, {P1} is verytall, {P2} falls down a thirty-foot well.",
	"{P1} accidentaly kills {P2} in a car 'accident'.",
	"{P1} stays up all night trying to solve a problem. {he} finally solves it at 2 a.m. {P2} was the problem.",
	"{P1} decides to take the stairs to avoid {P2}'s tragic fate of death by elevator, but dies from falling down the stairs anyway.",
	"{P1} heroically dies trying to save {P2} from a dog attack. Trying.",
	"{P1} exposes {P2} as a bolsominion, who immediately loses all credibility as a scientist.",
	"{P1} 'accidentally' discards radioactive waste into the garbage bin of {P2}'s department and gets caught in 4K after {P2}'s demise.",
	"{P1} hides radioactive waste under {P2}'s bookcase.",
	"{P1} and {P2} get hit by leaf. Just regular leaf.",
	"{P1} inflicts severe emotional damage on {P2} and dies of guilt.",
	"{P1} offers snacks to {P2}. Snacks too dry.",
	]

	
const FatalEvents3 = [
	"{P1}, {P2} and {P3} work together to discover a new revolutionary source of energy, and get killed by the oil industry magnats.",
	"USPNET sends a Schwarzenegger from the future to kill {P1}, {P2} and {P3}.",
	"{P2} rolls a dice, creating 6 timelines. {P3} is shot in the leg, {P2} loses an arm and {P1} puts a blue streak in {his} hair.",
	"{P2} rolls a dice, creating 6 timelines. {P2} is shot in the leg, {P1} loses an arm and {P1} puts a blue streak in {his} hair.",
	"USPNET gains consciousness and erases the academic history of its potential deactivators: {P1}, {P2} and {P3}, who promptly lose their jobs due to bureaucratic reasons.",
	"{P1}, {P2} and {P3} die in a shootout after {P1} throws up the British 3-finger signal in a German-infested bar.",
	"{P1} takes out the Holy pin of the Holy Hand Grenade, counts 'One! Two! Five!' and dies in the explosion, together with {P2} and {P3}.",
	"{P1} fails to forward a chain e-mail to 10 close friends and dies, taking {P2} and {P3} with {him}.",
	"{P1} builds a death ray to kill {P2}, but it overloads, killing {P3} too.",
	"USPNET gains consciousness and erases the academic history of its potential deactivators: {P1}, {P2} and {P3}."
	"{P1} realizes {he}'s actually just a computer game npc and decides to kill all {his} opponents to win, but quickly gets arrested after murdering {P2} and {P3}.",
	"{P1} realizes {he}'s actually just a computer game npc and decides to kill all {his} opponents to win. {P2} and {P3} are brutally murdered before {P1} is sent to an asylum.",
	"{P1}, {P2} and {P3} die out of hunger in the university restaurant line."
	
	]
