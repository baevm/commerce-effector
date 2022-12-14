import React, { useState } from 'react'

const PageType = () => {
  const [pageType, setPageType] = useState<'new' | 'popular'>('new')

  return (
    <div className='col-start-2 col-end-2 row-start-3 row-end-3 flex items-center justify-center gap-4 bg-[#F3F3F5]'>
      <div
        onClick={() => setPageType('new')}
        className={` ${
          pageType === 'new' ? 'text-active underline underline-offset-8' : 'text-black'
        } cursor-pointer text-xl`}>
        New
      </div>
      <div
        onClick={() => setPageType('popular')}
        className={`${
          pageType === 'popular' ? 'text-active underline underline-offset-8' : 'text-black'
        } cursor-pointer text-xl`}>
        Popular
      </div>
    </div>
  )
}

export default PageType
