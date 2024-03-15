export const problem2631 = () => {
    Array.prototype.groupBy = function (fn) {
        let result: Record<string, number[]> = {};

        this.forEach((item: any) => {
            const key = fn(item);

            if (!result[key]) {
                result[key] = [];
            }

            result[key].push(item);
        });

        return result;
    };

    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].groupBy(n => {
        return String(n > 5);
    });
};
