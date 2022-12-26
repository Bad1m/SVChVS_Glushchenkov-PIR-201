import React from "react";
import "./MainPage.scss";
import { Link } from "react-router-dom";

export function MainPage() {
  return (
    <section className={"page__main-section main-section"}>
      <div className={"main-section__container"}>
        <div className={"main-section__description"}>Магазин одежды</div>
        <Link to={`catalog`} className={"main-section__button button"}>
          Перейти в Магазин одежды
        </Link>
      </div>
    </section>
  );
}
