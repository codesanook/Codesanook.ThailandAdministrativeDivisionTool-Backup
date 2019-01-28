import IOption from "../Interfaces/IOption";
import IBlock from "../Interfaces/IBlock";
import Element from "./Element"

export default class Option extends Element implements IOption {

	public async click<TResult extends IBlock>(
		resultType: new (...args: any[]) => TResult
	): Promise<TResult> {
		await (await this.tag).click();
		return this.session.currentBlock(resultType);
	}
}