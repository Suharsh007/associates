
export interface Project {
  title: string;
  scope: string;
  description: string;
  location?: string;
  image?: string;
  type: 'flagship' | 'major' | 'ongoing';
}

export interface Sector {
  title: string;
  description: string;
  icon: string;
}

export interface Client {
  name: string;
  category: 'fmcg' | 'industrial';
}

export interface Milestone {
  value: string;
  label: string;
}
