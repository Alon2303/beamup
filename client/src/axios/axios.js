import axios from 'axios';

const getRepos = async (orgName) => {
   try {
    const data = await axios.get(`http://localhost:3001/repos/${orgName}`);
    return data;
   } catch (error) {
     console.log(error.code);
   }
  
}

export {getRepos}

