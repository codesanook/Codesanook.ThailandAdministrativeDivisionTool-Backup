import * as React from 'react'
import { FunctionComponent, useState } from "react"

interface IProps {
    title: string;
    additionalClassNames: string[];
}

const AdministrativeDivision: FunctionComponent<IProps> = (props: IProps) => {

    const [selectedCreateStatement, setSelectedCreateStatement] = useState(true);
    const [selectedInsertStatement, setSelectedInsertStatement] = useState(true);

    const classNames = (): string => {
        return props.additionalClassNames.join(' ');
    }

    const handleSelectedCreateStatement = (): void => {
        const newValue = !selectedCreateStatement;
        setSelectedCreateStatement(newValue)
    };

    const handleSelectedInsertStatement = (): void => {
        const newValue = !selectedInsertStatement;
        setSelectedInsertStatement(newValue)
    };

    return (
        <div className={`division ${classNames()}`}>
            <h5>{props.title}</h5>
            <ul className='sql-export'>
                <li className='sql-script create-table -active'>
                    <input type="checkbox" checked={selectedCreateStatement} onChange={handleSelectedCreateStatement} />
                    <textarea className="editor" disabled={!selectedCreateStatement} />
                </li>
                <li className='sql-script insert-record'>
                    <input type="checkbox" checked={selectedInsertStatement} onChange={handleSelectedInsertStatement} />
                    <textarea className="editor -active" disabled={!selectedInsertStatement} />
                </li>
                <li>
                    Available column name
                </li>
            </ul>
        </div>
    )
};

export default AdministrativeDivision
