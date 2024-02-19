import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    const [error, setError] = useState(null);
    useEffect(() => {
        githubInfoLoader()
    }, [])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => {
    //     if (!response.ok) {
    //         throw new Error('API request failed');
    //       }
    //     response.json()})
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    //  .catch(error => {
    //     if (error.message.includes('API rate limit exceeded')) {
    //       setError('API rate limit exceeded. Please try again later.');
    //     } else {
    //       setError('An error occurred while fetching data.');
    //     }
    //   });
    // }, [])
  return (
    <>
    { error ? (<p>{error}</p>) : (
    <div className='text-center m-4 bg-gray-600 text-white text-3xl p-4'>
            Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300}/>
    </div>
    )}
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    try {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary')
        return response.json()
    }
    catch (error) {
        if (error.message.includes('API rate limit exceeded')) {
          setError('API rate limit exceeded. Please try again later.');
        } else {
          setError('An error occurred while fetching data.');
        }
    }
}
