import React, { useEffect, useState } from 'react';
import person from '../assets/person.png';
import visioff from '../assets/visi_off.png';
import vision from '../assets/visi_on.png';
import edit from '../assets/Edit.png';
import dlete from '../assets/Delete.png';
import copy from '../assets/Copy.png';

const manegar = () => {
  const [src, setSrc] = useState(visioff);
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordsArray, setPasswordArray] = useState([]);
  const [editId, setEditId] = useState(null);

  const getPasswords = async () => {
    try {
      const res = await fetch("http://localhost:3000");
      const data = await res.json();
      setPasswordArray(data);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    getPasswords();
  }, []);

  const handleVisible = () => {
    setSrc(prev => prev === visioff ? vision : visioff);
  };

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    try {
      let res;
      if (editId) {
        res = await fetch(`http://localhost:3000/${editId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        const updatedArray = passwordsArray.map(item =>
          item._id === editId ? { ...item, ...form } : item
        );
        setPasswordArray(updatedArray);
      } else {
        res = await fetch("http://localhost:3000", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        const result = await res.json();
        setPasswordArray([...passwordsArray, { ...form, _id: result.result.insertedId }]);
      }
  
      setForm({ site: "", username: "", password: "" });
      setEditId(null);
    } catch (err) {
      console.error("Save failed:", err);
    }
  };
  

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/${id}`, { method: "DELETE" });
      if (res.ok) {
        const updated = passwordsArray.filter(item => item._id !== id);
        setPasswordArray(updated);
      }
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };
  const handleEdit = (item) => {
    setForm({ site: item.site, username: item.username, password: item.password });
    setEditId(item._id);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className='inputcinatiner w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto mt-8 rounded-lg bg-white shadow'>
        <div className="head bg-green-100 rounded-t-lg h-12 font-bold flex items-center px-4">Save Your Passwords</div>
        <div className="input w-full p-4">
          <input name="site" value={form.site} onChange={handleChange} className="w-full bg-gray-200 rounded-md p-3 focus:outline-none" placeholder="Enter Web links" />
          <div className="userpass flex flex-col sm:flex-row gap-3 mt-3">
            <div className="bg-gray-200 w-full sm:w-1/2 rounded-md flex items-center">
              <input name="username" value={form.username} onChange={handleChange} className="w-[90%] bg-transparent p-3 focus:outline-none" placeholder="Enter Username" />
              <div className="image w-[10%] pl-2"><img src={person} alt="" className="w-5" /></div>
            </div>
            <div className="w-full sm:w-1/2 rounded-md flex items-center bg-gray-200">
              <input name="password" value={form.password} onChange={handleChange} type={src === visioff ? "password" : "text"} className="w-[90%] bg-gray-200 rounded-md p-3 focus:outline-none" placeholder="Enter Password" />
              <div className="w-[10%]"><img src={src} onClick={handleVisible} className="w-5 cursor-pointer" /></div>
            </div>
          </div>
          <div className="save text-center mt-4">
            <button className='bg-green-500 py-2 px-4 rounded-md font-bold w-full sm:w-auto' onClick={handleSave}>Save</button>
          </div>
        </div>
      </div>

      <div className='DisplayContainer w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto mt-8'>
        <div className="head rounded-t-lg h-12 font-bold flex items-center">Saved Passwords</div>
        <div className="bg-white shadow rounded-lg overflow-x-auto">
          <div className="min-w-[500px]">
            <div className="tablehead flex gap-[4%] w-full text-center font-bold bg-gray-200 p-2">
              <p className='w-[40%]'>Website</p>
              <p className='w-[20%]'>Username</p>
              <p className='w-[20%]'>Password</p>
              <p className='w-[10%]'>Actions</p>
            </div>
            {passwordsArray.length === 0 ? (
              <div className="p-4 text-center">No passwords saved</div>
            ) : (
              passwordsArray.map((item, index) => (
                <div key={item._id} className="flex w-full text-center font-bold p-2 border-b">
                  <div className="flex gap-[4%] w-[100%]">
                    <p className='w-[40%] flex justify-between items-center'>
                      <span className='truncate w-[90%]'>{item.site}</span>
                      <img src={copy} className="cursor-pointer w-4 h-4" onClick={() => handleCopy(item.site)} />
                    </p>
                    <p className='w-[20%] flex justify-between items-center'>
                      <span className='truncate w-[90%]'>{item.username}</span>
                      <img src={copy} className="cursor-pointer w-4 h-4" onClick={() => handleCopy(item.username)} />
                    </p>
                    <p className='w-[20%] flex justify-between items-center'>
                      <span className='truncate w-[90%]'>{item.password}</span>
                      <img src={copy} className="cursor-pointer w-4 h-4" onClick={() => handleCopy(item.password)} />
                    </p>
                    <div className="w-[10%] flex justify-center gap-2">
                      <img src={edit} alt="Edit" onClick={()=>{handleEdit(item)}} className="w-4 h-4 cursor-pointer" />
                      <img src={dlete} alt="Delete" onClick={() => handleDelete(item._id)} className="w-4 h-4 cursor-pointer" />
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default manegar;
