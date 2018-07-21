import HOC from '../../hocomp/HOComp';
import './Layout';

import * as React from 'react';

class Layout extends React.Component {

  public props: any;

  public render() {
    return (
      <HOC>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className="content">
          {this.props.children}
        </main>
      </HOC>
    );
  }

}

export default Layout;
