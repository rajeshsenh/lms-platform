export const categories = [
	{
		name: "Development",
		description:
			"Learn modern software development, including web technologies, programming languages, databases, software testing, and AI-powered development tools.",
		children: [
			{
				name: "Web Development",
				description:
					"Build responsive, interactive, and scalable web applications using modern frontend and backend technologies.",
				children: [
					{
						name: "JavaScript",
						description:
							"Master JavaScript fundamentals, ES6+, asynchronous programming, DOM manipulation, APIs, and modern development practices.",
					},
					{
						name: "ReactJS",
						description:
							"Build fast, reusable, and component-based user interfaces using React, Hooks, state management, and routing.",
					},
					{
						name: "Next.js",
						description:
							"Develop production-ready React applications with server-side rendering, static generation, API routes, and performance optimization.",
					},
					{
						name: "TypeScript",
						description:
							"Write scalable and type-safe JavaScript applications using TypeScript with interfaces, generics, decorators, and advanced typing.",
					},
				],
			},
			{
				name: "Data Science",
				description:
					"Explore artificial intelligence, machine learning, data analysis, and modern AI development frameworks.",
				children: [
					{
						name: "AI Agents & Agentic AI",
						description:
							"Design autonomous AI agents capable of reasoning, planning, memory management, tool usage, and workflow automation.",
					},
					{
						name: "Claude Code",
						description:
							"Learn to leverage Claude Code for AI-assisted programming, debugging, code reviews, refactoring, and software development.",
					},
					{
						name: "LangChain",
						description:
							"Build intelligent LLM-powered applications using LangChain for prompt engineering, retrieval, memory, agents, and workflows.",
					},
				],
			},
			{
				name: "Programming Languages",
				description:
					"Develop strong programming fundamentals by learning popular languages used for web, enterprise, AI, and systems development.",
				children: [
					{
						name: "Python",
						description:
							"Learn Python for web development, automation, data science, machine learning, scripting, and backend applications.",
					},
					{
						name: "Java",
						description:
							"Build enterprise-grade applications using Java with object-oriented programming, Spring Boot, concurrency, and microservices.",
					},
					{
						name: "Go",
						description:
							"Create fast and efficient backend services using Go with concurrency, networking, cloud-native development, and APIs.",
					},
					{
						name: "C++",
						description:
							"Master C++ for systems programming, game development, embedded systems, algorithms, and performance-critical applications.",
					},
				],
			},
			{
				name: "Database Design & Development",
				description:
					"Learn database modeling, SQL, NoSQL databases, optimization, indexing, and data management best practices.",
				children: [
					{
						name: "SQL",
						description:
							"Master SQL queries, joins, indexing, stored procedures, transactions, and relational database management.",
					},
					{
						name: "MySQL",
						description:
							"Build and manage relational databases using MySQL with performance tuning, replication, and security best practices.",
					},
					{
						name: "PostgreSQL",
						description:
							"Develop scalable applications using PostgreSQL with advanced SQL, JSON support, indexing, and high-performance queries.",
					},
					{
						name: "MongoDB",
						description:
							"Learn MongoDB for document-based database design, aggregation pipelines, indexing, replication, and scalable applications.",
					},
				],
			},
			{
				name: "Software Testing",
				description:
					"Ensure software quality through automated testing, API validation, functional testing, and quality assurance techniques.",
				children: [
					{
						name: "Pytest",
						description:
							"Write reliable unit, integration, and functional tests for Python applications using the Pytest testing framework.",
					},
					{
						name: "Postman",
						description:
							"Test REST APIs, automate API workflows, validate responses, and collaborate on API development using Postman.",
					},
					{
						name: "Selenium",
						description:
							"Automate web application testing using Selenium WebDriver for cross-browser functional and regression testing.",
					},
				],
			},
		],
	},
	{
		name: "Business",
		description:
			"Develop essential business skills, including entrepreneurship, communication, leadership, and project management to succeed in today's competitive workplace.",
		children: [
			{
				name: "Entrepreneurship",
				description:
					"Learn how to start, grow, and manage successful businesses through innovation, strategic planning, and effective decision-making.",
				children: [
					{
						name: "Business Fundamentals",
						description:
							"Understand the core principles of business, including operations, finance, marketing, organizational structure, and business planning.",
					},
					{
						name: "Business Strategy",
						description:
							"Learn to develop competitive strategies, analyze markets, identify opportunities, and drive sustainable business growth.",
					},
				],
			},
			{
				name: "Communication",
				description:
					"Build strong interpersonal, written, and verbal communication skills for professional success and effective collaboration.",
				children: [
					{
						name: "Communication Skills",
						description:
							"Improve verbal, written, and interpersonal communication to collaborate effectively with colleagues, clients, and stakeholders.",
					},
					{
						name: "Presentation Skills",
						description:
							"Create engaging presentations and confidently deliver ideas using storytelling, visual aids, and persuasive communication techniques.",
					},
					{
						name: "Public Speaking",
						description:
							"Develop confidence in public speaking by mastering speech delivery, audience engagement, body language, and presentation techniques.",
					},
				],
			},
			{
				name: "Management",
				description:
					"Master leadership, project management, and organizational skills to effectively manage teams, projects, and business operations.",
				children: [
					{
						name: "PMI",
						description:
							"Prepare for PMI certifications by learning project management frameworks, best practices, methodologies, and professional standards.",
					},
					{
						name: "Leadership",
						description:
							"Develop leadership skills to inspire teams, drive organizational success, resolve conflicts, and make strategic decisions.",
					},
					{
						name: "Project Management",
						description:
							"Learn to plan, execute, monitor, and successfully deliver projects using Agile, Scrum, Waterfall, and hybrid methodologies.",
					},
				],
			},
		],
	},
	{
		name: "Finance & Accounting",
		description:
			"Develop expertise in accounting, finance, taxation, compliance, and economics to manage financial operations and make informed business decisions.",
		children: [
			{
				name: "Taxes",
				description:
					"Learn tax regulations, financial reporting, and compliance practices for individuals, businesses, and organizations.",
				children: [
					{
						name: "Tax Preparation",
						description:
							"Learn how to prepare, file, and manage individual and business tax returns while ensuring compliance with tax regulations.",
					},
					{
						name: "Accounting",
						description:
							"Master accounting principles, financial statements, bookkeeping, auditing, and reporting for businesses and organizations.",
					},
					{
						name: "Corporate Finance",
						description:
							"Understand capital budgeting, financial planning, investment analysis, and corporate financial decision-making strategies.",
					},
					{
						name: "VAT",
						description:
							"Learn Value Added Tax (VAT) regulations, calculations, compliance requirements, filing procedures, and international VAT practices.",
					},
				],
			},
			{
				name: "Finance",
				description:
					"Explore financial management, banking, payment systems, and personal finance to build strong financial knowledge.",
				children: [
					{
						name: "Personal Finance",
						description:
							"Manage your personal finances through budgeting, saving, investing, debt management, retirement planning, and wealth creation.",
					},
					{
						name: "Banking",
						description:
							"Understand banking systems, financial products, digital banking, lending, credit management, and banking operations.",
					},
					{
						name: "Payments",
						description:
							"Learn modern payment technologies including digital wallets, payment gateways, card processing, UPI, and online payment systems.",
					},
				],
			},
			{
				name: "Compliance",
				description:
					"Develop knowledge of financial regulations, risk management, fraud prevention, and regulatory compliance standards.",
				children: [
					{
						name: "AML",
						description:
							"Understand Anti-Money Laundering (AML) regulations, customer due diligence, transaction monitoring, and compliance best practices.",
					},
					{
						name: "Fraud Analytics",
						description:
							"Learn data-driven techniques to detect, investigate, prevent, and mitigate financial fraud using analytics and machine learning.",
					},
					{
						name: "Criminology",
						description:
							"Study criminal behavior, financial crimes, cybercrime, law enforcement, and investigative methods within modern justice systems.",
					},
				],
			},
			{
				name: "Economics",
				description:
					"Understand economic theories, market behavior, data analysis, and global financial systems that influence business and policy decisions.",
				children: [
					{
						name: "Econometrics",
						description:
							"Apply statistical models and quantitative methods to analyze economic data, forecast trends, and support decision-making.",
					},
					{
						name: "Global Economics",
						description:
							"Explore international trade, globalization, monetary policy, economic development, and the factors shaping the global economy.",
					},
					{
						name: "Microeconomics",
						description:
							"Learn how individuals, households, and businesses make decisions regarding resource allocation, pricing, and market competition.",
					},
				],
			},
		],
	},
	{
		name: "IT & Software",
		description:
			"Develop technical expertise in IT infrastructure, cloud computing, cybersecurity, operating systems, enterprise software, and productivity tools.",
		children: [
			{
				name: "IT Certifications",
				description:
					"Prepare for industry-recognized IT certifications covering cloud computing, networking, security, and enterprise technologies.",
				children: [
					{
						name: "AWS",
						description:
							"Learn Amazon Web Services to build, deploy, and manage scalable cloud applications using core AWS services and best practices.",
					},
					{
						name: "Cisco",
						description:
							"Master Cisco networking technologies including routing, switching, wireless networking, and enterprise infrastructure management.",
					},
					{
						name: "Information Security",
						description:
							"Understand information security principles, risk management, security controls, encryption, and compliance frameworks.",
					},
				],
			},
			{
				name: "Network & Security",
				description:
					"Learn networking concepts and cybersecurity techniques to protect systems, applications, and enterprise infrastructure.",
				children: [
					{
						name: "Cybersecurity",
						description:
							"Protect digital assets by learning threat detection, vulnerability management, incident response, and security best practices.",
					},
					{
						name: "Ethical Hacking",
						description:
							"Discover ethical hacking techniques including penetration testing, vulnerability assessment, and offensive security methodologies.",
					},
					{
						name: "Network Security",
						description:
							"Secure enterprise networks using firewalls, VPNs, intrusion detection systems, access control, and network monitoring tools.",
					},
				],
			},
			{
				name: "Hardware",
				description:
					"Explore computer hardware, embedded systems, electronics, and microcontroller programming for modern devices and IoT applications.",
				children: [
					{
						name: "Embedded Systems",
						description:
							"Design and develop embedded software for real-time systems, IoT devices, and hardware-integrated applications.",
					},
					{
						name: "Arduino",
						description:
							"Build interactive electronics projects using Arduino boards, sensors, actuators, and embedded programming.",
					},
					{
						name: "Microcontroller",
						description:
							"Learn microcontroller architecture, programming, peripherals, communication protocols, and embedded application development.",
					},
				],
			},
			{
				name: "Operating Systems & Servers",
				description:
					"Master operating systems, command-line tools, server administration, automation, and scripting for enterprise environments.",
				children: [
					{
						name: "Linux",
						description:
							"Learn Linux administration, shell commands, file systems, process management, networking, and server configuration.",
					},
					{
						name: "PowerShell",
						description:
							"Automate Windows administration tasks using PowerShell scripting, cmdlets, and system management techniques.",
					},
					{
						name: "Shell Scripting",
						description:
							"Automate repetitive tasks and manage Linux servers efficiently using Bash and shell scripting techniques.",
					},
				],
			},
			{
				name: "Office Productivity",
				description:
					"Boost workplace productivity using Microsoft, Google, Apple, SAP, and Oracle business applications and collaboration tools.",
				children: [
					{
						name: "Microsoft",
						description:
							"Master Microsoft productivity and business applications for data analysis, collaboration, reporting, and workplace efficiency.",
						children: [
							{
								name: "Microsoft Excel",
								description:
									"Analyze data using Excel formulas, functions, PivotTables, charts, dashboards, and automation features.",
							},
							{
								name: "Microsoft Copilot",
								description:
									"Leverage AI-powered Microsoft Copilot to automate tasks, generate content, analyze data, and improve productivity.",
							},
							{
								name: "Microsoft Power BI",
								description:
									"Create interactive dashboards and business intelligence reports using Power BI for data visualization and analytics.",
							},
							{
								name: "Microsoft SharePoint",
								description:
									"Build collaborative intranet portals, document management systems, and team sites using Microsoft SharePoint.",
							},
						],
					},
					{
						name: "Apple",
						description:
							"Learn Apple's operating system and productivity applications for personal and professional use.",
						children: [
							{
								name: "macOS",
								description:
									"Master macOS features, system settings, productivity tools, file management, and security best practices.",
							},
							{
								name: "Mac Basics",
								description:
									"Get started with Mac computers by learning navigation, system preferences, shortcuts, and essential applications.",
							},
							{
								name: "iMovie",
								description:
									"Create and edit professional-quality videos using iMovie with transitions, effects, audio, and titles.",
							},
							{
								name: "Apple Keynote",
								description:
									"Design visually engaging presentations using Apple Keynote with animations, templates, and multimedia content.",
							},
						],
					},
					{
						name: "Google",
						description:
							"Increase productivity using Google's cloud-based collaboration, AI, and document management tools.",
						children: [
							{
								name: "Google Sheets",
								description:
									"Organize, analyze, and visualize data using Google Sheets formulas, charts, Pivot Tables, and collaboration features.",
							},
							{
								name: "Google NotebookLM",
								description:
									"Use Google's AI-powered NotebookLM to summarize documents, generate insights, and assist with research.",
							},
							{
								name: "Google Drive",
								description:
									"Store, organize, share, and collaborate on files securely using Google Drive's cloud storage platform.",
							},
						],
					},
					{
						name: "SAP",
						description:
							"Learn SAP enterprise software solutions for business process management, finance, logistics, and application development.",
						children: [
							{
								name: "SAP ABAP",
								description:
									"Develop enterprise applications using SAP ABAP with reports, forms, enhancements, and database programming.",
							},
							{
								name: "SAP MM",
								description:
									"Manage procurement, inventory, purchasing, and materials planning using SAP Materials Management.",
							},
							{
								name: "SAP FICO",
								description:
									"Learn financial accounting and controlling processes using SAP FICO for enterprise financial management.",
							},
						],
					},
					{
						name: "Oracle",
						description:
							"Develop expertise in Oracle databases, enterprise applications, and SQL for business solutions.",
						children: [
							{
								name: "Oracle SQL",
								description:
									"Write efficient SQL queries, optimize database performance, and manage Oracle relational databases.",
							},
							{
								name: "Oracle ERP",
								description:
									"Implement and manage Oracle ERP solutions for finance, procurement, supply chain, and business operations.",
							},
							{
								name: "Oracle Databases",
								description:
									"Administer Oracle databases, perform backup and recovery, optimize performance, and ensure data security.",
							},
						],
					},
				],
			},
		],
	},
	{
		name: "Personal Development",
		description:
			"Enhance your personal and professional growth by developing leadership, creativity, communication, motivation, and emotional well-being skills.",
		children: [
			{
				name: "Leadership",
				description:
					"Develop leadership qualities, strategic thinking, coaching abilities, and decision-making skills to inspire individuals and teams.",
				children: [
					{
						name: "Philosophy",
						description:
							"Explore philosophical concepts, critical thinking, ethics, and reasoning to improve personal growth and decision-making.",
					},
					{
						name: "Coaching",
						description:
							"Learn coaching techniques to mentor, motivate, and empower individuals and teams for personal and professional success.",
					},
					{
						name: "Decision Making",
						description:
							"Build effective decision-making skills using critical thinking, problem-solving techniques, risk assessment, and strategic planning.",
					},
				],
			},
			{
				name: "Creativity",
				description:
					"Unlock your creative potential through writing, storytelling, brainstorming, and innovative thinking techniques.",
				children: [
					{
						name: "Creative Writing",
						description:
							"Develop compelling stories, articles, and creative content by mastering writing techniques, storytelling, and character development.",
					},
					{
						name: "Writing a Book",
						description:
							"Learn how to plan, write, edit, publish, and market your own book from concept to completion.",
					},
				],
			},
			{
				name: "Influence",
				description:
					"Strengthen your ability to persuade, negotiate, communicate confidently, and positively influence others in personal and professional settings.",
				children: [
					{
						name: "Voice Training",
						description:
							"Improve vocal clarity, pronunciation, tone, breathing, and confidence for effective communication and public speaking.",
					},
					{
						name: "Negotiation",
						description:
							"Master negotiation strategies to achieve mutually beneficial outcomes in business, leadership, sales, and everyday interactions.",
					},
				],
			},
			{
				name: "Motivation",
				description:
					"Develop habits, mindset, and resilience to achieve personal goals, maximize productivity, and maintain long-term motivation.",
				children: [
					{
						name: "Personal Success",
						description:
							"Learn proven strategies for setting goals, building productive habits, managing time, and achieving lasting personal success.",
					},
					{
						name: "Neuroplasticity",
						description:
							"Understand how the brain adapts and rewires itself to improve learning, memory, habits, and lifelong personal development.",
					},
				],
			},
			{
				name: "Happiness",
				description:
					"Improve emotional well-being through mindfulness, meditation, coaching, and practical techniques for a balanced and fulfilling life.",
				children: [
					{
						name: "Life Coach Training",
						description:
							"Learn professional life coaching methods to help individuals achieve personal, career, and relationship goals.",
					},
					{
						name: "Mindfulness",
						description:
							"Practice mindfulness techniques to reduce stress, improve focus, increase self-awareness, and enhance emotional well-being.",
					},
					{
						name: "Meditation",
						description:
							"Learn meditation practices to improve mental clarity, reduce anxiety, enhance concentration, and support overall wellness.",
					},
				],
			},
		],
	},
];
