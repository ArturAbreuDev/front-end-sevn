import { createContext, useContext, ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ArticlesResponse, ArticlesContextType } from '../utils/types/types';

const ArticlesContext = createContext<ArticlesContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useArticlesContext = () => {
  const context = useContext(ArticlesContext);
  if (!context) {
    throw new Error('useArticlesContext must be used within an ArticlesProvider');
  }
  return context;
};

interface ArticlesProviderProps {
  children: ReactNode;
}

export const ArticlesProvider = ({ children }: ArticlesProviderProps) => {
  const { data: mainArticlesResponse, error: mainError, isLoading: mainLoading } = useQuery<ArticlesResponse>({
    queryKey: ["mainArticles"],
    queryFn: async () => {
      const response = await fetch(`https://back-end-sevn.onrender.com/articles/main`);
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    },
  });

  const { data: secondaryArticlesResponse, error: secondaryError, isLoading: secondaryLoading } = useQuery<ArticlesResponse>({
    queryKey: ["secondaryArticles"],
    queryFn: async () => {
      const response = await fetch(`https://back-end-sevn.onrender.com/articles/secondary`);
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    },
  });

  return (
    <ArticlesContext.Provider value={{ 
      mainArticles: mainArticlesResponse?.articles || [], 
      mainError, 
      mainLoading, 
      secondaryArticles: secondaryArticlesResponse?.articles || [], 
      secondaryError, 
      secondaryLoading 
    }}>
      {children}
    </ArticlesContext.Provider>
  );
};
