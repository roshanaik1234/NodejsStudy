import { useEffect, useState } from 'react'
import './App.css'
import ApiUrlConstant from './ApiUrlConstanr';
import { AgGridProvider, AgGridReact } from 'ag-grid-react';
import { AllCommunityModule } from 'ag-grid-community';



function App() {
 const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
 })

 const [isEdit, setIsEdit] = useState(false)
 const [editId, setEditId] = useState(null)

 const[userData, setUserData] = useState([])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(ApiUrlConstant?.SUBMIT_FORM, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
     console.log('Success:', data);
    if(data?.success){
      setUserData(data?.data)
      setFormData({
        name: '',
        email: '',
        message: ''
      })
      
     alert('Form submitted successfully!');
    }else{
      alert('Failed to submit form');
    }    
  } catch (error) {
    console.error('Error:', error);
    alert('Error submitting form');
  }
};

const handelDelete= async (id) => {
  try {
    const response = await fetch(
      ApiUrlConstant.DELETE_USER.replace(':id', id),
      {
        method: 'DELETE'
      }
    );

    const data = await response.json();

    if (data.success) {
      setUserData(data.data);
      alert('Record deleted successfully');
    } else {
      alert('Failed to delete record');
    }
  } catch (error) {
    console.error(error);
    alert('Error deleting record');
  }
};

const colDefs = [
  { headerName: 'Name', field: 'name',flex:1 },
  { headerName: 'Email', field: 'email',flex:1},
  { headerName: 'Message', field: 'message',flex:1 },
  { headerName: 'Action',
     field: 'action',flex:1, 
    cellRenderer: (params) => (
      <>
        <button onClick={() => handelEdit(params.data)}>
    Edit
  </button>

  <button style={{marginLeft: "10px"}} onClick={() => handelDelete(params.data.id)}>
    Delete
  </button>
      </>


) }
];
const modules = [AllCommunityModule];

const handelEdit = (data) => {
  setIsEdit(true);
  setFormData({
    name: data?.name,
    email: data?.email,
    message: data?.message
  })
  setEditId(data?.id)
} 

const handleEditSubmit = async () => {
  try {

    const response = await fetch(
      ApiUrlConstant.Edit_FORM.replace(':id', editId),
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }
    );

    const data = await response.json();

    if (data.success) {

      setUserData(data.data);

      setFormData({
        name: '',
        email: '',
        message: ''
      });

      setEditId(null);
      setIsEdit(false);

      alert('Record updated successfully');
    }

  } catch (error) {
    console.error(error);
  }
};

const getUserData = async () => {
  try {
    const response = await fetch(ApiUrlConstant.GET_USER_DATA);
    const data = await response.json();
    
    if (data.success) {
      setUserData(data.data);
    } else {
      alert('Failed to fetch user data');
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    alert('Error fetching user data');  
  }
};

useEffect(() => {
  getUserData();
}, []);

  return (
    <>
     <div className="App">
      <form>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        </div>
        <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        </div>
        <div>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          {
            isEdit ? <button type="button" style={{display:"flex",justifyContent:"center",border:"1px solid",borderRadius:"15px"}} onClick={handleEditSubmit}>Update</button> : <button type="button" style={{display:"flex",justifyContent:"center",border:"1px solid",borderRadius:"15px"}} onClick={handleSubmit}>Submit</button>
          }
        </div>
       

      </form>
      </div>
<br />
<br />
      <div className='userData'>
         <AgGridProvider modules={modules}>
        <div style={{ height: 500 }}>
            <AgGridReact
                rowData={userData}
                columnDefs={colDefs}
            />
        </div>
    </AgGridProvider>
        </div>
    </>
  )
}

export default App
// create vit application and past this code in App.js For CURD operation using node js 
