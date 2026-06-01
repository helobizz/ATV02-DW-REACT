import Head from "next/head";
import Menu from "@/components/Menu";
import Container from "@/components/Container";
import Rodape from "@/components/Rodape";
import ListaPersonagens from "@/components/ListaPersonagens";

export default function Inicio() {
  return (
    <>
      <Head>
        <title>HP Personagens</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Menu />
        <Container>
          <ListaPersonagens />
        </Container>
      </main>
      <Rodape />
    </>
  );
}