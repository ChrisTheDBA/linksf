/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import history from '../../core/history';

class CategoryFilter extends React.Component {

  static propTypes = {
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  };

  render() {
    return (
      <div>
        Category Filterz
      </div>
    )
  }

}

export default CategoryFilter
