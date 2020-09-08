export const globalReducer = (state, action) => {
   switch (action.type) {
      case 'OPEN_NAV':
         return {...state, isNavOpen: true, isScollLocked: true }
      case 'CLOSE_NAV':
         return {...state, isNavOpen: false, isScollLocked: false }
      case 'OPEN_MODAL':
         return {...state, isModalOpen: true, isScollLocked: true }
      case 'CLOSE_MODAL':
         return {...state, isModalOpen: false, isScollLocked: false }
      case 'CLOSE_ALL':
         return {...state, isModalOpen: false, isNavOpen: false, isScollLocked: false }
      case 'NAV_COLOR':
         return {...state, navColor: action.payload }
      default:
         return state;
   }
}