import React from 'react';

const ButtonForm = ({ total }) => {
  return (
    <div class="button-form tags are-normal has-addons">
      <span class="tag is-dark">총</span>
      <span class="tag is-primary">{total}</span>
    </div>
  );
};

export default ButtonForm;
