


export const EventCard = ({ eventInfo }) => {
  return (
    <div className="row justify-content-center m-3" >
      {eventInfo.map((eventInfo) => (
        <div className="card mb-3 px-0 m-2 text-center" key={eventInfo.slot.id} style={{ maxWidth: "550px" }}>
          <img src={eventInfo.map.environment.imageUrl} className="img-fluid mx-auto d-block"  style={{ minWidth: "300", maxHeight: "1050px" }} alt="" />
          
          <div className="card-img-overlay">
            <h3 className="badge text-white fs-1 fw-bold mt-4 card-bg" >{eventInfo.map.gameMode.name}{eventInfo.slot.emoji}</h3>
          </div>

          <div className="card bg-light" >

            <div className="card-body">
              <img src={eventInfo.map.imageUrl} className="img-fluid mx-auto d-block" style={{ minWidth: "300", maxHeight: "1050px" }} alt="" />
              <h5 className="card-title fs-3">{eventInfo.map.name}</h5>
            </div>

          </div>
        </div>
      ))}

    </div>
  )
}
