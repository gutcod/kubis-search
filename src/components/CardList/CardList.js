import React from "react";

import { Card } from "../Card/Card";
export const CardList = ({ products }) => {
  return (
    <div className='flex flex-wrap'>
      {products.map((data, idx) => {
        return <Card key={idx} {...data} />;
      })}
    </div>
  );
};
