import { useParams } from "react-router-dom";
import { useArticlesContext } from "../../context/QueryContext";
import Header from "../../components/Header/Header";
import "./Articles.css";
import Publicity from "../../components/Publicity/Publicity";

const Articles = () => {
  const { id } = useParams<{ id?: string }>();
  const { mainArticles, mainLoading, secondaryArticles, secondaryLoading } =
    useArticlesContext();

  if (mainLoading || secondaryLoading) {
    return <div>Carregando...</div>;
  }

  if (!id) {
    return <div>ID do artigo não fornecido</div>;
  }

  const articleId = parseInt(id, 10);
  const article =
    mainArticles?.find((article) => article.id === articleId) ||
    secondaryArticles?.find((article) => article.id === articleId);

  if (!article) {
    return <div>Artigo não encontrado</div>;
  }

  return (
    <div>
      <Header />
      <main className="container-articles">
        <span style={{ color: getLineColor(article.category) }}>
          {article.category}
        </span>
        <h1>{article.title}</h1>
        <h2>{article.summary}</h2>
        <span className="post-metadata">
          {article.date} as {article.time}, Por: {article.author}
        </span>
        <Publicity />
        {article.content.map((content, index) => (
          <div key={index}>
            {content.type === "paragraph" && <p>{content.text}</p>}
            {content.type === "quote" && <p>{content.text}</p>}
          </div>
        ))}
      </main>
    </div>
  );
};

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

export default Articles;
