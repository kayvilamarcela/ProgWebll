import { useEffect, useState } from 'react';

function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/alunos')
      .then((res) => res.json())
      .then((data) => {
        setAlunos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Erro ao buscar alunos:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando tarefas...</p>;

  return (
    <ul>
      {alunos.map((item) => (
        <li key={item.id}>{item.description}</li>
      ))}
    </ul>
  );
}

export default Alunos;