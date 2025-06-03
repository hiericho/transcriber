// js/maps/all_maps_loader.js

// This script should be loaded AFTER all individual map_*.js files.
// It finalizes the maps, e.g., by creating from_latin_map by reversing to_latin_map.

(function() {
    if (window.ALL_SCRIPT_DATA) {
        for (const scriptId in window.ALL_SCRIPT_DATA) {
            if (window.ALL_SCRIPT_DATA.hasOwnProperty(scriptId)) {
                const scriptData = window.ALL_SCRIPT_DATA[scriptId];
                
                // Auto-generate from_latin_map if it's empty and to_latin_map exists
                // and it's not a special case like morse or binary that handles it differently.
                if (scriptData.to_latin_map && 
                    (!scriptData.from_latin_map || Object.keys(scriptData.from_latin_map).length === 0) &&
                    scriptId !== "morse" && scriptId !== "binary") { // Morse/Binary handle their maps specially
                    
                    scriptData.from_latin_map = {};
                    for (const key in scriptData.to_latin_map) {
                        if (scriptData.to_latin_map.hasOwnProperty(key)) {
                            const value = scriptData.to_latin_map[key];
                            // Handle cases where multiple script chars might map to the same Latin
                            // For simplicity, the first one encountered wins for the reverse map.
                            // A more robust solution for ambiguous reverses is complex.
                            if (!scriptData.from_latin_map[value]) {
                                scriptData.from_latin_map[value] = key;
                            }
                        }
                    }
                }
            }
        }
        console.log("All script maps processed and from_latin maps generated where needed.");
    } else {
        console.error("ALL_SCRIPT_DATA not found. Make sure map files are loaded first.");
    }
})();