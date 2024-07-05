// import React, {
//   createContext,
//   ReactNode,
//   useCallback,
//   useContext,
//   useState,
// } from 'react';
// import defaultConfig from '@crema/constants/defaultConfig';
// 
// export type LayoutData = {
//   layoutType: string;
//   navStyle: string;
//   footerType: string;
//   headerType: string;
//   footer: boolean;
// };
// 
// export type LayoutActions = {
//   updateLayoutType: (layout: string) => void;
//   updateNavStyle: (navStyle: string) => void;
//   setFooterType: (footerType: string) => void;
//   setFooter: (footer: boolean) => void;
//   setHeaderType: (headerType: string) => void;
// };
// 
// const LayoutContext = createContext<LayoutData>({
//   footer: defaultConfig.footer,
//   navStyle: defaultConfig.navStyle,
//   layoutType: defaultConfig.layoutType,
//   footerType: defaultConfig.footerType,
//   headerType: defaultConfig.headerType,
// });
// 
// const LayoutActionsContext = createContext<LayoutActions>({
//   updateLayoutType: () => {},
//   updateNavStyle: () => {},
//   setFooterType: () => {},
//   setFooter: () => {},
//   setHeaderType: () => {},
// });
// 
// export const useLayoutContext = () => useContext(LayoutContext);
// 
// export const useLayoutActionsContext = () => useContext(LayoutActionsContext);
// 
// type LayoutContextProviderProps = {
//   children: ReactNode;
// };
// 
// const LayoutContextProvider: React.FC<LayoutContextProviderProps> = ({
//   children,
// }) => {
//   const [layoutType, updateLayoutType] = useState<string>(
//     defaultConfig.layoutType,
//   );
//   const [navStyle, setNavStyle] = useState<string>(defaultConfig.navStyle);
// 
//   const updateNavStyle = useCallback((navStyle: string) => {
//     setNavStyle(navStyle);
//   }, []);
// 
//   const [footerType, setFooterType] = useState<string>(
//     defaultConfig.footerType,
//   );
//   const [footer, setFooter] = useState<boolean>(defaultConfig.footer);
//   const [headerType, setHeaderType] = useState<string>(
//     defaultConfig.headerType,
//   );
// 
//   return (
//     <LayoutContext.Provider
//       value={{
//         navStyle,
//         footerType,
//         footer,
//         layoutType,
//         headerType,
//       }}
//     >
//       <LayoutActionsContext.Provider
//         value={{
//           setFooter,
//           setFooterType,
//           updateNavStyle,
//           updateLayoutType,
//           setHeaderType,
//         }}
//       >
//         {children}
//       </LayoutActionsContext.Provider>
//     </LayoutContext.Provider>
//   );
// };
// 
// export default LayoutContextProvider;
