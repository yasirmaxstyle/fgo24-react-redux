import { Link } from "react-router"

function Result() {
  const dataSmokers = JSON.parse(window.localStorage.getItem('smokers')) || []
  return (
    <div className="max-w-[640px] mx-auto flex flex-col gap-4">
      <div className="bg-white p-3 rounded-lg mt-10 shadow-md border-orange-line border-t-10 py-6">
        <h1 className='text-5xl font-bold text-center'>Hasil Survey Perokok</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <table className='table-auto border border-collapse text-center'>
          <thead>
            <tr>
              <th className='p-2'>No.</th>
              <th className='p-2'>Nama</th>
              <th className='p-2'>Usia</th>
              <th className='p-2'>Jenis-Kelamin</th>
              <th className='p-2'>Apakah Perokok?</th>
              <th className='p-2'>Rokok yang Pernah Dicoba?</th>
            </tr>
          </thead>
          <tbody>
            {dataSmokers.map((el, idx) =>
              <tr key={idx}>
                <td className='p-2'>{idx + 1}</td>
                <td className='p-2'>{el.name}</td>
                <td className='p-2'>{el.age}</td>
                <td className='p-2'>{el.gender}</td>
                <td className='p-2'>{el.isSmoker}</td>
                <td className='p-2'>{el.brand.join(', ')}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Link to='/' className="text-center">Isi survey</Link>
    </div>
  )
}

export default Result