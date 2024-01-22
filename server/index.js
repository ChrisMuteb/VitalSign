
const startApp = require("./boot/setup").startApp;

(async () => {
    try {
        await startApp();
    } catch (error) {
        console.log('Error in index.js => startApp')
        throw error;
    }
})();