import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className="bx bx-award"></i>
                <h3 className="about__title">Solution Architect</h3>
                <span className="about__subtitle">Becario BBVA</span>
            </div>

            <div className="about__box">
                <i className="bx bx-support"></i>
                <h3 className="about__title">Soporte técnico</h3>
                <span className="about__subtitle">SISAE SIBOLTRA</span>
            </div>

            <div className="about__box">
                <i className="bx bx-chip"></i>
                <h3 className="about__title">Técnico en electrónica</h3>
                <span className="about__subtitle">MEMOVAM</span>
            </div>
        </div>
    )
}

export default Info