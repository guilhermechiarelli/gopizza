import React, {
  useCallback,
  useContext,
  useState,
} from 'react';

import { useHistory } from 'react-router-dom';
import { OrderContext } from '../../context/Order';
import Header from '../../components/Header';

import {
  Form,
  Title,
  NextButton,
  TextArea,
  OrderSummaryArea,
} from './styles';

const Observations: React.FC = () => {
  const [observations, setObservations] = useState<string | null>(null);

  const history = useHistory();

  const { order, updateOrder } = useContext(OrderContext);

  const handleSubmit = useCallback((formSubmitEvent: React.FormEvent<HTMLFormElement>) => {
    formSubmitEvent.preventDefault();

    updateOrder({ observations });

    history.push('/order/finalization');
  }, [updateOrder, observations, history]);

  const handleValue = useCallback((event: React.FormEvent<HTMLTextAreaElement>) => {
    setObservations(event.currentTarget.value);
  }, []);

  return (
    <>
      <Header />

      <Form onSubmit={handleSubmit}>
        <Title>Deseja adicionar alguma observação?</Title>

        <TextArea name="textValue" placeholder="Escreva sua observação aqui" onChange={handleValue} />

        <NextButton title="Finalizar">
          Finalizar
        </NextButton>
      </Form>

      <OrderSummaryArea>
        <h2>Meu pedido até aqui:</h2>

        <p>
          - Tamanho:
          {' '}
          {order.size ? order.size : 'Não informado'}
        </p>

        <p>
          - Recheio:
          {' '}
          {order.filling ? order.filling : 'Não informado'}
        </p>

        <p>
          - Borda:
          {' '}
          {order.border ? order.border : 'Não informado'}
        </p>
      </OrderSummaryArea>
    </>
  );
};

export default Observations;
