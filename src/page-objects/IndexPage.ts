import Block from "../CodeSanook.Bumblebee.TS/src/Implementation/Block";

export default class IndexPage extends Block {

    public async waitUntilPageLoad(): Promise<void> {
        await this.session.page.waitForFunction(
           'document.querySelector(".head") ',
            { timeout: 3000, polling: 500 }
        );
        console.log("!!! Page loaded !!!");
    }
}