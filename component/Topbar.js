'use client'
import React from 'react'
import { faCircleQuestion,faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import CarouselFadeExample from './Carosol'
import Mainav from './Mainav'
import Image from 'next/image'

export const Topbar = () => {
  return (
    <div className='container-fluid'>
         <div className='row'>
            <div className='col-md-6'>
              <p style={{fontsize:'14px'}}>Welcome to Fig and Fit shop</p>
            </div>
            <div className='col-md-6 d-flex justify-content-end'>
              <div><a href='#' className='nav-link'>about us</a></div>
              <div><a href='#' className='nav-link'>contact us</a></div>
              <div><a href='#' className='nav-link'>login</a></div>
            </div>
        </div>
        <div className='row flex justify-content-center align-items-center'>
          <div className='col-md-3'>
              <Image
                src="/logo.jpg"
                width={160}
                height={60}
                alt="Picture of the author"
            />
          </div>
          <div className='col-md-6'>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          </form>
          </div>
          <div className='col-md-3 flex'>
              <div className='col-md-4'>
                <span>Call Us Now</span><br/>
                <span>+8801775566772</span>
              </div>
              <div className='col-md-4'>
                <span>Call Us Now</span><br/>
                <span>+8801775566772</span>
              </div>
              <div className='col-md-4'>
                <span>Call Us Now</span><br/>
                <span>+8801775566772</span>
              </div>
          </div>

        </div>
    </div>
  )
}
