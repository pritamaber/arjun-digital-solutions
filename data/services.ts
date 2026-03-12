export type Service = {
  title: string;
  slug: string;
  price: string;
  description: string;
  benefits: string[];
  documents: string[];
  image?: string;
};

export type ServiceCategory = {
  title: string;
  services: Service[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Class 3 Individual Signing DSC",
    services: [
      {
        slug: "class-3-dsc",
        title: "Class 3 Individual Signing DSC",
        price: "₹1,582 / Years",
        description:
          " A Class 3 Individual Signing DSC is a secure digital signature used for e-filing ITR, GST, EPF claims, and Others. It ensures document authenticity, legal compliance, and data security, making online transactions safer for individuals, professionals, and business owners in India.",
        benefits: [
          "Government approved certificate",
          "Secure authentication",
          "Fast processing",
        ],
        documents: ["PAN Card", "Aadhaar Card", "Photo"],
        image: "/images/class-3-digi-sign.jpg",
      },

      {
        slug: "usb-token",
        title: "HYP2003 USB Token",
        price: "₹600",
        description:
          "A HYP2003 token, also known as an ePass2003 Auto USB token, is a compact and highly secure USB device used to store a Digital Signature Certificate (DSC). Though it looks like a regular pen drive, it is designed specifically to safeguard digital certificates with advanced encryption and PIN protection. This token enables users to digitally sign documents or authenticate their identity on government and corporate portals.",
        benefits: [
          "Secure storage",
          "Plug and play device",
          "Compatible with all DSCs",
        ],
        documents: ["Valid ID Proof"],
        image: "/images/hyp-2003-token.jpg",
      },
    ],
  },

  {
    title: "Tender & GeM Services",
    services: [
      {
        slug: "gem-registration",
        title: "GeM Registration",
        price: "₹3,000",
        description:
          "Register your business on the Government eMarketplace portal.",
        benefits: [
          "Sell to government buyers",
          "Access GeM tenders",
          "Increase business opportunities",
        ],
        documents: ["GST", "PAN", "Bank Details"],
        image: "/images/gem-portal-image.jpg",
      },

      {
        slug: "gem-support",
        title: "Technical Support for GeM",
        price: "₹1,500",
        description:
          "Expert assistance for catalog upload, bidding and order management.",
        benefits: [
          "Catalog listing support",
          "Order management help",
          "Portal troubleshooting",
        ],
        documents: ["GeM ID", "Business details"],
      },

      {
        slug: "tender-participation",
        title: "E-Tender Participation",
        price: "₹2,500",
        description:
          "Professional assistance for participating in government tenders.",
        benefits: [
          "Tender document preparation",
          "Compliance verification",
          "Expert bidding support",
        ],
        documents: ["DSC", "Company Documents"],
      },

      {
        slug: "tender-bid",
        title: "Tender Bid Submission",
        price: "₹2,000",
        description:
          "Complete support for preparing and submitting tender bids.",
        benefits: [
          "Accurate bid submission",
          "On-time tender filing",
          "Professional support",
        ],
        documents: ["Tender Documents", "DSC"],
      },
    ],
  },

  {
    title: "Business Registrations",
    services: [
      {
        slug: "gst-registration",
        title: "GST Registration / Return",
        price: "₹1,200",
        description:
          "Register for GST and file GST returns with professional support.",
        benefits: [
          "Fast GST registration",
          "Return filing assistance",
          "Compliance support",
        ],
        documents: ["PAN", "Business Details"],
      },

      {
        slug: "trade-license",
        title: "Trade License",
        price: "₹1,500",
        description:
          "Obtain a trade license for legally operating your business.",
        benefits: [
          "Legal business operation",
          "Municipal approval",
          "Fast processing",
        ],
        documents: ["PAN", "Address Proof"],
      },

      {
        slug: "msme-registration",
        title: "MSME (Udhyam) Certificate",
        price: "₹999",
        description:
          "Register your business as an MSME under the Udhyam scheme.",
        benefits: [
          "Government subsidies",
          "Priority lending",
          "Business recognition",
        ],
        documents: ["Aadhaar", "PAN"],
      },
    ],
  },

  {
    title: "Compliance Certificates",
    services: [
      {
        slug: "professional-tax",
        title: "Professional Tax Registration",
        price: "₹800",
        description:
          "Professional tax registration for businesses and professionals.",
        benefits: [
          "State tax compliance",
          "Quick registration",
          "Expert support",
        ],
        documents: ["PAN", "Business Details"],
      },

      {
        slug: "fssai",
        title: "FSSAI Certificate",
        price: "₹2,000",
        description:
          "Food safety certification required for food businesses in India.",
        benefits: ["Legal food business operation", "Government recognition"],
        documents: ["PAN", "Food Business Details"],
      },

      {
        slug: "iso-certification",
        title: "ISO Certification",
        price: "₹4,500",
        description:
          "ISO certification improves credibility and quality management.",
        benefits: ["International credibility", "Improved quality processes"],
        documents: ["Company Documents"],
      },
    ],
  },
];

/* FLAT SERVICES MAP FOR LOOKUPS */

export const services = Object.fromEntries(
  serviceCategories
    .flatMap((category) => category.services)
    .map((service) => [service.slug, service]),
);
