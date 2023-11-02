import React, {useState, useEffect, useReducer } from 'react' 
import DeleteIcon from '@mui/icons-material/Delete';

export default function CategorySection(props) {
  return (
    <div className="mx-40 py-10 gap-10 flex items-center flex-col">
      <h1 className="text-5xl">Customize your {props.pageName}</h1>
      <CategoryForm 
        pageName={props.pageName}
      />
    </div>
  )
}

const CategoryForm = (props) => {
  const [isPhoto, setIsPhoto] = useState(null)
  const [imageBase64, setImageBase64] = useState('')
  const [title, setTitle] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [id, setId] = useState(null)
  const [items, setItems] = useState(null)
  const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0)
  
  useEffect(() => {
    const fetchCategory = async () => {
      const res = await fetch('/api/category')
      const json = await res.json()

      if (res.ok) {
        setItems(json)
      }
    }
    fetchCategory()
  }, [reducerValue])

  const handleClickDelete = async (id) => {
    const res = await fetch(`/api/category/${id}`, {
      method: 'DELETE',
    });
    
    if(res.ok){
      console.log(id, ' was sucessfully deleted.');
      alert('Successfully deleted.');
    }else {
      console.error('Failed to delete', id);
    }

    forceUpdate()
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]

    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setIsPhoto(e.target.result)
      }
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setImageBase64(reader.result)
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const itemContent = { title, image: imageBase64 }

      const res = await fetch('/api/category', {
        method: 'POST',
        body: JSON.stringify(itemContent),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const json = await res.json()

      if (!res.ok) {
        setLoading(false)
        setError(json.error)
      }
      if (res.ok) {
        setLoading(false)
        setTitle('')
        setIsPhoto('')
        setError(null)
        setId('');
      }
      alert(`${props.pageName} ${title} Added`)

    forceUpdate()
  }

  const setOcassionsValues = (title, id) => {
    setTitle(title);
    setId(id);
  }

  return (
    <div className='flex justify-around w-full gap-5'>
      <div className='flex flex-col w-1/2 gap-5'>
        <h2 className='text-2xl'>List of {props.pageName}</h2>
        {items &&
          items.map((item) => (
            <div className="justify-between p-3 items-center flex border flex-row gap-10">
              <button onClick={(item) => setOcassionsValues(item.title, item._id)}>
                <div className='flex flex-row items-center gap-10'>
                  <img
                    className="w-24 h-24"
                    src={item.image.url}
                    alt={`${props.pageName}`}
                  />
                  <p className='font-bold uppercase' key={item._id}>{item.title}</p>
                </div>
              </button>
              <button className='px-5' onClick={() => handleClickDelete(item._id)}><DeleteIcon/></button>  
            </div>
          ))}
      </div>
      <form className="flex flex-col border p-5 gap-5 w-1/2">  
        <label className="font-bold"> Photo</label>
        <div> 
          <div className="flex flex-row justify-center gap-10">
            <label htmlFor="dropzone-file"
              className="overflow-hidden flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover-bg-gray-100 dark-border-gray-600 dark:hover-border-gray-500 dark:hover-bg-gray-600"
            >
              <div
                className={
                  isPhoto
                    ? 'hidden'
                    : 'flex flex-col items-center justify-center pt-5 pb-6'
                }
              >
                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16" > <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" /> </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"> <span className="font-semibold">Click to upload</span> or drag and drop </p>
                <p className="text-xs text-gray-500 dark:text-gray-400"> SVG, PNG, JPG, or GIF (MAX. 800x400px) </p>
              </div>
              {isPhoto && (
                <div>
                  <img
                    src={isPhoto}
                    alt="Preview"
                    className="w-full h-full object-fill"
                />
                </div>
              )}
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          </div>
        </div>
        <label className="font-bold">Name</label>
        <input
          className="border"
          type="text"
          placeholder={`Enter an ${props.pageName}`}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button onClick={handleSubmit}>Submit</button>
        {error && (
          <div>
            <p>{error}</p>
          </div>
        )}
        {loading && <p>loading</p>}
      </form>
    </div>
  )
}