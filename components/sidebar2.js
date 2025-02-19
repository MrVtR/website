import SpinningCoin from "@/components/SpinningCoin";
import AnimatedSocialIcons from "@/components/AnimatedSocialIcons";

export default function Sidebar(props) {
  const years = [
    { year: 2024, url: "/year/2024" },
    { year: 2023, url: "/year/2023" },
    { year: 2022, url: "/year/2022" },
    { year: 2021, url: "/year/2021" },
    { year: 2020, url: "/year/2020" },
    { year: 2019, url: "/year/2019" },
    { year: 2018, url: "/year/2018" },
  ];
  const outros = [
    { nome: "Tutoriais de Instalação", url: "/category/tutoriais" },
  ];

  let icons_list_url = [
    {
      name: "facebook",
      url: "https://www.facebook.com/groups/162825860900247",
    },
    {
      name: "x",
      url: "https://x.com/JumpmanClubBR",
    },
    {
      name: "discord",
      url: "https://discord.gg/ag6YHvzWVD",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/jumpmanclubbrasil/",
    },
    {
      name: "youtube",
      url: "https://www.youtube.com/@Jumpmanclubbrasil",
    },
    {
      name: "whatsapp",
      url: "https://chat.whatsapp.com/CQL9bbyV5ZTAyzalhWZ0S0",
    },
  ];
  return (
    <div
      className="mx-auto flex  hidden flex-col gap-[50px] self-start p-5  dark:text-gray-100 md:hidden  lg:flex"
      style={{
        margin: "40px",
        maxWidth: "340px",
        backgroundColor: "rgb(0, 0, 0, 0.1)",
        borderRadius: "15px",
      }}
    >
      <a href="/doacao">
        <div className="flex flex-col items-center justify-center">
          <b>
            <h1
              style={{
                fontSize: "20px",
                backgroundColor: "red",
                padding: "8px 16px",
                textAlign: "center",
                color: "white",
                width: "320px",
                borderRadius: "25px",
              }}
            >
              Doe e incentive
            </h1>
          </b>
          <b>
            <p style={{ margin: "20px 10px", textAlign: "justify" }}>
              Se você curte nosso trabalho, faça uma doação de qualquer valor,
              irá nos ajudar d+ com os custos deste trabalho que apesar de tudo,
              nós distribuímos gratuitamente!
            </p>
          </b>
          <SpinningCoin />
        </div>
      </a>
      <div className="flex flex-col items-center justify-center">
        <b>
          <h1 className="w-80 rounded-[25px] bg-red-500 px-4 py-2 text-center text-[20px] text-white">
            Nos sigam nas redes sociais
          </h1>
        </b>
        <AnimatedSocialIcons icons_list_url={icons_list_url} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <b>
          <h1 className="mb-[30px] w-80 rounded-[25px] bg-red-500 px-4 py-2 text-center text-[20px] text-white">
            Marcadores
          </h1>
        </b>
        <div className="flex flex-col gap-3">
          {years.map(({ year, url }) => (
            <a key={year} href={url} className="no-underline">
              <h1 className="w-80 rounded-[25px] bg-red-500 px-4 py-2 text-center text-[20px] text-white">
                Traduções em {year}
              </h1>
            </a>
          ))}
          {outros.map(({ nome, url }) => (
            <a key={nome} href={url} className="no-underline">
              <h1 className="w-80 rounded-[25px] bg-red-500 px-4 py-2 text-center text-[20px] text-white">
                {nome}
              </h1>
            </a>
          ))}
        </div>
      </div>

      <iframe
        src="https://discord.com/widget?id=371132558500560896&theme=dark"
        allowtransparency="true"
        frameBorder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        style={{
          height: "500px",
        }}
      ></iframe>

      <a
        href="https://discord.gg/ag6YHvzWVD"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/static/pedido.gif" alt="" />
      </a>
    </div>
  );
}
