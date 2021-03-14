import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  PageContainer,
  PageTitle,
  ErrorMessage,
} from '../../components/MainComponents';
import { MyAds, PageArea } from './styled';
import MinervaAPI from '../../helpers/MinervaTradeAPI';
import AdItem from '../../components/partials/AdItem';
import { FaEdit } from 'react-icons/fa';
import Modal from '../../components/partials/Modal';

const MyAccount = () => {
  const API = MinervaAPI();
  const history = useHistory();
  const [name, setName] = useState('');
  const [stateLocation, setStateLocation] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState('');
  const [stateList, setStateList] = useState([]);
  const [myAds, setMyAds] = useState([]);
  const [adsEdition, setAdsEdition] = useState(false);
  const modalEdit = () => {
    return (
      <Modal onClose={() => setAdsEdition(false)}>
        <h1>Meu primeiro modal!</h1>
      </Modal>
    );
  };

  const getStatesLocation = async () => {
    const sList = await API.getStates();
    setStateList(sList);
  };

  const setEditionMode = () => {
    getStatesLocation();
    setDisabled(false);
  };

  useEffect(() => {
    const getUserData = async () => {
      const user = await API.getMe();
      setEmail(user.email);
      setName(user.name);
      setMyAds(user.ads);
      setStateLocation(user.state);
    };
    getUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setError('');
    if (password !== confirmPassword) {
      setError('Senhas não conferem');
      setDisabled(false);
      return;
    }
    const json = await API.alterUser(name, password, stateLocation);
    if (json.error) {
      setError(json.error);
    } else {
      alert('Dados alterados com sucesso!');
      history.push('/');
    }
    setDisabled(false);
  };

  return (
    <>
      {adsEdition && modalEdit()}
      <PageContainer>
        <PageTitle>Minha Conta</PageTitle>
        <PageArea>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <form onSubmit={handleSubmit}>
            <label className="area">
              <div className="area-title">Nome Completo</div>
              <div className="area-input">
                <input
                  type="text"
                  disabled={disabled}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </label>
            <label className="area">
              <div className="area-title">Estado</div>
              <div className="area-input">
                <select
                  value={stateLocation}
                  onChange={(e) => setStateLocation(e.target.value)}
                  required
                  disabled={disabled}
                >
                  <option>{stateLocation}</option>
                  {stateList.map((state, index) => (
                    <option key={index} value={state.name}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
            </label>
            <label className="area">
              <div className="area-title">E-mail</div>
              <div className="area-input">
                <input
                  type="email"
                  disabled={true}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="off"
                />
              </div>
            </label>
            <label className="area">
              <div className="area-title">Nova Senha</div>
              <div className="area-input">
                <input
                  type="password"
                  disabled={disabled}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </label>
            <label className="area">
              <div className="area-title">Confirmar Senha</div>
              <div className="area-input">
                <input
                  type="password"
                  disabled={disabled}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </label>
            <label className="area">
              <div className="area-title"></div>
              <div className="area-input">
                <button onClick={(e) => setEditionMode()} type="button">
                  Alterar
                </button>
                <button disabled={disabled}>Salvar</button>
              </div>
            </label>
          </form>
        </PageArea>
        <MyAds>
          <h2>Meus Anúncios</h2>
          <div className="list">
            {myAds.map((item, index) => (
              <div className="ads-container">
                <FaEdit
                  onClick={() => setAdsEdition(true)}
                  className="btn-edit"
                />
                <AdItem key={index} data={item} />
              </div>
            ))}
          </div>
        </MyAds>
      </PageContainer>
    </>
  );
};

export default MyAccount;
