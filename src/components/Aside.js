import '../styles/Aside.css';
import Countries from './Countries';

function Aside({ countries }) {
  return(
    <aside className="Aside">
      <h3>Cases info</h3>
      <Countries countries={countries} />
      <span className="Aside-copy">Data of <a className="Aside-link" href="https://disease.sh/" target="_blank"> https://disease.sh/</a></span>
    </aside>
  );
}

export default Aside;
