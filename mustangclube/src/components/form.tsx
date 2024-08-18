"use client";

import React, { useState } from 'react';
import { pathToFileURL } from 'url';
import { Button } from './ui/button';
import { CoolMode } from './magicui/cool-mode';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    matricula: '',
    foto: pathToFileURL,
    cidade: '',
    mensagem: '',
  });

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    alert(`Form Submitted:
    Nome: ${formData.nome}
    Matricula: ${formData.matricula}
    Foto: ${formData.foto ? formData.foto.name : 'No file selected'}
    Cidade: ${formData.cidade}
    Mensagem: ${formData.mensagem}`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Nome:</label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
          className="bg-background w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Matricula:</label>
        <input
          type="text"
          name="matricula"
          value={formData.matricula}
          onChange={handleChange}
          required
          className="bg-background w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Foto:</label>
        <input
          type="file"
          name="foto"
          accept="image/*"
          onChange={handleChange}
          className="bg-background w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Cidade:</label>
        <input
          type="text"
          name="cidade"
          value={formData.cidade}
          onChange={handleChange}
          required
          className="bg-background w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Mensagem:</label>
        <textarea
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          required
          className="bg-background w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <CoolMode
        options={{
          particle:
            "/logo_no_bk.png",
        }}
      >
        <Button type="submit" 
        className="w-full bg-background text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        > Submit</Button>
      </CoolMode>
    </form>
  );
}
