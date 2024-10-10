import { useEffect, useState } from 'react';
import './App.css'
import videoJoice from "./assets/videoNiverJoice.mp4"
import poster from "./assets/capaVideo.png"
import planta from "./assets/planta.png"

function App() {
  const [years, setYears] = useState(Number)
  const [months, setMonths] = useState(Number)
  const [days, setDays] = useState(Number)
  const [hours, setHours] = useState(Number)
  const [minutes, setMinutes] = useState(Number)
  const [seconds, setSeconds] = useState(Number)

  useEffect(() => {
    setInterval(updateTime, 1000)

  }, []);
  // Defina a data de início do relacionamento
  const startDate = new Date('2022-12-23T00:00:00-03:00'); // Exemplo: 1º de janeiro de 2022

  // Função que atualiza o tempo
  function updateTime() {
    const now = new Date();
    const diff = now - startDate;

    // Calcule o tempo total em segundos
    const totalSeconds = Math.floor(diff / 1000);

    // Converta para anos, meses, dias, horas, minutos e segundos
    const years = Math.floor(totalSeconds / (365 * 24 * 3600));
    const remainingAfterYears = totalSeconds % (365 * 24 * 3600);

    const months = Math.floor(remainingAfterYears / (30 * 24 * 3600));
    const remainingAfterMonths = remainingAfterYears % (30 * 24 * 3600);

    const days = Math.floor(remainingAfterMonths / (24 * 3600));
    const remainingAfterDays = remainingAfterMonths % (24 * 3600);

    const hours = Math.floor(remainingAfterDays / 3600);
    const remainingAfterHours = remainingAfterDays % 3600;

    const minutes = Math.floor(remainingAfterHours / 60);
    const seconds = remainingAfterHours % 60;

    // Atualize o conteúdo do HTML com os valores calculados
    setYears(years)
    setMonths(months)
    setDays(days)
    setHours(hours)
    setMinutes(minutes)
    setSeconds(seconds)
  }

  




  return (
    
    <main className='flex relative w-screen  bg-[#202020] flex-col min-h-screen pb-[70px]'>
      <header className='w-full h-[109px] bg-[#D30000] pt-[49px] flex justify-center items-center gap-[12px]'>
        <img src="./whiteHeart.svg" alt="coração branco" className='w-[51px]' />
        <h2 >MINHA MELHOR ESCOLHA FOI VOCÊ!</h2>
      </header>
      <div className="w-full flex justify-center items-center items-center h-full flex-col gap-[17px] pt-[50px]">
      <video controls poster={poster} width="318" height="511" className="rounded-[10px] border-solid border-[2px] border-[#FFFFFF]/65">
        <source src={videoJoice} type="video/mp4" />
        Seu navegador não suporta o vídeo.
      </video>
      <h1 className='text-[24px]'>Nosso Tempo Juntos</h1>
      <p >{years} ano, {months} meses, {days} dias</p>
      <p>{hours} horas, {minutes} minutos, {seconds} segundos</p>
      </div>
      <img src={planta} alt="planta divisória de seção" className='w-full absolute bottom-[-90px] z-[1]' />
    </main>
  )
}

export default App
