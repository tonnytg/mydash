import * as React from 'react';

type Props = {
    name: string
};

export const Text = (props: Props) => {
    return (
        <div>
            <p>{props.name}</p>
        </div>
    );
};