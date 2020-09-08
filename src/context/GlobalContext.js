import React, { createContext, useReducer } from 'react'
import { globalReducer } from './reducers'

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

   const [globalState, dispatch] = useReducer(globalReducer, {
      isNavOpen: false,
      isModalOpen: false,
      isOverlayOpen: false,
      isScollLocked: false
   });

   const setIsNavOpen = (boolean) => {
      if(boolean){
         dispatch({ type: 'OPEN_NAV' });
      }else{
         dispatch({ type: 'CLOSE_NAV' });
      }
   }

   const setIsModalOpen = (boolean) => {
      if(boolean){
         dispatch({ type: 'OPEN_MODAL' });
      }else{
         dispatch({ type: 'CLOSE_MODAL' });
      }
   }

   const setAllClosed = () => {
      dispatch({ type: 'CLOSE_ALL' });
   }
   
   return (
      <GlobalContext.Provider value={{
         globalState,
         setIsNavOpen,
         setIsModalOpen,
         setAllClosed,
      }}>
         {children}
      </GlobalContext.Provider>
   )
}

export default GlobalContextProvider