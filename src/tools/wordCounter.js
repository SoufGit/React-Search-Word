

const isWordLongerThanTwo = word => word.length > 2;

const wordCounter = (searchingStr) => {
    return Object.entries(searchingStr
        .split(/\s/g)
        .filter(isWordLongerThanTwo)
        .map(x => x.toLowerCase())
        .reduce((result, word) => ({
            ...result,
            [word]: result[word] ? result[word] + 1 : 1,
        }), {}))
        .map(([key, value]) => ({
            word: key,
            count: value,
        }))
};

export {
    wordCounter,
};
