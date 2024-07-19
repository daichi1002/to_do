'use client'
import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/hello')
      .then(response => response.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <h1>{message}</h1>
  );
}
