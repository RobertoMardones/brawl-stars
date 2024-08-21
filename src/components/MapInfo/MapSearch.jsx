import { useEffect, useState } from "react";
import { MapSearchCard } from "./MapSearchCard";
import sandy from "/src/static/img/sandy.webp"



export const MapSearch = ({ gameMode }) => {
    const [mapInfo, setmapInfo] = useState([])


    useEffect(() => {

        fetch(`https://api.brawlify.com/v1/maps`)
            .then((response) => response.json())
            .then((data) => {
    
                const enabledMaps = data.list.filter(map => map.disabled === false && map.gameMode.hash == gameMode);
                setmapInfo(enabledMaps)
                
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [gameMode]);

    if (mapInfo.length == 0) {
        return (
            <div className="row justify-content-center m-3" >
                <div className="card" style={{ maxWidth: "540px" }}>
                    <div className="card-body">
                        <h5 className="card-title placeholder-glow">
                            <span className="placeholder col-6"></span>
                        </h5>
                        <p className="card-text placeholder-glow">
                            <span className="placeholder col-7"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-6"></span>
                            <span className="placeholder col-8"></span>
                        </p>
                        <img src={sandy} className="mx-auto d-block" style={{maxHeight:"500px", maxWidth: "200px"}} alt="" />
                    </div>
                    
                    
                </div>
                
            </div>


        )
    }

    return (
        <MapSearchCard mapInfo={mapInfo} />
    )



}
