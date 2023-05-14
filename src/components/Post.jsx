import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/Pinheirus.png"
          />
          <div className={styles.authorInfo}>
            <strong>Lucas Pinheiro</strong>
            <span>Futuro Desenvolvedor Front End</span>
          </div>
        </div>

        <time title="14 de Maio ás 12:32" dateTime="2023-04-14 12:32">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
          <p>Fala galeraa 👋</p>
          <p>Acabei de subir mais um projeto no meu portifa. É um
          projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto
          é DoctorCare 🚀</p>
          <p>👉 <a href=""> jane.design/doctorcare</a></p>
          <p> <a href="">novoprojeto #nlw#rocketseat</a></p>
      </div>
    </article>
  );
}
