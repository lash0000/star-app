/***********************************************************************************************************************************************************************
* File Name: NavbarLayout.jsx
* Type of Program: Layout Route
* Description: A Layout router for Landing page. 
* Module: Public User
* Author: lash0000
* Date Created: Oct. 10, 2025
***********************************************************************************************************************************************************************
* Change History:
* DATE                AUTHOR            LOG NUMBER     DESCRIPTION                                                      
* Oct. 10, 2025       lash0000          001            Initial creation - STAR Phase 1 Project
***********************************************************************************************************************************************************************/

import { Fragment, useEffect, useRef } from 'react';
import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Equal, Download, Home, NotepadText, CircleUser, CroissantIcon, Box, DoorOpen } from 'lucide-react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { RippleButton } from '../ui/ripple-button';
import { Toaster } from "@/components/ui/sonner"
import Footer from '../footer';
import { useTheme } from '../ThemeProvider';

function NavbarLayout() {
  const { theme, toggleTheme } = useTheme();
  const drawerCloseRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.matchMedia('(min-width: 1024px)').matches;
      if (isLargeScreen && drawerCloseRef.current) {
        drawerCloseRef.current.click();
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Applicable for ID inside one page :0
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Fragment>
      <nav className="fixed top-0 left-0 w-full h-fit flex items-center justify-between xs:px-6 lg:px-16 py-3 font-medium bg-background z-50 border">
        <div className="inline-flex items-center space-x-2 text-card-foreground selection:bg-card-foreground selection:text-white dark:selection:bg-card-foreground dark:selection:text-black">
          <div className="w-48">
            <img src="/philpro-white.png" alt="" className="block dark:hidden w-auto" />
            <img src="/philpro-dark.png" alt="" className="hidden dark:block w-auto" />
          </div>
        </div>
        <div className='flex items-center'>
          <div className="xs:hidden lg:block">
            <div className="flex text-card-foreground selection:bg-card-foreground selection:text-white dark:selection:bg-card-foreground dark:selection:text-black gap-1.5">
              <Button asChild variant="ghost">
                <NavLink
                  onClick={() => scrollToId("staLucia-mainpage")}
                  className={({ isActive }) =>
                    `${isActive ? 'underline' : ''}`
                  }
                >
                  Home
                </NavLink>
              </Button>
              <Button asChild variant="ghost">
                <NavLink
                  onClick={() => scrollToId("about-us")}
                  className={({ isActive }) =>
                    ` ${isActive ? 'underline' : ''}`
                  }
                >
                  About
                </NavLink>
              </Button>
              <Button asChild variant="ghost">
                <NavLink
                  onClick={() => scrollToId("services")}
                  className={({ isActive }) =>
                    `${isActive ? 'underline' : ''}`
                  }
                >
                  Contacts
                </NavLink>
              </Button>
              <Button asChild variant="ghost">
                <NavLink
                  onClick={() => scrollToId("contacts")}
                  className={({ isActive }) =>
                    `hover:text-neutral-600 dark:hover:text-neutral-400 ${isActive ? 'underline' : ''}`
                  }
                >
                  FAQs
                </NavLink>
              </Button>
              <Button className="dark:bg-(--primary-green)" asChild>
                <NavLink
                  onClick={() => scrollToId("contacts")}
                  className={({ isActive }) =>
                    `hover:text-neutral-600 dark:hover:text-neutral-400 ${isActive ? 'underline' : ''}`
                  }
                >
                  Sign in
                </NavLink>
              </Button>
              <Button
                variant="outline"
                onClick={toggleTheme}
                className="text-card-foreground cursor-pointer"
              >
                {theme === 'light' ? (
                  <>
                    <Moon /> Dark
                  </>
                ) : (
                  <>
                    <Sun /> Light
                  </>
                )}
              </Button>
            </div>
          </div>
          <Drawer>
            <Button
              variant="outline"
              onClick={toggleTheme}
              className="mr-3 text-card-foreground cursor-pointer lg:hidden"
            >
              {theme === 'light' ? (
                <>
                  <Moon /> Dark
                </>
              ) : (
                <>
                  <Sun /> Light
                </>
              )}
            </Button>
            <DrawerTrigger>
              <Button size="icon" className="lg:hidden">
                <Equal />
              </Button>
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="text-lg">
                  Made with {String.fromCodePoint('0x1f499')}
                </DrawerTitle>
                <DrawerDescription>Explore more.</DrawerDescription>
              </DrawerHeader>
              <div className="flex flex-col gap-2 p-4 font-medium text-sm">
                <Link to="">
                  <RippleButton rippleColor="#ADD8E6" className="w-full justify-start text-card-foreground" onClick={() => drawerCloseRef.current?.click()}>
                    <div className='flex items-center space-x-3'>
                      <Home size={16} />
                      <label>Home</label>
                    </div>
                  </RippleButton>
                </Link>
                <Link to="">
                  <RippleButton rippleColor="#ADD8E6" className="w-full justify-start text-card-foreground" onClick={() => drawerCloseRef.current?.click()}>
                    <div className='flex items-center space-x-3'>
                      <NotepadText size={16} />
                      <label>About</label>
                    </div>
                  </RippleButton>
                </Link>
                <Link to="">
                  <RippleButton rippleColor="#ADD8E6" className="w-full justify-start text-card-foreground" onClick={() => drawerCloseRef.current?.click()}>
                    <div className='flex items-center space-x-3'>
                      <CircleUser size={16} />
                      <label>Contacts</label>
                    </div>
                  </RippleButton>
                </Link>
                <Link to="">
                  <RippleButton rippleColor="#ADD8E6" className="w-full justify-start text-card-foreground" onClick={() => drawerCloseRef.current?.click()}>
                    <div className='flex items-center space-x-3'>
                      <CroissantIcon size={16} />
                      <label>FAQs</label>
                    </div>
                  </RippleButton>
                </Link>
                <Link to="">
                  <RippleButton className="w-full justify-start bg-primary text-primary-foreground" onClick={() => drawerCloseRef.current?.click()}>
                    <div className='flex items-center space-x-3'>
                      <DoorOpen size={16} />
                      <label>Sign in</label>
                    </div>
                  </RippleButton>
                </Link>
              </div>
              <DrawerFooter>
                <DrawerClose ref={drawerCloseRef} />
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
      <main id="main-page" className='pt-28'>
        <Outlet />
        <Toaster position="top-center" />
      </main>
      {/* add footer */}
      <Footer />
    </Fragment>
  );
}

export default NavbarLayout;

