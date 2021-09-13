import { dbService } from "fbase";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const Home = ({userObj}) => {  
    const [nweet, setNweet] = useState('');
    const [nweets, setNweets] = useState([]);

    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("nweet").add({
            text: nweet,
            createdAt: Date.now(),
            createId:userObj.uid,
        });
        setNweet('');
    }

    const getNweets = async () => {
        const dbNweets = await dbService.collection("nweet").get();

        dbNweets.forEach((document) => {
            const nweetObject = { ...document.data(), id: document.id };
            setNweets((prev) => [nweetObject, ...prev])
        });
    };
    useEffect(() => {
        getNweets();
    }, []);
    //console.log(nweets);

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
                {nweets.map((nweet)=>(
                    <div key={nweet.id}>
                        <h4>{nweet.text}</h4>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home;