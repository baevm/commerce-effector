const SizeItem = ({
  size,
  avaliableSizes,
  selectedSize,
  setSelectedSize,
}: {
  size: number
  avaliableSizes: number[]
  selectedSize: number | null
  setSelectedSize: (num: number) => void
}) => {
  if (avaliableSizes?.includes(size)) {
    return (
      <div
        onClick={() => setSelectedSize(size)}
        className={`flex cursor-pointer justify-center rounded-sm border-[1px] bg-white p-2 active:scale-[98%] ${
          selectedSize === size ? 'border-black' : 'border-gray-200'
        }`}>
        {size}
      </div>
    )
  } else {
    return (
      <div className='flex justify-center rounded-sm border-[1px] border-gray-200 bg-[#F7F7F7] p-2 text-[#DDDDDD]'>
        {size}
      </div>
    )
  }
}

export default SizeItem
