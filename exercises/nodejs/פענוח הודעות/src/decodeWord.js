module.exports = async function decodeWord(word) {
    return new Promise((resolve, reject) => {
        if (_doesRejectWord()) reject("Internal Error");

        const decodedWord = Buffer.from(word, 'base64').toString('utf-8');

        setTimeout(() => resolve(decodedWord), _addRandomDelay());
    });
}

const _addRandomDelay = () => Math.floor(Math.random() * 2000);
const _doesRejectWord = () => Math.random() < 0.1;