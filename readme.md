# 🟢 NEON STREAM: Typing Hacker

Bienvenido a **Neon Stream**, un simulador de hackeo inmersivo y juego de mecanografía donde tus pulsaciones controlan el flujo de datos. Sobrevive a las defensas del sistema, mantén tu racha de precisión y desvela los secretos ocultos en el código.

## 🚀 Características Principales

*   **Lluvia de Matrix en 3D:** Un motor gráfico de partículas con físicas personalizadas. Sube una imagen en los ajustes y mira cómo la lluvia de caracteres colisiona con la topología 3D de la figura para revelarla de forma monocromática.
*   **Curriculum de Hacker (30 Niveles):** Un curso de mecanografía completo disfrazado de ciberataque.
    *   **Fase 1 (Niveles 1-6):** Fila Base (Home Row). Índices, Corazón, Anular y Meñique.
    *   **Fase 2 (Niveles 7-12):** Fila Superior.
    *   **Fase 3 (Niveles 13-18):** Fila Inferior.
    *   **Fase 4 (Niveles 19-24):** Mayúsculas y Tildes (Validación estricta de Shift).
    *   **Fase 5 (Niveles 25-29):** Números y Símbolos de Código.
    *   **Nivel 30:** El Arquitecto (Boss Final).
*   **Briefing Inmersivo:** Antes de cada nivel, el sistema se comunica contigo mediante una terminal de texto ("Wake up, Neo..."), enseñándote visualmente qué dedos usar en el teclado virtual.
*   **Jefes y Mini-Bosses:** Enfrentamientos de alta velocidad contra protocolos de seguridad cada 5 niveles.
*   **Módulo IA (Gemini 2.5 Flash):** Conéctate al "Supervisor IA" para generar nodos de hackeo infinitos sobre cualquier tema que elijas (requiere API Key).
*   **Dificultad Dinámica:** La velocidad aumenta con tu precisión y se reduce si cometes errores.
*   **Teclado Virtual Interactivo:** Muestra qué dedos debes usar y qué teclas están activas en tiempo real.

## 🎮 Cómo Jugar

No requiere instalación ni servidores complejos. Todo el juego está contenido en un único archivo HTML portátil:

1.  Descarga el archivo `index.html`.
2.  Ábrelo en cualquier navegador web moderno (Chrome, Firefox, Edge, Safari).
3.  Crea tu alias de hacker y comienza la infiltración.

## ⚙️ Ajustes del Sistema

Dentro del juego (Menú > Settings), puedes configurar:

*   **Idioma:** Inglés / Español.
*   **Distribución de Teclado:** ANSI-US / ISO-ES.
*   **Gemini API Key:** Introduce tu propia clave de API de Google Gemini para habilitar las funciones de IA. (Se guarda localmente en tu navegador).
*   **Topología 3D:** Carga una imagen personal para el efecto de fondo Matrix.
*   **Gestión de Datos:** Borrar progreso o resetear configuración.

## 💻 Tecnologías Utilizadas

*   **HTML5 Canvas:** Renderizado de alto rendimiento para miles de partículas y texto dinámico.
*   **CSS3:** Efectos de neón (`text-shadow`, `box-shadow`), animaciones glitch y diseño responsivo.
*   **Vanilla JavaScript (ES6+):**
    *   Arquitectura "Single File" (todo el código en un solo archivo para máxima portabilidad).
    *   Lógica orientada a objetos (POO) para el motor del juego.
    *   Gestión de estado y físicas de partículas.
*   **Web Audio API:** Sintetizadores procedurales para sonidos retro-cibernéticos.
*   **Google Gemini API:** Integración con el modelo `gemini-2.5-flash` para la generación procedimental de contenido.

## 🛠️ Herramientas de Desarrollo

El repositorio incluye scripts de utilidad para probar la integración con la IA (requieren Node.js):
*   `test_gemini.js`: Prueba la conexión y validez de tu API Key.
*   `list_models.js`: Lista los modelos disponibles en tu cuenta de Google AI.
