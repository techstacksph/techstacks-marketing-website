import React, { useState } from 'react'
import { PopupArrowTwo } from '../../../svg'
import ImageLightBox from '../../common/modals/image-lightbox'

const portfolio_contents = {
  subtitle: 'Completed Projects',
  title: 'Our Creative works',
  project_items: [
    {
      id: 32,
      img: '/assets/img/portfolio/t-1.png',
      title: 'WinMart E-commerce',
      subtitle: 'Ui/Ux Design / Web development',
      category: 'Website',
    },
    {
      id: 33,
      img: '/assets/img/portfolio/t-3.png',
      title: 'Thunder Enterprises',
      subtitle: 'Web development / Landing Page',
      category: 'Website',
    },
    {
      id: 34,
      img: '/assets/img/portfolio/t-9.png',
      title: 'MNM customs',
      subtitle: 'Web development / Landing Page',
      category: 'Website',
    },
    {
      id: 35,
      img: '/assets/img/portfolio/t-7.png',
      title: 'Agassiz Website',
      subtitle: 'Landing Page',
      category: 'Website',
      portfolio_2: true,
    },
    {
      id: 36,
      img: '/assets/img/portfolio/t-10.png',
      title: 'Portfolio Insider',
      subtitle: 'Web App development / Landing Page',
      category: 'Website',
    },
    {
      id: 37,
      img: '/assets/img/portfolio/t-2.png',
      title: 'Unpuzzle Web App',
      subtitle: 'Web App development',
      category: 'Website',
    },
    {
      id: 38,
      img: '/assets/img/portfolio/t-4.png',
      title: 'RTC Mimaropa',
      subtitle: 'Web development / Landing Page',
      category: 'Website',
    },
    {
      id: 39,
      img: '/assets/img/portfolio/t-6.png',
      title: 'DeDiabetes Website',
      subtitle: 'Web development',
      category: 'Website',
    },
  ],
}
const { subtitle, title, project_items } = portfolio_contents
const imagePerRow = 4

const PortfolioItems = () => {
  // category
  const [category, setCategory] = useState('Website')
  // category items
  const [items, setItems] = useState(project_items)
  // load next state
  const [next, setNext] = useState(imagePerRow)
  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null)
  // image open state
  const [open, setOpen] = useState(false)
  // handleImagePopup
  const handleImagePopup = index => {
    setPhotoIndex(index)
    setOpen(true)
  }
  // handleLoadData
  const handleLoadData = () => {
    setNext(value => value + 2)
  }
  // images
  const images = items.map(img => img.img)

  return (
    <React.Fragment>
      <div className="tp-project-area pt-120 pb-120 p-relative">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="project-section-box-two text-center">
                <h5 className="tp-subtitle">{subtitle}</h5>
                <h2 className="tp-title">{title}</h2>
              </div>
            </div>
          </div>
          <div className="row grid gx-45">
            {items?.slice(0, next)?.map((item, i) => (
              <div key={i} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="tp-project-item-two p-relative mb-45 fix">
                  <div className="portfolio-thumb fix">
                    <img className=" w-100" src={item.img} alt="" />
                  </div>
                  <div className="tp-portfolio-content-box">
                    <h3 className="portfolio-animation-title">{item.title}</h3>
                    <span>{item.subtitle}</span>
                  </div>
                  <div className="portfolio-animation-icon">
                    <button
                      className="popup-image"
                      onClick={() => handleImagePopup(i)}
                    >
                      <PopupArrowTwo />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {next < items.length && (
            <div className="row">
              <div className="col-12">
                <div className="tp-project-button text-center mt-25">
                  <button onClick={handleLoadData} className="tp-btn-yellow">
                    Load more
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* image light box start */}
      <ImageLightBox
        images={images}
        open={open}
        setOpen={setOpen}
        photoIndex={photoIndex}
        setPhotoIndex={setPhotoIndex}
      />
      {/* image light box end */}
    </React.Fragment>
  )
}

export default PortfolioItems
