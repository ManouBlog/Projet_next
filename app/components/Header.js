import styles from '../../styles/Home.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerText}>
        <h2>DEVELOPPEUR WEB-MOBILE</h2>
        <h1>ADJOBI PIERRE</h1>
        <p>
Développeur web Fullstack avec des expériences dans 
la conception, le développement et la mise en œuvre 
d’application web évolutives. Solide compréhension 
des bonnes pratiques de développement, clean 
Architecture, et intégration d’API RESTful 
        </p>
      </div>
      <div className={styles.headerImage}>
        <img src="/profil.png" alt="Adjobi pierre" />
      </div>
    </header>
  );
};

export default Header;
