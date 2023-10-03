
import { render, screen } from '@testing-library/react'
import Home from '@/app/page.tsx'
import '@testing-library/jest-dom'

describe('Home', () => {
  it("renders Account header", () => {
    const wrapper = (<Home />);
    const welcome = <h1>Welcome to A Very Real Company</h1>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });
})