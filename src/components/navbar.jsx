import { AirlineConsumer } from "../config/context"
const Navbar = () => {
  const {data, setPage} = AirlineConsumer();

  return (
    <div className="navbar">
    <div className="logo">
      <img src="https://img.freepik.com/vector-gratis/fondo-avion-plano_23-2148042403.jpg?w=740&t=st=1664072587~exp=1664073187~hmac=ef1213fdab14f53d047789087b8977b0c7f2749fae6abbfa2209b8ea8c05e6f0" />
      <ul className="items">
        {
          data.map(item => (
            <li onClick={() => setPage(item.name)} key={item.id}>{item.name}</li>
          ))
        }
      </ul>
    </div>
    </div>
  )
}

export default Navbar;