import { Children, createContext, useReducer } from "react";


// prepares the data layer
export const DataContext=createContext()
// wrap our app and provide the data layer
export const DataProvider=({Children,reducer,initialState})=>{

return (
<DataContext.Provider value={useReducer(reducer,initialState)}>
{Children}
</DataContext.Provider>
)
}
// push and pull information from the data layer
// export const useStateValue = () => useContext(StateContext);
