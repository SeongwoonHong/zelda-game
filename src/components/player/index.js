
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';
import walkSprite from 'assets/player_walk.png'
import { Player as PlayerAction } from 'actions';
import {
  WEST,
  EAST,
  NORTH,
  SOUTH,
} from 'config/constants'

function mapStateToProps(state) {
  return {
    position: state.player.position,
  }
}

const mapDispatchToProps = {
  attemptMove: PlayerAction.attemptMove,
};

const Player = ({ position, attemptMove }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  function handleKeyDown(e) {
    e.preventDefault()

    switch(e.keyCode) {
      case 37:
        return attemptMove(WEST);
      case 38:
        return attemptMove(NORTH);
      case 39:
        return attemptMove(EAST);
      case 40:
        return attemptMove(SOUTH);
      default:
        console.log(e.keyCode)
        return;
    }
  }

  return (
    <StyledPlayer
      position={position}
    />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);

const StyledPlayer = styled.div`
  position: absolute;
  top: ${props => props.position[1]}px;
  left: ${props => props.position[0]}px;
  background-image: url(${walkSprite});
  background-position: 0 0;
  width: 40px;
  height: 40px;
`;
