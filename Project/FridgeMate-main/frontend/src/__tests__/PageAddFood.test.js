//
//      Not Working !!!
///

/* 
const { Builder, By, Key, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

function randomString(length) {
    let result = '';
    const characters = '0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function randomUnitFc() {
    const units = ["kg", "g", "ml", "l"];
    const randomIndex = Math.floor(Math.random() * units.length);
    return units[randomIndex];
}


function randomNameFc() {
    const units = ["Gurke", "Banane", "Kürbis", "Lamm", "Huhn", "Kohlrabi", "Litschi", "Joghurt", "Rind", "Milch"];
    const randomIndex = Math.floor(Math.random() * units.length);
    return units[randomIndex];
}

function randomDateFc(start, end) {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const month = '' + (date.getMonth() + 1),
        day = '' + date.getDate(),
        year = date.getFullYear();

    return [year, month.padStart(2, '0'), day.padStart(2, '0')].join('-');
}

async function addFoodTest() {
    let driver = await new Builder().forBrowser('firefox').build();
    const randomName = randomNameFc();
    const randomAmount = randomString(1);
    const randomUnit = randomUnitFc();
    const randomDate = randomDateFc(new Date(2020, 0, 1), new Date(2023, 11, 31));

    try {
        // Navigate to your component's page
        await driver.get('http://localhost:3000/PageAddFood');

        // Ion Elemente umgehen
        let shadowHost = await driver.findElement(By.css('ion-input'));
        let shadowRoot = await driver.executeScript('return arguments[0].shadowRoot', shadowHost);
        let innerInput = await shadowRoot.findElement(By.css('input'));

        // Fill in the form
        await driver.findElement(By.name('itemName')).sendKeys(randomName);
        await driver.findElement(By.name('expirationDate')).sendKeys(randomDate);
        await driver.findElement(By.name('amount')).sendKeys(randomAmount);
        await driver.findElement(By.name('unit')).sendKeys(randomUnit); // This might need adjustment for select dropdowns

        // Submit the form
        await driver.findElement(By.xpath("//button[text()='Füge Lebensmittel hinzu']")).click();

        // Wait for and verify the toast message
        let toastMessage = await driver.wait(until.elementLocated(By.xpath("//*[contains(text(), 'hinzugefügt')]")), 10000);
        let displayed = await toastMessage.isDisplayed();
        console.log(displayed ? 'Test Passed' : 'Test Failed');

    } finally {
        // Close the browser after test
        await driver.quit();
    }
}

addFoodTest();
 */