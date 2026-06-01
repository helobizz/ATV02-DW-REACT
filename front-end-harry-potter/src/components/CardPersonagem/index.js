import Link from "next/link";
import styles from "./CardPersonagem.module.css";

const CardPersonagem = ({ personagem }) => {
  return (
    <div className={styles.card}>

      <img
        src={personagem.image || "https://placehold.co/200x250?text=Sem+Foto"}
        alt={personagem.name}
        className={styles.foto}
      />

      <div className={styles.corpo}>
        <h3 className={styles.nome}>{personagem.name}</h3>

        {personagem.house && (
          <p className={styles.casa}>🏰 {personagem.house}</p>
        )}

        {personagem.actor && (
          <p className={styles.ator}>🎬 {personagem.actor}</p>
        )}

        <Link href={`/personagem/${personagem.id}`} className={styles.btnDetalhe}>
          Ver detalhes
        </Link>
      </div>

    </div>
  );
};

export default CardPersonagem;