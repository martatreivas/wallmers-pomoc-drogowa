import { siteConfig } from "@/config/site";

export const content = {
  metadata: {
    defaultTitle: "Pomoc drogowa 24/7, holowanie i transport pojazdów",
    defaultDescription:
      "WallMers zapewnia całodobową pomoc drogową, holowanie, transport aut oraz szybki kontakt dla kierowców w Warszawie i okolicach.",
    keywords: [
      "pomoc drogowa",
      "pomoc drogowa Warszawa",
      "holowanie 24/7",
      "laweta Warszawa",
      "transport samochodów",
      "awaryjny rozruch",
      "wymiana koła",
      "dowóz paliwa",
    ],
  },
  navigation: [
    { href: "/uslugi", label: "Usługi" },
    { href: "/kontakt", label: "Kontakt" },
    { href: "/o-nas", label: "O nas" },
  ],
  legalNavigation: [
    { href: "/polityka-prywatnosci", label: "Privacy Policy" },
    { href: "/terms-and-conditions", label: "Terms & Conditions" },
  ],
  header: {
    announcement: "Dyspozytornia 24/7 | Warszawa i okolice | Szybka organizacja pomocy na drodze",
    brandSubtitle: "Roadside Assistance 24/7",
    ctaLabel: "Skontaktuj się",
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} ${siteConfig.siteName}. Wszelkie prawa zastrzeżone.`,
    note:
      "Całodobowa organizacja pomocy drogowej, holowania i transportu pojazdów dla klientów indywidualnych oraz flot.",
  },
  home: {
    hero: {
      eyebrow: "Pomoc drogowa i holowanie 24/7",
      title: "WallMers Pomoc Drogowa 24/7",
      description:
        "Obsługujemy awarie, kolizje, problemy z rozruchem i transport pojazdów. Działamy sprawnie, rzeczowo i z naciskiem na bezpieczeństwo kierowcy oraz auta.",
      primaryCtaLabel: "Skontaktuj się",
      stats: [
        { value: "24/7", label: "dyspozycyjność" },
        { value: "Warszawa", label: "i okolice" },
        { value: "Szybka", label: "koordynacja zgłoszeń" },
      ],
      statsLabel: "Najważniejsze informacje",
      panelLabel: "Panel dyspozytorski",
      panelTitle: "Pomoc dostępna dla kierowców prywatnych i firm",
      dispatchItems: [
        "Holowanie pojazdów po awarii lub kolizji",
        "Transport samochodów osobowych i dostawczych",
        "Wsparcie na miejscu zdarzenia, jeśli auto nie wymaga lawety",
      ],
    },
    about: {
      id: "o-nas",
      kicker: "O nas",
      title: "Zespół nastawiony na szybką decyzję i bezpieczne działanie",
      description:
        "WallMers organizuje pomoc drogową w sposób uporządkowany i przewidywalny. Priorytetem jest sprawny kontakt, właściwa ocena sytuacji i bezpieczne doprowadzenie sprawy do końca.",
      highlights: [
        {
          title: "Jasny proces zgłoszenia",
          description:
            "Już przy pierwszym kontakcie zbieramy najważniejsze informacje: lokalizację, typ pojazdu i charakter problemu, aby dobrać właściwy zakres pomocy.",
        },
        {
          title: "Komunikacja bez chaosu",
          description:
            "Kierowca otrzymuje konkretne informacje o dalszych krokach, orientacyjnym czasie dojazdu i sposobie realizacji zlecenia.",
        },
      ],
    },
    services: {
      id: "uslugi",
      kicker: "Usługi",
      title: "Zakres pomocy drogowej",
      description:
        "Realizujemy zgłoszenia dotyczące unieruchomionych pojazdów, awarii eksploatacyjnych i transportu auta do wskazanej lokalizacji.",
      items: [
        {
          title: "Holowanie",
          description:
            "Bezpieczny odbiór pojazdu i transport do warsztatu, domu, serwisu flotowego lub innego wskazanego miejsca.",
        },
        {
          title: "Transport pojazdów",
          description:
            "Przewóz samochodów osobowych i dostawczych lawetą z uwzględnieniem gabarytu, prześwitu i stanu technicznego auta.",
        },
        {
          title: "Awaryjny rozruch",
          description:
            "Uruchomienie pojazdu z rozładowanym akumulatorem bez konieczności organizowania pełnego holowania.",
        },
        {
          title: "Wymiana koła",
          description:
            "Pomoc przy przebitej oponie lub uszkodzonym kole, aby możliwie szybko przywrócić auto do dalszej jazdy.",
        },
        {
          title: "Dowóz paliwa",
          description:
            "Dostarczenie paliwa na miejsce postoju, gdy pojazd zatrzyma się z powodu pustego zbiornika.",
        },
        {
          title: "Wsparcie po kolizji",
          description:
            "Zabezpieczenie organizacji transportu pojazdu po zdarzeniu drogowym oraz sprawna koordynacja dalszych działań.",
        },
      ],
    },
    pricing: {
      id: "cennik",
      kicker: "Cennik",
      title: "Orientacyjne ceny usług",
      description:
        "Poniższe stawki pomagają szybko ocenić rząd kosztów. Ostateczna wycena zależy od rodzaju pojazdu, miejsca zdarzenia i zakresu działań na miejscu.",
    },
    reasons: {
      id: "dlaczego-my",
      kicker: "Dlaczego WallMers",
      title: "Liczy się czas reakcji, bezpieczeństwo i przewidywalny proces",
      items: [
        {
          title: "Dostępność 24/7",
          description:
            "Przyjmujemy zgłoszenia przez całą dobę, również w weekendy i dni wolne od pracy.",
        },
        {
          title: "Sprawna organizacja pomocy",
          description:
            "Dobieramy zakres działań do sytuacji, aby skrócić czas postoju i uniknąć niepotrzebnych opóźnień.",
        },
        {
          title: "Bezpieczny transport",
          description:
            "Każdy pojazd jest przygotowywany do przewozu z naciskiem na stabilny załadunek i prawidłowe zabezpieczenie.",
        },
        {
          title: "Obsługa dla klientów i flot",
          description:
            "Wspieramy zarówno kierowców prywatnych, jak i firmy potrzebujące powtarzalnej, uporządkowanej obsługi.",
        },
      ],
    },
    contact: {
      id: "kontakt",
      kicker: "Kontakt",
      title: "Jeden kontakt i od razu przechodzimy do działania",
      description:
        "Najwygodniej skontaktować się telefonicznie lub przez WhatsApp. Dzięki temu możemy szybciej zebrać dane i rozpocząć organizację pomocy.",
      phoneLabel: "Telefon",
      emailLabel: "E-mail",
      whatsappLabel: "WhatsApp",
      areaLabel: "Obszar działania",
      areaValue: siteConfig.serviceArea,
      availabilityLabel: "Dostępność",
      availabilityValue: "24 godziny na dobę, 7 dni w tygodniu",
      note:
        "Podczas zgłoszenia przygotuj lokalizację, markę i model pojazdu oraz krótki opis sytuacji. To przyspiesza dobór odpowiedniej usługi.",
    },
  },
  aboutPage: {
    kicker: "WallMers",
    title: "O nas",
    metadataDescription:
      "Poznaj sposób działania WallMers i zobacz, jak organizujemy całodobową pomoc drogową, holowanie i transport pojazdów.",
    lead:
      "Tworzymy serwis pomocy drogowej oparty na szybkiej komunikacji, odpowiedzialnej organizacji i spokojnym prowadzeniu klienta przez całą usługę.",
    paragraphs: [
      "WallMers to pomoc drogowa przygotowana do reagowania w sytuacjach wymagających szybkiej decyzji: awaria, brak możliwości dalszej jazdy, przebita opona, rozładowany akumulator czy konieczność przetransportowania auta.",
      "Zależy nam na tym, aby kierowca od pierwszej rozmowy wiedział, co dzieje się dalej. Dlatego stawiamy na konkretny wywiad, jasny komunikat i bezpieczną realizację każdego zlecenia.",
    ],
    storyTitle: "Jak pracujemy",
    valuesTitle: "Standard działania",
    values: [
      "Szybkie przyjęcie zgłoszenia i weryfikacja sytuacji.",
      "Dobór usługi do realnego problemu, bez zbędnych etapów.",
      "Bezpieczna obsługa pojazdu oraz czytelna komunikacja z klientem.",
    ],
  },
  servicesPage: {
    kicker: "Oferta",
    title: "Usługi pomocy drogowej",
    metadataDescription:
      "Sprawdź zakres usług WallMers: holowanie, transport aut, awaryjny rozruch, wymianę koła, dowóz paliwa i pomoc po kolizji.",
    lead:
      "Realizujemy pomoc na miejscu zdarzenia i transport pojazdów z naciskiem na bezpieczeństwo, sprawny kontakt i przejrzystą wycenę.",
  },
  contactPage: {
    kicker: "Kontakt 24/7",
    title: "Kontakt",
    metadataDescription:
      "Skontaktuj się z WallMers przez telefon, WhatsApp lub e-mail. Całodobowa pomoc drogowa, szybki kontakt i organizacja wsparcia w Warszawie i okolicach.",
    lead:
      "Jeśli auto nie może kontynuować jazdy, skontaktuj się z nami od razu. Im szybciej dostaniemy podstawowe informacje, tym szybciej przygotujemy odpowiednią pomoc.",
    detailsTitle: "Dane kontaktowe",
    stepsTitle: "Jak przyspieszyć zgłoszenie",
    steps: [
      "Podaj dokładną lokalizację postoju lub zdarzenia.",
      "Opisz, czy auto wymaga lawety, rozruchu czy pomocy na miejscu.",
      "Przekaż markę, model i krótki opis uszkodzenia lub objawów.",
    ],
  },
  common: {
    contactCtaTitle: "Potrzebujesz pomocy drogowej teraz?",
    contactCtaDescription:
      "Skontaktuj się jednym kliknięciem. W modalu znajdziesz bezpośrednie przejście do WhatsApp oraz szybkie połączenie telefoniczne.",
    contactCtaButton: "Skontaktuj się",
    serviceHighlights: [
      "Holowanie pojazdów osobowych i dostawczych",
      "Transport aut lawetą na krótkich i dalszych trasach",
      "Awaryjny rozruch i pomoc przy wymianie koła",
      "Dowóz paliwa oraz organizacja wsparcia po kolizji",
    ],
    contactModalTitle: "Szybki kontakt",
    contactModalDescription:
      "Wybierz kanał kontaktu. Telefon sprawdzi się przy pilnych zgłoszeniach, a WhatsApp ułatwia wysłanie lokalizacji i zdjęć pojazdu.",
    callButton: "Zadzwoń",
    whatsappButton: "WhatsApp",
    closeLabel: "Zamknij okno kontaktu",
    cookieTitle: "Polityka prywatności i cookies",
    cookieDescription:
      "Ta strona wykorzystuje pliki cookies niezbędne do działania serwisu oraz podstawowych ustawień interfejsu. Szczegóły znajdziesz w polityce prywatności.",
    cookieAccept: "Akceptuję",
    cookieNecessary: "Tylko niezbędne",
    cookieLinkLabel: "Privacy Policy",
  },
} as const;
