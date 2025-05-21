import Link from "next/link"
import { Facebook, Instagram, Linkedin, TwitterIcon as TikTok } from "lucide-react"

export default function Footer() {
  return (
    <footer className="mt-auto border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-primary font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-primary transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-primary transition-colors">
                  Our services
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-sm hover:text-primary transition-colors">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-primary font-medium mb-4">Safety</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/safety/cargo-owner" className="text-sm hover:text-primary transition-colors">
                  Cargo owner safety
                </Link>
              </li>
              <li>
                <Link href="/safety/drivers" className="text-sm hover:text-primary transition-colors">
                  Drivers safety
                </Link>
              </li>
              <li>
                <Link href="/safety/motorcyclist" className="text-sm hover:text-primary transition-colors">
                  Motorcyclist safety
                </Link>
              </li>
              <li>
                <Link href="/safety/business" className="text-sm hover:text-primary transition-colors">
                  Business safety
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-primary font-medium mb-4">Contact info</h3>
            <ul className="space-y-2">
              <li className="flex items-start text-sm">
                <span className="mr-2">📍</span>
                <span>Sixth street & Josiah Chinamano Avenue</span>
              </li>
              <li className="flex items-center text-sm">
                <span className="mr-2">📞</span>
                <span>+263 779 057 234</span>
              </li>
              <li className="flex items-center text-sm">
                <span className="mr-2">📧</span>
                <span>upick2281@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-primary font-medium mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/support/cargo-owners" className="text-sm hover:text-primary transition-colors">
                  Cargo owners
                </Link>
              </li>
              <li>
                <Link href="/support/drivers" className="text-sm hover:text-primary transition-colors">
                  Drivers
                </Link>
              </li>
              <li>
                <Link href="/support/motorcyclist" className="text-sm hover:text-primary transition-colors">
                  Motorcyclist
                </Link>
              </li>
              <li>
                <Link href="/support/enterprise-drivers" className="text-sm hover:text-primary transition-colors">
                  Enterprise drivers
                </Link>
              </li>
              <li>
                <Link href="/support/business-owners" className="text-sm hover:text-primary transition-colors">
                  Business owners
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="text-xl font-bold">
                Upi<span className="text-primary">ck</span>
              </Link>
            </div>

            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <TikTok className="h-5 w-5" />
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
          </div>

          <div className="mt-4 text-center md:text-right text-sm text-muted-foreground">
            Copyrights © {new Date().getFullYear()}. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  )
}
