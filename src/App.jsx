import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
        <Post
        author="Lucas Pinheiro"
        content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, aut modi? Pariatur, excepturi perspiciatis eos iste maxime sapiente incidunt sint quo, quasi quas delectus architecto esse, quidem quisquam commodi nihil!"
      />
      <Post
        author="Maria Luiza"
        content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, aut modi? Pariatur, excepturi perspiciatis eos iste maxime sapiente incidunt sint quo, quasi quas delectus architecto esse, quidem quisquam commodi nihil!"
      />
        </main>
      </div>
    </div>
  );
}
