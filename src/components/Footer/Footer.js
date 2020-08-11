import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="container">
        <div className="row top-footer j-content-center text-center">
          <div className="col box-logo-footer">
            <span className="logo-footer">LOGO</span>
          </div>
        </div>

        <div className="row m-top-2rem main-footer">
          <div className="col menu-footer text-left">
            <div className="row">
              <div className="col">
                <h3 className='uppercase font-normal font-1-5rem'>Menu</h3>
              </div>
            </div>
            <div className="row  ">
              <div className="col">
                <p>
                  <a href='/#section-1' className='decoration-none'>Submenu</a>
                </p>
                <p>
                  <a href='/#section-2' className='decoration-none'>Submenu</a>
                </p>
              </div>
              <div className="col">
                <p>
                  <a href='/#section-3' className='decoration-none'>Submenu</a>
                </p>
                <p>
                  <a href='/#section-4' className='decoration-none'>Submenu</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col menu-email">
            <h3 className='uppercase font-normal font-1-5rem'>Menu</h3>
            <form className='form-email flex w-full j-content-between'>
              <input type="email" placeholder="Email"></input>
              <button type='button'>Enviar {">"}</button>
            </form>
          </div>
          <div className="col menu-social">
            <h3 className='uppercase font-normal font-1-5rem'>Menu</h3>
            <p>
              <a href='/#' className='decoration-none'>
                <i className="fab fa-instagram-square"></i> Submenu
              </a>
            </p>
            <p>
              <a href='/#' className='decoration-none'>
                <i className="fab fa-facebook-square"></i> Submenu
              </a>
            </p>
          </div>
        </div>

        <div className="row text-center m-top-2rem">
          <div className="col font-08rem">
            <p>@Vnda - Tecnologia para ecommerce - CNPJ 00.000.000/0001-00</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
