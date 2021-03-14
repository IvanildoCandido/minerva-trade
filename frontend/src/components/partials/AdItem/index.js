import React from 'react';
import { Link } from 'react-router-dom';
import { Item } from './styled';

const AdItem = (props) => {
  const { id, image, title, priceNegotiable, price, images } = props.data;
  let priceItem = '';
  if (priceNegotiable) {
    priceItem = 'Preço Negociável';
  } else {
    priceItem = parseInt(price).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }
  return (
    <>
      {image && (
        <Item className="ad-items">
          <Link to={`/ad/${id}`}>
            <div className="item-image">
              {image && <img src={image} alt="" />}
            </div>
            <div className="item-name">{title}</div>
            <div className="item-price">{priceItem}</div>
          </Link>
        </Item>
      )}
      {images && (
        <Item className="ad-items">
          <div className="item-image">
            <img
              src={`http://alunos.b7web.com.br:501/media/${images[0].url}`}
              alt=""
            />
          </div>
          <div className="item-name">{title}</div>
          <div className="item-price">{priceItem}</div>
        </Item>
      )}
    </>
  );
};
export default AdItem;
