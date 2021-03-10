import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PageContainer } from '../../components/MainComponents';
import { PageArea, Fake } from './styled';
import MinervaAPI from '../../helpers/MinervaTradeAPI';

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
      <PageArea>
        <div className="left-side">
          <div className="box">
            <div className="ad-image">{loading && <Fake height={300} />}</div>
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
          </div>
          <div className="box box-padding">
            {loading && <Fake height={50} />}
          </div>
        </div>
      </PageArea>
    </PageContainer>
  );
};

export default AdPage;
