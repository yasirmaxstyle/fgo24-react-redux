import FormSurvey from "./pages/FormSurvey"

function App() {
  return (
    <>
      <div className="max-w-[640px] mx-auto flex flex-col gap-4 py-5">
        <div className="flex justify-center bg-white p-3 rounded-lg shadow-md h-50">
          <img src="/public/20-10-2016-ilustrasi-rokok-membunuhmu.jpg" alt="ilustrasi-rokok" />
        </div>
        <div className="bg-white h-40 rounded-lg shadow-md flex flex-col gap-4 items-center justify-center border-t-10 border-orange-line">
          <h1 className='text-4xl font-bold text-center'>Form Survey Perokok</h1>
          <p>Isilah survey ini untuk mendapatkan Giveaway menarik</p>
        </div>
        <FormSurvey />
      </div>
    </>
  )
}

export default App