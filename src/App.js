import React from 'react';
import './App.css';
import {Button, Card} from './styles'

function App() {
  return (
    <div className="App">
      <Button type='danger'>Mi boton chingón</Button>
      <Card>
        <h2>Gustavo</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim unde, nemo quaerat adipisci nam laborum assumenda cumque iure magnam voluptates vitae. Accusamus ullam velit voluptate nulla veritatis illum quo doloremque.</p>
        <nav>
            <button>Contacto</button>
            <button>Borrar</button>
        </nav>
      </Card>
    </div>
  );
}

export default App;
