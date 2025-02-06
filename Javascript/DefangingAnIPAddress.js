/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = function(address) {
    const a = address.split('.');
    const b = a.join('[.]')
    return b;
};

console.log(defangIPaddr("255.100.50.0"));