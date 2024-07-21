
// // // // // document.addEventListener("DOMContentLoaded", () => {
// // // // //     const songs = [
// // // // //         { title: "DagabaazRe", src: "/Audio/Dagabaaz Re.mp3", hint: "Salu bhaii" },
// // // // //         // { title: "Behuli", src: "/Audio/Behuli.mp3", hint: "Indra Josi" },
// // // // //         // { title: "ChunanariChunnari", src: "/Audio/Chunanari Chunnari.mp3", hint: "Salu bhaii" },
// // // // //         // { title: "Gajalu", src: "/Audio/Gajalu.mp3", hint: "Salu bhaii" },
// // // // //         // { title: "Kajrare", src: "/Audio/Kajra re.mp3", hint: "Amita Bhachhan" },
// // // // //         // { title: "Kasari", src: "/Audio/Kasari.mp3", hint: "Kasari" },
// // // // //         // { title: "KunfayaKun", src: "/Audio/Kun faya Kun.mp3", hint: "Rockstar" },
// // // // //         { title: "Lagjagale", src: "/Audio/Lagja gale.mp3", hint: "Old song" },
// // // // //         { title: "ManwaLaage", src: "/Audio/Manwa Laage.mp3", hint: "Old song" },
// // // // //         { title: "Merebina", src: "/Audio/Mere bina.mp3", hint: "Old song" },
// // // // //         { title: "Mitwa", src: "/Audio/Mitwa.mp3", hint: "Old song" },
// // // // //         { title: "PeeLoon", src: "/Audio/Pee Loon.mp3", hint: "Old song" },
// // // // //         { title: "Radha", src: "/Audio/Radha.mp3", hint: "Old song" },
// // // // //         { title: "TenuLeke", src: "/Audio/Tenu Leke.mp3", hint: "Old song" },

        
        
// // // // //     ];

// // // // //     const playBtn = document.getElementById('play-btn');
// // // // //     const submitBtn = document.getElementById('submit-btn');
// // // // //     const resetBtn = document.getElementById('reset-btn');
// // // // //     const letterInputsDiv = document.getElementById('letter-inputs');
// // // // //     const resultDiv = document.getElementById('result');
// // // // //     const scoreDiv = document.getElementById('score');
// // // // //     const hintDiv = document.getElementById('hint');
// // // // //     const remainingGuessesDiv = document.getElementById('remaining-guesses');
// // // // //     const wrongLettersDiv = document.getElementById('wrong-letters');
// // // // //     let currentSongIndex = 0;
// // // // //     let audio = new Audio();
// // // // //     let score = 0;
// // // // //     let remainingGuesses = 3;
// // // // //     let wrongLetters = [];
// // // // //     let currentSong = null;

// // // // //     playBtn.addEventListener('click', playNextSong);
// // // // //     submitBtn.addEventListener('click', checkGuess);
// // // // //     resetBtn.addEventListener('click', resetGame);

// // // // //     function playNextSong() {
// // // // //         if (currentSongIndex >= songs.length) {
// // // // //             resultDiv.innerText = "You've reached the end of the song list.";
// // // // //             letterInputsDiv.innerHTML = ''; // Clear the letter inputs
// // // // //             return;
// // // // //         }

// // // // //         currentSong = songs[currentSongIndex];
// // // // //         audio.src = currentSong.src;

// // // // //         audio.load(); // Ensure the audio is loaded
// // // // //         audio.play().catch(error => {
// // // // //             console.error("Error playing the audio: ", error);
// // // // //             resultDiv.innerText = "Error playing the song. Please try again.";
// // // // //         });

// // // // //         hintDiv.innerText = ''; // Clear the hint initially
// // // // //         resultDiv.innerText = '';
// // // // //         wrongLetters = [];
// // // // //         remainingGuesses = 3;
// // // // //         remainingGuessesDiv.innerText = `Remaining guesses: ${remainingGuesses}`;
// // // // //         wrongLettersDiv.innerText = `Wrong letters: ${wrongLetters.join(", ")}`;
// // // // //         scoreDiv.innerText = "Score: " + score;

// // // // //         createLetterInputs(currentSong.title.length);
// // // // //     }

// // // // //     function createLetterInputs(length) {
// // // // //         letterInputsDiv.innerHTML = '';
// // // // //         for (let i = 0; i < length; i++) {
// // // // //             const input = document.createElement('input');
// // // // //             input.type = 'text';
// // // // //             input.maxLength = 1;
// // // // //             input.dataset.index = i;
// // // // //             input.addEventListener('input', onLetterInput);
// // // // //             letterInputsDiv.appendChild(input);
// // // // //         }
// // // // //         // Set focus on the first input box initially
// // // // //         if (letterInputsDiv.firstChild) {
// // // // //             letterInputsDiv.firstChild.focus();
// // // // //         }
// // // // //     }

// // // // //     function onLetterInput(event) {
// // // // //         const input = event.target;
// // // // //         const nextInput = input.nextElementSibling;
// // // // //         if (nextInput && input.value) {
// // // // //             nextInput.focus();
// // // // //         }
// // // // //     }

// // // // //     function checkGuess() {
// // // // //         const userGuessArray = [];
// // // // //         const inputs = letterInputsDiv.getElementsByTagName('input');
// // // // //         for (let input of inputs) {
// // // // //             userGuessArray.push(input.value.trim());
// // // // //         }
// // // // //         const userGuess = userGuessArray.join('');

// // // // //         if (userGuess.toLowerCase() === currentSong.title.toLowerCase()) {
// // // // //             resultDiv.innerText = "Correct!";
// // // // //             score++;
// // // // //             scoreDiv.innerText = "Score: " + score;
// // // // //             createNextSongButton();
// // // // //         } else {
// // // // //             remainingGuesses--;
// // // // //             remainingGuessesDiv.innerText = `Remaining guesses: ${remainingGuesses}`;
// // // // //             wrongLetters.push(userGuess);
// // // // //             wrongLettersDiv.innerText = `Wrong letters: ${wrongLetters.join(", ")}`;
// // // // //             clearInputs();
// // // // //             resultDiv.innerText = "Wrong Guess!";
// // // // //             if (remainingGuesses === 2) {
// // // // //                 hintDiv.innerText = `Hint: ${currentSong.hint}`;
// // // // //             }
// // // // //             if (remainingGuesses === 1) {
// // // // //                 revealRandomLetters(2);
// // // // //             }
// // // // //             if (remainingGuesses === 0) {
// // // // //                 resultDiv.innerText = `Wrong! The correct answer was ${currentSong.title}`;
// // // // //                 createNextSongButton();
// // // // //             }
// // // // //         }
// // // // //     }

// // // // //     function clearInputs() {
// // // // //         const inputs = letterInputsDiv.getElementsByTagName('input');
// // // // //         for (let input of inputs) {
// // // // //             input.value = '';
// // // // //         }
// // // // //         if (inputs.length > 0) {
// // // // //             inputs[0].focus();
// // // // //         }
// // // // //     }

// // // // //     function revealRandomLetters(count) {
// // // // //         const inputs = letterInputsDiv.getElementsByTagName('input');
// // // // //         const correctLetters = currentSong.title.split('');
// // // // //         const emptyIndices = [];

// // // // //         for (let i = 0; i < inputs.length; i++) {
// // // // //             if (!inputs[i].value) {
// // // // //                 emptyIndices.push(i);
// // // // //             }
// // // // //         }

// // // // //         if (emptyIndices.length > 0) {
// // // // //             for (let i = 0; i < count; i++) {
// // // // //                 const randomIndex = emptyIndices.splice(Math.floor(Math.random() * emptyIndices.length), 1)[0];
// // // // //                 inputs[randomIndex].value = correctLetters[randomIndex];
// // // // //                 if (emptyIndices.length === 0) {
// // // // //                     break;
// // // // //                 }
// // // // //             }
// // // // //         }
// // // // //     }

// // // // //     function createNextSongButton() {
// // // // //         const nextSongBtn = document.createElement('button');
// // // // //         nextSongBtn.innerText = "Next Song";
// // // // //         nextSongBtn.addEventListener('click', () => {
// // // // //             currentSongIndex++;
// // // // //             playNextSong();
// // // // //             nextSongBtn.remove();
// // // // //         });
// // // // //         resultDiv.appendChild(nextSongBtn);
// // // // //     }

// // // // //     function resetGame() {
// // // // //         audio.pause(); // Stop the song
// // // // //         audio.currentTime = 0; // Reset the song to the beginning
// // // // //         currentSongIndex = 0;
// // // // //         score = 0;
// // // // //         remainingGuesses = 3;
// // // // //         wrongLetters = [];
// // // // //         scoreDiv.innerText = "Score: " + score;
// // // // //         remainingGuessesDiv.innerText = `Remaining guesses: ${remainingGuesses}`;
// // // // //         wrongLettersDiv.innerText = `Wrong letters: ${wrongLetters.join(", ")}`;
// // // // //         resultDiv.innerText = '';
// // // // //         hintDiv.innerText = '';
// // // // //         letterInputsDiv.innerHTML = ''; // Clear the letter inputs
// // // // //         resultDiv.innerText = '';
// // // // //     }
// // // // // });
// // // // document.addEventListener("DOMContentLoaded", () => {
// // // //     const songs = [
        
// // // //         { title: "DagabaazRe", src: "/Audio/Dagabaaz Re.mp3", hint: "Salu bhaii" },
// // // //         { title: "Lagjagale", src: "/Audio/Lagja gale.mp3", hint: "Old song" },
// // // //         { title: "ManwaLaage", src: "/Audio/Manwa Laage.mp3", hint: "Old song" },
// // // //         { title: "Merebina", src: "/Audio/Mere bina.mp3", hint: "Old song" },
// // // //         { title: "Mitwa", src: "/Audio/Mitwa.mp3", hint: "Old song" },
// // // //         { title: "PeeLoon", src: "/Audio/Pee Loon.mp3", hint: "Old song" },
// // // //         { title: "Radha", src: "/Audio/Radha.mp3", hint: "Old song" },
// // // //         { title: "TenuLeke", src: "/Audio/Tenu Leke.mp3", hint: "Old song" },
// // // //     ];

// // // //     const playBtn = document.getElementById('play-btn');
// // // //     const submitBtn = document.getElementById('submit-btn');
// // // //     const resetBtn = document.getElementById('reset-btn');
// // // //     const letterInputsDiv = document.getElementById('letter-inputs');
// // // //     const resultDiv = document.getElementById('result');
// // // //     const scoreDiv = document.getElementById('score');
// // // //     const hintDiv = document.getElementById('hint');
// // // //     const remainingGuessesDiv = document.getElementById('remaining-guesses');
// // // //     const wrongLettersDiv = document.getElementById('wrong-letters');
// // // //     let currentSongIndex = 0;
// // // //     let audio = new Audio();
// // // //     let score = 0;
// // // //     let remainingGuesses = 3;
// // // //     let wrongLetters = [];
// // // //     let currentSong = null;

// // // //     playBtn.addEventListener('click', playNextSong);
// // // //     submitBtn.addEventListener('click', checkGuess);
// // // //     resetBtn.addEventListener('click', resetGame);

// // // //     function playNextSong() {
// // // //         if (currentSongIndex >= songs.length) {
// // // //             resultDiv.innerText = "You've reached the end of the song list.";
// // // //             letterInputsDiv.innerHTML = ''; // Clear the letter inputs
// // // //             return;
// // // //         }

// // // //         currentSong = songs[currentSongIndex];
// // // //         audio.src = currentSong.src;

// // // //         audio.load(); // Ensure the audio is loaded
// // // //         audio.play().catch(error => {
// // // //             console.error("Error playing the audio: ", error);
// // // //             resultDiv.innerText = "Error playing the song. Please try again.";
// // // //         });

// // // //         hintDiv.innerText = ''; // Clear the hint initially
// // // //         resultDiv.innerText = '';
// // // //         wrongLetters = [];
// // // //         remainingGuesses = 3;
// // // //         updateDisplay();
// // // //         createLetterInputs(currentSong.title.length);
// // // //     }

// // // //     function createLetterInputs(length) {
// // // //         letterInputsDiv.innerHTML = '';
// // // //         for (let i = 0; i < length; i++) {
// // // //             const input = document.createElement('input');
// // // //             input.type = 'text';
// // // //             input.maxLength = 1;
// // // //             input.dataset.index = i;
// // // //             input.addEventListener('input', onLetterInput);
// // // //             letterInputsDiv.appendChild(input);
// // // //         }
// // // //         // Set focus on the first input box initially
// // // //         if (letterInputsDiv.firstChild) {
// // // //             letterInputsDiv.firstChild.focus();
// // // //         }
// // // //     }

// // // //     function onLetterInput(event) {
// // // //         const input = event.target;
// // // //         const nextInput = input.nextElementSibling;
// // // //         if (nextInput && input.value) {
// // // //             nextInput.focus();
// // // //         }
// // // //     }

// // // //     function checkGuess() {
// // // //         const userGuessArray = [];
// // // //         const inputs = letterInputsDiv.getElementsByTagName('input');
// // // //         for (let input of inputs) {
// // // //             userGuessArray.push(input.value.trim());
// // // //         }
// // // //         const userGuess = userGuessArray.join('');

// // // //         if (userGuess.toLowerCase() === currentSong.title.toLowerCase()) {
// // // //             resultDiv.innerText = "Correct!";
// // // //             score++;
// // // //             updateDisplay();
// // // //             createNextSongButton();
// // // //         } else {
// // // //             remainingGuesses--;
// // // //             wrongLetters.push(userGuess);
// // // //             updateDisplay();
// // // //             clearInputs();
// // // //             resultDiv.innerText = "Wrong Guess!";
// // // //             if (remainingGuesses === 2) {
// // // //                 hintDiv.innerText = `Hint: ${currentSong.hint}`;
// // // //             }
// // // //             if (remainingGuesses === 1) {
// // // //                 revealRandomLetters(2);
// // // //             }
// // // //             if (remainingGuesses === 0) {
// // // //                 resultDiv.innerText = `Wrong! The correct answer was ${currentSong.title}`;
// // // //                 createNextSongButton();
// // // //             }
// // // //         }
// // // //     }

// // // //     function updateDisplay() {
// // // //         scoreDiv.innerText = "Score: " + score;
// // // //         remainingGuessesDiv.innerText = `Remaining guesses: ${remainingGuesses}`;
// // // //         wrongLettersDiv.innerText = `Wrong letters: ${wrongLetters.join(", ")}`;

// // // //         // Add animation classes
// // // //         scoreDiv.classList.add('pulse');
// // // //         remainingGuessesDiv.classList.add('shake');
// // // //         wrongLettersDiv.classList.add('fadeIn');

// // // //         // Remove animation classes after animation ends
// // // //         setTimeout(() => {
// // // //             scoreDiv.classList.remove('pulse');
// // // //             remainingGuessesDiv.classList.remove('shake');
// // // //             wrongLettersDiv.classList.remove('fadeIn');
// // // //         }, 1000);
// // // //     }

// // // //     function clearInputs() {
// // // //         const inputs = letterInputsDiv.getElementsByTagName('input');
// // // //         for (let input of inputs) {
// // // //             input.value = '';
// // // //         }
// // // //         if (inputs.length > 0) {
// // // //             inputs[0].focus();
// // // //         }
// // // //     }

// // // //     function revealRandomLetters(count) {
// // // //         const inputs = letterInputsDiv.getElementsByTagName('input');
// // // //         const correctLetters = currentSong.title.split('');
// // // //         const emptyIndices = [];

// // // //         for (let i = 0; i < inputs.length; i++) {
// // // //             if (!inputs[i].value) {
// // // //                 emptyIndices.push(i);
// // // //             }
// // // //         }

// // // //         if (emptyIndices.length > 0) {
// // // //             for (let i = 0; i < count; i++) {
// // // //                 const randomIndex = emptyIndices.splice(Math.floor(Math.random() * emptyIndices.length), 1)[0];
// // // //                 inputs[randomIndex].value = correctLetters[randomIndex];
// // // //                 if (emptyIndices.length === 0) {
// // // //                     break;
// // // //                 }
// // // //             }
// // // //         }
// // // //     }

// // // //     function createNextSongButton() {
// // // //         const nextSongBtn = document.createElement('button');
// // // //         nextSongBtn.innerText = "Next Song";
// // // //         nextSongBtn.addEventListener('click', () => {
// // // //             currentSongIndex++;
// // // //             playNextSong();
// // // //             nextSongBtn.remove();
// // // //         });
// // // //         resultDiv.appendChild(nextSongBtn);
// // // //     }

// // // //     function resetGame() {
// // // //         audio.pause(); // Stop the song
// // // //         audio.currentTime = 0; // Reset the song to the beginning
// // // //         currentSongIndex = 0;
// // // //         score = 0;
// // // //         remainingGuesses = 3;
// // // //         wrongLetters = [];
// // // //         updateDisplay();
// // // //         resultDiv.innerText = '';
// // // //         hintDiv.innerText = '';
// // // //         letterInputsDiv.innerHTML = ''; // Clear the letter inputs
// // // //         resultDiv.innerText = '';
// // // //     }
// // // // });
// // // document.addEventListener("DOMContentLoaded", () => {
// // //     const songs = [
// // //         { title: "DagabaazRe", src: "/Audio/Dagabaaz Re.mp3", hint: "Salu bhaii" },
// // //         { title: "Lagjagale", src: "/Audio/Lagja gale.mp3", hint: "Old song" },
// // //         { title: "ManwaLaage", src: "/Audio/Manwa Laage.mp3", hint: "Old song" },
// // //         { title: "Merebina", src: "/Audio/Mere bina.mp3", hint: "Old song" },
// // //         { title: "Mitwa", src: "/Audio/Mitwa.mp3", hint: "Old song" },
// // //         { title: "PeeLoon", src: "/Audio/Pee Loon.mp3", hint: "Old song" },
// // //         { title: "Radha", src: "/Audio/Radha.mp3", hint: "Old song" },
// // //         { title: "TenuLeke", src: "/Audio/Tenu Leke.mp3", hint: "Old song" },
// // //     ];

// // //     const playBtn = document.getElementById('play-btn');
// // //     const submitBtn = document.getElementById('submit-btn');
// // //     const skipBtn = document.getElementById('skip-btn');
// // //     const resetBtn = document.getElementById('reset-btn');
// // //     const letterInputsDiv = document.getElementById('letter-inputs');
// // //     const resultDiv = document.getElementById('result');
// // //     const scoreDiv = document.getElementById('score');
// // //     const hintDiv = document.getElementById('hint');
// // //     const remainingGuessesDiv = document.getElementById('remaining-guesses');
// // //     const wrongLettersDiv = document.getElementById('wrong-letters');
// // //     let currentSongIndex = 0;
// // //     let audio = new Audio();
// // //     let score = 0;
// // //     let remainingGuesses = 3;
// // //     let wrongLetters = [];
// // //     let currentSong = null;

// // //     playBtn.addEventListener('click', playNextSong);
// // //     submitBtn.addEventListener('click', checkGuess);
// // //     skipBtn.addEventListener('click', skipSong);
// // //     resetBtn.addEventListener('click', resetGame);

// // //     function playNextSong() {
// // //         if (currentSongIndex >= songs.length) {
// // //             resultDiv.innerText = "You've reached the end of the song list.";
// // //             letterInputsDiv.innerHTML = ''; // Clear the letter inputs
// // //             return;
// // //         }

// // //         currentSong = songs[currentSongIndex];
// // //         audio.src = currentSong.src;

// // //         audio.load(); // Ensure the audio is loaded
// // //         audio.play().catch(error => {
// // //             console.error("Error playing the audio: ", error);
// // //             resultDiv.innerText = "Error playing the song. Please try again.";
// // //         });

// // //         hintDiv.innerText = ''; // Clear the hint initially
// // //         resultDiv.innerText = '';
// // //         wrongLetters = [];
// // //         remainingGuesses = 3;
// // //         updateDisplay();
// // //         createLetterInputs(currentSong.title.length);
// // //     }

// // //     function createLetterInputs(length) {
// // //         letterInputsDiv.innerHTML = '';
// // //         for (let i = 0; i < length; i++) {
// // //             const input = document.createElement('input');
// // //             input.type = 'text';
// // //             input.maxLength = 1;
// // //             input.dataset.index = i;
// // //             input.addEventListener('input', onLetterInput);
// // //             letterInputsDiv.appendChild(input);
// // //         }
// // //         // Set focus on the first input box initially
// // //         if (letterInputsDiv.firstChild) {
// // //             letterInputsDiv.firstChild.focus();
// // //         }
// // //     }

// // //     function onLetterInput(event) {
// // //         const input = event.target;
// // //         const nextInput = input.nextElementSibling;
// // //         if (nextInput && input.value) {
// // //             nextInput.focus();
// // //         }
// // //     }

// // //     function checkGuess() {
// // //         const userGuessArray = [];
// // //         const inputs = letterInputsDiv.getElementsByTagName('input');
// // //         for (let input of inputs) {
// // //             userGuessArray.push(input.value.trim());
// // //         }
// // //         const userGuess = userGuessArray.join('');

// // //         if (userGuess.toLowerCase() === currentSong.title.toLowerCase()) {
// // //             resultDiv.innerText = "Correct!";
// // //             score++;
// // //             updateDisplay();
// // //             createNextSongButton();
// // //         } else {
// // //             remainingGuesses--;
// // //             wrongLetters.push(userGuess);
// // //             updateDisplay();
// // //             clearInputs();
// // //             resultDiv.innerText = "Wrong Guess!";
// // //             if (remainingGuesses === 2) {
// // //                 hintDiv.innerText = `Hint: ${currentSong.hint}`;
// // //             }
// // //             if (remainingGuesses === 1) {
// // //                 revealRandomLetters(2);
// // //                 skipBtn.style.display = 'inline-block'; // Show the skip button
// // //             }
// // //             if (remainingGuesses === 0) {
// // //                 resultDiv.innerText = `Wrong! The correct answer was ${currentSong.title}`;
// // //                 createNextSongButton();
// // //             }
// // //         }
// // //     }

// // //     function updateDisplay() {
// // //         scoreDiv.innerText = "Score: " + score;
// // //         remainingGuessesDiv.innerText = `Remaining guesses: ${remainingGuesses}`;
// // //         wrongLettersDiv.innerText = `Wrong letters: ${wrongLetters.join(", ")}`;

// // //         // Add animation classes
// // //         scoreDiv.classList.add('pulse');
// // //         remainingGuessesDiv.classList.add('shake');
// // //         wrongLettersDiv.classList.add('fadeIn');

// // //         // Remove animation classes after animation ends
// // //         setTimeout(() => {
// // //             scoreDiv.classList.remove('pulse');
// // //             remainingGuessesDiv.classList.remove('shake');
// // //             wrongLettersDiv.classList.remove('fadeIn');
// // //         }, 1000);
// // //     }

// // //     function clearInputs() {
// // //         const inputs = letterInputsDiv.getElementsByTagName('input');
// // //         for (let input of inputs) {
// // //             input.value = '';
// // //         }
// // //         if (inputs.length > 0) {
// // //             inputs[0].focus();
// // //         }
// // //     }

// // //     function revealRandomLetters(count) {
// // //         const inputs = letterInputsDiv.getElementsByTagName('input');
// // //         const correctLetters = currentSong.title.split('');
// // //         const emptyIndices = [];

// // //         for (let i = 0; i < inputs.length; i++) {
// // //             if (!inputs[i].value) {
// // //                 emptyIndices.push(i);
// // //             }
// // //         }

// // //         if (emptyIndices.length > 0) {
// // //             for (let i = 0; i < count; i++) {
// // //                 const randomIndex = emptyIndices.splice(Math.floor(Math.random() * emptyIndices.length), 1)[0];
// // //                 inputs[randomIndex].value = correctLetters[randomIndex];
// // //                 if (emptyIndices.length === 0) {
// // //                     break;
// // //                 }
// // //             }
// // //         }
// // //     }

// // //     function createNextSongButton() {
// // //         const nextSongBtn = document.createElement('button');
// // //         nextSongBtn.innerText = "Next Song";
// // //         nextSongBtn.addEventListener('click', () => {
// // //             currentSongIndex++;
// // //             playNextSong();
// // //             nextSongBtn.remove();
// // //             skipBtn.style.display = 'none'; // Hide the skip button
// // //         });
// // //         resultDiv.appendChild(nextSongBtn);
// // //     }

// // //     function skipSong() {
// // //         currentSongIndex++;
// // //         playNextSong();
// // //         skipBtn.style.display = 'none'; // Hide the skip button
// // //     }

// // //     function resetGame() {
// // //         audio.pause(); // Stop the song
// // //         audio.currentTime = 0; // Reset the song to the beginning
// // //         currentSongIndex = 0;
// // //         score = 0;
// // //         remainingGuesses = 3;
// // //         wrongLetters = [];
// // //         updateDisplay();
// // //         resultDiv.innerText = '';
// // //         hintDiv.innerText = '';
// // //         letterInputsDiv.innerHTML = ''; // Clear the letter inputs
// // //         resultDiv.innerText = '';
// // //         skipBtn.style.display = 'none'; // Hide the skip button
// // //     }
// // // });
// // document.addEventListener("DOMContentLoaded", () => {
// //     const songs = [
// //         { title: "DagabaazRe", src: "/Audio/Dagabaaz Re.mp3", hint: "Salu bhaii" },
// //         { title: "Lagjagale", src: "/Audio/Lagja gale.mp3", hint: "Old song" },
// //         { title: "ManwaLaage", src: "/Audio/Manwa Laage.mp3", hint: "Old song" },
// //         { title: "Merebina", src: "/Audio/Mere bina.mp3", hint: "Old song" },
// //         { title: "Mitwa", src: "/Audio/Mitwa.mp3", hint: "Old song" },
// //         { title: "PeeLoon", src: "/Audio/Pee Loon.mp3", hint: "Old song" },
// //         { title: "Radha", src: "/Audio/Radha.mp3", hint: "Old song" },
// //         { title: "TenuLeke", src: "/Audio/Tenu Leke.mp3", hint: "Old song" },
// //     ];

// //     const playBtn = document.getElementById('play-btn');
// //     const submitBtn = document.getElementById('submit-btn');
// //     const skipBtn = document.getElementById('skip-btn');
// //     const resetBtn = document.getElementById('reset-btn');
// //     const letterInputsDiv = document.getElementById('letter-inputs');
// //     const resultDiv = document.getElementById('result');
// //     const scoreDiv = document.getElementById('score');
// //     const hintDiv = document.getElementById('hint');
// //     const remainingGuessesDiv = document.getElementById('remaining-guesses');
// //     const wrongLettersDiv = document.getElementById('wrong-letters');
// //     let currentSongIndex = 0;
// //     let audio = new Audio();
// //     let score = 0;
// //     let remainingGuesses = 3;
// //     let wrongLetters = [];
// //     let currentSong = null;

// //     playBtn.addEventListener('click', playNextSong);
// //     submitBtn.addEventListener('click', checkGuess);
// //     skipBtn.addEventListener('click', skipSong);
// //     resetBtn.addEventListener('click', resetGame);

// //     audio.addEventListener('ended', onSongEnd);

// //     function playNextSong() {
// //         if (currentSongIndex >= songs.length) {
// //             resultDiv.innerText = "You've reached the end of the song list.";
// //             letterInputsDiv.innerHTML = ''; // Clear the letter inputs
// //             return;
// //         }

// //         currentSong = songs[currentSongIndex];
// //         audio.src = currentSong.src;

// //         audio.load(); // Ensure the audio is loaded
// //         audio.play().catch(error => {
// //             console.error("Error playing the audio: ", error);
// //             resultDiv.innerText = "Error playing the song. Please try again.";
// //         });

// //         hintDiv.innerText = ''; // Clear the hint initially
// //         resultDiv.innerText = '';
// //         wrongLetters = [];
// //         remainingGuesses = 3;
// //         updateDisplay();
// //         createLetterInputs(currentSong.title.length);
// //         playBtn.style.display = 'none'; // Hide the play button while the song is playing
// //     }

// //     function onSongEnd() {
// //         playBtn.style.display = 'inline-block'; // Show the play button again when the song ends
// //     }

// //     function createLetterInputs(length) {
// //         letterInputsDiv.innerHTML = '';
// //         for (let i = 0; i < length; i++) {
// //             const input = document.createElement('input');
// //             input.type = 'text';
// //             input.maxLength = 1;
// //             input.dataset.index = i;
// //             input.addEventListener('input', onLetterInput);
// //             letterInputsDiv.appendChild(input);
// //         }
// //         // Set focus on the first input box initially
// //         if (letterInputsDiv.firstChild) {
// //             letterInputsDiv.firstChild.focus();
// //         }
// //     }

// //     function onLetterInput(event) {
// //         const input = event.target;
// //         const nextInput = input.nextElementSibling;
// //         if (nextInput && input.value) {
// //             nextInput.focus();
// //         }
// //     }

// //     function checkGuess() {
// //         const userGuessArray = [];
// //         const inputs = letterInputsDiv.getElementsByTagName('input');
// //         for (let input of inputs) {
// //             userGuessArray.push(input.value.trim());
// //         }
// //         const userGuess = userGuessArray.join('');

// //         if (userGuess.toLowerCase() === currentSong.title.toLowerCase()) {
// //             resultDiv.innerText = "Correct!";
// //             score++;
// //             updateDisplay();
// //             createNextSongButton();
// //         } else {
// //             remainingGuesses--;
// //             wrongLetters.push(userGuess);
// //             updateDisplay();
// //             clearInputs();
// //             resultDiv.innerText = "Wrong Guess!";
// //             if (remainingGuesses === 2) {
// //                 hintDiv.innerText = `Hint: ${currentSong.hint}`;
// //             }
// //             if (remainingGuesses === 1) {
// //                 revealRandomLetters(2);
// //             }
// //             if (remainingGuesses === 0) {
// //                 resultDiv.innerText = `Wrong! The correct answer was ${currentSong.title}`;
// //                 createNextSongButton();
// //             }
// //         }
// //     }

// //     function updateDisplay() {
// //         scoreDiv.innerText = "Score: " + score;
// //         remainingGuessesDiv.innerText = `Remaining guesses: ${remainingGuesses}`;
// //         wrongLettersDiv.innerText = `Wrong letters: ${wrongLetters.join(", ")}`;

// //         // Add animation classes
// //         scoreDiv.classList.add('pulse');
// //         remainingGuessesDiv.classList.add('shake');
// //         wrongLettersDiv.classList.add('fadeIn');

// //         // Remove animation classes after animation ends
// //         setTimeout(() => {
// //             scoreDiv.classList.remove('pulse');
// //             remainingGuessesDiv.classList.remove('shake');
// //             wrongLettersDiv.classList.remove('fadeIn');
// //         }, 1000);
// //     }

// //     function clearInputs() {
// //         const inputs = letterInputsDiv.getElementsByTagName('input');
// //         for (let input of inputs) {
// //             input.value = '';
// //         }
// //         if (inputs.length > 0) {
// //             inputs[0].focus();
// //         }
// //     }

// //     function revealRandomLetters(count) {
// //         const inputs = letterInputsDiv.getElementsByTagName('input');
// //         const correctLetters = currentSong.title.split('');
// //         const emptyIndices = [];

// //         for (let i = 0; i < inputs.length; i++) {
// //             if (!inputs[i].value) {
// //                 emptyIndices.push(i);
// //             }
// //         }

// //         if (emptyIndices.length > 0) {
// //             for (let i = 0; i < count; i++) {
// //                 const randomIndex = emptyIndices.splice(Math.floor(Math.random() * emptyIndices.length), 1)[0];
// //                 inputs[randomIndex].value = correctLetters[randomIndex];
// //                 if (emptyIndices.length === 0) {
// //                     break;
// //                 }
// //             }
// //         }
// //     }

// //     function createNextSongButton() {
// //         const nextSongBtn = document.createElement('button');
// //         nextSongBtn.innerText = "Next Song";
// //         nextSongBtn.addEventListener('click', () => {
// //             currentSongIndex++;
// //             playNextSong();
// //             nextSongBtn.remove();
// //         });
// //         resultDiv.appendChild(nextSongBtn);
// //     }

// //     function skipSong() {
// //         if (currentSongIndex < songs.length - 1) {
// //             currentSongIndex++;
// //             playNextSong();
// //         } else {
// //             resultDiv.innerText = "No more songs to play.";
// //             letterInputsDiv.innerHTML = ''; // Clear the letter inputs
// //         }
// //     }

// //     function resetGame() {
// //         audio.pause(); // Stop the song
// //         audio.currentTime = 0; // Reset the song to the beginning
// //         currentSongIndex = 0;
// //         score = 0;
// //         remainingGuesses = 3;
// //         wrongLetters = [];
// //         updateDisplay();
// //         resultDiv.innerText = '';
// //         hintDiv.innerText = '';
// //         letterInputsDiv.innerHTML = ''; // Clear the letter inputs
// //         resultDiv.innerText = '';
// //         playBtn.style.display = 'inline-block'; // Show the play button again when the game is reset
// //     }
// // });

// document.addEventListener("DOMContentLoaded", () => {
//     const songs = [
//         { title: "Merebina", src: "/Audio/Mere bina.mp3", hint: "Old song" },
//         { title: "TenuLeke", src: "/Audio/Tenu Leke.mp3", hint: "Old song" },
//         { title: "Putali", src: "/Audio/Putali.mp3", hint: "Indra Josi" },
//         { title: "Kajrare", src: "/Audio/Kajra re.mp3", hint: "Amita Bhachhan" },
//         { title: "AilaLuwaya", src: "/Audio/AilaLuwaya.mp3", hint: "Indra Josi" },
//         { title: "Mitwa", src: "/Audio/Mitwa.mp3", hint: "Old song" },
//         { title: "Ranga", src: "/Audio/Ranga.mp3", hint: "Indra Josi" },
//         { title: "Daylight", src: "/Audio/Daylight.mp3", hint: "Indra Josi" },
//         { title: "PeeLoon", src: "/Audio/Pee Loon.mp3", hint: "Old song" },
//         { title: "TimiSangai", src: "/Audio/Timi Sangai.mp3", hint: "Timi" },
//         { title: "terenaina", src: "/Audio/tere naina.mp3", hint: "Old song" },
//         { title: "DagabaazRe", src: "/Audio/Dagabaaz Re.mp3", hint: "Salu bhaii" },
//         { title: "ChunanariChunnari", src: "/Audio/Chunanari Chunnari.mp3", hint: "Salu bhaii" },
//         { title: "Gajalu", src: "/Audio/Gajalu.mp3", hint: "Salu bhaii" },
//         { title: "Kasari", src: "/Audio/Kasari.mp3", hint: "Kasari" },
//         { title: "KunfayaKun", src: "/Audio/Kun faya Kun.mp3", hint: "Rockstar" },
//         { title: "Lagjagale", src: "/Audio/Lagja gale.mp3", hint: "Old song" },
//         { title: "ManwaLaage", src: "/Audio/Manwa Laage.mp3", hint: "Old song" },
//         { title: "Radha", src: "/Audio/Radha.mp3", hint: "Old song" },
//         { title: "TirkhaLage", src: "/Audio/Tirkha lage.mp3", hint: "Timi" },
//         { title: "Behuli", src: "/Audio/Behuli.mp3", hint: "Indra Josi" },
//         { title: "farqhai", src: "/Audio/Farqhai.mp3", hint: "Indra Josi" },
//         { title: "Saudebazi", src: "/Audio/Saudebazi.mp3", hint: "Indra Josi" },
//         { title: "SawaarLoon", src: "/Audio/Sawaar Loon.mp3", hint: "Indra Josi" },
//         { title: "Tumsehi", src: "/Audio/Tumsehi.mp3", hint: "Indra Josi" },
//         { title: "Timropratiksa", src: "/Audio/timro pratiksha.mp3", hint: "Old song" },
//         { title: "Timirama", src: "/Audio/Timirama.mp3", hint: "Indra Josi" },
       
//     ]
   

//     const playBtn = document.getElementById('play-btn');
//     const submitBtn = document.getElementById('submit-btn');
//     const skipBtn = document.getElementById('skip-btn');
//     const resetBtn = document.getElementById('reset-btn');
//     const letterInputsDiv = document.getElementById('letter-inputs');
//     const resultDiv = document.getElementById('result');
//     const scoreDiv = document.getElementById('score');
//     const hintDiv = document.getElementById('hint');
//     const remainingGuessesDiv = document.getElementById('remaining-guesses');
//     const wrongLettersDiv = document.getElementById('wrong-letters');
//     const songsRemainingDiv = document.getElementById('songs-remaining');
//     let currentSongIndex = 0;
//     let audio = new Audio();
//     let score = 0;
//     let remainingGuesses = 3;
//     let wrongLetters = [];
//     let currentSong = null;

//     playBtn.addEventListener('click', playNextSong);
//     submitBtn.addEventListener('click', checkGuess);
//     skipBtn.addEventListener('click', skipSong);
//     resetBtn.addEventListener('click', resetGame);

//     audio.addEventListener('ended', onSongEnd);

//     updateSongsRemaining();

//     function playNextSong() {
//         if (currentSongIndex >= songs.length) {
//             resultDiv.innerText = "You've reached the end of the song list.";
//             letterInputsDiv.innerHTML = ''; // Clear the letter inputs
//             return;
//         }

//         currentSong = songs[currentSongIndex];
//         audio.src = currentSong.src;

//         audio.load(); // Ensure the audio is loaded
//         audio.play().catch(error => {
//             console.error("Error playing the audio: ", error);
//             resultDiv.innerText = "Error playing the song. Please try again.";
//         });

//         hintDiv.innerText = ''; // Clear the hint initially
//         resultDiv.innerText = '';
//         wrongLetters = [];
//         remainingGuesses = 3;
//         updateDisplay();
//         createLetterInputs(currentSong.title.length);
//         playBtn.style.display = 'none'; // Hide the play button while the song is playing
//         updateSongsRemaining();
//     }

//     function onSongEnd() {
//         playBtn.style.display = 'inline-block'; // Show the play button again when the song ends
//     }

//     function createLetterInputs(length) {
//         letterInputsDiv.innerHTML = '';
//         for (let i = 0; i < length; i++) {
//             const input = document.createElement('input');
//             input.type = 'text';
//             input.maxLength = 1;
//             input.dataset.index = i;
//             input.addEventListener('input', onLetterInput);
//             letterInputsDiv.appendChild(input);
//         }
//         // Set focus on the first input box initially
//         if (letterInputsDiv.firstChild) {
//             letterInputsDiv.firstChild.focus();
//         }
//     }

//     function onLetterInput(event) {
//         const input = event.target;
//         const nextInput = input.nextElementSibling;
//         if (nextInput && input.value) {
//             nextInput.focus();
//         }
//     }

//     function checkGuess() {
//         const userGuessArray = [];
//         const inputs = letterInputsDiv.getElementsByTagName('input');
//         for (let input of inputs) {
//             userGuessArray.push(input.value.trim());
//         }
//         const userGuess = userGuessArray.join('');

//         if (userGuess.toLowerCase() === currentSong.title.toLowerCase()) {
//             resultDiv.innerText = " Your guess was Correct.";
//             score++;
//             updateDisplay();
//             createNextSongButton();
//         } else {
//             remainingGuesses--;
//             wrongLetters.push(userGuess);
//             updateDisplay();
//             clearInputs();
//             resultDiv.innerText = " Your guess was Wrong";
//             if (remainingGuesses === 2) {
//                 hintDiv.innerText = `Hint: ${currentSong.hint}`;
//             }
//             if (remainingGuesses === 1) {
//                 revealRandomLetters(2);
//             }
//             if (remainingGuesses === 0) {
//                 resultDiv.innerText = `Wrong. The correct answer was ${currentSong.title}`;
//                 createNextSongButton();
//             }
//         }
//     }

//     function updateDisplay() {
//         scoreDiv.innerText = "Score: " + score;
//         remainingGuessesDiv.innerText = `Remaining guesses: ${remainingGuesses}`;
//         wrongLettersDiv.innerText = `Wrong letters: ${wrongLetters.join(", ")}`;

//         // Add animation classes
//         scoreDiv.classList.add('pulse');
//         remainingGuessesDiv.classList.add('shake');
//         wrongLettersDiv.classList.add('fadeIn');

//         // Remove animation classes after animation ends
//         setTimeout(() => {
//             scoreDiv.classList.remove('pulse');
//             remainingGuessesDiv.classList.remove('shake');
//             wrongLettersDiv.classList.remove('fadeIn');
//         }, 1000);
//     }

//     function clearInputs() {
//         const inputs = letterInputsDiv.getElementsByTagName('input');
//         for (let input of inputs) {
//             input.value = '';
//         }
//         if (inputs.length > 0) {
//             inputs[0].focus();
//         }
//     }

//     function revealRandomLetters(count) {
//         const inputs = letterInputsDiv.getElementsByTagName('input');
//         const correctLetters = currentSong.title.split('');
//         const emptyIndices = [];

//         for (let i = 0; i < inputs.length; i++) {
//             if (!inputs[i].value) {
//                 emptyIndices.push(i);
//             }
//         }

//         if (emptyIndices.length > 0) {
//             for (let i = 0; i < count; i++) {
//                 const randomIndex = emptyIndices.splice(Math.floor(Math.random() * emptyIndices.length), 1)[0];
//                 inputs[randomIndex].value = correctLetters[randomIndex];
//                 if (emptyIndices.length === 0) {
//                     break;
//                 }
//             }
//         }
//     }

//     function createNextSongButton() {
//         const nextSongBtn = document.createElement('button');
//         nextSongBtn.innerText = "Next Song";
//         nextSongBtn.addEventListener('click', () => {
//             currentSongIndex++;
//             playNextSong();
//             nextSongBtn.remove();
//         });
//         resultDiv.appendChild(nextSongBtn);
//     }

//     function skipSong() {
//         if (currentSongIndex < songs.length - 1) {
//             currentSongIndex++;
//             playNextSong();
//         } else {
//             resultDiv.innerText = "No Song available.";
//             letterInputsDiv.innerHTML = ''; // Clear the letter inputs
//         }
//     }

//     function resetGame() {
//         audio.pause(); // Stop the song
//         audio.currentTime = 0; // Reset the song to the beginning
//         currentSongIndex = 0;
//         score = 0;
//         remainingGuesses = 3;
//         wrongLetters = [];
//         updateDisplay();
//         resultDiv.innerText = '';
//         hintDiv.innerText = '';
//         letterInputsDiv.innerHTML = ''; // Clear the letter inputs
//         resultDiv.innerText = '';
//         playBtn.style.display = 'inline-block'; // Show the play button again when the game is reset
//         updateSongsRemaining();
//     }

//     function updateSongsRemaining() {
//         const remainingSongs = songs.length - currentSongIndex;
//         songsRemainingDiv.innerText = `Songs remaining: ${remainingSongs}`;

//         // Add animation class
//         songsRemainingDiv.classList.add('fadeIn');

//         // Remove animation class after animation ends
//         setTimeout(() => {
//             songsRemainingDiv.classList.remove('fadeIn');
//         }, 500);
//     }
// });


// function onLetterInput(event) {
//     const input = event.target;
//     const nextInput = input.nextElementSibling;

//     // Check if the typed letter is correct
//     const index = input.dataset.index;
//     const correctLetter = currentSong.title.charAt(index).toLowerCase();
//     if (input.value.toLowerCase() !== correctLetter) {
//         input.value = ''; // Clear the input if incorrect
//         input.focus(); // Move focus back to the current input
//     } else if (nextInput && input.value) {
//         nextInput.focus();
//     }
// }

document.addEventListener("DOMContentLoaded", () => {
    const songs = [
        { title: "Merebina", src: "/Audio/Mere bina.mp3", hint: "emraan hashmi " },
        { title: "TenuLeke", src: "/Audio/Tenu Leke.mp3", hint: "Salu bhai song" },
        { title: "Putali", src: "/Audio/Putali.mp3", hint: "The elements" },
        { title: "Kajrare", src: "/Audio/Kajra re.mp3", hint: "Amita Bhachhan" },
        { title: "AilaLuwaya", src: "/Audio/AilaLuwaya.mp3", hint: "Newari song" },
        { title: "Mitwa", src: "/Audio/Mitwa.mp3", hint: "Old song" },
        { title: "Ranga", src: "/Audio/Ranga.mp3", hint: "badal banerw aayeni" },
        { title: "Daylight", src: "/Audio/Daylight.mp3", hint: "English Song" },
        { title: "PeeLoon", src: "/Audio/Pee Loon.mp3", hint: "Emraan hashmi" },
        { title: "TimiSangai", src: "/Audio/Timi Sangai.mp3", hint: "Yo saral" },
        { title: "terenaina", src: "/Audio/tere naina.mp3", hint: "Akshya Kumar" },
        { title: "DagabaazRe", src: "/Audio/Dagabaaz Re.mp3", hint: "Salu bhaii" },
        { title: "ChunanariChunnari", src: "/Audio/Chunanari Chunnari.mp3", hint: "Salu bhaii" },
        { title: "Gajalu", src: "/Audio/Gajalu.mp3", hint: "narayan gopal" },
        { title: "Kasari", src: "/Audio/Kasari.mp3", hint: "How" },
        { title: "KunfayaKun", src: "/Audio/Kun faya Kun.mp3", hint: "Rockstar" },
        { title: "Lagjagale", src: "/Audio/Lagja gale.mp3", hint: "Old song" },
        { title: "ManwaLaage", src: "/Audio/Manwa Laage.mp3", hint: "Srk" },
        { title: "Radha", src: "/Audio/Radha.mp3", hint: "Alia bhatt" },
        { title: "TirkhaLage", src: "/Audio/Tirkha lage.mp3", hint: "Nepali Old song" },
        { title: "Behuli", src: "/Audio/Behuli.mp3", hint: "Indra Josi" },
        { title: "farqhai", src: "/Audio/Farqhai.mp3", hint: "hum tum" },
        { title: "Saudebazi", src: "/Audio/Saudebazi.mp3", hint: "Sauda" },
        { title: "SawaarLoon", src: "/Audio/Sawaar Loon.mp3", hint: "Saw...." },
        { title: "Tumsehi", src: "/Audio/Tumsehi.mp3", hint: "My fav song" },
        { title: "Timropratiksa", src: "/Audio/timro pratiksha.mp3", hint: "Ma parkya raxu" },
        { title: "Timirama", src: "/Audio/Timirama.mp3", hint: "You and me" },
    ];
    
    const playBtn = document.getElementById('play-btn');
    const submitBtn = document.getElementById('submit-btn');
    const skipBtn = document.getElementById('skip-btn');
    const resetBtn = document.getElementById('reset-btn');
    const letterInputsDiv = document.getElementById('letter-inputs');
    const resultDiv = document.getElementById('result');
    const scoreDiv = document.getElementById('score');
    const hintDiv = document.getElementById('hint');
    const remainingGuessesDiv = document.getElementById('remaining-guesses');
    const wrongLettersDiv = document.getElementById('wrong-letters');
    const songsRemainingDiv = document.getElementById('songs-remaining');
    let currentSongIndex = 0;
    let audio = new Audio();
    let score = 0;
    let remainingGuesses = 3;
    let wrongLetters = [];
    let currentSong = null;

    playBtn.addEventListener('click', playNextSong);
    submitBtn.addEventListener('click', checkGuess);
    skipBtn.addEventListener('click', skipSong);
    resetBtn.addEventListener('click', resetGame);

    audio.addEventListener('ended', onSongEnd);

    updateSongsRemaining();

    function playNextSong() {
        if (currentSongIndex >= songs.length) {
            resultDiv.innerText = "You've reached the end of the song list.";
            letterInputsDiv.innerHTML = ''; // Clear the letter inputs
            return;
        }

        currentSong = songs[currentSongIndex];
        audio.src = currentSong.src;

        audio.load(); // Ensure the audio is loaded
        audio.play().catch(error => {
            console.error("Error playing the audio: ", error);
            resultDiv.innerText = "Error playing the song. Please try again.";
        });

        hintDiv.innerText = ''; // Clear the hint initially
        resultDiv.innerText = '';
        wrongLetters = [];
        remainingGuesses = 3;
        updateDisplay();
        createLetterInputs(currentSong.title.length);
        playBtn.style.display = 'none'; // Hide the play button while the song is playing
        updateSongsRemaining();
    }
    function onSongEnd() {
        playBtn.style.display = 'inline-block'; // Show the play button again when the song ends
    }

    function createLetterInputs(length) {
        letterInputsDiv.innerHTML = '';
        for (let i = 0; i < length; i++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.maxLength = 1;
            input.dataset.index = i;
            input.addEventListener('input', onLetterInput);
            input.addEventListener('keydown', onLetterKeyDown); // Add keydown event listener
            letterInputsDiv.appendChild(input);
        }
        // Set focus on the first input box initially
        if (letterInputsDiv.firstChild) {
            letterInputsDiv.firstChild.focus();
        }
    }

    function onLetterInput(event) {
        const input = event.target;
        const nextInput = input.nextElementSibling;
        if (nextInput && input.value) {
            nextInput.focus();
        }
    }

    function onLetterKeyDown(event) {
        const input = event.target;
        const prevInput = input.previousElementSibling;

        if (event.key === 'Backspace' && !input.value && prevInput) {
            prevInput.focus();
        }
    }

    function checkGuess() {
        const userGuessArray = [];
        const inputs = letterInputsDiv.getElementsByTagName('input');
        for (let input of inputs) {
            userGuessArray.push(input.value.trim());
        }
        const userGuess = userGuessArray.join('');

        if (userGuess.toLowerCase() === currentSong.title.toLowerCase()) {
            resultDiv.innerText = " Your guess was Correct.";
            score++;
            updateDisplay();
            createNextSongButton();
        } else {
            remainingGuesses--;
            wrongLetters.push(userGuess);
            updateDisplay();
            clearInputs();
            resultDiv.innerText = " Your guess was Wrong";
            if (remainingGuesses === 2) {
                hintDiv.innerText = `Hint: ${currentSong.hint}`;
            }
            if (remainingGuesses === 1) {
                revealRandomLetters(2);
            }
            if (remainingGuesses === 0) {
                resultDiv.innerText = `Wrong. The correct answer was ${currentSong.title}`;
                createNextSongButton();
            }
        }
    }

    function updateDisplay() {
        scoreDiv.innerText = "Score: " + score;
        remainingGuessesDiv.innerText = `Remaining guesses: ${remainingGuesses}`;
        wrongLettersDiv.innerText = `Wrong letters: ${wrongLetters.join(", ")}`;

        // Add animation classes
        scoreDiv.classList.add('pulse');
        remainingGuessesDiv.classList.add('shake');
        wrongLettersDiv.classList.add('fadeIn');

        // Remove animation classes after animation ends
        setTimeout(() => {
            scoreDiv.classList.remove('pulse');
            remainingGuessesDiv.classList.remove('shake');
            wrongLettersDiv.classList.remove('fadeIn');
        }, 1000);
    }

    function clearInputs() {
        const inputs = letterInputsDiv.getElementsByTagName('input');
        for (let input of inputs) {
            input.value = '';
        }
        if (inputs.length > 0) {
            inputs[0].focus();
        }
    }

    function revealRandomLetters(count) {
        const inputs = letterInputsDiv.getElementsByTagName('input');
        const indices = Array.from(Array(inputs.length).keys());
        for (let i = 0; i < count; i++) {
            const randomIndex = indices.splice(Math.floor(Math.random() * indices.length), 1)[0];
            inputs[randomIndex].value = currentSong.title[randomIndex];
        }
    }

    function createNextSongButton() {
        const nextSongBtn = document.createElement('button');
        nextSongBtn.innerText = "Next Song";
        nextSongBtn.addEventListener('click', () => {
            currentSongIndex++;
            playNextSong();
        });
        resultDiv.appendChild(nextSongBtn);
    }
    
    function onLetterInput(event) {
        const input = event.target;
        if (input.value === ' ') {
            alert('You cannot enter a space character.');
            input.value = ''; // Clear the input
            return;
        }
        const nextInput = input.nextElementSibling;
        if (nextInput && input.value) {
            nextInput.focus();
        }
    }

    function skipSong() {
        currentSongIndex++;
        playNextSong();
    }

    function resetGame() {
        currentSongIndex = 0;
        score = 0;
        remainingGuesses = 3;
        wrongLetters = [];
        updateDisplay();
        playNextSong();
    }

    function updateSongsRemaining() {
        const songsRemaining = songs.length - currentSongIndex;
        songsRemainingDiv.innerText = `Songs remaining: ${songsRemaining}`;

        // Add animation class
        songsRemainingDiv.classList.add('fadeIn');

        // Remove animation class after animation ends
        setTimeout(() => {
            songsRemainingDiv.classList.remove('fadeIn');
        }, 1000);
    }
});
