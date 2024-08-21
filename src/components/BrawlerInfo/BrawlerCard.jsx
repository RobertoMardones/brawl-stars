

export const BrawlerCard = ({ brawlerInfo }) => {


    return (
        <>
            <div className="row justify-content-center m-3" >
                <div className="card mb-3 m-2 " style={{ maxWidth: "400px", border: `8px solid ${brawlerInfo.rarity.color}` }} >

                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={brawlerInfo.imageUrl} className="img-fluid mx-auto d-block mt-2" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title text-center fs-1" >{brawlerInfo.name}
                                    <img src={brawlerInfo.imageUrl3} className="img-fluid " style={{ maxWidth: "70px" }} alt="" />
                                </h5>
                                <p className="card-text text-center fs-3 fw-bold">{brawlerInfo.class.name}</p>
                                <p className="card-text text-center fs-3 fw-bolder" style={{ color: brawlerInfo.rarity.color }}>{brawlerInfo.rarity.name}</p>
                            </div>

                        </div>
                        <p className="card-text p-2 mt-4 text-center"><small className="text-body-secondary fs-5">{brawlerInfo.description}</small></p>
                    </div>
                </div>

                <div className="card mb-3 m-2 px-0 text-center" style={{ maxWidth: "400px", border: `8px solid ${brawlerInfo.rarity.color}` }}>
                    <h3 className="card-header text-white bg-dark ">Gadgets</h3>
                    {brawlerInfo.gadgets.map((starPowers) => (
                        <div className="card" key={starPowers.id}>
                            <h5 className="m-3 fw-bold">{starPowers.name}</h5>
                            <div className="card-body">
                                <img src={starPowers.imageUrl} className="img-fluid mx-auto d-block" style={{ maxWidth: "70px" }} alt="" />
                                <h5 className="card-title">{starPowers.description}</h5>
                            </div>

                        </div>

                    ))}

                </div>

                <div className="card mb-3 m-2 px-0 text-center" style={{ maxWidth: "400px", border: `8px solid ${brawlerInfo.rarity.color}` }}>

                    <h3 className="card-header text-white bg-dark">Star Power</h3>
                    
                    {brawlerInfo.starPowers.map((starPowers) => (
                        <div className="card" key={starPowers.id}>

                            <h5 className="m-3 fw-bold">{starPowers.name}</h5>
                            <div className="card-body">
                                <img src={starPowers.imageUrl} className="img-fluid mx-auto d-block" style={{ maxWidth: "70px" }} alt="" />
                                <h5 className="card-title">{starPowers.description}</h5>
                            </div>

                        </div>

                    ))}



                </div>

            </div>






        </>


    )
}
