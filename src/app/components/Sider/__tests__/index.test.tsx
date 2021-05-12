import * as React from 'react';
import { render } from '@testing-library/react';

import { Sider } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<Sider  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Sider />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
