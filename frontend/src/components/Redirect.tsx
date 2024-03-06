import { useEffect, useState } from 'react';
import { redirect, useLocation } from 'react-router-dom';
import { getUrl } from '../services/data.service';

function RedirectPage() {
    const [link, setLink] = useState("");
    
    const location = useLocation();

    useEffect(() => {
        async function fetchData() {
            const currentUrl = location.pathname;
            const linkData = await getUrl(currentUrl);
            console.log(linkData,"linkDATA")
            setLink(linkData);
        }
        fetchData();
        console.log(link,"link")
        if(link){
            redirect(link)
        }else{
            redirect("/")
        }
    }, [location]);

  
    return (
        <>
        </>
    );
}

export default RedirectPage;