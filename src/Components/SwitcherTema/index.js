import React from "react";
import themeOn from "../../assets/images/themeOn.svg"
import themeOff from "../../assets/images/themeOff.svg"
import { Icono } from "../UI";

export default ({tema}) => {
    const Claro = <Icono src={themeOn} alt="Tema claro" />
    const Oscuro = <Icono src={themeOff} alt="Tema Oscuro" />

    return <>{tema ? Claro : Oscuro}</>;
}

