import { useEffect } from 'react'
import Link from 'next/link'

const PrivacyPolicy = () => {
  return (
    <div className="pp-root">
      <div className="container">
        <div className="pp-header-content">
          <h1>Privacy Policy</h1>
        </div>
        <div className="pp-content-body">
          <div className="pp-content-holder">
            <h2>WHO WE ARE</h2>
            <p>
              Our website address is:{' '}
              <span>
                <Link href={'https://techstacksph.com'}>
                  https://techstacksph.com
                </Link>
              </span>{' '}
              under business name TECHSTACKS, [INC., SEC Registered no.
              CS201205442] with principal address Cabanatuan City, Nueva Ecija,
              Philippines, 3100.
            </p>
          </div>

          <div className="pp-content-holder">
            <h2>WHAT PERSONAL DATA WE COLLECT AND WHY WE COLLECT IT</h2>
            <p>
              Once you visit our website, personal data, such as name, email
              address, contact numbers, personal account preferences;
              transactional data, such as purchase information; and technical
              data, such as information about cookies will be collected.
              Sensitive personal data collected will be protected with strict
              confidentiality. We will use you personal data only for the
              purposes stated below
            </p>
            <ul>
              <li>To contact you to know more about your request</li>
              <li>
                To fulfill your requests for certain products and services
              </li>
              <li>
                To notify you of any corporate news, events, promotions, special
                offers or new product information
              </li>
              <li>To customize the advertising and content you see</li>
            </ul>
            <p>
              In addition to some of the specific uses of information we
              describe in this Privacy Policy, we may use information that we
              receive to:
            </p>
            <ul>
              <li>
                Provide, improve, test and monitor the effectiveness of our
                Service
              </li>
              <li>Develop and test new products and features</li>
              <li>
                Monitor metrics such as total number of visitors, traffic and
                demographic patters
              </li>
              <li>Diagnose or fix technology problems</li>
              <li>Automatically update the website.</li>
            </ul>
          </div>

          <div className="pp-content-holder">
            <h2>COMMENTS</h2>
            <p>
              When visitors leave comments on the site we collect the data shown
              in the comments form, and also the visitor’s IP address and
              browser user agent string to help spam detection.
            </p>
          </div>

          <div className="pp-content-holder">
            <h2>MEDIA</h2>
            <p>
              If you upload images to the website, you should avoid uploading
              images with embedded location data (EXIF GPS) included. Visitors
              to the website can download and extract any location data from
              images on the website.
            </p>
          </div>
          <div className="pp-content-holder">
            <h2>CONTACT FORMS</h2>
            <p>
              Contact forms in our website capture personal data. We keep this
              records for 10 years for customer service purposes only
            </p>
          </div>

          <div className="pp-content-holder">
            <h2>COOKIES</h2>
            <p>
              If you leave a comment on our site you may opt-in to saving your
              name, email address and website in cookies. These are for your
              convenience so that you do not have to fill in your details again
              when you leave another comment. These cookies will last for one
              year. If you have an account and you log in to this site, we will
              set a temporary cookie to determine if your browser accepts
              cookies. This cookie contains no personal data and is discarded
              when you close your browser.
            </p>
          </div>

          <div className="pp-content-holder">
            <h2>EMBEDDED CONTENT FROM OTHER WEBSITES</h2>
            <p>
              Articles on this site may include embedded content (e.g. videos,
              images, articles, etc.). Embedded content from other websites
              behaves in the exact same way as if the visitor has visited the
              other website.
            </p>
            <p>
              These websites may collect data about you, use cookies, embed
              additional third-party tracking, and monitor your interaction with
              that embedded content, including tracking your interaction with
              the embedded content if you have an account and are logged in to
              that website.
            </p>
          </div>

          <div className="pp-content-holder">
            <h2>ANALYTICS</h2>
            <p>
              Our website uses Google Analytics which provide different
              statistics, behavior and data of all our website visitors. Website
              collects analytical data from website visitors. Users can opt out
              by simply emailing techstacks.2022@gmail.com .
            </p>
          </div>

          <div className="pp-content-holder">
            <h2>WHO WE SHARE YOUR DATA WITH</h2>
            <p>
              Our website share site data to our partner, GoDaddy. All websites
              data including collected personal data needs to be shared to
              GoDaddy since they are the domain and hosting provider. Check
              their privacy policy –{' '}
              <span>
                <Link
                  href={
                    'https://ph.godaddy.com/agreements/showdoc?pageid=PRIVACY'
                  }
                >
                  https://ph.godaddy.com/agreements/showdoc?pageid=PRIVACY
                </Link>
              </span>
            </p>
          </div>

          <div className="pp-content-holder">
            <h2>HOW LONG WE RETAIN YOUR DATA</h2>
            <p>
              If you leave a comment, the comment and its metadata are retained
              indefinitely. This is so we can recognize and approve any
              follow-up comments automatically instead of holding them in a
              moderation queue. We keep contact form entries for 1 year,
              analytics records for a year, and customer purchase records for
              ten years.
            </p>
            <p>
              For users that register on our website (if any), we also store the
              personal information they provide in their user profile. All users
              can see, edit, or delete their personal information at any time
              (except they cannot change their username). Website administrators
              can also see and edit that information.
            </p>
          </div>

          <div className="pp-content-holder">
            <h2>HOW LONG WE RETAIN YOUR DATA</h2>
            <p>
              If you leave a comment, the comment and its metadata are retained
              indefinitely. This is so we can recognize and approve any
              follow-up comments automatically instead of holding them in a
              moderation queue. We keep contact form entries for 1 year,
              analytics records for a year, and customer purchase records for
              ten years.
            </p>
            <p>
              For users that register on our website (if any), we also store the
              personal information they provide in their user profile. All users
              can see, edit, or delete their personal information at any time
              (except they cannot change their username). Website administrators
              can also see and edit that information.
            </p>
          </div>

          <div className="pp-content-holder">
            <h2>WHAT RIGHTS YOU HAVE OVER YOUR DATA</h2>
            <p>
              If you have an account on this site, or have left comments, you
              can request to receive an exported file of the personal data we
              hold about you, including any data you have provided to us. You
              can also request that we erase any personal data we hold about
              you. This does not include any data we are obliged to keep for
              administrative, legal, or security purposes.
            </p>
          </div>

          <div className="pp-content-holder">
            <h2>YOUR CONTACT INFORMATION</h2>
            <p>
              If you need to contact us with regards to Privacy, kindly email us
              at{' '}
              <span>
                <Link href="mailto:techstacks.2022@gmail.com">
                  techstacks.2022@gmail.com
                </Link>
              </span>
            </p>
          </div>

          <div className="pp-content-holder">
            <h2>HOW WE PROTECT YOUR DATA</h2>
            <p>
              We follow generally accepted standards to store and protect the
              personal data we collect, both during transmission and once
              received and stored, including utilization of encryption where
              appropriate.
            </p>
            <p>
              We follow generally accepted standards to store and protect the
              personal data we collect, both during transmission and once
              received and stored, including utilization of encryption where
              appropriate.
            </p>
            <ul>
              <li>
                mandated by law, contract or similar obligations applicable to
                our business operations;
              </li>
              <li>
                for preserving, resolving, defending or enforcing our
                legal/contractual rights; or
              </li>
              <li>
                needed to maintain adequate and accurate business and financial
                records.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
