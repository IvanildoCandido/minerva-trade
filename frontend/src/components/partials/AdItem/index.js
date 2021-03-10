import React from 'react';
import { Link } from 'react-router-dom';
import { Item } from './styled';

const AdItem = (props) => {
  const { id, image, title, priceNegotiable, price } = props.data;
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
    <Item className="ad-items">
      <Link to={`/ad/${id}`}>
        <div className="item-image">{image && <img src={image} alt="" />}</div>
        <div className="item-name">{title}</div>
        <div className="item-price">{priceItem}</div>
      </Link>
    </Item>
  );
};
export default AdItem;
