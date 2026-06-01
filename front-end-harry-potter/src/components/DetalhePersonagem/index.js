import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Carregando from "../Carregando";
import styles from "./DetalhePersonagem.module.css";

const DetalhePersonagem = () => {
  const [personagem, setPersonagem] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro]             = useState(null);

  const router = useRouter();
  const { id } = router.query; 

  useEffect(() => {
    if (!id) return;

    const buscarPersonagem = async () => {
      try {
        const resposta = await fetch(`https://hp-api.onrender.com/api/character/${id}`);
        const dados = await resposta.json();

        setPersonagem(dados[0]);
      } catch (err) {
        setErro("Erro ao carregar personagem.");
        console.error(err);
      } finally {
        setCarregando(false);
      }
    };

    buscarPersonagem();
  }, [id]); 


  if (carregando)    return <Carregando />;
  if (erro)          return <p style={{ color: "red", textAlign: "center" }}>{erro}</p>;
  if (!personagem)   return <p style={{ textAlign: "center" }}>Personagem não encontrado.</p>;

  return (
    <div className={styles.detalhe}>

      <Link href="/" className={styles.btnVoltar}>← Voltar para a lista</Link>

      <div className={styles.card}>
        <img
          src={personagem.image || "https://placehold.co/300x400?text=Sem+Foto"}
          alt={personagem.name}
          className={styles.foto}
        />

        <div className={styles.info}>
          <h1 className={styles.nome}>{personagem.name}</h1>

          <p className={styles.campo}><span>Casa:</span> {personagem.house || "Sem casa"}</p>
          <p className={styles.campo}><span>Espécie:</span> {personagem.species || "Desconhecida"}</p>
          <p className={styles.campo}><span>Gênero:</span> {personagem.gender || "Desconhecido"}</p>
          <p className={styles.campo}><span>Nascimento:</span> {personagem.dateOfBirth || "Desconhecido"}</p>
          <p className={styles.campo}><span>Ancestralidade:</span> {personagem.ancestry || "Desconhecida"}</p>
          <p className={styles.campo}><span>Olhos:</span> {personagem.eyeColour || "Desconhecido"}</p>
          <p className={styles.campo}><span>Cabelo:</span> {personagem.hairColour || "Desconhecido"}</p>
          <p className={styles.campo}><span>Patrono:</span> {personagem.patronus || "Nenhum"}</p>
          <p className={styles.campo}><span>Ator/Atriz:</span> {personagem.actor || "Desconhecido"}</p>

          <p className={styles.campo}><span>Vivo:</span> {personagem.alive ? "Sim" : "Não"}</p>
          <p className={styles.campo}><span>Aluno de Hogwarts:</span> {personagem.hogwartsStudent ? "Sim" : "Não"}</p>
          <p className={styles.campo}><span>Professor de Hogwarts:</span> {personagem.hogwartsStaff ? "Sim" : "Não"}</p>
        </div>
      </div>

    </div>
  );
};

export default DetalhePersonagem;