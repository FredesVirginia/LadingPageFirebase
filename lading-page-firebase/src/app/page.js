import Image from 'next/image'

export default function Home() {
  return (
    <div className="  ">
       <div className=" pt-10 px-56   h-[450px]">
     <div className='flex  space-x-52'>
      <form>
        <h1 className='font-bold text-xl text-white'>Jonh Clein Developer</h1>
        <h2 className='text-white mb-36'> Service Firebase for Android</h2>

        <h2 className='font-bold text-xl text-white' > This is Best Program</h2>
         <div className='w-20 my-5 h-2 bg-gradient-to-b from-color3 to-pink-600'>

         </div>
        <h3 className=' text-white mb-9'> Thank for Buyght</h3>
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
      <video width="320" height="240" controls autoPlay>
      <source src="./Img/v3.mp4" type="video/mp4" />
      Tu navegador no soporta el elemento de video.
    </video>
      </div>
     </div>
     
    </div>
   
    
    </div>
  )
}
