import { siteConfig } from "@/config/site";

export const privacyPolicyContent = {
  title: "Polityka prywatnosci",
  description:
    "Zasady przetwarzania danych osobowych w zwiazku z kontaktem telefonicznym, e-mailowym i przez WhatsApp oraz korzystaniem ze strony WallMers.",
  updatedAt: "1 kwietnia 2026",
  sections: [
    {
      heading: "1. Administrator danych",
      paragraphs: [
        `Administratorem danych osobowych jest ${siteConfig.companyName}, dalej: "Administrator". W sprawach dotyczacych prywatnosci mozna skontaktowac sie telefonicznie pod numerem ${siteConfig.defaultPhone} lub e-mailowo: ${siteConfig.defaultEmail}.`,
        "Administrator przetwarza dane osobowe z poszanowaniem zasad legalnosci, rzetelnosci, przejrzystosci oraz adekwatnosci do celu przetwarzania.",
      ],
    },
    {
      heading: "2. Jakie dane mozemy przetwarzac",
      paragraphs: [
        "W zaleznosci od sposobu kontaktu mozemy przetwarzac imie, numer telefonu, adres e-mail, tresc wiadomosci, lokalizacje zdarzenia, dane pojazdu oraz informacje niezbedne do organizacji pomocy drogowej.",
        "Podczas korzystania ze strony internetowej moga byc zapisywane dane techniczne, takie jak adres IP, typ urzadzenia, rodzaj przegladarki, czas wizyty oraz logi serwera.",
      ],
    },
    {
      heading: "3. Cele i podstawy przetwarzania",
      paragraphs: [
        "Dane przetwarzamy przede wszystkim w celu obslugi zgloszen, udzielenia odpowiedzi, przygotowania wyceny, realizacji uslugi pomocy drogowej, rozliczenia zlecenia oraz dochodzenia lub obrony roszczen.",
        "Podstawami prawnymi przetwarzania moga byc: podjecie dzialan przed zawarciem umowy, wykonanie umowy, obowiazek prawny ciazący na Administratorze oraz prawnie uzasadniony interes polegajacy na zapewnieniu kontaktu, bezpieczenstwa i archiwizacji komunikacji.",
      ],
    },
    {
      heading: "4. Kontakt telefoniczny, e-mail i WhatsApp",
      paragraphs: [
        "Dane przekazane podczas polaczenia telefonicznego, korespondencji e-mailowej lub komunikacji przez WhatsApp sa wykorzystywane w celu obslugi zapytania, organizacji pomocy i potwierdzenia warunkow realizacji uslugi.",
        "W przypadku korzystania z WhatsApp dane moga byc przetwarzane rowniez przez dostawce tej uslugi zgodnie z jego zasadami prywatnosci. Zalecamy zapoznanie sie z polityka prywatnosci WhatsApp przed przeslaniem danych przez ten kanal.",
      ],
    },
    {
      heading: "5. Odbiorcy danych",
      paragraphs: [
        "Dane moga byc ujawniane podmiotom wspierajacym Administratora w obsludze strony, poczty elektronicznej, hostingu, ksiegowosci, platnosci, narzedzi komunikacyjnych oraz partnerom uczestniczacym w realizacji uslugi, jezeli jest to niezbedne do wykonania zlecenia.",
        "Dane nie sa sprzedawane osobom trzecim. Kazde udostepnienie odbywa sie wyłącznie w zakresie niezbednym do realizacji celu przetwarzania.",
      ],
    },
    {
      heading: "6. Okres przechowywania danych",
      paragraphs: [
        "Dane kontaktowe i operacyjne przechowujemy przez okres niezbedny do obslugi sprawy, realizacji uslugi oraz przez czas wynikajacy z przepisow podatkowych, rachunkowych lub przedawnienia roszczen.",
        "Dane przetwarzane na podstawie uzasadnionego interesu przechowujemy do czasu wniesienia skutecznego sprzeciwu albo ustania celu przetwarzania.",
      ],
    },
    {
      heading: "7. Prawa osoby, ktorej dane dotycza",
      paragraphs: [
        "Kazda osoba ma prawo dostepu do swoich danych, ich sprostowania, usuniecia, ograniczenia przetwarzania, przenoszenia danych, wniesienia sprzeciwu oraz zlozenia skargi do Prezesa Urzedu Ochrony Danych Osobowych.",
        "Wnioski dotyczace realizacji praw mozna kierowac na dane kontaktowe podane w niniejszym dokumencie. Odpowiedz zostanie udzielona bez zbednej zwloki, zgodnie z przepisami prawa.",
      ],
    },
    {
      heading: "8. Pliki cookies i dane techniczne",
      paragraphs: [
        "Strona moze korzystac z plikow cookies oraz podobnych technologii w celach technicznych, bezpieczenstwa, statystyki oraz prawidlowego dzialania serwisu.",
        "Ustawienia cookies mozna zmienic w przegladarce internetowej. Ograniczenie stosowania niektorych plikow cookies moze wplynac na funkcjonowanie strony.",
      ],
    },
    {
      heading: "9. Zmiany polityki",
      paragraphs: [
        "Polityka prywatnosci moze byc aktualizowana w przypadku zmian prawnych, organizacyjnych lub technologicznych. Aktualna wersja jest publikowana na tej stronie wraz z data ostatniej aktualizacji.",
      ],
    },
  ],
} as const;

export const termsContent = {
  title: "Terms & Conditions",
  description:
    "Warunki korzystania ze strony internetowej i zasady realizacji uslug pomocy drogowej WallMers.",
  updatedAt: "1 kwietnia 2026",
  sections: [
    {
      heading: "1. Postanowienia ogolne",
      paragraphs: [
        `Niniejszy dokument okresla zasady korzystania ze strony internetowej ${siteConfig.siteName} oraz ogolne warunki swiadczenia uslug pomocy drogowej przez ${siteConfig.companyName}.`,
        "Korzystanie ze strony oznacza akceptacje zasad opisanych w tym dokumencie w zakresie dotyczacym funkcjonowania serwisu. Zamowienie uslugi moze dodatkowo wymagac indywidualnego potwierdzenia warunkow przez telefon, WhatsApp lub e-mail.",
      ],
    },
    {
      heading: "2. Zakres uslug",
      paragraphs: [
        "WallMers swiadczy uslugi zwiazane z pomoca drogowa, w szczegolnosci holowanie, transport pojazdow, awaryjny rozruch, pomoc przy wymianie kola oraz dowoz paliwa.",
        "Dostepnosc konkretnej uslugi zalezy od miejsca zdarzenia, rodzaju pojazdu, warunkow drogowych, mozliwosci technicznych oraz aktualnej dyspozycyjnosci zespolu.",
      ],
    },
    {
      heading: "3. Zglaszanie zlecen",
      paragraphs: [
        "Klient powinien przekazac mozliwie dokladne informacje niezbedne do przyjecia zlecenia, w tym lokalizacje, opis problemu, dane pojazdu oraz oczekiwany rodzaj pomocy.",
        "Niepelne lub nieprawidlowe informacje moga wydluzyc czas realizacji, wplynac na wycene albo uniemozliwic wykonanie uslugi w deklarowanym zakresie.",
      ],
    },
    {
      heading: "4. Wycena i rozliczenia",
      paragraphs: [
        "Ceny zamieszczone na stronie maja charakter orientacyjny i nie stanowia oferty w rozumieniu przepisow kodeksu cywilnego. Ostateczna cena zalezy od rzeczywistych warunkow realizacji zlecenia.",
        "Koszt uslugi moze ulec zmianie w przypadku zmiany miejsca odbioru, miejsca docelowego, rodzaju pojazdu, stopnia uszkodzenia, koniecznosci uzycia dodatkowego sprzetu, realizacji nocnej lub w warunkach utrudnionego dostepu.",
      ],
    },
    {
      heading: "5. Realizacja uslugi",
      paragraphs: [
        "WallMers doklada starannosci, aby pomoc zostala zorganizowana mozliwie szybko, jednak czas dojazdu ma charakter orientacyjny i zalezy od warunkow drogowych, pogody, natężenia ruchu oraz innych zdarzen losowych.",
        "Przed rozpoczeciem realizacji zlecenia klient moze otrzymac wstepne potwierdzenie zakresu pomocy i szacunkowej ceny. Rozpoczecie uslugi oznacza akceptacje tych warunkow, chyba ze strony ustala inaczej.",
      ],
    },
    {
      heading: "6. Obowiazki klienta",
      paragraphs: [
        "Klient zobowiazany jest zapewnic dostep do pojazdu, przekazac prawdziwe informacje o jego stanie i, jezeli to konieczne, okazac dokument potwierdzajacy prawo do dysponowania pojazdem.",
        "Klient odpowiada za zabranie z pojazdu rzeczy osobistych oraz poinformowanie o nietypowych zagrozeniach, takich jak uszkodzenia konstrukcyjne, wycieki lub ladunek specjalny.",
      ],
    },
    {
      heading: "7. Odpowiedzialnosc",
      paragraphs: [
        "WallMers odpowiada za szkody wyrzadzone z winy umyslnej lub razacego niedbalstwa w zakresie przewidzianym przez prawo. Odpowiedzialnosc nie obejmuje szkód wynikajacych z wczesniejszego stanu technicznego pojazdu, ukrytych usterek ani nieprawidlowych informacji przekazanych przez klienta.",
        "WallMers nie odpowiada za opoznienia lub brak mozliwosci realizacji uslugi spowodowane sila wyzsza, dzialaniem organow publicznych, wypadkami, blokadami drogowymi lub warunkami zewnetrznymi, na ktore nie ma wplywu.",
      ],
    },
    {
      heading: "8. Odwolanie zlecenia",
      paragraphs: [
        "Jesli klient odwoluje zlecenie po wyslaniu zespolu lub lawety, WallMers moze obciazyc klienta kosztami dojazdu lub przygotowania uslugi, jezeli zostaly one juz poniesione.",
        "Wysokosc ewentualnej oplaty jest uzalezniona od stopnia zaawansowania realizacji i zostanie przekazana klientowi w sposob jasny i proporcjonalny.",
      ],
    },
    {
      heading: "9. Reklamacje",
      paragraphs: [
        "Reklamacje dotyczace uslug lub funkcjonowania strony mozna skladac telefonicznie lub e-mailowo. Zgloszenie powinno zawierac dane kontaktowe, opis sprawy oraz date zdarzenia.",
        "WallMers rozpatruje reklamacje bez zbednej zwloki i udziela odpowiedzi w rozsadnym terminie, z uwzglednieniem charakteru sprawy i dostepnosci informacji niezbednych do jej oceny.",
      ],
    },
    {
      heading: "10. Wlasnosc intelektualna i korzystanie ze strony",
      paragraphs: [
        "Tresc strony, w tym teksty, grafiki, uklad i materialy informacyjne, sa chronione prawem autorskim. Bez zgody WallMers nie mozna ich kopiowac, rozpowszechniac ani wykorzystywac komercyjnie w calosci lub w czesci.",
        "Zabronione jest korzystanie ze strony w sposob mogacy zaklocic jej dzialanie, naruszac bezpieczenstwo lub prawa innych osob.",
      ],
    },
    {
      heading: "11. Zmiany warunkow",
      paragraphs: [
        "Warunki moga byc aktualizowane w przypadku zmian oferty, prawa lub sposobu dzialania serwisu. Aktualna wersja jest publikowana na tej stronie z data ostatniej aktualizacji.",
      ],
    },
  ],
} as const;
