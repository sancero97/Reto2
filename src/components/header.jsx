import { AirlineConsumer } from "../config/context"

const Header = () => {
  const {page} = AirlineConsumer();
  return (
    <div className="welcome">
      {
        page === ''?
        <h1>Hola, bienvenido, Sabemos que quieres viajar</h1>
        :
        <h1>Hola, bienvenido, sabemos que quieres viajar en un {page}, por favor diligencia el siguiente formulario:</h1>
      }
    </div>
  )
}

export default Header;