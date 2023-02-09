import "./styles.css";
import "assets/styles/custom.scss";
import ButtonIcon from "components/ButtonIcon";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-main">
      <div>
        <h1>Desafio Github API</h1>
        <h2>DevSuperior - Escola de programação</h2>
      </div>
      <div className="home-link">
        <Link to="/find" >
          <ButtonIcon text="Começar" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
