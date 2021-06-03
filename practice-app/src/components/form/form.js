import Button from "../button/button";
import {useState} from "react"
const Form = (props) => {
    const [state, setState] = useState({
        // username: "",
        // password: "",
        top: "",
        bot: ""
    })
    const { id } = props;

    const onInputChange = (e) => {
        setState({...state, [`${e.target.name}`] : e.target.value})
        
        //lookup template literals, bracket notation for objectgs, dot notation for objects
    }

    const onSubmitForm = async (event) => {
        event.preventDefault()
        try {
            const data = await fetch('https://api.imgflip.com/caption_image', {
                method: 'POST',
                headers: {
                    "content-type": "Application/json",
                },
                body: {
                    template_id: id,
                    username: process.env.REACT_APP_IMGFLIP_API_USERNAME,
                    password: process.env.REACT_APP_IMGFLIP_API_PASSWORD,
                    text0: state.top,
                    text1: state.bot
                }
            })
            console.log(data)
        } catch(error) {
            console.log(error)
        }
      }
    

    return (
        <>
        <h4>Caption the Meme</h4>
        <form onSubmit={onSubmitForm}>
            {/* <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" onChange={onInputChange} value={state.username}/><br></br>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" onChange={onInputChange}/><br></br> */}
            <label htmlFor="top">Top text:</label>
            <input type="text" id="top" name="top" onChange={onInputChange}/><br></br>
            <label htmlFor="bot">Bottom text:</label>
            <input type="text" id="bot" name="bot" onChange={onInputChange}/><br></br>
            <Button type="submit" name="submit"/>
        </form>
        </>
    );
  };
  
  export default Form;