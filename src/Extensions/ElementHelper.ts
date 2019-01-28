import { ElementHandle } from "puppeteer";
export default class ElementHelper {

    static async getAngularJSControllerName(tag: ElementHandle): Promise<string> {
        let jsHandler = await tag.getProperty('tagName');
        let element = await jsHandler.jsonValue();
        let elementName = element.toString().toLowerCase();

        console.log(`element name ${elementName}`);
        let elementNameArray = elementName.split('-');
        for (let index = 1; index < elementNameArray.length; index++) {
            elementNameArray[index] = (elementNameArray[index])[0].toUpperCase() + (elementNameArray[index]).substring(1);
        }
        let controllerName = elementNameArray.join('').toString();
        console.log(`controllerName ${controllerName}`);
        return controllerName;
    }
}