module.exports = function toReadable (number) {
    const less_twenty = [
        'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
        'eighteen', 'nineteen'
    ]
    const dozens = [
        'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ]
    if (number == 0) {
        return dozens[0];
    }
    else if ( number>0 && number<20) {
        return less_twenty[(number)-1];
    }
    else if (number>=20 && number<100) {
        return dozens[Math.floor(number/10)] + (number%10 != 0 ? ' ' + less_twenty[(number%10)-1] : '');
    }
    else {
        let r_of_division = (number%100);
        if (r_of_division == 0) {
            return less_twenty[(Math.floor(number/100))-1] + ' hundred';
        }
        if (r_of_division>0 && r_of_division<20) {
            return less_twenty[(Math.floor(number/100))-1] + ' hundred ' + less_twenty[(r_of_division)-1];
        }
        else {
            return less_twenty[(Math.floor(number/100))-1] + ' hundred ' + (dozens[Math.floor(r_of_division/10)] + ((r_of_division%10) != 0 ? ' ' + less_twenty[(r_of_division%10)-1] :''));
        }
        
    }
}
