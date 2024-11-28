import { Check, Minus } from "lucide-react";
import SlideReveal from "@/components/ui/slidereveal";
import localFont from 'next/font/local';
const clashDisplay = localFont({
  src: [
    {
      path: "../app/fonts/ClashDisplay-Medium.woff",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

export default function Component() {
  return (
    <div className={`${clashDisplay.className}`}>
      <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] bg-[url('/images/wp.jpg')] bg-cover bg-center flex items-end">
        {/* Background overlay */}
        <div className='absolute inset-0 bg-black/50 z-0'></div>

        {/* Text container */}
        <div className='relative z-10 bg-white/10 backdrop-blur-xl border rounded-[10px] sm:rounded-[20px] px-4 sm:px-8 py-2 sm:py-4 w-[85%] sm:w-[70%] mb-4 sm:mb-8 ml-4 sm:ml-8'>
          <SlideReveal direction='up' duration={0.7}>
            <h1
              className={`text-white text-3xl sm:text-4xl md:text-5xl font-bold py-4 sm:py-6 px-2 sm:px-4 text-left ${clashDisplay.className}`}>
              Wordpress Website Packages
            </h1>
          </SlideReveal>
        </div>
      </div>
      <div className='container mx-auto px-2 md:px-8 pt-4 md:pb-8 '>
        <div className='overflow-x-scroll md:overflow-x-auto shadow-xl rounded-[5px] md:rounded-[15px] border-1'>
          <table className='w-full border-collapse text-left rounded-lg shadow-lg'>
            <thead>
              <tr className='bg-white'>
                <th className='border p-2 bg-[#F56E0F] text-white'>
                  MAIN FEATURES
                </th>
                <th className='border p-2 bg-[#C0C0C0]'>
                  SILVER
                  <br />
                  <span className='text-xl font-bold'>$650</span>
                </th>
                <th className='border p-2 bg-[#FFD700]'>
                  GOLD
                  <br />
                  <span className='text-xl font-bold'>$1250</span>
                </th>
                <th className='border p-2 bg-purple-200'>
                  PLATINUM
                  <br />
                  <span className='text-xl font-bold'>$2500</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border p-2'>Go-Live Time</td>
                <td className='border p-2'>1 - 2 Weeks</td>
                <td className='border p-2'>2 - 3 Weeks</td>
                <td className='border p-2'>3 - 6 Weeks</td>
              </tr>
              <tr>
                <td className='border p-2'>WordPress</td>
                <td className='border p-2'>Wordpress 6.2.2 (Latest)</td>
                <td className='border p-2'>Wordpress 6.2.2 (Latest)</td>
                <td className='border p-2'>Wordpress 6.2.2 (Latest)</td>
              </tr>
              <tr>
                <td className='border p-2'>Design</td>
                <td className='border p-2'>Theme Based</td>
                <td className='border p-2'>
                  Custom Design as per requirements and brand guidelines
                </td>
                <td className='border p-2'>
                  Custom Design planned by our experts based on client
                  requirements
                </td>
              </tr>
              <tr>
                <td className='border p-2'>Design Process</td>
                <td className='border p-2'>
                  <ul className='list-disc pl-4 text-sm'>
                    <li>The client suggests URLs for reference</li>
                    <li>
                      Our team does research and provides 2-4 WordPress theme
                      options for review and approval
                    </li>
                    <li>
                      An approval-ready theme is implemented with suggested
                      changes
                    </li>
                  </ul>
                </td>
                <td className='border p-2'>
                  <ul className='list-disc pl-4 text-sm'>
                    <li>
                      Client fill briefing form and provides brand design ideas
                    </li>
                    <li>
                      After extensive research, our team develops 1 custom
                      homepage design
                    </li>
                    <li>
                      After approval, our team develops the rest of the required
                      homepage design
                    </li>
                  </ul>
                </td>
                <td className='border p-2'>
                  <ul className='list-disc pl-4 text-sm'>
                    <li>
                      Client fill briefing form and provides brand design ideas
                    </li>
                    <li>
                      After extensive research, our team develops 2 custom
                      homepage designs
                    </li>
                    <li>
                      After approval, our team develops the rest of the required
                      homepage design
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className='border p-2'>Design revisions</td>
                <td className='border p-2'>1 Maximum</td>
                <td className='border p-2'>2 Maximum</td>
                <td className='border p-2'>3 Maximum</td>
              </tr>
              <tr>
                <td className='border p-2'>Mobile Responsive</td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
              </tr>
              <tr>
                <td className='border p-2'>Megamenu system</td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
              </tr>
              <tr>
                <td className='border p-2'>Banner slider (homepage)</td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
              </tr>
              <tr>
                <td className='border p-2'>Extra Website Pages Development</td>
                <td className='border p-2'>Up to 5 pages</td>
                <td className='border p-2'>Up to 15 pages</td>
                <td className='border p-2'>Up to 30 pages</td>
              </tr>
              <tr>
                <td className='border p-2'>Blog (CMS)</td>
                <td className='border p-2'>Based on a purchased Theme</td>
                <td className='border p-2'>
                  Custom design - Matching to homepage design
                </td>
                <td className='border p-2'>
                  Custom design - Matching to homepage design
                </td>
              </tr>
              <tr>
                <td className='border p-2'>Caching</td>
                <td className='border p-2'>On Demand</td>
                <td className='border p-2'>On Demand</td>
                <td className='border p-2'>Free</td>
              </tr>
              <tr>
                <td className='border p-2'>Legal Pages</td>
                <td className='border p-2'>
                  <ul className='list-disc pl-4 text-sm'>
                    <li>Privacy Policy</li>
                  </ul>
                </td>
                <td className='border p-2'>
                  <ul className='list-disc pl-4 text-sm'>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                  </ul>
                </td>
                <td className='border p-2'>
                  <ul className='list-disc pl-4 text-sm'>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Return and Refund Policy (Ecom)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className='border p-2'>Hosting</td>
                <td className='border p-2'>Client Pays</td>
                <td className='border p-2'>Client Pays</td>
                <td className='border p-2'>Yes, Free (6 months included)</td>
              </tr>
              <tr>
                <td className='border p-2'>
                  <label htmlFor="content-upload" className="sr-only">Content Upload to Website</label>
                  <input
                    type="checkbox"
                    id="content-upload"
                    checked
                    disabled
                    aria-label="Content Upload included"
                  />
                  Yes, Client to supply content
                </td>
                <td className='border p-2'>Yes, Client to supply content</td>
                <td className='border p-2'>Yes, Client to supply content</td>
              </tr>
              <tr>
                <td className='border p-2 font-bold text-[#F56E0F]'>SEO</td>
              </tr>
              <tr>
                <td className='border p-2'>Search engine friendly URLs</td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
              </tr>
              <tr>
                <td className='border p-2'>Google site map</td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
              </tr>
              <tr>
                <td className='border p-2'>
                  Meta tag management, canonical tag settings, Google rich
                  snippet markup
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
              </tr>
              <tr>
                <td className='border p-2'>
                  Google Analytics & Tag Manager integration
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
              </tr>
              <tr>
                <td className='border p-2 font-bold text-[#F56E0F]'>
                  SALES & MARKETING
                </td>
                <td className='border p-2' colSpan={3}></td>
              </tr>
              <tr>
                <td className='border p-2'>Setup of Lead Capture Forms</td>
                <td className='border p-2 text-center'>1</td>
                <td className='border p-2 text-center'>1</td>
                <td className='border p-2 text-center'>2</td>
              </tr>
              <tr>
                <td className='border p-2'>Setup of Newsletter</td>
                <td className='border p-2 text-center'>
                  <Minus className='inline-block text-gray-500' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
              </tr>
              <tr>
                <td className='border p-2'>Social Media Sharing</td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]   ' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
              </tr>
              <tr>
                <td className='border p-2 font-bold text-[#F56E0F]'>
                  MOBILE & CROSS BROWSER COMPATIBILITY
                </td>
                <td className='border p-2' colSpan={3}></td>
              </tr>
              <tr>
                <td className='border p-2'>
                  IE 11+, Edge, Google Chrome, Firefox, and Safari
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
              </tr>
              <tr>
                <td className='border p-2'>
                  Desktop, tablet, and mobile phone optimized viewing
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
              </tr>
              <tr>
                <td className='border p-2 font-bold text-[#F56E0F]'>
                  SECURITY
                </td>
                <td className='border p-2' colSpan={3}></td>
              </tr>
              <tr>
                <td className='border p-2'>SSL Implementation</td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
              </tr>
              <tr>
                <td className='border p-2'>Free Security Plugin</td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
              </tr>
              <tr>
                <td className='border p-2 font-bold text-[#F56E0F]'>
                  DEPLOYMENT & GO LIVE
                </td>
                <td className='border p-2' colSpan={3}></td>
              </tr>
              <tr>
                <td className='border p-2'>
                  Setup and deployment to any compatible hosting service
                  provider
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
              </tr>
              <tr>
                <td className='border p-2 font-bold text-[#F56E0F]'>
                  WARRANTY
                </td>
                <td className='border p-2' colSpan={3}></td>
              </tr>
              <tr>
                <td className='border p-2'>14 Days</td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
              </tr>
              <tr>
                <td className='border p-2'>30 Days</td>
                <td className='border p-2 text-center'>
                  <Minus className='inline-block text-gray-500' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
              </tr>
              <tr>
                <td className='border p-2'>60 Days</td>
                <td className='border p-2 text-center'>
                  <Minus className='inline-block text-gray-500' />
                </td>
                <td className='border p-2 text-center'>
                  <Minus className='inline-block text-gray-500' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
              </tr>
              <tr>
                <td className='border p-2 font-bold text-[#F56E0F]'>
                  OWNERSHIP & IP
                </td>
                <td className='border p-2' colSpan={3}></td>
              </tr>
              <tr>
                <td className='border p-2'>Source Code Ownership</td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>

                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
              </tr>
              <tr>
                <td className='border p-2'>White Label Service</td>
                <td className='border p-2 text-center'>
                  <Minus className='inline-block text-gray-500' />
                </td>
                <td className='border p-2 text-center'>
                  <Minus className='inline-block text-gray-500' />
                </td>
                <td className='border p-2 text-center'>
                  <Check className='inline-block text-[#F56E0F]' />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
