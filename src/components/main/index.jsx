import React, { useState } from "react";
import "./style.css";
import { ItemListMain } from "../itemListMain";
import { FormAdd } from "../formAdd";

export function Main() {
  const [coment, setComent] = useState();
  const [areaComents, setAreaComents] = useState([
    {
      src: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
      alt: "User",
      name: "NameUser",
      nameUser: "@userName",
      time: "17:04:57",
      textWrite: "Hello",
    },
  ]);

  function addComment() {
    const newComment = {
      src: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
      alt: "User",
      name: "NameUser",
      nameUser: "@userName",
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
      textWrite: coment,
    };

    setAreaComents((prevState) => [...prevState, newComment]);
  }

  return (
    <main className="conteudoPrincipal">
      <h3 className="conteudoPrincipal__titulo">Home</h3>

      <FormAdd change={(e) => setComent(e.target.value)} value={coment} click={addComment} />

      <section className="conteudoPrincipal__feed">
        <ul className="conteudoPrincipal__listaTweets">
          {areaComents !== undefined
            ? areaComents.map((com, index) => (
                <ItemListMain
                  key={index}
                  src={com.src}
                  alt={com.alt}
                  name={com.name}
                  nameUser={com.nameUser}
                  textWrite={com.textWrite}
                  time={com.time}
                />
              ))
            : ""}
        </ul>
      </section>
    </main>
  );
}
