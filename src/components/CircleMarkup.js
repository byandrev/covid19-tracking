import '../styles/CircleMarkup.css';
import {
  Circle,
  Popup
} from 'react-leaflet';

function CircleMarkup({ country, lat, long, cases, deaths, recovered }) {
  return(
    <Circle
      color="tomato"
      center={[lat, long]}
      radius={Math.sqrt(cases) * 800}
      stroke={false}
      >
      <Popup>
        <div className="CircleMarkup-popup">
          <h5>{country}</h5>
          <p><strong>Cases:</strong> {cases}</p>
          <p><strong>Deaths:</strong> {deaths}</p>
          <p><strong>Recovered:</strong> {recovered}</p>
        </div>
      </Popup>
    </Circle>
  );
}

export default CircleMarkup;
