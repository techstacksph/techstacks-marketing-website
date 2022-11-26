const SingleTeam = ({ team }) => {
  const { img, name, title, delay, duration } = team

  return (
    <div
      className="col-xl-3 col-lg-3 col-md-6 wow tpfadeUp"
      data-wow-duration={duration}
      data-wow-delay={delay}
    >
      <div className="tpteam mb-30">
        <div className="tpteam__shape-1">
          <img src="assets/img/team/team-shape-5.1.png" alt="" />
        </div>
        <div className="tpteam__shape-2">
          <img src="assets/img/team/team-shape-5.2.png" alt="" />
        </div>
        <div className="tpteam__thumb">
          <img className="w-100" src={img} alt="" />
        </div>
        <div className="tpteam__content">
          <h4 className="tp-team-sm-title">
            <p className="text-white">{name}</p>
          </h4>
          <h5 className="tp-team-sm-subtitle">
            <span>{title}</span>
          </h5>
        </div>
      </div>
    </div>
  )
}

export default SingleTeam
