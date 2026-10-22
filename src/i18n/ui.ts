export type Locale = 'en' | 'fr';

export type SectionKey =
  | 'about'
  | 'events'
  | 'papers'
  | 'presentations'
  | 'projects'
  | 'teams'
  | 'join'
  | 'faq';

export const SECTION_KEYS: SectionKey[] = [
  'about',
  'events',
  'papers',
  'presentations',
  'projects',
  'teams',
  'join',
  'faq',
];

export const ui = {
  en: {
    siteTitle: 'UdeM AI — Artificial Intelligence Club @ Université de Montréal',
    siteDescription:
      'UdeM AI is the student Artificial Intelligence community and research lab at Université de Montréal (DIRO). Weekly paper distillation, workshops, and ML research projects.',
    topBar: {
      host: 'udem-ai@umontreal',
      langSwitchLabel: 'FR',
      langSwitchHref: '/fr',
      homeLabel: '~ / home',
    },
    hero: {
      greeting: 'Artificial Intelligence Club of',
      location: '@ Université de Montréal',
      tagline:
        'Get Real with AI. Hands-on workshops. Outcome-driven research squads. Weekly paper distillation.',
    },
    posts: {
      heading: 'Posts & Meeting Notes',
      subheading: 'Latest writing and research notes from UdeM AI.',
      readFull: 'Read full note →',
      expandInline: '[+] Expand full article inline',
      collapseInline: '[-] Collapse article',
      backHome: '< Back to Mainpage',
    },
    clubDetails: {
      boxTitle: '── Club Details ──',
      nameLabel: 'Name:',
      nameValue: 'UdeM AI_',
      fullNameLabel: 'Full Name:',
      fullNameValue: 'Artificial Intelligence Club @ UdeM',
      locationLabel: 'Location:',
      locationValue: 'Université de Montréal (AA-1207)',
      missionLabel: 'Mission:',
      missionValue: 'AI Research, Workshops & Paper Distillation',
    },
    systemNav: {
      boxTitle: '── System Navigation ──',
      about: 'Club Information',
      events: 'Upcoming & Past Events',
      papers: 'Paper of the Week & Archive',
      presentations: 'Workshop Slides (PDF)',
      projects: 'Student Lab & Projects',
      teams: 'Executive & Advisors',
      join: 'Recruitment & Collab',
      faq: 'View Questions',
      posts: 'Meeting Notes & Blog',
    },
    projectStatus: {
      boxTitle: '── Project Status ──',
      eventsLabel: 'Meetings:',
      eventsValue: 'Fridays 12:45–13:45 (AA-1207)',
      recruitmentLabel: 'Recruitment:',
      recruitmentValue: 'Open for all students',
      contactLabel: 'Contact:',
      contactValue: 'anas.el-ghoudane@umontreal.ca',
      faqLabel: 'FAQ:',
      faqValue: 'View FAQ →',
    },
    sections: {
      aboutBox: '── 01 // About UdeM AI ──',
      eventsBox: '── 02 // Events & Weekly Schedule ──',
      papersBox: '── 03 // Weekly Material & Paper of the Week ──',
      presentationsBox: '── 04 // Presentations & Workshop Slides ──',
      projectsBox: '── 05 // Student Research Lab & Projects ──',
      teamsBox: '── 06 // Our Team — Executive & Advisors ──',
      joinBox: '── 07 // Join Us — Recruitment & Collaboration ──',
      faqBox: '── 08 // Frequently Asked Questions ──',
      upcomingHeading: '── Upcoming & Recurring Sessions ──',
      pastHeading: '── Recent & Past Sessions ──',
      paperOfTheWeek: '★ PAPER OF THE WEEK',
      previousPapers: '── Previous Papers Archive ──',
      readPaper: '[Read Paper / arXiv ↗]',
      openPdf: '[Open PDF ↗]',
      previewPdf: '[Toggle Inline PDF]',
      executiveHeading: '── Executive Council ──',
      executiveSub:
        'Leadership team responsible for operations, research distillation, and workshops.',
      advisorsHeading: '── Club Advisors ──',
      advisorsSub: 'Mentorship, strategic continuity, and research guidance.',
    },
    cli: {
      placeholder:
        'type help for commands (about, events, papers, teams, join, home, lang, clear...)',
      helpOutput:
        'Available commands: home | about | events | papers | presentations | projects | teams | join | faq | ls | lang [en|fr] | discord | linkedin | instagram | email | clear',
      switchedLang: 'Switching language to Français (/fr)...',
      jumpingTo: 'Navigating to page:',
      unknownCmd: 'Command not found. Type "help" for a list of commands.',
    },
  },
  fr: {
    siteTitle:
      'UdeM AI — Club d’Intelligence Artificielle @ Université de Montréal',
    siteDescription:
      'UdeM AI est le club étudiant et laboratoire de recherche en intelligence artificielle de l’Université de Montréal (DIRO). Distillation de papiers, ateliers et projets de recherche.',
    topBar: {
      host: 'udem-ai@umontreal',
      langSwitchLabel: 'EN',
      langSwitchHref: '/',
      homeLabel: '~ / accueil',
    },
    hero: {
      greeting: 'Club Intelligence Artificielle de',
      location: '@ Université de Montréal',
      tagline:
        'Passez à l’action avec l’IA. Ateliers pratiques. Projets de recherche. Mentors experts.',
    },
    posts: {
      heading: 'Articles & Notes de Rencontre',
      subheading: 'Dernières publications et notes stratégiques d’UdeM AI.',
      readFull: 'Lire l’article complet →',
      expandInline: '[+] Dérouler l’article complet ici',
      collapseInline: '[-] Réduire l’article',
      backHome: '< Retour à l’accueil',
    },
    clubDetails: {
      boxTitle: '── Détails du Club ──',
      nameLabel: 'Nom :',
      nameValue: 'UdeM AI_',
      fullNameLabel: 'Nom complet :',
      fullNameValue: 'Club d’Intelligence Artificielle @ UdeM',
      locationLabel: 'Lieu :',
      locationValue: 'Université de Montréal (AA-1207)',
      missionLabel: 'Mission :',
      missionValue: 'Recherche IA, Ateliers & Distillation de Papiers',
    },
    systemNav: {
      boxTitle: '── Navigation Système ──',
      about: 'Informations sur le club',
      events: 'Événements à venir & passés',
      papers: 'Papier de la semaine & Archives',
      presentations: 'Diapositives d’ateliers (PDF)',
      projects: 'Lab étudiant & Projets',
      teams: 'Comité exécutif & Conseillers',
      join: 'Recrutement & Collaboration',
      faq: 'Questions fréquentes',
      posts: 'Notes de rencontre & Blogue',
    },
    projectStatus: {
      boxTitle: '── Statut du Système ──',
      eventsLabel: 'Réunions :',
      eventsValue: 'Vendredis 12h45–13h45 (AA-1207)',
      recruitmentLabel: 'Recrutement :',
      recruitmentValue: 'Ouvert à tous les étudiants',
      contactLabel: 'Contact :',
      contactValue: 'anas.el-ghoudane@umontreal.ca',
      faqLabel: 'FAQ :',
      faqValue: 'Voir la FAQ →',
    },
    sections: {
      aboutBox: '── 01 // À propos d’UdeM AI ──',
      eventsBox: '── 02 // Événements & Horaire Hebdomadaire ──',
      papersBox: '── 03 // Matériel Hebdomadaire & Papier de la Semaine ──',
      presentationsBox: '── 04 // Présentations & Diapositives d’Ateliers ──',
      projectsBox: '── 05 // Lab de Recherche Étudiant & Projets ──',
      teamsBox: '── 06 // Notre Équipe — Exécutif & Conseillers ──',
      joinBox: '── 07 // Nous Rejoindre — Recrutement & Partenariats ──',
      faqBox: '── 08 // Foire Aux Questions (FAQ) ──',
      upcomingHeading: '── Séances Récurrentes & À Venir ──',
      pastHeading: '── Séances Récentes & Passées ──',
      paperOfTheWeek: '★ PAPIER DE LA SEMAINE',
      previousPapers: '── Archives des Papiers Précédents ──',
      readPaper: '[Lire le papier / arXiv ↗]',
      openPdf: '[Ouvrir le PDF ↗]',
      previewPdf: '[Aperçu PDF intégré]',
      executiveHeading: '── Comité Exécutif ──',
      executiveSub:
        'Équipe de direction responsable des opérations, de la distillation de papiers et des ateliers.',
      advisorsHeading: '── Conseillers du Club ──',
      advisorsSub: 'Orientation stratégique, mentorat et continuité.',
    },
    cli: {
      placeholder:
        'tapez help pour les commandes (about, events, papers, teams, join, home, lang, clear...)',
      helpOutput:
        'Commandes disponibles : home | about | events | papers | presentations | projects | teams | join | faq | ls | lang [en|fr] | discord | linkedin | instagram | email | clear',
      switchedLang: 'Passage de la langue à English (/)...',
      jumpingTo: 'Navigation vers la page :',
      unknownCmd:
        'Commande introuvable. Tapez "help" pour voir la liste des commandes.',
    },
  },
} as const;
