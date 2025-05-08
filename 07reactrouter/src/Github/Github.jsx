import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <>
      <div className="bg-green-400 text-4xl">
        Github Followers : {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300} />
      </div>
    </>
  );
}

export default Github;
