import React from 'react'

const Contactos = () => {
  return (
    <div className="social-links bg-center">
      <a href="https://api.whatsapp.com/send/?phone=5523518544&text&type=phone_number&app_absent=0" className='mr-5'><h3>Tel: 55-23-51-85-44</h3></a>
      <a href="https://www.linkedin.com/in/diana-guadalupe-gonzalez-alfaro-325392261/" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
      </a>
      <a href="https://www.facebook.com/DianaGGlezA/" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="Facebook" />
      </a>
      <a href="mailto:diangoal95@gmail.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail" />
      </a>
    </div>
  )
}

export default Contactos
