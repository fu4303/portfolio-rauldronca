import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Layout from '../components/Layout';
import Link from '../components/Link';
import Memoji from '../components/Memoji';
import { CTA } from '../components/Buttons';

export default () => (
  <>
    <Layout>
      <Title>
        Raul Dronca <Memoji />
      </Title>
      <Subtitle>
        User Interface Designer/Engineer, working at{' '}
        <a
          href="https://fyusion.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fyusion
        </a>{' '}
        at the intersaction between desing and engineering.
      </Subtitle>
      <Link href="/about">
        <CTA>More about me</CTA>
      </Link>
    </Layout>
  </>
);
