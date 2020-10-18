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

  interface Iborders {
    id: string,
    description: string;
  }

const PizzaBorder: React.FC = () => {
  const [pizzaBorder, setPizzaBorder] = useState<string | undefined>(undefined);
  const [borders, setborders] = useState<Iborders[]>([]);

  const history = useHistory();

  const { updateOrder } = useContext(OrderContext);

  useEffect(() => {
    api.get('/borders').then((response) => {
      setborders(response.data);
    });
  }, []);

  const handleSubmit = useCallback((formSubmitEvent: React.FormEvent<HTMLFormElement>) => {
    formSubmitEvent.preventDefault();

    updateOrder({ border: pizzaBorder });

    history.push('/order/filling');
  }, [updateOrder, pizzaBorder, history]);

  const handleValue = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    setPizzaBorder(event.currentTarget.value);
  }, []);

  return (
    <>
      <Header />

      <Container onSubmit={handleSubmit}>
        <Title>Qual a sua borda preferida?</Title>

        <Options>
          {borders.map((border) => (
            <label htmlFor={border.id} key={border.id}>
              <input type="radio" id={border.id} value={border.description} name="border" onChange={handleValue} />
              {border.description}
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

export default PizzaBorder;
