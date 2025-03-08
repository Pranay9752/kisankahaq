import React, { useState, useEffect } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Check, Globe } from 'lucide-react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';

// Define available languages
const languages = [
  { name: 'English', code: 'en' },
  { name: 'Hindi', code: 'hi' },
  { name: 'Punjabi', code: 'pa' },
  { name: 'Bengali', code: 'bn' },
  { name: 'Gujarati', code: 'gu' },
  { name: 'Marathi', code: 'mr' },
  { name: 'Tamil', code: 'ta' },
  { name: 'Telugu', code: 'te' },
  { name: 'Kannada', code: 'kn' }
];

const LanguageSelector = ({ onLanguageChange = () => {} }) => {
  const [open, setOpen] = useState(true); // Open on initial load
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  
  // Close popover and store selection after user selects a language
  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setOpen(false);
    
    // Store selection in localStorage
    localStorage.setItem('preferredLanguage', language.code);
    
    // Trigger language change in parent component
    if (onLanguageChange) {
      onLanguageChange(language.code);
    }
  };
  
  // Check if user has a previously selected language
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
      const language = languages.find(lang => lang.code === savedLanguage);
      if (language) {
        setSelectedLanguage(language);
        setOpen(false);
        
        if (onLanguageChange) {
          onLanguageChange(savedLanguage);
        }
      }
    }
  }, [onLanguageChange]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-2 fixed top-4 right-4 z-50 bg-white shadow-md"
        >
          <Globe className="h-4 w-4" />
          <span>{selectedLanguage ? selectedLanguage.name : 'Select Language'}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-0" align="end">
        <Command>
          <CommandInput placeholder="Search language..." />
          <CommandEmpty>No language found.</CommandEmpty>
          <CommandGroup>
            {languages.map((language) => (
              <CommandItem
                key={language.code}
                value={language.code}
                onSelect={() => selectLanguage(language)}
                className="flex items-center justify-between cursor-pointer"
              >
                <span>{language.name}</span>
                {selectedLanguage?.code === language.code && (
                  <Check className="h-4 w-4 text-emerald-600" />
                )}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

// HOC to wrap your entire app with language context
const withLanguage = (Component) => {
  return function WrappedComponent(props) {
    const [currentLanguage, setCurrentLanguage] = useState('en');
    
    const handleLanguageChange = (languageCode) => {
      setCurrentLanguage(languageCode);
      // Here you would trigger your translation logic
      // For example, if using i18next:
      // i18n.changeLanguage(languageCode);
    };
    
    return (
      <>
        <LanguageSelector onLanguageChange={handleLanguageChange} />
        <Component {...props} currentLanguage={currentLanguage} />
      </>
    );
  };
};

export { LanguageSelector, withLanguage };