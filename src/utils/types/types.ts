export interface ArticleContent {
  type: string;
  text: string;
}
export interface ArticlesContextType {
  mainArticles?: Article[];
  mainError?: unknown;
  mainLoading: boolean;
  secondaryArticles?: Article[];
  secondaryError?: unknown;
  secondaryLoading: boolean;
}

export interface Article {
  id: number;
  category: string;
  title: string;
  summary: string;
  content: ArticleContent[];
  image: string;
  date: string,
  time: string,
  author: string
}

export interface ArticlesResponse {
  articles: Article[];
}
