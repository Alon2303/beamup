const axios = require('axios');


const getreposByOrgName =  async (orgName) => {
    try {
      const repos = await axios.get(`https://api.github.com/orgs/${orgName}/repos`);
      const {data} = repos;
      return data;
    } catch (error) {
      if(error.response.status === 404){
        return error.response.status;
      };
      return "Not found";
    }
}

module.exports = {getreposByOrgName}