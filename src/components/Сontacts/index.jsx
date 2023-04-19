import React from "react";
import { Form } from "./Form";
import "./Contacts.scss";

export const Contacts = () => {
  return (
    <div className="container">
        <span className="title">Контакты</span>

        <div className="contacts">
            <div className="contacts__connection">
                <div className="contacts__phone">
                    Телефон: <span>+X (XXX) XXX-XX-XX</span>
                </div>
                <div className="contacts__email">
                    Почта: <span>mail@example.ru</span>
                </div>
            </div>

            <Form />
        </div>
    </div>
  );
};
