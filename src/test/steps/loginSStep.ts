
import {Given, When, Then, setDefaultTimeout} from "@cucumber/cucumber";
import {expect} from "@playwright/test";
import { pageFixture } from "../../hooks/pagefixture";

setDefaultTimeout(60 * 1000 * 2);

  Given('User navigates to the application S', async function () {
    await pageFixture.page.goto("https://bo.dev-shares.io");
  });

  Then('Login to S should be success', async function () {
    const profileName = await pageFixture.page.locator("button[type='button' and aria-label='Profile']").textContent;
    console.log("profileName: " + profileName);
});
