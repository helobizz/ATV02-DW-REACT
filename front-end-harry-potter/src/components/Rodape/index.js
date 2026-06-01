import styles from "./Rodape.module.css";

const Rodape = () => {
  return (
    <footer className={styles.rodape}>
      <p>HP Personagens &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Rodape;