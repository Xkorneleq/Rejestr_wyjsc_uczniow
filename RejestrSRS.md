# **`Specyfikacja Wymagań Oprogramowania (SRS) Rejestr wyjść uczniów`** 

```
Wersja dokumentu: 1.0
Data: 1.10.2026
Technologie: React JSX
Typ aplikacji: Aplikacja webowa
```

## **`1. Wprowadzenie`** 

### **`1.1`** `Cel dokumentu` 

```
Celem dokumentu jest przedstawienie wymagań funkcjonalnych i niefunkcjonalnych
aplikacji webowej „Rejestr wyjść uczniów”.
```

```
System umożliwia nauczycielom rejestrowanie wyjść i powrotów uczniów,
kontrolowanie osób znajdujących się poza salą oraz przechowywanie historii
wyjść.
```

```
Dokument stanowi podstawę do implementacji, testowania i oceny systemu.
```

### **`1.2`** `Zakres systemu` 

```
System będzie aplikacją webową służącą do elektronicznej ewidencji wyjść uczniów
podczas lekcji.
```

```
W zakresie systemu znajdują się:
```

- `logowanie użytkowników,` 

- `wybór klasy i wyświetlanie uczniów,` 

- `rejestrowanie wyjścia i powrotu,` 

- `automatyczne zapisywanie czasu,` 

- `wyświetlanie aktywnych wyjść,` 

- `historia, wyszukiwanie i filtrowanie danych,` 

- `podstawowe statystyki,` 

- `zarządzanie uczniami, klasami i użytkownikami,` 

- `zarządzanie uprawnieniami.` 

### **`1.3`** `Użytkownicy systemu` 

```
System przewiduje następujące role:
```

- **`Nauczyciel`** `– rejestruje wyjścia i powroty oraz kontroluje aktywne wyjścia.` 

- **`Wychowawca`** `– przegląda historię, statystyki i raporty.` 

- **`Administrator`** `– zarządza użytkownikami, uczniami, klasami i uprawnieniami.` 

- **`Osoba uprawniona`** `– przegląda dane zgodnie z przyznanymi uprawnieniami.` 

## **`2. Opis ogólny systemu`** 

### **`2.1`** `Charakterystyka systemu` 

```
Aplikacja będzie działać w przeglądarce internetowej. Jej głównym zadaniem
będzie szybka rejestracja wyjścia i powrotu ucznia podczas lekcji.
```

```
Po zalogowaniu nauczyciel wybiera klasę i rozpoczyna lekcję. Następnie system
wyświetla listę uczniów oraz umożliwia rejestrowanie wyjść.
```

```
Po zarejestrowaniu wyjścia system zapisuje jego czas i oznacza ucznia jako
znajdującego się poza salą. Po powrocie zapisuje czas powrotu oraz oblicza czas
trwania wyjścia.
```

### **`2.2`** `Założenia` 

```
System zakłada, że:
```

- `szkoła posiada aktualne listy uczniów i klas,` 

- `nauczyciele posiadają urządzenia z dostępem do aplikacji,` 

- `każdy użytkownik posiada indywidualne konto,` 

- `nauczyciel odpowiada za rejestrowanie wyjść i powrotów,` 

- `system będzie wykorzystywany podczas rzeczywistych zajęć.` 

- 

## **`3. Wymagania funkcjonalne`** 

```
WF-01 – Logowanie użytkownika
```

```
System musi umożliwiać logowanie za pomocą indywidualnego konta. Po zalogowaniu
użytkownik otrzymuje widok odpowiedni dla swojej roli. Nieprawidłowe dane
powodują wyświetlenie komunikatu o błędzie.
```



<!-- Start of picture text -->
Rejestr Wyjéc<br><!-- End of picture text -->

```
WF-02 – Obsługa ról użytkowników
```

```
System musi rozpoznawać rolę użytkownika: nauczyciel, wychowawca, administrator
lub osoba uprawniona. Użytkownik może korzystać wyłącznie z dostępnych dla niego
funkcji.
```

### **`WF-03`** `– Wybór klasy` 

```
System musi umożliwiać nauczycielowi wybór klasy i wyświetlenie przypisanych do
niej uczniów.
```

### **`WF-04`** `– Rozpoczęcie lekcji` 

```
System musi umożliwiać rozpoczęcie lekcji dla wybranej klasy. Dopiero podczas
aktywnej lekcji możliwe jest rejestrowanie wyjść.
```

### **`WF-05`** `– Wyświetlanie listy uczniów` 

```
System musi wyświetlać listę uczniów wraz z ich aktualnym statusem:
```

- _`W sali`_ `,` 

- _`Poza salą`_ `.` 



<!-- Start of picture text -->
< Matematyka: Klasa2A = 1s za<br>; ae at @1<br>2 eas or<br><!-- End of picture text -->

### **`WF-06`** `– Rejestrowanie wyjścia` 

```
System musi umożliwiać nauczycielowi zarejestrowanie wyjścia ucznia. System
zapisuje datę i godzinę, zmienia status ucznia oraz tworzy aktywne wyjście.
```



<!-- Start of picture text -->
Rejestruj wyjécie x<br>© Czas wyjscia: 11:54<br>Ucze’<br>3. Chmielewsk! Celina v<br>Powdd wyiscia<br>Pietganiarka<br>Sekretariat Pedagog/ Psycholog<br>Sprawy organizacyine Inne<br>Anuluj © Zarejestruj wyjscie<br><!-- End of picture text -->

### **`WF-07`** `– Rejestrowanie powrotu` 

```
System musi umożliwiać zarejestrowanie powrotu ucznia. System zapisuje czas
powrotu, oblicza czas trwania, zmienia status ucznia na „W sali” i zapisuje
zdarzenie w historii.
```



<!-- Start of picture text -->
Potwierdz powrét x<br>Kaczmarek Gabriela<br>Wyszedit(a): 10:22 - 89 min temu<br>Potwierd2 powrét ucznia do sali. Czas zostanie<br>Zarejestrowany automatycznie.<br>fous<br><!-- End of picture text -->

### **`WF-08`** `– Wyświetlanie aktywnych wyjść` 

```
System musi wyświetlać uczniów znajdujących się poza salą wraz z imieniem,
nazwiskiem, godziną wyjścia i czasem trwania wyjścia.
```

### **`WF-09`** `– Automatyczne określanie czasu wyjścia` 

```
System powinien automatycznie obliczać czas trwania wyjścia na podstawie czasu
wyjścia i powrotu.
```

### **`WF-10`** `– Zakończenie lekcji` 

```
System musi umożliwiać zakończenie aktywnej lekcji. Po jej zakończeniu nie można
rejestrować nowych wyjść.
```



<!-- Start of picture text -->
Zakonez lekcj¢ x<br>© 2 uczniéw jest poza sala! Najpierw zarejestruj ich<br>powrdt.<br>Anuluj (C Zakoricz lekcje<br><!-- End of picture text -->

### **`WF-11`** `– Historia wyjść` 

```
System musi przechowywać historię wyjść zawierającą co najmniej ucznia, datę,
czas wyjścia i powrotu, czas trwania oraz klasę.
```



<!-- Start of picture text -->
Historia wyjsé J Eksportyj CSV<br>T Fitry<br>pata uczen KLASA Powoo wisi owner. czas<br>1 pat 2026 Chmielewski Celina Kiasa 2A Toaleta 11:51 11:51 min<br>2 pat 202 Bak Bartosz Kiasa 2A Toaleta u:s1 msi min<br>pat 2626 Chmielewski Celina Kiasa 2A Toaleta 10:12 10:19 7 min<br>30 wes 202 Malinowska Yvonne Kiasa 3A Toaleta 10:15 10:21 6 min<br>se wrz 2026 ‘Adamski Wojciech Kiasa 3A Setretarat 10:05 10:18 13min<br>30 ars 2026 Sikora Olga Kiasa 28 Pedagoa / Paycholog 09:08 09:35 27 min orlta<br>2 Walezak Graegorz Kiasa 48 inne 8:10 02:38 28min<br>28 ars 2026 Lewandowska lzabela Kiasa 2 Serawy organizacyine 11:28 ma 22min<br>cz Bak Bartosz Kiasa 2A Toaleta 11:08 11:13 Simin<br><!-- End of picture text -->

### **`WF-12`** `– Wyszukiwanie i filtrowanie` 

```
Uprawnieni użytkownicy powinni mieć możliwość wyszukiwania i filtrowania danych
według ucznia, klasy, zakresu dat oraz statusu wyjścia.
```

### **`WF-13`** `– Podstawowe statystyki` 

```
System powinien umożliwiać wyświetlanie podstawowych statystyk, takich jak
liczba wyjść, liczba wyjść danego ucznia, średni czas wyjścia i liczba wyjść w
określonym okresie.
```



<!-- Start of picture text -->
Statystyki<br>aa ic) (0) a<br>a] 12 min 28 min 4<br>Powody wyiéé Rozktad czasow wyiéé<br>an? :: a<br>Wyjicia wedlug klasy<br>a _ - _<br><!-- End of picture text -->

### **`WF-14`** `– Zarządzanie uczniami` 

```
Administrator musi mieć możliwość dodawania, edytowania, usuwania lub
dezaktywowania uczniów, przypisywania ich do klas oraz przeglądania listy.
```

### **`WF-15`** `– Zarządzanie klasami` 

```
Administrator musi mieć możliwość dodawania, edytowania, usuwania lub
dezaktywowania klas oraz przypisywania do nich uczniów.
```

### **`WF-16`** `– Zarządzanie użytkownikami` 

```
Administrator musi mieć możliwość dodawania i edytowania użytkowników, zmiany
ich ról oraz zarządzania dostępem do systemu.
```

### **`WF-17`** `– Korekta danych` 

```
Uprawniony użytkownik powinien mieć możliwość poprawienia błędnych danych
historycznych. Każda zmiana musi zostać zapisana wraz z informacją o
użytkowniku.
```

## **`4. Reguły biznesowe`** 

```
RB-01 – Jedno aktywne wyjście
```

```
Uczeń może posiadać maksymalnie jedno aktywne wyjście.
```

### **`RB-02`** `– Aktywna lekcja` 

```
Wyjście może zostać zarejestrowane wyłącznie podczas aktywnej lekcji.
```

### **`RB-03`** `– Powrót ucznia` 

```
Powrót może zostać zarejestrowany wyłącznie dla ucznia posiadającego aktywne
wyjście.
```

### **`RB-04`** `– Poprawność czasu` 

```
Czas powrotu nie może być wcześniejszy niż czas wyjścia.
```

### **`RB-05`** `– Status ucznia` 

```
Po wyjściu status ucznia zmienia się na „Poza salą”, a po powrocie na „W sali”.
```

### **`RB-06`** `– Dostęp do historii` 

```
Dane historyczne mogą być dostępne wyłącznie dla użytkowników posiadających
odpowiednie uprawnienia.
```

### **`RB-07`** `– Historia zmian` 

```
Zmiana danych historycznych musi pozostawić informację pozwalającą
zidentyfikować użytkownika.
```

## **`5. Wymagania niefunkcjonalne`** 

### **`WNF-01`** `– Użyteczność` 

```
Interfejs powinien być prosty i czytelny, umożliwiając nauczycielowi szybkie
wykonywanie podstawowych operacji.
```

### **`WNF-02`** `– Wydajność` 

```
Rejestracja wyjścia i powrotu powinna odbywać się bez niepotrzebnego
oczekiwania.
```

### **`WNF-03`** `– Bezpieczeństwo` 

```
System musi zapewniać kontrolę dostępu do danych na podstawie roli użytkownika.
```

### **`WNF-04`** `– Ochrona danych` 

```
System powinien przechowywać wyłącznie dane niezbędne do działania.
```

### **`WNF-05`** `– Dostępność` 

```
Aplikacja powinna działać w standardowej przeglądarce internetowej na
urządzeniach używanych przez nauczycieli.
```

### **`WNF-06`** `– Spójność danych` 

```
Dane dotyczące wyjść i powrotów nie mogą zostać utracone po ponownym
uruchomieniu aplikacji.
```

### **`WNF-07`** `– Rozszerzalność` 

```
Architektura systemu powinna umożliwiać dodawanie kolejnych funkcji.
```

### **`WNF-08`** `– Technologia` 

```
Frontend zostanie wykonany z wykorzystaniem React JSX. W projekcie przewidziano
również Bootstrap, Node.js, Express.js, MongoDB i REST API.
```

## **`6. Wymagania dotyczące interfejsu użytkownika`** 

```
6.1 Ekran logowania
```

```
Ekran powinien zawierać:
```

- `pole loginu,` 

- `pole hasła,` 

- `przycisk „Zaloguj”,` 

- `komunikat o błędnych danych.` 

### **`6.2`** `Panel nauczyciela` 

```
Panel powinien umożliwiać:
```

- `wybór klasy,` 

- `rozpoczęcie i zakończenie lekcji,` 

- `wyświetlenie listy uczniów,` 

- `rejestrowanie wyjść i powrotów,` 

- `wyświetlanie aktywnych wyjść.` 

### **`6.3`** `Lista uczniów` 

```
Lista powinna umożliwiać szybkie rozpoznanie statusu ucznia oraz wykonanie
odpowiedniej akcji: „Wyjście” lub „Powrót”.
```

### **`6.4`** `Historia` 

```
Widok historii powinien umożliwiać przeglądanie i filtrowanie zarejestrowanych
wyjść.
```

### **`6.5`** `Panel administratora` 

```
Panel powinien umożliwiać zarządzanie użytkownikami, uczniami, klasami, rolami i
uprawnieniami.
```

## **`7. Dane przechowywane przez system`** 

```
Dane użytkownika
```

- `identyfikator,` 

- `imię i nazwisko,` 

- `dane logowania,` 

- `rola,` 

- `status konta.` 

```
Dane ucznia
```

- `identyfikator,` 

- `imię i nazwisko,` 

- `klasa,` 

- `status.` 

```
Dane klasy
```

- `identyfikator,` 

- `nazwa klasy,` 

- `lista uczniów.` 

```
Dane wyjścia
```

- `identyfikator,` 

- `identyfikator ucznia,` 

- `data i godzina wyjścia,` 

- `data i godzina powrotu,` 

- `czas trwania,` 

- `status,` 

- `identyfikator użytkownika rejestrującego zdarzenie.` 

## **`8. Zakres MVP`** 

```
Pierwsza wersja systemu powinna zawierać:
```

`1. logowanie,` 

`2. role użytkowników,` 

`3. listę klas i uczniów,` 

`4. rozpoczęcie lekcji,` 

`5. rejestrację wyjścia i powrotu,` 

`6. automatyczne zapisywanie czasu,` 

`7. wyświetlanie aktywnych wyjść,` 

`8. historię wyjść,` 

`9. podstawowe filtrowanie,` 

- `10.panel administratora.` 

## **`9. Funkcje poza zakresem MVP`** 

```
W kolejnych wersjach mogą zostać dodane:
```

- `raporty PDF,` 

- `eksport CSV,` 

- `rozbudowane statystyki,` 

- `kody QR,` 

- `RFID/NFC,` 

- `integracja z planem lekcji,` 

- `integracja z dziennikiem elektronicznym,` 

- `powiadomienia,` 

- `panel rodzica i ucznia.` 

## **`10. Kryteria akceptacji`** 

```
System będzie można uznać za spełniający wymagania, jeżeli:
```

- `nauczyciel może szybko rejestrować wyjścia i powroty,` 

- `system poprawnie wskazuje uczniów poza salą,` 

- `każde wyjście posiada zapis czasu,` 

- `system przechowuje historię,` 

- `użytkownicy mają dostęp zgodny z uprawnieniami,` 

- `dane pozostają spójne po ponownym uruchomieniu,` 

- `aplikacja działa na urządzeniach nauczycieli,` 

- `podstawowe funkcje nie wymagają specjalistycznego szkolenia,` 

- `wszystkie wymagania MVP zostały zrealizowane.` 

## **`11. Ograniczenia systemu`** 

```
System nie będzie obejmował:
```

- `pełnej ewidencji obecności,` 

- `wpisywania ocen,` 

- `usprawiedliwiania nieobecności,` 

- `obsługi dziennika elektronicznego,` 

- `planowania zastępstw,` 

- `pełnej dokumentacji pedagogicznej,` 

- `automatycznego podejmowania decyzji wychowawczych,` 

- `automatycznego nakładania konsekwencji,` 

- `pełnej integracji z zewnętrznymi systemami szkolnymi.` 

## **`12. Podsumowanie`** 

```
System „Rejestr wyjść uczniów” ma zapewnić nauczycielowi szybki sposób
rejestrowania wyjść i powrotów uczniów.
```

```
Najważniejsze funkcje to rejestrowanie zdarzeń, automatyczne zapisywanie czasu,
kontrolowanie uczniów poza salą oraz przechowywanie historii.
```

```
System zostanie wykonany jako aplikacja webowa w React JSX. Pierwsza wersja
będzie realizowała funkcje określone w zakresie MVP, a architektura umożliwi
dalszą rozbudowę.
```

