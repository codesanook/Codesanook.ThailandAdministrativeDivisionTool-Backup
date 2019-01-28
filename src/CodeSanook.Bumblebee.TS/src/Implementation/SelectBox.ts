import IOption from "../Interfaces/IOption";
import ISelectBox from "../Interfaces/ISelectBox";
import Block from "./Block";
import Option from "./Option";

export default class SelectBox extends Block implements ISelectBox {

	get options(): Promise<IOption[]> {
		return (async () => {
			let tags = await this.findElements("option")
			let options: IOption[] = [];
			for (let index = 0; index < tags.length; index++) {
				let item = new Option(this, tags[index]);
				options.push(item);
			}
			return Promise.resolve(options);
		})();
	}
}
