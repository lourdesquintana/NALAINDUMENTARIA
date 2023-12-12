import React from 'react';
import logo from '../imagenes/logo1.png'
import './styles/Home.css';
import { Link } from 'react-router-dom';

export default function Vestimenta() {

  return (
<div className="container Caja" >
<div className="row">
  <h2 className='text-center'>Productos:</h2>
  {/* Tarjeta 1 */}
  <div className="col-md-4">
    <div className="card C1">
      <img
        src="https://www.dhresource.com/0x0/f2/albu/g10/M01/9C/39/rBVaVlwxchaAbj92AAHa-BrMYiw089.jpg"
        className="card-img-top"
        alt="Perro 1"
      />
      <div className="card-body text-center">
        <h5 className="card-title">Perro 1</h5>
        <a href="#" className="btn btn-primary">Comprar</a>
      </div>
    </div>
  </div>

  {/* Tarjeta 2 */}
  <div className="col-md-4">
    <div className="card C2">
      <img
        src="https://th.bing.com/th/id/OIP.NbCAK-cytXCjimhdo1ln2wAAAA?pid=ImgDet&rs=1"
        className="card-img-top"
        alt="Perro 2"
      />
      <div className="card-body text-center">
        <h5 className="card-title">Perro 2</h5>
        <a href="#" className="btn btn-primary">Comprar</a>
      </div>
    </div>
  </div>

  {/* Tarjeta 3 */}
  <div className="col-md-4">
    <div className="card C3">
      <img
        src="https://th.bing.com/th/id/OIP.neKxKVTsZZe0Onw3IcRuAwHaHa?pid=ImgDet&rs=1"
        className="card-img-top"
        alt="Perro 3"
      />
      <div className="card-body text-center">
        <h5 className="card-title">Perro 3</h5>
        <a href="#" className="btn btn-primary">Comprar</a>
      </div>
    </div>
    
  </div>
  

</div>
</div>
 )
}

