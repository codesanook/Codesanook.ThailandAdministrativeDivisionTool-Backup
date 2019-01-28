import * as puppeteer from "puppeteer"
import { Page, Browser } from "puppeteer"
import IBlock from "../Interfaces/IBlock";

export default class Session {

	private constructor(public browser: Browser, public page: Page) {
	}

	static async New(): Promise<Session> {
		let browser = await puppeteer.launch({
			headless: false,
			defaultViewport:
			{
				'width': 320,
				'height': 568,
				'deviceScaleFactor': 2,
			},
		});

		let page = await browser.newPage();
		page.setUserAgent(
			'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
		);

		let session = new Session(browser, page);
		return Promise.resolve(session);
	}

	async close(): Promise<void> {
		await this.page.close();
		await this.browser.close();
	}

	//Navigate to should be always return a new page
	async navigateTo<TBlock extends IBlock>(blockType: { new(...args: any[]): TBlock }, url: string): Promise<TBlock> {
		await this.page.goto(url, { waitUntil: 'domcontentloaded' });
		return this.currentBlock(blockType);
	}

	async currentBlock<TBlock extends IBlock, TParent extends IBlock>(blockType: { new(...args: any[]): TBlock }, selector: string = "body", parent: TParent = null): Promise<TBlock> {
		if (selector === "body" && parent == null) {
			let tag = await this.page.$(selector);
			return Promise.resolve(new blockType(this, tag));
		} else {
			let tag = await (await parent.tag).$(selector);
			return Promise.resolve(new blockType(this, tag, parent));
		}
	}
}