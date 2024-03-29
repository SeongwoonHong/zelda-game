
import React from 'react'
import styled from 'styled-components';
import { SPRITE_SIZE } from 'config/constants';
import Player from 'components/player'

const getTileSprite = (type) => {
  switch(type) {
    case 0:
      return 'grass';
    case 5:
      return 'rock';
    case 6:
      return 'tree';
    default:
      return 'grass';
  }
}

const MapTile = ({ tile }) => {
  return (
    <StyledTile className={getTileSprite(tile)}>
    </StyledTile>
  );
}

const MapRow = ({ row }) => {
  return (
    <StyledRow>
      {
        row.map(tile => <MapTile tile={tile} />)
      }
    </StyledRow>
  );
}

const Map = ({ tiles }) => {
  return (
    <StyledMap>
      {
        tiles.map(row => <MapRow row={row} />)
      }
      <Player />
    </StyledMap>
  )
}

export default Map

const StyledMap = styled.div`
  width: 3000px;
  background-image: url('/tiles/waterSeamlessLoop.gif');

  .rock {
    background-image: url('/tiles/rock.png');
  }

  .tree {
    background-image: url('/tiles/tree.png');
  }

  .grass {
    background-color: green;
  }
`;

const StyledRow = styled.div`
  width: 100%;
  height: ${SPRITE_SIZE}px;
`;

const StyledTile = styled.div`
  display: inline-flex;
  background-color: green;
  height: ${SPRITE_SIZE}px;
  width: ${SPRITE_SIZE}px;
`;
