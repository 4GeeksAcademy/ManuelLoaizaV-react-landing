import React from 'react';

export default function Card() {
    return (
        <div className='col'>
            <div className='card text-center'>
                <div className='card-header bg-secondary'>
                    <div className='w-100 d-flex align-items-center justify-content-center' style={{height: 225}}>
                        <p className='mb-0 text-black-50'>500x325</p>
                    </div>
                </div>
                <div className='card-body'>
                  <h5 class="card-title">Card title</h5>
                  <div className='card-text'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, culpa omnis. Optio enim autem nam..
                  </div>
                </div>
                <div className='card-footer bg-white'>
                  <div className='d-flex justify-content-center'>
                    <button className='btn btn-primary' type='button'>Find out more!</button>
                  </div>
                </div>
            </div>
        </div>
    );
};
