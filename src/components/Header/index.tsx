import React from 'react';

import { FaPizzaSlice } from 'react-icons/fa';

import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <header>

      <div>
        <FaPizzaSlice size={40} />
        <span>GoPizza</span>
      </div>

    </header>
  </Container>
);

export default Header;
