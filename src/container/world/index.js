import React, { useEffect } from 'react'
import styled from 'styled-components';
import Map from 'components/map'
import Player from 'components/player'
import { WORLD_WIDTH, WORLD_HEIGHT } from 'config/constants';
import { connect } from 'react-redux';
import { Map as MapAction } from 'actions';

const mapStateToProps = (state) => ({
  tiles: state.map.tiles,
});

const mapDispatchToProps = {
  addTiles: MapAction.addTiles,
};

const World = ({ tiles, addTiles }) => {
  useEffect(() => {
    addTiles();
  }, []);

  return (
    <StyledWorld id="world">
      <Map tiles={tiles} />
      {/* <Player /> */}
    </StyledWorld>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(World);

const StyledWorld = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: ${WORLD_WIDTH}px;
  height: ${WORLD_HEIGHT}px;
  border: 4px solid white;
  overflow: hidden;
`;
