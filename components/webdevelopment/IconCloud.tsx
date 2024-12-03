"use client";
import { 
  SiWordpress,
  SiShopify,
  SiWoo,
  SiMagento,
  SiDrupal,
  SiJoomla,
  SiSquarespace,
  SiWebflow,
  SiContentful,
  SiElementor,
  SiWix,
  SiShopware,
} from "react-icons/si";

const icons = [
  { Icon: SiWordpress, name: 'WordPress' },
  { Icon: SiShopify, name: 'Shopify' },
  { Icon: SiWoo, name: 'WooCommerce' },
  { Icon: SiMagento, name: 'Magento' },
  { Icon: SiDrupal, name: 'Drupal' },
  { Icon: SiJoomla, name: 'Joomla' },
  { Icon: SiSquarespace, name: 'Squarespace' },
  { Icon: SiWebflow, name: 'Webflow' },

  { Icon: SiElementor, name: 'Elementor' },
  { Icon: SiWix, name: 'Wix' },

];

const IconCloud = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-blue-100/50 to-purple-50/50 rounded-2xl">
      <div className="grid grid-cols-2 gap-8">
        {icons.map((icon, index) => (
          <div 
            key={index}
            className="flex flex-col items-center justify-center p-6 rounded-xl hover:bg-white/50 transition-all duration-300"
          >
            <icon.Icon 
              className="w-16 h-16 text-gray-700 hover:text-[#F56E0F] transition-colors mb-3" 
            />
            <span className="text-base text-gray-600 text-center font-medium">{icon.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconCloud; 