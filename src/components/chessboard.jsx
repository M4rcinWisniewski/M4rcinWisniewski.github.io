
import { Chessboard } from "react-chessboard";

const Board = () => {
  const colorDark = {
    backgroundColor: '#dc143c',
    opacity: '100%'

  }
  const colorLight = {
    backgroundColor: '#cccccc',
    opacity: '100%'

  }
  const board = {
    borderRadius: '5px', 
    boxShadow: '0 5px 15px rgba(.5px, 1px, 1.5px, 2px)',
    
  }
  return (
    <section className="flex">
      <h1>Chessibble</h1>
    <div className="chess">
      <Chessboard id="BasicBoard"
      customArrowColor="#dc143c"
      position='3Rb3/4kpp1/5n1p/1p6/8/PBN5/2P2r1P/1K6 w - - 1 33'
      animationDuration = {350}
      customDarkSquareStyle = {colorDark}
      customLightSquareStyle = {colorLight}
      customBoardStyle = {board}
      />
    </div>
    </section>
  );
}

export default  Board