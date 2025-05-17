function InputOptions({ onIsSmoker, title, label, values, error, ...props }) {
  const handleChange = (e) => {
    if (onIsSmoker) {
      if (e.target.value === 'Ya') onIsSmoker(true)
      else onIsSmoker(false)
    }
  }

  return (
    <div className="input-style">
      {title &&
        <h1 className="font-bold">
          {title}
          <span className="text-red-500">*</span>
        </h1>
      }
      <label htmlFor="">{label}</label>
      <div className="flex flex-col gap-3">
        {values.map(value => {
          let id
          if (value.includes(" ")) id = value.split(" ").join("-").toLowerCase()
          else id = value.toLowerCase()
          return (
            <div key={value} className='flex gap-3'>
              <input {...props}
                id={id}
                value={value}
                onChange={handleChange}
              />
              <label htmlFor={id}>{value}</label>
            </div>
          )
        })}
      </div>
      {error}
    </div>
  )
}

export default InputOptions