

export const MapSearchCard = ({ mapInfo }) => {
  return (
    <>
      <div className="row justify-content-center m-3" >
        {mapInfo.map((mapInfo) => (
          <div className="card mb-3 px-0 m-2 text-center" key={mapInfo.id} style={{ maxWidth: "400px" }}>


            <img src={mapInfo.environment.imageUrl} className="img-fluid mx-auto d-block" style={{ minWidth: "300", maxHeight: "1050px" }} alt="" />

            <div className="card-img-overlay">
              <h5 className="badge text-white fs-2 fw-bold card-bg">{mapInfo.name}</h5>
            </div>

            <div className="card bg-light" >

              <div className="card-body">
                <img src={mapInfo.imageUrl} className="img-fluid mx-auto d-block" style={{ minWidth: "300", maxHeight: "1050px" }} alt="" />
              </div>

            </div>
          </div>
        ))}

      </div>


    </>
  )
}
