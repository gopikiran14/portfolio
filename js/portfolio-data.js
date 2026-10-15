/**
 * GOPIKIRAN S - PORTFOLIO DATA CONFIGURATION
 * All personal information, projects, experience, skills, and education are centralized here.
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "Gopikiran S",
    firstName: "Gopikiran",
    lastName: "S",
    title: "Software Engineer | Full Stack Developer",
    roles: [
      "Software Engineer",
      "Full Stack Developer",
      "Angular & Spring Boot Specialist",
      "AI & Edge Vision Developer",
      "Enterprise Automation Engineer"
    ],
    email: "gopikiran14062002@gmail.com",
    phone: "+91 9363789859",
    phoneRaw: "9363789859",
    location: "Virudhunagar, Tamil Nadu, India",
    currentCity: "Nagercoil / Virudhunagar, India",
    linkedin: "https://www.linkedin.com/in/gopikirans",
    linkedinHandle: "linkedin.com/in/gopikirans",
    github: "https://github.com/gopikiran14",
    githubHandle: "github.com/gopikiran14",
    availability: "Available for Full-time Roles & High-Impact Opportunities",
    statusBadge: "Open to Work / Immediate Joiner",
    bio: "Software Developer with proven experience in building scalable enterprise applications using Angular, Spring Boot, Python, and SQL technologies. Highly skilled in full-stack development, REST APIs, real-time edge computer vision systems, and enterprise workflow automation with hands-on experience in enterprise platforms and AI-powered applications.",
    aboutStory: [
      "I am an enthusiastic Software Engineer and Full-Stack Developer passionate about engineering robust, enterprise-scale platforms and real-time intelligent systems.",
      "At Asir Technologies, I engineer enterprise web applications for workforce management, CRM, and sales operations with Angular, Spring Boot, and MySQL, building secure role-based REST APIs and complex business workflows.",
      "My work spans across cutting-edge AI pipelines — including developing real-time edge computer vision monitoring systems using RT-DETR, ONNX Runtime, and WebSockets, as well as building custom MCP (Model Context Protocol) AI agents and enterprise automation tools."
    ],
    metrics: [
      { label: "Production Projects", value: "7+", icon: "fa-rocket" },
      { label: "Core Tech Stacks", value: "Full Stack & AI", icon: "fa-layer-group" },
      { label: "Enterprise Experience", value: "2 Roles", icon: "fa-briefcase" },
      { label: "Code Quality & Precision", value: "100%", icon: "fa-shield-halved" }
    ]
  },

  skills: {
    categories: [
      {
        id: "languages",
        name: "Languages",
        icon: "fa-code",
        skills: [
          { name: "Java", level: 92, badge: "Advanced", icon: "fab fa-java" },
          { name: "Python", level: 85, badge: "Proficient", icon: "fab fa-python" },
          { name: "TypeScript", level: 88, badge: "Proficient", icon: "fab fa-js" },
          { name: "JavaScript", level: 90, badge: "Advanced", icon: "fab fa-js-square" },
          { name: "SQL", level: 88, badge: "Proficient", icon: "fas fa-database" }
        ]
      },
      {
        id: "frontend",
        name: "Front-End",
        icon: "fa-desktop",
        skills: [
          { name: "Angular (Signals / Standalone)", level: 92, badge: "Expert", icon: "fab fa-angular" },
          { name: "React.js", level: 82, badge: "Proficient", icon: "fab fa-react" },
          { name: "TypeScript / JS", level: 90, badge: "Advanced", icon: "fab fa-js" },
          { name: "HTML5 & CSS3", level: 95, badge: "Expert", icon: "fab fa-html5" },
          { name: "Responsive UI & Modern CSS", level: 92, badge: "Expert", icon: "fab fa-css3-alt" },
          { name: "Reactive Forms & State", level: 90, badge: "Advanced", icon: "fas fa-bolt" }
        ]
      },
      {
        id: "backend",
        name: "Back-End & APIs",
        icon: "fa-server",
        skills: [
          { name: "Spring Boot", level: 90, badge: "Advanced", icon: "fas fa-leaf" },
          { name: "FastAPI", level: 88, badge: "Proficient", icon: "fas fa-bolt" },
          { name: "REST API Architecture", level: 94, badge: "Expert", icon: "fas fa-network-wired" },
          { name: "Role-Based Security / Auth", level: 88, badge: "Proficient", icon: "fas fa-shield-alt" },
          { name: "DTO Design & Validation", level: 92, badge: "Expert", icon: "fas fa-check-double" }
        ]
      },
      {
        id: "database-cloud",
        name: "Databases & DevOps",
        icon: "fa-database",
        skills: [
          { name: "MySQL", level: 90, badge: "Advanced", icon: "fas fa-database" },
          { name: "PostgreSQL", level: 85, badge: "Proficient", icon: "fas fa-server" },
          { name: "Docker", level: 82, badge: "Proficient", icon: "fab fa-docker" },
          { name: "CI/CD Pipelines", level: 84, badge: "Proficient", icon: "fas fa-infinity" },
          { name: "Git / GitHub", level: 92, badge: "Advanced", icon: "fab fa-github" },
          { name: "Azure AD Integration", level: 80, badge: "Intermediate", icon: "fab fa-microsoft" }
        ]
      },
      {
        id: "ai-edge",
        name: "AI, Vision & Automation",
        icon: "fa-brain",
        skills: [
          { name: "RT-DETR (Object Detection)", level: 88, badge: "Specialist", icon: "fas fa-eye" },
          { name: "ONNX Runtime & OpenCV", level: 88, badge: "Proficient", icon: "fas fa-camera" },
          { name: "Model Context Protocol (MCP)", level: 86, badge: "Proficient", icon: "fas fa-robot" },
          { name: "Groq LLM Integration", level: 90, badge: "Advanced", icon: "fas fa-microchip" },
          { name: "WebSocket Streaming", level: 88, badge: "Proficient", icon: "fas fa-satellite-dish" },
          { name: "Data Validation & Annotation", level: 92, badge: "Advanced", icon: "fas fa-chart-line" }
        ]
      }
    ]
  },

  projects: [
    {
      id: "smart-bag-counter",
      title: "Smart Bag Counter — AI Edge Monitoring System",
      category: "ai-ml",
      categoryName: "AI & Computer Vision",
      badge: "Flagship AI Project",
      featured: true,
      tagline: "End-to-end multi-threaded computer vision pipeline & real-time Angular dashboard for industrial conveyor operations.",
      summary: "Developed and deployed an end-to-end, multi-threaded computer vision pipeline and enterprise web platform to automate real-time bag counting for conveyor belt loading operations.",
      techStack: ["Python", "FastAPI", "ONNX Runtime", "OpenCV", "RT-DETR", "Angular", "TypeScript", "WebSockets"],
      icon: "fa-conveyor-belt-arm",
      highlights: [
        "Integrated RT-DETR (Real-Time Detection Transformer) model via ONNX Runtime and OpenCV on live RTSP video streams with startup model warming to eliminate inference latency.",
        "Engineered custom centroid-distance object tracking and multi-directional line-crossing algorithm (left-to-right, right-to-left, top-to-bottom, bottom-to-top) with high occlusion resistance.",
        "Built multi-threaded FastAPI backend orchestrator managing dedicated worker threads for real-time RTSP stream processing, ensuring non-blocking API performance and reliable stream ingestion.",
        "Developed reactive Angular dashboard using Angular Signals for state management with real-time metrics visualization (Total, Tracked, and Detection counts) and WebSocket-based live video streaming.",
        "Engineered high-performance WebSocket streaming server for frame-by-frame annotated canvas transmission with a 5-second idle-shutdown cooldown to conserve server compute resources."
      ],
      caseStudy: {
        problem: "Industrial conveyor belt loading required accurate, non-intrusive counting under variable lighting, high belt speeds, object occlusions, and severe latency bottlenecks.",
        architecture: "RTSP Video Stream ➔ Python Multi-threaded OpenCV Frame Ingestion ➔ ONNX Runtime RT-DETR Transformer Inference ➔ Centroid Tracking & Directional Line-Crossing Math ➔ WebSocket Streamer (Frame + Telemetry) ➔ Reactive Angular 17+ Dashboard (Angular Signals + Canvas Annotation).",
        impact: "Zero inference lag after startup warm-up, non-blocking asynchronous pipeline, automated conveyor counting with near-zero error rate, and automatic resource optimization during idle periods."
      },
      links: {
        demo: "#",
        github: "https://github.com/gopikiran14"
      }
    },
    {
      id: "enterprise-workforce-portal",
      title: "Enterprise workforce portal",
      category: "fullstack",
      categoryName: "Enterprise Full-Stack",
      badge: "Enterprise Platform",
      featured: true,
      tagline: "Unified enterprise portal integrating HR, workforce allocation, timesheet tracking, and operational management.",
      summary: "Unified enterprise portal integrating HR, workforce, and operational tools into a single scalable platform with role-based access and automated workflows.",
      techStack: ["Angular", "Spring Boot", "Java", "MySQL", "REST APIs", "CI/CD", "Role-Based Auth"],
      icon: "fa-users-gear",
      highlights: [
        "Implemented 4 core enterprise modules: Performance Appraisal Management, Attendance & Leave Tracking, Project Tracker Allocation, and Timesheet & Productivity Monitoring.",
        "Engineered multi-step approval workflows, role-based access control (RBAC), and executive reporting dashboards providing actionable management insights.",
        "Designed secure, scalable REST APIs with DTO patterns and optimized MySQL database structures for high-performance data processing.",
        "Configured automated CI/CD pipeline for build, unit testing, and zero-downtime deployment, drastically reducing release cycle times."
      ],
      caseStudy: {
        problem: "Fragmented workforce tracking across spreadsheets and disparate tools caused communication bottlenecks, manual approval delays, and inaccurate productivity metrics.",
        architecture: "Angular Modular SPA (Standalone Components, Shared Services, Reactive Form Validations) ➔ Spring Boot Secure REST API Layer (Spring Security, Role-Based Access Control, DTO Layer) ➔ MySQL Enterprise Database (Optimized Schemas, Indexed Lookups) ➔ Automated CI/CD Pipeline.",
        impact: "Streamlined company-wide workforce operations, eliminated duplicate approval steps, and reduced quarterly appraisal reporting cycles by over 60%."
      },
      links: {
        demo: "#",
        github: "https://github.com/gopikiran14"
      }
    },
    {
      id: "crm-document-builder",
      title: "Sales Application — CRM & Document Builder",
      category: "enterprise",
      categoryName: "Enterprise CRM",
      badge: "Enterprise CRM",
      featured: true,
      tagline: "High-productivity CRM and automated legal/sales document generator containerized with Docker.",
      summary: "Built a robust CRM system to manage prospects, requirements, and sales workflows with automated document generation using Jasper Reports.",
      techStack: ["Angular", "Spring Boot", "MySQL", "Jasper Reports", "Docker", "Java"],
      icon: "fa-file-signature",
      highlights: [
        "Built full prospect lifecycle tracking, requirement creation, and lead assignment workflows.",
        "Implemented automated document generation of NDA, MSA, SOW, and Proposal contracts for prospects using Jasper Reports engine.",
        "Containerized the application using Docker for seamless environment consistency and rapid deployment.",
        "Integrated role-based security, validation rules for sales operations, and structured DTO/service layers ensuring maintainability.",
        "Improved usability through modern enterprise dashboard design and workflow-based UI."
      ],
      caseStudy: {
        problem: "Sales representatives spent hours manually drafting NDA, SOW, and contract documents with high risk of clerical errors and delayed prospect onboarding.",
        architecture: "Angular Dynamic Forms ➔ Spring Boot Controller & Service Layer ➔ JasperReports Document Templating Engine ➔ MySQL Data Store ➔ Docker Containerization.",
        impact: "Instant 1-click generation of validated legal & sales proposals, standardized documentation, and accelerated sales pipeline turnaround."
      },
      links: {
        demo: "#",
        github: "https://github.com/gopikiran14"
      }
    },
    {
      id: "mcp-chatbot-agent",
      title: "Chatbot — MCP Agent (Model Context Protocol)",
      category: "ai-ml",
      categoryName: "Generative AI & LLM Agents",
      badge: "AI Agent",
      featured: true,
      tagline: "Intelligent agent orchestration and multi-step reasoning using Python, Flask, Groq API, and Model Context Protocol.",
      summary: "Built a Flask-based backend integrated with Groq models for intelligent agent interactions and workflow automation.",
      techStack: ["Python", "Flask", "Groq API", "MCP (Model Context Protocol)", "Async APIs"],
      icon: "fa-robot",
      highlights: [
        "Integrated ultra-fast Groq LLM inference for near-zero latency conversational AI and reasoning.",
        "Implemented asynchronous event handling, CORS-enabled REST APIs, and real-time communication using custom agent-client setup.",
        "Built automation workflows for data analysis, text processing, and API-driven workflows using Python MCP.",
        "Enhanced modularity by creating reusable services for agent orchestration, tool calling, and multi-step reasoning."
      ],
      caseStudy: {
        problem: "Traditional LLM interfaces lack extensible protocol standards for real-time external tool invocation and fast response streaming.",
        architecture: "Web Client ➔ Flask Async API Gateway ➔ Model Context Protocol (MCP) Server / Tool Registry ➔ Groq High-Speed Inference Engine ➔ Multi-step Reasoning Orchestrator.",
        impact: "Ultra-low latency intelligent assistant capable of dynamically calling functions, analyzing data, and executing multi-step workflows."
      },
      links: {
        demo: "#",
        github: "https://github.com/gopikiran14"
      }
    },
    {
      id: "sap-sd-automation",
      title: "SAP SD & Fruitsy Workflow Automation(ACRA)",
      category: "enterprise",
      categoryName: "Process Automation",
      badge: "Automation",
      featured: false,
      tagline: "Automated SAP Sales and Distribution workflows via Microsoft Teams chatbot using ACRA.",
      summary: "Created intelligent workflows to automate SAP SD processes via Teams chatbot, streamlining Sales Order processing and master data reconciliation.",
      techStack: ["ACRA", "SAP SD", "Teams Chatbot", "Python", "VA01 / OB52"],
      icon: "fa-diagram-project",
      highlights: [
        "Created workflows to automate SAP SD via Microsoft Teams chatbot using ACRA.",
        "Executed end-to-end Sales Order processing using VA01 transaction code.",
        "Performed backorder verification, stock release activities, and customer-material master data validation.",
        "Troubleshot sales order and delivery issues by analyzing SAP SD master data and document flow.",
        "Assisted in resolving fiscal year and posting period issues using OB29, OB37, and OB52, supporting Order-to-Cash (O2C) operations."
      ],
      caseStudy: {
        problem: "Manual execution of routine SAP SD transactions caused delays in sales order creation and period closing.",
        architecture: "MS Teams Bot Interface ➔ ACRA Automation Engine ➔ SAP SD GUI Scripting / BAPI ➔ Order-to-Cash Validation & Posting.",
        impact: "Reduced routine order processing overhead and improved posting accuracy across business units."
      },
      links: {
        demo: "#",
        github: "https://github.com/gopikiran14"
      }
    },
    {
      id: "ecommerce-web-platform",
      title: "Full-Stack E-commerce Web Application",
      category: "fullstack",
      categoryName: "Full-Stack Web App",
      badge: "Web Application",
      featured: false,
      tagline: "Comprehensive e-commerce platform with dynamic checkout, delivery management, and Spring Boot REST backend.",
      summary: "Full-stack eCommerce web application featuring product catalog, cart, multi-step checkout, and an admin delivery portal.",
      techStack: ["Angular", "Spring Boot", "Java", "MySQL", "REST APIs", "HTML5", "CSS3"],
      icon: "fa-cart-shopping",
      highlights: [
        "Developed a full-stack eCommerce web application using Angular (frontend) and Spring Boot (backend), with MySQL as the database.",
        "Implemented product listing, dynamic filtering, persistent cart functionality, and a complete checkout process.",
        "Added dynamic country and state dropdowns, form validation, and order submission using REST APIs.",
        "Backend manages and stores customers, orders, and payment details in MySQL database.",
        "Created an admin section to manage delivery personnel with full CRUD operations using structured forms and navigation in Angular."
      ],
      caseStudy: {
        problem: "Need for a responsive, modular shopping platform with seamless customer checkout and robust back-office delivery administration.",
        architecture: "Angular Frontend (Reactive Forms, Interceptors, Guards) ➔ Spring Boot RESTful Web Services ➔ Hibernate/JPA ➔ MySQL Database.",
        impact: "Clean modular architecture demonstrating end-to-end e-commerce order workflows and administrative control."
      },
      links: {
        demo: "#",
        github: "https://github.com/gopikiran14"
      }
    },
    {
      id: "salesforce-zoho-migration",
      title: "Testing — 'Globus - Salesforce to Zoho CRM migration'",
      category: "enterprise",
      categoryName: "CRM QA & Migration",
      badge: "Quality Assurance",
      featured: false,
      tagline: "Role-based authority testing, end-to-end CRM workflow validation, and Jira defect tracking during Salesforce to Zoho CRM migration.",
      summary: "Executed end-to-end functional and role-based authority testing across multiple user roles in Zoho CRM during migration from Salesforce, tracking defects in Jira and conducting client alignment calls.",
      techStack: ["Zoho CRM", "Salesforce", "Jira", "Role-Based Access", "Functional Testing", "Agile Collaboration"],
      icon: "fa-vial-circle-check",
      highlights: [
        "Tested every end-to-end workflow in Zoho CRM during migration from Salesforce, ensuring complete process parity.",
        "Verified multiple user roles with varied authority levels, guaranteeing strict adherence to role-based access and permissions.",
        "Identified, raised, and tracked bugs and edge-case defects in Jira throughout all migration phases.",
        "Conducted regular client discussion calls to clarify requirement doubts, resolve discrepancies, and ensure smooth delivery."
      ],
      caseStudy: {
        problem: "Migrating enterprise customer relationship workflows from Salesforce to Zoho CRM required rigorous validation across varied user roles with distinct authorities to prevent permission leaks, workflow interruptions, and data discrepancies.",
        architecture: "Salesforce Baseline Workflows ➔ Zoho CRM Migration Pipeline ➔ Role-Based Authority Verification Matrix ➔ Defect Logging & Lifecycle Tracking in Jira ➔ Client Review & Sign-Off Calls.",
        impact: "Ensured zero critical permission defects at go-live, verified functional parity across all user roles, and accelerated client sign-off with clear defect resolution."
      },
      links: {
        demo: "#",
        github: "https://github.com/gopikiran14"
      }
    }
  ],

  experience: [
    {
      company: "Asir Technologies Private Limited",
      role: "Software Engineer",
      duration: "06/2025 – Present",
      location: "Nagercoil, India",
      type: "Full-time",
      current: true,
      badge: "Current Role",
      description: "Developing enterprise-level web applications and mission-critical workforce systems with modern Angular, Spring Boot, and cloud technologies.",
      achievements: [
        "Developed enterprise-level web applications using Angular, Spring Boot, and MySQL to support workforce management, CRM, and sales activities.",
        "Developed workflow-based applications such as performance management, project tracker, and timesheet management.",
        "Designed secure REST APIs with role-based security, DTO design, and optimized database queries for high performance.",
        "Developed complex business logic involving validations such as overlap checks, assignment rules, and approval processes.",
        "Developed responsive and modular Angular applications using standalone components, reactive forms, shared services, and enterprise design patterns.",
        "Worked with various teams to optimize operational processes and enhance data accuracy and reporting capabilities.",
        "Participated in planning and designing Azure AD integration."
      ],
      skillsUsed: ["Angular", "Spring Boot", "Java", "TypeScript", "MySQL", "REST APIs", "Azure AD", "CI/CD"]
    },
    {
      company: "Clear Quote Technologies",
      role: "Automotive Data Analyst",
      duration: "01/2025 – 05/2025",
      location: "Madurai, India",
      type: "Full-time",
      current: false,
      badge: "Previous Role",
      description: "Designed and executed data validation frameworks and automated discrepancy detection for automotive inspection technologies.",
      achievements: [
        "Designed and executed comprehensive data validation frameworks, ensuring accuracy, consistency, and compliance with automotive industry standards.",
        "Performed end-to-end validation testing to detect and resolve discrepancies, improving overall data reliability across multiple departments.",
        "Automated recurring validation tasks, reducing manual effort and accelerating project timelines.",
        "Partnered with cross-functional teams to standardize validation protocols, streamlining workflows and reducing data processing errors.",
        "Contributed to data quality improvement initiatives, directly supporting business decisions and regulatory adherence."
      ],
      skillsUsed: ["Python", "Data Validation", "Data Annotation", "Agile Collaboration", "Quality Assurance"]
    }
  ],

  education: [
    {
      degree: "Bachelor of Engineering (BE) - Electronics and Communication Engineering",
      institution: "Mepco Schlenk Engineering College",
      score: "CGPA: 7.0 / 10",
      year: "2024",
      location: "Virudhunagar, India",
      badge: "Graduated",
      highlight: "Engineering foundation with coursework in digital systems, computer programming, object-oriented concepts, and electronic systems."
    },
    {
      degree: "Higher Secondary Certificate (HSC) - Computer Science",
      institution: "Kshatriya Vidhyasala English Medium School (CBSE)",
      score: "84.9%",
      year: "2020",
      location: "Virudhunagar, India",
      badge: "CBSE Board",
      highlight: "Specialized in Computer Science, C++, Mathematics, and Physics with high academic distinction."
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Kshatriya Vidhyasala English Medium School (CBSE)",
      score: "84.1%",
      year: "2018",
      location: "Virudhunagar, India",
      badge: "CBSE Board",
      highlight: "Strong foundational education in Science and Mathematics under the CBSE curriculum."
    }
  ],

  certifications: [
    {
      title: "Extra Miler Award",
      issuer: "Asir Technologies Private Limited",
      date: "24/04/2026",
      badge: "Honors & Award",
      skills: ["Performance Appraisal System", "Rapid Tech Adoption", "ASIRites Enterprise Applications", "Sales Document Builder"],
      description: "Recognized for outstanding contributions to the Performance Appraisal System, rapid adoption of new technologies, and contributions across ASIRites enterprise applications and the Sales Document Builder."
    },
    {
      title: "Java Full-Stack Developer Certification",
      issuer: "Greens Technologies, Chennai",
      date: "01/12/2024",
      badge: "Certified",
      skills: ["Java OOP", "Spring Boot", "JavaScript", "ReactJS", "MySQL", "Backend & Database Integration"],
      description: "Completed comprehensive training in Java OOP, Spring Boot, JavaScript, ReactJS, and MySQL, with practical exposure to developing scalable web applications and integrating backend services with relational databases."
    }
  ]
};

// Export for module/browser usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
