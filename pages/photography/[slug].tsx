import type { NextPage } from 'next'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import { useCallback, useContext, useEffect, useState } from 'react'
import { AiFillEye, AiOutlineGithub } from 'react-icons/ai'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineFileDownload, MdShare } from 'react-icons/md'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import Motion from '../../components/Motion'
import AppContext from '../../context/AppContext'
import ErrorPage from '../404'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Toast from '../../components/Misc/Toast'

const PhotographyDetail: NextPage = () => {
  const [toast, setToast] = useState(null)
  useEffect(() => {
    if (toast)
      setTimeout(() => {
        setToast(null)
      }, 3000)
  }, [toast])

  const router = useRouter()
  const { slug } = router.query

  const value = useContext(AppContext)
  const { photographyData } = value.state

  const curr = photographyData?.photographs?.find((p) => p.slug == slug)

  const [emblaRef, embla] = useEmblaCarousel({
    align: 'start',
    // aligns the first slide to the start
    // of the viewport else will align it to the middle.

    loop: true,
    // we need the carousel to loop to the
    // first slide once it reaches the last slide.

    skipSnaps: false,
    // Allow the carousel to skip scroll snaps if
    // it's dragged vigorously.

    inViewThreshold: 0.7,
    // percentage of a slide that need's to be visible
    // inorder to be considered in view, 0.7 is 70%.
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])

  // this function allow's us to scroll to the slide whose
  // id correspond's to the id of the navigation dot when we
  // click on it.

  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [embla])

  // set the id of the current slide to active id
  // we need it to correctly highlight it's corresponding
  // navigation dot.

  const onSelect = useCallback(() => {
    if (!embla) return
    setSelectedIndex(embla.selectedScrollSnap())
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla, setSelectedIndex])

  // make sure embla is mounted and return true operation's
  // can be only performed on it if it's successfully mounted.

  useEffect(() => {
    if (!embla) return
    onSelect()
    setScrollSnaps(embla.scrollSnapList())
    embla.on('select', onSelect)
  }, [embla, setScrollSnaps, onSelect])

  if (!curr) {
    return <ErrorPage />
  }
  return (
    <Motion title={`Jevon Levin | ${slug}`} description="Hey! I'm Jevon, A Fullstack Developer, Photographer, and a Student!">
      <div className="my-8 w-full px-3 font-sen">
        {toast}
        <div>
          <div className="flex w-full items-center justify-between">
            <p className="text-3xl font-bold text-black dark:text-white">{curr.title}</p>
            <div
              className="cursor-pointer hover:scale-110"
              onClick={() => {
                navigator.clipboard.writeText(`${curr.title} by Jevon - ${window.location.href}`)
                setToast(
                  <Toast
                    message="URL Copied succesfully! Now, you can paste and share this page to anyone! &#128513;"
                    onClose={() => {
                      setToast(null)
                    }}
                  />
                )
              }}
            >
              <MdShare className="mr-1 text-lg text-black dark:text-white" />
            </div>
          </div>
          <p className="mt-1 text-lg text-gray-600">{curr.description}</p>
          <div className="mt-1 flex w-full flex-wrap items-center sm:w-1/2">
            <div className="mr-1 mb-1 rounded-lg bg-lightText px-2 py-1 text-xs text-white dark:bg-zinc-800">{curr.type}</div>
          </div>

          <div className="readme relative mt-5 w-full max-w-[90vw] overflow-hidden rounded-lg border bg-white px-11 py-4 text-black dark:border-0 dark:bg-[#0d1117] dark:text-white">
            {/* <p className="cursor-pointer text-xs hover:underline dark:text-gray-100">asd</p> */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {curr?.images.map((img, index) => (
                  <>
                    <div className="relative mx-10 flex w-full flex-none flex-wrap lg:flex-nowrap" key={index}>
                      <div className="h-[60vh] w-[90vw] cursor-pointer overflow-hidden sm:h-[50rem]">
                        <Image
                          src={img}
                          layout={'fill'}
                          objectFit={'contain'}
                          className="rounded-lg bg-center blur-0"
                          placeholder="blur"
                          alt="Image"
                          blurDataURL={'/assets/icon/placeholder.svg'}
                        />
                      </div>
                    </div>
                  </>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-center space-x-2">
                {scrollSnaps.map((_, idx) => (
                  <button
                    className={`my-2 h-1 w-8 rounded-full ${
                      idx === selectedIndex ? 'bg-gradient-to-r from-[#D8B4FE] to-[#818CF8]' : 'bg-[#eff1f3] dark:bg-[#171b22]'
                    }`}
                    key={idx}
                    onClick={() => scrollTo(idx)}
                  />
                ))}
              </div>
            </div>
            <svg width="0" height="0">
              <linearGradient id="main-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop stopColor="#D8B4FE" offset="0%" />
                <stop stopColor="#818CF8" offset="100%" />
              </linearGradient>
            </svg>
            <div className="absolute left-0 top-[40%] z-50 cursor-pointer text-lg " onClick={scrollPrev}>
              <MdKeyboardArrowLeft className="text-5xl" style={{ fill: 'url(#main-gradient)' }} />
            </div>
            <div className="absolute top-[40%] right-0 z-50 cursor-pointer text-black dark:text-white" onClick={scrollNext}>
              <MdKeyboardArrowRight className=" text-5xl" style={{ fill: 'url(#main-gradient)' }} />
            </div>
          </div>
        </div>
      </div>
    </Motion>
  )
}

export default PhotographyDetail
