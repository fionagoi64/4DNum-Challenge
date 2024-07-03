import share from '../images/webShare.svg'

export const Card = () => {
    return (
        <div className="grid grid-cols-3 gap-2">
            <div className="card relative bg-white rounded-3xl">
                {/* branch name  */}
                <div className="bg-black text-white flex flex-row justify-between 
                items-start p-4 pb-16 rounded-b-[60px] rounded-3xl">
                    <div className="flex flex-grow justify-center">
                        <div className="flex flex-col items-center gap-1">
                            <div className="logos-bg">
                                <img className="logos" src={share} alt="" />
                            </div>
                            <p>Magnum 4D</p>
                        </div>
                    </div>
                    <button>
                        <img src={share} alt="" />
                    </button>
                </div>
                {/* date */}
                <div className="absolute top-32 w-[calc(100%-2.5rem)] left-1/2 -translate-x-1/2
                 bg-white flex flex-row rounded-2xl shadow-md py-3 my-2 items-center">
                    <div className='flex-1 text-center space-y-3'>
                        <p className="font-thin text-[10px]">Date</p>
                        <p className='text-sm'>Hi</p>
                    </div>
                    <div className="border-l-[0.2px] border-gray-400 h-6" />
                    <div className="flex-1 text-center space-y-3">
                        <p className="font-thin text-[10px]">Draw No.</p>
                        <p className='text-sm'>Hi</p>
                    </div>
                </div>
                {/* dddd */}
                <div className="mt-12 mb-8 mx-5">
                    <div className="bg-black text-white text-center rounded-xl py-2">
                        name
                    </div>
                    <div className="grid grid-cols-5 gap-2 mt-3">
                        <div className="relative bg-white shadow-md rounded-md text-center">
                            <p className="absolute text-[8px] font-medium text-red-500 px-[3px]">A</p>
                            <h1 className="text-xl font-medium py-[1px]">1232</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card