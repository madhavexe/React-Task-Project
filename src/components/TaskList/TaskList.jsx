import React from 'react'

const TaskList = () => {
    return (
        <div className='scrollbar h-[55%] overflow-x-auto flex items-center gap-5 flex-nowrap w-full mt-10'>
            <div className='h-full p-5 shrink-0 w-[300px] bg-red-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-sm px-4 py-1 rounded bg-red-500'>High</h3>
                    <h3 className='text-sm'>17 Feb 2026</h3>
                </div>
                <h2 className='text-2xl font-bold mt-5'>Make a youtube video</h2>
                <p className='trxt-sm mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, porro nostrum esse voluptates magnam cupiditate!</p>
            </div>
            <div className='h-full p-5 shrink-0 w-[300px] bg-blue-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-sm px-4 py-1 rounded bg-red-500'>High</h3>
                    <h3 className='text-sm'>17 Feb 2026</h3>
                </div>
                <h2 className='text-2xl font-bold mt-5'>Make a youtube video</h2>
                <p className='trxt-sm mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, porro nostrum esse voluptates magnam cupiditate!</p>
            </div>
            <div className='h-full p-5 shrink-0 w-[300px] bg-green-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-sm px-4 py-1 rounded bg-red-500'>High</h3>
                    <h3 className='text-sm'>17 Feb 2026</h3>
                </div>
                <h2 className='text-2xl font-bold mt-5'>Make a youtube video</h2>
                <p className='trxt-sm mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, porro nostrum esse voluptates magnam cupiditate!</p>
            </div>
            <div className='h-full p-5 shrink-0 w-[300px] bg-yellow-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-sm px-4 py-1 rounded bg-red-500'>High</h3>
                    <h3 className='text-sm'>17 Feb 2026</h3>
                </div>
                <h2 className='text-2xl font-bold mt-5'>Make a youtube video</h2>
                <p className='trxt-sm mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, porro nostrum esse voluptates magnam cupiditate!</p>
            </div>

        </div>
    )
}

export default TaskList