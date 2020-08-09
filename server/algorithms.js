

class BubbleSorter {
    name = "bubble";
    offset = 0;

    step(items) {
        let swapped = false;
        let change = [null, null];

        let update_change = (i) => {
            if (swapped) {
                change[1] = i - 2;
            } else {
                change[0] = i - 1;
                change[1] = i;
            }
        }
        let swap = (i) => {
            let temp = items[i - 1];
            items[i - 1] = items[i];
            items[i] = temp;
        }
        for (let i = 0; i <= items.length - this.offset; i++) {
            if (items[i - 1] > items[i]) {
                update_change(i);
                swap(i);
                swapped = true;
            }
        }

        return {
            result: swapped ? change : null,
            ok: !swapped,
            items,
        };
    };
}


const ALGORITHMS = [
    new BubbleSorter(),

];


module.exports = {
    BubbleSorter
};