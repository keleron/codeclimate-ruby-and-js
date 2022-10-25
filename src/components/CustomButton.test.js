import { render, screen } from '@testing-library/react';
import CustomButton from './CustomButton';

test('renders learn react link', () => {
  render(<CustomButton />);
});

test('renders learn react link', () => {
  render(<CustomButton flag={true}/>);
});
