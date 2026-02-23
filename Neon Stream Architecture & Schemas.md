Neon Stream: Typing Hacker
Conceptual File Tree
Even though the final deliverable will be compiled into a single index.html file, the internal structure and logical separation of concerns will follow this exact modular architecture:
/Neon-Stream-Typing-Hacker
├── index.html           # The main entry point, Canvas container, and UI overlays
├── style.css            # CSS3 for UI (Menu, Settings, Neon glows, Custom Fonts)
└── scripts/
    ├── Data/
    │   ├── dictionaries.js  # Language word banks and 20-level progression paths
    │   └── layouts.js       # Visual keyboard maps (ANSI-US vs ISO-ES)
    ├── Engine/
    │   ├── Game.js          # Core loop, state machine (Menu, Playing, GameOver)
    │   ├── Renderer.js      # Canvas operations, Matrix trails, Neon particles
    │   ├── Spawner.js       # Stream generation, difficulty scaling, velocity math
    │   └── InputHandler.js  # Keystroke interception, target matching
    └── System/
        └── UserManager.js   # localStorage logic (Profiles, High Scores, Settings)

Data Schemas
1. User Profile Schema (localStorage)
This defines how we save a user's progress and settings between sessions.
{
  "alias": "ZeroCool_99",
  "preferences": {
    "language": "es",        // "en" (English) or "es" (Spanish)
    "layout": "iso-es",      // "ansi-us" or "iso-es"
    "themeColor": "cyan",    // Allows slight personalization later
    "soundEnabled": true
  },
  "progress": {
    "highestLevelUnlocked": 2,
    "totalDataProcessed": 1450,
    "highScores": {
      "level_1": 5000,
      "level_2": 3200
    }
  }
}

2. Dictionaries Schema (dictionaries.js)
The progression is spread evenly across 20 levels.
●	Levels 1-8: Character muscle memory.
●	Levels 9-14: Short to medium words.
●	Levels 15-17: Numbers & Accents.
●	Levels 18-20: Cyberpunk Boss Levels (High Speed).
Note: The fallSpeed dips slightly at Level 9 when transitioning from single characters to full words to allow the user to adapt.
const Dictionaries = {
  en: {
    // --- PHASE 1: CHARACTERS ---
    level_1:  { id: "lvl_1",  name: "Home Core", type: "characters", pool: ["f", "j", "d", "k"], targetScore: 1000, fallSpeed: 1.0, spawnRate: 2000 },
    level_2:  { id: "lvl_2",  name: "Home Extend", type: "characters", pool: ["g", "h"], targetScore: 1200, fallSpeed: 1.1, spawnRate: 1900 },
    level_3:  { id: "lvl_3",  name: "Home Full", type: "characters", pool: ["a", "s", "l", ";"], targetScore: 1400, fallSpeed: 1.2, spawnRate: 1800 },
    level_4:  { id: "lvl_4",  name: "Top Core", type: "characters", pool: ["r", "u", "e", "i"], targetScore: 1500, fallSpeed: 1.3, spawnRate: 1750 },
    level_5:  { id: "lvl_5",  name: "Top Full", type: "characters", pool: ["q", "w", "t", "y", "o", "p"], targetScore: 1600, fallSpeed: 1.4, spawnRate: 1700 },
    level_6:  { id: "lvl_6",  name: "Bottom Core", type: "characters", pool: ["v", "m", "c", "n"], targetScore: 1700, fallSpeed: 1.5, spawnRate: 1650 },
    level_7:  { id: "lvl_7",  name: "Bottom Full", type: "characters", pool: ["z", "x", "b", ",", "."], targetScore: 1800, fallSpeed: 1.6, spawnRate: 1600 },
    level_8:  { id: "lvl_8",  name: "Alpha Mix", type: "characters", pool: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], targetScore: 2000, fallSpeed: 1.7, spawnRate: 1500 },
    
    // --- PHASE 2: WORDS ---
    level_9:  { id: "lvl_9",  name: "Syntax I: Micro", type: "words", pool: ["it", "is", "to", "do", "if", "or"], targetScore: 2200, fallSpeed: 1.4, spawnRate: 1800 },
    level_10: { id: "lvl_10", name: "Syntax II: Min", type: "words", pool: ["the", "bug", "net", "ram", "log", "run"], targetScore: 2400, fallSpeed: 1.5, spawnRate: 1700 },
    level_11: { id: "lvl_11", name: "Syntax III: Core", type: "words", pool: ["code", "hack", "data", "byte", "file", "node"], targetScore: 2600, fallSpeed: 1.6, spawnRate: 1600 },
    level_12: { id: "lvl_12", name: "Syntax IV: Macro", type: "words", pool: ["virus", "logic", "macro", "pixel", "cache", "cloud"], targetScore: 2800, fallSpeed: 1.7, spawnRate: 1500 },
    level_13: { id: "lvl_13", name: "Syntax V: Network", type: "words", pool: ["hacker", "server", "python", "crypto", "system", "router"], targetScore: 3000, fallSpeed: 1.8, spawnRate: 1400 },
    level_14: { id: "lvl_14", name: "Jargon", type: "words", pool: ["network", "boolean", "firewall", "malware", "terminal"], targetScore: 3500, fallSpeed: 1.9, spawnRate: 1300 },
    
    // --- PHASE 3: NUMBERS & COMPLEX ---
    level_15: { id: "lvl_15", name: "Numerics", type: "characters", pool: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], targetScore: 3500, fallSpeed: 2.0, spawnRate: 1200 },
    level_16: { id: "lvl_16", name: "Alphanumeric", type: "words", pool: ["net1", "bug2", "hack99", "sys32", "web3", "p2p"], targetScore: 4000, fallSpeed: 2.1, spawnRate: 1100 },
    level_17: { id: "lvl_17", name: "Cyberpunk", type: "words", pool: ["matrix", "cyberspace", "mainframe", "overclock", "neural"], targetScore: 4500, fallSpeed: 2.2, spawnRate: 1000 },
    
    // --- PHASE 4: MASTERY ---
    level_18: { id: "lvl_18", name: "Hardcore", type: "words", pool: ["cryptography", "algorithm", "motherboard", "bandwidth", "processor"], targetScore: 5000, fallSpeed: 2.4, spawnRate: 900 },
    level_19: { id: "lvl_19", name: "Code Snippets", type: "words", pool: ["function", "return", "const", "await", "import", "export"], targetScore: 5500, fallSpeed: 2.7, spawnRate: 750 },
    level_20: { id: "lvl_20", name: "System Overload", type: "words", pool: ["vulnerability", "authentication", "infrastructure", "encapsulation", "asynchronous"], targetScore: 6000, fallSpeed: 3.0, spawnRate: 600 }
  },
  es: {
    // --- PHASE 1: CHARACTERS ---
    level_1:  { id: "lvl_1",  name: "Centro Principal", type: "characters", pool: ["f", "j", "d", "k"], targetScore: 1000, fallSpeed: 1.0, spawnRate: 2000 },
    level_2:  { id: "lvl_2",  name: "Centro Extendido", type: "characters", pool: ["g", "h"], targetScore: 1200, fallSpeed: 1.1, spawnRate: 1900 },
    level_3:  { id: "lvl_3",  name: "Fila Central", type: "characters", pool: ["a", "s", "l", "ñ"], targetScore: 1400, fallSpeed: 1.2, spawnRate: 1800 },
    level_4:  { id: "lvl_4",  name: "Arriba Principal", type: "characters", pool: ["r", "u", "e", "i"], targetScore: 1500, fallSpeed: 1.3, spawnRate: 1750 },
    level_5:  { id: "lvl_5",  name: "Fila Superior", type: "characters", pool: ["q", "w", "t", "y", "o", "p"], targetScore: 1600, fallSpeed: 1.4, spawnRate: 1700 },
    level_6:  { id: "lvl_6",  name: "Abajo Principal", type: "characters", pool: ["v", "m", "c", "n"], targetScore: 1700, fallSpeed: 1.5, spawnRate: 1650 },
    level_7:  { id: "lvl_7",  name: "Fila Inferior", type: "characters", pool: ["z", "x", "b", ",", "."], targetScore: 1800, fallSpeed: 1.6, spawnRate: 1600 },
    level_8:  { id: "lvl_8",  name: "Mezcla Total", type: "characters", pool: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"], targetScore: 2000, fallSpeed: 1.7, spawnRate: 1500 },
    
    // --- PHASE 2: WORDS ---
    level_9:  { id: "lvl_9",  name: "Sintaxis I: Micro", type: "words", pool: ["en", "el", "un", "su", "si", "ya"], targetScore: 2200, fallSpeed: 1.4, spawnRate: 1800 },
    level_10: { id: "lvl_10", name: "Sintaxis II: Min", type: "words", pool: ["red", "bit", "web", "api", "log", "ram"], targetScore: 2400, fallSpeed: 1.5, spawnRate: 1700 },
    level_11: { id: "lvl_11", name: "Sintaxis III: Base", type: "words", pool: ["dato", "chip", "byte", "hack", "nube", "wifi"], targetScore: 2600, fallSpeed: 1.6, spawnRate: 1600 },
    level_12: { id: "lvl_12", name: "Sintaxis IV: Macro", type: "words", pool: ["virus", "clave", "pixel", "bucle", "robot", "placa"], targetScore: 2800, fallSpeed: 1.7, spawnRate: 1500 },
    level_13: { id: "lvl_13", name: "Sintaxis V: Redes", type: "words", pool: ["hacker", "enlace", "fuente", "servidor", "sistema", "memoria"], targetScore: 3000, fallSpeed: 1.8, spawnRate: 1400 },
    level_14: { id: "lvl_14", name: "Jerga Tech", type: "words", pool: ["cortafuegos", "terminal", "programa", "interfaz", "teclado"], targetScore: 3500, fallSpeed: 1.9, spawnRate: 1300 },
    
    // --- PHASE 3: NUMBERS & COMPLEX ---
    level_15: { id: "lvl_15", name: "Numéricos", type: "characters", pool: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], targetScore: 3500, fallSpeed: 2.0, spawnRate: 1200 },
    level_16: { id: "lvl_16", name: "Acentos", type: "words", pool: ["código", "ratón", "conexión", "módem", "píxel", "lógica"], targetScore: 4000, fallSpeed: 2.1, spawnRate: 1100 },
    level_17: { id: "lvl_17", name: "Cyberpunk", type: "words", pool: ["matriz", "ciberespacio", "terminal", "sintético", "holograma"], targetScore: 4500, fallSpeed: 2.2, spawnRate: 1000 },
    
    // --- PHASE 4: MASTERY ---
    level_18: { id: "lvl_18", name: "Núcleo Duro", type: "words", pool: ["criptografía", "algoritmo", "procesador", "ancho de banda", "encriptado"], targetScore: 5000, fallSpeed: 2.4, spawnRate: 900 },
    level_19: { id: "lvl_19", name: "Código", type: "words", pool: ["funcion", "retornar", "variable", "constante", "importar", "exportar"], targetScore: 5500, fallSpeed: 2.7, spawnRate: 750 },
    level_20: { id: "lvl_20", name: "Sobrecarga Total", type: "words", pool: ["vulnerabilidad", "autenticación", "infraestructura", "encapsulación", "asíncrono"], targetScore: 6000, fallSpeed: 3.0, spawnRate: 600 }
  }
};

3. Visual Layouts Schema (layouts.js)
This drives the "Teacher Module" overlay. It maps physical key locations to their characters and assigns the correct finger for color-coding.
Finger Codes: 0=LeftPinky, 1=LeftRing, 2=LeftMiddle, 3=LeftIndex, 4=Thumbs(Space), 5=RightIndex, 6=RightMiddle, 7=RightRing, 8=RightPinky.
const Layouts = {
  "ansi-us": [
    // ROW 1 (Top letter row)
    [
      { char: "q", finger: 0 }, { char: "w", finger: 1 }, { char: "e", finger: 2 }, 
      { char: "r", finger: 3 }, { char: "t", finger: 3 }, { char: "y", finger: 5 }, 
      { char: "u", finger: 5 }, { char: "i", finger: 6 }, { char: "o", finger: 7 }, 
      { char: "p", finger: 8 }
    ],
    // ROW 2 (Home row)
    [
      { char: "a", finger: 0 }, { char: "s", finger: 1 }, { char: "d", finger: 2 }, 
      { char: "f", finger: 3 }, { char: "g", finger: 3 }, { char: "h", finger: 5 }, 
      { char: "j", finger: 5 }, { char: "k", finger: 6 }, { char: "l", finger: 7 }, 
      { char: ";", finger: 8 }
    ],
    // ROW 3 (Bottom letter row)
    [
      { char: "z", finger: 0 }, { char: "x", finger: 1 }, { char: "c", finger: 2 }, 
      { char: "v", finger: 3 }, { char: "b", finger: 3 }, { char: "n", finger: 5 }, 
      { char: "m", finger: 5 }, { char: ",", finger: 6 }, { char: ".", finger: 7 }, 
      { char: "/", finger: 8 }
    ]
  ],
  
  "iso-es": [
    // ROW 1
    [
      { char: "q", finger: 0 }, { char: "w", finger: 1 }, { char: "e", finger: 2 }, 
      { char: "r", finger: 3 }, { char: "t", finger: 3 }, { char: "y", finger: 5 }, 
      { char: "u", finger: 5 }, { char: "i", finger: 6 }, { char: "o", finger: 7 }, 
      { char: "p", finger: 8 }, { char: "´", finger: 8, isDeadKey: true } // Accent dead key
    ],
    // ROW 2 (Includes Ñ)
    [
      { char: "a", finger: 0 }, { char: "s", finger: 1 }, { char: "d", finger: 2 }, 
      { char: "f", finger: 3 }, { char: "g", finger: 3 }, { char: "h", finger: 5 }, 
      { char: "j", finger: 5 }, { char: "k", finger: 6 }, { char: "l", finger: 7 }, 
      { char: "ñ", finger: 8 } // 'Ñ' takes the spot of ';' in US layout
    ],
    // ROW 3
    [
      { char: "z", finger: 0 }, { char: "x", finger: 1 }, { char: "c", finger: 2 }, 
      { char: "v", finger: 3 }, { char: "b", finger: 3 }, { char: "n", finger: 5 }, 
      { char: "m", finger: 5 }, { char: ",", finger: 6 }, { char: ".", finger: 7 }, 
      { char: "-", finger: 8 }
    ]
  ]
};
