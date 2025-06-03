# Static Script Transliteration Tool

A lightweight, browser-based tool for transliterating various ancient, historical, and coded scripts to/from Latin characters. This version runs entirely client-side using HTML, CSS, and JavaScript, making it easy to host on static platforms like GitHub Pages.

It features a minimalist, aesthetically pleasing design with khaki-based color schemes and a dynamic dark mode.

## Features

*   **Client-Side Transliteration:** No server-side processing required.
*   **Multiple Script Support:**
    *   Binary Code (8-bit)
    *   Cypro-Minoan (Conventional Labels)
    *   Cypriot Syllabary
    *   Cyrillic (Russian & common Slavic)
    *   Ethiopic (Ge'ez Fidel)
    *   Hiragana (Japanese)
    *   Katakana (Japanese)
    *   Mende Kikakui
    *   Morse Code
    *   Nushu
    *   Ogham
    *   Runic (Comprehensive: Elder Futhark, Anglo-Saxon, Younger Futhark)
    *   Vai
    *   Yi Syllables
*   **User Interface:**
    *   Script and action selection dropdowns.
    *   Input/output text areas.
    *   "Swap Directions" button.
    *   "Discover a Script" randomizer.
    *   Dark/Light mode toggle (preference saved in `localStorage`).
*   **Character Information:** Basic Unicode info for input characters.
*   **Minimalist Design:** Clean, responsive interface with a khaki-based color palette.


## How to Use / Run Locally

1.  **Download or Clone:** Get all the project files.
2.  **No Installation Needed:** Since this is a static site, there are no Python or other backend dependencies to install.
3.  **Open `index.html`:**
    *   Navigate to the project's root directory in your file explorer.
    *   Double-click `index.html` to open it in your web browser.
    *   Alternatively, for more reliable testing (to avoid `file:///` restrictions), serve the directory using a simple local HTTP server:
        *   Open a terminal in the project's root directory.
        *   Run `python -m http.server` (for Python 3).
        *   Open `http://localhost:8000` in your browser.

## How it Works

*   The `index.html` file provides the structure and user interface.
*   `css/style.css` handles the visual presentation and themes.
*   The `js/maps/` directory contains JavaScript files, each defining the transliteration rules (`to_latin_map`) for a specific script as a JavaScript object.
*   `js/maps/all_maps_loader.js` processes these maps, automatically generating reverse mappings (`from_latin_map`) where appropriate.
*   `js/script.js` contains the core client-side logic:
    *   Populating the script selection dropdown.
    *   Handling user input and button clicks.
    *   Performing transliterations by looking up characters/sequences in the loaded JavaScript map objects.
    *   Displaying results and character information.
    *   Managing the dark/light theme.

## Adding New Scripts

1.  **Create JS Map:** Create a new `your_script_name_map.js` file in the `js/maps/` directory. Define a global `window.ALL_SCRIPT_DATA["your_script_name"]` object containing `description`, `unicode_range` (optional), and `to_latin_map`.
    ```javascript
    // Example: js/maps/your_script_name_map.js
    window.ALL_SCRIPT_DATA = window.ALL_SCRIPT_DATA || {};
    window.ALL_SCRIPT_DATA["your_script_name"] = {
        description: "Your Script Description",
        unicode_range: ['XXXX', 'YYYY'], // Optional
        to_latin_map: {
            '\uXXXX': 'abc',
            // ... more mappings
        }
    };
    ```
2.  **Include Script:** Add a `<script src="js/maps/your_script_name_map.js"></script>` tag in `index.html` *before* `all_maps_loader.js`.
3.  **Font Support:** Users will need appropriate fonts to view the new script. Consider adding font suggestions to the CSS or this README.
4.  **Test:** The `all_maps_loader.js` and `script.js` should automatically incorporate the new script.

## Font Dependencies

For the accurate display of many non-Latin scripts, users must have corresponding Unicode fonts installed on their system. The **Google Noto Fonts** family is highly recommended for broad script coverage.

## Limitations

*   **Client-Side Performance:** Very large transliteration maps (e.g., for Yi, Nushu) are loaded into the browser, which might impact initial load time and memory usage on some devices.
*   **Contextual Transliteration:** Complex linguistic rules (e.g., Japanese particle changes, contextual Cyrillic vowel sounds) are not implemented in this simple mapping-based approach.
*   **Unicode Character Info:** The "Character Info" feature provides basic codepoint information. Full Unicode data (like official name, category) is not available client-side without very large datasets or external APIs.
# transcriber
