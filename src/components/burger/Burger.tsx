import * as React from 'react';

import './Burger';
import BurgerIngredient from './burger-ingredient/BurgerIngredient';

const burger = (props: any) => {

  return (
    <div className="Burger">
        <BurgerIngredient type="bread-top"/>
        <BurgerIngredient type="bread-bottom"/>
    </div>
  );
};

export default burger;
