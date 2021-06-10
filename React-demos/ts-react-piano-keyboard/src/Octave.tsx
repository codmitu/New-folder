import React from 'react';
import { NoteType } from './helpers';
import { Note } from './Note';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`
type Props = {
    notes: NoteType[];
    clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Octave: React.FC<Props> = ({ notes, clickHandler }) => {
    return (
        <Wrapper>
            <div>
                {notes.map((element: NoteType) => (
                    <Note key={element.note} color={element.color} note={element.note} clickHandler={clickHandler} />
                ))}
            </div>
        </Wrapper>
    )
}
