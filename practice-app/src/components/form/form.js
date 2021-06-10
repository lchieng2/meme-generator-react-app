import Button from "../button/button";
import {useState} from "react"
import './form.css';

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

    const objectToQueryParam = (obj) => {
        const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`); // array of key/value pairs formatted like key=value
        return "?" + params.join("&");
    }

    const onSubmitForm = async (event) => {
        event.preventDefault()
        try {
            const params = {
                template_id: id,
                username: process.env.REACT_APP_IMGFLIP_API_USERNAME,
                password: process.env.REACT_APP_IMGFLIP_API_PASSWORD,
                text0: state.top,
                text1: state.bot
            }
            const response = await fetch(
                // apparently, format is url + ?template_id=xxx&username=xxx&password=xxx ...
                `https://api.imgflip.com/caption_image${objectToQueryParam(params)}`
            );
            const json = await response.json();
            props.updateImageUrlState(json.data.url)
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
            <input type="text" id="top" name="top" className="DottedBox" autoComplete="off" onChange={onInputChange}/><br></br>
            <label htmlFor="bot">Bottom text:</label>
            <input type="text" id="bot" name="bot" className="DottedBox" autoComplete="off" onChange={onInputChange}/><br></br>
            <Button type="submit" name="submit"/>
        </form>
        </>
    );
  };
  
  export default Form;