import React from 'react';
import { PageContainer } from '../../components/MainComponents';
import { SearchArea, PageArea } from './styled';
import MinervaAPI from '../../helpers/MinervaTradeAPI';

const Signin = () => {
  const API = MinervaAPI();

  return (
    <>
      <SearchArea>
        <PageContainer>
          <div className="search-box">
            <form method="GET" action="/ads">
              <input type="text" name="q" placeholder="O que você procura?"/>
              <select name="state">

              </select>
              <button>Pesquisar</button>
            </form>
          </div>
          <div className="category-list"></div>
        </PageContainer>
      </SearchArea>
      <PageContainer>
        <PageArea>...</PageArea>
      </PageContainer>
    </>
  );
};

export default Signin;
