import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Nav from './components/Navbar'
import Novità from './components/Novità'
import Episodes from './components/Episodes'
import Explore from './components/Explore'
import Sidebar from './components/Sidebar'
function App() {
  return (
    <>
      <main>
        <div className="App">
          <div className="row g-0">
            {/* Colonna più piccola */}
            <div className="col-2">
              <div
                style={{
                  backgroundColor: '#252526',
                  height: '100vh',
                  overflowX: 'hidden',
                }}
              >
                <Sidebar />
              </div>
            </div>
            {/* Colonna più grande */}
            <div className="col-10">
              <div
                style={{
                  backgroundColor: '#1F1F1F',
                  height: '100vh',
                  overflowX: 'hidden',
                }}
              >
                <Nav />
                <Novità />
                <Episodes />
                <Explore />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
