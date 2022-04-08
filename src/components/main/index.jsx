import "./style.css";
import { ItemListMain } from "../itemListMain";
import { FormAdd } from "../formAdd";

export function Main() {
  return (
    <main className="conteudoPrincipal">
      <h3 className="conteudoPrincipal__titulo">Home</h3>

      <FormAdd />

      <section className="conteudoPrincipal__feed">
        <ul className="conteudoPrincipal__listaTweets">
          <ItemListMain
            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
            alt="User"
            name="NameUser"
            nameUser="@userName 14s"
            textWrite="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime error quia possimus molestias aperiam nisi natus et a libero! Reiciendis eaque veniam ex reprehenderit repellat cupiditate fuga quas aut facilis."
          />
          <ItemListMain
            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
            alt="User"
            name="NameUser"
            nameUser="@userName 14s"
            textWrite="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime error quia possimus molestias aperiam nisi natus et a libero! Reiciendis eaque veniam ex reprehenderit repellat cupiditate fuga quas aut facilis."
          />
          <ItemListMain
            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
            alt="User"
            name="NameUser"
            nameUser="@userName 14s"
            textWrite="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime error quia possimus molestias aperiam nisi natus et a libero! Reiciendis eaque veniam ex reprehenderit repellat cupiditate fuga quas aut facilis."
          />
        </ul>
      </section>
    </main>
  );
}
