import IBlock from "./IBlock";
import IHasText from "./IHasText"
import IElement from "./IElement";

export default interface IClickable extends IElement, IHasText {
	click<TResult extends IBlock>(resultType: new(...args: any[]) => TResult): Promise<TResult>;
}