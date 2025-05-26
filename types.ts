
export interface ContactInfo {
  name: string;
  email: string;
  phone?: string;
  githubUrl: string;
  blogUrl?: string;
  linkedinUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: React.ReactNode; // Allow for more complex descriptions with JSX
  imageUrl: string;
  technologies: string[];
  projectUrl?: string;
  sourceCodeUrl?: string;
  role?: string;
  duration?: string;
}

export enum TimelineEventStatus {
  COMPLETED = 'completed',
  IN_PROGRESS = 'in-progress',
  PLANNED = 'planned',
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  status: TimelineEventStatus;
  icon?: React.ReactNode;
}
