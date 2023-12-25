import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [feName, setFeName] = useState('');
  const [feType, setFeType] = useState('');
  const [barangay, setBarangay] = useState('');
  const [description, setDescription] = useState('');
  const [operatingHours, setOperatingHours] = useState('');
  const [menu, setMenu] = useState('');
  const [location, setLocation] = useState('');
  const [locationDescription, setLocationDescription] = useState('');

  const [logo, setLogo] = useState();
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();

  const handleFilelogo = (e) => {
    setLogo(e.target.files[0]);
  };
  const handleFileimage1 = (e) => {
    setImage1(e.target.files[0]);
  };
  const handleFileimage2 = (e) => {
    setImage2(e.target.files[0]);
  };
  const handleFileimage3 = (e) => {
    setImage3(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();

      const files = { logo, image1, image2, image3 };
      const columns = Object.keys(files);

      columns.forEach((column) => {
        formData.append(column, files[column]);
      });

      formData.append('feName', feName);
      formData.append('feType', feType);
      formData.append('barangay', barangay);
      formData.append('description', description);
      formData.append('operatingHours', operatingHours);
      formData.append('menu', menu);
      formData.append('location', location);
      formData.append('locationDescription', locationDescription);

      await axios.post('http://localhost:8081/upload/all', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('All data uploaded successfully');
    } catch (error) {
      console.error('Error uploading data', error);
    }
  };

  return (
    <div className="App">
      <div>
            <header>
                <div className="logo">
                    <h1>Food Establishment Admin</h1>
                </div>
            </header>

            <section className="content">
                <div className="gallery-section">
                    <h2>Food Establishment Galleries</h2>
                    <br/>
                    <h3>Food Establishment:</h3>
                    <input type="file" accept="image/*"  onChange={handleFilelogo} />
                    <h3>First Image:</h3>
                    <input type="file" accept="image/*"  onChange={handleFileimage1} />
                    <h3>Second Image:</h3>
                    <input type="file" accept="image/*"  onChange={handleFileimage2} />
                    <h3>Third Image:</h3>
                    <input type="file" accept="image/*"  onChange={handleFileimage3} />
                    
                </div>

                <div className="info-section">
                    <h2>Food Establishment Information</h2>
                    <form>
                        <label htmlFor="feName">Food Establishment Name:</label>
                        <input 
                        type="text"
                        id="feName"
                        name="feName"
                        value={feName}
                        onChange={(e) => setFeName(e.target.value)}
                        />

                        <label htmlFor="feType">Type of Food Establishment:</label>
                        <input
                        type="text"
                        id="feType"
                        name="feType"
                        value={feType}
                        onChange={(e) => setFeType(e.target.value)}
                        />

                        <label htmlFor="barangay">Barangay:</label>
                        <input
                        type="text"
                        id="barangay"
                        name="barangay"
                        value={barangay}
                        onChange={(e) => setBarangay(e.target.value)}
                        />

                        <label htmlFor="description">Description:</label>
                        <textarea 
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="4"
                        ></textarea>

                        <label htmlFor="operatingHours">Operating Hours:</label>
                        <input
                        type="text"
                        id="operatingHours"
                        name="operatingHours"
                        value={operatingHours}
                        onChange={(e) => setOperatingHours(e.target.value)}
                        />

                        <label htmlFor="menu">Menu:</label>
                        <textarea 
                        id="menu"
                        name="menu"
                        value={menu}
                        onChange={(e) => setMenu(e.target.value)}
                        rows="4"
                        ></textarea>
                        

                        <label htmlFor="location">Location:</label>
                        <textarea 
                        id="location"
                        name="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        rows="4"
                        ></textarea>
                        

                        <label htmlFor="locationDescription">Location Description:</label>
                        <input
                        type="text"
                        id="locationDescription"
                        name="locationDescription"
                        value={locationDescription}
                        onChange={(e) => setLocationDescription(e.target.value)}
                        />
                        <input type='submit' value={'Upload'} onClick={handleUpload}/>
                    </form>
                </div>
            </section>

            <footer>
                <p>&copy; 2023 Food Establishment. All rights reserved.</p>
            </footer>
        </div>
    </div>
  );
}

export default App;
