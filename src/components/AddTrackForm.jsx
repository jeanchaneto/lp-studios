import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/utils/firebase'; // assuming your firebase is initialized here

const AddTrackForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    genre: '',
    bpm: '',
    duration: '',
    songKey: '',
    description: '',
    price: '',
    daw: '',
    previewUrl: '',
    inStock: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const trackData = {
        ...formData,
        timestamp: serverTimestamp(),
        // Convert numeric fields to number as they are received as strings from the form
        bpm: Number(formData.bpm),
        price: Number(formData.price),
        // Convert inStock to boolean
        inStock: formData.inStock === 'true',
      };

      await addDoc(collection(db, 'tracks'), trackData);
      alert('Track added successfully');
    } catch (error) {
      console.error('Error adding track:', error);
      alert('Error adding track');
    }
  };

  return (
    
    <form onSubmit={handleSubmit} className=' flex flex-col gap-6' >
     
      <label>
        Title:
        <input className='text-black' type="text" name="title" value={formData.title} onChange={handleChange} required />
      </label>
      <label>
        Genre:
        <input className='text-black' type="text" name="genre" value={formData.genre} onChange={handleChange} required />
      </label>
      <label>
        BPM:
        <input className='text-black' type="number" name="bpm" value={formData.bpm} onChange={handleChange} required />
      </label>
      <label>
        Duration:
        <input className='text-black' type="text" name="duration" value={formData.duration} onChange={handleChange} required />
      </label>
      <label>
        Song Key:
        <input className='text-black' type="text" name="songKey" value={formData.songKey} onChange={handleChange} required />
      </label>
      <label>
        Description:
        <textarea className='text-black' name="description" value={formData.description} onChange={handleChange} required />
      </label>
      <label>
        Price:
        <input className='text-black' type="number" name="price" value={formData.price} onChange={handleChange} required />
      </label>
      <label>
        daw:
        <input className='text-black' type="text" name="daw" value={formData.daw} onChange={handleChange} required />
      </label>
      <label>
        Preview URL:
        <input className='text-black' type="text" name="previewUrl" value={formData.previewUrl} onChange={handleChange} required />
      </label>
      <label>
        In Stock:
        <select className='text-black' name="inStock" value={formData.inStock} onChange={handleChange}>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </label>
      <button className='bg-blue-600'  type="submit">Add Track</button>
    </form>
  );
};

export default AddTrackForm;
