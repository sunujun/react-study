import React from 'react';
import { ITEM_WIDTH } from './utils';

const AddToDoInput = ({
    value,
    onChange,
    placeholder,
    onSubmit,
}: {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    placeholder: string;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
}) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <form onSubmit={onSubmit}>
                <input
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    style={{
                        display: 'flex',
                        width: `${ITEM_WIDTH}px`,
                        borderRadius: '4px',
                        border: '1px solid #dee2e6',
                        padding: '5px',
                        color: '#595959',
                    }}
                    autoFocus={true}
                />
            </form>
        </div>
    );
};

export default AddToDoInput;
