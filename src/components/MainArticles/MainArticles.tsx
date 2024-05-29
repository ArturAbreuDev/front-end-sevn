import { Link } from "react-router-dom";
import { useArticlesContext } from "../../context/QueryContext";
import "./MainArticles.css";

function MainArticles() {
  const { mainArticles, mainLoading } = useArticlesContext();

  if (mainLoading) {
    return <div>Loading...</div>;
  }

  const getSpanColor = (category: string) => {
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

  return (
    <div className="main-articles-container">
      {mainArticles?.slice(0, 1).map((article) => (
        <Link to={`/articles/${article.id}`} key={article.id}>
          <div className="main-content">
            <span style={{ color: getSpanColor(article.category) }}>
              {article.category}
            </span>
            <h1>{article.title}</h1>
          </div>
        </Link>
      ))}
      <div className="container-articles-card">
      {mainArticles?.slice(1).map((article) => (
        <Link to={`/articles/${article.id}`} key={article.id}>
          <div className="main-articles-card">
            <img src={article.image} alt={article.title} />
            <span style={{ color: getSpanColor(article.category) }}>
              {article.category}
            </span>
            <p>{article.title}</p>
          </div>
        </Link>
      ))}
      </div>
    </div>
  );
}

export default MainArticles;
