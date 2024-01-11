// import { useState, useEffect} from 'react'
// import { useQuery } from "react-query"
// import { fetchRecommendations, fetchToken, fetchSong } from 'src/queries'
// import { mutateRecommendations } from 'src/queries/mutateRecommendations'
// import { Song } from 'src/shared'


export const SongSearch = () => {
    return(
        <div>
            Song search 
        </div>
    )
//     const [songId, setSongId] = useState<string>("");

//     useEffect(() => {
//         if(songName) {
//             fetchSong(songName, accessToken).then(setSongId)
//         }
//     }, [songName, accessToken])

//     const { data: tokenData, isLoading: tokenLoading, error: tokenError} = useQuery("spotifyToken", fetchToken)
//     const { data: recommendations, isLoading: recommendationsLoading, error: recommendationsError} = useQuery(["recommendations", songId], () =>
//     fetchRecommendations(songName, tokenData?.access_token), {
//         enabled: !!songId,
//     })



//     useQuery(["searchSong", songName, tokenData?.access_token], () => fetchSong(songName, tokenData?.access_token), {
//         enabled: !!tokenData?.access_token && !!songName,
//         onSuccess: (data) => { 
//             setSongId(data[0]?.id);
//         }
//     });

//     // if (tokenLoading || recommendationsLoading) return <div>Loading...</div>;
//     // if (tokenError) return <div>Error fetching token: {tokenError.message}</div>;
//     // if (recommendationsError) return <div>Error fetching songs: {recommendationsError.message}</div>;

//   return (
//     <div>
//         <h2>Results</h2>
//         {recommendations && recommendations.map((song: Song, index: number) => (
//             <div key={index}>
//                 <p>{song.name} by {song.artists}</p>
//             </div>
//         ))}
//         {/* { user.isLoggedIn ? ( */}
//         <button onClick={handleSave} disabled={isLoading}>
//             Save
//         </button>
// {/* // ):(
// //     <button type="button" disabled>Login to save </button>
// // )} */}
//     </div>
//   )
}

