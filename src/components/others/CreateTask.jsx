import React from 'react'

const CreateTask = () => {
  return (
                <div className='mt-10'>
                <form id='form' className='bg-[#1c1c1c] p-8 rounded flex gap-20 h-auto'>
                    <div className='flex-1 flex flex-col gap-5'>
                        <div>
                            <h2>Task Title</h2>
                            <input placeholder='Make a UI Design' type="text" />
                        </div>
                        <div>
                            <h2>Date</h2>
                            <input type="date" />
                        </div>
                        <div>
                            <h2>Assign to</h2>
                            <input placeholder='Employee name' type="text" />
                        </div>
                        <div>
                            <h2>Category</h2>
                            <input placeholder='Design, Dev, etc' type="text" />
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col'>
                        <h2>Description</h2>
                        <textarea id='textarea' className='h-[calc(100%-1.25rem)] mb-5'></textarea>
                        <button className='py-2 bg-green-400 rounded font-semibold justify-self-end'>Create Task</button>
                    </div>
                </form>
            </div>
  )
}

export default CreateTask