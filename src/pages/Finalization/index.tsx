import React, {
  useCallback,
  useContext,
} from 'react';

import { useHistory } from 'react-router-dom';
import { OrderContext } from '../../context/Order';
import Header from '../../components/Header';

import { OrderSummaryArea } from './styles';

const Finalization: React.FC = () => {
  const history = useHistory();

  const { order, updateOrder } = useContext(OrderContext);

  const handleGoBack = useCallback(() => {
    updateOrder({});

    history.push('/');
  }, [history, updateOrder]);

  return (
    <>
      <Header />

      <OrderSummaryArea>
        <h2>Uhuul! Seu pedido está sendo preparado...</h2>

        <h3>Detalhes:</h3>

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

        <p>
          - Observações:
          {' '}
          {order.observations ? order.observations : 'Não informado'}
        </p>

        <button type="button" onClick={handleGoBack}>
          Fazer outro pedido
        </button>
      </OrderSummaryArea>
    </>
  );
};

export default Finalization;
