# 🐺 OldWorld Codex

**OldWorld Codex** to przeglądarkowa aplikacja wspierająca grę planszową **Wiedźmin: Stary Świat**. Projekt zawiera interaktywną instrukcję, ściągę jak rozpocząć rozgrywkę (szybki start), a także bestiariusz.

## 🔮 Funkcje

- 📖 **Interaktywna instrukcja** z realistycznym flipbookiem
- ⚔️ **Szybki start** – konfiguracja graczy, potworów oraz planszy w formie wygodnej ściągi
- 🧟 **Bestiariusz** – zanurz się głębiej w Wiedźmiński świat, poznaj swoich przeciwników i sprzymierzeńców
- 📱 **Responsywny interfejs** – działa świetnie na desktopach i urządzeniach mobilnych

## 🛠️ Stos technologiczny

- **Next.js 14 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** – animacje
- **Vercel** – hosting

## 🚀 Uruchomienie projektu lokalnie

1. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/amerchel/old-world-codex
   cd oldworld-codex
   ```

2. Zainstaluj zależności:
   ```bash
   npm install
   ```

3. Uruchom dev server:
   ```bash
   npm run dev
   ```

4. Otwórz w przeglądarce: [http://localhost:3000](http://localhost:3000)

## 📁 Struktura projektu

```bash
├── app/
│   ├── components/        # Wspólne komponenty UI i logiki
│   ├── knowledge/         # Interaktywna instrukcja (flipbook)
│   ├── hooks/             # Hooki do zarządzania logiką i stanem komponentów funkcyjnych
│   ├── setup/             # Konfiguracja graczy (Szybki start)
├── public/assets/         # Logo, tła, ikony, instrukcja
├── styles/                # Tailwind + globalne style
```

## ✍️ Autor

Projekt stworzony przez [@amerchel](https://github.com/amerchel), [@SzymekNawrocki](https://github.com/SzymekNawrocki), [@bostrowski-data](https://github.com/bostrowski-data) oraz [@pkcdv](https://github.com/pkcdv) jako projekt zaliczeniowy na studia, a także jako fanowskie narzędzie wspierające graczy **Wiedźmin: Stary Świat**.

## ⚠️ Zastrzeżenia

Projekt nie jest oficjalnym produktem Go On Board ani CD Projekt RED. Wszystkie materiały graficzne i nazwy własne są wykorzystywane jedynie w celach edukacyjnych i fanowskich.
