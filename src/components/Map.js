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
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png' />
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
