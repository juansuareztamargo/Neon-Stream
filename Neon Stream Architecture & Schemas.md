# Neon Stream: Typing Hacker - Architecture & Schemas

## Conceptual File Tree

**Note:** The final deliverable is compiled into a single `index.html` file for portability and ease of use. However, the logical structure and separation of concerns still apply.

```text
/Neon-Stream-Typing-Hacker
├── index.html           # The main entry point, Canvas container, and UI overlays (Contains all Logic, CSS, and JS)
├── test_gemini.js       # Utility script to test Gemini API connection (Node.js)
├── list_models.js       # Utility script to list available Gemini models (Node.js)
└── scripts/ (Conceptual)
    ├── Data/
    │   ├── dictionaries.js  # Language word banks, 30-level progression paths, and Briefing text
    │   └── layouts.js       # Visual keyboard maps (ANSI-US vs ISO-ES)
    ├── Engine/
    │   ├── Game.js          # Core loop, state machine (Menu, Briefing, Playing, GameOver, Boss Fights)
    │   ├── Renderer.js      # Canvas operations, Matrix trails, Neon particles
    │   ├── Spawner.js       # Stream generation, difficulty scaling, velocity math
    │   ├── InputHandler.js  # Keystroke interception, target matching
    │   └── Briefing.js      # Typewriter effect and keyboard training logic
    ├── AI/
    │   ├── GeminiClient.js  # API Integration for Google Gemini (Flash 2.5)
    │   └── PromptBuilder.js # Templates for level generation prompts
    └── System/
        └── UserManager.js   # localStorage logic (Profiles, High Scores, Settings, API Key)
```

## Data Schemas

### 1) User Profile Schema (`localStorage`)

This defines how user progress and preferences are persisted between sessions.

```jsonc
{
  "alias": "ZeroCool_99",
  "preferences": {
    "language": "es",        // "en" (English) or "es" (Spanish)
    "layout": "iso-es",      // "ansi-us" or "iso-es"
    "themeColor": "cyan",    // Allows slight personalization later
    "soundEnabled": true,
    "gemini_api_key": "AIzaSy..." // Stored securely in localStorage (never sent to our servers)
  },
  "progress": {
    "highestLevelUnlocked": 5,
    "totalDataProcessed": 2450,
    "highScores": {
      "level_1": 5000,
      "level_2": 3200,
      "boss_level_10": 8500
    },
    "stars": {
      "level_1": 3,
      "level_2": 2,
      "boss_level_10": 1
    }
  }
}
```

### Input and Matching Rules (Engine Contract)

- **Strict Case Sensitivity:** Uppercase letters (e.g., 'A', 'Ñ') require the **SHIFT** key to be held down. Lowercase input for an uppercase target is considered a miss.
- **Dead Keys:** Spanish accent characters are matched exactly.
- **Matching:** Each `pool` item is one target token; tokens may contain spaces.
- **God Mode:** Activated with `CTRL+ALT+SHIFT+G` (Disables star scoring).
- **Briefing Phase:** Levels begin with a typewriter-style briefing that teaches finger positioning using the virtual keyboard.

### 2) Dictionaries Schema (`dictionaries.js`)

The progression is spread across **30 levels**, implementing a full touch-typing curriculum.

- **Phase 1 (Lvl 1-6):** Home Row (F, J, D, K, S, L, A, ;).
- **Phase 2 (Lvl 7-12):** Upper Row (R, U, E, I, W, O, Q, P, T, Y).
- **Phase 3 (Lvl 13-18):** Bottom Row (V, M, C, comma, X, dot, Z, slash, B, N).
- **Phase 4 (Lvl 19-24):** Shift Key (Capitalization) & Accents.
- **Phase 5 (Lvl 25-29):** Numbers & Symbols.
- **Level 30:** Final Boss (All keys).

**Structure:**
```js
const Dictionaries = {
  en: {
    level_1:  {
      id: "lvl_1",
      name: "Home Link: F & J",
      type: "characters",
      pool: ["f", "j", "ff", "jj", "jf"],
      briefing: "Wake up... Place your index fingers on F and J...",
      newKeys: ["f", "j", " "],
      targetScore: 1000,
      fallSpeed: 1.0,
      spawnRate: 2000
    },
    // ...
    level_5: {
      id: "lvl_5",
      name: "Mini-Boss: Gatekeeper",
      isBoss: true,
      // ...
    },
    // ...
    level_30: {
      id: "lvl_30",
      name: "BOSS: The Architect",
      type: "words",
      // ...
    }
  },
  es: {
    // Similar structure for Spanish
  }
};
```

### 3) Visual Layouts Schema (`layouts.js`)

This drives the "Teacher Module" overlay used during the Briefing phase and gameplay.

- **Unified System:** The same keyboard visualization is used for both the "Briefing" (teaching) and "Gameplay" (feedback).
- **Finger Codes:** 0=LeftPinky, 1=LeftRing, 2=LeftMiddle, 3=LeftIndex, 4=Thumbs(Space), 5=RightIndex, 6=RightMiddle, 7=RightRing, 8=RightPinky.
- **State:** Keys can be `active` (part of current level), `inactive` (dimmed), or `highlighted` (during briefing instruction).

```js
const Layouts = {
  "ansi-us": [
    // ROW 1 (Top letter row)
    [
      { char: "q", finger: 0 }, { char: "w", finger: 1 }, { char: "e", finger: 2 }, 
      // ...
    ],
    // ...
  ],
  "iso-es": [
    // ... (Includes Ñ and accent dead key handling)
  ]
};
```

### 4) AI Integration Schema (Gemini)

The game uses `gemini-2.5-flash` for generating custom levels.

**Endpoint:** `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={API_KEY}`

**Prompt Structure:**
```json
{
  "contents": [{
    "parts": [{
      "text": "Generate a list of 20 unique words related to {TOPIC}. Return ONLY a JSON array of strings. No markdown."
    }]
  }]
}
```

**Response Handling:**
- Parses JSON array from `candidates[0].content.parts[0].text`.
- Validates that words contain only allowed characters based on the current layout.
- Creates a temporary `custom_level` object to inject into the game loop.
