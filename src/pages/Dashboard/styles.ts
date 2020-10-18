import styled from 'styled-components';

export const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  margin-top: -70px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
`;

export const PizzaContainer = styled.div`
  background: #fff;
  max-width: 49%;
  flex: 49%;

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const PizzaPicture = styled.section`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  background: #ffb84d;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 110px;
  overflow: hidden;

  img {
    margin-top: 70px;
    width: 300px;
  }
`;

export const PizzaDescription = styled.div`
  background: #f0f0f5;
  padding: 20px;

  p {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  span {
    color: #41c900;
  }
`;

export const PizzaButton = styled.button`
  background: #e4e4eb;
  text-transform: uppercase;
  padding: 20px 0;
  width: 100%;
  border: 0;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
