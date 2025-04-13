import React, { useEffect, useState } from 'react'
import person from '../assets/person.png'
import visioff from '../assets/visi_off.png'
import vision from '../assets/visi_on.png'
import edit from '../assets/Edit.png'
import dlete from '../assets/Delete.png'
import copy from '../assets/Copy.png'

const manegar = () => {
  const [src, setSrc] = useState(visioff)
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordsArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords")
    let passwordsArray;

    if (passwords) {
      setPasswordArray(JSON.parse(passwords))
    }

  }, []);
  const handleVisible = () => {
    setSrc(prevSrc => prevSrc === visioff ? vision : visioff)
  }
  const handlesave = () => {
    setPasswordArray([...passwordsArray, form])
    localStorage.setItem("passwords", JSON.stringify([...passwordsArray, form]))
    console.log([...passwordsArray, form]);


  }
  const handlechange = (e) => {
    setform(form => ({ ...form, [e.target.name]: e.target.value }))
  }
  const handleedit = (index) => {
    const passwordToEdit = passwordsArray[index];
    setform({
      site: passwordToEdit.site,
      username: passwordToEdit.username,
      password: passwordToEdit.password,
    });
  };

  const handeldelete = (index) => {
    const updatedPasswords = passwordsArray.filter((_, i) => i !== index);
    setPasswordArray(updatedPasswords);
    localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
  };

  const handlecopy = (text) => {
navigator.clipboard.writeText(text)
  }




  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className='inputcinatiner w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto mt-8 rounded-lg bg-white shadow'>
        <div className="head bg-green-100 rounded-t-lg h-12 font-bold flex items-center px-4">Save Your Passwords</div>

        <div className="input w-full p-4">
          <input
            onChange={handlechange}
            name='site'
            value={form.site}
            className='w-full bg-gray-200 rounded-md p-3 focus:outline-none'
            type="text"
            placeholder="Enter Web links"
          />
          <div className="userpass flex flex-col sm:flex-row gap-3 mt-3">
            <div className='bg-gray-200 w-full sm:w-1/2 rounded-md flex items-center'>
              <input
                name='username'
                onChange={handlechange}
                value={form.username}
                type="text"
                className='w-[90%] bg-transparent p-3 focus:outline-none'
                placeholder="Enter Username"
              />
              <div className="image w-[10%] pl-2">
                <img src={person} alt="" className="w-5" />
              </div>
            </div>
            <div className='w-full sm:w-1/2 rounded-md flex items-center bg-gray-200'>
              <input
                name='password'
                onChange={handlechange}
                value={form.password}
                type={src === visioff ? "password" : "text"}
                className='w-[90%] bg-gray-200 rounded-md p-3 focus:outline-none'
                placeholder="Enter password"
              />
              <div className="w-[10%]">
                <img src={src} alt="Toggle visibility" onClick={handleVisible} className='w-5 cursor-pointer' />
              </div>
            </div>
          </div>
          <div className="save text-center mt-4">
            <button className='bg-green-500 py-2 px-4 rounded-md font-bold w-full sm:w-auto' onClick={handlesave}>Save</button>
          </div>
        </div>
      </div>
      
      <div className='DisplayContainer w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto mt-8'>
        <div className="head rounded-t-lg h-12 font-bold flex items-center px-4">Saved Passwords</div>
        <div className='DisplayContainer w-full mx-auto mt-8 rounded-lg bg-white shadow overflow-x-auto'>
          <div className="min-w-[500px]">
            <div className="tablehead grid grid-cols-12 w-full text-center font-bold bg-gray-200 p-2">
              <p className='col-span-5'>Website</p>
              <p className='col-span-3'>Username</p>
              <p className='col-span-3'>Password</p>
              <p className='col-span-1'>Actions</p>
            </div>
            {passwordsArray.length === 0 ? (
              <div className="p-4 text-center">No passwords saved</div>
            ) : (
              passwordsArray.map((password, index) => (
                <div key={index} className="tabldata grid grid-cols-12 w-full text-center font-bold p-2 border-b">
                  <p className='col-span-5 flex justify-between items-center'>
                    <span className='truncate'>{password.site}</span>
                    <img src={copy} className="cursor-pointer w-4 h-4" onClick={()=>handlecopy(password.site)} alt="Copy" />
                  </p>
                  <p className='col-span-3 flex justify-between items-center'>
                    <span className='truncate'>{password.username}</span>
                    <img src={copy} className="cursor-pointer w-4 h-4" onClick={()=>handlecopy(password.username)} alt="Copy" />
                  </p>
                  <p className='col-span-3 flex justify-between items-center'>
                    <span className='truncate'>{password.password}</span>
                    <img src={copy} className="cursor-pointer w-4 h-4" onClick={()=>handlecopy(password.password)} alt="Copy" />
                  </p>
                  <div className="col-span-1 flex justify-center gap-2">
                    <img src={edit} onClick={()=>handleedit(index)} alt="Edit" className="w-4 h-4 cursor-pointer" />
                    <img src={dlete} onClick={()=>handeldelete(index)} alt="Delete" className="w-4 h-4 cursor-pointer" />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>




    </div>


  )
}

export default manegar
