import { useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchURL } from '../services/data.service';

function RedirectPage() {
    const navigate = useNavigate()
    const URLnavigate = (link: string) => {
        window.location.href = link; // Replace with the desired website URL
      };
    const location = useLocation();
    async function fetchData() {
        const currentUrl = "http://localhost:5173" + location.pathname;
        const linkData = await fetchURL(currentUrl);
        if(linkData){
            URLnavigate(linkData)
        }else{
            navigate("/")
        }
    }
    const redirect = useCallback(async () =>{ 
        await fetchData()
    },[]);

    useEffect(() => {
        redirect()
    }, [location]);

  
    return (
        <>
        </>
    );
}

export default RedirectPage;