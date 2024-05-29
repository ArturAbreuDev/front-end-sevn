import { Link } from "react-router-dom";
import "./ArticleCard.css";

interface ArticleCardProps {
  id: number;
  text?: string;
  lineColor?: string;
}

function ArticleCard({
  id,
  lineColor = "#ff2d2d",
  text = "Quem não tiver valores a receber poderá ter nas próximas fases, diz BC",
}: ArticleCardProps) {
  return (
    <Link to={`/articles/${id}`}>
    <div className="article-card">
      <div className="line-article-card" style={{ backgroundColor: lineColor }} />
      <p className="title-article-card">{text}</p>
    </div>
    </Link>
  );
}



export default ArticleCard;
