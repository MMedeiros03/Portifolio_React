
import { Card } from 'antd';
import React from 'react';
import './index.css';
const { Meta } = Card;
const Cards = ({name, description, link}) => {
  return (
    <div className='Cards'>
      <Card
        style={{
          width: 300,
          marginTop: 16,
        }}
      >
        <a className='links' href={link}>
            <Meta
            title={name}
            description={description}
            />
        </a>
      </Card>

      <Card
        style={{
          width: 300,
          marginTop: 16,
        }}
        ></Card>
    </div>
  );
};
export default Cards;