import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import { Link } from 'react-router-dom'
import './TweetBox.css'
import db from './firebase'

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName : "",
            username: "",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://www.pngjoy.com/pngm/136/2750635_gray-circle-login-user-icon-png-transparent-png.png"
        })

        setTweetMessage("")
        setTweetImage("")
    }

    return (
        <div className = "tweetBox col-md-10">
            <form>
                <div className = "tweetBox__input">
                    <Avatar
                        src = "https://www.pngjoy.com/pngm/136/2750635_gray-circle-login-user-icon-png-transparent-png.png"
                    />
                    <input
                        className="text-light"
                        onChange = {(e) => setTweetMessage(e.target.value)}
                        value = {tweetMessage} 
                        placeholder = "Que esta pasando?" 
                        type = "text" 
                    />
                </div>
                <input 
                    onChange = { (e) => setTweetImage(e.target.value) }
                    value = {tweetImage}
                    placeholder = "Copie y pegue el URL de su imagen" 
                    className = "tweetBox__imageInput"
                />
                <div class="btn-group" role="group" aria-label="Basic example">

                    <Button>
                        <Link to={'/list'} className="nav-link">
                            <FormatListBulletedIcon fontSize="large"/>
                        </Link>
                    </Button> 
                    <Button
                        onClick = { sendTweet }
                        className = "tweetBox__tweetButton">Tweet
                    </Button>
                </div>               
            </form>
        </div>
    )
}

export default TweetBox;