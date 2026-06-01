import Head from "next/head";
import Menu from "@/components/Menu";
import Container from "@/components/Container";
import Rodape from "@/components/Rodape";
import DetalhePersonagem from "@/components/DetalhePersonagem";

export default function PaginaPersonagem() {
  return (
    <>
      <Head>
        <title>HP - Detalhe do Personagem</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Menu />
        <Container>
          <DetalhePersonagem />
        </Container>
      </main>
      <Rodape />
    </>
  );
}