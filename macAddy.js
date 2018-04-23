/*
A media access control address (MAC address) is a unique identifier assigned to network interfaces for communications on the physical network segment.

The standard (IEEE 802) format for printing MAC-48 addresses in human-friendly form is six groups of two hexadecimal digits (0 to 9 or A to F), separated by hyphens (e.g. 01-23-45-67-89-AB).

Your task is to check by given string inputString whether it corresponds to MAC-48 address or not.

Example

For inputString = "00-1B-63-84-45-E6", the output should be
isMAC48Address(inputString) = true;
For inputString = "Z1-1B-63-84-45-E6", the output should be
isMAC48Address(inputString) = false;
For inputString = "not a MAC-48 address", the output should be
isMAC48Address(inputString) = false.
*/
function isMAC48Address(inputString) {
    return /^(?:[0-9A-F]{2}-){5}[0-9A-F]{2}$/.test(inputString);
}

// other method: 

function isMAC48Address(inputString) {
    if(inputString.length != 17) {
        return false;
    }
    for(var i=0; i<17; ++i) {
        if(i == 2 || i == 5 || i == 8 || i == 11 || i == 14) {
            if(inputString.charAt(i) != "-") {
                return false;
            }
        }
        else {
            if(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"].indexOf(inputString.charAt(i)) == -1) {
                return false;
            }
        }
    }
    return true;
}
