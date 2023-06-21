import Link from 'next/link'

const OJTProgramJoin = () => {
  return (
    <div className="ojt-join-container">
      <div className="ojt-join-content-container container">
        <div className="ojt-join-content">
          <h2>
            Transform your Passion into a Career and join our OJT Program today
          </h2>

          <p>
            Don&apos;t miss out on this opportunity to propel your career
            forward. Be a part and unlock a world of possibilities in web
            development.
          </p>

          <Link href="/ojt/join">
            <a className="tp-btn">
              Join Us Now
              <i className="far fa-arrow-right" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OJTProgramJoin
