import { useRef, useState } from 'react'
import './css/createBlog.css'
import Message from "./Message.jsx";
import axios from "axios";

const CreateBlog = () => {
  const dataTitle = useRef(null);
  const dataContent = useRef(null);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleOnChange = () => {
    setSuccess(null);
    setError(null);
  };

  const validate = (title, content) => {
    if(!(/^(?!.*\d)[A-Za-z\s]{5,}$/.test(title))){ setError('Title must be of 5 characters and must not contain numbers'); return false}
    if (!(/^.{10,}$/.test(content))) {setError('Content must be of minimum 10 characters'); return false}
    return true
  }

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    setSuccess(null);
    setError(null);

    if (dataTitle.current.value.trim() === '') {
      setError('Title cannot be empty');
    } else if (dataContent.current.value.trim() === '') {
      setError('Content cannot be empty');
    } else {
      if(validate(dataTitle.current.value,dataContent.current.value)){
        const data = {
          title: dataTitle.current.value.trim(),
          content: dataContent.current.value.trim(),

        };
        try{
          console.log({title: dataTitle.current.value, content: dataContent.current.value});
          const response = await axios.post("http://localhost:3000/posts/", data, {headers:{Authorization: `Bearer ${localStorage.getItem("access_token")}`}});

          if(response.data.statuscode === 201){
            setSuccess('Form submitted successfully');
            dataTitle.current.value = '';
            dataContent.current.value = '';
          }
          console.log(response);
        }catch (e) {
          console.log(e);
        }
      }
    }
  };

  return (
      <div className="create-blog">
        <h1>CREATE A NEW BLOG</h1>
        <form onChange={handleOnChange} className="blog-form" onSubmit={handleOnSubmit}>
          <div className="title">
            <label htmlFor="title">Title of The Blog</label>
            <input id="title" ref={dataTitle} />
          </div>

          <div className="content">
            <label htmlFor="content">Content of The Blog</label>
            <textarea id="content" ref={dataContent} />
          </div>
          <button type="submit">POST</button>
        </form>
        {success && <Message type={true} message={success} />}
        {error && <Message type={false} message={error} />}
      </div>
  );
};

export default CreateBlog;
