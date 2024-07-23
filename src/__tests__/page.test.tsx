import Home from '@/app/page';
import Grid from '@/components/Grid';
import NavBar from '@/components/NavBar';
import ReactPortal from '@/components/ReactPortal';
import RecentProjects from '@/components/RecentProjects';
import { projects } from '@/data';
import { cleanup, screen } from '@testing-library/react';
import { afterEach, expect, test } from 'vitest';
import { renderComponent } from './setup';

afterEach(() => {
  cleanup();
});

test('it renders', () => {
  renderComponent(<Home />);
  expect(
    screen.getByRole('heading', { level: 1, name: 'Mohammed El Saeed' })
  ).toBeInTheDocument();
});

test('navbar', () => {
  renderComponent(<NavBar />);
  expect(
    screen.getByRole('heading', { level: 1, name: 'Mohammed El Saeed' })
  ).toBeInTheDocument();
});

test('Grid', async () => {
  const { user } = renderComponent(<Grid />);

  const copyButton = screen.getByRole('button', {
    name: 'Copy my email address',
  });
  const email = 'mohammed.elsaeed1@gmail.com';

  await user.click(copyButton);

  expect(await navigator.clipboard.readText()).toBe(email);
});

test('React Portal Works', async () => {
  renderComponent(
    <ReactPortal wrapperID="test">
      <h2>This is a React Portal</h2>
    </ReactPortal>
  );
  screen.debug();
  expect(screen.getByText('This is a React Portal')).toBeInTheDocument();
});

test('Recent Projects renders and gallery works', async () => {
  const { user } = renderComponent(<RecentProjects />);
  const gallery = screen.getAllByRole('button', { name: 'View Gallery' });
  expect(gallery).toHaveLength(projects.length);
  const galleryButton = gallery[0];

  await user.click(galleryButton);
  //gallery image renders
  const modal = screen.getByTestId('react-portal-modal-container');

  expect(modal).toBeInTheDocument();
});
