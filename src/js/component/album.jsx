import React from 'react';
import Card from './card';

export default function Album() {
    return (
        <section className='px-5 py-0 mb-4'>
            <div className='container'>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3'>
                    {generateCards(4)}
                </div>
            </div>
        </section>
    );
};

function generateCards(numberOfCards) {
    const cards = [];
    for (let i = 0; i < numberOfCards; i++) {
        cards.push(<Card />);
    }
    return cards;
}