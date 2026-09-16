# Tierra Studio — Landing Page de Arquitectura e Interiorismo

Landing page corporativa para un estudio de reformas de alta gama y consultoría técnica de arquitectura. El proyecto está enfocado en mostrar un **diseño visual sofisticado en tonos cálidos/terracota, maquetación semántica responsiva, interacción mediante JavaScript Vanilla y optimización UX/UI orientada a conversión**.

---

## 🚀 Demo en Vivo

Puedes ver la landing page desplegada y funcionando en:
👉 **[Ver Demo en Vivo](#)** *(Añade aquí tu enlace de GitHub Pages, Netlify o Vercel)*

---

## 🛠️ Tecnologías Utilizadas

* **HTML5 Semántico:** Estructura limpia y accesible (`<header>`, `<main>`, `<section>`, `<article>`, `<details>`, `<footer>`).
* **CSS3 Moderno & Modular:** 
  * Variables CSS (Design Tokens) para la gestión del sistema de color, tipografía y espaciados.
  * Layouts mediante **CSS Grid** y **Flexbox**.
  * Diseño 100% Responsive (*Mobile-First*).
* **JavaScript Vanilla (ES Modules):** 
  * Arquitectura modular limpia sin dependencias externas ni frameworks.

---

## ⚡ Componentes Destacados & Funcionalidades

1. **Visor Comparativo "Antes y Después":**
   * Componente dinámico programado en JS y CSS (`overflow: hidden` dinámico) que permite al usuario arrastrar un slider para comparar visualmente el resultado de las reformas.
2. **Navegación Transparente y Menu Responsive:**
   * Header fijo sobre el Hero que adapta su estilo al hacer scroll y menú desplegable para dispositivos móviles.
3. **Sección Metodología (Grid 4 Columnas):**
   * Tarjetas verticales estilizadas con números serif en tono terracota suave que explican el proceso paso a paso.
4. **Preguntas Frecuentes (FAQ Accordeón):**
   * Implementación semántica con elementos `<details>` y `<summary>` personalizados mediante CSS (líneas divisoras finas e icono angular estilizado).
5. **Footer Corporativo Elegante:**
   * Estructura distribuida en tres columnas (Marca, Oficinas y Contacto) con cierre legal independiente en la parte inferior.

---

## 📁 Estructura del Proyecto

```text
tierra-studio-landing/
├── index.html
├── assets/
│   ├── img/
│   │   ├── logo.svg
│   │   ├── hero.jpg
│   │   ├── before-panel1.jpg
│   │   └── after-panel1.jpg
├── css/
│   ├── variables.css      /* Variables globales del sistema de diseño */
│   ├── base.css           /* Reset CSS y estilos globales */
│   ├── components.css     /* Botones, cards y badges */
│   └── main.css           /* Estilos por sección y layout */
└── js/
    ├── main.js            /* Entry point de JavaScript */
    └── modules/
        ├── nav.js         /* Gestión del menú móvil y header sticky */
        ├── beforeAfter.js /* Lógica del slider comparador de imágenes */
        └── faq.js         /* Gestión de la interactividad del acordeón */
