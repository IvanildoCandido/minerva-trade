import React, { useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import { Link, useParams } from 'react-router-dom';
import { PageContainer } from '../../components/MainComponents';
import { PageArea, Fake, OthersArea, BreadCrumb } from './styled';
import AdItem from '../../components/partials/AdItem';
import MinervaAPI from '../../helpers/MinervaTradeAPI';
import 'react-slideshow-image/dist/styles.css';

const AdPage = () => {
  const API = MinervaAPI();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [adInfo, setAdInfo] = useState({});

  useEffect(() => {
    const geAdtInfo = async (id) => {
      const json = await API.getAd(id, true);
      setAdInfo(json);
      setLoading(false);
    };
    geAdtInfo(id);
  }, []);
  const formatDate = (date) => {
    return date;
  };
  return (
    <PageContainer>
      {adInfo.category && (
        <BreadCrumb>
          Você está aqui:
          <Link to="/">Home</Link>/
          <Link to={`/ads?state=${adInfo.stateName}`}>{adInfo.stateName}</Link>/
          <Link
            to={`/ads?state=${adInfo.stateName}&cat=${adInfo.category.slug}`}
          >
            {adInfo.category.name}
          </Link>
          / {adInfo.title}
        </BreadCrumb>
      )}
      <PageArea>
        <div className="left-side">
          <div className="box">
            <div className="ad-image">
              {loading && <Fake height={300} />}
              {adInfo.images && (
                <Slide>
                  {adInfo.images.map((image, index) => (
                    <div key={index} className="each-slide">
                      <img src={image} alt="" />
                    </div>
                  ))}
                </Slide>
              )}
            </div>
            <div className="ad-info">
              <div className="ad-name">
                {loading && <Fake height={20} />}
                {adInfo.title && <h2>{adInfo.title}</h2>}
                {adInfo.dateCreated && (
                  <small>Criado em {formatDate(adInfo.dateCreated)}</small>
                )}
              </div>
              <div className="ad-description">
                {loading && <Fake height={100} />}
                {adInfo.description}
                <hr />
                {adInfo.views && <small>Visualizações: {adInfo.views}</small>}
              </div>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="box box-padding">
            {loading && <Fake height={20} />}
            {adInfo.priceNegotiable && 'Preço Negociável'}
            {!adInfo.priceNegotiable && adInfo.price && (
              <div className="price">
                Preço: <span>R$ {adInfo.price}</span>
              </div>
            )}
          </div>
          {loading && <Fake height={50} />}
          {adInfo.userInfo && (
            <>
              <a
                href={`mailto:${adInfo.userInfo.email}`}
                target="_blank"
                className="contact-seller"
                rel="noreferrer"
              >
                Conversar com o vendedor
              </a>
              <div className="box box-padding created-by">
                <strong>{adInfo.userInfo.name}</strong>
                <small>E-mail: {adInfo.userInfo.email}</small>
                <small>Estado: {adInfo.stateName}</small>
              </div>
            </>
          )}
        </div>
      </PageArea>
      <OthersArea>
        {adInfo.others && (
          <>
            <h2>Outros anúncios do vendedor</h2>
            <div className="list">
              {adInfo.others.map((item, index) => (
                <AdItem key={index} data={item} />
              ))}
            </div>
          </>
        )}
      </OthersArea>
    </PageContainer>
  );
};

export default AdPage;
