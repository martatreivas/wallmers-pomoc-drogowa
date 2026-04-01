import { siteConfig } from "@/config/site";
import { phoneHref } from "@/lib/contact";

export const content = {
  metadata: {
    defaultTitle: "Pomoc drogowa 24/7, holowanie i transport aut",
    defaultDescription:
      "WallMers zapewnia całodobową pomoc drogową, holowanie, transport samochodów i szybki dojazd w Warszawie i okolicach.",
    keywords: [
      "pomoc drogowa",
      "holowanie",
      "transport samochodów",
      "awaryjne uruchamianie auta",
      "wymiana koła",
      "dowóz paliwa",
      "pomoc drogowa Warszawa",
      "laweta 24/7",
    ],
  },
  navigation: [
    { href: "/", label: "Start" },
    { href: "/o-nas", label: "O nas" },
    { href: "/uslugi", label: "Usługi" },
    { href: "/kontakt", label: "Kontakt" },
  ],
  header: {
    announcement: "Dostępność 24/7 na terenie Warszawy i okolic",
    brandSubtitle: "Pomoc drogowa 24/7",
    ctaLabel: "Zadzwoń teraz",
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} ${siteConfig.siteName}. Wszelkie prawa zastrzeżone.`,
    note: "Szybka i bezpieczna pomoc drogowa dla kierowców przez całą dobę.",
  },
  home: {
    hero: {
      eyebrow: "Całodobowe wsparcie na drodze",
      title: "Pomoc drogowa WallMers",
      description:
        "Całodobowa pomoc drogowa, holowanie i transport samochodów dla kierowców, którzy potrzebują szybkiej i spokojnej obsługi w trasie.",
      primaryCta: {
        label: "Zadzwoń po pomoc",
        href: phoneHref,
      },
      secondaryCta: {
        label: "Poznaj usługi",
        href: "/uslugi",
      },
      stats: [
        { value: "24/7", label: "dyspozycyjność" },
        { value: "Szybko", label: "czas reakcji" },
        { value: "Bezpiecznie", label: "transport pojazdów" },
      ],
      statsLabel: "Najważniejsze atuty",
      panelLabel: "Zakres pomocy",
      panelTitle: "Pomoc dostępna wtedy, gdy jest potrzebna",
    },
    about: {
      id: "o-nas",
      kicker: "O nas",
      title: "Wsparcie drogowe, na którym można polegać",
      description:
        "WallMers to firma oferująca całodobową pomoc drogową i transport pojazdów. Stawiamy na szybki dojazd, spokojną komunikację i bezpieczną obsługę każdego zgłoszenia.",
      highlights: [
        {
          title: "Sprawna organizacja zgłoszenia",
          description:
            "Od pierwszego telefonu skupiamy się na szybkim ustaleniu lokalizacji, rodzaju awarii i najlepszego sposobu pomocy.",
        },
        {
          title: "Bezpieczeństwo i spokój kierowcy",
          description:
            "Zależy nam, aby klient wiedział, co dzieje się na każdym etapie pomocy i mógł szybko wrócić do swoich planów.",
        },
      ],
    },
    services: {
      id: "uslugi",
      kicker: "Usługi",
      title: "Pomagamy w najczęstszych sytuacjach awaryjnych",
      description:
        "Obsługujemy kierowców prywatnych i firmy, zapewniając wsparcie na miejscu zdarzenia oraz bezpieczny transport pojazdu.",
      items: [
        {
          title: "Holowanie",
          description:
            "Sprawny odbiór unieruchomionego pojazdu i bezpieczne holowanie do warsztatu, domu lub wskazanej lokalizacji.",
        },
        {
          title: "Transport samochodów",
          description:
            "Przewóz aut osobowych i dostawczych na lawecie z zachowaniem pełnego bezpieczeństwa podczas załadunku i transportu.",
        },
        {
          title: "Awaryjne uruchamianie silnika",
          description:
            "Pomoc przy rozładowanym akumulatorze i uruchomienie pojazdu z zewnętrznego źródła zasilania.",
        },
        {
          title: "Wymiana koła",
          description:
            "Szybka pomoc przy przebitej oponie lub uszkodzonym kole, aby jak najszybciej wrócić na trasę.",
        },
        {
          title: "Dowóz paliwa",
          description:
            "Dostarczamy paliwo na miejsce postoju, gdy zabraknie go w najmniej dogodnym momencie.",
        },
      ],
    },
    reasons: {
      id: "dlaczego-my",
      kicker: "Dlaczego my",
      title: "Liczy się szybkość, bezpieczeństwo i jasna komunikacja",
      items: [
        {
          title: "Szybki dojazd",
          description:
            "Priorytetem jest możliwie krótki czas reakcji i sprawna organizacja pomocy.",
        },
        {
          title: "Dostępność 24/7",
          description:
            "Jesteśmy gotowi do działania o każdej porze dnia i nocy, także w weekendy.",
        },
        {
          title: "Profesjonalna obsługa",
          description:
            "Każde zgłoszenie prowadzimy spokojnie, rzeczowo i z dbałością o komfort kierowcy.",
        },
        {
          title: "Bezpieczny transport",
          description:
            "Dbamy o bezpieczny załadunek, stabilne przewożenie auta i odpowiednie zabezpieczenie pojazdu.",
        },
      ],
    },
    contact: {
      id: "kontakt",
      kicker: "Kontakt",
      title: "Skontaktuj się z nami, gdy potrzebujesz wsparcia",
      description:
        "Przyjmujemy zgłoszenia przez całą dobę. Jeśli potrzebujesz pomocy drogowej, zadzwoń lub napisz.",
      phoneLabel: "Numer telefonu",
      emailLabel: "Adres e-mail",
      areaLabel: "Obszar działania",
      areaValue: siteConfig.serviceArea,
      availabilityLabel: "Dyspozycyjność",
      availabilityValue: "24 godziny na dobę, 7 dni w tygodniu",
      note:
        "Najszybciej pomagamy telefonicznie. Podczas zgłoszenia warto podać lokalizację, markę pojazdu i krótki opis problemu.",
    },
  },
  aboutPage: {
    kicker: "WallMers",
    title: "O nas",
    metadataDescription:
      "Poznaj WallMers i zobacz, jak podchodzimy do całodobowej pomocy drogowej, holowania i bezpiecznego transportu pojazdów.",
    lead:
      "Pomagamy kierowcom w sytuacjach awaryjnych, oferując spokojną obsługę, szybki dojazd i bezpieczny transport pojazdów.",
    paragraphs: [
      "WallMers to całodobowa pomoc drogowa przygotowana na najczęstsze problemy w trasie: awarie, brak paliwa, przebite koło czy konieczność holowania.",
      "Naszym celem jest odciążenie kierowcy w stresującej sytuacji. Działamy sprawnie, komunikujemy się jasno i dbamy o bezpieczeństwo pojazdu od pierwszego kontaktu aż do zakończenia usługi.",
    ],
    storyTitle: "Jak pracujemy",
    valuesTitle: "Najważniejsze wartości",
    values: [
      "Szybki kontakt i sprawna organizacja pomocy.",
      "Bezpieczna obsługa pojazdu na każdym etapie.",
      "Jasna komunikacja i pełna dyspozycyjność 24/7.",
    ],
  },
  servicesPage: {
    kicker: "Oferta",
    title: "Usługi pomocy drogowej",
    metadataDescription:
      "Sprawdź zakres usług WallMers: holowanie, transport aut, awaryjny rozruch, wymiana koła i dowóz paliwa.",
    lead:
      "Zapewniamy kompleksowe wsparcie na drodze oraz transport pojazdów dopasowany do sytuacji klienta.",
  },
  contactPage: {
    kicker: "Kontakt 24/7",
    title: "Kontakt",
    metadataDescription:
      "Skontaktuj się z WallMers. Całodobowa pomoc drogowa, szybki dojazd i obsługa kierowców w Warszawie i okolicach.",
    lead:
      "Jesteśmy dostępni przez całą dobę. Zadzwoń, aby szybko zgłosić problem, lub napisz wiadomość e-mail.",
    detailsTitle: "Dane kontaktowe",
    stepsTitle: "Jak przyspieszyć zgłoszenie",
    steps: [
      "Podaj dokładną lokalizację postoju.",
      "Opisz rodzaj problemu lub awarii.",
      "Przekaż markę i model pojazdu.",
    ],
  },
  common: {
    contactCtaTitle: "Potrzebujesz natychmiastowej pomocy na drodze?",
    contactCtaDescription:
      "Zadzwoń do WallMers i zgłoś lokalizację oraz rodzaj problemu. Pomożemy dobrać najszybsze rozwiązanie.",
    contactCtaButton: "Połącz telefonicznie",
    serviceHighlights: [
      "Holowanie pojazdów osobowych i dostawczych",
      "Transport samochodów na lawecie",
      "Awaryjny rozruch z zewnętrznego źródła",
      "Pomoc przy wymianie koła",
      "Dowóz paliwa na miejsce postoju",
    ],
  },
} as const;
