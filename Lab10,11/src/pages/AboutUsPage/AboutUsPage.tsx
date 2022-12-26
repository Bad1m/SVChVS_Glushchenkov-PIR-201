import React from "react";
import "./AboutUsPage.scss";
import { Link } from "react-router-dom";

export function AboutUsPage() {
  return (
    <section className={"page__about-us about-us"}>
      <div className={"about-us__container"}>
        <div className={"about-us__title"}>О нас</div>
        <div className={"about-us__text"}>Информация</div>
      </div>
    </section>
  );
}
