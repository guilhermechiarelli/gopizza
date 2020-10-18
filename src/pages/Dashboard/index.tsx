import React, { useCallback, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';

import pizzaImg from '../../assets/pizza-image.png';

import {
  Container,
  PizzaContainer,
  PizzaPicture,
  PizzaDescription,
  PizzaButton,
} from './styles';

import Header from '../../components/Header';
import api from '../../services/api';

const Dashboard: React.FC = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [points, setPoints] = useState<string>();
  const [recommendation, setRecommendation] = useState<string>();

  const history = useHistory();

  useEffect(() => {
    api.get('/recommendation').then((response) => {
      setRecommendation(response.data.name);
    });
  }, []);

  const handleOrderPizza = useCallback(() => {
    history.push('/order/quantity');
  }, [history]);

  const handleModal = useCallback(() => {
    api.get('/sales').then((response) => {
      setPoints(response.data.points);

      setIsOpen(!modalIsOpen);
    });
  }, [modalIsOpen]);

  Modal.setAppElement('body');

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <>
      <Header />

      <Container>
        <PizzaContainer>
          <PizzaPicture>
            <img src={pizzaImg} alt="Pizza" />
          </PizzaPicture>

          <PizzaDescription>
            <h2>Montar minha pizza</h2>
            <p>Aqui você pode escolher uma pizza do seu gosto com o melhor preço!</p>
            <span>R$ 29,90</span>
          </PizzaDescription>

          <PizzaButton onClick={handleOrderPizza} title="Escolher minha pizza">
            Montar pizza
          </PizzaButton>
        </PizzaContainer>

        <PizzaContainer>
          <PizzaPicture>
            <img src={pizzaImg} alt="Pizza" />
          </PizzaPicture>

          <PizzaDescription>
            <h2>Promoção do dia</h2>
            <p>
              Separamos para você uma delíciosa pizza de sabor
              {' '}
              {recommendation}
              {' '}
              com um desconto especial!
            </p>
            <span>R$ 29,90</span>
          </PizzaDescription>

          <PizzaButton title="Aproveitar promoção" onClick={handleModal}>
            Aproveitar
          </PizzaButton>
        </PizzaContainer>
      </Container>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <h2>Parabéns!</h2>

        <p style={{ marginTop: 15 }}>
          Você aproveitou a nossa promoção e ganhou
          {' '}
          {points}
          {' '}
          pontos para a próxima compra!
        </p>
      </Modal>
    </>
  );
};

export default Dashboard;
