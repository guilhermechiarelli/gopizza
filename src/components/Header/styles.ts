import styled from 'styled-components';

export const Container = styled.div`
  background: #c72828;
  padding: 40px 20px 30px;

  header {
    max-width: 980px;
    margin: 0 auto;
    padding: 0 0 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      display: flex;
      align-items: center;

      svg {
        color: #fff;
      }

      span {
        color: #fff;
        margin-left: 10px;
        font-size: 28px;
      }
    }
  }
`;
