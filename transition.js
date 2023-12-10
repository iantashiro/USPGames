// transition.js


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


    
