export interface Project {
  slug: string;
  title: string;
  kind: "Case study" | "Project";
  tags: string[];
  summary: string;
  cover?: string;
  coverAlt?: string;
  github?: string;
  intro: string;
  highlights: string[];
  metrics?: { value: string; label: string }[];
  tech: string[];
  context?: string;
  note?: string;
  featured?: boolean;
  preview?: { type: "embed" | "image"; src: string; alt: string };
  demos?: { src: string; alt: string; caption?: string }[];
  mockups?: { src: string; alt: string }[];
}

export const projects: Project[] = [
  {
    slug: "muhimma-dashboards",
    title: "Muhimma. Production dashboards for enterprise brands.",
    kind: "Case study",
    featured: true,
    preview: {
      type: "embed",
      src: "https://portfolio-demo-1.aed7m.workers.dev/",
      alt: "Live preview of a React dashboard built for Muhimma",
    },
    demos: [
      {
        src: "https://portfolio-demo-1.aed7m.workers.dev/",
        alt: "Live React dashboard demo 1",
        caption: "React dashboard — live demo",
      },
      {
        src: "https://portfolio-demo-2.aed7m.workers.dev/",
        alt: "Live React dashboard demo 2",
        caption: "React dashboard — live demo",
      },
    ],
    mockups: [
      {
        src: "/img/muhimma/muhimma-dashboard.png",
        alt: "Power BI dashboard with demographic slicers and multi-category bar chart comparisons",
      },
      {
        src: "/img/muhimma/muhimma-dashboard_1.png",
        alt: "Power BI dashboard featuring Likert-scale visualizations and image card layouts",
      },
      {
        src: "/img/muhimma/muhimma-dashboard_2.png",
        alt: "Power BI KPI ranking dashboard with progress bars and drill-down filters",
      },
      {
        src: "/img/muhimma/muhimma-dashboard_3.png",
        alt: "Power BI campaign KPI dashboard with donut, bar, and pie chart visuals",
      },
      {
        src: "/img/muhimma/muhimma-dashboard_4.png",
        alt: "Power BI demographic profiling dashboard with percentage bars and donut charts",
      },
      {
        src: "/img/muhimma/muhimma-dashboard_5.png",
        alt: "Power BI multi-level operations dashboard with role-based navigation and ranking cards",
      },
      {
        src: "/img/muhimma/muhimma-dashboard_6.png",
        alt: "Power BI benchmarking dashboard with dynamic KPI tables and conditional formatting",
      },
      {
        src: "/img/muhimma/muhimma-dashboard_7.png",
        alt: "Power BI survey results dashboard with stacked bars, donuts, and column charts",
      },
      {
        src: "/img/muhimma/muhimma-dashboard_8.png",
        alt: "Power BI sentiment comparison dashboard with multi-column bar matrix and slicers",
      },
    ],
    tags: ["Power BI", "React", "Data modeling", "Enterprise BI"],
    summary:
      "8+ Power BI dashboards and 2 React dashboards architected end to end for a regional consumer intelligence company in KSA and the UAE.",
    intro:
      "Owned the full lifecycle of production-grade dashboards used directly by enterprise brand clients of one of the region's leading consumer intelligence companies. Built from raw research datasets and architecture documents into interactive tools for executive decision-makers, covering data modeling, KPI design, visual logic, and shipping to production.",
    highlights: [
      "Built and maintained 8+ production Power BI dashboards used daily by enterprise brand clients across multiple retail categories. Owned data modeling, DAX measures, visual design, performance optimization, and ongoing maintenance.",
      "Architected and shipped 2 production React dashboards as product owner, directing AI-assisted implementation through to enterprise-quality release. Defined requirements, structured data flow, designed UX, and acted as the quality gate.",
      "Translated multi-stage market research projects into dashboards that made complex consumer intelligence accessible to non-technical decision-makers.",
      "Iterated on existing dashboards by shipping new features, improving UX, and resolving data issues based on direct client feedback loops.",
      "Contributed feature ideas, improvements, and fixes to dashboards across the broader product portfolio.",
    ],
    metrics: [
      { value: "8+", label: "Power BI dashboards in production" },
      { value: "2", label: "React dashboards architected end to end" },
    ],
    tech: [
      "Power BI",
      "DAX",
      "Data modeling",
      "KPI design",
      "Python",
      "Excel · Power Query",
      "React (AI-assisted)",
      "Client-ready BI",
    ],
    context:
      "Muhimma Digital Platform Co. is a leading consumer intelligence company serving enterprise brand clients across Saudi Arabia and the UAE, operating a verified community of 400,000+ identity-verified members.",
    note:
      "Live demos use sample data. Power BI screenshots are masked to protect client confidentiality. No client data is exposed.",
  },
  {
    slug: "automated-reporting-system",
    title: "Automated Reporting System",
    kind: "Project",
    tags: ["Python", "ETL", "Reporting"],
    summary:
      "Reduced manual reporting time by 90% through full automation of data processing and report generation.",
    cover: "/img/automated-reporting.jpg",
    coverAlt: "Automated Reporting System dashboard preview",
    github: "https://github.com/AED7M/Automated-E-commerce-Reporting-System",
    intro:
      "A comprehensive Python-based reporting system that revolutionized reporting workflows for an e-commerce dataset, reducing manual time by 90% while increasing accuracy and consistency through automation.",
    highlights: [
      "End to end pipeline: ingest, clean, transform, and generate scheduled reports from raw e-commerce datasets.",
      "Reduced manual reporting time by 90%, freeing analyst time for higher-value work.",
      "Standardized output formats so stakeholders receive identical, comparable reports every cycle.",
      "Built with reproducibility in mind: same inputs always produce same outputs, no manual touch-ups.",
    ],
    tech: ["Python", "Pandas", "ETL", "Scheduled reporting"],
  },
  {
    slug: "sales-analytics-etl",
    title: "Sales Analytics ETL & Power BI",
    kind: "Project",
    tags: ["Python", "PostgreSQL", "Power BI"],
    summary:
      "Robust ETL pipeline processing 20,000+ rows of sales data, surfaced through an interactive Power BI dashboard.",
    cover: "/img/sales-analytics-etl.png",
    coverAlt: "Sales Analytics ETL pipeline output preview",
    github: "https://github.com/AED7M/ETL-Python-PowerBI",
    intro:
      "Built a production-style ETL pipeline that ingests sales data, normalizes it through PostgreSQL, and surfaces it via an interactive Power BI dashboard for downstream analysis.",
    highlights: [
      "Python-driven ETL with explicit data validation and error handling at each stage.",
      "PostgreSQL as the analytical store, with a star-schema model designed for BI consumption.",
      "Power BI dashboard layered on top with drill-downs, filters, and KPI cards for sales performance views.",
      "20,000+ rows processed; pipeline designed to scale linearly with input volume.",
    ],
    tech: ["Python", "PostgreSQL", "Power BI", "DAX", "Star schema"],
  },
  {
    slug: "gemstone-price-prediction",
    title: "Gemstone Price Prediction",
    kind: "Project",
    tags: ["Machine Learning", "Python", "Regression"],
    summary:
      "Regression model predicting cubic zirconia gemstone prices with 97.8% accuracy from physical attributes.",
    cover: "/img/gemstone-price-prediction.png",
    coverAlt: "Gemstone Price Prediction model preview",
    github: "https://github.com/AED7M/gemstone-price-prediction",
    intro:
      "End to end ML project predicting cubic zirconia prices from physical attributes (cut, color, clarity, dimensions). Walks the full pipeline from EDA through feature engineering to model evaluation.",
    highlights: [
      "Achieved 97.8% accuracy on the held-out test set using regression with engineered features.",
      "Full EDA covering distributions, correlations, and outlier handling to inform modeling choices.",
      "Feature engineering for non-linear interactions between physical attributes and price.",
      "Model comparison across linear regression, decision trees, and ensemble methods to justify the final choice.",
    ],
    tech: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib · Seaborn",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
