import axios from "axios";
const APIKEY = "AIzaSyAwmqrxbzv5lUaZk5LZuRay7jG14HhIZ0A";
const BASEURL = "https://www.googleapis.com/"

export default {
    search: function(query){
        return axios.get(BASEURL + query + APIKEY);
    }
};