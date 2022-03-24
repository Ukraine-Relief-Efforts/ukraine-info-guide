import { useEffect, useState } from "react"
import features from "../configs/features";

const useGeoLocation = (geoRequested) => {
    console.log("request geo: " + geoRequested)

    const [location, setLocation] = useState({
        loaded:false,
        coordinates: {lat: "", lng: ""}
    })

    const onSuccess = location => {
        setLocation({
            loaded: true,
            coordinates:{
                lat: location.coords.latitude,
                lng: location.coords.longitude
            }
        })
    }

    const onError = error => {
        setLocation({
            loaded: true,
            error,
        })
    }

    useEffect(() => {
        if (!features.geolocation || !geoRequested){
            console.log("failed")
            return;
        }

        if(!("geolocation" in navigator)){
            onError({
                code: 0,
                message: "Geolocation not supported"
            })
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
        console.log("navigator requested")
    }, [geoRequested])

    return location
}

export default useGeoLocation
