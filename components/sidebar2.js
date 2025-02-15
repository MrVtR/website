import { SocialIcon } from "react-social-icons/component";
import * as icons from "react-social-icons";

export default function Sidebar(props) {
  let icons_list_url = [
    {
      name: "facebook",
      url: "https://www.facebook.com/groups/162825860900247"
    },
    {
      name: "x",
      url: "https://x.com/JumpmanClubBR"
    },
    {
      name: "discord",
      url: "https://discord.gg/ag6YHvzWVD"
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/jumpmanclubbrasil/"
    },
    {
      name: "youtube",
      url: "https://www.youtube.com/@Jumpmanclubbrasil"
    },
    {
      name: "whatsapp",
      url: "https://chat.whatsapp.com/CQL9bbyV5ZTAyzalhWZ0S0"
    }
  ];
  return (
    <div
      className="mx-auto flex  hidden flex-col gap-[50px] self-start p-5  dark:text-gray-100 md:hidden  lg:flex"
      style={{
        margin: "40px",
        maxWidth: "340px",
        backgroundColor: "rgb(0, 0, 0, 0.1)",
        borderRadius: "15px"
      }}>
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
                borderRadius: "25px"
              }}>
              Doe e incentive
            </h1>
          </b>
          <b>
            <p style={{ margin: "20px 10px", textAlign: "justify" }}>
              Se você curte nosso trabalho, faça uma doação de
              qualquer valor, irá nos ajudar d+ com os custos deste
              trabalho que apesar de tudo, nós distribuímos
              gratuitamente!
            </p>
          </b>
          <img
            src="/static/coin.png"
            alt=""
            style={{ height: "100px" }}
          />
        </div>
      </a>
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
              borderRadius: "25px"
            }}>
            Nos sigam nas redes sociais{" "}
          </h1>
        </b>
        <div
          className=" grid grid-cols-3 gap-5"
          style={{ marginTop: "20px" }}>
          {icons_list_url.map((item, index) => (
            <SocialIcon
              network={item.name}
              url={item.url}
              target="_blank"
              rel="noopener noreferrer"
            />
          ))}
        </div>
      </div>

      <iframe
        src="https://discord.com/widget?id=371132558500560896&theme=dark"
        allowTransparency={true}
        frameBorder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        style={{
          height: "500px"
        }}></iframe>

      <a
        href="https://discord.gg/ag6YHvzWVD"
        target="_blank"
        rel="noopener noreferrer">
        <img src="/static/pedido.gif" alt="" />
      </a>
    </div>
  );
}
