import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import { getRepos } from "../axios/axios";
import RepoList from "../components/RepoList";
import store from "store";

export default function Home() {
  const [orgNameString, setOrgName] = useState();
  const [repoNames, setRepos] = useState();

  const filterRepoNameResults = (objectOfRepoNames) => {
    const publicRepos = objectOfRepoNames.filter(
      (repo) => repo.private === false
    );
    return publicRepos;
  };
  const handleButtonClick = async () => {
    try {
      const reposResult = await getRepos(orgNameString);
      console.log(reposResult)
      if (reposResult === undefined) {
        console.log("Organization not found");
      }  else {
        const { data } = reposResult;
        const filteredResults = filterRepoNameResults(data);
        store.set("data", data);
        setRepos(filteredResults);
      }
    } catch (error) {
      console.log("error.mssage: ", error);
    }
  };

  return (
    <div>
      <h3>Enter Organization Name</h3>
      <Search setOrgName={setOrgName} />
      <Button
        onClick={() => handleButtonClick()}
        variant="contained"
        color="primary"
      >
        Search
      </Button>
      <h1>{orgNameString}</h1>
      <h4>
        <div>
          <RepoList repoNames={repoNames} />
        </div>
        <Link to="/Details">Details</Link>
      </h4>
    </div>
  );
}
