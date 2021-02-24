module.exports = function toReadable (number) {
      let string = String(number);
    let newNum;
    let newStr = '';
    let curStr = '';
    let hundredStr = '';

    if (string === '0') {
        curStr = 'zero';
        return curStr;
    }
    
    if (number > 99) {
        hundredStr = upToNineteen(string[0]) + ' ' + 'hundred';
        if (string[1] === '0' && string[2] === '0') {
            return hundredStr;
        } else {
            newStr = string[1] + string[2];
            newNum = Number(newStr);
            if (newNum < 10) {
                curStr = hundredStr + ' ' + upToNineteen(string[2]);
                return curStr;
            } else if (newNum < 20) {
                curStr = hundredStr + ' ' + upToNineteen(newStr);
                return curStr;
            } else if (string[2] === '0') {
                curStr = hundredStr + ' ' + decades(string[1]);
                return curStr;
            } else if (string[1] === '0') {
                curStr = hundredStr + ' ' + upToNineteen(string[2]);
                return curStr;
            } else {
                curStr = hundredStr + ' ' + decades(string[1]) + ' ' + upToNineteen(string[2]);
                return curStr;
            }
        }
    }

    if (string.length = 2) {
        curStr = '';
        if (number < 20) {
            curStr = upToNineteen(string);
            return curStr;
        } else if (string[1] === '0') {
            curStr = decades(string[0]);
            return curStr;
        } else {
            curStr = decades(string[0]) + ' ' + upToNineteen(string[1]);
            return curStr;
        }
    }

    if (string.length = 1) {
        curStr = upToNineteen(string);
        return curStr;
    }



    function upToNineteen(num) {
        switch(num) {
            case '1': return 'one'; 
            case '2': return 'two'; 
            case '3': return 'three'; 
            case '4': return 'four'; 
            case '5': return 'five'; 
            case '6': return 'six'; 
            case '7': return 'seven';
            case '8': return 'eight';
            case '9': return 'nine'; 
            case '10': return 'ten'; 
            case '11': return 'eleven'; 
            case '12': return 'twelve'; 
            case '13': return 'thirteen'; 
            case '14': return 'fourteen'; 
            case '15': return 'fifteen'; 
            case '16': return 'sixteen'; 
            case '17': return 'seventeen';
            case '18': return 'eighteen'; 
            case '19': return 'nineteen'; 
        }
    }

    function decades(num) {
        switch(num) {
            case '2': return 'twenty'; 
            case '3': return 'thirty'; 
            case '4': return 'forty'; 
            case '5': return 'fifty'; 
            case '6': return 'sixty'; 
            case '7': return 'seventy';
            case '8': return 'eighty'; 
            case '9': return 'ninety'; 
        }
    } 
};
