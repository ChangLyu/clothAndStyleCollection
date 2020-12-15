
// make submit work, form more beautiful 闪不同颜色
// 让音乐自动播放
// intergrate with 
function drawCustomTree(blockNumStr, blockRowStr) {
    var blockNum = parseInt(blockNumStr);
    var blockRow = parseInt(blockRowStr);
    var input_ele_num = 1;
    var current_last_row_ele_count;
    for (var i = 0; i < blockNum; i++) {
        current_last_row_ele_count = input_ele_num + 2 * (blockRow - 1);
        input_ele_num = (current_last_row_ele_count - 4) > 0 ? (current_last_row_ele_count - 4) : 1; // the new block initial row count is 4 less than last row number in last block
    }
    var last_block_last_row_ele_count = current_last_row_ele_count;

    printCustomTree(blockNum, blockRow, last_block_last_row_ele_count);
    printCustomLog(last_block_last_row_ele_count);
}

// number of block going to print, the number of rows in each block
function printCustomTree(number_block, number_row, last_block_last_row_ele_count) {
    var init_row_ele_count = 1;
    var input_ele_num = init_row_ele_count;
    input_ele_num = init_row_ele_count;
    for (var i = 0; i < number_block; i++) {
        var last_row_ele_count = input_ele_num + 2 * (number_row - 1);
        var current_block_shift_number = (last_block_last_row_ele_count - last_row_ele_count) / 2;
        customizeTriangle(number_row, input_ele_num, current_block_shift_number);
        input_ele_num = (last_row_ele_count - 4) > 0 ? (last_row_ele_count - 4) : 1; // the new block initial row count is 4 less than last row number in last block
    }

}

function printCustomLog(count) {
    var basicStar = '<span class="treeLeaf">*</span>';
    var basicSpace = '<span class="treeLeaf">&nbsp;</span>';
    var logSpace = basicSpace.repeat((count - 1) / 4);
    var logStar = basicStar.repeat((count + 1) / 2);
    var linePrint = logSpace + logStar;
    var finalHTML = '';
    for (var i = 0; i <= ((count + 1) / 4); i++) {
        finalHTML = finalHTML + linePrint + "<br>";
    }
    document.getElementById('christmasTree').innerHTML += finalHTML;
}

// height is the row numbe of the triangle, input_ele_num is the first 
function customizeTriangle(height, input_ele_num, shift_number = 0) {
    var basicSpace = '<span class="treeLeaf">&nbsp;</span>';
    // line number is (input_ele_num +1)/2, line number start from 1
    var line_number = (input_ele_num + 1) / 2;
    var total_height = height + line_number - 1;
    for (var i = line_number; i <= total_height; i++) {
        var treeSpaceBefore = basicSpace.repeat(total_height - i + shift_number);
        var treeStar = generateLeavies(2 * i - 1);
        combinePrintInOneLine(treeSpaceBefore, treeStar);
    }
}

function generateLeavies(number) {
    var treeStar = '';
    for (var j = 0; j < number; j++) {
        treeStar = treeStar + generateLeaf(4);
    }
    return treeStar;
}
function combinePrintInOneLine(firstStr, secStr) {
    var star = firstStr + secStr + "<br>";
    document.getElementById('christmasTree').innerHTML += star;
}

// less max, more decoration. 
function generateLeaf(max) {
    var leaftypes = ['☆', '*', '⛣', '❦', '◍', '☃', '♬', '✵'];
    var count = leaftypes.length;
    var randomnumber = getRandomInt(0, max);
    var leaf;
    if (randomnumber == 1) {
        var randomStyle = getRandomInt(1, 3);
        leaf = '<span class="treeLeaf blink' + randomStyle + '">' + leaftypes[getRandomInt(0, count - 1) % count] + '</span>';
    }
    else {
        leaf = '<span class="treeLeaf">' + leaftypes[1] + '</span>';
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
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function drawLog(height){
//     var k = 2* height -4;
//     for(var j =0; j<k ; j++){
//         document.write(star);
//     }
// }


function reDraw() {
    var blockNum = document.getElementById('blockNum').value;
    var RowNum = document.getElementById('RowNum').value;
    drawCustomTree(blockNum, RowNum);
}

var blockNum = '3';
var blockRow = '9';
drawCustomTree(blockNum, blockRow);