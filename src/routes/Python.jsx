import React from 'react'

const Python = () => {
  return (
    <div className="contentpython">
        <center><h1>Python</h1>
            <br/>
            <br/>
            <h3>Se han elaborado varios proyectos con este lenguaje, utilzando Jupyter Notebook o Visual Studio Code.
              Aqui se presentan algunos proyectos relacionados con Python.
            </h3>
          <a href="https://github.com/DianaGA18/Lenguaje-Python" target="_blank" rel="noopener noreferrer">
            <button className='mt-14' style={{ backgroundColor: '#1f4781', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
            Codigos en Visual Studio Code -->
            </button>
          </a></center>
          <center>
          <a href="https://github.com/DianaGA18/Jupyter-Notebook" target="_blank" rel="noopener noreferrer">
            <button className='mt-8' style={{ backgroundColor: '#1f4781', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
            Códigos en Jupyter Notebook -->
            </button>
          </a></center>

      </div>
    
  )
}

export default Python
