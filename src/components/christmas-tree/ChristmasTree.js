import React from "react";
import "./ChristmasTree.scss";
import parse from "html-react-parser";
class ChristmasTree extends React.Component {
  // make submit work, form more beautiful 闪不同颜色
  // 让音乐自动播放
  // intergrate with

  drawCustomTree(blockNumStr, blockRowStr) {
    let result = '<div className="inner_container">';
    let blockNum = parseInt(blockNumStr);
    let blockRow = parseInt(blockRowStr);
    let input_ele_num = 1;
    let current_last_row_ele_count;
    for (let i = 0; i < blockNum; i++) {
      current_last_row_ele_count = input_ele_num + 2 * (blockRow - 1);
      input_ele_num =
        current_last_row_ele_count - 4 > 0 ? current_last_row_ele_count - 4 : 1; // the new block initial row count is 4 less than last row number in last block
    }
    let last_block_last_row_ele_count = current_last_row_ele_count;

    result += this.printCustomTree(
      blockNum,
      blockRow,
      last_block_last_row_ele_count
    );
    result += this.printCustomLog(last_block_last_row_ele_count);
    return parse(result + "</div>");
  }

  // number of block going to print, the number of rows in each block
  printCustomTree(number_block, number_row, last_block_last_row_ele_count) {
    let result = "";
    let init_row_ele_count = 1;
    let input_ele_num = init_row_ele_count;
    input_ele_num = init_row_ele_count;
    for (let i = 0; i < number_block; i++) {
      let last_row_ele_count = input_ele_num + 2 * (number_row - 1);
      let current_block_shift_number =
        (last_block_last_row_ele_count - last_row_ele_count) / 2;
      result += this.customizeTriangle(
        number_row,
        input_ele_num,
        current_block_shift_number
      );
      input_ele_num = last_row_ele_count - 4 > 0 ? last_row_ele_count - 4 : 1; // the new block initial row count is 4 less than last row number in last block
    }
    return result;
  }

  printCustomLog(count) {
    let result = "";
    let basicStar = '<span className="treeLeaf">*</span>';
    let basicSpace = '<span className="treeLeaf">&nbsp;</span>';
    let logSpace = basicSpace.repeat((count - 1) / 4);
    let logStar = basicStar.repeat((count + 1) / 2);
    let linePrint = logSpace + logStar;
    for (let i = 0; i <= (count + 1) / 4; i++) {
      result += linePrint + "<br>\n";
    }
    return result;
  }

  // height is the row numbe of the triangle, input_ele_num is the first
  customizeTriangle(height, input_ele_num, shift_number = 0) {
    let result = "";
    let basicSpace = '<span className="treeLeaf">&nbsp;</span>';
    // line number is (input_ele_num +1)/2, line number start from 1
    let line_number = (input_ele_num + 1) / 2;
    let total_height = height + line_number - 1;
    for (let i = line_number; i <= total_height; i++) {
      let treeSpaceBefore = basicSpace.repeat(total_height - i + shift_number);
      let treeStar = this.generateLeavies(2 * i - 1);
      result += treeSpaceBefore + treeStar + "<br/>\n";
    }
    return result;
  }

  generateLeavies(number) {
    let treeStar = "";
    for (let j = 0; j < number; j++) {
      treeStar = treeStar + this.generateLeaf(4);
    }
    return treeStar;
  }

  // less max, more decoration.
  generateLeaf(max) {
    let leaftypes = ["☆", "*", "⛣", "❦", "◍", "☃", "♬", "✵"];
    let count = leaftypes.length;
    let randomnumber = this.getRandomInt(0, max);
    let leaf;
    if (randomnumber === 1) {
      let randomStyle = this.getRandomInt(1, 3);
      leaf =
        '<span className="treeLeaf blink' +
        randomStyle +
        '">' +
        leaftypes[this.getRandomInt(0, count - 1) % count] +
        "</span>";
    } else {
      leaf = '<span className="treeLeaf">' + leaftypes[1] + "</span>";
    }
    return leaf;
  }

  /**
   * Returns a random integer between min (inclusive) and max (inclusive).
   * The value is no lower than min (or the next integer greater than min
   * if min isn't an integer) and no greater than max (or the next integer
   * lower than max if max isn't an integer).
   * Using Math.round() will give you a non-uniform distribution!
   */
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  reDraw() {
    let blockNum = document.getElementById("blockNum").value;
    let RowNum = document.getElementById("RowNum").value;
    this.drawCustomTree(blockNum, RowNum);
  }
  render() {
    return (
      <div className="outer_container">
        <h1>Hello, christmas tree</h1>
        <audio ref="audio_tag" src="https://www.thewavsite.com/Christmas/All%20I%20Want%20for%20Christmas%20for%20Is%20You%20-%20Mariah%20Carey.wav" controls autoPlay/>
        <div className="christmastree_container">
          {this.drawCustomTree(3, 8)}
        </div>

      

        {/* <div>
            <form onSubmit={this.reDraw}>
              <label htmlFor="blockNum">Block Number: </label>
              <input type="text" id="blockNum" />
              <br />
              <label htmlFor="RowNum">Row Number: </label>
              <input type="text" id="RowNum" />
              <br />
              <input type="submit" value="Submit" />
            </form>
          </div> */}
      </div>
    );
  }
}

export default ChristmasTree;
