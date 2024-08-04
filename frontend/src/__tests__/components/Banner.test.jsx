import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import Banner from './Banner';

jest.mock('axios');

describe('Banner Component', () => {
  const mockBanners = [ 
    { id: 1, src: 'https://i.imgur.com/UyIMoX4.jpg' },
    { id: 2, src: 'https://i.imgur.com/47obsLa.jpeg' },
    { id: 3, src: 'https://i.imgur.com/6zyyBVj.jpg' },
  ];

  beforeEach(() => {
    axios.get.mockResolvedValue({ data: mockBanners });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test that the Banner component renders correctly
  it('renders correctly', async () => {
    render(<Banner />);
    await waitFor(() => {
      expect(screen.getByTestId('banner-container')).toBeInTheDocument();
    });
  });

  // Test that clicking the left arrow navigates to the previous banner
  it('navigates to previous banner on left arrow click', async () => {
    render(<Banner />);
    await waitFor(() => {
      expect(screen.getByAltText('Banner 1')).toHaveClass('active');
    });
    fireEvent.click(screen.getByTestId('prev-button'));
    await waitFor(() => {
      expect(screen.getByAltText('Banner 3')).toHaveClass('active');
    });
  });

  // Test that clicking the right arrow navigates to the next banner
  it('navigates to next banner on right arrow click', async () => {
    render(<Banner />);
    await waitFor(() => {
      expect(screen.getByAltText('Banner 1')).toHaveClass('active');
    });
    fireEvent.click(screen.getByTestId('next-button'));
    await waitFor(() => {
      expect(screen.getByAltText('Banner 2')).toHaveClass('active');
    });
  });

  // Test that the banners auto-scroll to the next banner every 3 seconds
  it('auto-scrolls to next banner every 3 seconds', async () => {
    jest.useFakeTimers();
    render(<Banner />);
    await waitFor(() => {
      expect(screen.getByAltText('Banner 1')).toHaveClass('active');
    });
    jest.advanceTimersByTime(3000);
    await waitFor(() => {
      expect(screen.getByAltText('Banner 2')).toHaveClass('active');
    });
    jest.useRealTimers();
  });

  // Test that the correct link is rendered for each banner
  it('renders correct link for each banner', async () => {
    render(<Banner />);
    await waitFor(() => {
      mockBanners.forEach((banner) => {
        const expectedPath = banner.id === 1 ? '/sale-50%' : banner.id === 2 ? '/allBooks' : '/childrenBooks';
        const bannerImg = screen.getByAltText(Banner ${banner.id});
        const linkElement = bannerImg.closest('a');
        expect(linkElement).toHaveAttribute('href', expectedPath);
      });
    });
  });

  // Test that the rendered component matches the snapshot
  it('matches snapshot', async () => {
    const { asFragment } = render(<Banner />);
      expect(asFragment()).toMatchSnapshot();
  });
});
