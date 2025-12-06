# Spenden-Landingpage

Eine interaktive One-Page-Spenden-Landingpage für eine fiktive Hilfsorganisation, erstellt mit Vue.js 3, Tailwind CSS und Vanilla JavaScript.

## 🚀 Demo

Diese Anwendung kann auf [StackBlitz](https://stackblitz.com) geöffnet werden. Laden Sie einfach alle Dateien hoch oder verlinken Sie das GitHub-Repository.

## 📋 Features

- **Hero-Bereich mit Spendenbarometer**: Visueller Fortschrittsbalken zeigt den aktuellen Spendenstand (4.200 € von 10.000 €)
- **Spendenformular**: Vollständige Validierung mit klaren Fehlermeldungen
  - Name (Pflichtfeld, min. 2 Zeichen)
  - E-Mail (Pflichtfeld, E-Mail-Format-Validierung)
  - Betrag (Pflichtfeld, Mindestbetrag 5 €)
  - Newsletter-Checkbox (optional)
  - Danke-Nachricht nach erfolgreicher Spende
- **FAQ-Accordion**: Interaktiver Bereich mit 4 häufig gestellten Fragen aus JSON-Daten

## 🛠️ Technologie-Stack

- **Vue.js 3** mit Composition API
- **Tailwind CSS** für Styling
- **Vanilla JavaScript** (kein TypeScript)
- **Vite** als Build-Tool

## 🎨 UX-Überlegungen

1. **Klare visuelle Hierarchie**: 
   - Hero-Bereich mit auffälligem Gradient und großem Barometer
   - Formular in separatem, gut strukturiertem Bereich
   - FAQ am Ende für zusätzliche Informationen
   - Konsistente Farbgebung (Blau als Hauptfarbe, Grün für Erfolg)

2. **Benutzerfreundliche Validierung**:
   - Inline-Validierung bei Blur-Events
   - Klare Fehlermeldungen in roter Farbe direkt unter den Feldern
   - Visuelle Hervorhebung fehlerhafter Felder (roter Rahmen)
   - Mindestbetrag-Hinweis für Transparenz

3. **Responsive Design**:
   - Mobile-first Ansatz
   - Flexible Layouts mit Tailwind's Grid-System
   - Touch-freundliche Buttons und Formularelemente
   - Angepasste Schriftgrößen für verschiedene Bildschirmgrößen

## 📦 Installation

```bash
npm install
```

## 🏃 Entwicklung

```bash
npm run dev
```

Die Anwendung läuft dann auf `http://localhost:5173`

## 🏗️ Build

```bash
npm run build
```

## 📁 Projektstruktur

```
SLFHO/
├── src/
│   ├── components/
│   │   ├── HeroBarometer.vue
│   │   ├── DonationForm.vue
│   │   └── FAQ.vue
│   ├── data/
│   │   └── faq.json
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🤖 KI-Tool-Nutzung

Diese Anwendung wurde mit Unterstützung von KI-Tools (Claude/Cursor) entwickelt. Die Architektur, Komponentenstruktur und UX-Entscheidungen wurden in Zusammenarbeit mit KI-Assistenten erstellt.

## 📝 Funktionalität

- ✅ Spendenbarometer aktualisiert sich dynamisch bei neuen Spenden
- ✅ Vollständige Formularvalidierung mit klaren Fehlermeldungen
- ✅ Danke-Nachricht nach erfolgreicher Spende (verschwindet nach 5 Sekunden)
- ✅ Responsive Design für Desktop und Mobile
- ✅ FAQ-Accordion mit Animationen
- ✅ Alle Texte auf Deutsch

## 🎯 Nächste Schritte (für Produktivumgebung)

- Backend-Integration für echte Spendenverarbeitung
- Payment-Gateway-Integration (z.B. Stripe, PayPal)
- Datenbank für Spendenhistorie
- E-Mail-Versand für Spendenbescheinigungen
- Analytics-Integration
- Accessibility-Verbesserungen (ARIA-Labels, Keyboard-Navigation)

