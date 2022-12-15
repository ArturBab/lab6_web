import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Skeleton from "react-loading-skeleton";
import {Button} from "react-bootstrap";


const Card = () => {

    const {pk} = useParams();
    const [processor, setProcessor] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProcessor = async () => {
            setLoading(true);
            const response = await fetch(`http://127.0.0.1:8000/cards/${pk}`);
            setProcessor(await response.json());
            setLoading(false);
        }
        getProcessor();
    }, []);



    const Loading = () =>{
        return(
            <>
                Loading...
            </>
        );
    }
    const ShowProcessor = () => {
        return (
            <>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {processor.brand}
                    </h4>
                    <h1 className="display-5">
                        {processor.line}
                    </h1>
                </div>
            </>
        );
    };

    return(
        <div>
            <div className="container">
                <div className="row">
                    {loading ? <Loading/> : <ShowProcessor/>}
                </div>
            </div>
        </div>
    )
}

export default Card;