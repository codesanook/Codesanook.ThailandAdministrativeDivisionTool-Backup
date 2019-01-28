import IRadioButtons from "../Interfaces/IRadioButtons";
import IOption from "../Interfaces/IOption";
import RadioButton from "./RadioButton";
import { ElementHandle } from "puppeteer";
import IBlock from "../Interfaces/IBlock";

export default class RadioButtons implements IRadioButtons {

	private tagElement: Array<ElementHandle<Element>>;
	constructor(public parent: IBlock, public selector: string | Array<ElementHandle<Element>>) {
	}

	get tags(): Promise<Array<ElementHandle<Element>>> {
		return (async () => {
			if (this.tagElement != null){
			 return Promise.resolve(this.tagElement);
			}

			if (typeof (this.selector) === 'string' || this.selector instanceof String) {
				this.tagElement = await this.parent.findElements(this.selector as string);
			} else {
				this.tagElement = this.selector as Array<ElementHandle<Element>>;
			}
			return Promise.resolve(this.tagElement);
		})();
	}

	get options(): Promise<IOption[]> {
		return (async () => {
			const radioButtons: RadioButton[] = [];
			const tags = await this.tags;

			for (let index = 0; index < tags.length; index++) {
				await this.parent.session.page.waitFor(250);
				const item = new RadioButton(this.parent, tags[index]);
				radioButtons.push(item);
			}
			return Promise.resolve(radioButtons);
		})();
	}
}
