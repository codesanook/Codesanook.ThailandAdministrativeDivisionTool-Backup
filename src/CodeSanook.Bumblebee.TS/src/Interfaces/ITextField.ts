import IElement from "./IElement";
import IHasText from "./IHasText";
import IBlock from "./IBlock";

export default interface ITextField extends IElement, IHasText {
	enterText<TResult extends IBlock>(resultType: { new(...args: any[]): TResult }, text: string): Promise<TResult>;
}
