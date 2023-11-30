import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({monster}) {

  const [front, setFront] = useState(true)
  
  return (
    <Card>
      <div onClick={() => setFront(!front)} >
        <div className="image" >
          <img src={front ? monster.sprites.front : monster.sprites.back} alt={monster.name} />
        </div>
        <div className="content">
          <div className="header">{monster.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {monster.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
