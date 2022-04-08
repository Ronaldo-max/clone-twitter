import "./style.css";

export function FormAdd() {
  return (
    <form action="#" className="conteudoPrincipal__formulario">
      <textarea
        name="textoTweet"
        placeholder="O que está acontecendo?"
      ></textarea>

      <button type="submit">Tweetar</button>
    </form>
  );
}
