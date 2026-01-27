import './AppHeader.scss';
import banner from '@/assets/logo.jpg';

function AppHeader() {
  return (
    <div className="d-flex justify-content-between">
      <div>
        {/* TODO add route to main page */}
        <img src={banner} className="logo-img" alt="Alza z Wishe banner" />
      </div>
      {/* <div>search bar placeholder</div>
      <div>uzivatel + kosik placeholder</div> */}
    </div>
  );
}

export default AppHeader;
