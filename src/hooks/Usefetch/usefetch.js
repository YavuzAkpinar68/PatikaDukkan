import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetch = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchdata = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products")
      setData(response.data)
      setLoading(false)
      
    } catch (error) {
      setError(err.message)
      setLoading(false)
    }
  }

  
    useEffect(() => {
      fetchdata();
    }, [])

    return {error, loading, data}
  
}
export default useFetch