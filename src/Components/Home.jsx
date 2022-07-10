import React from 'react';
import { useState } from 'react';
import './Home.css';
import LoadingSpinner from './LoadingSpinner';
import RanderData from './RanderData';

function Home() {
    const [firsttime, setFirstTime] = useState(true);
    const [value, setValue] = useState("");
    let data = '';
    const [link1, setLink1] = useState([]);
    const [link2, setLink2] = useState([]);
    const [link3, setLink3] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const handlethis = (e) => {
        setFirstTime(false);
        if (value.url) {
            setErrorMessage("");
            setIsLoading(true);
            e.preventDefault();
            fetch(`https://api.shrtco.de/v2/shorten?url=${value.url}`)
                .then((res) => res.json())
                .then((json) => {
                    
                    data = json;
                    setLink1(data.result.full_short_link);
                    setLink2(data.result.full_short_link2);
                    setLink3(data.result.full_short_link3);
                    setIsLoading(false);
                    
                })
                .catch(() => {
                    setErrorMessage("Error, Please try again...");
                    setIsLoading(false);
                    setFirstTime(true);
                });

        }
    }
    const onChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };
    return (
        <>
            <div className='navbar'>
                <div className='logo'>
                    Multi URL Shortener
                </div>
                {/* <div className='info'>
                    URL Info
                </div> */}

            </div>
            <div className='container'>
                <div className='card'>
                    <h1>Paste the URL to be shortened</h1>
                    <div className='input-div'>
                        <input className='input' type="text" name="url"
                            onChange={onChange} value={value["url"] || ''}
                            placeholder="Enter the link here" />
                        <button onClick={handlethis} className='button_url'>Shorten URL</button>
                    </div>
                    {errorMessage && <div className="error">{errorMessage}</div>}
                    {!firsttime ?  isLoading ? <LoadingSpinner /> : <RanderData link1={link1} link2={link2} link3={link3} /> :
                        null
                    }

                </div>
            </div>
        </>
    )
}

export default Home