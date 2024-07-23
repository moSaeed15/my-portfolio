import Home from '@/app/page';
import { render, act } from '@testing-library/react';
import { it } from 'vitest';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

it('should be accessible', async () => {
  const { container } = render(<Home />);
  const result = await axe(container);

  expect(result).toHaveNoViolations();
});
