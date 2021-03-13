import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  PageContainer,
  PageTitle,
  ErrorMessage,
} from '../../components/MainComponents';
import { PageArea } from './styled';
import MinervaAPI from '../../helpers/MinervaTradeAPI';

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
                disabled={disabled}
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
    </PageContainer>
  );
};

export default MyAccount;
