import { AnimatePresence, motion, useAnimationControls } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import {
  IoLogoFacebook,
  IoLogoGoogle,
  IoLogoInstagram,
  IoLogoTwitter,
  IoMapSharp,
  IoMenu,
  IoCloseCircleOutline,
} from 'react-icons/io5'
import useClickOutside from '../../hooks/useClickOutside'
import useMediaQuery from '../../hooks/useMediaQuery'
import ActionIcon from '../Common/ActionIcon'
import Logo from './Logo'

const SOCIAL_LINKS = [
  { id: 1, icon: <IoLogoTwitter size={20} color='#313025' />, link: 'https://twitter.com' },
  { id: 2, icon: <IoLogoFacebook size={20} color='#313025' />, link: 'https://facebook.com' },
  { id: 3, icon: <IoLogoInstagram size={20} color='#313025' />, link: 'https://instagram.com' },
  { id: 4, icon: <IoLogoGoogle size={20} color='#313025' />, link: 'https://google.com' },
  { id: 5, icon: <IoMapSharp size={20} color='#313025' />, link: 'https://maps.google.com' },
]

const LINKS = [
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
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  useClickOutside(menuRef, () => setIsOpen(false))

  useEffect(() => {
    constrols.start(isOpen ? 'hidden' : 'visible')
  }, [isOpen])

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <>
      {/* Full size leftbar only visible on pc */}
      <div className='hidden flex-col items-center justify-between px-8 py-6 lg:flex'>
        <Link href='/'>
          <Logo />
        </Link>
        <ActionIcon onClick={() => setIsOpen(true)}>
          <IoMenu size={32} color='#313025' />
        </ActionIcon>
        <div className='flex flex-col gap-4'>
          {SOCIAL_LINKS.map((link) => (
            <ActionIcon key={link.id} onClick={() => openInNewTab(link.link)}>
              {link.icon}
            </ActionIcon>
          ))}
        </div>
      </div>

      {/* Burger icon only visible on mobile */}
      <ActionIcon onClick={() => setIsOpen(true)} className='absolute left-4 top-4 z-50 lg:hidden'>
        <IoMenu size={32} color='#313025' />
      </ActionIcon>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: isDesktop ? '50%' : '100%',
              transition: { delay: 0.1, duration: 0.7 },
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.7 },
            }}
            ref={menuRef}
            className={`absolute z-[100] flex h-full w-full bg-white lg:z-50 lg:w-1/2`}>
            <motion.div initial='closed' animate='open' exit='closed' variants={sideVariants} className='w-full'>
              <div className='flex h-full w-10/12 flex-col justify-around p-10 lg:p-44'>
                <div className='flex items-center justify-between'>
                  <Logo />
                  <ActionIcon onClick={() => setIsOpen(false)} className='lg:hidden'>
                    <IoCloseCircleOutline size={32} />
                  </ActionIcon>
                </div>
                <div>
                  {LINKS.map((link) => (
                    <motion.div key={link.id} whileHover={{ scale: 1.1 }} variants={itemVariants}>
                      <Link href={link.link}>
                        <div className='hover:text-active py-2 text-4xl font-semibold'>{link.label}</div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <div className='flex gap-4'>
                  {SOCIAL_LINKS.map((link) => (
                    <motion.div key={link.id} whileHover={{ scale: 1.1 }} variants={itemVariants}>
                      <ActionIcon key={link.id} onClick={() => openInNewTab(link.link)}>
                        {link.icon}
                      </ActionIcon>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            {/* Top right image only visible on desktop */}
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.7 } }}
                exit={{ opacity: 0 }}
                className='absolute right-[-100px] top-[-120px] hidden h-[320px] w-[420px] rotate-[-30deg]'>
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
