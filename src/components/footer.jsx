/***********************************************************************************************************************************************************************
* File Name: footer.jsx
* Type of Program: Frontend Layout
* Description: A footer page for landing page. 
* Module: Public
* Author: lash0000
* Date Created: Oct. 10, 2025
***********************************************************************************************************************************************************************
* Change History:
* DATE                AUTHOR            LOG NUMBER     DESCRIPTION                                                      
* Oct. 10, 2025       lash0000          001            Initial creation - STAR Phase 1 Project
***********************************************************************************************************************************************************************/

import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto xs:px-6 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Resources */}
          <div>
            <h3 className="font-semibold text-primary mb-4 text-2xl tracking-tighter">Resources</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link to="">Philpro Learnings</Link>
              </li>
              <li>
                <Link to="">Resources 1</Link>
              </li>
              <li>
                <Link to="">Resources 1</Link>
              </li>
              <li>
                <Link to="">Resources 1</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-primary mb-4 text-2xl tracking-tighter">Company</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link to="">Philpro Learnings</Link>
              </li>
              <li>
                <Link to="">Resources 1</Link>
              </li>
              <li>
                <Link to="">Resources 1</Link>
              </li>
              <li>
                <Link to="">Resources 1</Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-semibold text-primary mb-4 text-2xl tracking-tighter">Socials</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link to="">Philpro Learnings</Link>
              </li>
              <li>
                <Link to="">Resources 1</Link>
              </li>
              <li>
                <Link to="">Resources 1</Link>
              </li>
              <li>
                <Link to="">Resources 1</Link>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <div className="flex items-start justify-start lg:justify-end">
            <div className="flex items-center gap-2">
              <img
                src="/philpro-white.png"
                alt="PhilProperties Logo"
                className="w-48 object-cover p-1"
              />

            </div>
          </div>
        </div>

      </div>
      {/* Copyright */}
      <div className="p-8 border-t border-gray-200">
        <p className="text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Philproperties International Corporation. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
