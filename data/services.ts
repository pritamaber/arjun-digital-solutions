export type Service = {
  title: string;
  price: string;
  description: string;
  benefits: string[];
  documents: string[];
  image?: string;
};

export const services: Record<string, Service> = {
  "class-3-dsc": {
    title: "Class 3 Individual Signing DSC",
    price: "₹1,582 / 2 Years",
    description:
      "A Class 3 Individual Signing DSC is a secure digital signature used for income tax, GST, MCA filings and other online authentication processes.",

    benefits: [
      "100% Transparency",
      "Expert Support",
      "Fast Processing",
      "Government Approved Certificate",
    ],

    documents: ["PAN Card", "Aadhaar Card", "Passport Size Photo"],
    image: "/images/class-3-digi-sign.jpg",
  },

  "usb-token": {
    title: "HYP2003 USB Token",
    price: "₹600",
    description:
      "A USB token is a secure device used to store digital signature certificates safely.",

    benefits: [
      "Secure Certificate Storage",
      "Easy Plug and Use",
      "Compatible With DSC",
    ],

    documents: ["Valid ID Proof", "Digital Certificate"],
    image: "/images/hyp-2003-token.jpg",
  },

  "document-signer": {
    title: "Class 2 Document Signer Certificate",
    price: "₹15,930",
    description:
      "Used by organizations to digitally sign bulk documents automatically.",

    benefits: [
      "Bulk Document Signing",
      "Automation Ready",
      "Secure Authentication",
    ],

    documents: ["Organization PAN", "Company Registration Proof"],
    image: "/images/class-3-digi-sign.jpg",
  },
  "gem-portal-services": {
    title: "GeM Portal Services",
    price: "₹3,000",
    description: "Register your business on the Government e-Marketplace.",
    benefits: ["Access government buyers", "Sell to departments"],
    documents: ["GST", "PAN", "Bank Details"],
    image: "/images/gem-portal-image.jpg",
  },
  "startup-india": {
    title: "Startup India Registration",
    price: "₹2,500",
    description: "Register your startup with the Startup India initiative.",
    benefits: ["Tax benefits", "Government recognition"],
    documents: ["PAN", "Company Incorporation"],
    image: "/images/startup-ind-reg.jpg",
  },
};
