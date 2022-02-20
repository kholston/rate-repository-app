import { useState, useEffect } from 'react';

const useRespositories = () => {
  const [repositories, setRepositiories] = useState();
  const [loading, setLoading] = useState(false);

  const fetchRepositories = async () => {
    setLoading(true)

    const response = await fetch('http://10.0.0.133:5001/api/repositories');
    const json = await response.json();

    
    setLoading(false);
    setRepositiories(json);
  }

  useEffect(()=>{
    fetchRepositories();
  },[]);

  return{ repositories, loading, refetch: fetchRepositories };
}

export default useRespositories;