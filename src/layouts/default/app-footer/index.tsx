import { Container } from '~components/atoms/container';
import { Text } from '~components/atoms/text';
import styles from './app-footer.module.scss';

export const AppFooter = () => {
  return (
    <footer className={styles.root}>
      <Container>
        <Text size="sm">&copy; MovieDB - Legal, links and stuff</Text>
      </Container>
    </footer>
  );
};
