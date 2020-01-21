import styled from 'styled-components';

import Title from '../components/Title';
import Layout from '../components/Layout';
import List from '../components/List';

const Item = styled.li`
  a {
    color: ${props => props.color};
    opacity: 0.8;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
    }
  }
`;

export default () => (
  <>
    <Layout>
      <Title>Contact</Title>

      <List>
        <Item color="#1da1f2">
          <a href="https://twitter.com/raul_dronca">Twitter</a>
        </Item>
        <Item color="#ea4c89">
          <a href="https://dribbble.com/rauldronk">Dribbble</a>
        </Item>
        <Item color="#fafafa">
          <a href="https://github.com/iRaul">Github</a>
        </Item>
        <Item color="#47cf73">
          <a href="https://codepen.io/rauldronca">Codepen</a>
        </Item>
        <Item color="#00a0dc">
          <a href="https://www.linkedin.com/in/raul-dronca-7434a3184/">
            Linkedin
          </a>
        </Item>
        <Item color="#fbbc05">
          <a href="mailto:rauldronk@gmail.com">Email</a>
        </Item>
      </List>
    </Layout>
  </>
);
