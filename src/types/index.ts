export interface Project {
  id: string;
  number: string;
  title: string;
  type: string;
  category: 'all' | 'iot' | 'academic' | 'dsa';
  status: string;
  description: string;
  technologies: string[];
  modules?: string[];
  githubUrl?: string;
  highlights?: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Activity {
  number: string;
  title: string;
  summary: string;
  details: string;
  technologies: string[];
}

export interface Pillar {
  title: string;
  description: string;
}
