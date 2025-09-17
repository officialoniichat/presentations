# GEV Digitalisierungskonzept

## Projektübersicht
Digitale Transformation und Automatisierung für GEV - Konzeptpräsentation und interaktive Dashboards zur Demonstration intelligenter Schadensfall-Bearbeitung.

## Projektstruktur

```
GEVKonzept/
├── src/
│   ├── dashboards/         # Interaktive Dashboard-Demos
│   │   ├── konzept.html    # GEV Zuteilungscockpit (Canvas-Version)
│   │   └── beispiel.html   # Referenz-Dashboard (bereits implementiert)
│   └── presentations/      # Präsentationen
│       └── presentation.html # Hauptpräsentation mit 9 Folien
├── server/
│   └── server.js           # Express-Server für lokales Hosting
├── assets/                 # Statische Ressourcen (CSS, JS, Bilder)
│   ├── css/
│   └── js/
├── docs/                   # Dokumentation
├── package.json            # Node.js Abhängigkeiten
└── README.md              # Diese Datei

```

## Features

### 1. GEV Zuteilungscockpit (konzept.html)
- **Canvas-basiertes Dashboard** mit Echtzeit-Visualisierung
- **Automatische Fallzuteilung** mit KI-Simulation
- **Mitarbeiterauslastung** in Echtzeit
- **KPI-Tracking** (Neue Fälle, Automatisierungsrate, etc.)
- **Live-Updates** alle 5 Sekunden

### 2. Referenz-Dashboard (beispiel.html)
- Beispiel einer bereits implementierten Lösung
- Zeigt erreichte Ergebnisse bei anderen Kunden
- Vollständiges Schadenmanagement-Interface

### 3. Präsentation (presentation.html)
Interaktive Präsentation mit 9 Folien:
1. **Übersicht** - Agenda der Präsentation
2. **Unser Erstkonzept** - Live-Demo des Zuteilungscockpits
3. **Quick Win #1** - Intelligentes Zuteilungscockpit mit KI
4. **Quick Win #2** - Automatisierte Dokumentenverarbeitung
5. **Advanced Analytics** - KI-gestützte Betrugserkennung
6. **Customer Experience** - 24/7 Kundenservice-Automatisierung
7. **Implementation** - 3-Phasen Implementierungsplan
8. **Anwendungsfall** - Bereits implementierte Lösung
9. **Business Case** - ROI und Investitionsrechnung

## Installation & Start

### Voraussetzungen
- Node.js (v14 oder höher)
- npm (Node Package Manager)

### Installation
```bash
# Abhängigkeiten installieren
npm install
```

### Projekt starten
```bash
# Server starten (Port 3000)
npm start

# Oder direkt mit Node
node server/server.js
```

### Zugriff
Nach dem Start sind die Anwendungen verfügbar unter:
- **Hauptpräsentation:** http://localhost:3000/presentation
- **GEV Dashboard:** http://localhost:3000/konzept
- **Referenz-Dashboard:** http://localhost:3000/beispiel

## Technologien

- **Frontend:** HTML5, Canvas API, Tailwind CSS
- **Visualisierung:** Canvas 2D Context für performante Dashboards
- **Styling:** Tailwind CSS für moderne UI-Komponenten
- **Server:** Express.js für lokales Hosting
- **Fonts:** Inter (Google Fonts) für optimale Lesbarkeit

## Kernfunktionen

### Automatische Fallzuteilung
- KI-basierte Analyse eingehender Schadensfälle
- Intelligente Mitarbeiter-Zuordnung nach Expertise und Auslastung
- Automatische Priorisierung nach SLA und Schadenshöhe

### Echtzeit-Monitoring
- Live-Visualisierung der Mitarbeiterauslastung
- KPI-Tracking mit automatischen Updates
- Sofortige Benachrichtigungen bei kritischen Fällen

### Betrugserkennung
- Pattern Recognition mit Machine Learning
- Predictive Risk Scoring
- Automatisierte Investigation-Workflows

## Projektziele

- **95%** Automatisierungsgrad bei Standard-Schadensfällen
- **60%** Reduktion der Durchlaufzeiten
- **€4.2M** jährliche Kosteneinsparung
- **240%** ROI nach 9 Monaten

## Support & Kontakt

Für Fragen zur technischen Implementierung oder zum Konzept kontaktieren Sie bitte das Entwicklungsteam.

---

*GEV Digitalisierungskonzept - Transforming Insurance Operations Through Intelligent Automation*