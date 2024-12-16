
import AppCard from './components/AppCard.jsx';
import languages from './data/languages.js';


function App() {
  
  

  return (
    <>
      <h1 className='p-5'>Learn Web development</h1>
      <div>
        <AppCard
          languages = {languages}
        />
          
      </div>
    </>
  )
}

export default App
