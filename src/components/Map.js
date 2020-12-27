import '../styles/Map.css';
import 'leaflet/dist/leaflet.css';
import {
  MapContainer,
  TileLayer,
  LayerGroup,
  ZoomControl
} from 'react-leaflet';
import CircleMarkup from './CircleMarkup';

function Map({ countries, lat, lon, zoom }) {
  return(
    <section className="Map">
      <MapContainer
        className="Map-container"
        center={[0, 0]}
        zoomControl={false}
        zoom={2}
        scrollWheelZoom={false}
      >
        <ZoomControl position="bottomleft"></ZoomControl>

        <TileLayer
          url="http://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        />

        <LayerGroup>
          {
            countries.map(el => {
              return <CircleMarkup
                key={el.country}
                country={el.country}
                lat={el.countryInfo.lat}
                long={el.countryInfo.long}
                cases={el.cases}
                deaths={el.deaths}
                recovered={el.recovered}
              />
            })
          }
        </LayerGroup>
      </MapContainer>
    </section>
  );
}

export default Map;
