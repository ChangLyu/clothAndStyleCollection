var bigInt = require("big-integer");


/**input string, output string
 */
export function karatsubaMul(a, b) {
    const base = 10;
    const a_str = a.toString();
    const b_str = b.toString();
    const a_int = bigInt(a_str);
    const b_int = bigInt(b_str);

    if (a_int.compare(base) === -1 || b_int.compare(base) === -1) {
        return a_int.multiply(b_int).toString();
    } else {

        const m = Math.floor(Math.min(a_str.length, b_str.length) / 2);
        var a_int_high = bigInt(a_str.substring(0, a_str.length - m));
        var a_int_low = bigInt(a_str.substring(a_str.length - m, a_str.length));
        var b_int_high = bigInt(b_str.substring(0, b_str.length - m));
        var b_int_low = bigInt(b_str.substring(b_str.length - m, b_str.length));

        var z2_str = karatsubaMul(a_int_high, b_int_high);
        var z0_str = karatsubaMul(a_int_low, b_int_low);
        var z1_str = karatsubaMul(a_int_low.add(a_int_high), b_int_low.add(b_int_high));
        z1_str = bigInt(z1_str).minus(bigInt(z2_str)).minus(bigInt(z0_str)).toString();

        z2_str += '0'.repeat(m * 2)
        z1_str += '0'.repeat(m)
        var r = bigInt(z2_str).add(bigInt(z1_str)).add(bigInt(z0_str));
        return r.toString();
    }



}

export function multiplyByBigInitLib(a, b) {
    return bigInt(a).multiply(bigInt(b)).toString();
}
