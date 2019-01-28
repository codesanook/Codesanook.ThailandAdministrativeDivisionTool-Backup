import IBlock from "../Interfaces/IBlock";
import Session from "../Setup/Session";
import { ElementHandle } from "puppeteer"

export default abstract class Block implements IBlock {

	private tagElement: ElementHandle;

	constructor(public session: Session, public selector: string | ElementHandle, public parent: IBlock = null) {
	}

	public async findElement(selector: string): Promise<ElementHandle> {
		return await (await this.tag).$(selector);
	}

	public async findElements(selector: string): Promise<Array<ElementHandle<Element>>> {
		return await (await this.tag).$$(selector);
	}

	public get tag(): Promise<ElementHandle> {
		return (async () => {
			if (this.tagElement != null) {
				return Promise.resolve(this.tagElement);
			}

			if (typeof (this.selector) === 'string' || this.selector instanceof String) {
				this.tagElement = await this.getTagFromCssSelector(this.selector as string);
			} else {
				this.tagElement = this.selector as ElementHandle;
			}

			return Promise.resolve(this.tagElement);
		})();
	}

	protected delay(time: number) {
		return new Promise((resolve) => {
			setTimeout(resolve, time)
		});
	}


	private async getTagFromCssSelector(selector: string): Promise<ElementHandle> {
		if (this.parent != null) {
			return await this.parent.findElement(selector);
		} else {
			return await this.session.page.$(selector);
		}
	}


}
