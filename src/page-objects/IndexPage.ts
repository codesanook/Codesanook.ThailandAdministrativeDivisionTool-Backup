import Block from "../CodeSanook.Bumblebee.TS/src/Implementation/Block";
import AdministrativeSection from "./AdministrativeSection";
import IClickable from "../CodeSanook.Bumblebee.TS/src/Interfaces/IClickable";
import Clickable from "../CodeSanook.Bumblebee.TS/src/Implementation/Clickable";
import IBlock from "../CodeSanook.Bumblebee.TS/src/Interfaces/IBlock";
import ExportModal from './ExportModal';
import { JSHandle } from "puppeteer";

export default class IndexPage extends Block {

    public get province(): AdministrativeSection {
        return new AdministrativeSection(this.session, '.division.province', this);
    }

    public get district(): AdministrativeSection {
        return new AdministrativeSection(this.session, '.division.district', this);
    }

    public get subdistrict(): AdministrativeSection {
        return new AdministrativeSection(this.session, '.division.subdistrict', this);
    }

    public get export(): IClickable {
        return new Clickable(this, '.sql-export button');
    }

    public waiForExportModalShowed(): Promise<JSHandle> {
        return this.session.page.waitForSelector('.export-modal', { timeout: 5 * 1000 });
    }

    public get exportModal(): IBlock {
        return new ExportModal(this.session, '.export-modal', this);
    }
}