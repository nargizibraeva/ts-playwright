import {Given, When, Then, setDefaultTimeout} from "@cucumber/cucumber";
import {expect} from "@playwright/test";
import { pageFixture } from "../../hooks/pagefixture";

setDefaultTimeout(60 * 1000 * 2);



Given('User navigates to the application', async function () {
    await pageFixture.page.goto("https://bookcart.azurewebsites.net/");
  });
       
Given('User click on the login link', async function () {
  
  await pageFixture.page.locator("(//button[contains(@class,'mat-focus-indicator mat-button')])[2]").click();
});

Given('User enter the username as {string}', async function (username) {
  await pageFixture.page.locator("input[formcontrolname='username']").fill(username);
});


Given('User enter the password as {string}', async function (password) {
  await pageFixture.page.locator("input[formcontrolname='password']").fill(password);
});


When('User click on the login button', async function () {
  await pageFixture.page.locator("button[color='primary']").click();
  await pageFixture.page.waitForTimeout(3000);
});


Then('Login should be success', async function () {
  const textName = await pageFixture.page.locator("//button[contains(@class,'mat-focus-indicator mat-menu-trigger')]//span[1]").textContent();
  console.log("Username: " + textName);
});


When('Login should fail', async function () {
  const failureMessage = pageFixture.page.locator("mat-error[role='alert']");
  await expect(failureMessage).toBeVisible();
});