import React, {
  useCallback, useContext, useEffect, useState,
} from 'react';

import { useHistory } from 'react-router-dom';
import { OrderContext } from '../../context/Order';
import Header from '../../components/Header';
import api from '../../services/api';

import {
  Container,
  Title,
  Options,
  NextButton,
} from './styles';

interface ISizes {
  id: string,
  description: string;
}

const PizzaSize: React.FC = () => {
  const [pizzaSize, setPizzaSize] = useState<string | undefined>(undefined);
  const [sizes, setSizes] = useState<ISizes[]>([]);

  const history = useHistory();

  const { updateOrder } = useContext(OrderContext);

  useEffect(() => {
    api.get('/sizes').then((response) => {
      setSizes(response.data);
    });
  }, []);

  const handleSubmit = useCallback((formSubmitEvent: React.FormEvent<HTMLFormElement>) => {
    formSubmitEvent.preventDefault();

    updateOrder({ size: pizzaSize });

    history.push('/order/border');
  }, [updateOrder, pizzaSize, history]);

  const handleValue = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    setPizzaSize(event.currentTarget.value);
  }, []);

  return (
    <>
      <Header />

      <Container onSubmit={handleSubmit}>
        <Title>Qual o tamanho da pizza?</Title>

        <Options>
          {sizes.map((size) => (
            <label htmlFor={size.id} key={size.id}>
              <input type="radio" id={size.id} value={size.description} name="size" onChange={handleValue} />
              {size.description}
            </label>
          ))}
        </Options>

        <NextButton title="Próximo passo">
          Próximo passo
        </NextButton>
      </Container>
    </>
  );
};

export default PizzaSize;
