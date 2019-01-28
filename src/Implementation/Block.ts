
import IBlock from "../Interfaces/IBlock";
import Session from "../Setup/Session";
import { ElementHandle } from "puppeteer"

export default abstract class Block implements IBlock {

	constructor(public session: Session, public selector: string | ElementHandle, public parent: IBlock = null) {
	}

	_tag: ElementHandle;
	get tag(): Promise<ElementHandle> {
		return (async () => {
			if (this._tag != null) return Promise.resolve(this._tag);

			if (typeof (this.selector) === 'string' || this.selector instanceof String) {
				this._tag = await this.getTagFromCssSelector(<string>this.selector);
			} else {
				this._tag = <ElementHandle>this.selector;
			}

			return Promise.resolve(this._tag);
		})();
	}

	private async getTagFromCssSelector(selector: string): Promise<ElementHandle> {
		if (this.parent != null) {
			return await this.parent.findElement(selector);
		} else {
			return await this.session.page.$(selector);
		}
	}

	async findElement(selector): Promise<ElementHandle> {
		return await (await this.tag).$(selector);
	}

	async findElements(selector: string): Promise<ElementHandle<Element>[]> {
		return await (await this.tag).$$(selector);
	}

	protected delay(time) {
		return new Promise(function (resolve) {
			setTimeout(resolve, time)
		});
	}
}
