import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <h1 className="h-screen w-screen flex flex-col justify-between items-center relative">
      <div className="text-2xl text-center pt-8">Which Pokemon is Rounder?</div>
      <div className="p-2" />
      <div className="p-8 flex justify-between items-center max-w-2xl flex-col md:flex-row animate-fade-in">
        <div className="w-16 h-16 bg-red-200" />
        <div>Vs</div>
        <div className="w-16 h-16 bg-red-200" />
      </div>
    </h1>
  );
};

export default Home;
