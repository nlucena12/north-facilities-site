// Company details used across the site. Edit here and every page updates.
export const site = {
  name: 'North Facilities',
  cta: 'Request a walkthrough',
  contractorCta: 'Get on the contractor list',
  email: 'nico@northfacilitiesgroup.com',
  // Leave empty until you have a US mailing address. When it's filled in, it shows in the footer.
  mailingAddress: '',
  areas: 'Chicago and suburbs, Miami-Dade and Broward',
  replyTime: 'within one business day',
};

// Services shown on the home page and in the form dropdowns.
// "id" is what the home-page buttons pass to the form (/request/?service=cleaning).
export const services = [
  { id: 'cleaning', label: 'Commercial cleaning', photo: 'cleaning', text: 'Janitorial, day porter, and post-construction cleaning for offices, condos and common areas.' },
  { id: 'landscaping', label: 'Landscaping and snow', photo: 'landscaping', text: 'Grounds maintenance contracts, plus snow and ice removal for Chicago winters.' },
  { id: 'exterior', label: 'Roofing and exterior', photo: 'exterior', text: 'Roof inspections and repairs, facades, masonry, parapets, porches and stairs.' },
  { id: 'violation', label: 'Violation and safety repairs', photo: 'miami', text: 'Work ordered by the city or county, including condo structural and recertification repairs.' },
];

export const areas = ['Chicago area', 'Miami-Dade', 'Broward', 'Somewhere else'];
export const timings = ['As soon as possible', 'In 1 to 3 months', 'Contract up for renewal', 'Just getting prices'];
export const trades = ['Commercial cleaning', 'Landscaping and snow', 'Roofing', 'Masonry and exterior', 'Other'];
