import React, { useState, useEffect } from 'react';
import { PageContainer } from '../../components/MainComponents';
import { PageArea } from './styled';
import MinervaAPI from '../../helpers/MinervaTradeAPI';
import { useLocation, useHistory } from 'react-router-dom';
import AdItem from '../../components/partials/AdItem';

let timer;
const TIME_WAIT_REQUEST = 500;
const Signin = () => {
  const API = MinervaAPI();
  const history = useHistory();
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
  const [resultOpacity, setResultOpacity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [adsTotal, setAdsTotal] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const getAdsList = async () => {
    setLoading(true);
    let offset = (currentPage - 1) * 9;
    const json = await API.getAds({
      sort: 'desc',
      limit: 9,
      q,
      cat,
      state,
      offset,
    });
    setAdList(json.ads);
    setAdsTotal(json.total);
    setResultOpacity(1);
    setLoading(false);
  };
  useEffect(() => {
    if (adList.length > 0) {
      setPageCount(Math.ceil(adsTotal / adList.length));
    } else {
      setPageCount(0);
    }
  }, [adsTotal]);

  useEffect(() => {
    setResultOpacity(0.3);
    getAdsList();
  }, [currentPage]);

  useEffect(() => {
    let queryString = [];
    if (q) {
      queryString.push(`q=${q}`);
    }
    if (cat) {
      queryString.push(`cat=${cat}`);
    }
    if (state) {
      queryString.push(`state=${state}`);
    }
    history.replace({
      search: `?${queryString.join('&')}`,
    });
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(getAdsList, TIME_WAIT_REQUEST);
    setResultOpacity(0.3);
    setCurrentPage(1);
  }, [q, cat, state]);

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

  let pagination = [];
  for (let i = 1; i <= pageCount; i++) {
    pagination.push(i);
  }

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
              onChange={(e) => setQ(e.target.value)}
              autoComplete="off"
            />
            <div className="filter-name">Estado:</div>
            <select
              name="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
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
                  onClick={() => setCat(category.slug)}
                >
                  <img src={category.img} alt="" />
                  <span>{category.name}</span>
                </li>
              ))}
            </ul>
          </form>
        </div>
        <div className="right-side">
          <h2>Resultados</h2>
          {loading && adList.length === 0 && (
            <div className="list-warning">Carregando...</div>
          )}
          {!loading && adList.length === 0 && (
            <div className="list-warning">Nenhum resultado encontrado!</div>
          )}
          <div className="list" style={{ opacity: resultOpacity }}>
            {adList.map((item, index) => (
              <AdItem key={index} data={item} />
            ))}
          </div>
          <div className="pagination">
            {pagination.map((item, index) => (
              <div
                key={index}
                className={
                  item === currentPage ? 'page-item active' : 'page-item'
                }
                onClick={() => setCurrentPage(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </PageArea>
    </PageContainer>
  );
};

export default Signin;
