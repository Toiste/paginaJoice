import './App.css'

function Garden() {

  return (
    <section className="flex relative w-screen h-screen items-center   bg-[url('/src/assets/fundoJardim.png')] bg-cover bg-center flex-col pt-[100px]">
      <div className='w-[288px]'>
        <p className='text-black text-center textoBiblia'>
            1 Coríntios 13:4-7
        </p>
        <p className='text-black text-left textoBiblia'>
            "O amor é paciente, o amor é bondoso.<br/>
            Não inveja, não se vangloria, não se orgulha.<br/>
            Não maltrata, não procura seus interesses, não se ira facilmente, não guarda rancor.<br/>
            O amor não se alegra com a injustiça, mas se alegra com a verdade.<br/>
            Tudo sofre, tudo crê, tudo espera, tudo suporta."
        </p>

      </div>
      
    </section>
  )
}

export default Garden
