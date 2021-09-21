import { dbService } from 'fbase';
import React from 'react'

// function Nweet(props) {

//     return (        
//         <div>
//             <h4>{props.nweetObj.text}</h4> 
//         </div>
//     )
// }

function Nweet({ nweetObj, isOwner }) {
    const onDeleteClick = async () => {
        const ok = window.confirm("삭제하시겠습니까");
        console.log(ok);
        if (ok) {
            console.log(nweetObj.id);
            const data = await dbService.doc(`nweets/${nweetObj.id}`).delete();
            console.log(data);
        }
    }

    return (
        <div>
            <h4>{nweetObj.text}</h4>
            {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete Nweet</button>
              <button>Edit Nweet</button>
            </>
            )}
        </div>
    )
}

export default Nweet
