import React from 'react';

function Aside() {
    return (
      <aside className="aside">
        <h2 className="aside-title">Historia de fisicoculturismo</h2>
        <ul className="aside-menu">
          <li><a href="#section1" className="aside-link">¿Qué es?</a></li>
          <li><a href="#section2" className="aside-link">Competidores más destacados</a></li>
          <li><a href="#section3" className="aside-link"></a>Reyes sin corona</li>
        </ul>
      </aside>
    );
  }
  
  export default Aside;