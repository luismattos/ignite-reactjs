import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";

import '../styles/repositories.scss';

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

const h1_name = 'Lista de repositorios';

export function RepositoryList() {

  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(function () {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
      .catch(e => console.log('Erro ao carregar os repositorios: ' + e.message))
  }, []);

  return (
    <section className="repository-list">
      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}
      </ul>
    </section>
  )
}