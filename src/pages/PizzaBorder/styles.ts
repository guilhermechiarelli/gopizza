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

export const Options = styled.div`
  background: #f0f0f5;
  padding: 10px;
  display: flex;
  flex-direction: column;

  label {
    padding: 10px;

    input {
        margin-right: 10px;
    }
  }
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
