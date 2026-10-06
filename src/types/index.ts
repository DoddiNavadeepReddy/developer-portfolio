export interface ExternalLinks {
  GITHUB_URL: string;
  HACKERRANK_URL: string;
  LEETCODE_URL: string;
  LINKEDIN_URL: string;
  INSTAGRAM_URL: string;
  BLOG_URL: string;
  HACKERRANK_REPO_URL: string;
  LEETCODE_REPO_URL: string;
  CRIMESHIELD_REPO_URL?: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  type: string;
  category: 'all' | 'iot' | 'algorithms';
  status: string;
  description: string;
  technologies: string[];
  highlight?: string;
  highlights?: string[];
  isFeatured?: boolean;
  badge?: string;
  problems?: string[];
  repoUrl?: string;
  liveUrl?: string;
  hackerrankUrl?: string;
  leetcodeUrl?: string;
}

export interface SkillItem {
  name: string;
  level: 'Learning' | 'Working Knowledge' | 'Exploring';
}

export interface SkillGroup {
  category: string;
  skills: SkillItem[];
}

export interface DigitalJourneyStep {
  number: string;
  title: string;
  items: string[];
  description: string;
}

export interface LearningArea {
  title: string;
  description: string;
  icon: string;
}

export interface ConnectCard {
  id: string;
  name: string;
  description: string;
  url: string;
  buttonText: string;
  icon: string;
  isConfigured: boolean;
}

export interface BlogDraft {
  title: string;
  category: string;
  status: string;
  readTime: string;
  summary: string;
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
