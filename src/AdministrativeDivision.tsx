import * as React from 'react'
import { FunctionComponent, useState } from "react"
import "./AdministrativeDivision.css"

interface IProps {
    title: string;
    additionalClassNames: string[];
}

const AdministrativeDivision: FunctionComponent<IProps> = (props: IProps) => {
    const [selectedCreateStatement, setSelectedCreateStatement] = useState(true);
    const [selectedInsertStatement, setSelectedInsertStatement] = useState(true);

    const classNames = (): string => {
        props.additionalClassNames.push('division');
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
        <div className={'division'}>
            <h5>{props.title}</h5>
            <ul className={'division__sql-script'}>
                <li className='sql-script'>
                    <input type="checkbox" checked={selectedCreateStatement} onChange={handleSelectedCreateStatement} />
                    <textarea className="sql-script__editor" disabled={!selectedCreateStatement} />
                </li>
                <li className='sql-script'>
                    <input type="checkbox" checked={selectedInsertStatement} onChange={handleSelectedInsertStatement} />
                    <textarea className="sql-script__editor" disabled={!selectedInsertStatement} />
                </li>
                <li>
                    Available column name
                </li>
            </ul>
        </div>
    )
};

export default AdministrativeDivision