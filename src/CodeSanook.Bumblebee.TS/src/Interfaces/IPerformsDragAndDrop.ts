export default interface IPerformsDragAndDrop {
	DragAndDrop(drag: Element, drop: Element): void;
	DragAndDrop(drag: Element, xDrop: number, int: number): void;
}
