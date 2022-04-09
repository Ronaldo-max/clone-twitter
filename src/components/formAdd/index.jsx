import "./style.css";

export function FormAdd(props) {
  return (
    <form action="#" className="conteudoPrincipal__formulario">
      <textarea
        name="textoTweet"
        placeholder="O que está acontecendo?"
        onChange={props.change}
        value={props.value}
      ></textarea>

      <button type="button" onClick={props.click}>
        Tweetar
      </button>
    </form>
  );
}
