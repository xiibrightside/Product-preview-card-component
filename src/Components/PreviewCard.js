import React from "react";
import Cart from "../Images/icon-cart.svg";

const PreviewCard = () => {
  return (
    <div className="card-container flex flex-row">
      <div className="hero-image">
        <div></div>
      </div>
      <div className="card-description flex flex-col justify-between bg-white p-9">
        <h2>PERFUME</h2>
        <h1 className="title">Gabrielle Essence Eau De Parfum</h1>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfume-Creator for the House of CHANEL.
        </p>
        <div className="flex flex-row justify-start items-center gap-3">
          <p className="price">$149.99</p>
          <p className="line-through">$169.99</p>
        </div>

        <button className="cart-button flex flex-row justify-center gap-5 items-center">
          <img className="cart-icon h-6" src={Cart} alt="cart-icon"></img>
          <h3>Add to Cart</h3>
        </button>
      </div>
    </div>
  );
};

export default PreviewCard;
