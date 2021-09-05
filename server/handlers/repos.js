"use strict";
const { getreposByOrgName } = require("./axioshandler.js");
const { insertData } = require("./mongo");

const getRepos = async (req, res) => {
  try {
    const repoName = req.params.org;
    req.log.info(`Getting Repositories for: ${repoName}`);
    const repoList = await getreposByOrgName(repoName);
    insertData({ repoList: repoList });
    req.log.info(`Sending results for ${repoName}`);
    res.send(repoList);
  } catch (error) {
    return error.message;
  }
};

module.exports = { getRepos };
