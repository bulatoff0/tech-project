import axios from "axios";
import React, { useState } from "react";
import "./Form.scss";

export const Form = () => {
  // async function sendMail() {
  //   try {
  //     await axios.post("http://localhost:3001/send_email", {
  //       name,
  //       phone,
  //       email,
  //       message,
  //     });

  //     setName("");
  //     setPhone("");
  //     setEmail("");
  //     setMessage("");
  //   } catch (error) {
  //     console.log("Sending error", error);
  //   }
  // }
  /////////////////////////////////////////////////////

  const [recipient_email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function sendMail() {
    if (recipient_email && name && message) {
      axios
        .post("http://localhost:3001/send_email", {
          recipient_email,
          name,
          message,
        })
        .then(() => alert("Заявка отправленна"))
        .catch(() => alert("Ошибка"));
      return;
    }
    return alert("Заполните все поля, чтоб продолжить");
  }

  return (
    <div>
      <div className="container-form">
        <form
          action="#"
          className="form"
          method="POST"
          encType="multipart/form-data"
        >
          <label className="form__label">
            <input
              className="input input-name"
              type="text"
              id="имя"
              onChange={(e) => setName(e.target.value)}
              placeholder="Введите имя"
              required
            />
          </label>
          <label className="form__label">
            <input
              className="input input-mail"
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Введите email"
              required
            />
          </label>
          <label className="form__label">
            <textarea
              className="textarea"
              id="message"
              onChange={(e) => setMessage(e.target.value)}
              cols="60"
              rows="4"
              placeholder="Введите ваше сообщение"
              required
            ></textarea>
          </label>
          <button onClick={() => sendMail()} type="submit" className="form-btn">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};
