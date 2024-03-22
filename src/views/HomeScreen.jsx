import React, { useEffect } from "react";
import { getTopicos } from "../helpers/topicsApi";
import "../css/navegador.css";
import TerminalApp from "../components/TerminalApp";

const HomeScreen = () => {
  // useEffect(() => {
  //   traerData();
  // }, []);

  // const traerData = async () => {
  //   const { data } = await getTopicos();
  //   console.log(data);
  // };
  //
  return (
    <div className="container-nav">
      <div className="browser-window">
        <div className="address-bar">
          <div className="control-buttons">
            <div className="control-button red"></div>
            <div className="control-button yellow"></div>
            <div className="control-button green"></div>
          </div>
          {/* <span>https://techmentor-summit</span> */}
        </div>

        <div className="m-3 flex flex-col text-center">
          <h1 className="text-8xl font-bold text-green-600 my-3 titulo-principal">
            {"<TechMentor/>"}
          </h1>
          <h3 className=" text-xl text-end font-bold text-green-700">
            Summit 2024
          </h3>
        </div>
        <div className="m-3">
          <p className="text-xl text-gray-400">
            {"<!-- "}
            El evento creado por y para la comunidad de mentores y tutores de
            RollingCode school{" -->"}
          </p>
        </div>
        <section className="m-3 flex flex-col p-3">
          <TerminalApp />
        </section>
      </div>
    </div>
  );
};

export default HomeScreen;
