import React from 'react'

const Divider = ({ my }: { my?: string }) => <hr className={`${my ? my : 'my-2'} border-[1px] border-gray-300`} />

export default Divider
