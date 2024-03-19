import React from 'react'
import "./trayectoria.css"

const Trayectoria = () => {
  return (
    <section className="qualification section">
        <h2 className="section__title" id="portfolio">Trayectoria</h2>
            <span className="section__subtitle">Académica y profesional</span>

            <div className="qualification__conatiner container">
                <div className="qualification__tabs">
                    
                    <div className="qualification__button qualification__active button--flex">
                        <i className="uil uil-graduation-cap qualification__icon"></i> Educación
                    </div>

                    <div className="qualification__button button--flex">
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experiencia
                    </div>

                    <div className="qualification__sections">
                        <div className="qualification__content">
                            <div className="qualification__data">
                                <div>
                                <h3 className="quialification__title">Ingeniería Informática</h3>
                                    <span className="qualification__subtitle">IPN - UPIICSA</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i> 2021 - Presente
                                    </div>
                                </div>

                                <div>
                                    <span className="qualificatun__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>

                            <div className="qualification__data">
                                <div></div>

                                <div>
                                    <span className="qualificatun__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>

                                <div>
                                <h3 className="quialification__title">Sistemas digitales</h3>
                                    <span className="qualification__subtitle">IPN - UPIICSA</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i> 2021 - Presente
                                    </div>
                                </div>
                            </div>

                            <div className="qualification__data">
                                <div>
                                <h3 className="quialification__title">Ingeniería Informática</h3>
                                    <span className="qualification__subtitle">IPN - UPIICSA</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i> 2021 - Presente
                                    </div>
                                </div>

                                <div>
                                    <span className="qualificatun__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>

                            <div className="qualification__data">
                                <div></div>

                                <div>
                                    <span className="qualificatun__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>

                                <div>
                                <h3 className="quialification__title">Sistemas digitales</h3>
                                    <span className="qualification__subtitle">IPN - UPIICSA</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i> 2021 - Presente
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
    </section>
  )
}

export default Trayectoria