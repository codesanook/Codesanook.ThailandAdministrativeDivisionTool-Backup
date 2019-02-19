import { Block, ICheckbox, Checkbox, ITextField, TextField } from "codesanook-bumblebee-ts";

export default class AdministrativeSectionBase extends Block {
    public get includeCreateTable(): ICheckbox {
        return new Checkbox(this, '.sql-script.create-table input[type="checkbox"]');
    }

    public get createTableStatement(): ITextField {
        return new TextField(this, '.sql-script.create-table textarea');

    }

    public get includeInsertStatement(): ICheckbox {
        return new Checkbox(this, '.sql-script.insert-record input[type="checkbox"]');
    }

    public get insertStatement(): ITextField {
        return new TextField(this, '.sql-script.insert-record textarea');
    }
}
