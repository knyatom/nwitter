/* eslint-disable */
import { dbService } from "fbase";
import { useState, useEffect } from "react";
import Nweet from '../components/Nweet'

const Home = ({ userObj }) => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);

    useEffect(() => {
        dbService.collection("nweets").onSnapshot((snapshot) => {
            const newArray = snapshot.docs.map((document) => ({
                id: document.id, ...document.data(),
            }));
            setNweets(newArray);
        });
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("nweets").add({
            text: nweet,
            createdAt: Date.now(),
            createId: userObj.uid,
        });
        setNweet('');
    };


    const onChange = (event) => {
        event.preventDefault();
        const { target: { value } } = event;
        setNweet(event.target.value);
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    value={nweet}
                    onChange={onChange}
                    type="text"
                    placeholder="What's on your mind?"
                    maxLength={120}
                />
                <input type="submit" value="Nweet" />
            </form>
            <div>
                {nweets.map((nweet) => (
                    // <div key={nweet.id}>
                    //     <h4>{nweet.text}</h4>
                    // </div>
                    <Nweet key={nweet.id} 
                    nweetObj={nweet} 
                    isOwner={nweet.createId===userObj.uid}
                    />
                ))}

            </div>
        </>
    )
}

export default Home;