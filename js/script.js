// js/script.js

// --- Helper function for Latin to Binary (JavaScript version) ---
function transliterateLatinToBinary(text) {
    const binaryConfig = window.ALL_SCRIPT_DATA["binary"];
    if (!binaryConfig) return "Binary script data not loaded.";
    const binaryCharSeparator = binaryConfig.char_separator || ' ';
    
    let binaryChars = [];
    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i);
        if (charCode >= 0 && charCode <= 255) {
            binaryChars.push(charCode.toString(2).padStart(8, '0'));
        } else {
            binaryChars.push(`[?ASC_${charCode}]`);
        }
    }
    return binaryChars.join(binaryCharSeparator);
}

// --- Helper function for Binary to Latin (JavaScript version) ---
function transliterateBinaryToLatin(text) {
    const binaryConfig = window.ALL_SCRIPT_DATA["binary"];
    if (!binaryConfig) return "Binary script data not loaded.";
    const binaryCharSeparator = binaryConfig.char_separator || ' ';

    let latinChars = [];
    const binarySegments = text.split(binaryCharSeparator);

    for (const segment of binarySegments) {
        const binSegment = segment.trim();
        if (!binSegment) continue;

        if (binSegment.length === 8 && /^[01]{8}$/.test(binSegment)) {
            try {
                const ordVal = parseInt(binSegment, 2);
                latinChars.push(String.fromCharCode(ordVal));
            } catch (e) {
                latinChars.push(`[?BIN_${binSegment}]`);
            }
        } else if (binSegment) { // If it's not empty and not valid 8-bit binary
            latinChars.push(`[?FMT_${binSegment}]`);
        }
    }
    return latinChars.join('');
}

// --- Helper function for Latin to Morse (JavaScript version) ---
function transliterateLatinToMorse(text) {
    const morseData = window.ALL_SCRIPT_DATA["morse"];
    if (!morseData || !morseData.latin_to_morse) return "Morse data not loaded or incomplete.";
    
    const latinToMorseMap = morseData.latin_to_morse;
    const letterSeparator = morseData.letter_separator || ' ';
    const wordSeparator = morseData.word_separator || ' / ';

    let outputMorseParts = [];
    text = text.toUpperCase();

    for (let i = 0; i < text.length; i++) {
        const charCode = text[i];
        if (latinToMorseMap.hasOwnProperty(charCode)) { // Check if charCode is a key
            const morseSegment = latinToMorseMap[charCode];
            if (charCode === ' ' ) { // Specifically handle space to word_separator
                 if (!(outputMorseParts.length > 0 && outputMorseParts[outputMorseParts.length - 1] === wordSeparator)) {
                    outputMorseParts.push(wordSeparator);
                }
            } else {
                outputMorseParts.push(morseSegment);
            }
        } else {
            outputMorseParts.push(`[?${charCode}]`); // Unknown character
        }
    }
    
    let finalOutputString = [];
    for (let i = 0; i < outputMorseParts.length; i++) {
        finalOutputString.push(outputMorseParts[i]);
        if (outputMorseParts[i] !== wordSeparator && 
            i < outputMorseParts.length - 1 && 
            outputMorseParts[i+1] !== wordSeparator) {
            finalOutputString.push(letterSeparator);
        }
    }
    return finalOutputString.join('').trim();
}

// --- Helper function for Morse to Latin (JavaScript version) ---
function transliterateMorseToLatin(text) {
    const morseData = window.ALL_SCRIPT_DATA["morse"];
    if (!morseData || !morseData.morse_to_latin) return "Morse data not loaded or incomplete.";
    
    const morseToLatinMap = morseData.morse_to_latin;
    const letterSeparator = morseData.letter_separator || ' ';
    const wordSeparator = morseData.word_separator || ' / ';

    let latinOutputWords = [];
    const morseWords = text.trim().split(wordSeparator); // Trim overall text before splitting

    for (const morseWordSegment of morseWords) {
        const cleanedSegment = morseWordSegment.trim(); // Trim each word segment
        if (!cleanedSegment) continue; // Skip if segment is empty after trim (e.g. multiple word separators)

        const morseLetters = cleanedSegment.split(letterSeparator).filter(s => s.length > 0);
        let currentLatinWordChars = [];
        for (const morseCharCode of morseLetters) {
            if (morseToLatinMap.hasOwnProperty(morseCharCode)) {
                currentLatinWordChars.push(morseToLatinMap[morseCharCode]);
            } else {
                currentLatinWordChars.push(`[?${morseCharCode}]`);
            }
        }
        if (currentLatinWordChars.length > 0) {
            latinOutputWords.push(currentLatinWordChars.join(''));
        }
    }
    return latinOutputWords.join(' ');
}


// --- Generic Transliteration Functions ---
function transliterateToLatin(text, scriptName) {
    if (scriptName === "morse") return transliterateMorseToLatin(text);
    if (scriptName === "binary") return transliterateBinaryToLatin(text);

    const scriptData = window.ALL_SCRIPT_DATA[scriptName];
    if (!scriptData || !scriptData.to_latin_map) return `Error: Script data for '${scriptName}' not found or to_latin_map missing.`;
    const mapping = scriptData.to_latin_map;
    
    let result = [];
    let i = 0;
    const textLen = text.length;
    // For "to_latin", keys are usually single script characters, but sorting by length is a good general approach.
    const sortedScriptKeys = Object.keys(mapping).sort((a, b) => b.length - a.length);

    while (i < textLen) {
        let matched = false;
        for (const key of sortedScriptKeys) {
            // JavaScript strings handle surrogate pairs correctly for methods like startsWith
            if (text.startsWith(key, i)) {
                result.push(mapping[key]);
                i += key.length; // key.length correctly handles surrogate pairs
                matched = true;
                break;
            }
        }
        if (!matched) {
            // Handle surrogate pairs correctly if passing through an unmapped character
            const char = text.codePointAt(i) > 0xFFFF ? text.substring(i, i+2) : text[i];
            result.push(char);
            i += char.length;
        }
    }
    return result.join('');
}

function transliterateFromLatin(text, scriptName) {
    if (scriptName === "morse") return transliterateLatinToMorse(text);
    if (scriptName === "binary") return transliterateLatinToBinary(text);

    const scriptData = window.ALL_SCRIPT_DATA[scriptName];
    if (!scriptData || !scriptData.from_latin_map) return `Error: Script data for '${scriptName}' not found or from_latin_map missing.`;
    const mapping = scriptData.from_latin_map;

    let result = [];
    let i = 0;
    const textLen = text.length;
    const sortedLatinKeys = Object.keys(mapping).sort((a, b) => b.length - a.length);

    while (i < textLen) {
        let matched = false;
        for (const key of sortedLatinKeys) {
            if (text.startsWith(key, i)) {
                result.push(mapping[key]);
                i += key.length;
                matched = true;
                break;
            }
        }
        if (!matched) {
            result.push(text[i]); // If it's part of a surrogate pair, this might be an issue for unmapped multi-char Latin.
                                 // For from_latin, unmapped chars are usually single Latin letters.
            i++;
        }
    }
    return result.join('');
}

function getCharacterInfo(charText) {
    if (!charText) return "No character provided.";
    
    // Get the first full character, handling surrogate pairs
    const charCodePoint = charText.codePointAt(0);
    const char = String.fromCodePoint(charCodePoint);

    let info = [
        `Character: '${char}'`,
        `Unicode Codepoint: U+${charCodePoint.toString(16).toUpperCase().padStart(4, '0')}`,
        `Decimal Value: ${charCodePoint}`,
        `UTF-16 Code Unit(s): ${char.charCodeAt(0).toString(16).toUpperCase()}` + 
            (char.length > 1 ? `, ${char.charCodeAt(1).toString(16).toUpperCase()}` : ''),
        `8-bit Binary (if applicable): ${(charCodePoint >=0 && charCodePoint <= 255) ? charCodePoint.toString(2).padStart(8, '0') : 'N/A (out of 8-bit range for simple display)'}`
        // Full Unicode Name, Category, etc. are hard to get accurately in client-side JS without large libraries.
    ];
    
    info.push("\nScript Membership (based on defined ranges):");
    let foundInScript = false;
    if (window.ALL_SCRIPT_DATA) {
        for (const scriptId in window.ALL_SCRIPT_DATA) {
            const scriptData = window.ALL_SCRIPT_DATA[scriptId];
            if (scriptData.unicode_range && scriptData.unicode_range.length === 2) {
                try {
                    const startCp = parseInt(scriptData.unicode_range[0], 16);
                    const endCp = parseInt(scriptData.unicode_range[1], 16);
                    if (charCodePoint >= startCp && charCodePoint <= endCp) {
                        let scriptInfo = `Potentially in script range: ${scriptId} (${scriptData.description || 'N/A'})`;
                        if (scriptData.to_latin_map && scriptData.to_latin_map[char]) {
                            scriptInfo += ` -> Transliteration (${scriptId}): ${scriptData.to_latin_map[char]}`;
                        }
                        info.push(`  - ${scriptInfo}`);
                        foundInScript = true;
                    }
                } catch (e) { /* ignore parse errors for range */ }
            }
        }
    }
    if (!foundInScript) {
        info.push("  Not found in any defined script Unicode ranges.");
    }

    return info.join('\n');
}


// --- DOMContentLoaded: Setup event listeners and dynamic content ---
document.addEventListener('DOMContentLoaded', () => {
    const scriptSelect = document.getElementById('script');
    const directionSelect = document.getElementById('direction');
    const inputText = document.getElementById('input-text');
    const outputText = document.getElementById('output-text');
    const processButton = document.getElementById('process-button');
    const swapButton = document.getElementById('swap-button');
    const randomLangButton = document.getElementById('random-lang-button');
    const currentRandomLangDiv = document.getElementById('current-random-lang');
    const darkModeButton = document.getElementById('dark-mode-button');
    const htmlRoot = document.getElementById('html-root');
    const errorMessageArea = document.getElementById('error-message-area');

    // Populate script dropdown
    if (window.ALL_SCRIPT_DATA && Object.keys(window.ALL_SCRIPT_DATA).length > 0) {
        const sortedScriptIds = Object.keys(window.ALL_SCRIPT_DATA).sort((a,b) => {
            const descA = window.ALL_SCRIPT_DATA[a].description || a;
            const descB = window.ALL_SCRIPT_DATA[b].description || b;
            return descA.localeCompare(descB);
        });

        sortedScriptIds.forEach(scriptId => {
            const option = document.createElement('option');
            option.value = scriptId;
            const desc = window.ALL_SCRIPT_DATA[scriptId].description || scriptId;
            option.textContent = `${desc} (${scriptId})`;
            scriptSelect.appendChild(option);
        });
        if (scriptSelect.options.length > 0) {
           scriptSelect.selectedIndex = 0; // Select the first one by default
           currentRandomLangDiv.textContent = scriptSelect.options[0].text.split('(')[0].trim();
        } else {
            currentRandomLangDiv.textContent = "No scripts loaded";
        }
    } else {
        currentRandomLangDiv.textContent = "Error: Script data not loaded!";
        console.error("ALL_SCRIPT_DATA is not populated. Check map files and loader script.");
    }


    // Function to perform transliteration
    function performTransliteration() {
        errorMessageArea.style.display = 'none';
        errorMessageArea.textContent = '';

        const selectedScript = scriptSelect.value;
        const selectedDirection = directionSelect.value;
        const textToProcess = inputText.value;
        let result = "";
        let errorOccurred = false;

        if (!selectedScript || !window.ALL_SCRIPT_DATA[selectedScript]) {
            result = "Please select a valid script.";
            errorOccurred = true;
        } else if (!textToProcess.trim() && selectedDirection !== 'info') {
            result = "Input text cannot be empty.";
            errorOccurred = true;
        }  else if (selectedDirection === 'info' && !textToProcess) { // specifically for info
            result = "Input text cannot be empty for character info.";
            errorOccurred = true;
        } else {
            try {
                if (selectedDirection === 'to_latin') {
                    result = transliterateToLatin(textToProcess, selectedScript);
                } else if (selectedDirection === 'from_latin') {
                    result = transliterateFromLatin(textToProcess, selectedScript);
                } else if (selectedDirection === 'info') {
                    result = getCharacterInfo(textToProcess);
                }
            } catch (e) {
                console.error("Transliteration error:", e);
                result = "An error occurred during processing: " + e.message;
                errorOccurred = true;
            }
        }
        
        if (errorOccurred) {
            errorMessageArea.textContent = result;
            errorMessageArea.style.display = 'block';
            outputText.value = '';
        } else {
            outputText.value = result;
        }
    }

    // Process Button Click
    if (processButton) {
        processButton.addEventListener('click', performTransliteration);
    }

    // Enter Key Listener for Input Textarea
    if (inputText) {
        inputText.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault(); 
                performTransliteration();
            }
        });
    }

    // Dark Mode Toggle
    function setDarkMode(isDark) {
        if (isDark) {
            htmlRoot.classList.add('dark-mode');
            darkModeButton.textContent = '☀️ Light Mode';
            localStorage.setItem('theme', 'dark');
        } else {
            htmlRoot.classList.remove('dark-mode');
            darkModeButton.textContent = '🌙 Dark Mode';
            localStorage.setItem('theme', 'light');
        }
    }
    if (darkModeButton) {
        darkModeButton.addEventListener('click', () => {
            setDarkMode(!htmlRoot.classList.contains('dark-mode'));
        });
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setDarkMode(savedTheme === 'dark');
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true);
        } else {
            setDarkMode(false); // Default to light if no preference
        }
    }

    // Swap Button
    if (swapButton) {
        swapButton.addEventListener('click', () => {
            if (directionSelect.value === 'to_latin') {
                directionSelect.value = 'from_latin';
            } else if (directionSelect.value === 'from_latin') {
                directionSelect.value = 'to_latin';
            }
            // Optionally swap text if output is not empty and action is not 'info'
            if (outputText.value.trim() !== '' && directionSelect.value !== 'info') {
                const tempText = inputText.value;
                inputText.value = outputText.value;
                // outputText.value = tempText; // Or clear, or leave as is
            }
        });
    }

    // Random Language Button
    if (randomLangButton) {
        randomLangButton.addEventListener('click', () => {
            const availableScriptOptions = Array.from(scriptSelect.options);
            if (availableScriptOptions.length > 0) {
                const randomIndex = Math.floor(Math.random() * availableScriptOptions.length);
                const randomScriptValue = availableScriptOptions[randomIndex].value;
                scriptSelect.value = randomScriptValue;
                
                // Update displayed random language name
                const scriptData = window.ALL_SCRIPT_DATA[randomScriptValue];
                if (scriptData && scriptData.description) {
                    currentRandomLangDiv.textContent = scriptData.description.split('(')[0].trim();
                } else {
                    currentRandomLangDiv.textContent = randomScriptValue;
                }

                inputText.value = '';
                outputText.value = '';
                errorMessageArea.style.display = 'none';
            }
        });
    }
});