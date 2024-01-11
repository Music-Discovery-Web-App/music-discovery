import React from 'react'
import { type Recommendations, Song } from 'src/shared'
import { useMutation } from "react-query"
import { mutateRecommendations } from 'src/queries/mutateRecommendations'

const ResultSidebar = ({recommendations}) => {
    if(!recommendations || recommendations.length === 0) {
        return <div>No recommendations to display.</div>
    }
    
    const handleSave = () => {
        if(recommendations && recommendations.length > 0) {
            mutate(recommendations)
        }
    }

    const { mutate, isLoading, error } = useMutation(mutateRecommendations, {
        onSuccess: () => {
            console.log("saved successfully")
        },
        onError: () => {
            console.error("Error saving reocmmendations", error)
        }
    })
  return (
    <div className="h-screen">
        <h2>Results</h2>
        {recommendations.map((song: Song, index: number) => (
            <li key={index}>
                <p>{song.name} by {song.artists}</p>
            </li>
        ))}
        {/* { user.isLoggedIn ? ( */}
        <button onClick={handleSave} disabled={isLoading}>
            Save
        </button>
{/* // ):(
//     <button type="button" disabled>Login to save </button>
// )} */}
    </div>
  )
}

export default ResultSidebar
