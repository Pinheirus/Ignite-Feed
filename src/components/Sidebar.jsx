import { PencilLine } from 'phosphor-react' 

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      />

      <div className={styles.profile}>

        <img className={styles.avatar} src="https://github.com/Pinheirus.png" />

        <strong>Lucas Pinheiro</strong>
        <span>Futuro Desenvolvedor Front End</span>
      </div>

      <footer>
        <a href="#">
            <PencilLine size={20}/>
            Editar seu Perfil
            </a>
      </footer>
    </aside>
  );
}
