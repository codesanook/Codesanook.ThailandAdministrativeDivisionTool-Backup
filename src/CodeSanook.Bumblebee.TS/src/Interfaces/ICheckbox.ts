import IBlock from "./IBlock";
import IElement from "./IElement";

export default interface ICheckbox extends IElement {
	check<TResult extends IBlock>(resultType: new (...args: any[]) => TResult): Promise<TResult>;
	uncheck<TResult extends IBlock>(resultType: new (...args: any[]) => TResult): Promise<TResult>;
	toggle<TResult extends IBlock>(resultType: new (...args: any[]) => TResult): Promise<TResult>;
}