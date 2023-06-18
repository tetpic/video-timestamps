import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import {store} from './redux/store'
import {Provider} from "react-redux"

describe('App component', () => {

  beforeEach(()=> {
    render(
      <Provider store={store} >
        <App />
      </Provider>
      );
  })
  test('it renders', () => {
    expect(screen.getByTestId('mainWrapperApp')).toBeInTheDocument()
  });

  test ("display timestamps", async ()=> {
      const timeStamps = await waitFor(() => screen.getByTestId('timestampsWrapper'));
      expect(timeStamps).toBeInTheDocument();
  })


  test("display timestamps block", async ()=> {
    const timeStampsBlocks = await waitFor(() => screen.getAllByTestId('timestampsBlock'));
    timeStampsBlocks.forEach(el => {
      expect(el).toBeInTheDocument()
    })
  })

  test("display videoplayer", async ()=> {
    const videoPlayer = await waitFor(()=>screen.getByRole('region'))
    expect(videoPlayer).toBeInTheDocument()
  })

  
 })
