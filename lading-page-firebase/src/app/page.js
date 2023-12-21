import Image from 'next/image'

export default function Home() {
  return (
    <div className=" pt-10 px-40 bg-gradient-to-b from-color1 to-color2 h-[450px]">
     <div>
      <form>
        <h1 className='font-bold text-xl text-white'>Jonh Clein Developer</h1>
        <h2 className='text-white mb-20'> Service Firebase for Android</h2>

        <h2 className='font-bold text-xl text-white' > This is Best Program</h2>
        <h3 className=' text-white'> Thank for Buyght</h3>
          <div className='flex flex-col space-y-6'>
          <input 
         className='border-gray-400 w-80'
         type='text'
        >
        </input>
        <input
         className='w-80'
         type="email"
        >
        </input>
        <button className='text-white text-xl bg-gradient-to-b from-color3 to-pink-600 w-80 h-10'>
          Submit kjnkj
        </button>
          </div>
      </form>
      <div>
        <div>

        </div>
      </div>
     </div>
     <footer className=''>
      gfbg
     </footer>
    </div>
  )
}
