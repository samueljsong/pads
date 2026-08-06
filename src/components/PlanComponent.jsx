import check from '../assets/checkmark.png'

export const PlanComponent = ({details}) => {

    return (
        <div className=" w-90 h-130 bg-[#0a0a0c] customShadow rounded-xl flex flex-col gap-6 justify-between">
            <div className='p-6 flex flex-col gap-6'>
                {
                    (details.status) 
                        ? <div className=' w-3 h-3 bg-green-400 rounded-4xl'></div> 
                        : <div className=' w-3 h-3 bg-red-400 rounded-4xl'></div> 
                }
                <div>
                    <h2 className=' font-light text-text text-3xl'>{details.perkName}</h2>
                    <h2 className='text-text text-5xl'>${details.price}</h2>
                    <p className='text-text-secondary'>per user/month, billed monthly</p>
                </div>
                <div className='flex flex-col gap-2'>
                    {
                        details.perks.map((perk) => {
                            return (
                                <div className=' flex gap-2'>
                                    <img src={check} alt="" className=' w-6'/>
                                    <p className='text-text'>{perk}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='p-6 w-full flex'>
                {
                    (details.status)
                        ? <button className='
                            border
                            w-full 
                            text-text 
                            text-lg 
                            py-2 
                            px-4 
                            rounded-3xl
                            text-center 
                            hover:bg-surface-hover cursor-pointer'>Launch Session</button>
                        : <div className='
                            border
                            w-full 
                            text-red-400 
                            text-lg 
                            py-2 
                            px-4 
                            rounded-3xl
                            text-center '>Coming soon</div>
                }
            </div>
        </div>
    )
}