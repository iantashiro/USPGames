// transition.js

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

// Function to update the semester information in the HTML
function updateSemesterInfo() {
	let year = parseInt(localStorage.getItem('year')) || 2020;
    let semester = parseInt(localStorage.getItem('semester')) || 1;

    if (semester == 2) {
        semester = 1;
        year += 1;
    } else {
        semester += 1;
    }

    // Save updated values to local storage
    localStorage.setItem('year', year);
    localStorage.setItem('semester', semester);
}

function displayCharacterInfo(selectedCharacters, eventResult) {
    document.write('<div class="character-container">');
		selectedCharacters.forEach(characterName => {
		    document.write(`
		        <div class="character">
		            <img src="${characterImages[characterName]}" alt="${characterName}">
		        </div>
		    `);
		});
    document.write('</div>');


    document.write('<div class="event-container">');
		document.write(`
		     <div class="event">${eventResult}</div>
		`);
    document.write('</div>');
}


function eventTypeSelector() {
    if (Object.keys(AliveCharacters).length === 1) {
        window.location.href = 'endscreen.html';
    }
    
    let p_arena = parseFloat(localStorage.getItem('p_arena'));
    let p_comp = parseFloat(localStorage.getItem('p_comp'));
	
    let p = Math.random();
    if (p < p_arena) {
        localStorage.setItem('p_arena', -0.2); 
        localStorage.setItem('p_comp', (p_comp - 0.1)); 
        window.location.href = "arena.html";
    } else if (p < p_arena + p_comp) {
        localStorage.setItem('p_comp', -0.1); 
        localStorage.setItem('p_arena', (p_arena - 0.1)); 
        window.location.href = "comp.html";
    } else {
	    p_comp += 0.05
	    p_arena += 0.1
        localStorage.setItem('p_comp', p_comp); // Increment p_comp by 0.05
        localStorage.setItem('p_arena', p_arena); // Increment p_arena by 0.1
        window.location.href = "semester.html";
    }
}




function displayDeadCharacterInfo(character, event) {
    document.write(`
        <div class="dead-character">
            <img src="${characterImages[character]}.jpg" alt="${character}">
            <div class="dead-event">${event}</div>
        </div>
    `);
}

    
