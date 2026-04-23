# Kancelaria Komornicza - Modern Website

Nowoczesna strona internetowa dla kancelarii komorniczej zbudowana z wykorzystaniem Astro, Tailwind CSS i Decap CMS.

## 🚀 Tech Stack

- **Astro 4.x** - Static site generator
- **Tailwind CSS** - Styling framework
- **Decap CMS** - Content management system
- **Pagefind** - Search functionality
- **FullCalendar** - Calendar component
- **TypeScript** - Type safety

## 📋 Wymagania

- Node.js 18+ (LTS)
- npm lub yarn

## 🛠️ Instalacja

```bash
# Zainstaluj zależności
npm install

# Uruchom serwer deweloperski
npm run dev

# Zbuduj projekt
npm run build

# Podgląd zbudowanej strony
npm run preview
```

## 📁 Struktura projektu

```
/
├── public/             # Pliki statyczne
│   ├── admin/         # Panel administratora Decap CMS
│   └── api/           # PHP contact form
├── src/
│   ├── components/    # Komponenty wielokrotnego użytku
│   ├── content/       # Content collections (licytacje, aktualności)
│   ├── layouts/       # Layouty stron
│   └── pages/         # Strony witryny
├── astro.config.mjs   # Konfiguracja Astro
└── tailwind.config.mjs # Konfiguracja Tailwind
```

## 🔧 Deployment

1. Zbuduj projekt: `npm run build`
2. Zawartość folderu `dist/` prześlij na serwer komornik-ursynow.pl
3. Skonfiguruj GitHub OAuth dla Decap CMS
4. Sprawdź działanie formularza kontaktowego PHP

## 📝 Panel Administracyjny

Panel CMS dostępny pod adresem: `/admin`

Wymagane konto GitHub do logowania.
