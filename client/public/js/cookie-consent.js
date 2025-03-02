
/**
 * Cookie consent management utility
 */

// Check if consent is granted
function hasConsentBeenGranted() {
  return window.cookieConsentGranted === true;
}

// Function to execute code only if consent is granted
function executeIfConsentGranted(callback) {
  if (hasConsentBeenGranted()) {
    callback();
  } else {
    console.log('Script execution blocked: user consent not granted');
    
    // Add event listener to execute once consent is granted
    document.addEventListener('cookieConsentStatusChanged', function(e) {
      if (e.detail.consented) {
        callback();
      }
    });
  }
}

// Function to revoke all non-essential cookies
function revokeNonEssentialCookies() {
  // Get all cookies
  const cookies = document.cookie.split(';');
  
  // List of essential cookies that should not be deleted
  const essentialCookies = ['cookieconsent_status'];
  
  // Delete non-essential cookies
  cookies.forEach(cookie => {
    const cookieName = cookie.split('=')[0].trim();
    
    if (!essentialCookies.includes(cookieName)) {
      // Expire the cookie
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
  });
}

// Expose these functions globally
window.cookieConsent = {
  hasConsented: hasConsentBeenGranted,
  executeIfConsented: executeIfConsentGranted,
  revokeNonEssentialCookies: revokeNonEssentialCookies
};

// Create a custom event for status changes
function dispatchConsentStatusChanged(consented) {
  const event = new CustomEvent('cookieConsentStatusChanged', {
    detail: { consented: consented }
  });
  document.dispatchEvent(event);
}

// Update the global consent status when it changes
document.addEventListener('DOMContentLoaded', function() {
  // Wait for cookieconsent to be initialized
  const checkConsentInterval = setInterval(function() {
    if (typeof window.cookieConsentGranted !== 'undefined') {
      clearInterval(checkConsentInterval);
      
      // Set up a mutation observer to watch for consent status changes
      const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.attributeName === 'cookieconsent_status') {
            const newStatus = window.cookieConsentGranted;
            dispatchConsentStatusChanged(newStatus);
          }
        });
      });
      
      // Start observing the document
      observer.observe(document.body, { attributes: true });
    }
  }, 100);
});
