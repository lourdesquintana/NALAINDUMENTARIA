import React from 'react';
import logo from '../imagenes/logo1.png'
import './styles/Carrito.css';
import { Link } from 'react-router-dom';

export default function Carrito() {

  return (
    <div className="col-md-4">
      <div className="card C3">
        <img
          src="https://th.bing.com/th/id/OIP.neKxKVTsZZe0Onw3IcRuAwHaHa?pid=ImgDet&rs=1"
          className="card-img-top"
          alt="Perro 3"
        />
        <div className="card-body text-center">
          <h5 className="card-title">Perr</h5>
          <a href="#" className="btn btn-primary">Comprar</a>
        </div>
      </div>
    </div>
  )
}