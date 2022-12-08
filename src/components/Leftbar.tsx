import { AnimatePresence, motion, useAnimationControls } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { IoLogoFacebook, IoLogoGoogle, IoLogoInstagram, IoLogoTwitter, IoMapSharp, IoMenu } from 'react-icons/io5'
import useClickOutside from '../hooks/useClickOutside'
import ActionIcon from './ActionIcon'

const socialLinks = [
  { id: 1, icon: <IoLogoTwitter size={20} color='#313025' /> },
  { id: 2, icon: <IoLogoFacebook size={20} color='#313025' /> },
  { id: 3, icon: <IoLogoInstagram size={20} color='#313025' /> },
  { id: 4, icon: <IoLogoGoogle size={20} color='#313025' /> },
  { id: 5, icon: <IoMapSharp size={20} color='#313025' /> },
]

const links = [
  { id: 1, label: 'About', link: '/about' },
  { id: 2, label: 'Sneakers', link: '/sneakers' },
  { id: 3, label: 'Accessories', link: '/accessories' },
  { id: 4, label: 'Stores', link: '/stores' },
  { id: 5, label: 'Contacts', link: '/contacts' },
]

const itemVariants = {
  closed: {
    opacity: 0,
    transition: { delay: 0.7 },
  },
  open: { opacity: 1, transition: { delay: 0.7 } },
}

const sideVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
}

const Leftbar = () => {
  const menuRef = useRef<HTMLDivElement | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const constrols = useAnimationControls()

  useClickOutside(menuRef, () => setIsOpen(false))

  useEffect(() => {
    constrols.start(isOpen ? 'hidden' : 'visible')
  }, [isOpen])

  return (
    <>
      <div className='hidden flex-col items-center justify-between px-8 py-6 lg:flex'>
        <div className='rotate-[30deg]'>
          <Image src='/sneaker.png' width='52' height='52' alt='logo' />
        </div>
        <ActionIcon onClick={() => setIsOpen(true)}>
          <IoMenu size={32} color='#313025' />
        </ActionIcon>
        <div className='flex flex-col gap-4'>
          {socialLinks.map((link) => (
            <ActionIcon key={link.id}>{link.icon}</ActionIcon>
          ))}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: '50%',
              transition: { delay: 0.1, duration: 0.7 },
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.7 },
            }}
            ref={menuRef}
            className={`absolute z-50 flex h-full w-full bg-white lg:w-1/2`}>
            <motion.div initial='closed' animate='open' exit='closed' variants={sideVariants} className='w-full'>
              <div className='flex h-full w-10/12 flex-col justify-around p-44'>
                <div className='rotate-[30deg]'>
                  <Image src='/sneaker.png' width='52' height='52' alt='logo' />
                </div>
                <div>
                  {links.map((link) => (
                    <motion.div key={link.id} whileHover={{ scale: 1.1 }} variants={itemVariants}>
                      <Link href={link.link}>
                        <div className='hover:text-active py-2 text-4xl font-semibold'>{link.label}</div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <div className='flex gap-4'>
                  {socialLinks.map((link) => (
                    <motion.div key={link.id} whileHover={{ scale: 1.1 }} variants={itemVariants}>
                      <ActionIcon key={link.id}>{link.icon}</ActionIcon>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.7 } }}
                exit={{ opacity: 0 }}
                className='absolute right-[-100px] top-[-120px] h-[320px] w-[420px] rotate-[-30deg]'>
                <Image
                  src='https://cdn.shopify.com/s/files/1/0641/4381/8989/products/nike-dunk-low-university-blue-unc-2021-1-1000_800x.png?v=1651327939'
                  fill
                  alt='image'
                  style={{ objectFit: 'cover', objectPosition: '-20% 0' }}
                />
              </motion.div>
            )}
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}

export default Leftbar
