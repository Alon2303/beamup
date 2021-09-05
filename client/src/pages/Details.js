import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import store from "store";

export default function Details() {
  const data = store.get("data");

  return (
    <div className="container">
      <h1 style={{textAlign:"center"}}>List of Repos</h1>
      <h4 style={{marginLeft:"50%"}}>
        <Link to="/">Home</Link>
      </h4>
      <table style={{ width: "50%", marginLeft:"25%"}}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Forks</th>
            <th>Watchers</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map(repo => (
              <tr key={repo.id} style={{textAlign: "center"}}>
                <td> {repo.id} </td>
                <td> {repo.name} </td>
                <td>{repo.forks}</td>
                <td>{repo.watchers}</td>
                <td>{repo.owner.login}</td>
                <td>
                    <Button 
                        variant="contained" 
                        color="primary"
                        >
                        Add To Profile
                    </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
