import { useEffect, useState } from "react";
import { BrawlerCard } from "./BrawlerCard";
import sandy from "/src/static/img/sandy.webp"



export const BrawlersSearch = ({ id }) => {
    const [brawlerInfo, setbrawlerInfo] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        if (id == '') {
            return
        }
        setLoading(true)

        fetch(`https://api.brawlify.com/v1/brawlers/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setbrawlerInfo(data);
                setLoading(false)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [id]);

    if (loading) {
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
        <BrawlerCard brawlerInfo={brawlerInfo} />
    )



}
