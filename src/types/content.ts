export interface PartnerContent {
  id?: number;
  section_title: string;
  main_title: string;
  main_description: string;
  write_title: string;
  write_question: string;
  write_bullet1: string;
  write_bullet2: string;
  write_bullet3: string;
  write_bullet4: string;
  sponsor_title: string;
  sponsor_question: string;
  sponsor_bullet1: string;
  sponsor_bullet2: string;
  sponsor_bullet3: string;
  sponsor_bullet4: string;
  advise_title: string;
  advise_question: string;
  advise_bullet1: string;
  advise_bullet2: string;
  advise_bullet3: string;
  advise_bullet4: string;
}

export interface HeroContent {
  id?: number;
  title: string;
  subtitle: string;
  p1: string;
  p2: string;
}

export interface CommunityContent {
  id?: number;
  heading: string;
  title: string;
  paragraph: string;
}
