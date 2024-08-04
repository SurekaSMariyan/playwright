import { BrowserContext, Locator, Page, expect } from "@playwright/test";

//imports

export class Login{
    page:Page;
    username:Locator;
    password:Locator;
    loginButton:Locator;

    constructor(page:Page){
        this.page=page;
        this.username= this.page.locator('[name="username"]');
        this.password=this.page.locator('[name="password"]');
        this.loginButton=this.page.locator('[type="button"] [name="login"]')
    }

    public async login(){
        await this.username.fill('test@123');
        await this.password.fill('password123');
        await this.loginButton.click();
    }
}