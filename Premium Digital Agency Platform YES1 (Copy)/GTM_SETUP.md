# Google Tag Manager (GTM) Setup Documentation

## Overview

This project uses **Google Tag Manager (GTM)** for tracking conversions and analytics events. The GTM container is installed globally across all pages to enable flexible tag management without code changes.

---

## Installation Details

### Container ID
**GTM-KM9X449C**

### Installation Location
GTM is installed in `/index.html` with two components:

1. **JavaScript snippet** (in `<head>`)
   - Loads GTM asynchronously
   - Initializes `dataLayer` for event tracking
   - Located before closing `</head>` tag

2. **No-JavaScript fallback** (after opening `<body>`)
   - Iframe-based fallback for browsers with JavaScript disabled
   - Ensures tracking works even without JS enabled
   - Located immediately after opening `<body>` tag

### Important Notes
- ✅ **Only ONE GTM container** should be installed across the entire application
- ✅ GTM loads on **all pages** (not lazy-loaded or conditional)
- ✅ The `dataLayer` is initialized globally and available throughout the app

---

## Conversion Tracking

### Thank You Page Event

When users successfully submit the application form, they are redirected to `/thank-you`, where a conversion event is fired.

**Event Details:**
```javascript
window.dataLayer.push({
  event: 'form_submit_success',
  form_name: 'Aplică Acum'
});
```

**Event Properties:**
- **Event Name**: `form_submit_success`
- **Form Name**: `Aplică Acum`

### Implementation Details

1. **Form Submission Flow**:
   - User submits the application form at `/aplica`
   - On successful API response, form is reset
   - User is navigated to `/thank-you` with state flag `{ fromApply: true }`

2. **Thank You Page Logic** (`/src/components/pages/ThankYouPage.tsx`):
   - Checks `location.state?.fromApply` to verify user came from form
   - If `fromApply === true`:
     - Fires the `form_submit_success` dataLayer event
     - Uses `sessionStorage` key `wmd_thankyou_fired` to prevent duplicate events on refresh
   - If `fromApply` is NOT present:
     - Still renders the page (good UX)
     - Does NOT fire conversion event
     - Adds `<meta name="robots" content="noindex">` to prevent SEO indexing

3. **Duplicate Prevention**:
   - Session storage key: `wmd_thankyou_fired`
   - Event fires only once per session
   - Refreshing `/thank-you` will NOT trigger additional events

---

## GTM Configuration Options

You have **two options** for configuring conversion tracking in Google Tag Manager:

### Option 1: Event-Based Trigger (Recommended)

**Setup in GTM:**
1. Create a new **Custom Event** trigger
2. Set Event Name to: `form_submit_success`
3. Use this trigger for your Google Ads Conversion Tag

**Advantages:**
- ✅ More reliable (explicit event)
- ✅ Prevents accidental triggers from direct page visits
- ✅ Can track additional form metadata (form_name)

**Code Implementation:**
The event is already pushed to `dataLayer` in `ThankYouPage.tsx` when user comes from apply form.

---

### Option 2: Page Path Trigger

**Setup in GTM:**
1. Create a new **Page View** trigger
2. Set condition: Page Path equals `/thank-you`
3. Use this trigger for your Google Ads Conversion Tag

**Advantages:**
- ✅ Simple setup
- ✅ Works even if JavaScript event fails

**Disadvantages:**
- ⚠️ May fire on direct page visits (though we mitigate this with `fromApply` check)
- ⚠️ Less granular control

**Code Implementation:**
The page already has the `fromApply` state check, so direct visits won't fire the dataLayer event. However, GTM page view triggers will fire regardless. If you use this option, consider adding a Data Layer Variable check in GTM to verify `fromApply` state.

---

## Testing & Verification

### Testing the Implementation

1. **Enable GTM Preview Mode**:
   - Go to your GTM workspace
   - Click "Preview" in the top right
   - Enter your website URL

2. **Test the Form Submission**:
   - Fill out the application form at `/aplica`
   - Submit the form
   - You should be redirected to `/thank-you`

3. **Verify in GTM Preview**:
   - Check that `form_submit_success` event appears in the GTM debugger
   - Verify that your conversion tag fires
   - Refresh the page and confirm the event does NOT fire again

4. **Test Direct Page Visit**:
   - Navigate directly to `/thank-you` (without form submission)
   - Verify that the `form_submit_success` event does NOT fire
   - Page should still render normally

### Browser Console Testing

You can also verify the dataLayer in the browser console:

```javascript
// Check if dataLayer exists
console.log(window.dataLayer);

// Check if conversion event was pushed
window.dataLayer.forEach(event => {
  if (event.event === 'form_submit_success') {
    console.log('Conversion event found:', event);
  }
});
```

---

## File Locations

| File | Purpose | Path |
|------|---------|------|
| GTM Installation | Global HTML with GTM snippet | `/index.html` |
| Thank You Page | Conversion page with event tracking | `/src/components/pages/ThankYouPage.tsx` |
| Application Form | Form that redirects on success | `/src/components/ApplicationForm.tsx` |
| Router Config | Route registration for `/thank-you` | `/src/App.tsx` |

---

## Troubleshooting

### Event Not Firing

**Problem**: The `form_submit_success` event is not appearing in GTM.

**Solutions**:
1. Check browser console for errors
2. Verify `location.state?.fromApply` is true on `/thank-you`
3. Clear sessionStorage: `sessionStorage.removeItem('wmd_thankyou_fired')`
4. Ensure GTM snippet is properly loaded (check Network tab)

---

### Event Firing Multiple Times

**Problem**: The event fires multiple times on the same page visit.

**Solutions**:
1. Check if sessionStorage is enabled in the browser
2. Verify `sessionStorage.getItem('wmd_thankyou_fired')` returns `'true'` after first fire
3. Ensure you're not creating multiple instances of the component

---

### GTM Container Not Loading

**Problem**: GTM container is not loading on the page.

**Solutions**:
1. Verify the GTM snippet is present in `/index.html`
2. Check for Content Security Policy (CSP) issues blocking GTM
3. Ensure no ad blockers are active
4. Verify container ID is correct: `GTM-KM9X449C`
5. Check Network tab for `gtm.js` request

---

## Best Practices

1. ✅ **Keep ONE GTM container per application**
   - Never add multiple GTM snippets
   - Manage all tags within the single container

2. ✅ **Use GTM Preview Mode for testing**
   - Always test in Preview Mode before publishing
   - Verify events fire correctly

3. ✅ **Document your GTM setup**
   - Keep this README updated
   - Document any new events or triggers

4. ✅ **Use consistent event naming**
   - Follow lowercase_with_underscores pattern
   - Keep event names descriptive

5. ✅ **Prevent duplicate events**
   - Always use sessionStorage or flags
   - Never fire conversion events on page refresh

---

## Next Steps

1. **Set Up Google Ads Conversion Tag in GTM**:
   - Create a new Google Ads Conversion Tag
   - Use the `form_submit_success` event trigger
   - Configure your conversion ID and label

2. **Set Up Google Analytics 4 (Optional)**:
   - Add GA4 Configuration Tag
   - Track the `form_submit_success` as a conversion event

3. **Set Up Facebook Pixel (Optional)**:
   - Add Facebook Pixel Base Code
   - Track the `form_submit_success` as a Lead event

4. **Test & Publish**:
   - Test all tags in Preview Mode
   - Submit a version in GTM
   - Publish to production

---

## Support

For questions or issues with GTM setup, contact:
- **Email**: contact@webmediadesign.ro
- **Developer**: Reference this documentation

---

**Last Updated**: 2025-10-28
**GTM Container**: GTM-KM9X449C
**Version**: 1.0
