# Quick Start Guide - Szybki start

## Dla programisty deweloperów

### 1. Pierwsza instalacja

**Zainstaluj Node.js:**
- Pobierz z https://nodejs.org/ (wersja LTS)
- Zainstaluj zgodnie z instrukcjami

**Zainstaluj zależności:**
```powershell
cd c:\Projects\learning\law-website
npm install
```

### 2. Uruchomienie lokalnie

```powershell
npm run dev
```

Otwórz przeglądarkę: http://localhost:4321

### 3. Budowanie dla produkcji

```powershell
npm run build
```

Pliki do wgrania są w folderze `dist/`

### 4. Testowanie

```powershell
npm run preview
```

Testuje zbudowaną wersję lokalnie.

---

## Dla redaktorów treści

### Logowanie do panelu CMS

1. Wejdź na: `http://komornik-ursynow.pl/admin`
2. Kliknij "Login with GitHub"
3. Zaloguj się swoim kontem GitHub

### Dodaj nową licytację

1. W panelu kliknij **"Licytacje"**
2. Kliknij **"New Licytacje"**
3. Wypełnij formularz:
   - Tytuł (np. "Mieszkanie przy ul. Pięknej")
   - Opis
   - Data licytacji
   - Lokalizacja
   - Cena wywoławcza
   - Kategoria (nieruchomości/ruchomości/pojazdy/inne)
   - Status: aktywna
4. Możesz dodać zdjęcia
5. Kliknij **"Publish"**

### Dodaj aktualność

1. **"Aktualności"** → **"New Aktualności"**
2. Wypełnij:
   - Tytuł
   - Opis krótki
   - Treść (pełny tekst)
   - Data publikacji
3. Zaznacz "Wyróżnione" jeśli to ważne
4. **"Publish"**

### Dodaj formularz do pobrania

1. **"Formularze"** → **"New Formularze"**
2. Wypełnij dane
3. Wgraj plik PDF
4. **"Publish"**

### Dodaj wydarzenie do kalendarza

1. **"Wydarzenia"** → **"New Wydarzenia"**
2. Wybierz datę
3. Wybierz kategorię koloru
4. **"Publish"**

---

## Komendy npm

| Komenda | Opis |
|---------|------|
| `npm run dev` | Uruchom serwer deweloperski |
| `npm run build` | Zbuduj stronę dla produkcji |
| `npm run preview` | Podgląd zbudowanej strony |
| `npm run astro` | Komendy Astro CLI |

---

## Struktura folderów

```
law-website/
├── public/              # Pliki statyczne (skopiowane bez zmian)
│   ├── admin/          # Panel CMS
│   ├── api/            # PHP contact form
│   ├── images/         # Obrazy
│   └── formularze/     # Pliki PDF do pobrania
├── src/
│   ├── components/     # Komponenty wielokrotnego użytku
│   ├── content/        # Treści zarządzane przez CMS
│   │   ├── licytacje/
│   │   ├── aktualnosci/
│   │   ├── formularze/
│   │   └── wydarzenia/
│   ├── layouts/        # Layouty stron
│   └── pages/          # Strony witryny
├── astro.config.mjs    # Konfiguracja Astro
├── tailwind.config.mjs # Konfiguracja Tailwind
└── package.json        # Zależności projektu
```

---

## Potrzebujesz pomocy?

- 📖 **Pełna dokumentacja:** patrz `DEPLOYMENT.md`
- 🌐 **Dokumentacja Astro:** https://docs.astro.build/
- 💬 **Decap CMS:** https://decapcms.org/docs/
