const commonWords = (a, b) => {
    a = a.toLowerCase().split(' ');
    b = b.toLowerCase().split(' ');
    return a.filter(value => b.includes(value));
}
export default commonWords;
