import React from "react";
import { Link } from "react-router-dom";

export default function RepoList(props) {
  const { repoNames } = props;
  console.log("repoNames: ", repoNames)
  return (
    <div className="container">
      <h3 className="p-3 text-center">Display a list of Repos</h3>
      {repoNames && repoNames.length> 0 && <ul>
        {repoNames.map((repoName) => {
          return <ol key={repoName}><Link to="/Details">{repoName.git_url}</Link></ol>;
        })}
      </ul> }
    </div>
  );
}
