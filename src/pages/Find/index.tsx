import axios from "axios";
import React, { useState } from "react";
import { ResultCard } from "type/ResultCard";
import { FormData } from "type/FormData";
import "./styles.css";
import Result from "components/Result";
import ButtonIcon from "components/ButtonIcon";
import FindLoader from "./FindLoader";

const Find = () => {
  const [resultCard, setResultCard] = useState<ResultCard>();

  const [isLoading, setLoading] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    login: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

   
    axios
      .get(`https://api.github.com/users/${formData.login}`)
      .then((response) => {
        setResultCard(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setResultCard(undefined);
        console.log(error);
      });


  
  };  

    
  

  return (
    <>
      <div className="find-main">
        <h1 className="find-title">Encontre um perfil Github</h1>
        <div className="find-container">
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <input
                className="find-input"
                type="text"
                name="login"
                value={formData.login}
                placeholder="Usuário Github"
                onChange={handleChange}
              />
              <ButtonIcon text="Começar" />
            </div>
          </form>
        </div>
      </div>

      {resultCard && (
        <div className="result-main">
          {isLoading? <FindLoader/> :
          <>
          <div>
            <img
              className="result-main-img"
              src={resultCard.avatar_url}
              alt=""
            />
          </div>
          <div className="result-main-description">
            <h2>Informações</h2>
            <div className="result-list">
              <Result title="Perfil:" description={resultCard.url} />
              <Result title="Seguidores:" description={resultCard.followers} />
              <Result title="Localidade:" description={resultCard.location} />
              <Result title="Nome:" description={resultCard.name} />
            </div>
          </div>
          </>
          }
        </div>
      )}
    </>
  );
};

export default Find;
