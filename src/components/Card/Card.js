import React from "react";

export const Card = ({ name, id, description, main_image, price, slug }) => {
  return (
    <div
      className='br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center bg-lightest-blue'
      key={id}>
      <img src={main_image} className='db w-100 br2 br--top' alt={slug} />
      <div className='pa2 ph3-ns pb3-ns'>
        <div className='dt w-100 mt1'>
          <div className='dtc'>
            <h1 className='f5 f4-ns mv0 tl'>{name}</h1>
          </div>
          <div className='dtc tr'>
            <h2 className='f5 mv0'>${price.toFixed(2)}</h2>
          </div>
        </div>
        {/* <p className='f6 lh-copy measure mt2 mid-gray'>
          {description.replace(new RegExp("<[^>]*>", "g"), "")}
        </p> */}
        <div
          className='f6 lh-copy measure mt2 mid-gray tl'
          dangerouslySetInnerHTML={{ __html: description }}></div>
      </div>
    </div>
  );
};
