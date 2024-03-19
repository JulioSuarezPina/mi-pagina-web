import React from 'react';
import "./skills.css";
import Backend from './Backend';
import Frontend from './Frontend';
import Electronica from './Electronica';
import Complementaria from './Complementaria';

const Skills = () => {
  return (
    <section className="skills skills">
        <h2 className="section__title" id="skills">Habilidades</h2>
            <span className="section__subtitle">Mi nivel</span>
            <div className='skills__container container grid'>
                <Frontend/>
                <Backend/>
                <Electronica/>
                <Complementaria/>
            </div>
    </section>
  )
}

export default Skills