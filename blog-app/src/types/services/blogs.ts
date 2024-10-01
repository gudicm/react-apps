export interface BlogShort {
  id: number;
  title: string;
  description: string;
  score?: number;
}

export interface Blog extends BlogShort {
  content: string;
}
