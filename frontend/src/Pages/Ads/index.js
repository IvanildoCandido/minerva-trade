import React, { useState, useEffect } from 'react';
import { PageContainer } from '../../components/MainComponents';
import { PageArea } from './styled';
import MinervaAPI from '../../helpers/MinervaTradeAPI';
import { useLocation, useHistory } from 'react-router-dom';
import AdItem from '../../components/partials/AdItem';

const Signin = () => {
  const API = MinervaAPI();
  const useQueryString = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQueryString();

  const [q, setQ] = useState(query.get('q') !== null ? query.get('q') : '');
  const [cat, setCat] = useState(
    query.get('cat') !== null ? query.get('cat') : '',
  );
  const [state, setState] = useState(
    query.get('state') !== null ? query.get('state') : '',
  );
  const [stateList, setStateList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [adList, setAdList] = useState([]);

  useEffect(() => {
    const getStates = async () => {
      const sList = await API.getStates();
      setStateList(sList);
    };
    getStates();
  }, []);
  useEffect(() => {
    const getCategories = async () => {
      const cats = await API.getCategories();
      setCategories(cats);
    };
    getCategories();
  }, []);
  useEffect(() => {
    const getRecentAds = async () => {
      const json = await API.getAds({
        sort: 'desc',
        limit: 8,
      });
      setAdList(json.ads);
    };
    getRecentAds();
  }, []);

  return (
    <PageContainer>
      <PageArea>
        <div className="left-side">
          <form method="GET">
            <input
              type="text"
              name="q"
              placeholder="O que você procura?"
              value={q}
              autoComplete="off"
            />
            <div className="filter-name">Estado:</div>
            <select name="state" value={state}>
              <option></option>
              {stateList.map((state, index) => (
                <option key={index} name={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
            <div className="filter-name">Categoria:</div>
            <ul>
              {categories.map((category, index) => (
                <li
                  key={index}
                  className={
                    cat === category.slug
                      ? 'category-item active'
                      : 'category-item'
                  }
                >
                  <img src={category.img} alt="" />
                  <span>{category.name}</span>
                </li>
              ))}
            </ul>
          </form>
        </div>
        <div className="right-side">...</div>
      </PageArea>
    </PageContainer>
  );
};

export default Signin;
