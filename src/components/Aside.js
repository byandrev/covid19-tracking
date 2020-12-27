import '../styles/Aside.css';
import Countries from './Countries';

function Aside({ countries }) {
  return(
    <aside className="Aside">
      <h3>Cases info</h3>
      <Countries countries={countries} />
    </aside>
  );
}

export default Aside;
