import React from 'react'

const Electronica = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Sistemas Digitales</h3>
        
        <div className="skills__box">
            <div className="skills__group">
                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    
                    <div>
                        <h3 className="skills__name">Mantenimiento de hardware</h3>
                        <span className="skills__level">Avanzado</span>
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                        
                    <div>
                        <h3 className="skills__name">Sistemas embebidos</h3>
                        <span className="skills__level">Avanzado</span>
                    </div>
                    </div>
                    
                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    
                    <div>
                        <h3 className="skills__name">Circuitos lógicos</h3>
                        <span className="skills__level">Intermedio</span>
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                        
                    <div>
                        <h3 className="skills__name">Redes</h3>
                        <span className="skills__level">Intermedio</span>
                    </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Electronica