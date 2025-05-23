import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./UvIndexMap.module.css";

const UVIndexMap = () => {
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const uvTileLayer = `https://tile.openweathermap.org/map/uvi/{z}/{x}/{y}.png?appid=${API_KEY}`;

    return (
        <div className={styles["map-container"]}>
            <MapContainer center={[-6.2, 106.8]} zoom={5} className={styles["leaflet-container"]}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                />
                <TileLayer url={uvTileLayer} />
            </MapContainer>
        </div>
    );
};

export default UVIndexMap;
