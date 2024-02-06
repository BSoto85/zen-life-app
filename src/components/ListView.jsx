import React from "react";
import SongList from "./SongList";


const ListView = ({music}) => {
  return (
       <div>
        <SongList songs={music} />
       </div>
  )
};

export default ListView;
