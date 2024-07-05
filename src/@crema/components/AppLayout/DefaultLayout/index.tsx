import React, { useEffect, useState } from "react";
import clsx from "clsx";
// import AppContentView from "../../AppContentView";
// import AppFixedFooter from "./AppFixedFooter";
import AppHeader from "./AppHeader";
// import { useLayoutContext } from '@crema/context/AppContextProvider/LayoutContextProvider';
// import AppThemeSetting from '../../AppThemeSetting';
import DefaultLayoutWrapper from "./DefaultLayoutWrapper";
import MainContent from "./MainContent";
// import { LayoutType } from '@crema/constants/AppEnums';
import AppSidebar from "./AppSidebar";
import DefaultLayoutContainer from "./DefaultLayoutContainer";
import { useLocation } from "react-router-dom";
// import { RouterConfigData } from '@crema/types/models/Apps';

type Props = {
  // routes: React.ReactElement | null;
  // routesConfig: RouterConfigData[];
};
const DefaultLayout = ({}: Props) => {
  // const { footer, layoutType, headerType, footerType } = useLayoutContext();
  const { pathname } = useLocation();
  const [isNavCollapsed, setNavCollapsed] = useState(false);
  const toggleNavCollapsed = () => {
    setNavCollapsed(!isNavCollapsed);
  };
  useEffect(() => {
    if (isNavCollapsed) setNavCollapsed(!isNavCollapsed);
  }, [pathname]);

  return (
    <DefaultLayoutContainer
      className={clsx({
        boxedLayout: true, //layoutType === LayoutType.BOXED,
        framedLayout: false, // layoutType === LayoutType.FRAMED,
      })}>
      <DefaultLayoutWrapper
        className={clsx("defaultLayoutWrapper", {
          appMainFooter: true, // footer && footerType === 'fluid',
          appMainFixedFooter: true, //footer && footerType === 'fixed',
          appMainFixedHeader: true, // headerType === 'fixed',
        })}>
        <AppSidebar
          // routesConfig={[]} // routesConfig}
          isNavCollapsed={isNavCollapsed}
          toggleNavCollapsed={toggleNavCollapsed}
        />

        <MainContent>
          <AppHeader toggleNavCollapsed={toggleNavCollapsed} />
          {/* <AppContentView routes={routes} /> */}
          <h1>Portez ce whisky au vieux juge blond qui fume !</h1>
          {/* <AppFixedFooter /> */}
        </MainContent>
        {/* <AppThemeSetting /> */}
      </DefaultLayoutWrapper>
    </DefaultLayoutContainer>
  );
};

export default DefaultLayout;
