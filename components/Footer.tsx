'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Youtube, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

const footerLinks = {
  company: [
    'About Us',
    'Blog',
    'Careers',
    'The Media',
    'Whitepapers',
    'Contact Us',
    'Sitemap',
  ],
  products: [
    'Air Conditioners',
    'Mobile Phones',
    'Laptops',
    'Washing Machine',
    'Tablets',
    'Refrigerators',
    'Printers & Scanners',
    'Microwaves',
    'Televisions',
    'Water Purifiers',
    'Fitness Tracker',
    'Desktop',
    'HomeCare',
    'GermCare',
  ],
  policies: [
    'Terms of Use',
    'Privacy Policy',
    'Terms of Service',
    'Annual Returns',
  ],
  warrantyCheck: [
    'iPhone Warranty Check',
    'Lenovo Warranty Check',
    'Dell Warranty Check',
    'Sony Warranty Check',
  ],
  lendingService: [
    'LSP Partners',
  ],
};

const paymentMethods = [
  { name: 'Net Banking', icon: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=50&h=30&fit=crop' },
  { name: 'Credit Card', icon: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=50&h=30&fit=crop' },
  { name: 'EMI', icon: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=50&h=30&fit=crop' },
];

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white/80">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and Tagline */}
          <div className="lg:col-span-2">
            <Image
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&fit=crop&q=80"
              alt="Pixel Solutions"
              width={150}
              height={40}
              className="mb-4"
            />
            <p className="text-sm mb-6">Expert Care For Your Devices</p>
            
            {/* Refer & Earn Button */}
            <Button variant="outline" className="flex items-center gap-2 bg-white/5 hover:bg-white/10">
              <Gift className="h-4 w-4" />
              Refer & Earn
            </Button>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies and Warranty */}
          <div>
            <h3 className="font-semibold mb-4">Policies</h3>
            <ul className="space-y-2 mb-8">
              {footerLinks.policies.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold mb-4">Warranty Check</h3>
            <ul className="space-y-2">
              {footerLinks.warrantyCheck.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Lending Service */}
          <div>
            <h3 className="font-semibold mb-4">Lending Service Provider</h3>
            <ul className="space-y-2">
              {footerLinks.lendingService.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Payment Methods */}
            <div>
              <p className="text-sm font-semibold mb-4">Secure Payment</p>
              <div className="flex gap-4">
                {paymentMethods.map((method) => (
                  <Image
                    key={method.name}
                    src={method.icon}
                    alt={method.name}
                    width={50}
                    height={30}
                    className="rounded"
                  />
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 text-sm text-white/60">
            <p>© Pixel Solutions. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}