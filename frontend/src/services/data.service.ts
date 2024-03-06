import axios from 'axios'
import { url, urlData } from '../models/url.model';
import { Panel } from '../pages/Panel';

export async function getData(pageNumber : number) {
    try {
        const response = await axios.get(`http://localhost:4000/list`)
        return response.data;
    } catch (error) {
        console.error(error);
        return null; 
    }
}

export async function getUrl(url : string) {
    try {
        const response = await axios.post(`http://localhost:4000/url`, {
            params: {
                url: {url}
            }
        });
        console.log(response.data, "RESPONSE")
        return response.data;
    } catch (error) {
        console.error(error);
        return null; 
    }
}

export async function submitData(userUrl : string)  {
    try {
        const response = await axios.post('http://localhost:4000/url', {userUrl}, {
            headers: {
                
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return null; 
    }
}