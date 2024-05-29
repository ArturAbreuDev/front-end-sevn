import Header from "../../components/Header/Header";
import MainArticles from "../../components/MainArticles/MainArticles";
import Publicity from "../../components/Publicity/Publicity";
import { useArticlesContext } from "../../context/QueryContext";
import "./App.css";


function App() {
  const { secondaryArticles, secondaryLoading } =
    useArticlesContext();


  if (secondaryLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <Header />
      <main className="container-home">
      <Publicity />
      <MainArticles />
      <div className="articles-container">
        <h1 className="mobile-title">Ultimas noticias</h1>
        {secondaryArticles?.map((article) => (
          <ArticleCard
            id={article.id}
            key={article.id}
            lineColor={getLineColor(article.category)}
            text={article.title}
          />
        ))}
      </div>
      </main>
    </>
  );
}

const getLineColor = (category: string) => {
  switch (category) {
    case "ECONOMIA":
      return "#B82824";
    case "EDUCAÇÃO":
      return "#24538B";
    case "DIVERSIDADES":
      return "#248B28";
    default:
      return "#000000";
  }
};

export default App;
