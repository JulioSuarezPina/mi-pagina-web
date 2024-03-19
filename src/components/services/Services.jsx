import React, { useState } from 'react'
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Experiencias</h2>
            <span className="section__subtitle">Profesionales</span>

            <div className="services__container container grid">
                <div className="services__content content">
                    <div>
                        <i className="uil uil-servers services__icon"></i>
                        <h3 className="services__title">Solution<br/>Architect</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>Ver más{" "}<i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Solution Architect</h3>
                            <p className="services__modal-description">Becario - BBVA</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Diseño de arquitectura para aplicaciones</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Uso de herramientas para control de avances (Jira)</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Manejo de metodologías Agile (SCRUM y KANBAN)</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content content">
                    <div>
                        <i className="uil uil-chat-bubble-user services__icon"></i>
                        <h3 className="services__title">Soporte<br/>Técnico</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>Ver más{" "}<i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Soporte Técnico</h3>
                            <p className="services__modal-description">Servicio Social - SISAE-SIBOLTRA</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Atención de correos electrónicos</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Actualización de Base de Datos</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Alta y baja de clientes (Empresas)</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content content">
                    <div>
                        <i className="uil uil-circuit services__icon"></i>
                        <h3 className="services__title">Técnico en<br/>Electrónica</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(3)}>Ver más{" "}<i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Técnico en Electrónica</h3>
                            <p className="services__modal-description">MEMOVAM</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Diseño de equipo electrónico para vacunación aviar</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Embalaje para la exportación del producto</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Ensamble y pruebas de equipo especializado</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Services