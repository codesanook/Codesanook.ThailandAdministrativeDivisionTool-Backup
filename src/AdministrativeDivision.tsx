import * as React from 'react'
import { useState } from "react"

export enum DivisionType {
    Province,
    District,
    Subdistrict
}

interface IProps {
    title: string;
    type: DivisionType;
    createTableSqlStatement?: string;
    insertRecordSqlStatement?: string;
}

// with default prop
const AdministrativeDivision: React.FunctionComponent<IProps> = ({
    createTableSqlStatement = 'CREATE TABLE ...',
    insertRecordSqlStatement = 'INSERT INTO TABLE ...',
    ...props
}) => {

    const defaultEditorClasses = ['editor'];
    const [isSelectedCreateStatement, setIsSelectedCreateStatement] = useState(true);
    const [editorCreateStatementClasses, setCreateStatementEditorClasses] = useState(defaultEditorClasses);

    const [selectedInsertStatement, setIsSelectedInsertStatement] = useState(true);
    const [editorInsertStatementClasses, setInsertStatementEditorClasses] = useState(defaultEditorClasses);

    const handleSelectedCreateStatement = (): void => {
        const newValue = !isSelectedCreateStatement;
        setIsSelectedCreateStatement(newValue)
        if (newValue) {
            setCreateStatementEditorClasses(defaultEditorClasses);
        } else {
            setCreateStatementEditorClasses([...defaultEditorClasses, '-disabled']);
        }
    };

    const handleSelectedInsertStatement = (): void => {
        const newValue = !selectedInsertStatement;
        setIsSelectedInsertStatement(newValue)
        if (newValue) {
            setInsertStatementEditorClasses(defaultEditorClasses);
        } else {
            setInsertStatementEditorClasses([...defaultEditorClasses, '-disabled']);
        }
    };

    return (
        <div className='administrative-division' data-division-type={DivisionType[props.type].toLowerCase()}>
            <div className='content-header'>{props.title}</div>
            <ul className='sql-script-list'>
                <li className='sql-available-columns'> Available column name: Id, Name</li>
                <li className='sql-script create-table'>
                    <input type="checkbox"
                        checked={isSelectedCreateStatement}
                        onChange={handleSelectedCreateStatement} />
                    <textarea className={editorCreateStatementClasses.join(' ')}
                        disabled={!isSelectedCreateStatement}
                        defaultValue={createTableSqlStatement} />
                </li>
                <li className='sql-script insert-record'>
                    <input type='checkbox'
                        checked={selectedInsertStatement}
                        onChange={handleSelectedInsertStatement} />
                    <textarea className={editorInsertStatementClasses.join(' ')}
                        disabled={!selectedInsertStatement}
                        defaultValue={insertRecordSqlStatement} />
                </li>
            </ul>
        </div>
    )
};

export default AdministrativeDivision
