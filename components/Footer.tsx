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
  { name: 'Net Banking', icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOkAAACUCAMAAABBVf7OAAAAk1BMVEX///8aH3H3tgDn5+4AAFv3sAD979EoKHH3tSAWHHB3eaH29vphYZAAAGQAAGcKEWwBDWz+9eYSGG+jpLwAAGBlZ5YACGvw8PS3uMzf4OnW1uG+v9GdnrrLy9kyNXybm7SMja49PXMlJHEMDF87PX4AAFSsrcVMTINcXZCCgqVwcZlTVIpHSYX4ujaSkq8sL3lTU4JkFxxGAAAJCklEQVR4nO1bfZ+iNhCWQrsXkYRGBEFlKeVQ0Lr7/T9dfYEwkwS924X+rmyeP3Egmclk5plJnM0MDP7XsKcOoehf+cuUkf/VqmrnnEwZPBeavhBryiAv3ZpOXNOvuKZG04nAaDo9GE2nB6Pp9PAlNTVscCL4kt77dTT9Ovv0b2fa+Fs0kgwMDAwMDAwMDAwMDAwMDAwMDAx+MdjJevn6es7O59flehe7/+ngcTXvQbb5sXfq7D5j9HKtvpyc62OR0xZWul/M11HPEG4Jx6jLAYxSBsFlWF8Dxvex/p2lB+Wc7f3pd/RwJ898b10/2XXXCecs5Pmx1I2wyTn8Gl0M0cu11/U+vYypaYuHXqJ94+ADIZ7ehRIHvuqgN6KtFzDtEQKhVLOs5Xc8Hf6mncgHsNvOT5SqU2Fc5zU7JEmrZnYenFoO5N1N4fWelNCVOkRiyeJ0pwh9FG5S1lSdT7DUiGZQJ5I3O3IVwpnNO/moslifnpblbdUR5r4ipfXxjyKKz4qufK+R86EQOzRrUkCH89ZC3D1pnAXYUl2tpFC2Ep0PHKejs2R+kqqhoAyghN+sSYwOLR3xmvsWWg/AX9Qd+EoVMVb0BekPI35HEyOWanILWpy8NMZew6f8rZ1YdHyoqOUfFFPGJ42zO8MfpNlIEYsr2wjHWLEhM7i3aN3o72aPFbVoprjlxtPIBb3J/eNYooH8Sv69Rr4lbF1DTUWY2eVq9rok0s7RqRLy3IXOODQbXtMYBRC/ln6OCvhzeGwe2wfocl6zAu5K2nLccxxKOHWcwLsmWJKvpe/P7MDSgJ2G1zQ6QJuyo8STtmgTici5S8HiiUSPPd3iPN02PhDttscXHoYnJSDVajy6wpHlBsAWUYAUh6RoBb3UP7aRp0SP2zCDZ81TnBXdzbxYyNvUxcbpNO1hpp/BBk6PMOxeG3QvhIqpo8xAq2b+aCPo4niiBJqtfklhhh4MOHHTV/TjGU6EF63vRXOkaROQbH2YfgR33w1O+M++/ZOIasTrKuhfONfRSvucWI39Nyi4/FCiWEOfSaFVNWzt00CeiFM7mjt5E+640y41TliehkMrmHdW5qcyBUVeMcIlHGRXXDAhxsMW3StQJ0GFUWy7GOA5o4Mh3K/tY+cpJB+unBGIT4isgxFi5I6hiEduhtygzcFYU4vNn6oK4xFdwxW2mKbo+TQWiO+AoFehsEzFc3ePkkw7pzUmAYSvnqQKG2x34uH4FypsbQBgDpt1PzBdCX5BhNIJb/09lnIj8a3zw4FhGKAXzygBb2SrwcuZy26BAZadRPBdolwXdCMjLkRy8YJS2hOPbR5M+ARM7CR423KVTn0eLuxukK7Rc0QpBjDiM6JVhXieqWUJ9w69DUFoMFZc7BXB7EpG4A6zI3RfwcN2KVwiGKmQPPDq2NI04kKqaZHeAMnjPSctmPxkYKCgKXo4Z5hiUJ5FXhoA2291hQmhb5UuOUYgDBB289UKDKkpZT8PFEpaHhYj54U9LFxoOcA5I31lQnyuWVZoSVrfvgI5uKY9MQBgLOXp/dkaTprBrjfiDZzDD8UHfdOBOJVSxYBN2dYONtgW3BohJOFyK7g9wiQe9SIwvV+hLyUHXbPkAm8lLdEaxEERaGHPwhuBJeGc792mFHMYkF/gqEfEqaTAYdc9bW2KVXWhvURghy4xSkhKUEi67SlcoMPKAjdclAZutPWUTvXNWrhM2r3BrkWrFBxV9OGGhA3zxp0lsZ7OtVSdE0uNG8me6o59UJSevQKdiCgGYIrl1giaIsrODld1YDjmDAqj1lK40PGC7Z5pmrgk6KZuw0YUYCVwGzkj8EEUaPmVD6J6zUP0FfH+nqxnb/eeuq7gUAZFBqeLsgWw0BhNX8Q4SZrMYoYIIvRQ3ETrPSuKS65EYd71NqFGPOxeQ3EqG0FTG1Ru16YsLm9QTyeB5Swh/anArgLJhUneZmVUIwA+iXI1K7Tf/STgRvXPLuRHhKIUvobLzfrO0W/YyUcuvI1JiGAEttsCZ4FgDE1haUgzmNWtEFeKqJYLH2cC+x0nnLaRYKPqyVp1WKCqYgyWlIDChR9QF8JHW9GVAtLjz8aYRrAmtGXYAKG490HRD3TQA+MWe20KvOqNHdRGjs2fzQVT/mZNo+ODU3NoY/mUaBDUWmJzNTjuMccEOl76jJvizmhjGLhVHoG/j6HppufYgOR4s+xgIuT7Z8kddREJuWXIntpOo2kxwunMzO2pQfwDlkOdFdYVMoleZ+lE/ZaYd8pdlR6I6yPDItVvVPlOFcoPYdY+jnLtBbJManbfHp57jKpilKYvJnmdWX0s5eLLScLmsUPzw1nKCnaFN/89Uke6bpMedIym72ynPcmU7w/hnq4nlrH0LHJh9el83TJHd7OypItm32/ipfYUXAt/jKbvZaNqdg8JpaHw1TJLPL+f+xNOA8fxrDR9o04QSh9s2hPkh5cUnGMOqqmuBeTJpUrd01khqKvPuSaPcOsWSbHvcE8BpNX+KCFpqQYKlcCjM/KukOk7xIdoDpTRXRVelEsJJawghr1W12KnahrWkvO6+M6OSHe753uvaZbgy2m6i4owBVOlpTgE4kLhaKE8EXwpwhPTOD/lAvT9bjTYvJYq33YMYHH/OEbT11XyDNvL46A7ZGFHKp4RWUKbWyu4X669CekC/yBsDJYkna1dLZrJIgvU1xdNF/f0OJ76vPXCEp9Uak+ZoIjm7ugA2EgsjRA5xkeo4ulmkbw94nfEO7UaYcrL9CeHC3gyNQpLiiUf9JX7I7CKhb2IMvD6yhPCAq8UcS1BObaHAsEkEK60Ip/F3GMQMuW9zMH3u58p2MXRucj55TekL+EsZNYeJAq3CsD3/Z4j0uQ7kPGGV/OqyGEBcVQESiTwisKJXVarY/Hid+2DvDjUWxRRoiMaoNJzPfcdyLyPwQcvY2D89O92simvfwWqsuz8utyolVz05AOaYT6t1Kj4xadnYGBgYGBgYGBgYGBgYGBgYPAV8efvU8efrabffps2vhlNJwej6fRgNJ0ejKbTg9F0ejCaTg9G0+nBaDo9fEVN//k2bfzTajr7Y+p42EYzMPjl8S8qZAQ77vM1QwAAAABJRU5ErkJggg==' },
  { name: 'Credit Card', icon: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAcAAEAAwEBAQEBAAAAAAAAAAAAAQQGBQcCCAP/xAA+EAABBAIABAIHBAYKAwAAAAABAAIDBAURBhIhMUFRBxMUImFxkVKBscEjMmJyoeEVFjRCQ5LC0fDxFyQz/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAIFAwQGAQf/xAAoEQACAgIBAwMDBQAAAAAAAAAAAQIDBBESBSFBEzFRBiIycYGRobH/2gAMAwEAAhEDEQA/APcUREAREQBERAEREAREQBERAEREAREQBERAEREAREQBEUbQEqCVyc7xFjMDDz5Gy1jiPdjHV7vkF57lfSvae4txWPjjZ4Psnmd/lHT+KxzsjD3N7F6dk5XeuPb58HrG0BXhj/SNxMXb9ort+AgCu0vSjnIXD2qGnZZ4jlLD9QfyUFkQN+X07mpb0n+57OixvD3pExGXe2Cdxo2SdBk7hyuPwd2WptXa9WL1k8rGN8NnusnqQ48t9iptxrqZ8LItMsqFmbXFJ2RUgGh/ekPf7gqDuIci4/8A0YPkxV9nVsaL0nsywwLpLetG1BUrGRcSX2H3xE8DwLdLrUeJK05DbA9Q89Nk7b9VOnqeNY9b1+pGzDurW2juovlrg4AtIIPiF9KwT2aoREQBERAEREBBPRZLjzi+PhyoIa3LJkZm/omO7MH2j/t4rSZK5Fj6E9ywdRQsL3H4BfnXL5Oxl8lPftu3LMd630aPBo+AWG6zguxddF6asy1yn+Mf7P43rli9aktXJnzTyHbnvPX/AK+Croi0D6BGEYLjFaQUqFIG+g6k9kJPsWaVN92T1Y6MH67vILb4+6+NkVexK+SNg5WOe4uLR8yuTj6zatZrNe93cfirCpMrIdj4r2KrJ43PTRox2RU8bP62IscfeZ+CuKva0U04uL0wiIhE6uGzElB4jlPNWJ0Rv9T4hbSORsjGvYQ5rhsEeK82Wm4UvE89OR29Dmj+XiPwV70rOlyVM328FVn4q16kV+ppQdqVAUroyoCIiAKCpUeKAw3pdvOrcMtrNOjamaw/uj3j+C8YXq/pqB9gxh8PXv8AryrydaF73M776dgo4SkvLYREWEvgrmLjEt+IHs0830VNdDBa9vG/sFYrnqtsha/sZpdIiLnirLOOdyWgPtDS7C4lP+1xfvLtqE/cr8pfeERFA1greKmNfI15B9sA68j0/NVF9wb9fHrvzjX1WSqTjZFrwyFiTg0z0hvZSob2UrvEcsERF6AoKlEBiPS1Qda4WM7WkmpK2U6+z2P4rxX5r9NXa0VypNWsNDopWFj2nxBX524gw8+Cys2PsbJjPuPP+Izwd/zx2tPJj35HY/TWXFwljv3XdHNRCi1jqwrWNlEV6Jx7E8p+9VVPy7qMo8k0RktxaNptFSxdsWqzST+kb0ePiri56cHCTiysa4vTLeNZz2gfBo2uuq2Pg9VCS4e8/qfgrKwSe2VV8+UwiIomEK7h4PaMlXYOo5+Y/IdfyVJajhemIGG1OQHy9IwfL+a3cCh3XxXhd2a2Xaq6m/Jo2qVAUrtDnAiIgCIiAhZvjPhWvxLSDSRFci2YJtdj5HzBWlUa6rxpNaZkqtnTNTg9NH5sy2Ku4e46pka7oZhvW+zh5tPiFRX6TyuJo5asa+RrRzxHrp47HzB8FhMp6KKz3l+Jvvr77Mmb6wD7+hWnPHkvxOyw/qOmcdXri/nweUJry6rdP9Feea/TLONc3fcyPb/pV2l6JrjiDkMnDG3xbXYXH6nX4KHoz+Cxl1rBit+p/p5/UsS1p2vhHMSdcn2vh816BTxlmKOKxfrSQ84DmRvHX71tuH+CsNgnCWtX9bZH+PMeZw+Xl9y781eOeIxzRtew92uGwsV/TVdHe9SOfzevxsnqqPb58nnCLWW+F4JCXVpnxb/un3gue7he6Dps0BHmSR+So59LyYPXHZhjnUyXvo4aLQRcLWSdzWImj9kErrUcFUqODy0yyDrzP8PkFOnpORN/ctIhZn1R/HucTCYSS05s9ppbAOzT0L/5LXBjdAco0O3wUgaUro8TErxocY/yU9987pbkANKURbZhCIiAIiIAVjsjx/Wq5TJY2tiMres40tNkVYQ4NYW83Nvfl4dytispgsPep8S8W3Z4g2DIyQurEOB5uWLlOx4dUBSi9JuLlbWtR0MkcTPK2EZMwahbI7po9eboehOtb6LoZbjOCjl5MVSxuQylqBgkstpRBwgae3MSR1PkOq4J4Xy3/iqvgvZ2nIsewujEg1oTcx69uysyUuI+HOJstewuIiy1PLujkc02Wwurytbyne+7ex6dfggLkfpCxM2BZl4a9yRk1w0oK4iHrZpfIDfTx767L+tjiq3/AEBkbn9X8vWs1mdIZImFxJB04adogdys3U4bzEXBk1LMcPVcrZmyktqasy56nQcdh0Tx2O+2yOi6PBvD2Yr1M3DdZYo0LsQjqUbNz2p8BLSHOL+vQ7HTZ7ICxwhxo63wnHk87Vt1WQUmzz3ZYg2KXzLNHr9PFXcTxtBeyNWlaxeSxrroJpPuRBrbGhsgaJ0dddHRWdoYHiDK8BWOD8vi48e2Cm2CG77S2Rsz2uBaeUdQ3oO6cM8MWP6bx8uS4VlqGkTIbkuclsN5wNAxsLj3/a0gO/i+OquTnnEGOvsp1ZJo7V6VjWwwmPe9nfXoPBThuN48xarCrhcsKFokQZB8AETgATzHrsNOu5HkquD4YtngvNYTI/8AryX57nK4ODuVsrncrunz3pRw5NxXBFSwWU4fgZVhi9RLko7reR7A3QLY9c2z06FAfFj0mY6KC1eixeVsYmu5zDkYoAYXOHQgddkb6c2tK9kOOa1S1SpwY3IXbd6kLkENeMElh8Cd6B/gsocRxnQ4Ns8GU8NVswthlhhyZtNax0TiTox63z6OvLx2tFicBka/FuGyEsIbWrYAUpXc42JeZp1rx7d0BYu8cQQX3UKuJyV+1BG19xlSIO9lDhvTjvq74DZUejHKz5rhuS9YsST892wI3SDREYkPKNeGhpUDS4k4a4hzFjC4iHLUstO2wCbTYXV5Ncp5ubu3pvp1+Cu8BUMtg8CyrlabXW5780k3qHgsYHvLub5fDugNgigKUAREQBERAFGlKICNJoKUQEaCaUogI0mlKICNJrqpRARpNKUQBRoKUQBERAEREAREQBERAEUbClAERNoAiIgCKNpseaAlFGwmwgJRRsKUAREQBERAEREAUO7IiAoUbUk+OFiTXPyvPQdOjiB+C+8daksxF0gaCOX9X4safzREB9yTubZhjAGnk7Pj0BKi5O+GSq1mtSzcjt+XK4/kFCICyCdBASiIDgZbMWquTdWi5OTkbrbeoJLRv+K/izM3JMfZsc7WvjZG4ANGtlgJREB/L+sF39KOWIcl1sA909W+ra7z77JXzW4gvSiAu9UOefkOm+B9X+HOfoERAf3pZi5JbqRve0tktOhcOQdQGuO/n0C047KUQBERAEREB//Z'},
  { name: 'EMI', icon: 'data:image/png;base64,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' },
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
              src="/logohere.jpeg"
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