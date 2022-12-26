import React from "react";
import "./ContactPage.scss";
import { Link } from "react-router-dom";

export function ContactPage() {
  return (
    <section className={"page__about-us about-us"}>
      <div className={"about-us__container"}>
        <div className={"about-us__title"}>Контакты</div>
        <div className={"about-us__text"}>+375445532924</div>
        <div className={"about-us__text"}> mail: vadim@gmail.com</div>
      </div>
    </section>
  );
}
