import { useCallback, useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router"
import * as yup from "yup"
import Input from "../components/Input"
import InputOptions from "../components/InputOptions"
import { toast, ToastContainer } from "react-toastify"

const useYupValidationResolver = (validationSchema) =>
  useCallback(
    async (data) => {
      try {
        const values = await validationSchema.validate(data, { abortEarly: false })
        return { values, errors: {}, }
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? "validation",
                message: currentError.message,
              }
            }),
            {}
          ),
        }
      }
    },
    [validationSchema]
  )

const validationSchema = yup.object({
  name: yup.string().required("Nama harus diisi."),
  age: yup.number().typeError("Umur harus angka").required("Umur harus diisi"),
  gender: yup.mixed().oneOf(['Laki-laki', 'Perempuan']).required("Jenis kelamin harus dipilih"),
  isSmoker: yup.mixed().oneOf(['Ya', 'Tidak']).required("Anda harus menjawab"),
  brand: yup.array().notRequired()
})

function FormSurvey() {
  const resolver = useYupValidationResolver(validationSchema)
  const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver })
  const [isSmoker, setIsSmoker] = useState(true)

  const handleIsSmoker = (data) => {
    setIsSmoker(data) // handle state isSmoker to disable next input
  }

  const checkProps = {
    ...(!isSmoker && { checked: false }) //unchecked all checked boxes when the state of isSmoker changes
  };

  const notify = () => {
    toast.success('Data berhasil disimpan! 👌', {
      position: "top-center",
      autoClose: 2000,
      theme: "light",
    });
  }

  const dataSmokers = JSON.parse(window.localStorage.getItem("smokers")) || []
  const onSubmit = (data) => {
    dataSmokers.push(data)
    window.localStorage.setItem("smokers", JSON.stringify(dataSmokers))
    notify()
    reset()
  }

  return (
    <div className='flex flex-col'>
      <div className="bg-white rounded-lg shadow-md"></div>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
        <Input title={"Nama"}
          type={"text"}
          name={"name"}
          id={"name"}
          placeholder="Nama anda"
          label={"Siapa nama anda?"}
          {...register("name")}
          error={errors.name && <span role="alert" className="error-style">* {errors.name.message}</span>}
        />
        <Input title={"Umur"}
          type={"number"}
          name={"age"}
          id={"age"}
          min={1}
          placeholder="Umur anda"
          label={"Berapa umur anda?"}
          {...register("age")}
          error={errors.age && <span role="alert" className="error-style">* {errors.age.message}</span>}
        />
        <InputOptions title={"Jenis Kelamin"}
          type={"radio"}
          name={"gender"}
          values={["Laki-laki", "Perempuan"]}
          label={"Apa jenis kelamin anda?"}
          {...register("gender")}
          error={errors.gender && <span role="alert" className="error-style">* {errors.gender.message}</span>}
        />
        <InputOptions
          type={"radio"}
          name={"isSmoker"}
          values={["Ya", "Tidak"]}
          onIsSmoker={handleIsSmoker}
          label={"Apakah anda perokok?"}
          {...register("isSmoker")}
          error={errors.isSmoker && <span role="alert" className="error-style">* {errors.isSmoker.message}</span>}
        />
        <InputOptions
          type={"checkbox"}
          name={"brand"}
          disabled={!isSmoker}
          {...checkProps} // unchecked when disabled is true, leave it if not
          values={["Gudang Garam Filter", "Lucky Strike", "Marlboro", "Esse"]}
          label={"Jika anda perokok, rokok apa yang anda pernah coba?"}
          {...register("brand")}
        />
        <div className="flex justify-between px-3 items-center">
          <button type="submit" className='p-2 rounded bg-orange-btn text-white w-fit px-6 shadow-md hover:cursor-pointer'>Simpan</button>
          <Link to={'/result'}>Lihat hasil Survey</Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default FormSurvey
