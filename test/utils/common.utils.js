const clearValue = async (inputElement) => {
    await inputElement.click();
    await browser.keys(['Control', 'a']); //This only works on Mac, find a better workaround
    await browser.keys('Backspace');
}

module.exports = { clearValue }