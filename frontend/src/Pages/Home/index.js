import React, { useState, useEffect } from 'react';
import { PageContainer } from '../../components/MainComponents';
import { SearchArea, PageArea } from './styled';
import MinervaAPI from '../../helpers/MinervaTradeAPI';
import { Link } from 'react-router-dom';
import AdItem from '../../components/partials/AdItem';

const Signin = () => {
  const API = MinervaAPI();

  const [stateList, setStateList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [adList, setAdList] = useState([]);

  useEffect(() => {
    const getStates = async () => {
      const sList = await API.getStates();
      setStateList(sList);
    };
    getStates();
  },[]);
  useEffect(() => {
    const getCategories = async () => {
      const cats = await API.getCategories();
      setCategories(cats);
    };
    getCategories();
  },[]);
  useEffect(() => {
    const getRecentAds = async () => {
      const json = await API.getAds({
        sort: 'desc',
        limit: 8,
      });
      setAdList(json.ads);
    };
    getRecentAds();
  },[]);

  return (
    <>
      <SearchArea>
        <PageContainer>
          <div className="search-box">
            <form method="GET" action="/ads">
              <input type="text" name="q" placeholder="O que você procura?" />
              <select name="state">
                {stateList.map((state, index) => (
                  <option key={index} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
              <button>Pesquisar</button>
            </form>
          </div>
          <div className="category-list">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/ads?cat=${category.slug}`}
                className="category-item"
              >
                <img src={category.img} alt="" />
                <span>{category.name}</span>
              </Link>
            ))}
          </div>
        </PageContainer>
      </SearchArea>
      <PageContainer>
        <PageArea>
          <h2>Anúncios Recentes</h2>
          <div className="list">
            {adList.map((ad, index) => (
              <AdItem key={index} data={ad} />
            ))}
          </div>
          <Link to="/ads" className="see-all-link">
            Ver Todos
          </Link>
          <hr />
          ...
        </PageArea>
      </PageContainer>
    </>
  );
};

export default Signin;
