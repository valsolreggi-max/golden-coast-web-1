export type Language = 'es' | 'en' | 'de' | 'fr';

export interface LanguageOption {
  code: Language;
  label: string;
  nativeLabel: string;
  flag: string;
}

export interface NavTranslations {
  home: string;
  services: string;
  zones: string;
  about: string;
  testimonials: string;
  faq: string;
  contact: string;
  requestConsultation: string;
}

export interface HeroTranslations {
  eyebrow: string;
  title: string;
  narrative: string;
  credentialsTitle: string;
  credApi: string;
  credApiSub: string;
  credPerito: string;
  credPeritoSub: string;
  credLau: string;
  credLauSub: string;
  ctaOwner: string;
  ctaBuyer: string;
}

export interface HomeServicesTranslations {
  eyebrow: string;
  title: string;
  subtitle: string;
  s1Title: string;
  s1Desc: string;
  s2Title: string;
  s2Desc: string;
  s3Title: string;
  s3Desc: string;
  s4Title: string;
  s4Desc: string;
  s5Title: string;
  s5Desc: string;
  footerNote: string;
  viewAll: string;
}

export interface HomeTerritoryTranslations {
  eyebrow: string;
  title: string;
  p1: string;
  p2: string;
  viewDetails: string;
  discoverAll: string;
  imageAlt: string;
  imageCaption: string;
  imageCta: string;
  sitgesSub: string;
  vilanovaSub: string;
  cubellesSub: string;
  cunitSub: string;
  segurSub: string;
  calafellSub: string;
}

export interface HomeAboutTranslations {
  eyebrow: string;
  title: string;
  p1: string;
  p2: string;
  credentialsTitle: string;
  cta: string;
}

export interface HomeTestimonialTranslations {
  eyebrow: string;
  title: string;
  clientNames: string;
  clientOrigin: string;
  clientContext: string;
  p1: string;
  p2: string;
  p3: string;
  footerNote: string;
  badge: string;
  quote: string;
  author: string;
  ctaFull: string;
  ctaAll: string;
}

export interface HomeContactCtaTranslations {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaForm: string;
  ctaDirect: string;
  coverage: string;
  credentials: string;
}

export interface ContactTranslations {
  headerEyebrow: string;
  headerTitle: string;
  headerP1: string;
  headerP2: string;
  g1Title: string;
  g1Desc: string;
  g2Title: string;
  g2Desc: string;
  g3Title: string;
  g3Desc: string;
  formTitle: string;
  formSubtitle: string;
  fieldName: string;
  fieldNamePlaceholder: string;
  fieldEmail: string;
  fieldEmailPlaceholder: string;
  fieldPhone: string;
  fieldPhonePlaceholder: string;
  fieldInquiryType: string;
  optSell: string;
  optRent: string;
  optBuy: string;
  optRelocation: string;
  optLegal: string;
  optOther: string;
  fieldMessage: string;
  fieldMessagePlaceholder: string;
  submitButton: string;
  successTitle: string;
  successDesc: string;
  successNewButton: string;
  directPhone: string;
  directPhoneSub: string;
  directEmail: string;
  directCoverage: string;
  directCoverageSub: string;
}

export interface AboutMePageTranslations {
  eyebrow: string;
  title: string;
  block1Title: string;
  block2Title: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
  paragraphs: string[];
}

export interface FooterTranslations {
  col1Desc: string;
  col2Title: string;
  col3ContactTitle: string;
  col3Tel: string;
  col3Email: string;
  col3Location: string;
  col3CredentialsTitle: string;
  cred1: string;
  cred2: string;
  cred3: string;
  rights: string;
  legalNotice: string;
  privacyPolicy: string;
  cookiePolicy: string;
  backToTop: string;
  legalModalEyebrow: string;
  legalP1: string;
  legalP3: string;
  privacyModalEyebrow: string;
  privacyP1: string;
  privacyP2: string;
  cookieModalEyebrow: string;
  cookieP1: string;
  cookieP2: string;
}

export interface ModalTranslations {
  modalTopLine: string;
  modalTopLineSub: string;
  closeAria: string;
  territoryEyebrow: string;
  territoryTitlePrefix: string;
  territoryDesc: string;
  ownerEyebrow: string;
  ownerTitle: string;
  ownerDesc: string;
  buyerEyebrow: string;
  buyerTitle: string;
  buyerDesc: string;
  generalEyebrow: string;
  generalTitle: string;
  generalDesc: string;
  successBoutique: string;
  successTitle: string;
  successMessage: string;
  successQuote: string;
  close: string;
  zoneReference: string;
  changeTo: string;
  fullNameLabel: string;
  fullNamePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  intentionLabel: string;
  optSelling: string;
  optBuying: string;
  optAdvisory: string;
  messageLabel: string;
  optional: string;
  messagePlaceholderPrefix: string;
  privacyConsent: string;
  confidentialNotice: string;
  submitting: string;
  sendConsultation: string;
  zoneLabel: string;
}

export interface Translations {
  nav: NavTranslations;
  hero: HeroTranslations;
  homeServices: HomeServicesTranslations;
  homeTerritory: HomeTerritoryTranslations;
  homeAbout: HomeAboutTranslations;
  homeTestimonial: HomeTestimonialTranslations;
  homeContactCta: HomeContactCtaTranslations;
  aboutMePage: AboutMePageTranslations;
  contact: ContactTranslations;
  footer: FooterTranslations;
  modal: ModalTranslations;
}
