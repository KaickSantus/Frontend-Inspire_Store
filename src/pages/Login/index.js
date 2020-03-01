import React, { useState } from "react";
import api from "../../services/api";

export default function Login({ history }) {
  const [email, setEmail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post("http://localhost:4200/sessions", {
      email
    });
    const { _id } = response.data;

    localStorage.setItem("user", _id);

    history.push("/dashboard");
  }
  return (
    <>
      <p>
        Ofereça <strong>produtos inovadores</strong> para verdadeiros
        empreendedores.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <button className="btn">Entrar</button>
      </form>
    </>
  );
}
