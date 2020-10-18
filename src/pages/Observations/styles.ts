import styled from 'styled-components';

export const Form = styled.form`
  max-width: 980px;
  margin: 0 auto;
  margin-top: -70px;
`;

export const Title = styled.h2`
  padding: 15px 10px;
  background: #ffb84d;
  color: #fff;

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const TextArea = styled.textarea`
  display: flex;
  border: none;
  width: 100%;
  height: 200px;
  padding: 15px 10px;
  resize: none;
  background: #f0f0f5;
`;

export const NextButton = styled.button`
  background: #e4e4eb;
  text-transform: uppercase;
  padding: 20px 0;
  width: 100%;
  border: 0;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const OrderSummaryArea = styled.div`
  padding-top: 30px;
  max-width: 980px;
  margin: 0 auto;
  color: grey;
`;
