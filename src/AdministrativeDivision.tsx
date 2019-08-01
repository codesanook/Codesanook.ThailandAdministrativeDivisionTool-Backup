import * as React from 'react'
import { useState } from 'react';

export enum DivisionType {
    Province,
    District,
    Subdistrict
}

interface IProps {
    title: string;
    type: DivisionType;
    createTableSqlStatementPlaceHolder?: string;
    insertRecordSqlStatementPlaceHolder?: string;
}

// with default prop
const AdministrativeDivision: React.FunctionComponent<IProps> = ({
    createTableSqlStatementPlaceHolder = 'CREATE TABLE ...',
    insertRecordSqlStatementPlaceHolder = 'INSERT INTO TABLE ...',
    ...props
}) => {

    return (
        <div className='administrative-division' data-division-type={DivisionType[props.type].toLowerCase()}>

            <div className='content-header'>{props.title}</div>

            <ul className='sql-editor-list'>
                <li className='sql-editor-list__item sql-script-list__item--column'>
                    Available column names: Id, Name
                </li>
                <li className='sql-editor-list__item'>
                    <SqlEditor placeHolder={createTableSqlStatementPlaceHolder} />
                </li>
                <li className='sql-editor-list__item'>
                    <SqlEditor placeHolder={insertRecordSqlStatementPlaceHolder} />
                </li>
            </ul>

        </div>
    )
};

const SqlEditor: React.FunctionComponent<{ placeHolder: string }> = props => {
    const [isSelected, setIsSelected] = useState(true);
    const [additionalTextEditorClasses, setAdditionalTextEditorClasses] = useState([]);

    const handleOnChange = (): void => {
        const newValue = !isSelected;
        setIsSelected(newValue)
        if (newValue) {
            setAdditionalTextEditorClasses([]);
        } else {
            setAdditionalTextEditorClasses(['sql-editor__script--disabled']);
        }
    };

    return (
        <div className='sql-editor'>
            <input type='checkbox'
                checked={isSelected}
                onChange={handleOnChange} />
            <textarea className={['sql-editor__script', ...additionalTextEditorClasses].join(' ')}
                disabled={!isSelected}
                defaultValue={props.placeHolder} />
        </div>
    );
};

export default AdministrativeDivision
