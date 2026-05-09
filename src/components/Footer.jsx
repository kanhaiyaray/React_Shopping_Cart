import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-linear-to-r from-gray-950 via-black to-gray-900 text-gray-400 border-t border-gray-800 mt-10'>
      
      <div className='max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6'>
        
        {/* Brand Section */}
        <div>
          <h1 className='text-2xl font-bold text-white tracking-wide'>
            WDMTech <span className='text-orange-400'>CommerceX</span>
          </h1>

          <p className='text-sm mt-2 text-gray-500 max-w-md'>
            Building next-generation shopping experiences with intelligent UI,
            seamless performance, and modern e-commerce architecture.
          </p>
        </div>

        {/* Links */}
        <div className='flex gap-6 text-sm'>
          <a href="#" className='hover:text-orange-400 transition duration-300'>
            Products
          </a>

          <a href="#" className='hover:text-orange-400 transition duration-300'>
            Cart
          </a>

          <a href="#" className='hover:text-orange-400 transition duration-300'>
            Checkout
          </a>

          <a href="#" className='hover:text-orange-400 transition duration-300'>
            Support
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className='border-t border-gray-800 py-4 text-center text-xs text-gray-600'>
        © 2026 WDMTech CommerceX • Engineered for futuristic digital shopping.
      </div>

    </footer>
  )
}

export default Footer