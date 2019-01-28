import { launch } from "puppeteer"
import { Page, Browser } from "puppeteer"
import IBlock from "../Interfaces/IBlock";

export default class Session {

	public static async new(): Promise<Session> {
		const browser = await launch({
			headless: false,
			defaultViewport:
			{
				'width': 320,
				'height': 568,
				'deviceScaleFactor': 2,
			},
		});

		const page = await browser.newPage();
		page.setUserAgent(
			'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
		);

		const session = new Session(browser, page);
		return Promise.resolve(session);
	}

	private constructor(public browser: Browser, public page: Page) {
	}


	public async close(): Promise<void> {
		await this.page.close();
		await this.browser.close();
	}

	// Navigate to should be always return a new page
	public async navigateTo<TBlock extends IBlock>(blockType: new (...args: any[]) => TBlock, url: string): Promise<TBlock> {
		await this.page.goto(url, { waitUntil: 'domcontentloaded' });
		return this.currentBlock(blockType);
	}

	public async currentBlock<TBlock extends IBlock, TParent extends IBlock>(blockType: new (...args: any[]) => TBlock, selector: string = "body", parent: TParent = null): Promise<TBlock> {
		if (selector === "body" && parent == null) {
			const tag = await this.page.$(selector);
			return Promise.resolve(new blockType(this, tag));
		} else {
			const tag = await (await parent.tag).$(selector);
			return Promise.resolve(new blockType(this, tag, parent));
		}
	}
}