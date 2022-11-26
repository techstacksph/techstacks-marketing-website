import Link from 'next/link'

const ServicesArea = () => (
  <div className="ac-chose-area mb-130">
    <div className="container ac-chose-bg">
      <div className="row">
        <ChoseItem
          duration=".3s"
          delay=".5s"
          icon="flaticon-group"
          title={<>Professional</>}
          text="full-stack dev team"
        />
        <ChoseItem
          duration=".5s"
          delay=".7s"
          item_num={'tpchosebox-three'}
          color="fea-color-5"
          icon="fas fa-star"
          title={<>Dedicated</>}
          text=""
        />
        <ChoseItem
          duration=".7s"
          delay=".9s"
          item_num={'tpchosebox-two'}
          color="fea-color-4"
          icon="flaticon-web"
          title={<>Global</>}
          text=""
        />
        <ChoseItem
          duration=".9s"
          delay="1s"
          icon="fas fa-star"
          title={<>Quality</>}
          text=""
        />
      </div>
    </div>
  </div>
)

export default ServicesArea

const ChoseItem = ({ duration, delay, item_num, icon, title, text, color }) => {
  return (
    <div
      className="col-xl-3 col-lg-6 col-md-6 col-12 wow tpfadeUp"
      data-wow-duration={duration}
      data-wow-delay={delay}
    >
      <div className="tp-chose-item mb-30">
        <div className={`tpchosebox ${item_num && item_num}`}>
          <div className={`tpchosebox__icon ${color && color} mb-30`}>
            <a href="#">
              <i className={icon}></i>
            </a>
          </div>
          <div className="tpchosebox__content">
            <h4>
              <Link href="/service-details">
                <a>{title}</a>
              </Link>
            </h4>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
