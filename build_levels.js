
const levels = {
    en: {},
    es: {}
};

const curriculum = [
    // --- PHASE 1: HOME ROW (5 Levels) ---
    {
        id: "lvl_1",
        name: { en: "Neural Link: Core", es: "Enlace Neuronal: Núcleo" },
        pool: ["f", "j", "ff", "jj", "fj", "jf"],
        type: "characters",
        briefing: {
            en: "Wake up, [ALIAS]. The system is vast, but we start at the center. Your index fingers are the key. Feel the bumps on the F and J keys. Anchor yourself. Establish the link.",
            es: "Despierta, [ALIAS]. El sistema es vasto, pero empezamos en el centro. Tus dedos índice son la clave. Siente las marcas en las teclas F y J. Anclate. Establece el enlace."
        },
        guideKeys: ["f", "j"]
    },
    {
        id: "lvl_2",
        name: { en: "Signal Expansion", es: "Expansión de Señal" },
        pool: ["d", "k", "df", "jk", "fd", "kj"],
        type: "characters",
        briefing: {
            en: "Good. The signal is stabilizing. Expand your influence. Use your middle fingers to reach the D and K nodes while keeping your index fingers on F and J.",
            es: "Bien. La señal se estabiliza. Expande tu influencia. Usa tus dedos corazón para alcanzar los nodos D y K mientras mantienes los índices en F y J."
        },
        guideKeys: ["d", "k", "f", "j"]
    },
    {
        id: "lvl_3",
        name: { en: "Rhythm Protocol", es: "Protocolo de Ritmo" },
        pool: ["s", "l", "sl", "ls", "sdf", "jkl"],
        type: "characters",
        briefing: {
            en: "Rhythm is everything in the stream. Extend to S and L with your ring fingers. Do not look down. Trust the connection.",
            es: "El ritmo lo es todo en el flujo. Extiende a S y L con tus dedos anulares. No mires abajo. Confía en la conexión."
        },
        guideKeys: ["s", "l", "d", "k", "f", "j"]
    },
    {
        id: "lvl_4",
        name: { en: "Perimeter Check", es: "Chequeo Perimetral" },
        pool: ["a", ";", "as", "l;", "asdf", "jkl;"], // standard layout
        poolEs: ["a", "ñ", "as", "lñ", "asdf", "jklñ"], // ES layout uses Ñ
        type: "characters",
        briefing: {
            en: "Secure the perimeter. Your pinky fingers control the outer boundaries, A and ;. The home row is now fully active.",
            es: "Asegura el perímetro. Tus meñiques controlan los límites exteriores, A y Ñ. La fila base está ahora totalmente activa."
        },
        guideKeys: ["a", ";", "s", "l", "d", "k", "f", "j"],
        guideKeysEs: ["a", "ñ", "s", "l", "d", "k", "f", "j"]
    },
    {
        id: "lvl_5",
        name: { en: "Central Bridge", es: "Puente Central" },
        pool: ["g", "h", "fg", "jh", "gh", "hg"],
        type: "characters",
        briefing: {
            en: "Bridge the gap. Your index fingers must stretch inward to G and H, then return immediately to their home bases F and J.",
            es: "Cruza la brecha. Tus índices deben estirarse hacia adentro a G y H, y volver inmediatamente a sus bases F y J."
        },
        guideKeys: ["g", "h", "f", "j"]
    },

    // --- PHASE 2: TOP ROW (5 Levels) ---
    {
        id: "lvl_6",
        name: { en: "Uplink: E & I", es: "Subida: E e I" },
        pool: ["e", "i", "ed", "ik", "de", "ki"],
        type: "characters",
        briefing: {
            en: "Accessing upper memory banks. Move your middle finger up from D to E, and K to I. This is the most common pathway.",
            es: "Accediendo a bancos de memoria superiores. Mueve tu dedo corazón de D a E, y de K a I. Es la ruta más común."
        },
        guideKeys: ["e", "i", "d", "k"]
    },
    {
        id: "lvl_7",
        name: { en: "Uplink: R & U", es: "Subida: R y U" },
        pool: ["r", "u", "rf", "uj", "fr", "ju"],
        type: "characters",
        briefing: {
            en: "Push higher. Index fingers move up to R and U. Keep your anchors strong.",
            es: "Empuja más alto. Los índices suben a R y U. Mantén tus anclajes firmes."
        },
        guideKeys: ["r", "u", "f", "j"]
    },
    {
        id: "lvl_8",
        name: { en: "Uplink: T & O", es: "Subida: T y O" },
        pool: ["t", "o", "tf", "ol", "ft", "lo"],
        type: "characters",
        briefing: {
            en: "Stretching network capacity. Left index to T. Right ring finger to O. The pattern is complex, but predictable.",
            es: "Estirando capacidad de red. Índice izquierdo a T. Anular derecho a O. El patrón es complejo, pero predecible."
        },
        guideKeys: ["t", "o", "f", "l"]
    },
    {
        id: "lvl_9",
        name: { en: "Uplink: W & P", es: "Subida: W y P" },
        pool: ["w", "p", "ws", "p;", "sw", ";p"],
        poolEs: ["w", "p", "ws", "pñ", "sw", "ñp"],
        type: "characters",
        briefing: {
            en: "Reaching outer sectors. Left ring to W. Right pinky to P. Precision is mandatory.",
            es: "Alcanzando sectores externos. Anular izquierdo a W. Meñique derecho a P. La precisión es obligatoria."
        },
        guideKeys: ["w", "p", "s", ";"],
        guideKeysEs: ["w", "p", "s", "ñ"]
    },
    {
        id: "lvl_10",
        name: { en: "Uplink: Q & Y", es: "Subida: Q y Y" },
        pool: ["q", "y", "qa", "yj", "aq", "jy"],
        type: "characters",
        briefing: {
            en: "Completing the upper grid. Left pinky to Q. Right index stretches far to Y.",
            es: "Completando la rejilla superior. Meñique izquierdo a Q. Índice derecho se estira lejos hasta la Y."
        },
        guideKeys: ["q", "y", "a", "j"]
    },

    // --- PHASE 3: BOTTOM ROW (5 Levels) ---
    {
        id: "lvl_11",
        name: { en: "Downlink: V & M", es: "Bajada: V y M" },
        pool: ["v", "m", "vf", "mj", "fv", "jm"],
        type: "characters",
        briefing: {
            en: "Initiating downlink. Index fingers curl down to V and M. Do not lose your home position.",
            es: "Iniciando bajada. Índices se curvan abajo hacia V y M. No pierdas tu posición base."
        },
        guideKeys: ["v", "m", "f", "j"]
    },
    {
        id: "lvl_12",
        name: { en: "Downlink: C & Comma", es: "Bajada: C y Coma" },
        pool: ["c", ",", "cd", ",k", "dc", "k,"],
        type: "characters",
        briefing: {
            en: "Encoding syntax. Reach DOWN with LEFT INDEX to C and RIGHT MIDDLE to Comma (,). Essential for data parsing.",
            es: "Codificando sintaxis. Baja tu ÍNDICE IZQUIERDO a C y tu MEDIO DERECHO a Coma (,). Esencial para analizar datos."
        },
        guideKeys: ["c", ",", "d", "k"]
    },
    {
        id: "lvl_13",
        name: { en: "Downlink: X & Dot", es: "Bajada: X y Punto" },
        pool: ["x", ".", "xs", ".l", "sx", "l."],
        type: "characters",
        briefing: {
            en: "Closing the loop. Reach DOWN with LEFT MIDDLE to X and RIGHT RING to Dot (.). The grid is almost fully mapped.",
            es: "Cerrando el bucle. Baja tu MEDIO IZQUIERDO a X y tu ANULAR DERECHO a Punto (.). La rejilla está casi mapeada."
        },
        guideKeys: ["x", ".", "s", "l"]
    },
    {
        id: "lvl_14",
        name: { en: "Downlink: Z & Slash", es: "Bajada: Z y Guion" },
        pool: ["z", "/", "za", "/;", "az", ";/"],
        poolEs: ["z", "-", "za", "-ñ", "az", "ñ-"], // ES layout uses - typically there
        type: "characters",
        briefing: {
            en: "Finalizing grid access. Pinky fingers down to Z and Slash (/). You now command the full alphabet.",
            es: "Finalizando acceso a rejilla. Meñiques abajo a Z y Guion (-). Ahora dominas el alfabeto completo."
        },
        guideKeys: ["z", "/", "a", ";"],
        guideKeysEs: ["z", "-", "a", "ñ"]
    },
    {
        id: "lvl_15",
        name: { en: "Downlink: B & N", es: "Bajada: B y N" },
        pool: ["b", "n", "bf", "nj", "fb", "jn"],
        type: "characters",
        briefing: {
            en: "The trickiest reach. Index fingers stretch down and center to B and N. Master this to seal the connection.",
            es: "El alcance más difícil. Índices se estiran abajo y al centro a B y N. Domina esto para sellar la conexión."
        },
        guideKeys: ["b", "n", "f", "j"]
    },

    // --- PHASE 4: SHIFT & SYMBOLS (5 Levels) ---
    {
        id: "lvl_16",
        name: { en: "Shift Logic", es: "Lógica Shift" },
        pool: ["A", "S", "D", "F", "J", "K", "L", ":"], // Capitalized
        poolEs: ["A", "S", "D", "F", "J", "K", "L", "Ñ"],
        type: "characters",
        briefing: {
            en: "Elevating privileges. Use the PINKY on the OPPOSITE hand to hold Shift while typing a letter. Right Shift for A-G, Left Shift for H-Z.",
            es: "Elevando privilegios. Usa el MEÑIQUE de la mano OPUESTA para mantener Shift mientras tecleas. Shift Derecho para A-G, Izquierdo para H-Z."
        },
        guideKeys: ["Shift", "a", "s", "d", "f", "j", "k", "l"]
    },
    {
        id: "lvl_17",
        name: { en: "Code Syntax I", es: "Sintaxis Código I" },
        pool: ["{", "}", "[", "]", "(", ")"],
        type: "characters",
        briefing: {
            en: "Injecting code blocks. Brackets and parentheses are the skeleton of the Matrix. Use your right pinky to reach them.",
            es: "Inyectando bloques de código. Corchetes y paréntesis son el esqueleto de Matrix. Usa tu meñique derecho para alcanzarlos."
        },
        guideKeys: ["{", "}", "[", "]", "(", ")"]
    },
    {
        id: "lvl_18",
        name: { en: "Numbers Row I", es: "Fila Numérica I" },
        pool: ["1", "2", "3", "4", "5"],
        type: "characters",
        briefing: {
            en: "Parsing numerical data. Left hand reaches up. 1(Pinky) to 5(Index). Maintain home row discipline.",
            es: "Analizando datos numéricos. Mano izquierda sube. 1(Meñique) a 5(Índice). Mantén disciplina de fila base."
        },
        guideKeys: ["1", "2", "3", "4", "5"]
    },
    {
        id: "lvl_19",
        name: { en: "Numbers Row II", es: "Fila Numérica II" },
        pool: ["6", "7", "8", "9", "0"],
        type: "characters",
        briefing: {
            en: "Completing numerical sequence. Right hand reaches up. 6(Index) to 0(Pinky). Do not look down.",
            es: "Completando secuencia numérica. Mano derecha sube. 6(Índice) a 0(Meñique). No mires abajo."
        },
        guideKeys: ["6", "7", "8", "9", "0"]
    },
    {
        id: "lvl_20",
        name: { en: "Symbolic Logic", es: "Lógica Simbólica" },
        pool: ["!", "@", "#", "$", "%", "^", "&", "*"],
        type: "characters",
        briefing: {
            en: "Advanced encryption active. Combine Shift with Numbers to access special operators. This is how we rewrite reality.",
            es: "Encriptación avanzada activa. Combina Shift con Números para acceder a operadores especiales. Así reescribimos la realidad."
        },
        guideKeys: ["1", "2", "3", "4", "5", "6", "7", "8", "Shift"]
    },

    // --- PHASE 5: MASTERY & WORDS (10 Levels) ---
    {
        id: "lvl_21",
        name: { en: "The Bigrams", es: "Los Bigramas" },
        pool: ["th", "he", "in", "er", "an", "re", "on", "at", "en"],
        type: "words",
        briefing: {
            en: "Optimization phase. These two-letter combinations appear in 60% of all data streams. Master them to flow like water.",
            es: "Fase de optimización. Estas combinaciones de dos letras aparecen en el 60% de los flujos de datos. Domínalas para fluir como agua."
        },
        guideKeys: []
    },
    {
        id: "lvl_22",
        name: { en: "The Trigrams", es: "Los Trigramas" },
        pool: ["the", "and", "ing", "ent", "ion", "her", "for", "tha"],
        type: "words",
        briefing: {
            en: "Pattern recognition. Trigrams are the DNA of language. Execute them as single, fluid motions.",
            es: "Reconocimiento de patrones. Los trigramas son el ADN del lenguaje. Ejecútalos como movimientos únicos y fluidos."
        },
        guideKeys: []
    },
    {
        id: "lvl_23",
        name: { en: "Command Line", es: "Línea de Comandos" },
        pool: ["ls -la", "cd root", "git push", "npm run", "sudo su", "grep -r"],
        type: "words",
        briefing: {
            en: "Direct interface access. Execute standard shell commands. Speed is critical.",
            es: "Acceso directo a interfaz. Ejecuta comandos shell estándar. La velocidad es crítica."
        },
        guideKeys: []
    },
    {
        id: "lvl_24",
        name: { en: "Short Bursts", es: "Ráfagas Cortas" },
        pool: ["data", "node", "link", "core", "hack", "byte", "ping", "host"],
        type: "words",
        briefing: {
            en: "Short bursts of data. High frequency. Do not hesitate.",
            es: "Ráfagas cortas de datos. Alta frecuencia. No dudes."
        },
        guideKeys: []
    },
    {
        id: "lvl_25",
        name: { en: "Syntax Errors", es: "Errores de Sintaxis" },
        pool: ["null;", "void()", "return", "const x", "let y=", "if(a)", "else{}"],
        type: "words",
        briefing: {
            en: "Debugging protocol. Identify and type programming structures. Accuracy over speed.",
            es: "Protocolo de depuración. Identifica y teclea estructuras de programación. Precisión sobre velocidad."
        },
        guideKeys: []
    },
    {
        id: "lvl_26",
        name: { en: "Variable Stream", es: "Flujo Variable" },
        pool: ["function", "variable", "constant", "array", "object", "string", "number"],
        type: "words",
        briefing: {
            en: "Data complexity increasing. Longer variable names detected. Maintain rhythm.",
            es: "Complejidad de datos en aumento. Nombres de variables largos detectados. Mantén el ritmo."
        },
        guideKeys: []
    },
    {
        id: "lvl_27",
        name: { en: "Encryption Keys", es: "Claves de Cifrado" },
        pool: ["Xj7-kL", "9A_z#2", "P@ssW0", "Key_Gen", "Auth-2", "Token$"],
        type: "words",
        briefing: {
            en: "Cracking encryption. Mixed case, numbers, and symbols. This is a stress test.",
            es: "Rompiendo cifrado. Mayúsculas, números y símbolos mezclados. Esto es una prueba de estrés."
        },
        guideKeys: []
    },
    {
        id: "lvl_28",
        name: { en: "Neural Payload", es: "Carga Neuronal" },
        pool: ["consciousness", "intelligence", "architecture", "distributed", "synchronize"],
        type: "words",
        briefing: {
            en: "Heavy data load. Complex terminology. Stay focused.",
            es: "Carga de datos pesada. Terminología compleja. Mantente enfocado."
        },
        guideKeys: []
    },
    {
        id: "lvl_29",
        name: { en: "The Firewall", es: "El Cortafuegos" },
        pool: ["Access_Denied", "System.Halt()", "Error:404", "Fatal_Exception", "Buffer_Overflow"],
        type: "words",
        briefing: {
            en: "Final defense layer. The system is fighting back. Override manual protocols.",
            es: "Capa de defensa final. El sistema se defiende. Anula protocolos manuales."
        },
        guideKeys: []
    },
    {
        id: "lvl_30",
        name: { en: "ROOT ACCESS", es: "ACCESO ROOT" },
        pool: ["sudo rm -rf /", "System.Override(True)", "Matrix.Reload()", "Wake_Up_Neo", "Follow_The_White_Rabbit"],
        type: "words",
        briefing: {
            en: "This is it. The core. Total system control. Do not fail us now.",
            es: "Es esto. El núcleo. Control total del sistema. No nos falles ahora."
        },
        guideKeys: []
    }
];

// Helper to calculate target scores based on pool complexity and desired duration
const calculateStats = (lvl, index) => {
    // 1. Calculate Average Points per Item in the pool
    // Scoring logic (from game code): 10 pts per letter + 20 bonus for word completion. 
    // Wait, looking at previous user request about "progress only increases when sequence completed".
    // Actually, usually it's length * 10 + bonus. Let's estimate conservatively.
    // Let's assume ~30 points per character effectively (10 base + bonus spread out).
    
    let totalChars = 0;
    let totalItems = 0;
    
    // Check both EN and ES pools to be safe, or just EN as baseline
    const pool = lvl.pool; 
    pool.forEach(item => {
        totalChars += item.length;
        totalItems++;
    });
    
    const avgLength = totalChars / totalItems;
    // Game typically gives: (Length * 10) + (Length * 10 * Multiplier) ... 
    // Let's simplify: A word of length L gives about L * 30 points in a decent run.
    const avgPointsPerItem = avgLength * 35; 

    // 2. Calculate Spawn Rate (Difficulty)
    // Start slow (2.2s) and get faster (down to 0.8s)
    const spawnRate = Math.max(800, 2200 - (index * 45));
    const spawnRateSec = spawnRate / 1000;

    // 3. Define Desired Duration (Seconds)
    // Level 1: ~50s
    // Gradual increase to ~90s by Level 30
    let durationSeconds = 50 + (index * 1.4); 

    // Manual Tweaks for Pacing
    if (index === 0) durationSeconds = 50; // Level 1 specific request (45-55s)
    if (index === 1) durationSeconds = 60; // Level 2 slightly longer
    
    // 4. Calculate Target Score
    // Items needed = Duration / SpawnRate
    // Target = Items * AvgPoints
    const itemsNeeded = durationSeconds / spawnRateSec;
    let target = Math.floor(itemsNeeded * avgPointsPerItem);

    // Round to nearest 50 for cleanliness
    target = Math.ceil(target / 50) * 50;

    // 5. Fall Speed calculation (keep roughly same)
    let fallSpeed = 0.5 + (index * 0.05);

    return { targetScore: target, fallSpeed: fallSpeed, spawnRate: spawnRate };
};

curriculum.forEach((lvl, index) => {
    const stats = calculateStats(lvl, index);
    
    // English Entry
    levels.en[`level_${index + 1}`] = {
        id: lvl.id,
        name: lvl.name.en,
        type: lvl.type,
        pool: lvl.pool,
        targetScore: stats.targetScore,
        fallSpeed: stats.fallSpeed,
        spawnRate: stats.spawnRate,
        briefing: lvl.briefing.en,
        guideKeys: lvl.guideKeys
    };

    // Spanish Entry
    levels.es[`level_${index + 1}`] = {
        id: lvl.id,
        name: lvl.name.es,
        type: lvl.type,
        pool: lvl.poolEs || lvl.pool, // Fallback to EN pool if no specific ES pool (usually okay for letters, except layout diffs)
        targetScore: stats.targetScore,
        fallSpeed: stats.fallSpeed,
        spawnRate: stats.spawnRate,
        briefing: lvl.briefing.es,
        guideKeys: lvl.guideKeysEs || lvl.guideKeys
    };
});

const fs = require('fs');
fs.writeFileSync('dictionaries.json', "const Dictionaries = " + JSON.stringify(levels, null, 4) + ";");
console.log("Written to dictionaries.json");
