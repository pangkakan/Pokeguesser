import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
   <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/pikachu.jpg')" }}
    >      <Navbar/>
      {children}
    </div>
  )
}