import { useState } from 'react'
import OJTPortfolio from './ojt-portfolio'

const TABS = [
  // { name: 'All Works' },
  { name: 'Portfolio Website', Component: OJTPortfolio },
  { name: 'Dream Website' },
  // { name: 'Other Works' },
]

const DEFAULT_TAB_INDEX = 1

const OJTWorks = () => {
  const [activeTab, setActiveTab] = useState(DEFAULT_TAB_INDEX)

  return (
    <div className="ojt-works-container">
      <div className="tab-buttons">
        {TABS.map(({ name }, i) => (
          <button
            key={i}
            className={i === activeTab ? 'tp-btn' : 'tp-btn-white'}
            onClick={() => setActiveTab(i)}
          >
            {name}
          </button>
        ))}
      </div>

      {
        TABS.map(({ Component, name }, i) =>
          Component ? (
            <Component key={i} />
          ) : (
            <div key={i}>TODO {name} component</div>
          ),
        )[activeTab]
      }
    </div>
  )
}

export default OJTWorks
