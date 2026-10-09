import React, { useState, useRef, useEffect } from 'react';
import { Phone, ChevronDown, Search } from 'lucide-react';
import { COUNTRIES } from '../data/countries';
import { AsYouType, CountryCode } from 'libphonenumber-js';

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export const PhoneInput: React.FC<PhoneInputProps> = ({ value, onChange, required = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Default to India (IN)
  const defaultCountry = COUNTRIES.find(c => c.code === 'IN') || COUNTRIES[0];
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Extract number from value if it already contains the dial code
  const numberPart = value.startsWith(selectedCountry.dialCode) 
    ? value.slice(selectedCountry.dialCode.length).trim() 
    : value;

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCountrySelect = (country: typeof COUNTRIES[0]) => {
    setSelectedCountry(country);
    setIsOpen(false);
    setSearchQuery('');
    
    // Re-format existing number for the new country
    const formatted = new AsYouType(country.code as CountryCode).input(numberPart);
    onChange(`${country.dialCode} ${formatted}`);
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Strip non-digits from input to handle deletions properly and prevent letters
    const digits = e.target.value.replace(/\D/g, '');
    
    // Use libphonenumber-js AsYouType to format strictly to the selected country
    const formatter = new AsYouType(selectedCountry.code as CountryCode);
    const formatted = formatter.input(digits);
    
    if (digits.length > 15) return; // absolute max fallback
    
    onChange(`${selectedCountry.dialCode} ${formatted}`);
  };

  const filteredCountries = COUNTRIES.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.dialCode.includes(searchQuery)
  );

  return (
    <div className="relative flex rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-300 dark:border-white/15 focus-within:border-cyan-500 dark:focus-within:border-cyan-brand focus-within:ring-1 focus-within:ring-cyan-500 transition-all">
      <div className="relative flex items-center border-r border-slate-300 dark:border-white/15" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 pl-3.5 pr-2 py-3 focus:outline-none hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-colors rounded-l-xl"
        >
          <Phone className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0" />
          <img src={selectedCountry.flag} alt={selectedCountry.name} className="w-5 h-auto rounded-[2px] shadow-sm" />
          <span className="text-slate-700 dark:text-slate-300 font-medium text-xs sm:text-sm pl-1">{selectedCountry.dialCode}</span>
          <ChevronDown className="w-3 h-3 text-slate-400 dark:text-slate-500" />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-[#0b162c] border border-slate-200 dark:border-white/10 rounded-xl shadow-xl z-50 overflow-hidden animate-fadeIn">
            <div className="p-2 border-b border-slate-100 dark:border-white/5 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
              <input 
                type="text" 
                autoFocus
                placeholder="Search country..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 dark:bg-white/[0.02] text-xs py-2 pl-8 pr-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-500 dark:text-white border border-slate-200 dark:border-white/10"
              />
            </div>
            <div className="max-h-60 overflow-y-auto overflow-x-hidden custom-scrollbar">
              {filteredCountries.length > 0 ? (
                filteredCountries.map((country) => (
                  <button
                    key={country.code}
                    type="button"
                    onClick={() => handleCountrySelect(country)}
                    className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-slate-50 dark:hover:bg-white/[0.04] text-left transition-colors"
                  >
                    <img src={country.flag} alt={country.name} className="w-5 h-auto rounded-[2px] shadow-sm shrink-0" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 flex-1 truncate">{country.name}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 shrink-0">{country.dialCode}</span>
                  </button>
                ))
              ) : (
                <div className="p-4 text-center text-xs text-slate-500">No countries found.</div>
              )}
            </div>
          </div>
        )}
      </div>
      
      <input
        type="tel"
        required={required}
        value={numberPart}
        onChange={handleNumberChange}
        placeholder="Phone number"
        className="w-full px-3 py-3 bg-transparent text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm sm:text-base focus:outline-none"
      />
    </div>
  );
};
