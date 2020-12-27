import '../styles/ContentMain.css';
import Header from './Header';
import Map from './Map';

function ContentMain({ countries }) {
  return(
    <main className="ContentMain">
      <Header />
      <Map countries={countries} />
    </main>
  );
}

export default ContentMain;
