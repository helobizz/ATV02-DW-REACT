import { useState, useEffect } from "react";
import Carregando from "../Carregando";
import CardPersonagem from "../CardPersonagem";
import styles from "./ListaPersonagens.module.css";

const ListaPersonagens = () => {

  const [personagens, setPersonagens] = useState([]); 
  const [carregando, setCarregando]   = useState(true); 
  const [erro, setErro]               = useState(null); 

  useEffect(() => {

    const buscarPersonagens = async () => {
      try {
        const resposta = await fetch("https://hp-api.onrender.com/api/characters");

        const dados = await resposta.json();

        setPersonagens(dados);

      } catch (err) {
        setErro("Erro ao carregar personagens. Tente novamente.");
        console.error(err);
      } finally {
        setCarregando(false);
      }
    };

    buscarPersonagens(); 

  }, []);


  if (carregando) return <Carregando />;
  if (erro) return <p style={{ color: "red", textAlign: "center" }}>{erro}</p>;

  return (
    <div>
      <h2 className={styles.titulo}>Personagens de Harry Potter</h2>
      <p className={styles.quantidade}>{personagens.length} personagens encontrados</p>

      <div className={styles.grade}>
        {personagens.map((personagem) => (
          <CardPersonagem key={personagem.id} personagem={personagem} />
        ))}
      </div>
    </div>
  );
};

export default ListaPersonagens;