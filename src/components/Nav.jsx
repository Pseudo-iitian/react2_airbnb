import Airbnb from '../assets/airbnb.svg'

function Nav(){
  return (
    <>
      <header>
        <nav>
          <div class="logoContainer">
            <img src={Airbnb} alt=""/>
            <p>airbnb</p>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Nav;