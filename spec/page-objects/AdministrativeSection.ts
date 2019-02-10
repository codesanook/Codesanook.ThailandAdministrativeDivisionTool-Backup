import { Block, ICheckbox, Checkbox, ITextField, TextField } from "codesanook-bumblebee-ts";

export default class AdministrativeSectionBase extends Block {
    public get includeCreateTable(): ICheckbox {
        return new Checkbox(this, '.sql-create input[type="checkbox"]');
    }

    public get createTableStatement(): ITextField {
        return new TextField(this, '.sql-create textarea');
    }

    public get includeInsertStatement(): ICheckbox {
        return new Checkbox(this, '.sql-insert input[type="checkbox"]');
    }

    public get insertStatement(): ITextField {
        return new TextField(this, '.sql-insert textarea');
    }
}