
'use client'
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
type CookieConsentProps = {
  onAccept?: () => void;
  onDecline?: () => void;
  onCustomize?: () => void;
  position?: 'top' | 'bottom';
  theme?: 'light' | 'dark';
};

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
};

const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  functional: false,
};

const TOGGLEABLE_KEYS: Array<keyof Omit<CookiePreferences, 'necessary'>> = [
  'analytics',
  'marketing',
  'functional',
];

export function CookieBanner({
  onAccept,
  onDecline,
  onCustomize,
  position = 'bottom',
  theme = 'light',
}: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES);

  useEffect(() => {
    const stored = localStorage.getItem('cookie-consent');
    if (!stored) {
      setIsVisible(true);
    }
  }, []);

  const save = (prefs: CookiePreferences) => {
    localStorage.setItem(
      'cookie-consent',
      JSON.stringify({ ...prefs, timestamp: new Date().toISOString() }),
    );
    setIsVisible(false);
  };

  const acceptAll = () => {
    const nextPreferences: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    save(nextPreferences);
    onAccept?.();
  };

  const declineAll = () => {
    const nextPreferences: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    save(nextPreferences);
    onDecline?.();
  };

  const savePrefs = () => {
    save(preferences);
    onCustomize?.();
  };

  if (!isVisible) return null;

  const pos = position === 'top' ? 'top-0 left-0 right-0' : 'bottom-0 left-0 right-0';
  const themeCls =
    theme === 'dark'
      ? 'bg-gray-900 border-gray-700 text-white'
      : 'bg-white border-gray-200 text-gray-900';

  return (
    <div className={`fixed ${pos} z-50 border-t ${themeCls} shadow-lg`}>
      <div className="container mx-auto p-6">
        {!showDetails ? (
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">We value your privacy</h3>
              <p className="text-sm opacity-90">
                We use cookies to enhance your experience, personalise content, and analyse traffic.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" size="sm" onClick={() => setShowDetails(true)}>
                Customize
              </Button>
              <Button variant="ghost" size="sm" onClick={declineAll}>
                Decline All
              </Button>
              <Button variant="default" size="sm" onClick={acceptAll}>
                Accept All
              </Button>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">Cookie Preferences</h3>
              <button onClick={() => setShowDetails(false)} className="text-2xl opacity-60 hover:opacity-100">
                ×
              </button>
            </div>
            {TOGGLEABLE_KEYS.map((key) => (
              <div
                key={key}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg mb-3"
              >
                <div>
                  <h4 className="font-medium mb-1" style={{ textTransform: 'capitalize' }}>
                    {key} cookies
                  </h4>
                  <p className="text-sm opacity-75">Enable {key} cookies for improved experience.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={preferences[key]}
                    onChange={(event) =>
                      setPreferences((prev) => ({
                        ...prev,
                        [key]: event.target.checked,
                      }))
                    }
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
                </label>
              </div>
            ))}
            <div className="flex flex-wrap gap-3 justify-end">
              <Button variant="ghost" size="sm" onClick={declineAll}>
                Decline All
              </Button>
              <Button variant="outline" size="sm" onClick={savePrefs}>
                Save Preferences
              </Button>
              <Button variant="default" size="sm" onClick={acceptAll}>
                Accept All
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
