# Dokumentacja wdrożeniowa - Kancelaria Komornicza

## 1. Wymagania systemowe

### Na komputerze deweloperskim:
- **Node.js 18+** (LTS) - [Pobierz tutaj](https://nodejs.org/)
- **Git** - do zarządzania kodem
- **Edytor kodu** - Visual Studio Code (zalecany)

### Na serwerze komornik-ursynow.pl:
- **PHP 7.4+** - dla formularza kontaktowego
- **Dostęp FTP/SFTP** - do przesyłania plików
- **Funkcja mail()** - do wysyłki emaili z formularza

## 2. Instalacja i uruchomienie lokalnie

### Krok 1: Instalacja Node.js
1. Pobierz instalator Node.js LTS z https://nodejs.org/
2. Uruchom instalator i postępuj zgodnie z instrukcjami
3. Po instalacji sprawdź w PowerShell:
   ```powershell
   node --version
   npm --version
   ```

### Krok 2: Instalacja zależności projektu
```powershell
cd c:\Projects\learning\law-website
npm install
```

### Krok 3: Uruchom serwer deweloperski
```powershell
npm run dev
```

Strona będzie dostępna pod adresem: http://localhost:4321

## 3. Konfiguracja GitHub i CMS

### Krok 1: Utwórz repozytorium GitHub
1. Zaloguj się na https://github.com
2. Utwórz nowe repozytorium o nazwie `law-website`
3. Ustaw repozytorium jako publiczne lub prywatne

### Krok 2: Połącz projekt z GitHub
```powershell
cd c:\Projects\learning\law-website
git init
git remote add origin https://github.com/TWOJA-NAZWA/law-website.git
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

### Krok 3: Skonfiguruj GitHub OAuth dla Decap CMS

**Opcja A: Przez Netlify (ZALECANE - ŁATWIEJSZE)**

1. Zarejestruj się na https://www.netlify.com (darmowe konto)
2. Podłącz swoje repozytorium GitHub
3. W ustawieniach Netlify przejdź do "Identity"
4. Włącz "Identity" i "Git Gateway"
5. W pliku `public/admin/config.yml` zostaw domyślną konfigurację

**Opcja B: Bezpośrednio przez GitHub**

1. Wejdź na https://github.com/settings/developers
2. Kliknij "New OAuth App"
3. Wypełnij formularz:
   - Application name: `Kancelaria CMS`
   - Homepage URL: `http://komornik-ursynow.pl`
   - Authorization callback URL: `http://komornik-ursynow.pl/admin/`
4. Skopiuj Client ID i Client Secret
5. Zaktualizuj `public/admin/config.yml`:
   ```yaml
   backend:
     name: github
     repo: TWOJA-NAZWA/law-website
     branch: main
     auth_type: implicit
     client_id: TWOJ_CLIENT_ID
   ```

## 4. Budowanie strony dla produkcji

```powershell
npm run build
```

Pliki do wgrania na serwer będą w folderze `dist/`

## 5. Wgranie na serwer komornik-ursynow.pl

### Metoda 1: FTP/SFTP (FileZilla)

1. **Pobierz FileZilla Client** z https://filezilla-project.org/
2. **Połącz się z serwerem:**
   - Host: ftp.komornik-ursynow.pl (lub adres FTP od hostingu)
   - Nazwa użytkownika: [Od dostawcy hostingu]
   - Hasło: [Od dostawcy hostingu]
   - Port: 21 (FTP) lub 22 (SFTP)

3. **WAŻNE - Zrób backup obecnej strony:**
   - Pobierz wszystkie pliki z katalogu głównego na swój komputer
   - Zapisz je w bezpiecznym miejscu

4. **Prześlij nową stronę:**
   - Usuń stare pliki z serwera (lub przenieś do folderu backup)
   - Prześlij całą zawartość folderu `dist/` do głównego katalogu WWW
   - Upewnij się, że plik `public/api/contact.php` trafił do `api/contact.php`

### Metoda 2: Panel hostingu (cPanel/DirectAdmin)

1. Zaloguj się do panelu administracyjnego hostingu
2. Znajdź "Menedżer plików"
3. Przejdź do katalogu public_html (lub www)
4. Zrób backup obecnych plików
5. Wyczyść katalog
6. Wgraj pliki z folderu `dist/`

## 6. Konfiguracja formularza kontaktowego

### Testowanie PHP na serwerze

1. Utwórz plik testowy `test-email.php` na serwerze:
```php
<?php
if(mail('warszawa13@komornik.pl', 'Test', 'Funkcja mail działa!')) {
    echo 'Email wysłany pomyślnie';
} else {
    echo 'Błąd wysyłania emaila';
}
?>
```

2. Otwórz w przeglądarce: `http://komornik-ursynow.pl/test-email.php`
3. Jeśli email nie działa, skontaktuj się z działem pomocy technicznej hostingu

### Aktualizacja adresu email w formularzu

Edytuj plik `public/api/contact.php` linijka ~34:
```php
$to = 'warszawa13@komornik.pl'; // ZMIEŃ NA WŁAŚCIWY ADRES
```

## 7. Konfiguracja domeny i SSL

1. **Upewnij się, że domena komornik-ursynow.pl jest poprawnie skonfigurowana**
2. **Włącz certyfikat SSL** (HTTPS) w panelu hostingu
   - Większość hostingów oferuje darmowy certyfikat Let's Encrypt
   - Znajdź w panelu "SSL/TLS" lub "Certyfikaty SSL"
   - Kliknij "Zainstaluj certyfikat" dla swojej domeny

## 8. Używanie panelu administracyjnego (CMS)

### Pierwszy raz:

1. Wejdź na: `http://komornik-ursynow.pl/admin`
2. Zaloguj się przez GitHub (wymagane konto GitHub)
3. Pierwsze logowanie może zająć chwilę

### Dodawanie treści:

**Nowa licytacja:**
1. W panelu CMS kliknij "Licytacje" → "New Licytacje"
2. Wypełnij formularz
3. Kliknij "Publish"
4. Zmiany pojawią się na stronie po przebudowaniu (automatycznie lub manualnie)

**Nowa aktualność:**
1. "Aktualności" → "New Aktualności"
2. Wypełnij dane
3. Zaznacz "Wyróżnione" jeśli to ważne ogłoszenie
4. "Publish"

**Dodanie formularza do pobrania:**
1. "Formularze" → "New Formularze"
2. Prześlij plik PDF
3. Wypełnij opis
4. "Publish"

**Wydarzenie w kalendarzu:**
1. "Wydarzenia / Kalendarz" → "New Wydarzenia / Kalendarz"
2. Wybierz datę i kategorię
3. "Publish"

## 9. Automatyczne budowanie przy zmianach (Opcjonalne)

### Przez GitHub Actions (zalecane dla automatyzacji):

1. Utwórz plik `.github/workflows/deploy.yml`:
```yaml
name: Build and Deploy

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - name: Deploy via FTP
        uses: SamKirkland/FTP-Deploy-Action@4.3.0
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          local-dir: ./dist/
```

2. W repozytorium GitHub dodaj sekrety:
   - Settings → Secrets → Actions
   - Dodaj: FTP_SERVER, FTP_USERNAME, FTP_PASSWORD

Teraz każda zmiana w CMS automatycznie zbuduje i wgra nową wersję strony!

## 10. Rozwiązywanie problemów

### Strona nie wyświetla się poprawnie
- Sprawdź czy wszystkie pliki z `dist/` zostały wgrane
- Wyczyść cache przeglądarki (Ctrl+Shift+Del)
- Sprawdź konsolę deweloperską (F12) pod kątem błędów

### Formularz kontaktowy nie działa
- Sprawdź czy PHP jest włączone na serwerze
- Przetestuj funkcję mail() (patrz punkt 6)
- Sprawdź logi błędów PHP w panelu hostingu

### Panel CMS nie działa
- Sprawdź czy plik `public/admin/config.yml` został wgrany
- Zweryfikuj konfigurację GitHub OAuth
- Sprawdź czy jesteś zalogowany na GitHub

### Zmiany w CMS nie pojawiają się na stronie
- Po każdej zmianie w CMS musisz przebudować stronę (`npm run build`)
- Lub skonfiguruj automatyczne budowanie (punkt 9)

## 11. Lista kontrolna przed uruchomieniem

- [ ] Node.js zainstalowany
- [ ] Zależności projektu zainstalowane (`npm install`)
- [ ] Strona działa lokalnie (`npm run dev`)
- [ ] Repozytorium GitHub utworzone i skonfigurowane
- [ ] GitHub OAuth dla CMS skonfigurowany
- [ ] Backup obecnej strony wykonany
- [ ] Strona zbudowana (`npm run build`)
- [ ] Pliki wgrane na serwer
- [ ] SSL włączony
- [ ] Formularz kontaktowy przetestowany
- [ ] Panel CMS działa
- [ ] Wszystkie sekcje sprawdzone

## 12. Wsparcie i kontakt

### Dokumentacja narzędzi:
- Astro: https://docs.astro.build/
- Decap CMS: https://decapcms.org/docs/intro/
- Tailwind CSS: https://tailwindcss.com/docs

### Hosting:
- Skontaktuj się z działem pomocy technicznej swojego dostawcy hostingu
- Podaj szczegóły problemu i logi błędów

---

**Powodzenia z wdrożeniem!** 🚀
