export interface Article {
  id: string | number;
  title: string;
  subtitle?: string;
  description: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
}
