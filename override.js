// =============================================
// AWS Cloud Practitioner override.js
// =============================================

// ── Acronym Expansion (English AWS services only) ──
var ACRONYM_MAP = {
  "EC2": "Amazon Elastic Compute Cloud (EC2)",
  "S3": "Amazon Simple Storage Service (S3)",
  "EBS": "Amazon Elastic Block Store (EBS)",
  "EFS": "Amazon Elastic File System (EFS)",
  "RDS": "Amazon Relational Database Service (RDS)",
  "VPC": "Amazon Virtual Private Cloud (VPC)",
  "IAM": "AWS Identity and Access Management (IAM)",
  "SNS": "Amazon Simple Notification Service (SNS)",
  "SQS": "Amazon Simple Queue Service (SQS)",
  "ALB": "Application Load Balancer (ALB)",
  "NLB": "Network Load Balancer (NLB)",
  "ELB": "Elastic Load Balancing (ELB)",
  "KMS": "AWS Key Management Service (KMS)",
  "WAF": "AWS Web Application Firewall (WAF)",
  "DDoS": "Distributed Denial of Service (DDoS)",
  "CloudTrail": "AWS CloudTrail",
  "CloudWatch": "Amazon CloudWatch",
  "Config": "AWS Config",
  "Lambda": "AWS Lambda",
  "DynamoDB": "Amazon DynamoDB",
  "Redshift": "Amazon Redshift",
  "Aurora": "Amazon Aurora",
  "ElastiCache": "Amazon ElastiCache",
  "Glacier": "Amazon S3 Glacier",
  "Snowball": "AWS Snowball",
  "Direct Connect": "AWS Direct Connect",
  "API Gateway": "Amazon API Gateway",
  "Cognito": "Amazon Cognito",
  "Secrets Manager": "AWS Secrets Manager",
  "Systems Manager": "AWS Systems Manager",
  "CloudFormation": "AWS CloudFormation",
  "CodeCommit": "AWS CodeCommit",
  "CodeBuild": "AWS CodeBuild",
  "CodeDeploy": "AWS CodeDeploy",
  "CodePipeline": "AWS CodePipeline",
  "X-Ray": "AWS X-Ray",
  "SageMaker": "Amazon SageMaker",
  "Rekognition": "Amazon Rekognition",
  "Polly": "Amazon Polly",
  "Lex": "Amazon Lex",
  "Kinesis": "Amazon Kinesis",
  "EMR": "Amazon EMR (Big Data Processing)",
  "Glue": "AWS Glue",
  "QuickSight": "Amazon QuickSight",
  "SES": "Amazon Simple Email Service (SES)",
  "WorkSpaces": "Amazon WorkSpaces",
  "AppStream": "Amazon AppStream",
  "Connect": "Amazon Connect",
  "MQ": "Amazon MQ",
  "MSK": "Amazon Managed Streaming for Apache Kafka (MSK)",
  "DocumentDB": "Amazon DocumentDB",
  "Neptune": "Amazon Neptune",
  "QLDB": "Amazon Quantum Ledger Database (QLDB)",
  "Timestream": "Amazon Timestream",
  "IoT Core": "AWS IoT Core",
  "Macie": "Amazon Macie",
  "Detective": "Amazon Detective",
  "ACM": "AWS Certificate Manager (ACM)",
  "SSO": "AWS IAM Identity Center (SSO)",
  "Organizations": "AWS Organizations",
  "Control Tower": "AWS Control Tower",
  "Service Catalog": "AWS Service Catalog",
  "Elastic Beanstalk": "AWS Elastic Beanstalk",
  "Fargate": "AWS Fargate",
  "ECS": "Amazon Elastic Container Service (ECS)",
  "EKS": "Amazon Elastic Kubernetes Service (EKS)",
  "ECR": "Amazon Elastic Container Registry (ECR)",
  "App Mesh": "AWS App Mesh",
  "Cloud Map": "AWS Cloud Map",
  "Outposts": "AWS Outposts",
  "Storage Gateway": "AWS Storage Gateway",
  "DataSync": "AWS DataSync",
  "DMS": "AWS Database Migration Service (DMS)",
  "EventBridge": "Amazon EventBridge",
  "Step Functions": "AWS Step Functions",
  "SWF": "Amazon Simple Workflow Service (SWF)",
  "Batch": "AWS Batch",
  "GameLift": "Amazon GameLift",
  "AppFlow": "Amazon AppFlow",
  "GuardDuty": "Amazon GuardDuty",
  "Inspector": "Amazon Inspector",
  "Athena": "Amazon Athena",
  "CloudFront": "Amazon CloudFront",
  "Route 53": "Amazon Route 53",
  "Trusted Advisor": "AWS Trusted Advisor",
  "Compute Optimizer": "AWS Compute Optimizer",
  "Cost Explorer": "AWS Cost Explorer",
  "Budgets": "AWS Budgets",
  "Savings Plans": "AWS Savings Plans",
  "Spot Instances": "Amazon EC2 Spot Instances",
  "Reserved Instances": "Amazon EC2 Reserved Instances",
  "On-Demand Instances": "Amazon EC2 On-Demand Instances",
  "Dedicated Hosts": "Amazon EC2 Dedicated Hosts",
  "Auto Scaling": "AWS Auto Scaling",
  "ASG": "Auto Scaling Group (ASG)",
  "NAT Gateway": "NAT Gateway",
  "Internet Gateway": "Internet Gateway",
  "Virtual Private Gateway": "Virtual Private Gateway",
  "Customer Gateway": "Customer Gateway",
  "Transit Gateway": "AWS Transit Gateway",
  "Peering Connection": "VPC Peering Connection",
  "Endpoint": "VPC Endpoint",
  "Flow Logs": "VPC Flow Logs",
  "Network ACL": "Network Access Control List (NACL)",
  "Security Group": "Security Group",
  "ENI": "Elastic Network Interface (ENI)",
  "EIP": "Elastic IP Address (EIP)",
  "AZ": "Availability Zone (AZ)",
  "Multi-AZ": "Multi-Availability Zone (Multi-AZ)",
  "OLTP": "Online Transaction Processing (OLTP)",
  "OLAP": "Online Analytical Processing (OLAP)",
  "SQL": "Structured Query Language (SQL)",
  "NoSQL": "Not Only SQL (NoSQL)",
  "REST": "Representational State Transfer (REST)",
  "HTTP": "Hypertext Transfer Protocol (HTTP)",
  "HTTPS": "Hypertext Transfer Protocol Secure (HTTPS)",
  "TCP": "Transmission Control Protocol (TCP)",
  "UDP": "User Datagram Protocol (UDP)",
  "IP": "Internet Protocol (IP)",
  "DNS": "Domain Name System (DNS)",
  "SSL": "Secure Sockets Layer (SSL)",
  "TLS": "Transport Layer Security (TLS)",
  "MFA": "Multi-Factor Authentication (MFA)",
  "SSE": "Server-Side Encryption (SSE)",
  "HSM": "Hardware Security Module (HSM)",
  "FIPS": "Federal Information Processing Standards (FIPS)",
  "CVE": "Common Vulnerabilities and Exposures (CVE)",
  "SRT": "Shield Response Team (SRT)",
  "CDN": "Content Delivery Network (CDN)",
  "NFS": "Network File System (NFS)",
  "SMB": "Server Message Block (SMB)",
  "iSCSI": "Internet Small Computer Systems Interface (iSCSI)",
  "FIFO": "First-In-First-Out (FIFO)",
  "JSON": "JavaScript Object Notation (JSON)",
  "XML": "Extensible Markup Language (XML)",
  "YAML": "YAML Ain\'t Markup Language (YAML)",
  "ARN": "Amazon Resource Name (ARN)",
  "URL": "Uniform Resource Locator (URL)",
  "URI": "Uniform Resource Identifier (URI)",
  "IPSec": "Internet Protocol Security (IPSec)",
  "BGP": "Border Gateway Protocol (BGP)",
  "OSPF": "Open Shortest Path First (OSPF)",
  "RDP": "Remote Desktop Protocol (RDP)",
  "SSH": "Secure Shell (SSH)",
  "FTP": "File Transfer Protocol (FTP)",
  "SFTP": "SSH File Transfer Protocol (SFTP)",
  "FTPS": "FTP Secure (FTPS)",
  "SMTP": "Simple Mail Transfer Protocol (SMTP)",
  "IMAP": "Internet Message Access Protocol (IMAP)",
  "POP3": "Post Office Protocol 3 (POP3)",
  "WebSocket": "WebSocket",
  "gRPC": "gRPC Remote Procedure Calls (gRPC)",
  "GraphQL": "Graph Query Language (GraphQL)",
  "OData": "Open Data Protocol (OData)",
  "SOAP": "Simple Object Access Protocol (SOAP)",
  "CAPTCHA": "Completely Automated Public Turing Test (CAPTCHA)",
  "CSRF": "Cross-Site Request Forgery (CSRF)",
  "XSS": "Cross-Site Scripting (XSS)",
  "SQLi": "SQL Injection (SQLi)",
  "ACL": "Access Control List (ACL)",
  "RBAC": "Role-Based Access Control (RBAC)",
  "ABAC": "Attribute-Based Access Control (ABAC)",
  "IAM Policy": "IAM Policy",
  "IAM Role": "IAM Role",
  "IAM User": "IAM User",
  "IAM Group": "IAM Group",
  "Root Account": "AWS Root Account",
  "Access Key": "AWS Access Key",
  "Secret Key": "AWS Secret Key",
  "Session Token": "AWS Session Token",
  "STS": "AWS Security Token Service (STS)",
  "SAML": "Security Assertion Markup Language (SAML)",
  "OAuth": "Open Authorization (OAuth)",
  "OpenID": "OpenID",
  "LDAP": "Lightweight Directory Access Protocol (LDAP)",
  "Active Directory": "Active Directory",
  "Kerberos": "Kerberos",
  "NTLM": "NT LAN Manager (NTLM)",
  "SHA": "Secure Hash Algorithm (SHA)",
  "MD5": "Message Digest 5 (MD5)",
  "RSA": "Rivest–Shamir–Adleman (RSA)",
  "AES": "Advanced Encryption Standard (AES)",
  "DES": "Data Encryption Standard (DES)",
  "3DES": "Triple DES (3DES)",
  "PKI": "Public Key Infrastructure (PKI)",
  "CA": "Certificate Authority (CA)",
  "CSR": "Certificate Signing Request (CSR)",
  "CRT": "Certificate (CRT)",
  "PEM": "Privacy Enhanced Mail (PEM)",
  "DER": "Distinguished Encoding Rules (DER)",
  "PKCS": "Public-Key Cryptography Standards (PKCS)",
  "VPN": "Virtual Private Network (VPN)",
  "NAT": "Network Address Translation (NAT)",
  "PAT": "Port Address Translation (PAT)",
  "DHCP": "Dynamic Host Configuration Protocol (DHCP)",
  "API": "Application Programming Interface (API)",
  "SDK": "Software Development Kit (SDK)",
  "CLI": "Command Line Interface (CLI)",
  "GUI": "Graphical User Interface (GUI)",
  "IDE": "Integrated Development Environment (IDE)",
  "CI/CD": "Continuous Integration / Continuous Deployment (CI/CD)",
  "DevOps": "Development and Operations (DevOps)",
  "DevSecOps": "Development, Security, and Operations (DevSecOps)",
  "IaC": "Infrastructure as Code (IaC)",
  "GitOps": "Git Operations (GitOps)",
  "MLOps": "Machine Learning Operations (MLOps)",
  "DataOps": "Data Operations (DataOps)",
  "FinOps": "Financial Operations (FinOps)",
  "AIOps": "Artificial Intelligence for IT Operations (AIOps)",
  "ITIL": "Information Technology Infrastructure Library (ITIL)",
  "ITSM": "IT Service Management (ITSM)",
  "SLA": "Service Level Agreement (SLA)",
  "SLO": "Service Level Objective (SLO)",
  "SLI": "Service Level Indicator (SLI)",
  "QoS": "Quality of Service (QoS)",
  "RPO": "Recovery Point Objective (RPO)",
  "RTO": "Recovery Time Objective (RTO)",
  "MTTR": "Mean Time To Recovery (MTTR)",
  "MTBF": "Mean Time Between Failures (MTBF)",
  "HA": "High Availability (HA)",
  "FT": "Fault Tolerance (FT)",
  "DR": "Disaster Recovery (DR)",
  "BCP": "Business Continuity Plan (BCP)",
  "DLP": "Data Loss Prevention (DLP)",
  "IDS": "Intrusion Detection System (IDS)",
  "IPS": "Intrusion Prevention System (IPS)",
  "SIEM": "Security Information and Event Management (SIEM)",
  "SOAR": "Security Orchestration, Automation and Response (SOAR)",
  "EDR": "Endpoint Detection and Response (EDR)",
  "MDR": "Managed Detection and Response (MDR)",
  "XDR": "Extended Detection and Response (XDR)",
  "NTA": "Network Traffic Analysis (NTA)",
  "NDR": "Network Detection and Response (NDR)",
  "ZTNA": "Zero Trust Network Access (ZTNA)",
  "SASE": "Secure Access Service Edge (SASE)",
  "SSE": "Security Service Edge (SSE)",
  "CASB": "Cloud Access Security Broker (CASB)",
  "DAM": "Database Activity Monitoring (DAM)",
  "FIM": "File Integrity Monitoring (FIM)",
  "PAM": "Privileged Access Management (PAM)",
  "2FA": "Two-Factor Authentication (2FA)",
  "OTP": "One-Time Password (OTP)",
  "TOTP": "Time-based One-Time Password (TOTP)",
  "HOTP": "HMAC-based One-Time Password (HOTP)",
  "FIDO": "Fast Identity Online (FIDO)",
  "U2F": "Universal 2nd Factor (U2F)",
  "WebAuthn": "Web Authentication (WebAuthn)",
  "PKCE": "Proof Key for Code Exchange (PKCE)",
  "JWT": "JSON Web Token (JWT)",
  "JWE": "JSON Web Encryption (JWE)",
  "JWS": "JSON Web Signature (JWS)",
  "JWK": "JSON Web Key (JWK)",
  "OIDC": "OpenID Connect (OIDC)",
  "SCIM": "System for Cross-domain Identity Management (SCIM)",
  "AD": "Active Directory (AD)",
  "AAD": "Azure Active Directory (AAD)",
  "AWS AD": "AWS Directory Service",
  "Cloud Directory": "Amazon Cloud Directory",
  "Cognito User Pool": "Amazon Cognito User Pool",
  "Cognito Identity Pool": "Amazon Cognito Identity Pool",
  "Cognito Sync": "Amazon Cognito Sync",
  "Cognito Hosted UI": "Amazon Cognito Hosted UI",
  "Amplify Auth": "AWS Amplify Authentication",
  "Pinpoint Journeys": "Amazon Pinpoint Journeys",
  "EventBridge Pipes": "Amazon EventBridge Pipes",
  "EventBridge Scheduler": "Amazon EventBridge Scheduler",
  "MWAA": "Amazon Managed Workflows for Apache Airflow (MWAA)",
  "Kinesis Data Streams": "Amazon Kinesis Data Streams",
  "Kinesis Data Firehose": "Amazon Kinesis Data Firehose",
  "Kinesis Data Analytics": "Amazon Kinesis Data Analytics",
  "Kinesis Video Streams": "Amazon Kinesis Video Streams",
  "CloudWatch Logs": "Amazon CloudWatch Logs",
  "CloudWatch Metrics": "Amazon CloudWatch Metrics",
  "CloudWatch Alarms": "Amazon CloudWatch Alarms",
  "CloudWatch Dashboards": "Amazon CloudWatch Dashboards",
  "CloudWatch Events": "Amazon CloudWatch Events",
  "CloudWatch Synthetics": "Amazon CloudWatch Synthetics",
  "CloudWatch Insights": "Amazon CloudWatch Insights",
  "CloudWatch Contributor Insights": "Amazon CloudWatch Contributor Insights",
  "CloudWatch Application Insights": "Amazon CloudWatch Application Insights",
  "CloudWatch Container Insights": "Amazon CloudWatch Container Insights",
  "CloudWatch Lambda Insights": "Amazon CloudWatch Lambda Insights",
  "CloudTrail Lake": "AWS CloudTrail Lake",
  "CloudTrail Insights": "AWS CloudTrail Insights",
  "Config Rules": "AWS Config Rules",
  "Config Conformance Packs": "AWS Config Conformance Packs",
  "Config Aggregators": "AWS Config Aggregators",
  "Config Advanced Queries": "AWS Config Advanced Queries",
  "SSM": "AWS Systems Manager (SSM)",
  "SSM Agent": "AWS Systems Manager Agent",
  "SSM Session Manager": "AWS Systems Manager Session Manager",
  "SSM Run Command": "AWS Systems Manager Run Command",
  "SSM Patch Manager": "AWS Systems Manager Patch Manager",
  "SSM Automation": "AWS Systems Manager Automation",
  "SSM Maintenance Windows": "AWS Systems Manager Maintenance Windows",
  "SSM State Manager": "AWS Systems Manager State Manager",
  "SSM Inventory": "AWS Systems Manager Inventory",
  "SSM Compliance": "AWS Systems Manager Compliance",
  "SSM OpsCenter": "AWS Systems Manager OpsCenter",
  "SSM Explorer": "AWS Systems Manager Explorer",
  "SSM AppConfig": "AWS AppConfig",
  "SSM Change Calendar": "AWS Systems Manager Change Calendar",
  "SSM Documents": "AWS Systems Manager Documents",
  "SSM Parameters": "AWS Systems Manager Parameter Store",
  "Parameter Store": "AWS Systems Manager Parameter Store",
  "OpsWorks Stacks": "AWS OpsWorks Stacks",
  "OpsWorks for Chef": "AWS OpsWorks for Chef Automate",
  "OpsWorks for Puppet": "AWS OpsWorks for Puppet Enterprise",
  "CloudFormation Stack": "AWS CloudFormation Stack",
  "CloudFormation StackSet": "AWS CloudFormation StackSet",
  "CloudFormation Drift Detection": "AWS CloudFormation Drift Detection",
  "CloudFormation Change Sets": "AWS CloudFormation Change Sets",
  "CloudFormation Modules": "AWS CloudFormation Modules",
  "CloudFormation Registry": "AWS CloudFormation Registry",
  "CloudFormation Hooks": "AWS CloudFormation Hooks",
  "SAM": "AWS Serverless Application Model (SAM)",
  "CDK": "AWS Cloud Development Kit (CDK)",
  "Cloud9": "AWS Cloud9",
  "CodeStar": "AWS CodeStar",
  "CodeArtifact": "AWS CodeArtifact",
  "CodeGuru": "Amazon CodeGuru",
  "CodeGuru Reviewer": "Amazon CodeGuru Reviewer",
  "CodeGuru Profiler": "Amazon CodeGuru Profiler",
  "Device Farm": "AWS Device Farm",
  "Proton": "AWS Proton",
  "App2Container": "AWS App2Container",
  "Application Composer": "AWS Application Composer",
  "Copilot": "AWS Copilot",
  "CloudShell": "AWS CloudShell",
  "CloudWatch RUM": "Amazon CloudWatch RUM",
  "CloudWatch Evidently": "Amazon CloudWatch Evidently",
  "CloudWatch Logs Insights": "Amazon CloudWatch Logs Insights",
  "OpenSearch": "Amazon OpenSearch Service",
  "OpenSearch Serverless": "Amazon OpenSearch Serverless",
  "Elasticsearch": "Amazon Elasticsearch Service",
  "CloudSearch": "Amazon CloudSearch",
  "Kendra": "Amazon Kendra",
  "Comprehend": "Amazon Comprehend",
  "Comprehend Medical": "Amazon Comprehend Medical",
  "Translate": "Amazon Translate",
  "Transcribe": "Amazon Transcribe",
  "Transcribe Medical": "Amazon Transcribe Medical",
  "Personalize": "Amazon Personalize",
  "Forecast": "Amazon Forecast",
  "Fraud Detector": "Amazon Fraud Detector",
  "DevOps Guru": "Amazon DevOps Guru",
  "CodeWhisperer": "Amazon CodeWhisperer",
  "Q": "Amazon Q",
  "Bedrock": "Amazon Bedrock",
  "Titan": "Amazon Titan",
  "Claude": "Anthropic Claude",
  "Jurassic": "AI21 Jurassic",
  "Stable Diffusion": "Stability AI Stable Diffusion",
  "Nova": "Amazon Nova",
  "Trainium": "AWS Trainium",
  "Inferentia": "AWS Inferentia",
  "Neuron": "AWS Neuron",
  "Elastic Inference": "Amazon Elastic Inference",
  "NICE DCV": "NICE DCV",
  "Deadline Cloud": "AWS Deadline Cloud",
  "RoboMaker": "AWS RoboMaker",
  "SimSpace Weaver": "AWS SimSpace Weaver",
  "Lumberyard": "Amazon Lumberyard",
  "WorkSpaces Web": "Amazon WorkSpaces Web",
  "WorkSpaces Core": "Amazon WorkSpaces Core",
  "WorkSpaces Thin Client": "Amazon WorkSpaces Thin Client",
  "WorkDocs": "Amazon WorkDocs",
  "WorkDocs Drive": "Amazon WorkDocs Drive",
  "Chime": "Amazon Chime",
  "Chime SDK": "Amazon Chime SDK",
  "Contact Lens": "Amazon Connect Contact Lens",
  "HealthLake": "Amazon HealthLake",
  "DeepRacer": "AWS DeepRacer",
  "DeepLens": "AWS DeepLens",
  "DeepComposer": "AWS DeepComposer",
  "Panorama": "AWS Panorama",
  "Monitron": "Amazon Monitron",
  "Lookout for Equipment": "Amazon Lookout for Equipment",
  "Lookout for Metrics": "Amazon Lookout for Metrics",
  "Lookout for Vision": "Amazon Lookout for Vision",
  "SageMaker Studio": "Amazon SageMaker Studio",
  "SageMaker Canvas": "Amazon SageMaker Canvas",
  "SageMaker Ground Truth": "Amazon SageMaker Ground Truth",
  "SageMaker Model Monitor": "Amazon SageMaker Model Monitor",
  "SageMaker Clarify": "Amazon SageMaker Clarify",
  "SageMaker Debugger": "Amazon SageMaker Debugger",
  "SageMaker Experiments": "Amazon SageMaker Experiments",
  "SageMaker Pipelines": "Amazon SageMaker Pipelines",
  "SageMaker Feature Store": "Amazon SageMaker Feature Store",
  "SageMaker Inference Recommender": "Amazon SageMaker Inference Recommender",
  "SageMaker Serverless Inference": "Amazon SageMaker Serverless Inference",
  "SageMaker Async Inference": "Amazon SageMaker Asynchronous Inference",
  "SageMaker Batch Transform": "Amazon SageMaker Batch Transform",
  "SageMaker Processing": "Amazon SageMaker Processing",
  "SageMaker Training": "Amazon SageMaker Training",
  "SageMaker HyperParameter Tuning": "Amazon SageMaker HyperParameter Tuning",
  "SageMaker Autopilot": "Amazon SageMaker Autopilot",
  "SageMaker JumpStart": "Amazon SageMaker JumpStart",
  "SageMaker Model Registry": "Amazon SageMaker Model Registry",
  "SageMaker Model Cards": "Amazon SageMaker Model Cards",
  "SageMaker Projects": "Amazon SageMaker Projects",
  "SageMaker MLOps": "Amazon SageMaker MLOps",
  "Elastic Fabric Adapter": "Elastic Fabric Adapter",
  "Thinkbox": "Thinkbox",
  "Krakatoa": "Thinkbox Krakatoa",
  "Frost": "Thinkbox Frost",
  "Sequoia": "Thinkbox Sequoia",
  "XMesh": "Thinkbox XMesh",
  "Stoke": "Thinkbox Stoke",
  "Deadline": "Thinkbox Deadline",
  "TAM": "Technical Account Manager (TAM)",
  "CAF": "AWS Cloud Adoption Framework (CAF)",
  "SMS": "AWS Server Migration Service (SMS)",
  "MGN": "AWS Application Migration Service (MGN)",
  "HPC": "High Performance Computing (HPC)",
  "CORS": "Cross-Origin Resource Sharing (CORS)",
  "DDOS": "Distributed Denial of Service (DDoS)",
  "TCO": "Total Cost of Ownership (TCO)",
  "S3 TA": "S3 Transfer Acceleration (S3 TA)",
  "SSE-S3": "Server-Side Encryption with S3-Managed Keys (SSE-S3)",
  "SSE-KMS": "Server-Side Encryption with KMS-Managed Keys (SSE-KMS)",
  "SSE-C": "Server-Side Encryption with Customer-Provided Keys (SSE-C)"
};

function expandAcronyms(text) {
  if (!text) return text;
  var keys = Object.keys(ACRONYM_MAP).sort(function(a, b) { return b.length - a.length; });
  keys.forEach(function(key) {
    var esc = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    var re = new RegExp('\\\\b' + esc + '\\\\b', 'g');
    text = text.replace(re, ACRONYM_MAP[key]);
  });
  return text;
}

// ── Arabic toggle ────────────────────────────
var arOn = false;
function toggleAr() {
  arOn = !arOn;
  document.body.classList.toggle('ar', arOn);
  document.getElementById('trBtn').classList.toggle('on', arOn);
  document.getElementById('trBtn').textContent = arOn ? '🔤 English Only' : '🌐 Arabic Translation';
}

// ── Tab switching ────────────────────────────
document.querySelectorAll('.tab-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.tab-btn').forEach(function(b){ b.classList.remove('active'); });
    document.querySelectorAll('.panel').forEach(function(p){ p.classList.remove('active'); });
    btn.classList.add('active');
    var target = document.getElementById('panel-' + btn.dataset.tab);
    if (target) target.classList.add('active');
  });
});

// ── D Array Key Differences (25 comparisons) ──
var D = [
  {
    a: 'EC2',
    b: 'Lambda',
    diff: 'Virtual servers you manage (OS, scaling, patching). Persistent, hourly billing, max flexibility.',
    diff2: 'Serverless functions no server mgmt. Event-driven, billed per ms, 15-min max runtime.',
    diff_ar: 'سيرفرات افتراضية تديرها بنفسك (OS, scaling, patching). دائمة، فوترة بالساعة، أقصى مرونة.',
    diff2_ar: 'دوال Serverless بدون إدارة سيرفر. تعتمد على الأحداث، الفوترة بالمللي ثانية، أقصى زمن 15 دقيقة.',
    cost: 'EC2: Pay per hour even if idle. Lambda: 1M requests/month free, then ~$0.20 per 1M requests.',
    cost_ar: 'EC2: الدفع بالساعة حتى لو خامل. Lambda: 1 مليون طلب/شهر مجاناً، ثم ~$0.20 لكل 1M طلب.',
    use: 'EC2: Long-running apps, custom OS, gaming servers. Lambda: APIs, image processing, scheduled tasks.',
    use_ar: 'EC2: تطبيقات طويلة، OS مخصص، سيرفرات ألعاب. Lambda: APIs، معالجة صور، مهام مجدولة.',
    tip: '🎯 Exam tip: "no server management + event-driven" = Lambda. "Custom OS / persistent" = EC2.',
    tip_ar: '💡 نصيحة امتحان: "بدون إدارة سيرفر + حدثي" = Lambda. "OS مخصص/دائم" = EC2.'
  },
  {
    a: 'S3',
    b: 'EBS',
    diff: 'Object storage unlimited objects, accessible from anywhere, pay per GB stored. Not attached to EC2.',
    diff2: 'Block storage attached to one EC2 instance in same AZ. Like a virtual hard drive. Persistent.',
    diff_ar: 'تخزين كائنات غير محدود، يمكن الوصول من أي مكان، الدفع لكل GB. غير مرتبط بـ EC2.',
    diff2_ar: 'تخزين بلوك متصل بنسخة EC2 واحدة في نفس AZ. مثل هارد ديسك افتراضي. دائم.',
    cost: 'S3: $0.023/GB (Standard). EBS: $0.08/GB SSD. S3 is cheaper for large infrequent data.',
    cost_ar: 'S3: ~$0.023/GB. EBS: ~$0.08/GB SSD. S3 أرخص للبيانات الكبيرة غير المتكررة.',
    use: 'S3: Backups, static websites, media files, data lakes. EBS: Database files, OS volumes for EC2.',
    use_ar: 'S3: نسخ احتياطي، مواقع ثابتة، ملفات وسائط. EBS: ملفات قواعد بيانات، أقراص OS لـ EC2.',
    tip: '🎯 Exam tip: EBS = "attached to EC2". S3 = "global object storage". S3 survives EC2 termination.',
    tip_ar: '💡 نصيحة امتحان: EBS = "متصل بـ EC2". S3 = "تخزين كائنات عالمي". S3 يبقى حتى لو أنهيت EC2.'
  },
  {
    a: 'S3',
    b: 'EFS',
    diff: 'Object storage. Access via HTTP/SDK. No file system. Best for unstructured data at massive scale.',
    diff2: 'Shared file system (NFS). Multiple EC2 Linux instances access simultaneously. Auto-scales.',
    diff_ar: 'تخزين كائنات. وصول عبر HTTP/SDK. لا يوجد نظام ملفات. الأنسب للبيانات غير المهيكلة على نطاق ضخم.',
    diff2_ar: 'نظام ملفات مشترك (NFS). عدة نسخ EC2 Linux تصل معاً. يتوسع تلقائياً.',
    cost: 'S3: ~$0.023/GB. EFS: ~$0.30/GB (but scales automatically and you pay for what you use).',
    cost_ar: 'S3: ~$0.023/GB. EFS: ~$0.30/GB (لكنه يتوسع تلقائياً وتدفع على قد ما تستخدم).',
    use: 'S3: Images, videos, backups, static assets. EFS: Shared content dirs, CMS, container storage.',
    use_ar: 'S3: صور، فيديوهات، نسخ احتياطي. EFS: مجلدات مشتركة، CMS، تخزين حاويات.',
    tip: '🎯 Exam tip: "shared across multiple EC2" = EFS. "global object store" = S3. EFS = Linux only.',
    tip_ar: '💡 نصيحة امتحان: "مشترك عبر EC2 متعددة" = EFS. "تخزين كائنات عالمي" = S3. EFS = Linux فقط.'
  },
  {
    a: 'RDS',
    b: 'DynamoDB',
    diff: 'Managed relational DB (SQL). Supports MySQL, PostgreSQL, Oracle, SQL Server. OLTP workloads.',
    diff2: 'Fully managed NoSQL (key-value/document). Millisecond latency at any scale. Serverless option.',
    diff_ar: 'قاعدة بيانات علائقية مُدارة (SQL). تدعم MySQL, PostgreSQL, Oracle, SQL Server. أحمال OLTP.',
    diff2_ar: 'NoSQL مُدارة بالكامل (key-value/document). زمن استجابة بالملي ثانية على أي نطاق. خيار Serverless.',
    cost: 'RDS: Instance-based pricing (always running). DynamoDB: Pay per read/write capacity or on-demand.',
    cost_ar: 'RDS: تسعير حسب النسخة (شغال دايم). DynamoDB: دفع حسب سعة القراءة/الكتابة أو On-Demand.',
    use: 'RDS: ERP, e-commerce, legacy apps needing SQL joins. DynamoDB: Gaming, IoT, session management, mobile.',
    use_ar: 'RDS: ERP، تجارة إلكترونية، تطبيقات قديمة تحتاج SQL. DynamoDB: ألعاب، IoT، إدارة جلسات، موبايل.',
    tip: '🎯 Exam tip: "relational / SQL / ACID joins" = RDS. "NoSQL / millisecond / flexible schema" = DynamoDB.',
    tip_ar: '💡 نصيحة امتحان: "علائقي / SQL / ACID" = RDS. "NoSQL / ملي ثانية / schema مرن" = DynamoDB.'
  },
  {
    a: 'Security Group',
    b: 'Network ACL',
    diff: 'Stateful firewall at instance level. Allow rules only. Return traffic auto-allowed. Applied to EC2/ENI.',
    diff2: 'Stateless firewall at subnet level. Allow & Deny rules. Must define inbound AND outbound separately.',
    diff_ar: 'جدار ناري Stateful على مستوى النسخة. قواعد Allow فقط. الرد التلقائي مسموح. يُطبق على EC2/ENI.',
    diff2_ar: 'جدار ناري Stateless على مستوى الـ subnet. قواعد Allow & Deny. يجب تعريف inbound و outbound منفصلين.',
    cost: 'Both free. Security Groups are default choice; NACLs add subnet-level control.',
    cost_ar: 'كلاهما مجاني. SG هو الاختيار الافتراضي؛ NACLs تضيف تحكم على مستوى subnet.',
    use: 'SG: Per-instance rules (web server port 80). NACL: Block entire IP ranges at subnet level.',
    use_ar: 'SG: قواعد لكل نسخة (خادم ويب port 80). NACL: منع نطاقات IP كاملة على مستوى subnet.',
    tip: '🎯 Exam tip: "Stateful = Security Group". "Stateless = NACL". "Deny rule needed" = NACL.',
    tip_ar: '💡 نصيحة امتحان: "Stateful = Security Group". "Stateless = NACL". "محتاج Deny" = NACL.'
  },
  {
    a: 'CloudTrail',
    b: 'CloudWatch',
    diff: 'Audit log of ALL API calls who did what, when, from where. Governance & compliance. 90-day history.',
    diff2: 'Performance monitoring metrics, logs, alarms, dashboards. Operational visibility in real time.',
    diff_ar: 'سجل تدقيق لكل استدعاءات API من فعل ماذا ومتى ومن أين. حوكمة وامتثال. تاريخ 90 يوماً.',
    diff2_ar: 'مراقبة أداء Metrics، سجلات، إنذارات، لوحات بيانات. رؤية تشغيلية في الوقت الفعلي.',
    cost: 'CloudTrail: First trail free, additional trails charged. CloudWatch: Free basic metrics, detailed paid.',
    cost_ar: 'CloudTrail: أول trail مجاني، الإضافية مدفوعة. CloudWatch: Metrics أساسية مجاناً، مفصلة مدفوعة.',
    use: 'CloudTrail: Security audits, compliance, "who deleted that resource?". CloudWatch: CPU alerts, billing alarms.',
    use_ar: 'CloudTrail: تدقيق أمني، امتثال، "من حذف المورد؟". CloudWatch: إنذارات CPU، تنبيهات الفوترة.',
    tip: '🎯 Exam tip: "who did what API call?" = CloudTrail. "CPU spike alert / performance metric" = CloudWatch.',
    tip_ar: '💡 نصيحة امتحان: "من عمل إيه API Call؟" = CloudTrail. "ارتفاع CPU / أداء" = CloudWatch.'
  },
  {
    a: 'On-Demand',
    b: 'Reserved Instances',
    diff: 'Pay per second/hour, no commitment. Most expensive. Maximum flexibility for unpredictable workloads.',
    diff2: 'Commit 1 or 3 years save up to 72%. Standard (fixed) or Convertible (flexible type changes).',
    diff_ar: 'ادفع لكل ثانية/ساعة، بدون التزام. الأغلى. أقصى مرونة للأحمال غير المتوقعة.',
    diff2_ar: 'التزام 1 أو 3 سنوات وفر حتى 72%. Standard (ثابت) أو Convertible (تغيير نوع مرن).',
    cost: 'On-Demand: Full price. Reserved 1-yr: ~40% off. Reserved 3-yr full upfront: up to 72% off.',
    cost_ar: 'On-Demand: السعر الكامل. Reserved سنة: خصم ~40%. Reserved 3 سنوات مقدم: خصم حتى 72%.',
    use: 'On-Demand: Dev/test, spiky traffic, short projects. Reserved: 24/7 steady workloads like databases.',
    use_ar: 'On-Demand: تطوير/اختبار، حركة متقطعة، مشاريع قصيرة. Reserved: أحمال ثابتة 24/7 مثل قواعد البيانات.',
    tip: '🎯 Exam tip: "steady state / predictable / 24/7" = Reserved. "short-term / unpredictable" = On-Demand.',
    tip_ar: '💡 نصيحة امتحان: "حمل ثابت / متوقع / 24/7" = Reserved. "قصير / غير متوقع" = On-Demand.'
  },
  {
    a: 'Reserved Instances',
    b: 'Spot Instances',
    diff: 'Up to 72% discount. Guaranteed capacity. Cannot be interrupted. Good for steady workloads.',
    diff2: 'Up to 90% discount. Uses AWS spare capacity. Can be interrupted with 2-minute warning.',
    diff_ar: 'خصم حتى 72%. سعة مضمونة. لا يمكن مقاطعتها. مناسبة للأحمال الثابتة.',
    diff2_ar: 'خصم حتى 90%. تستخدم سعة AWS الفائضة. يمكن مقاطعتها مع إنذار دقيقتين.',
    cost: 'Reserved: 40–72% savings with commitment. Spot: Up to 90% savings but no guarantee.',
    cost_ar: 'Reserved: توفير 40–72% مع التزام. Spot: توفير حتى 90% لكن بدون ضمان.',
    use: 'Reserved: Databases, production apps. Spot: Batch jobs, data analysis, ML training, rendering.',
    use_ar: 'Reserved: قواعد بيانات، تطبيقات إنتاج. Spot: وظائف Batch، تحليل بيانات، تدريب ML.',
    tip: '🎯 Exam tip: "fault-tolerant / interruptible / batch" = Spot. "production / cannot interrupt" = Reserved.',
    tip_ar: '💡 نصيحة امتحان: "يتحمل الفشل / قابل للمقاطعة / Batch" = Spot. "إنتاج / لا ينقطع" = Reserved.'
  },
  {
    a: 'Shield Standard',
    b: 'Shield Advanced',
    diff: 'FREE automatic DDoS protection for all AWS customers. Protects against common layer 3/4 attacks.',
    diff2: 'PAID (~$3,000/mo). Advanced detection, Shield Response Team (SRT) 24/7, cost protection during attack.',
    diff_ar: 'مجاني حماية DDoS تلقائية لكل عملاء AWS. يحمي من هجمات layer 3/4 الشائعة.',
    diff2_ar: 'مدفوع (~$3,000/شهر). كشف متقدم، فريق استجابة (SRT) 24/7، حماية من التكاليف أثناء الهجوم.',
    cost: 'Standard: Free. Advanced: ~$3,000/month + data transfer fees.',
    cost_ar: 'Standard: مجاني. Advanced: ~$3,000/شهر + رسوم نقل بيانات.',
    use: 'Standard: All AWS customers automatically. Advanced: High-risk apps (finance, gaming, government).',
    use_ar: 'Standard: كل عملاء AWS تلقائياً. Advanced: تطبيقات عالية المخاطرة (بنوك، ألعاب، حكومة).',
    tip: '🎯 Exam tip: "SRT / 24x7 DDoS support / financial protection during attack" = Shield Advanced.',
    tip_ar: '💡 نصيحة امتحان: "SRT / دعم DDoS 24/7 / حماية مالية أثناء الهجوم" = Shield Advanced.'
  },
  {
    a: 'WAF',
    b: 'Shield',
    diff: 'Web Application Firewall Layer 7. Blocks SQL injection, XSS, bad bots, rate limiting. Application-aware.',
    diff2: 'DDoS protection Layer 3/4 (and 7 with Advanced). Absorbs volumetric attacks. Network level.',
    diff_ar: 'جدار ناري لتطبيقات الويب Layer 7. يمنع SQL injection، XSS، البوتات الضارة، تحديد المعدل. على مستوى التطبيق.',
    diff2_ar: 'حماية DDoS Layer 3/4 (و 7 مع Advanced). يمتص هجمات الحجم الكبير. على مستوى الشبكة.',
    cost: 'WAF: ~$5/month per WebACL + $1 per million requests. Shield Standard: Free.',
    cost_ar: 'WAF: ~$5/شهر لكل WebACL + $1 لكل مليون طلب. Shield Standard: مجاني.',
    use: 'WAF: Block specific HTTP attack patterns, protect APIs. Shield: Absorb large DDoS floods.',
    use_ar: 'WAF: منع أنماط هجمات HTTP محددة، حماية APIs. Shield: امتصاص فيضانات DDoS الكبيرة.',
    tip: '🎯 Exam tip: "SQL injection / XSS / application attacks" = WAF. "DDoS / volumetric" = Shield.',
    tip_ar: '💡 نصيحة امتحان: "SQL injection / XSS / هجمات تطبيقات" = WAF. "DDoS / حجم كبير" = Shield.'
  },
  {
    a: 'CloudFront',
    b: 'S3 Transfer Acceleration',
    diff: 'CDN caches and delivers content FROM edge locations TO users. Reduces read latency globally.',
    diff2: 'Speeds up UPLOADS to S3 by routing through AWS edge network instead of public internet.',
    diff_ar: 'CDN يخزن مؤقتاً ويوصّل المحتوى من مواقع الحافة إلى المستخدمين. يقلل زمن القراءة عالمياً.',
    diff2_ar: 'يسرّع الرفع إلى S3 عبر توجيهه خلال شبكة AWS الطرفية بدلاً من الإنترنت العام.',
    cost: 'CloudFront: Pay per GB transferred + HTTP requests. S3 TA: Additional fee on top of S3 pricing.',
    cost_ar: 'CloudFront: دفع لكل GB منقول + طلبات HTTP. S3 TA: رسوم إضافية فوق تسعير S3.',
    use: 'CloudFront: Stream video, serve static websites fast globally. S3 TA: Upload large files to S3 faster.',
    use_ar: 'CloudFront: بث فيديو، مواقع ثابتة بسرعة عالمياً. S3 TA: رفع ملفات كبيرة إلى S3 أسرع.',
    tip: '🎯 Exam tip: "accelerate download/read" = CloudFront. "accelerate upload to S3" = Transfer Acceleration.',
    tip_ar: '💡 نصيحة امتحان: "تسريع تحميل/قراءة" = CloudFront. "تسريع رفع إلى S3" = Transfer Acceleration.'
  },
  {
    a: 'VPN',
    b: 'Direct Connect',
    diff: 'Encrypted tunnel over public internet. Quick to set up (hours), cheaper, but variable bandwidth.',
    diff2: 'Dedicated private fiber connection to AWS. Consistent speed (1–10 Gbps), low latency, no internet.',
    diff_ar: 'نفق مشفر عبر الإنترنت العام. إعداد سريع (ساعات)، أرخص، لكن عرض النطاق متغير.',
    diff2_ar: 'اتصال ألياف خاص ومخصص لـ AWS. سرعة ثابتة (1–10 Gbps)، زمن استجابة منخفض، بدون إنترنت.',
    cost: 'VPN: ~$0.05/hour per connection. Direct Connect: Port fees + data transfer (more expensive).',
    cost_ar: 'VPN: ~$0.05/ساعة لكل اتصال. Direct Connect: رسوم منفذ + نقل بيانات (أغلى).',
    use: 'VPN: Small/medium hybrid workloads, backup connectivity. Direct Connect: Large data transfers, regulated industries.',
    use_ar: 'VPN: أحمال هجين صغيرة/متوسطة، اتصال احتياطي. Direct Connect: نقل بيانات ضخم، صناعات منظمة.',
    tip: '🎯 Exam tip: "consistent bandwidth / no public internet / dedicated line" = Direct Connect. "quick / cheap" = VPN.',
    tip_ar: '💡 نصيحة امتحان: "سرعة ثابتة / بدون إنترنت / خط مخصص" = Direct Connect. "سريع / رخيص" = VPN.'
  },
  {
    a: 'SNS',
    b: 'SQS',
    diff: 'Simple Notification Service Push model. One message to MANY subscribers simultaneously (fan-out). Topics.',
    diff2: 'Simple Queue Service Pull model. Messages queued until consumer pulls. Decouples producers/consumers.',
    diff_ar: 'SNS: نموذج Push. رسالة واحدة لمشتركين متعددين في آن واحد (fan-out). Topics.',
    diff2_ar: 'SQS: نموذج Pull. الرسائل في طابور حتى يسحبها المستهلك. يفصل المنتجين عن المستهلكين.',
    cost: 'SNS: First 1M notifications free. SQS: First 1M requests free/month.',
    cost_ar: 'SNS: أول 1M إشعار مجاناً. SQS: أول 1M طلب/شهر مجاناً.',
    use: 'SNS: Send alert to email + Lambda + SMS at once. SQS: Job queue for order processing, task decoupling.',
    use_ar: 'SNS: إرسال تنبيه لـ email + Lambda + SMS معاً. SQS: طابور مهام لمعالجة الطلبات، فصل المهام.',
    tip: '🎯 Exam tip: "fan-out / notify multiple" = SNS. "decouple / queue / buffer" = SQS.',
    tip_ar: '💡 نصيحة امتحان: "توزيع / إشعار متعدد" = SNS. "فصل / طابور / مخزن مؤقت" = SQS.'
  },
  {
    a: 'Multi-AZ RDS',
    b: 'Read Replica RDS',
    diff: 'High Availability synchronous standby in another AZ. Auto-failover if primary fails. NOT for reads.',
    diff2: 'Performance async replica for READ-ONLY traffic. Can be in same AZ, different AZ, or different Region.',
    diff_ar: 'توافر عالٍ نسخة احتياطية متزامنة في AZ أخرى. تحويل تلقائي إذا فشل الأساسي. ليس للقراءة.',
    diff2_ar: 'نسخة مكررة غير متزامنة للأداء للقراءة فقط. يمكن أن تكون في نفس AZ أو مختلفة أو منطقة مختلفة.',
    cost: 'Multi-AZ: Doubles cost (2 instances). Read Replica: Additional instance cost but improves read throughput.',
    cost_ar: 'Multi-AZ: يضاعف التكلفة (نسختين). Read Replica: تكلفة إضافية لكن يحسن إنتاجية القراءة.',
    use: 'Multi-AZ: Production databases needing HA. Read Replica: Reporting, analytics, read-heavy apps.',
    use_ar: 'Multi-AZ: قواعد بيانات إنتاج تحتاج HA. Read Replica: تقارير، تحليلات، تطبيقات كثيفة القراءة.',
    tip: '🎯 Exam tip: "disaster recovery / failover / HA" = Multi-AZ. "scale reads / reporting" = Read Replica.',
    tip_ar: '💡 نصيحة امتحان: "تعافي من كوارث / تحويل / HA" = Multi-AZ. "توسيع قراءة / تقارير" = Read Replica.'
  },
  {
    a: 'Aurora',
    b: 'RDS MySQL',
    diff: 'AWS-proprietary DB. 5x faster than MySQL. 6 copies across 3 AZs auto. Serverless option. Lower cost at scale.',
    diff2: 'Standard managed MySQL. Full MySQL compatibility. Simpler, familiar, wide ecosystem support.',
    diff_ar: 'قاعدة بيانات مملوكة لـ AWS. أسرع 5 مرات من MySQL. 6 نسخ عبر 3 AZs تلقائياً. خيار Serverless. أرخص على نطاق واسع.',
    diff2_ar: 'MySQL مُدارة قياسية. توافق كامل مع MySQL. أبسط، مألوفة، دعم واسع.',
    cost: 'Aurora: ~20% less than standard RDS at scale. RDS MySQL: Straightforward instance-based pricing.',
    cost_ar: 'Aurora: أقل ~20% من RDS القياسي على نطاق واسع. RDS MySQL: تسعير بسيط حسب النسخة.',
    use: 'Aurora: High-traffic apps needing performance + HA. RDS MySQL: Standard web apps, migrations from on-prem.',
    use_ar: 'Aurora: تطبيقات عالية الحركة تحتاج أداء + HA. RDS MySQL: تطبيقات ويب قياسية، ترحيل من on-prem.',
    tip: '🎯 Exam tip: "5x faster MySQL / 6 copies / AWS-native" = Aurora. "standard MySQL managed" = RDS.',
    tip_ar: '💡 نصيحة امتحان: "أسرع 5 مرات / 6 نسخ / AWS-native" = Aurora. "MySQL مُدارة قياسية" = RDS.'
  },
  {
    a: 'Redshift',
    b: 'RDS',
    diff: 'Data Warehouse (OLAP). Columnar storage. Petabyte scale. For complex analytics queries on historical data.',
    diff2: 'Relational DB (OLTP). Row-based storage. For day-to-day transactional operations (orders, users, inventory).',
    diff_ar: 'مستودع بيانات (OLAP). تخزين عمودي. نطاق Petabyte. للاستعلامات التحليلية المعقدة على البيانات التاريخية.',
    diff2_ar: 'قاعدة بيانات علائقية (OLTP). تخزين صففي. للعمليات اليومية (طلبات، مستخدمين، مخزون).',
    cost: 'Redshift: Node-based pricing (~$0.25/hr for dc2.large). RDS: Instance + storage pricing.',
    cost_ar: 'Redshift: تسعير حسب العقدة (~$0.25/ساعة لـ dc2.large). RDS: تسعير نسخة + تخزين.',
    use: 'Redshift: BI dashboards, data science, query across TBs. RDS: Shopping cart, banking transactions.',
    use_ar: 'Redshift: لوحات BI، علم بيانات، استعلام عبر TBs. RDS: سلة تسوق، معاملات بنكية.',
    tip: '🎯 Exam tip: "analytics / data warehouse / OLAP / historical" = Redshift. "transactions / OLTP" = RDS.',
    tip_ar: '💡 نصيحة امتحان: "تحليلات / مستودع بيانات / OLAP / تاريخي" = Redshift. "معاملات / OLTP" = RDS.'
  },
  {
    a: 'IAM User',
    b: 'IAM Role',
    diff: 'Permanent identity for a person or application. Has long-term credentials (password / access keys).',
    diff2: 'Temporary identity assumed by services, apps, or users. No long-term credentials. Cross-account access.',
    diff_ar: 'هوية دائمة لشخص أو تطبيق. لديه بيانات اعتماد طويلة المدى (كلمة مرور / access keys).',
    diff2_ar: 'هوية مؤقتة تأخذها الخدمات أو التطبيقات أو المستخدمون. لا توجد بيانات اعتماد دائمة. وصول عبر الحسابات.',
    cost: 'IAM is 100% free no charge for users, roles, or policies.',
    cost_ar: 'IAM مجاني 100%، لا توجد رسوم على المستخدمين أو الأدوار أو السياسات.',
    use: 'IAM User: Developer login, CI/CD pipeline keys. IAM Role: EC2 accessing S3, Lambda execution, cross-account.',
    use_ar: 'IAM User: دخول المطور، مفاتيح CI/CD. IAM Role: EC2 يصل إلى S3، تنفيذ Lambda، وصول عبر الحسابات.',
    tip: '🎯 Exam tip: "EC2 needs to access S3" = attach IAM Role. Never put access keys inside EC2 use roles!',
    tip_ar: '💡 نصيحة امتحان: "EC2 يحتاج الوصول لـ S3" = أرفق IAM Role. لا تضع access keys داخل EC2 استخدم roles!'
  },
  {
    a: 'GuardDuty',
    b: 'Inspector',
    diff: 'Threat detection ML-powered analysis of VPC Flow Logs, CloudTrail, DNS logs. Detects active threats.',
    diff2: 'Vulnerability assessment scans EC2 instances & containers for software CVEs and network exposures.',
    diff_ar: 'كشف تهديدات بتحليل ML لـ VPC Flow Logs و CloudTrail و DNS logs. يكشف التهديدات النشطة.',
    diff2_ar: 'تقييم الثغرات يفحص نسخ EC2 والحاويات بحثاً عن CVEs في البرامج والتعرضات الشبكية.',
    cost: 'GuardDuty: Based on GB analyzed. Inspector: Per instance/image scanned. Both have free trials.',
    cost_ar: 'GuardDuty: حسب GB المحلل. Inspector: كل نسخة/صورة ممسوحة. كلاهما له نسخة تجريبية مجانية.',
    use: 'GuardDuty: Detect compromised instances, crypto-mining, unusual API activity. Inspector: Find unpatched software.',
    use_ar: 'GuardDuty: كشف نسخ مخترقة، تعدين عملات، نشاط API غير عادي. Inspector: إيجاد برامج غير محدثة.',
    tip: '🎯 Exam tip: "unusual activity / threat detection / ML" = GuardDuty. "CVE / vulnerability scan" = Inspector.',
    tip_ar: '💡 نصيحة امتحان: "نشاط غير عادي / كشف تهديدات / ML" = GuardDuty. "CVE / فحص ثغرات" = Inspector.'
  },
  {
    a: 'CloudWatch',
    b: 'AWS Config',
    diff: 'Real-time monitoring metrics, logs, alarms. Answers: "Is my app healthy RIGHT NOW?" Operational.',
    diff2: 'Configuration history & compliance. Answers: "What did this resource look like 3 days ago?" Audit-focused.',
    diff_ar: 'مراقبة فورية metrics، سجلات، إنذارات. يجيب: "هل تطبيقي سليم الآن؟" تشغيلي.',
    diff2_ar: 'سجل التهيئة والامتثال. يجيب: "كيف كان شكل هذا المورد قبل 3 أيام؟" يركز على التدقيق.',
    cost: 'CloudWatch: Free basic metrics; custom metrics paid. Config: Per configuration item recorded.',
    cost_ar: 'CloudWatch: Metrics أساسية مجاناً؛ مخصصة مدفوعة. Config: كل عنصر تهيئة مسجل.',
    use: 'CloudWatch: CPU alerts, billing alarms, log analysis. Config: Compliance checks, configuration drift detection.',
    use_ar: 'CloudWatch: إنذارات CPU، تنبيهات فاتورة، تحليل سجلات. Config: فحوص امتثال، كشف انحراف التهيئة.',
    tip: '🎯 Exam tip: "track config changes over time / compliance" = Config. "real-time metric alarm" = CloudWatch.',
    tip_ar: '💡 نصيحة امتحان: "تتبع تغييرات التهيئة / امتثال" = Config. "إنذار metric فوري" = CloudWatch.'
  },
  {
    a: 'Savings Plans',
    b: 'Reserved Instances',
    diff: 'Flexible commitment $X/hour for 1–3 years. Applies across EC2, Lambda, Fargate, regions, sizes.',
    diff2: 'Specific commitment reserve exact instance type, region, OS. Less flexible but slightly higher discount.',
    diff_ar: 'التزام مرن $X/ساعة لمدة 1–3 سنوات. ينطبق على EC2 و Lambda و Fargate والمناطق والأحجام.',
    diff2_ar: 'التزام محدد بحجز نوع نسخة ومنطقة ونظام تشغيل بالضبط. أقل مرونة لكن خصم أعلى قليلاً.',
    cost: 'Savings Plans: up to 66% off. Reserved Instances: up to 72% off (Standard RI, 3-yr, full upfront).',
    cost_ar: 'Savings Plans: خصم حتى 66%. Reserved Instances: خصم حتى 72% (Standard RI، 3 سنوات، مقدم كامل).',
    use: 'Savings Plans: Mixed workloads, varied instance types, Lambda + EC2. Reserved: Stable, known instance types.',
    use_ar: 'Savings Plans: أعباء مختلطة، أنواع نسخ متنوعة. Reserved: أنواع نسخ ثابتة ومعروفة.',
    tip: '🎯 Exam tip: "flexibility across services" = Savings Plans. "maximum discount for specific instance" = Reserved.',
    tip_ar: '💡 نصيحة امتحان: "مرونة عبر الخدمات" = Savings Plans. "أقصى خصم لنسخة محددة" = Reserved.'
  },
  {
    a: 'Region',
    b: 'Availability Zone',
    diff: 'Large geographic area (e.g., us-east-1, ap-southeast-1). Contains multiple AZs. Data stays in region by default.',
    diff2: 'One or more data centers within a Region, physically separated, connected by low-latency fiber.',
    diff_ar: 'منطقة جغرافية كبيرة (مثلاً us-east-1). تحتوي على AZs متعددة. البيانات تبقى في المنطقة افتراضياً.',
    diff2_ar: 'مركز بيانات أو أكثر داخل Region، منفصلة فيزيائياً، متصلة بألياف منخفضة زمن الاستجابة.',
    cost: 'No cost for regions/AZs themselves. Data transfer between AZs in same region: ~$0.01/GB.',
    cost_ar: 'لا توجد تكلفة للمناطق/AZs نفسها. نقل البيانات بين AZs في نفس المنطقة: ~$0.01/GB.',
    use: 'Region: Choose for compliance, latency, cost. AZ: Deploy across multiple AZs for high availability.',
    use_ar: 'Region: اختر للامتثال، زمن الاستجابة، التكلفة. AZ: انشر عبر AZs متعددة للتوافر العالي.',
    tip: '🎯 Exam tip: "physical isolation within region" = AZ. "geographic isolation / data residency" = Region.',
    tip_ar: '💡 نصيحة امتحان: "عزل مادي داخل region" = AZ. "عزل جغرافي / إقامة بيانات" = Region.'
  },
  {
    a: 'Elastic IP',
    b: 'Public IP',
    diff: 'Static IP you own persists even when instance stopped. Can be re-associated instantly to another instance.',
    diff2: 'Dynamic IP assigned by AWS changes every time instance stops/starts. Free while instance is running.',
    diff_ar: 'IP ثابت تملكه يبقى حتى عند إيقاف النسخة. يمكن إعادة ربطه فوراً بنسخة أخرى.',
    diff2_ar: 'IP ديناميكي تحدده AWS يتغير كل مرة تتوقف/تبدأ فيها النسخة. مجاني أثناء تشغيل النسخة.',
    cost: 'Elastic IP: FREE when associated with running instance. CHARGED $0.005/hr when NOT associated (waste prevention).',
    cost_ar: 'Elastic IP: مجاني عندما يكون مرتبطاً بنسخة عاملة. يُفرض عليه $0.005/ساعة عندما غير مرتبط (لمنع الهدر).',
    use: 'Elastic IP: DNS records pointing to EC2, failover between instances. Public IP: Dev/test, temp servers.',
    use_ar: 'Elastic IP: سجلات DNS تشير إلى EC2، تحويل بين النسخ. Public IP: تطوير/اختبار، سيرفرات مؤقتة.',
    tip: '🎯 Exam tip: "static / persistent IP / DNS-friendly" = Elastic IP. "dynamic / changes on restart" = Public IP.',
    tip_ar: '💡 نصيحة امتحان: "ثابت / IP دائم / مناسب لـ DNS" = Elastic IP. "متغير / يتغير عند إعادة التشغيل" = Public IP.'
  }
];

// ── Render Key Differences Tab (runs immediately) ──
(function renderDiffs() {
  var cont = document.getElementById('diffsContainer');
  if (!cont) return;
  cont.innerHTML = '';

  D.forEach(function(d, idx) {
    var card = document.createElement('div');
    card.className = 'diff-c';
    card.style.cssText = 'margin-bottom:14px;';

    card.innerHTML =
      '<div class="diff-h">' +
        '<b>' + expandAcronyms(d.a) + '</b>' +
        '<span class="vs">VS</span>' +
        '<b>' + expandAcronyms(d.b) + '</b>' +
      '</div>' +
      '<div class="diff-b">' +
        '<div class="col"><b>' + expandAcronyms(d.a) + ':</b><br>' + expandAcronyms(d.diff) + (d.diff_ar ? '<br><span class="ar-only" style="display:none;margin-top:4px;color:var(--td);font-size:12px;direction:rtl;text-align:right;border-top:1px dashed var(--bsoft);padding-top:4px;">' + d.diff_ar + '</span>' : '') + '</div>' +
        '<div class="col"><b>' + expandAcronyms(d.b) + ':</b><br>' + expandAcronyms(d.diff2) + (d.diff2_ar ? '<br><span class="ar-only" style="display:none;margin-top:4px;color:var(--td);font-size:12px;direction:rtl;text-align:right;border-top:1px dashed var(--bsoft);padding-top:4px;">' + d.diff2_ar + '</span>' : '') + '</div>' +
      '</div>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-top:9px;">' +
        '<div style="background:rgba(168,213,6,0.06);border:1px solid rgba(168,213,6,0.15);border-radius:7px;padding:9px 12px;font-size:12px;color:#b0d830;">' +
          '<span style="font-family:var(--mono);font-size:10px;color:var(--g);display:block;margin-bottom:4px;text-transform:uppercase;letter-spacing:.06em;">💰 Cost</span>' +
          expandAcronyms(d.cost) +
          (d.cost_ar ? '<br><span class="ar-only" style="display:none;margin-top:4px;color:var(--td);font-size:12px;direction:rtl;text-align:right;border-top:1px dashed rgba(168,213,6,0.15);padding-top:4px;">' + d.cost_ar + '</span>' : '') +
        '</div>' +
        '<div style="background:rgba(255,255,255,0.03);border:1px solid var(--bsoft);border-radius:7px;padding:9px 12px;font-size:12px;color:var(--td);">' +
          '<span style="font-family:var(--mono);font-size:10px;color:var(--g);display:block;margin-bottom:4px;text-transform:uppercase;letter-spacing:.06em;">🎯 Use Cases</span>' +
          expandAcronyms(d.use) +
          (d.use_ar ? '<br><span class="ar-only" style="display:none;margin-top:4px;direction:rtl;text-align:right;border-top:1px dashed var(--bsoft);padding-top:4px;">' + d.use_ar + '</span>' : '') +
        '</div>' +
      '</div>' +
      (d.tip_ar ? '<div style="margin-top:9px;background:rgba(224,176,0,0.08);border:1px solid rgba(224,176,0,0.2);border-radius:7px;padding:8px 12px;font-family:var(--mono);font-size:11.5px;color:#e0c055;">' +
        expandAcronyms(d.tip) +
        '<br><span class="ar-only" style="display:none;margin-top:4px;color:#e0c055;font-size:11.5px;direction:rtl;text-align:right;border-top:1px dashed rgba(224,176,0,0.2);padding-top:4px;">' + d.tip_ar + '</span>' +
      '</div>' :
      '<div style="margin-top:9px;background:rgba(224,176,0,0.08);border:1px solid rgba(224,176,0,0.2);border-radius:7px;padding:8px 12px;font-family:var(--mono);font-size:11.5px;color:#e0c055;">' +
        expandAcronyms(d.tip) +
      '</div>');

    cont.appendChild(card);
  });
})();

// ── Beginner Analogies (Arabic) ────────────────────────
var ANALOGIES = {
  "Cloud Computing": "زي ما بتأجر شقة مفروشة وتدفع إيجار على قد الأيام اللي قعدتها، بدل ما تشتري وتبني بيت كامل.",
  "Amazon EC2": "كأنك بتأجر كمبيوتر عن بعد بمواصفات تختارها، وتقدر تقفله أو تشغله في أي وقت.",
  "Amazon S3": "هارد ديسك عملاق ومفتوح على النت، مبيتمليش أبداً! تخزن فيه أي ملفات وتوصلها من أي مكان.",
  "Amazon RDS": "جدول إكسيل ذكي ومنظم جداً أمازون بتديرهولك وتعمله نسخ احتياطي تلقائي.",
  "AWS Lambda": "كود بيشتغل بس لما تطلبه زي الـ Vending Machine، مابتدفعش غير لما تدوس الزرار.",
  "Amazon VPC": "شبكة واي فاي خاصة بيك مقفولة بكلمة سر جوه السحابة.",
  "Auto Scaling Group": "مطعم بيجيب جرسونات زيادة تلقائياً وقت الزحمة، ولما الزحمة تخف بيمشيهم.",
  "Elastic Load Balancer": "عسكري مرور واقف ينظم الطلبات ويوزعها على السيرفرات عشان مفيش سيرفر يقع.",
  "Amazon CloudFront": "مخازن فرعية لشركة شحن، بتحط فيها البضاعة قريبة من الزباين عشان توصلهم بسرعة.",
  "AWS IAM": "البواب بتاع العمارة، معاه كشف مين مسموح له يدخل ومين معاه مفتاح أي شقة."
};

// ── English Definitions for Beginners ─────────
var DEF_EN = {
  "Cloud Computing": "Delivering computing resources (servers, storage, databases) over the internet on a pay-as-you-go basis instead of owning physical hardware.",
  "High Availability": "Designing systems to remain operational even when some components fail, typically by spreading resources across multiple data centers (Availability Zones).",
  "Elasticity": "The ability to automatically add or remove computing resources on demand based on actual traffic or workload.",
  "Scalability": "The capability of a system to handle growing amounts of work by adding resources either making existing resources bigger (vertical) or adding more resources (horizontal).",
  "Fault Tolerance": "The ability of a system to continue operating properly even when one or more of its components fail, with zero interruption.",
  "AWS Region": "A geographic location containing multiple Availability Zones (data centers). Each Region is completely independent and isolated from others.",
  "Availability Zone (AZ)": "One or more data centers within an AWS Region, physically separated but connected by low-latency fiber optic networking.",
  "Edge Location": "A site that CloudFront uses to cache copies of content closer to users for faster delivery. Edge Locations are not Regions or AZs.",
  "Amazon EC2": "Virtual servers in the cloud that you can launch, configure, and manage. You choose the operating system, CPU, memory, and storage size.",
  "EC2 On-Demand": "Pay for compute capacity by the second with no long-term commitment. Ideal for short-term, unpredictable, or spiky workloads.",
  "EC2 Reserved Instances": "Reserve EC2 capacity for 1 or 3 years to get up to 72% discount compared to On-Demand. Best for steady-state predictable workloads.",
  "EC2 Spot Instances": "Use spare AWS compute capacity at up to 90% discount. Can be interrupted with a 2-minute notice. Perfect for batch processing and fault-tolerant workloads.",
  "EC2 Savings Plans": "A flexible pricing model offering up to 66% discount in exchange for a commitment to a consistent amount of compute usage ($/hour) for 1 or 3 years.",
  "AWS Lambda": "Run your code without provisioning or managing servers. You upload your code and Lambda runs it only when triggered, scaling automatically. Pay only per execution.",
  "Auto Scaling Group": "An AWS service that automatically launches or terminates EC2 instances based on demand, ensuring you have the right number of instances at all times.",
  "Elastic Load Balancer": "A service that automatically distributes incoming traffic across multiple EC2 instances or targets in multiple Availability Zones.",
  "AWS Fargate": "A serverless compute engine for containers. You package your application in containers, and Fargate runs them without you managing the underlying servers.",
  "Amazon S3": "An object storage service that stores unlimited amounts of data (files, images, backups) in buckets. Accessible from anywhere via the internet.",
  "S3 Storage Classes": "Different tiers of storage in Amazon S3 optimised for cost based on how often you access your data frequent, infrequent, or archive.",
  "Amazon EBS": "A block storage volume (like a virtual hard drive) that you attach to a single EC2 instance. Persistent data survives instance stops and terminations.",
  "Amazon EFS": "A scalable file storage system that multiple EC2 instances (Linux) can access simultaneously over NFS. Grows and shrinks automatically as you add or remove files.",
  "S3 Glacier": "A low-cost archive storage service designed for long-term backup and data retention. Retrieval times range from minutes to hours.",
  "Amazon VPC": "A logically isolated section of the AWS cloud where you can launch resources in a virtual network that you define, including IP ranges, subnets, and route tables.",
  "Security Group": "A virtual firewall that controls inbound and outbound traffic at the instance level. Stateful if you allow inbound traffic, the response is automatically allowed.",
  "Network ACL": "A firewall that controls traffic at the subnet level. Stateless you must define both inbound and outbound rules separately. Supports allow and deny rules.",
  "Amazon Route 53": "A Domain Name System (DNS) service that translates domain names into IP addresses. Also provides domain registration and health checking.",
  "Amazon CloudFront": "A Content Delivery Network (CDN) that delivers data, videos, and web pages to users globally with low latency by caching content at Edge Locations.",
  "AWS Direct Connect": "A dedicated private fiber connection from your on-premises data center to AWS, providing consistent network performance and bypassing the public internet.",
  "Amazon RDS": "A managed relational database service supporting MySQL, PostgreSQL, Oracle, SQL Server, and MariaDB. AWS handles backups, patching, and replication automatically.",
  "Amazon Aurora": "A MySQL and PostgreSQL-compatible relational database built for the cloud. 5x faster than standard MySQL with built-in security and automated backups.",
  "Amazon DynamoDB": "A fully managed NoSQL key-value and document database that delivers single-digit millisecond performance at any scale. Serverless option available.",
  "Amazon ElastiCache": "A managed caching service for Redis or Memcached that speeds up application performance by storing frequently accessed data in memory.",
  "Amazon Redshift": "A fast, petabyte-scale data warehouse service for analysing large datasets using SQL. Uses columnar storage and massively parallel processing.",
  "AWS IAM": "A free service that lets you manage access to AWS resources. Create users, groups, roles, and policies to define who can access what.",
  "IAM Policy": "A JSON document that defines permissions which actions are allowed or denied on which AWS resources. Attached to users, groups, or roles.",
  "AWS Organizations": "A service that lets you centrally manage multiple AWS accounts, apply policies across accounts, and consolidate billing for volume discounts.",
  "AWS KMS": "A managed service for creating and controlling encryption keys used to encrypt your data across AWS services. Integrated with S3, EBS, RDS, and Lambda.",
  "AWS Shield": "A managed DDoS (Distributed Denial of Service) protection service. Standard is free and automatic. Advanced ($3000/month) provides 24/7 protection.",
  "AWS WAF": "A Web Application Firewall that protects your web applications from common exploits like SQL injection and cross-site scripting (XSS).",
  "AWS CloudTrail": "A service that records every API call made in your AWS account who made it, when, from where, and what changed. Essential for security audits.",
  "Amazon GuardDuty": "A threat detection service that continuously monitors for malicious activity using machine learning. Analyses VPC Flow Logs, CloudTrail events, and DNS logs.",
  "AWS Trusted Advisor": "A service that inspects your AWS environment and provides recommendations to help you follow best practices in cost, performance, security, and fault tolerance.",
  "Amazon CloudWatch": "A monitoring service that collects metrics, logs, and events from AWS resources. Set alarms, create dashboards, and trigger automated actions.",
  "AWS CloudFormation": "An Infrastructure as Code (IaC) service that lets you define your entire AWS infrastructure in a JSON/YAML template and provision it repeatedly.",
  "AWS Config": "A service that records the configuration history of your AWS resources and evaluates them against desired policies for compliance.",
  "AWS Pricing Models": "The different ways you can pay for AWS On-Demand (no commitment), Reserved (1-3 year commitment for discounts), Spot (up to 90% off), and Savings Plans (flexible).",
  "AWS Cost Explorer": "A tool for visualising, understanding, and analysing your AWS costs and usage over time. Can forecast future costs up to 12 months ahead.",
  "AWS Budgets": "A service that lets you set custom cost and usage budgets and receive alerts when you exceed or are forecasted to exceed your defined thresholds.",
  "TCO Calculator": "A tool that estimates the Total Cost of Ownership comparing running your infrastructure on-premises versus on AWS.",
  "Consolidated Billing": "A feature of AWS Organizations that combines usage across all accounts to get volume discounts and a single monthly bill.",
  "AWS Support Plans": "Five tiers: Basic (free), Developer, Business, Enterprise On-Ramp, and Enterprise with different response times (15 min for Enterprise critical) and access to TAM (Technical Account Manager) in Enterprise.",
  "Shared Responsibility Model": "AWS is responsible for security OF the cloud (hardware, networking, managed services). You are responsible for security IN the cloud (data, IAM, OS patches on EC2).",
  "AWS Artifact": "A self-service portal for on-demand access to AWS compliance reports (SOC, ISO, PCI DSS) and legal agreements like BAA for HIPAA.",
  "Amazon SQS": "A message queuing service that decouples application components. Producers send messages to a queue, and consumers pull messages for processing.",
  "Amazon SNS": "A pub/sub messaging service that sends notifications to subscribers (email, SMS, Lambda, SQS) using a push model. Used for fan-out patterns.",
  "Amazon API Gateway": "A fully managed service that creates, publishes, and secures REST, HTTP, and WebSocket APIs at any scale. Acts as a front door for serverless backends.",
  "AWS Step Functions": "A serverless orchestration service that lets you coordinate multiple AWS services into visual workflows with steps, error handling, and parallel branches.",
  "Amazon Rekognition": "A service that adds image and video analysis to your applications using pre-trained AI. Detects objects, faces, text, and inappropriate content.",
  "Amazon SageMaker": "A fully managed machine learning platform to build, train, and deploy ML models at scale without managing infrastructure.",
  "Amazon Athena": "A serverless query service that lets you analyse data stored in S3 using standard SQL. Pay only for the data scanned by each query."
};

// ── Override Concepts Tab (Tab 1) ─────────────
function initOverrides() {
  var cCont = document.getElementById('conceptsContainer');
  if (cCont) {
    cCont.innerHTML = '';
    C.forEach(function(cat, ci) {
      var terms = T.filter(function(t) { return t.cat_en === cat.en; });
      var det = document.createElement('details');
      det.className = 'cg';
      if (ci === 0) det.open = true;
      var summ = document.createElement('summary');
      summ.innerHTML = cat.en +
        ' <span class="ar-only" style="font-family:var(--mono);color:var(--tm);font-size:10.5px;">(' + cat.ar + ')</span>' +
        '<span class="cnt">' + terms.length + ' services</span><span class="chev">▾</span>';
      det.appendChild(summ);
      var body = document.createElement('div');
      body.className = 'cgb';
      terms.forEach(function(t) {
        var qas = QA[t.term_en] || [];
        var card = document.createElement('div');
        card.className = 'tc-card';
        var qaH = '';
        qas.forEach(function(qa) {
          qaH += '<div class="sqa"><div class="q">' + expandAcronyms(qa.qe) + '</div><div class="a">' + expandAcronyms(qa.ae) + '</div><div class="a-ar">' + qa.aa + '</div></div>';
        });
        var mnemo = t.mnemonic ? '<div class="mnemo">' + expandAcronyms(t.mnemonic) + '</div>' : '';
        var kwChips = t.keywords.split('|').map(function(k){ return '<span class="chip">' + expandAcronyms(k.trim()) + '</span>'; }).join('');
        var defEn = DEF_EN[t.term_en] || t.keywords.split('|').slice(0,5).map(function(k){ return expandAcronyms(k.trim()); }).join(' · ');
        var analogyHTML = '';
        if (ANALOGIES[t.term_en]) {
          analogyHTML = '<div class="ar-only" style="margin-top:8px;padding:8px 12px;background:rgba(76,175,110,0.1);border-left:3px solid var(--ok);border-radius:4px;"><strong style="color:var(--ok);font-size:12px;">💡 Explanation:</strong><span style="font-size:13px;color:#fff;display:block;margin-top:4px;direction:rtl;text-align:right;">' + ANALOGIES[t.term_en] + '</span></div>';
        }
        var displayName = (t.term_en.indexOf('Amazon ') === 0 || t.term_en.indexOf('AWS ') === 0) ? t.term_en : expandAcronyms(t.term_en);
        card.innerHTML =
          '<div class="tc-head"><span class="tc-en">' + displayName + '</span><span class="tc-ar">' + t.term_ar + '</span></div>' +
          '<div class="tc-def">' + expandAcronyms(defEn) + '</div>' +
          '<div class="tc-def-ar">' + t.def_ar + '</div>' +
          analogyHTML +
          '<div class="kw-row" style="margin-top:8px;">' + kwChips + '</div>' +
          '<button class="stog" onclick="toggleStep(this)">🧩 Step by Step Sample Q&amp;A <span>▾</span></button>' +
          '<div class="sbody">' + qaH + mnemo + '</div>';
        body.appendChild(card);
      });
      det.appendChild(body);
      cCont.appendChild(det);
    });
  }

  // Override Keywords Tab (Tab 2)
  var kwCont = document.getElementById('kwContainer');
  if (kwCont) {
    kwCont.innerHTML = '';
    T.forEach(function(t) {
      var defEn = DEF_EN[t.term_en] || '';
      var chips = t.keywords.split('|').map(function(k){ return '<span class="chip">' + expandAcronyms(k.trim()) + '</span>'; }).join('');
      var mn = t.mnemonic ? '<div class="mnemo" style="margin-top:5px;">' + expandAcronyms(t.mnemonic) + '</div>' : '';
      var kwDisplayName = (t.term_en.indexOf('Amazon ') === 0 || t.term_en.indexOf('AWS ') === 0) ? t.term_en : expandAcronyms(t.term_en);
      var card = document.createElement('div');
      card.className = 'kw-c';
      card.innerHTML =
        '<span class="cat">' + expandAcronyms(t.cat_en) + '</span>' +
        '<span class="en">' + kwDisplayName + '</span>' +
        '<span class="ar">' + t.term_ar + '</span>' +
        '<div style="font-size:12px;color:var(--td);margin-bottom:4px;">' + expandAcronyms(defEn) + '</div>' +
        '<div class="ar-only" style="font-size:12px;color:var(--td);margin-bottom:8px;direction:rtl;text-align:right;border-bottom:1px dashed var(--bsoft);padding-bottom:8px;">' + t.def_ar + '</div>' +
        '<div class="kw-row">' + chips + '</div>' + mn;
      kwCont.appendChild(card);
    });
  }

  // Override Exam Models (Tab 4)
  var emCont = document.getElementById('examModels');
  if (emCont) {
    emCont.innerHTML = '';
    for (var i = 1; i <= 5; i++) {
      (function(num) {
        var card = document.createElement('div');
        card.className = 'ex-mc';
        card.style.borderLeft = '3px solid var(--ok)';
        card.innerHTML = '<div class="mn">0' + num + '</div><div class="ml">Interactive ' + num + '</div><div class="md">Instant Feedback<br>Immediate Feedback</div>';
        card.addEventListener('click', function() { startExam(num, true); });
        emCont.appendChild(card);
      })(i);
    }
    for (var j = 6; j <= 10; j++) {
      (function(num) {
        var card = document.createElement('div');
        card.className = 'ex-mc';
        card.style.borderLeft = '3px solid #e0a055';
        card.innerHTML = '<div class="mn">' + (num < 10 ? '0' : '') + num + '</div><div class="ml">Simulation ' + (num - 5) + '</div><div class="md">Real Exam Conditions<br>Real Exam Simulation</div>';
        card.addEventListener('click', function() { startExam(num, false); });
        emCont.appendChild(card);
      })(j);
    }
  }
}

// initOverrides() is called from the main script after data is loaded

// ── Explanation helper ────────────────────────
function getExpByText(enTxt, arTxt) {
  if (!window.QA) return 'Explanation not found.';
  for (var term in QA) {
    for (var i = 0; i < QA[term].length; i++) {
      if (QA[term][i].ae === enTxt || QA[term][i].aa === arTxt) {
        return 'This relates to: <b>' + term + '</b>';
      }
    }
  }
  for (var k = 0; k < T.length; k++) {
    if (T[k].def_ar === arTxt) {
      return 'This relates to: <b>' + T[k].term_en + '</b>';
    }
  }
  return 'This choice is a distractor verify with the correct answer explanation.';
}

// ── Override startExam ────────────────────────
window.startExam = function(num, isInteractive) {
  var pool = shuffle(Q).slice(0, 65);
  var qs = pool.map(function(q) {
    var opts = shuffle([
      { en: q.a_en, ar: q.a_ar, ok: true, exp: 'Correct definition of <b>' + q.term_en + '</b>.' },
      { en: q.distractors[0].en, ar: q.distractors[0].ar, ok: false, exp: getExpByText(q.distractors[0].en, q.distractors[0].ar) },
      { en: q.distractors[1].en, ar: q.distractors[1].ar, ok: false, exp: getExpByText(q.distractors[1].en, q.distractors[1].ar) },
      { en: q.distractors[2].en, ar: q.distractors[2].ar, ok: false, exp: getExpByText(q.distractors[2].en, q.distractors[2].ar) }
    ]);
    return { qe: q.q_en, qa: q.q_ar, ce: q.cat_en, ca: q.cat_ar, tip: q.tip_ar, opts: opts };
  });
  ES = { num: num, qs: qs, cur: 0, ans: {}, secs: 90 * 60, isInteractive: isInteractive };
  document.getElementById('examIntro').style.display = 'none';
  document.getElementById('resultsScreen').style.display = 'none';
  document.getElementById('examRunner').style.display = 'block';
  if (isInteractive) {
    document.getElementById('timerTxt').style.display = 'none';
    document.getElementById('submitBtn').textContent = 'Finish & See Results';
    clearInterval(window._et);
  } else {
    document.getElementById('timerTxt').style.display = 'block';
    document.getElementById('submitBtn').textContent = 'Submit Exam';
    startTimer();
  }
  renderNav();
  renderQ(0);
};

// ── Override renderQ ──────────────────────────
window.renderQ = function(idx) {
  ES.cur = idx;
  var q = ES.qs[idx];
  var LETTERS = ['A', 'B', 'C', 'D'];
  document.getElementById('progressTxt').textContent = 'Question ' + (idx + 1) + ' / ' + ES.qs.length;
  var area = document.getElementById('questionArea');
  var arShow = arOn ? ' show' : '';
  area.innerHTML =
    '<div class="q-card">' +
    '<span class="ctag">' + expandAcronyms(q.ce) + ' · ' + q.ca + '</span>' +
    '<div class="q-en">' + (idx + 1) + '. ' + expandAcronyms(q.qe) + '</div>' +
    '<div class="q-ar' + arShow + '">' + q.qa + '</div>' +
    '<button class="tr-q" id="tqBtn">' + (arOn ? '👁 Hide Arabic' : '🌐 Translate') + '</button>' +
    '<div id="optsArea"></div></div>';

  document.getElementById('tqBtn').addEventListener('click', function() {
    var qar = area.querySelector('.q-ar');
    var vis = qar.classList.toggle('show');
    area.querySelectorAll('.o-ar').forEach(function(el) { el.classList.toggle('show', vis); });
    document.getElementById('tqBtn').textContent = vis ? '👁 Hide Arabic' : '🌐 Translate';
  });

  var oa = document.getElementById('optsArea');
  var answered = ES.isInteractive && ES.ans[idx] !== undefined;

  q.opts.forEach(function(opt, oi) {
    var cls = 'opt';
    if (ES.ans[idx] === oi) cls += ' sel';
    if (answered) {
      if (opt.ok) cls += ' cor';
      else if (ES.ans[idx] === oi) cls += ' inc';
      cls += ' dis';
    }
    var div = document.createElement('div');
    div.className = cls;
    var inner =
      '<span class="L">' + LETTERS[oi] + '</span>' +
      '<div style="flex:1"><div class="o-en">' + expandAcronyms(opt.en) + '</div>' +
      '<div class="o-ar' + arShow + '">' + opt.ar + '</div>';
    if (answered) {
      var bg = opt.ok ? 'rgba(76,175,110,0.1)' : 'rgba(224,85,85,0.1)';
      var bc = opt.ok ? 'var(--ok)' : 'var(--err)';
      var label = opt.ok ? '✅ Correct. ' : '❌ Incorrect. ';
      inner += '<div style="margin-top:10px;font-size:12px;background:' + bg + ';padding:9px 11px;border-radius:6px;border-left:3px solid ' + bc + ';color:var(--t);">' + label + opt.exp + '</div>';
    }
    inner += '</div>';
    div.innerHTML = inner;
    div.addEventListener('click', function() {
      if (answered) return;
      ES.ans[idx] = oi;
      renderQ(idx);
      renderNav();
    });
    oa.appendChild(div);
  });
};
