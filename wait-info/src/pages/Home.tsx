import './../App.css'

function Home() {
  return (
    <>
      <div>
        <h1><span style={{ color: '#6BBAEC' }}>Wait</span>Info</h1>
        <h2>Welcome to the waiting room!</h2>
        <p>Enter your Patient ID to start tracking</p>
        <input type="text" placeholder="#PatientID" />
      </div>
    </>
  )
}

export default Home
