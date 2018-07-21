import * as React from 'react';
import Burger from '../../components/burger/Burger';
import HOComp from '../../hocomp/HOComp';

class BurgerBuilder extends React.Component {

  public render() {
    return (
      <HOComp>
        <Burger />
        <div>BuildControls</div>
      </HOComp>
    );
  }

}

export default BurgerBuilder;
