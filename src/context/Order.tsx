import React, { createContext, useCallback, useState } from 'react';

interface IPizzaContext {
  size?: string;
  filling?: string;
  border?: string | null;
  observations?: string | null;
}

interface IOrderContext {
  order: IPizzaContext;
  updateOrder(data: IPizzaContext): void;
}

export const OrderContext = createContext<IOrderContext>({} as IOrderContext);

// eslint-disable-next-line react/prop-types
export const OrderProvider: React.FC = ({ children }) => {
  const [order, setOrder] = useState<IPizzaContext>({} as IPizzaContext);

  const updateOrder = useCallback((data: IPizzaContext) => {
    setOrder({ ...order, ...data });
  }, [order]);

  return (
    <OrderContext.Provider value={{ order, updateOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
