import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function Copyright() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center">
        <img src="/static/copyright.png" alt="" className="max-w-[370px]" />
        <p className="mb-0 text-justify indent-[35.45pt] font-sans text-[18px] font-[Open_Sans] leading-[2]">
          Nós do JumpManClub Brasil, somos um grupo autônomo, independente e sem
          fins lucrativos. Todo o nosso trabalho é unicamente para distribuir
          acessibilidade linguística aos jogos, pois muitas produtoras,
          infelizmente, não se preocupam em traduzir oficialmente seus jogos,
          restando a nós, fãs apaixonados pelos jogos, fazer este trabalho.
        </p>
        <img src="/static/custos.png" alt="" className="max-w-[370px]" />
        <p className="mb-0 text-justify indent-[35.45pt] font-sans text-[18px] font-[Open_Sans] leading-[2]">
          Como não temos nenhum vínculo com a Nintendo e outras empresas
          oficiais, não podemos cobrar pelo trabalho, pois não possuímos
          direitos para isso.
        </p>
        <br />
        <p className="mb-0 text-justify indent-[35.45pt] font-sans text-[18px] font-[Open_Sans] leading-[2]">
          No entanto, nosso objetivo sempre foi ajudar à comunidade que sempre
          pediu os jogos oficialmente em português, deixando-os mais acessíveis
          e divertidos.
        </p>
        <br />
        <p className="mb-0 text-justify indent-[35.45pt] font-sans text-[18px] font-[Open_Sans] leading-[2]">
          Infelizmente para manter nosso site no ar e continuar disponibilizando
          as traduções, temos os custos de manter o domínio e outros. E o
          mantemos através de doações voluntárias. Ninguém é obrigado a pagar
          para baixar uma tradução do JumpManClub Brasil, elas estarão
          acessíveis a todos.
        </p>
        <br />
        <p className="mb-0 text-justify indent-[35.45pt] font-sans text-[18px] font-[Open_Sans] leading-[2]">
          Caso você goste do trabalho e queira apoiar o projeto, você poderá
          doar qualquer quantia (qualquer mesmo), e será bem vinda a nos ajudar
          a manter tudo online e funcional até onde for possível. Para isso,
          basta acessar o nossa página de doação, e escolher a melhor forma pra
          você:
        </p>
        <img src="/static/doacao_botao.png" alt="" className="max-w-[280px]" />
        <img src="/static/pirate.png" alt="" className="max-w-[370px]" />
        <p className="mb-0 text-justify indent-[35.45pt] font-sans text-[18px] font-[Open_Sans] leading-[2]">
          Para acessar os recursos da tradução, o jogador precisa, infelizmente,
          possuir um console desbloqueado, o que não necessariamente faz com que
          o mesmo precise acessar jogos piratas.
        </p>
        <br />
        <p className="mb-0 text-justify indent-[35.45pt] font-sans text-[18px] font-[Open_Sans] leading-[2]">
          Nós do JumpManClub Brasil, apesar de disponibilizarmos a tradução
          apenas para consoles desbloqueados, não encorajamos o uso do recurso
          de desbloqueio para acesso a jogos não-oficiais. Por esse motivo
          nossas traduções funcionam perfeitamente em jogos oficiais digitais ou
          em cartuchos. Portanto, nós não nos responsabilizamos pelo mau uso do
          recurso do desbloqueio, visto que nossas traduções:
        </p>
        <br />
        <ul className="list-disc">
          <li>Não modificam o funcionamento do console;</li>
          <li>Não alteram arquivos importantes;</li>
          <li> Não substituem arquivos de sistema;</li>
          <li>Não prejudicam de forma alguma o console;</li>
          <li>Não altera arquivos do jogo;</li>
          <li>Não modifica recursos como jogabilidade, gráficos e etc.</li>
        </ul>
        <br />
        <p className="mb-0 text-justify indent-[35.45pt] font-sans text-[18px] font-[Open_Sans] leading-[2]">
          Nossas traduções são sempre testadas antes de serem lançadas,
          portanto, os testes de arquivos são feitos em consoles reais antes da
          disponibilização pública.
        </p>
        <br />
        <p className="mb-0 text-justify indent-[35.45pt] font-sans text-[18px] font-[Open_Sans] leading-[2]">
          Não encorajamos o uso de hacks e jogos modificados, pois não sabemos
          os efeitos negativos que trarão ao console!
        </p>
      </div>
    </Container>
  );
}
