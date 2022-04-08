import "./style.css";

export function ItemListMain({ src, alt, name, nameUser, textWrite }) {
  return (
    <li className="conteudoPrincipal__tweet">
      <img className="tweet__fotoPerfil" src={src} alt={alt} />
      <div className="tweet__conteudo">
        <div className="tweet__conteudo__inform">
          <h2>{name}</h2>
          <span>{nameUser}</span>
        </div>
        <p>{textWrite}</p>
      </div>
    </li>
  );
}
