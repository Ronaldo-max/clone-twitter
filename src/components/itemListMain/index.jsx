import "./style.css";

export function ItemListMain(props) {
  return (
    <li className="conteudoPrincipal__tweet">
      <img className="tweet__fotoPerfil" src={props.src} alt={props.alt} />
      <div className="tweet__conteudo">
        <div className="tweet__conteudo__inform">
          <h2>{props.name}</h2>
          <span>{props.nameUser} {props.time}</span>
        </div>
        <p>{props.textWrite}</p>
      </div>
    </li>
  );
}
