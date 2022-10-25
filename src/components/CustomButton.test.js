import { render } from '@testing-library/react';
import CustomButton from './CustomButton';

test('renders learn react link', () => {
  render(<CustomButton />);
});

test('renders custoim button', () => {
  render(<CustomButton flag={true}/>);
});
