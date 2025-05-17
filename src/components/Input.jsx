function Input({ title, label, id, error, ...props }) {
  return (
    <div className="input-style">
      <h1 className="font-bold">{title} <span className="text-red-500">*</span></h1>
      <label htmlFor={id}>{label}</label>
      <input {...props} autoComplete="off" className='w-1/2 border-b-1 border-gray-300 h-10 p-2 focus:outline-none focus:border-b-orange-line' />
      {error}
    </div>
  )
}

export default Input