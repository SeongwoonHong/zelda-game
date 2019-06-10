import React, { useEffect } from 'react'
import styled from 'styled-components';
import Map from 'components/map'
import Player from 'components/player'
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
    <StyledWorld>
      <Map tiles={tiles} />
      <Player />
    </StyledWorld>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(World);

const StyledWorld = styled.div`
  position: relative;
  width: 800px;
  height: 100vh;
  margin: 0px auto;
`;
