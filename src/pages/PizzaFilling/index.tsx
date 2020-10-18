import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
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

  interface IFilling {
    id: string,
    description: string;
  }

const PizzaFilling: React.FC = () => {
  const [pizzaFilling, setPizzaFilling] = useState<string | undefined>(undefined);
  const [fillings, setFillings] = useState<IFilling[]>([]);

  const history = useHistory();

  const { updateOrder } = useContext(OrderContext);

  useEffect(() => {
    api.get('/fillings').then((response) => {
      setFillings(response.data);
    });
  }, []);

  const handleSubmit = useCallback((formSubmitEvent: React.FormEvent<HTMLFormElement>) => {
    formSubmitEvent.preventDefault();

    updateOrder({ filling: pizzaFilling });

    history.push('/order/observations');
  }, [updateOrder, pizzaFilling, history]);

  const handleValue = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    setPizzaFilling(event.currentTarget.value);
  }, []);

  return (
    <>
      <Header />

      <Container onSubmit={handleSubmit}>
        <Title>Qual o sabor de hoje?</Title>

        <Options>
          {fillings.map((filling) => (
            <label htmlFor={filling.id} key={filling.id}>
              <input type="radio" id={filling.id} value={filling.description} name="filling" onChange={handleValue} />
              {filling.description}
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

export default PizzaFilling;
