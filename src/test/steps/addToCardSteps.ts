import {Given, When, Then, setDefaultTimeout} from "@cucumber/cucumber";
import {expect} from "@playwright/test";
import { pageFixture } from "../../hooks/pagefixture";

setDefaultTimeout(60 * 1000 * 2);
     
Given('User search for a {string}', async function (book) {
    await pageFixture.page.locator("input[type='search']").fill(book);
    await pageFixture.page.waitForTimeout(2500);
    await pageFixture.page.locator ("mat-option[role='option'] span").click();
});
    
When('user add a book to the card', async function () {
    await pageFixture.page.locator("button[color='primary']").click();
});


Then('the card badget should get updated', async function () {
    const bageCount = await pageFixture.page.locator("#mat-badge-content-0").textContent();
    expect (Number(bageCount)).toBeGreaterThan(0);
});