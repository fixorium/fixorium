 // Utility functions for Fixorium project

const utils = {
    // Function to format token amount
    formatTokenAmount: (amount) => {
        return amount.toLocaleString();
    },

    // Function to convert token amount to wei
    convertToWei: (amount) => {
        return web3.utils.toWei(amount.toString());
    },
};

module.exports = utils;
