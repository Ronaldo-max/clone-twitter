import { ItemList } from "../../components/itemList";

import Bird1 from "../../assets/bird 1.svg";
import HomePNG from "../../assets/Home.png";
import Hashtag from "../../assets/Hashtag.png";
import Notification from "../../assets/Notification.png";
import Group from "../../assets/Group.png";
import Group1 from "../../assets/Group (1).png";
import Group2 from "../../assets/Group (2).png";
import Group3 from "../../assets/Group (3).png";

import "./style.css";

export function Header() {
  return (
    <header className="cabecalho">
      <figure className="cabecalho__logo">
        <img src={Bird1} alt="Logo Ken-Te-Vi" />
        <figcaption hidden>Logo Ken-Te-Vi</figcaption>
      </figure>

      <nav className="cabecalho__menuNavegacao">
        <ul className="cabecalho__menuLista">
          <ItemList
            src={HomePNG}
            alt="Página Inicial"
            href="#"
            name="Página Inicial"
          />
          <ItemList src={Hashtag} alt="Explorar" href="#" name="Explorar" />
          <ItemList
            src={Notification}
            alt="Notificações"
            href="#"
            name="Notificações"
          />
          <ItemList src={Group} alt="Mensagens" href="#" name="Mensagens" />
          <ItemList
            src={Group1}
            alt="Itens salvos"
            href="#"
            name="Itens salvos"
          />
          <ItemList src={Group2} alt="Listas" href="#" name="Listas" />
          <ItemList
            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
            alt="Perfil"
            href="#"
            name="Perfil"
          />
          <ItemList src={Group3} alt="Mais" href="#" name="Mais" />
        </ul>
      </nav>
    </header>
  );
}
