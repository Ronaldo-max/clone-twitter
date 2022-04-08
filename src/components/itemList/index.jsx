import "./style.css";

export function ItemList({ src, alt, href, name }) {
  return (
    <li className="cabecalho__menuItem">
      <img src={src} alt={alt} />
      <a href={href}>{name}</a>
    </li>
  );
}
