const stats = {
    square(x) {
        return x * x;
    },
        sum(array, callback) {
        if(callback) {
            array = array.map(callback);
        }
            return array.reduce((a,b) => a + b );
        },
    mean(array) {
        return this.sum(array) / array.length;
    },
    variance(array) {
        return this.sum(array,this.square)/array.length - this.square(this.mean(array))
    }
}
export default stats;