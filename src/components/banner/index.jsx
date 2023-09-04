const Banner = () => (
  <div className="banner-root black-bg py-4">
    <div className="container-xl">
      <div className="d-flex flex-column gap-2 flex-md-row align-items-center justify-content-between">
        <p className="banner-text m-0 text-white">
          Use this code TECHSTK831 to get a 7% discount. 🎉
        </p>
        <a
          href="https://shop.techstacksph.com/"
          target="_blank"
          rel="noreferrer"
          className="tp-btn-yellow d-flex align-items-center"
          style={{ maxHeight: 40 }}
        >
          Shop now
        </a>
      </div>
    </div>
  </div>
)

export default Banner
