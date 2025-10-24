import { useState, useEffect, useRef } from "react";

export default function ClfPracticeApp() {

  const QUESTIONS = [
    // Full 100-question array with id, q, options, answer, explanation
    /* Example placeholder, replace with real 100 questions */
  
  {
    "id": 1,
    "q": "An organization is seeking a fully managed service to create and publish interactive dashboards that can be accessed from any device. Which AWS service would be the most appropriate choice for this requirement?",
    "options": {
      "A": "Amazon Redshift",
      "B": "Amazon QuickSight",
      "C": "AWS Glue",
      "D": "Amazon EMR"
    },
    "answer": "B",
    "explanation": "Amazon QuickSight is a fully managed business intelligence service that makes it easy to create and publish interactive dashboards that include ML Insights. Dashboards can be accessed from any device.",
    "correct": "Amazon QuickSight is the correct answer (as explained above.)",
    "incorrect": {
      "A": "Amazon Redshift is incorrect as it is primarily a data warehousing service that allows users to analyze data using standard SQL and existing Business Intelligence tools. While it integrates with various visualization tools, including QuickSight, it is not a tool for creating and publishing dashboards itself.",
      "C": "AWS Glue is incorrect because it is a fully managed extract, transform, and load (ETL) service that makes it easy for users to prepare and load their data for analytics. It is not designed to create and publish interactive dashboards.",
      "D": "Amazon EMR is incorrect because, although it can process vast amounts of data across resizable clusters of Amazon EC2 instances, it is not a business intelligence tool designed to create and publish interactive dashboards."
    },
    "references": [
      "https://aws.amazon.com/quicksight/",
      "https://digitalcloud.training/aws-analytics-services/"
    ]
  },
  {
    "id": 2,
    "q": "A company is looking to develop a conversational chatbot that can interact dynamically with its customers through a natural language interface. Which AWS service should be utilized to facilitate this?",
    "options": {
      "A": "Amazon Lex",
      "B": "Amazon Transcribe",
      "C": "Amazon Comprehend",
      "D": "Amazon Textract"
    },
    "answer": "A",
    "explanation": "Amazon Lex is specifically designed to build conversational interfaces using voice and text, leveraging advanced deep learning functionalities to create chatbots that can engage with users naturally.",
    "correct": "Amazon Lex is the correct answer (as explained above.)",
    "incorrect": {
      "B": "Amazon Transcribe is incorrect because while it can convert speech to text, it is not designed to build conversational interfaces; its primary function is to transcribe audio files.",
      "C": "Amazon Comprehend is incorrect because this service primarily understands the sentiment, language, and entities in a text rather than facilitating conversational interfaces.",
      "D": "Amazon Textract is incorrect because its focus is on extracting text and data from scanned documents, which does not serve the purpose of creating a conversational chatbot."
    },
    "references": [
      "https://aws.amazon.com/lex/",
      "https://digitalcloud.training/aws-machine-learning/"
    ]
  },
  {
    "id": 3,
    "q": "In the AWS Cloud Adoption Framework, which phase focuses on identifying capability gaps and helping your organization align its readiness for cloud adoption?",
    "options": {
      "A": "Envision",
      "B": "Align",
      "C": "Launch",
      "D": "Scale"
    },
    "answer": "B",
    "explanation": "During the Align phase, organizations work to identify capability gaps and ensure their readiness for adopting cloud services, aligning their existing processes and systems with AWS requirements.",
    "correct": "Align is the correct answer (as explained above.)",
    "incorrect": {
      "A": "Envision is incorrect because, in this phase, organizations are mainly focused on defining their vision and objectives for cloud adoption, rather than identifying and addressing the capability gaps that exist in their current setup.",
      "C": "Launch is incorrect because this phase is more about initiating and launching new services or processes based on the strategies and plans devised in the earlier phases. It isn't primarily focused on identifying capability gaps.",
      "D": "Scale is incorrect because this phase involves scaling the implemented strategies and solutions to maximize the benefits of cloud adoption. It is centered on optimizing the solutions rather than identifying capability gaps."
    },
    "references": [
      "https://d1.awsstatic.com/whitepapers/aws_cloud_adoption_framework.pdf"
    ]
  },
  {
    "id": 4,
    "q": "When an organization leverages the AWS Cloud Adoption Framework for migrating to the cloud, which two of the following would most likely be the primary stakeholders involved in the process? (Select TWO.)",
    "options": {
      "A": "Chief Information Officers (CIOs)",
      "B": "Engineers",
      "C": "Chief Financial Officers (CFOs)",
      "D": "Project Managers",
      "E": "IT Architects"
    },
    "answer": "A,E",
    "explanation": "CIOs oversee the entire migration process and ensure IT strategies align with business objectives. IT Architects design the cloud infrastructure to support the organization's IT strategies efficiently.",
    "correct": "Chief Information Officers (CIOs) and IT Architects are the correct answers (as explained above.)",
    "incorrect": {
      "B": "Engineers is incorrect. Engineers are not the primary stakeholders in this context as their role is generally more involved in the execution phase, rather than the strategic planning and decision-making processes that CIOs and IT Architects engage in.",
      "C": "Chief Financial Officers (CFOs) is incorrect. CFOs, while involved in budgetary considerations, would not typically be a primary stakeholder in the technical and strategic aspects of cloud adoption guided by the Cloud Adoption Framework.",
      "D": "Project Managers is incorrect. Project Managers could potentially be stakeholders, especially in large migrations involving coordinated efforts across many teams. However, their role would typically be more to manage the project timeline and resources rather than being a primary stakeholder setting strategic directions."
    },
    "references": [
      "https://aws.amazon.com/cloud-adoption-framework/"
    ]
  },
  {
    "id": 5,
    "q": "According to the AWS Well-Architected Framework, what change management steps should be taken to achieve reliability in the AWS Cloud? (Select TWO.)",
    "options": {
      "A": "Use AWS Config to generate an inventory of AWS resources",
      "B": "Use service limits to prevent users from creating or making changes to AWS resources",
      "C": "Use AWS CloudTrail to record AWS API calls into an auditable log file",
      "D": "Use AWS Certificate Manager to create a catalog of approved services",
      "E": "Use Amazon GuardDuty to record API activity to an S3 bucket"
    },
    "answer": "A,C",
    "explanation": "AWS Config tracks configuration state and changes over time. CloudTrail audits who made what API calls on what resources at what time, helping identify changes that cause reliability issues.",
    "correct": "Use AWS Config to generate an inventory of AWS resources and Use AWS CloudTrail to record AWS API calls into an auditable log file are the correct answers.",
    "incorrect": {
      "B": "Use service limits to prevent users from creating or making changes to AWS resources is incorrect. Service limits result in a maximum limit for launching resources, but you can still make changes to existing resources (so long as you don't exceed the limit).",
      "D": "Use AWS Certificate Manager to create a catalog of approved services is incorrect. Certificate manager is used for issuing and managing SSL/TLS certificates, it does not maintain a catalog of approved services.",
      "E": "Use Amazon GuardDuty to record API activity to an S3 bucket is incorrect. GuardDuty does not record API activity to an S3 bucket."
    },
    "references": [
      "https://d1.awsstatic.com/whitepapers/architecture/AWS-Reliability-Pillar.pdf",
      "https://digitalcloud.training/architecting-for-the-cloud/"
    ]
  },
  {
    "id": 6,
    "q": "Which AWS Cloud design principles can help increase reliability? (Select TWO.)",
    "options": {
      "A": "Using monolithic architecture",
      "B": "Measuring overall efficiency",
      "C": "Testing recovery procedures",
      "D": "Adopting a consumption model",
      "E": "Automatically recovering from failure"
    },
    "answer": "C,E",
    "explanation": "Recovery procedures should always be tested ahead of any outage. Implementing automatic recovery when possible reduces operational burden and potential downtime associated with failures.",
    "correct": "Testing recovery procedures and Automatically recovering from failure are the correct answers.",
    "incorrect": {
      "A": "Using monolithic architecture is incorrect. A monolithic architecture means you have multiple components of an application running on a single system. This results in a bigger issue if that system fails. A distributed architecture is preferred.",
      "B": "Measuring overall efficiency is incorrect. Efficiency has more of a bearing on cost management than reliability.",
      "D": "Adopting a consumption model is incorrect. A consumption model has benefits more aligned with cost and agility than reliability."
    },
    "references": [
      "https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/",
      "https://digitalcloud.training/architecting-for-the-cloud/"
    ]
  },
  {
    "id": 7,
    "q": "A startup eCommerce company needs to quickly deliver new website features in an iterative manner, minimizing the time to market. Which AWS Cloud feature allows this?",
    "options": {
      "A": "Elasticity",
      "B": "High availability",
      "C": "Agility",
      "D": "Reliability"
    },
    "answer": "C",
    "explanation": "Agility means new IT resources are only a click away, reducing the time to make resources available from weeks to minutes, dramatically increasing organizational agility.",
    "correct": "Agility is the correct answer.",
    "incorrect": {
      "B": "High availability is incorrect as this is associated with increased resilience, not agility.",
      "A": "Elasticity is incorrect as this associated with the ability to adjust to demand and reduce the need to guess capacity requirements.",
      "D": "Reliability is incorrect as this does not assist with bringing features to market faster."
    },
    "references": [
      "https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html",
      "https://digitalcloud.training/aws-cloud-computing-concepts/"
    ]
  },
  {
    "id": 8,
    "q": "Which AWS service is suitable for an event-driven workload?",
    "options": {
      "A": "Amazon EC2",
      "B": "AWS Elastic Beanstalk",
      "C": "AWS Lambda",
      "D": "Amazon Open 3D Engine"
    },
    "answer": "C",
    "explanation": "AWS Lambda is an event-driven service. You can configure event notifications that trigger Lambda functions, such as when data is uploaded to an S3 bucket.",
    "correct": "AWS Lambda is the correct answer.",
    "incorrect": {
      "A": "Amazon EC2 is incorrect as this is not an event-driven service.",
      "B": "AWS Elastic Beanstalk is incorrect as this is not an event-driven service.",
      "D": "Amazon Open 3D Engine is incorrect as this is a game engine service."
    },
    "references": [
      "https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html",
      "https://digitalcloud.training/aws-compute-services/"
    ]
  },
  {
    "id": 9,
    "q": "Which AWS service can be used to run Docker containers?",
    "options": {
      "A": "Amazon RedShift",
      "B": "Amazon ECR",
      "C": "AWS Fargate",
      "D": "Amazon AMI"
    },
    "answer": "C",
    "explanation": "AWS Fargate is a serverless compute engine for containers that works with Amazon ECS and EKS. It removes the need to provision and manage servers.",
    "correct": "AWS Fargate is the correct answer.",
    "incorrect": {
      "A": "Amazon RedShift is incorrect. Amazon RedShift is a data warehousing solution, and is unable to run containers.",
      "B": "Amazon ECR is incorrect. Amazon Elastic Container Registry (ECR) is a fully-managed Docker container registry that makes it easy for developers to store, manage, and deploy Docker container images.",
      "D": "Amazon AMI is incorrect. Amazon Machine Images (AMI) store configuration information for Amazon EC2 instances."
    },
    "references": [
      "https://aws.amazon.com/fargate/",
      "https://digitalcloud.training/aws-compute-services/"
    ]
  },
  {
    "id": 10,
    "q": "The AWS Cost Management tools give users the ability to do which of the following? (Select TWO.)",
    "options": {
      "A": "Terminate any AWS resource automatically if budget thresholds are exceeded",
      "B": "Break down AWS costs by day, service, and linked AWS account",
      "C": "Create budgets and receive notifications if current or forecasted usage exceeds the budgets",
      "D": "Switch automatically to Reserved Instances or Spot Instances, whichever is most cost-effective",
      "E": "Move data stored in Amazon S3 to a more cost-effective storage class"
    },
    "answer": "B,C",
    "explanation": "AWS Cost Management tools allow you to organize and track cost and usage data, break down costs by various dimensions, and create budgets with notifications for current or forecasted usage.",
    "correct": "Break down AWS costs by day, service, and linked AWS account and Create budgets and receive notifications if current or forecasted usage exceeds the budgets are the correct answers.",
    "incorrect": {
      "A": "Terminate any AWS resource automatically if budget thresholds are exceeded is incorrect. These tools do not terminate all resources, manipulate resources, or make changes to pricing models. It is however possible to terminate some resources using AWS Budgets Actions.",
      "D": "Switch automatically to Reserved Instances or Spot Instances, whichever is most cost-effective is incorrect as explained above.",
      "E": "Move data stored in Amazon S3 to a more cost-effective storage class is incorrect as explained above."
    },
    "references": [
      "https://aws.amazon.com/aws-cost-management/",
      "https://digitalcloud.training/aws-billing-and-pricing/"
    ]
  },
  {
    "id": 11,
    "q": "Which pricing model will interrupt a running Amazon EC2 instance if capacity becomes temporarily unavailable?",
    "options": {
      "A": "On-Demand Instances",
      "B": "Standard Reserved Instances",
      "C": "Spot Instances",
      "D": "Convertible Reserved Instances"
    },
    "answer": "C",
    "explanation": "Amazon EC2 Spot Instances are available at up to 90% discount. When AWS needs to reclaim capacity, you get a 2-minute warning and then your instances are terminated.",
    "correct": "Spot Instances is the correct answer.",
    "incorrect": {
      "A": "On-Demand Instances is incorrect. With all other pricing models your instances will not be terminated by AWS once they are running.",
      "B": "Standard Reserved Instances is incorrect as explained above.",
      "D": "Convertible Reserved Instances is incorrect as explained above."
    },
    "references": [
      "https://aws.amazon.com/ec2/spot/",
      "https://digitalcloud.training/aws-billing-and-pricing/"
    ]
  },
  {
    "id": 12,
    "q": "Which of the following statements about AWS's pay-as-you-go pricing model is correct?",
    "options": {
      "A": "It results in reduced capital expenditures",
      "B": "It requires payment up front for AWS services",
      "C": "It is relevant only for Amazon EC2, Amazon S3, and Amazon DynamoDB",
      "D": "It reduces operational expenditures"
    },
    "answer": "A",
    "explanation": "The pay-as-you-go pricing model means you only pay for services and consumption you use. You pay a monthly bill (operational expenditure), which reduces capital expenditure.",
    "correct": "It results in reduced capital expenditures is the correct answer.",
    "incorrect": {
      "B": "It requires payment up front for AWS services is incorrect. You can pay upfront for some services such as EC2 reserved instances to get better pricing but most services are offered on a consumption basis.",
      "C": "It is relevant only for Amazon EC2, Amazon S3, and Amazon DynamoDB is incorrect. This is not true most AWS services are offered on a pay-as-you-go pricing model.",
      "D": "It reduces operational expenditures is incorrect. This is not true, it reduces capital expenditures."
    },
    "references": [
      "https://aws.amazon.com/pricing/",
      "https://digitalcloud.training/aws-billing-and-pricing/"
    ]
  },
  {
    "id": 13,
    "q": "Which AWS service or feature helps restrict the AWS service, resources, and individual API actions the users and roles in each member account can access?",
    "options": {
      "A": "Amazon Cognito",
      "B": "AWS Organizations",
      "C": "AWS Shield",
      "D": "AWS Firewall Manager"
    },
    "answer": "B",
    "explanation": "AWS Organizations offers Service Control Policies (SCPs) that provide central control over the maximum available permissions for all accounts in your organization.",
    "correct": "AWS Organizations is the correct answer.",
    "incorrect": {
      "A": "Amazon Cognito is incorrect as this service is used for providing sign-in and sign-up services for mobile applications.",
      "C": "AWS Shield is incorrect as this is a security service for protecting against DDoS attacks.",
      "D": "AWS Firewall Manager is incorrect as this service is used for managing various security services within AWS."
    },
    "references": [
      "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html"
    ]
  },
  {
    "id": 14,
    "q": "What is the most efficient way to establish network connectivity from on-premises to multiple VPCs in different AWS Regions?",
    "options": {
      "A": "Use AWS Direct Connect",
      "B": "Use AWS VPN",
      "C": "Use AWS Client VPN",
      "D": "Use an AWS Transit Gateway"
    },
    "answer": "D",
    "explanation": "AWS Transit Gateway enables customers to connect their VPCs and on-premises networks to a single gateway, acting as a hub that controls how traffic is routed among all connected networks.",
    "correct": "Use an AWS Transit Gateway is the correct answer.",
    "incorrect": {
      "A": "Use AWS Direct Connect is incorrect as this only connects you to a single Amazon VPC, not multiple VPCs in different Regions.",
      "B": "Use AWS VPN is incorrect as this is a point-to-point connection between an on-premises location and a single Amazon VPC.",
      "C": "Use AWS Client VPN is incorrect as this service allows end users to connect to AWS using a VPN client."
    },
    "references": [
      "https://aws.amazon.com/transit-gateway/",
      "https://digitalcloud.training/aws-networking-services/"
    ]
  },
  {
    "id": 15,
    "q": "A web application running on AWS has been received malicious requests from the same set of IP addresses. Which AWS service can help secure the application and block the malicious traffic?",
    "options": {
      "A": "AWS IAM",
      "B": "Amazon GuardDuty",
      "C": "Amazon SNS",
      "D": "AWS WAF"
    },
    "answer": "D",
    "explanation": "AWS Web Application Firewall (WAF) is used to protect web applications or APIs against common web exploits. Rules can be created that block traffic based on source IP address.",
    "correct": "AWS WAF is the correct answer.",
    "incorrect": {
      "A": "AWS IAM is incorrect. The Identity and Access Management service is used for creating users, groups, roles and policies. It is not used for controlling network access.",
      "B": "Amazon GuardDuty is incorrect. This is a service that analyzes your resources using anomaly detection and machine learning. It can alert and trigger other tools to take action but it is not a network firewall service.",
      "C": "Amazon SNS is incorrect as this is service is used for sending notifications using a publisher/subscriber model."
    },
    "references": [
      "https://aws.amazon.com/waf/",
      "https://digitalcloud.training/aws-security-services/"
    ]
  },
  {
    "id": 16,
    "q": "Which AWS service provides the ability to detect inadvertent data leaks of personally identifiable information (PII) and user credential data?",
    "options": {
      "A": "Amazon GuardDuty",
      "B": "Amazon Inspector",
      "C": "Amazon Macie",
      "D": "AWS Shield"
    },
    "answer": "C",
    "explanation": "Amazon Macie uses machine learning and pattern matching to discover and protect sensitive data in Amazon S3, including personally identifiable information (PII).",
    "correct": "Amazon Macie is the correct answer.",
    "incorrect": {
      "A": "Amazon GuardDuty is incorrect. This is a service that analyzes your resources using anomaly detection and machine learning. It does not detect personally identifiable information.",
      "B": "Amazon Inspector is incorrect. Amazon Inspector automatically assesses applications for exposure, vulnerabilities, and deviations from best practices. It does not detect personally identifiable information.",
      "D": "AWS Shield is incorrect. This service is involved with protecting your resources of distributed denial of service (DDoS) attacks."
    },
    "references": [
      "https://aws.amazon.com/macie/",
      "https://digitalcloud.training/aws-security-services/"
    ]
  },
  {
    "id": 17,
    "q": "Which of the following acts as a virtual firewall at the Amazon EC2 instance level to control traffic for one or more instances?",
    "options": {
      "A": "Route table",
      "B": "Virtual private gateways (VPG)",
      "C": "Security groups",
      "D": "Network Access Control Lists (ACL)"
    },
    "answer": "C",
    "explanation": "A security group is an instance-level firewall that controls traffic that reaches (ingress) and is sent out from (egress) EC2 instances.",
    "correct": "Security groups is the correct answer.",
    "incorrect": {
      "D": "Network Access Control Lists (ACL) is incorrect as this is subnet-level firewall. You do not attach a Network ACL to an instance, you attach it to a subnet.",
      "B": "Virtual private gateways (VPG) is incorrect. A VPG is the Amazon side of an AWS Managed VPN.",
      "A": "Route table is incorrect as this is not a firewall but a table of routes for directing traffic between subnets within a VPC."
    },
    "references": [
      "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html",
      "https://digitalcloud.training/aws-networking-services/"
    ]
  },
  {
    "id": 18,
    "q": "A company is using the AWS CLI and programmatic access of AWS resources from its on-premises network. What is a mandatory requirement in this scenario?",
    "options": {
      "A": "Using an AWS Direct Connect connection",
      "B": "Using an AWS access key and a secret key",
      "C": "Using Amazon API Gateway",
      "D": "Using an Amazon EC2 key pair"
    },
    "answer": "B",
    "explanation": "Access keys (access key ID and secret access key) are long-term credentials used to sign programmatic requests to the AWS CLI or AWS API.",
    "correct": "Using an AWS access key and a secret key is the correct answer.",
    "incorrect": {
      "A": "Using an AWS Direct Connect connection is incorrect. It is not a requirement that you use a Direct Connect connection. You can access public services via the API using the internet. For private services you can use Direct Connect, a VPN, or a bastion host.",
      "C": "Using Amazon API Gateway is incorrect. You do not need API Gateway for programmatic access to the AWS API.",
      "D": "Using an Amazon EC2 key pair is incorrect. A key pair is used to securely access EC2 resources and should not be confused with access keys."
    },
    "references": [
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html",
      "https://digitalcloud.training/aws-identity-and-access-management/"
    ]
  },
  {
    "id": 19,
    "q": "Under the AWS shared responsibility model, which of the following are customer responsibilities? (Select TWO.)",
    "options": {
      "A": "Setting up server-side encryption on an Amazon S3 bucket",
      "B": "Amazon RDS instance patching",
      "C": "Network and firewall configurations",
      "D": "Physical security of data center facilities",
      "E": "Compute capacity availability"
    },
    "answer": "A,C",
    "explanation": "Customers are responsible for encrypting data at rest and in transit, and for setting network and firewall configurations such as Network ACLs, Security Groups, and OS-level firewalls.",
    "correct": "Setting up server-side encryption on an Amazon S3 bucket and Network and firewall configurations are the correct answers.",
    "incorrect": {
      "B": "Amazon RDS instance patching is incorrect. With RDS you can define the maintenance window but AWS actually perform the patching for you.",
      "D": "Physical security of data center facilities is incorrect as this is security of the cloud and is an AWS responsibility.",
      "E": "Compute capacity availability is incorrect as this is an AWS responsibility."
    },
    "references": [
      "https://aws.amazon.com/compliance/shared-responsibility-model/",
      "https://digitalcloud.training/aws-shared-responsibility-model/"
    ]
  },
  {
    "id": 20,
    "q": "Based on the shared responsibility model, which of the following security and compliance tasks is AWS responsible for?",
    "options": {
      "A": "Granting access to individuals and services",
      "B": "Encrypting data in transit",
      "C": "Updating Amazon EC2 host firmware",
      "D": "Updating operating systems"
    },
    "answer": "C",
    "explanation": "AWS is responsible for updating Amazon EC2 host firmware. This is considered 'security of the cloud.' All other tasks are customer responsibilities.",
    "correct": "Updating Amazon EC2 host firmware is the correct answer.",
    "incorrect": {
      "A": "Granting access to individuals and services is incorrect. This is something a customer must perform to control access to the resources they use on AWS.",
      "B": "Encrypting data in transit is incorrect. Encryption at rest and in-transit is a customer responsibility.",
      "D": "Updating operating systems is incorrect. Customers are responsible for patching operating systems on Amazon EC2. AWS are only responsible for the host servers."
    },
    "references": [
      "https://aws.amazon.com/compliance/shared-responsibility-model/",
      "https://digitalcloud.training/aws-shared-responsibility-model/"
    ]
  },
  {
    "id": 21,
    "q": "Under the shared responsibility model, which of the following tasks are the responsibility of the AWS customer? (Select TWO.)",
    "options": {
      "A": "Ensuring that application data is encrypted at rest",
      "B": "Ensuring that AWS NTP servers are set to the correct time",
      "C": "Ensuring that users have received security training in the use of AWS services",
      "D": "Ensuring that access to data centers is restricted",
      "E": "Ensuring that hardware is disposed of properly"
    },
    "answer": "A,C",
    "explanation": "Customers are responsible for encrypting data at rest and in transit, and for properly training their staff in security best practices for AWS services they use.",
    "correct": "Ensuring that application data is encrypted at rest and Ensuring that users have received security training in the use of AWS services are the correct answers.",
    "incorrect": {
      "B": "Ensuring that AWS NTP servers are set to the correct time is incorrect. Network Time Protocol (NTP) servers are an AWS responsibility.",
      "D": "Ensuring that access to data centers is restricted is incorrect as this is security of the cloud and is an AWS responsibility.",
      "E": "Ensuring that hardware is disposed of properly is incorrect as this is an AWS responsibility."
    },
    "references": [
      "https://aws.amazon.com/compliance/shared-responsibility-model/",
      "https://digitalcloud.training/aws-shared-responsibility-model/"
    ]
  },
  {
    "id": 22,
    "q": "Which AWS service can serve a static website?",
    "options": {
      "A": "Amazon S3",
      "B": "Amazon Route 53",
      "C": "Amazon QuickSight",
      "D": "AWS X-Ray"
    },
    "answer": "A",
    "explanation": "You can use Amazon S3 to host a static website by configuring an S3 bucket for website hosting and uploading your website content.",
    "correct": "Amazon S3 is the correct answer.",
    "incorrect": {
      "B": "Amazon Route 53 is incorrect. This is an intelligent DNS service.",
      "C": "Amazon QuickSight is incorrect. Amazon QuickSight is a fast, cloud-powered business intelligence service that makes it easy to deliver insights to everyone in your organization.",
      "D": "AWS X-Ray is incorrect. This is used for tracing and debugging applications."
    },
    "references": [
      "https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html",
      "https://digitalcloud.training/aws-storage-services/"
    ]
  },
  {
    "id": 23,
    "q": "Which AWS service is designed to be used for operational analytics?",
    "options": {
      "A": "Amazon EMR",
      "B": "Amazon Athena",
      "C": "Amazon QuickSight",
      "D": "Amazon Elasticsearch Service"
    },
    "answer": "D",
    "explanation": "Amazon Elasticsearch Service is used for operational analytics such as application monitoring, log analytics, and clickstream analytics, allowing you to search, explore, and visualize data in near real-time.",
    "correct": "Amazon Elasticsearch Service is the correct answer.",
    "incorrect": {
      "A": "Amazon EMR is incorrect. For big data processing using the Spark and Hadoop frameworks, Amazon EMR provides a managed service for processing vast amounts data.",
      "B": "Amazon Athena is incorrect. Amazon Athena is used to analyze data directly in S3 and Glacier using standard SQL queries.",
      "C": "Amazon QuickSight is incorrect. Amazon QuickSight provides a fast, cloud-powered business analytics service, that that makes it easy to build stunning visualizations and rich dashboards that can be accessed from any browser or mobile device."
    },
    "references": [
      "https://aws.amazon.com/elasticsearch-service/",
      "https://aws.amazon.com/big-data/datalakes-and-analytics/",
      "https://digitalcloud.training/additional-aws-services/"
    ]
  },
  {
    "id": 24,
    "q": "Which AWS service makes it easy to coordinate the components of distributed applications as a series of steps in a visual workflow?",
    "options": {
      "A": "Amazon SWF",
      "B": "AWS Step Functions",
      "C": "Amazon SNS",
      "D": "Amazon SES"
    },
    "answer": "B",
    "explanation": "AWS Step Functions lets you coordinate multiple AWS services into serverless workflows, allowing you to build visual workflows that enable fast translation of business requirements into technical requirements.",
    "correct": "AWS Step Functions is the correct answer.",
    "incorrect": {
      "A": "Amazon SWF is incorrect. Amazon SWF helps developers build, run, and scale background jobs that have parallel or sequential steps. SWF is not a visual workflow tool.",
      "C": "Amazon SNS is incorrect. Amazon Simple Notification Service (SNS) is a highly available, durable, secure, fully managed pub/sub messaging service.",
      "D": "Amazon SES is incorrect. Amazon Simple Email Service (Amazon SES) is a cloud-based email sending service designed to help digital marketers and application developers send marketing, notification, and transactional emails."
    },
    "references": [
      "https://aws.amazon.com/step-functions/",
      "https://digitalcloud.training/additional-aws-services/"
    ]
  },
  {
    "id": 25,
    "q": "A Cloud Practitioner is creating the business process workflows associated with an order fulfilment system. Which AWS service can assist with coordinating tasks across distributed application components?",
    "options": {
      "A": "AWS STS",
      "B": "Amazon SQS",
      "C": "Amazon SWF",
      "D": "Amazon SNS"
    },
    "answer": "C",
    "explanation": "Amazon Simple Workflow Service (SWF) makes it easy to coordinate work across distributed application components, supporting use cases including business process workflows and analytics pipelines.",
    "correct": "Amazon SWF is the correct answer.",
    "incorrect": {
      "A": "AWS STS is incorrect. AWS Security Token Service (STS) is used for requesting temporary credentials.",
      "B": "Amazon SQS is incorrect. Amazon Simple Queue Service (SQS) is a message queue used for decoupling application components.",
      "D": "Amazon SNS is incorrect. Amazon Simple Notification Service (SNS) is a web service that makes it easy to set up, operate, and send notifications from the cloud. SNS supports notifications over multiple transports including HTTP/HTTPS, Email/Email-JSON, SQS and SMS."
    },
    "references": [
      "https://aws.amazon.com/swf/",
      "https://digitalcloud.training/additional-aws-services/"
    ]
  },
  {
    "id": 26,
    "q": "Which of the following are pillars from the five pillars of the AWS Well-Architected Framework? (Select TWO.)",
    "options": {
      "A": "Resilience",
      "B": "Operational excellence",
      "C": "Confidentiality",
      "D": "Economics",
      "E": "Performance efficiency"
    },
    "answer": "B,E",
    "explanation": "The five pillars of the AWS Well-Architected Framework are operational excellence, security, reliability, performance efficiency, and cost optimization.",
    "correct": "Operational excellence and Performance efficiency are the correct answers.",
    "incorrect": {
      "A": "Resilience is incorrect as this is not one of the five pillars.",
      "C": "Confidentiality is incorrect as this is not one of the five pillars.",
      "D": "Economics is incorrect as this is not one of the five pillars."
    },
    "references": [
      "https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/",
      "https://digitalcloud.training/architecting-for-the-cloud/"
    ]
  },
  {
    "id": 27,
    "q": "Which type of scaling does Amazon EC2 Auto Scaling provide?",
    "options": {
      "A": "Vertical",
      "B": "Linear",
      "C": "Horizontal",
      "D": "Incremental"
    },
    "answer": "C",
    "explanation": "Amazon EC2 Auto Scaling scales horizontally by launching and terminating EC2 instances based on actual demand for your application.",
    "correct": "Horizontal is the correct answer.",
    "incorrect": {
      "A": "Vertical is incorrect as EC2 auto scaling scales horizontally.",
      "B": "Linear is incorrect as this is not the way Auto Scaling works.",
      "D": "Incremental is incorrect as this is not the way Auto Scaling works."
    },
    "references": [
      "https://aws.amazon.com/ec2/autoscaling/",
      "https://digitalcloud.training/architecting-for-the-cloud/"
    ]
  },
  {
    "id": 28,
    "q": "Which of the statements below does NOT characterize cloud computing?",
    "options": {
      "A": "Cloud computing is the on-demand delivery of compute power",
      "B": "With cloud computing you get to benefit from massive economies of scale",
      "C": "Cloud computing allows you to swap variable expense for capital expense",
      "D": "With cloud computing you can increase your speed and agility"
    },
    "answer": "C",
    "explanation": "Cloud computing swaps capital expense for variable expense, not the other way around. It is an ongoing operating expense, not a one-off capital expense.",
    "correct": "Cloud computing allows you to swap variable expense for capital expense is the correct answer.",
    "incorrect": {
      "A": "Cloud computing is the on-demand delivery of compute power is incorrect as this is a valid statement.",
      "B": "With cloud computing you get to benefit from massive economies of scale is incorrect as this is a valid statement.",
      "D": "With cloud computing you can increase your speed and agility is incorrect as this is a valid statement."
    },
    "references": [
      "https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html",
      "https://digitalcloud.training/aws-cloud-computing-concepts/"
    ]
  },
  {
    "id": 29,
    "q": "What advantages does the AWS cloud provide in relation to cost? (Select TWO.)",
    "options": {
      "A": "Fine-grained billing",
      "B": "One-off payments for on-demand resources",
      "C": "Ability to turn off resources and not pay for them",
      "D": "Enterprise licensing discounts",
      "E": "Itemized power costs"
    },
    "answer": "A,C",
    "explanation": "AWS provides fine-grained billing and allows you to turn off resources you're not using easily and not pay for them (pay for what you use model).",
    "correct": "Fine-grained billing and Ability to turn off resources and not pay for them are the correct answers.",
    "incorrect": {
      "B": "One-off payments for on-demand resources is incorrect. You do not get the option for one-off payments for on-demand resources. You can for reserved instances which can be paid all upfront.",
      "D": "Enterprise licensing discounts is incorrect. You do not get enterprise licensing discounts from AWS and you do not pay anything for power as the cost is built in.",
      "E": "Itemized power costs is incorrect. You do not get any power costs on your bill."
    },
    "references": [
      "https://aws.amazon.com/ec2/pricing/",
      "https://digitalcloud.training/architecting-for-the-cloud/"
    ]
  },
  {
    "id": 30,
    "q": "How can you deploy your EC2 instances so that if a single data center fails you still have instances available?",
    "options": {
      "A": "Across regions",
      "B": "Across subnets",
      "C": "Across Availability Zones",
      "D": "Across VPCs"
    },
    "answer": "C",
    "explanation": "Each AZ is physically isolated from other AZs. If you deploy a highly available application across AZs, your instances will be resilient to the failure of a single data center.",
    "correct": "Across Availability Zones is the correct answer.",
    "incorrect": {
      "A": "Across regions is incorrect. You could deploy your instances across separate regions but this is not necessary to create a highly available application and introduces complexity and cost. For example you may need multiple ELBs (one per region), complex name resolution and potential data transfer charges.",
      "B": "Across subnets is incorrect. Subnets are created within AZs. Therefore, if you deploy resources into multiple subnets within an AZ and a data center fails, you may lose all of your instances.",
      "D": "Across VPCs is incorrect. You should deploy across AZs within a VPC."
    },
    "references": [
      "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html",
      "https://digitalcloud.training/aws-global-infrastructure/"
    ]
  },
  {
    "id": 31,
    "q": "Which AWS technology enables you to group resources that share one or more tags?",
    "options": {
      "A": "Tag groups",
      "B": "Organization groups",
      "C": "Resource groups",
      "D": "Consolidation groups"
    },
    "answer": "C",
    "explanation": "Resource groups make it easier to manage and automate tasks on large numbers of resources at one time. You can group resources that share one or more tags.",
    "correct": "Resource groups is the correct answer.",
    "incorrect": {
      "A": "Tag groups is incorrect as this is not a feature.",
      "B": "Organization groups is incorrect as this is not a feature.",
      "D": "Consolidation groups is incorrect as this is not a feature."
    },
    "references": [
      "https://docs.aws.amazon.com/ARG/latest/userguide/welcome.html",
      "https://digitalcloud.training/aws-billing-and-pricing/"
    ]
  },
  {
    "id": 32,
    "q": "How can a systems administrator specify a script to be run on an EC2 instance during launch?",
    "options": {
      "A": "Metadata",
      "B": "User Data",
      "C": "Run Command",
      "D": "AWS Config"
    },
    "answer": "B",
    "explanation": "User data is data supplied by the user at instance launch in the form of a script that can perform automated configuration tasks and run scripts after the instance starts.",
    "correct": "User Data is the correct answer.",
    "incorrect": {
      "A": "Metadata is incorrect as metadata retrieves information about the instance.",
      "C": "Run Command is incorrect as this operates separately to the launch process.",
      "D": "AWS Config is incorrect as this service stores configuration information relating to AWS services."
    },
    "references": [
      "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html",
      "https://digitalcloud.training/aws-compute-services/"
    ]
  },
  {
    "id": 33,
    "q": "What are the advantages of running a database service such as Amazon RDS in the cloud versus deploying on-premise? (Select TWO.)",
    "options": {
      "A": "You have full control of the operating system and can install your own operational tools",
      "B": "Scalability is improved as it is quicker to implement and there is an abundance of capacity",
      "C": "You can use any database software you like, allowing greater flexibility",
      "D": "High availability is easier to implement due to built-in functionality for deploying read replicas and multi-AZ",
      "E": "There are no costs for replicating data between DBs in different data centers or regions"
    },
    "answer": "B,D",
    "explanation": "RDS allows easy scaling by increasing instance type without long procurement cycles, and implements fault tolerance through multi-AZ and read replicas easily.",
    "correct": "Scalability is improved as it is quicker to implement and there is an abundance of capacity and High availability is easier to implement due to built-in functionality for deploying read replicas and multi-AZ are the correct answers.",
    "incorrect": {
      "A": "You have full control of the operating system and can install your own operational tools is incorrect. With Amazon RDS you do not have control of the operating system.",
      "C": "You can use any database software you like, allowing greater flexibility is incorrect. You cannot use any database software you like as you are restricted to a list of several engines.",
      "E": "There are no costs for replicating data between DBs in different data centers or regions is incorrect. There are costs for replicating data between AZs and regions so this must be taken into account in any cost analysis."
    },
    "references": [
      "https://aws.amazon.com/rds/",
      "https://digitalcloud.training/architecting-for-the-cloud/"
    ]
  },
  {
    "id": 34,
    "q": "Which AWS database service is schema-less and can be scaled dynamically without incurring downtime?",
    "options": {
      "A": "Amazon RDS",
      "B": "Amazon Aurora",
      "C": "Amazon RedShift",
      "D": "Amazon DynamoDB"
    },
    "answer": "D",
    "explanation": "Amazon DynamoDB is a fully managed NoSQL database service with push button scaling that allows you to scale the DB at any time without downtime. DynamoDB is schema-less.",
    "correct": "Amazon DynamoDB is the correct answer.",
    "incorrect": {
      "A": "Amazon RDS is incorrect. This is a SQL type of database and therefore has a schema. It also relies on EC2 instances so cannot be scaled dynamically without incurring downtime (you have to change instance types).",
      "B": "Amazon Aurora is incorrect as explained above.",
      "C": "Amazon RedShift is incorrect as explained above."
    },
    "references": [
      "https://aws.amazon.com/dynamodb/",
      "https://digitalcloud.training/aws-database-services/"
    ]
  },
  {
    "id": 35,
    "q": "Which type of AWS database is ideally suited to analytics using SQL queries?",
    "options": {
      "A": "Amazon DynamoDB",
      "B": "Amazon RedShift",
      "C": "Amazon RDS",
      "D": "Amazon S3"
    },
    "answer": "B",
    "explanation": "Amazon Redshift is a fast, fully managed data warehouse that makes it simple and cost-effective to analyze all your data using standard SQL and existing Business Intelligence tools.",
    "correct": "Amazon RedShift is the correct answer.",
    "incorrect": {
      "A": "Amazon DynamoDB is incorrect. Amazon DynamoDB is a NoSQL type of database and is not suited to analytics using SQL queries.",
      "C": "Amazon RDS is incorrect. Amazon RDS is a transactional DB, not an analytics DB.",
      "D": "Amazon S3 is incorrect. Amazon S3 is an object storage solution not a database."
    },
    "references": [
      "https://aws.amazon.com/redshift/",
      "https://digitalcloud.training/aws-database-services/"
    ]
  },
  {
    "id": 36,
    "q": "How can a company facilitate the sharing of data over private connections between two accounts they own within a region?",
    "options": {
      "A": "Create an internal ELB",
      "B": "Create a subnet peering connection",
      "C": "Create a VPC peering connection",
      "D": "Configure matching CIDR address ranges"
    },
    "answer": "C",
    "explanation": "A VPC peering connection facilitates the transfer of data between accounts, allowing you to peer VPCs across accounts to create a file sharing network.",
    "correct": "Create a VPC peering connection is the correct answer.",
    "incorrect": {
      "A": "Create an internal ELB is incorrect. An internal ELB will not help you to transfer data between accounts.",
      "B": "Create a subnet peering connection is incorrect. You cannot peer subnets.",
      "D": "Configure matching CIDR address ranges is incorrect. Configuring matching CIDR address ranges will not mean you can route between accounts. Also, you cannot peer with an account with a matching (or overlapping) address range."
    },
    "references": [
      "https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html",
      "https://digitalcloud.training/aws-networking-services/"
    ]
  },
  {
    "id": 37,
    "q": "You are evaluating AWS services that can assist with creating scalable application environments. Which of the statements below best describes the Elastic Load Balancer service?",
    "options": {
      "A": "Helps you ensure that you have the correct number of Amazon EC2 instances available to handle the load for your application",
      "B": "A highly available and scalable Domain Name System (DNS) service",
      "C": "Automatically distributes incoming application traffic across multiple targets, such as Amazon EC2 instances, containers, and IP addresses",
      "D": "A network service that provides an alternative to using the Internet to connect customers' on-premise sites to AWS"
    },
    "answer": "C",
    "explanation": "Elastic Load Balancing automatically distributes incoming application traffic across multiple targets while ensuring only healthy targets receive traffic.",
    "correct": "Automatically distributes incoming application traffic across multiple targets, such as Amazon EC2 instances, containers, and IP addresses is the correct answer.",
    "incorrect": {
      "A": "Helps you ensure that you have the correct number of Amazon EC2 instances available to handle the load for your application is incorrect as this describes EC2 Auto Scaling.",
      "B": "A highly available and scalable Domain Name System (DNS) service is incorrect as this describes Amazon Route 53.",
      "D": "A network service that provides an alternative to using the Internet to connect customers' on-premise sites to AWS is incorrect as this describes AWS Direct Connect."
    },
    "references": [
      "https://aws.amazon.com/elasticloadbalancing/",
      "https://digitalcloud.training/auto-scaling-and-elastic-load-balancing/"
    ]
  },
  {
    "id": 38,
    "q": "Which type of Elastic Load Balancer operates at the TCP connection level?",
    "options": {
      "A": "Application Load Balancer (ALB)",
      "B": "Network Load Balancer (NLB)",
      "C": "Classic Load Balancer (CLB)",
      "D": "Amazon Route 53 Load Balancer"
    },
    "answer": "B",
    "explanation": "A Network Load Balancer functions at the fourth layer of the OSI model, directing connections based on information at the TCP connection level.",
    "correct": "Network Load Balancer (NLB) is the correct answer.",
    "incorrect": {
      "A": "Application Load Balancer (ALB) is incorrect. ALBs process traffic at the application level (layer 7) based on information in the HTTP/HTTPS headers.",
      "C": "Classic Load Balancer (CLB) is incorrect. CLBs process traffic at the TCP, SSL, HTTP and HTTPS levels (layer 4 & 7).",
      "D": "Amazon Route 53 Load Balancer is incorrect. There is no feature called a load balancer that is associated with Route 53. You can perform a type of load balancing using multivalue answer routing."
    },
    "references": [
      "https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html",
      "https://digitalcloud.training/auto-scaling-and-elastic-load-balancing/"
    ]
  },
  {
    "id": 39,
    "q": "You need to connect your company's on-premise network into AWS and would like to establish an AWS managed VPN service. Which of the following configuration items needs to be setup on the Amazon VPC side of the connection?",
    "options": {
      "A": "A Virtual Private Gateway",
      "B": "A Customer Gateway",
      "C": "A Network Address Translation device",
      "D": "A Firewall"
    },
    "answer": "A",
    "explanation": "A virtual private gateway is the VPN concentrator on the Amazon side of the VPN connection. You create it and attach it to the VPC from which you want to create the VPN connection.",
    "correct": "A Virtual Private Gateway is the correct answer.",
    "incorrect": {
      "B": "A Customer Gateway is incorrect. A customer gateway is a physical device or software application on your side of the VPN connection.",
      "C": "A Network Address Translation device is incorrect. NAT devices and firewalls are not required for an AWS managed VPN.",
      "D": "A Firewall is incorrect. A firewall is not required for a VPN connection."
    },
    "references": [
      "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_VPN.html#VPN",
      "https://digitalcloud.training/aws-networking-services/"
    ]
  },
  {
    "id": 40,
    "q": "Which of the authentication options below can be used to authenticate using AWS APIs? (Select TWO.)",
    "options": {
      "A": "Key pairs",
      "B": "Access keys",
      "C": "Server passwords",
      "D": "Security groups",
      "E": "Server certificates"
    },
    "answer": "B,E",
    "explanation": "Access keys are long-term credentials for signing programmatic requests to the AWS CLI or API. Server certificates are SSL/TLS certificates that can be used to authenticate with some AWS services.",
    "correct": "Access keys and Server certificates are the correct answers.",
    "incorrect": {
      "A": "Key pairs is incorrect. Key pairs are used for encrypting logon information when accessing EC2 instances.",
      "C": "Server passwords is incorrect. A server password cannot be used to authenticate with an API.",
      "D": "Security groups is incorrect. Security groups are an instance-level firewall used for controlling access to AWS resources."
    },
    "references": [
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html",
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html",
      "https://digitalcloud.training/aws-identity-and-access-management/"
    ]
  },
  {
    "id": 41,
    "q": "Which of the following are NOT features of AWS IAM? (Select TWO.)",
    "options": {
      "A": "Shared access to your AWS account",
      "B": "Logon using local user accounts",
      "C": "Identity federation",
      "D": "PCI DSS compliance",
      "E": "Charged for what you use"
    },
    "answer": "B,E",
    "explanation": "You cannot use IAM to create local user accounts on any system, and you are not charged for using IAM - it is free to use.",
    "correct": "Logon using local user accounts and Charged for what you use are the correct answers.",
    "incorrect": {
      "A": "Shared access to your AWS account is incorrect. This is a feature of AWS IAM.",
      "C": "Identity federation is incorrect. This is a feature of AWS IAM.",
      "D": "PCI DSS compliance is incorrect. This is a feature of AWS IAM."
    },
    "references": [
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html",
      "https://digitalcloud.training/aws-identity-and-access-management/"
    ]
  },
  {
    "id": 42,
    "q": "Your manager has asked you to explain the benefits of using IAM groups. Which of the below statements are valid benefits? (Select TWO.)",
    "options": {
      "A": "You can restrict access to the subnets in your VPC",
      "B": "Groups let you specify permissions for multiple users, which can make it easier to manage the permissions for those users",
      "C": "Provide the ability to create custom permission policies",
      "D": "Enables you to attach IAM permission policies to more than one user at a time",
      "E": "Provide the ability to nest groups to create an organizational hierarchy"
    },
    "answer": "B,D",
    "explanation": "Groups are collections of users with policies attached, enabling you to organize users by job function or role and attach permissions to multiple users at once.",
    "correct": "Groups let you specify permissions for multiple users, which can make it easier to manage the permissions for those users and Enables you to attach IAM permission policies to more than one user at a time are the correct answers.",
    "incorrect": {
      "A": "You can restrict access to the subnets in your VPC is incorrect as this describes Network ACLs.",
      "C": "Provide the ability to create custom permission policies is incorrect as this describes IAM policies.",
      "E": "Provide the ability to nest groups to create an organizational hierarchy is incorrect. You cannot nest groups (groups within groups)."
    },
    "references": [
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html",
      "https://digitalcloud.training/aws-identity-and-access-management/"
    ]
  },
  {
    "id": 43,
    "q": "What do you need to log into the AWS console?",
    "options": {
      "A": "User name and password",
      "B": "Key pair",
      "C": "Access key and secret ID",
      "D": "Certificate"
    },
    "answer": "A",
    "explanation": "You can log into the AWS console using a user name and password. Key pairs, access keys, and certificates cannot be used to log into the console.",
    "correct": "User name and password is the correct answer.",
    "incorrect": {
      "B": "Key pair is incorrect. You cannot log in to the AWS console using a key pair.",
      "C": "Access key and secret ID is incorrect. You cannot log in to the AWS console using access keys.",
      "D": "Certificate is incorrect. You cannot log in to the AWS console using a certificate."
    },
    "references": [
      "https://aws.amazon.com/console/",
      "https://digitalcloud.training/aws-identity-and-access-management/"
    ]
  },
  {
    "id": 44,
    "q": "Which AWS security tool uses an agent installed in EC2 instances and assesses applications for vulnerabilities and deviations from best practices?",
    "options": {
      "A": "AWS Trusted Advisor",
      "B": "AWS Personal Health Dashboard",
      "C": "AWS TCO Calculator",
      "D": "AWS Inspector"
    },
    "answer": "D",
    "explanation": "Inspector is an automated security assessment service that helps improve security and compliance of applications deployed on AWS, using an agent installed on EC2 instances.",
    "correct": "AWS Inspector is the correct answer.",
    "incorrect": {
      "A": "AWS Trusted Advisor is incorrect. Trusted Advisor is an online resource that helps to reduce cost, increase performance and improve security by optimizing your AWS environment.",
      "B": "AWS Personal Health Dashboard is incorrect. AWS Personal Health Dashboard provides alerts and remediation guidance when AWS is experiencing events that may impact you.",
      "C": "AWS TCO Calculator is incorrect. The AWS TCO calculator can be used to compare the cost of running your applications in an on-premises or colocation environment to AWS."
    },
    "references": [
      "https://aws.amazon.com/inspector/",
      "https://digitalcloud.training/aws-security-services/"
    ]
  },
  {
    "id": 45,
    "q": "Which of the following is NOT a best practice for protecting the root user of an AWS account?",
    "options": {
      "A": "Don't share the root user credentials",
      "B": "Enable MFA",
      "C": "Remove administrative permissions",
      "D": "Lock away the AWS root user access keys"
    },
    "answer": "C",
    "explanation": "You cannot remove administrative permissions from the root user of an AWS account. You must protect it through complex passwords, enabling MFA, and locking away access keys.",
    "correct": "Remove administrative permissions is the correct answer.",
    "incorrect": {
      "A": "Don't share the root user credentials is incorrect as this is a best practice.",
      "B": "Enable MFA is incorrect as this is a best practice.",
      "D": "Lock away the AWS root user access keys is incorrect as this is a best practice."
    },
    "references": [
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
      "https://digitalcloud.training/aws-identity-and-access-management/"
    ]
  },
  {
    "id": 46,
    "q": "Your manager has asked you to explain some of the security features available in the AWS cloud. How can you describe the function of Amazon CloudHSM?",
    "options": {
      "A": "It provides server-side encryption for S3 objects",
      "B": "It is a Public Key Infrastructure (PKI)",
      "C": "It can be used to generate, use and manage encryption keys in the cloud",
      "D": "It is a firewall for use with web applications"
    },
    "answer": "C",
    "explanation": "AWS CloudHSM is a cloud-based hardware security module (HSM) that allows you to easily add secure key storage and high-performance crypto operations to your AWS applications.",
    "correct": "It can be used to generate, use and manage encryption keys in the cloud is the correct answer.",
    "incorrect": {
      "A": "It provides server-side encryption for S3 objects is incorrect. CloudHSM performs key management but it does not perform encryption of S3 objects.",
      "B": "It is a Public Key Infrastructure (PKI) is incorrect. It can be used to generate asymmetric keys, however it is not a PKI.",
      "D": "It is a firewall for use with web applications is incorrect as it does not provide any firewall functionality."
    },
    "references": [
      "https://aws.amazon.com/cloudhsm/details/",
      "https://digitalcloud.training/aws-security-services/"
    ]
  },
  {
    "id": 47,
    "q": "Under the AWS Shared Responsibility Model, who is responsible for what? (Select TWO.)",
    "options": {
      "A": "Customers are responsible for compute infrastructure",
      "B": "AWS are responsible for network and firewall configuration",
      "C": "Customers are responsible for networking traffic protection",
      "D": "AWS are responsible for networking infrastructure",
      "E": "Customers are responsible for edge locations"
    },
    "answer": "C,D",
    "explanation": "Customers are responsible for networking traffic protection (encryption, security groups, NACLs). AWS is responsible for the underlying networking infrastructure equipment.",
    "correct": "Customers are responsible for networking traffic protection and AWS are responsible for networking infrastructure are the correct answers.",
    "incorrect": {
      "A": "Customers are responsible for compute infrastructure is incorrect. AWS are responsible for compute infrastructure.",
      "B": "AWS are responsible for network and firewall configuration is incorrect. Customers are responsible for network and firewall configuration.",
      "E": "Customers are responsible for edge locations is incorrect. AWS are responsible for edge locations."
    },
    "references": [
      "https://aws.amazon.com/compliance/shared-responsibility-model/",
      "https://digitalcloud.training/aws-shared-responsibility-model/"
    ]
  },
  {
    "id": 48,
    "q": "Which HTTP code indicates a successful upload of an object to Amazon S3?",
    "options": {
      "A": "200",
      "B": "300",
      "C": "400",
      "D": "500"
    },
    "answer": "A",
    "explanation": "HTTP 200 code indicates a successful upload. 300 indicates redirection, 400 indicates client error, and 500 indicates server error.",
    "correct": "200 is the correct answer.",
    "incorrect": {
      "B": "300 is incorrect. A HTTP 300 code indicates a redirection.",
      "C": "400 is incorrect. A HTTP 400 code indicates a client error.",
      "D": "500 is incorrect. A HTTP 500 code indicates a server error."
    },
    "references": [
      "https://en.wikipedia.org/wiki/List_of_HTTP_status_codes",
      "https://digitalcloud.training/aws-storage-services/"
    ]
  },
  
  {
    "id": 49,
    "q": "Which AWS service provides virtual servers in the cloud?",
    "options": {
      "A": "AWS Lambda",
      "B": "Amazon EC2",
      "C": "Amazon ECS",
      "D": "AWS Fargate"
    },
    "answer": "B",
    "explanation": "EC2 provides cloud-based servers."
  },
  {
    "id": 50,
    "q": "What is the main storage class used for infrequently accessed data in S3?",
    "options": {
      "A": "S3 Standard",
      "B": "S3 Glacier Deep Archive",
      "C": "S3 Standard-IA",
      "D": "S3 One Zone-IA"
    },
    "answer": "C",
    "explanation": "S3 Standard-IA is for infrequent access."
  },
  {
    "id": 51,
    "q": "Which database service is fully managed and serverless?",
    "options": {
      "A": "Amazon RDS",
      "B": "Amazon DynamoDB",
      "C": "Amazon Redshift",
      "D": "Amazon Aurora"
    },
    "answer": "B",
    "explanation": "DynamoDB is fully managed and serverless."
  },
  {
    "id": 52,
    "q": "Which service allows you to launch containers without managing servers?",
    "options": {
      "A": "Amazon EKS",
      "B": "Amazon ECS with Fargate",
      "C": "AWS Elastic Beanstalk",
      "D": "AWS Lambda"
    },
    "answer": "B",
    "explanation": "ECS with Fargate runs containers serverlessly."
  },
  {
    "id": 53,
    "q": "Which AWS storage type is block-level?",
    "options": {
      "A": "Amazon S3",
      "B": "Amazon EBS",
      "C": "Amazon EFS",
      "D": "Amazon Glacier"
    },
    "answer": "B",
    "explanation": "EBS = block-level storage."
  },
  {
    "id": 54,
    "q": "What AWS service provides scalable DNS management?",
    "options": {
      "A": "AWS CloudFormation",
      "B": "Amazon Route 53",
      "C": "AWS Global Accelerator",
      "D": "Amazon CloudFront"
    },
    "answer": "B",
    "explanation": "Route 53 = DNS management."
  },
  {
    "id": 55,
    "q": "What is the main purpose of Amazon CloudFront?",
    "options": {
      "A": "To deliver content globally with low latency",
      "B": "To manage DNS routing",
      "C": "To monitor network traffic",
      "D": "To connect VPCs"
    },
    "answer": "A",
    "explanation": "CloudFront = CDN for global delivery."
  },
  {
    "id": 56,
    "q": "Which AWS service allows querying data directly in S3 using SQL?",
    "options": {
      "A": "Amazon RDS",
      "B": "Amazon Athena",
      "C": "AWS Glue",
      "D": "Amazon Redshift"
    },
    "answer": "B",
    "explanation": "Athena queries S3 using SQL."
  },
  {
    "id": 57,
    "q": "Which AWS service provides a managed Kubernetes environment?",
    "options": {
      "A": "AWS Elastic Beanstalk",
      "B": "Amazon ECS",
      "C": "Amazon EKS",
      "D": "AWS Fargate"
    },
    "answer": "C",
    "explanation": "EKS = managed Kubernetes."
  },
  {
    "id": 58,
    "q": "What AWS service provides object-level storage?",
    "options": {
      "A": "Amazon S3",
      "B": "Amazon EBS",
      "C": "Amazon EFS",
      "D": "AWS Backup"
    },
    "answer": "A",
    "explanation": "S3 = object-level storage."
  },
  {
    "id": 59,
    "q": "Which AWS service enables you to host static websites?",
    "options": {
      "A": "Amazon CloudWatch",
      "B": "Amazon S3",
      "C": "AWS EC2",
      "D": "Amazon RDS"
    },
    "answer": "B",
    "explanation": "S3 can host static websites."
  },
  {
    "id": 60,
    "q": "What is the best option for event-driven applications?",
    "options": {
      "A": "AWS Lambda",
      "B": "Amazon EC2",
      "C": "Amazon EKS",
      "D": "AWS Batch"
    },
    "answer": "A",
    "explanation": "Lambda = event-driven compute."
  },
  {
    "id": 61,
    "q": "What is the benefit of Amazon CloudWatch?",
    "options": {
      "A": "It manages IAM users",
      "B": "It monitors and logs AWS resources",
      "C": "It provides cost alerts",
      "D": "It encrypts data"
    },
    "answer": "B",
    "explanation": "CloudWatch = monitoring & logging."
  },
  {
    "id": 62,
    "q": "Which AWS service is used for data warehousing and analytics?",
    "options": {
      "A": "Amazon DynamoDB",
      "B": "Amazon Redshift",
      "C": "AWS Glue",
      "D": "Amazon RDS"
    },
    "answer": "B",
    "explanation": "Redshift = data warehouse."
  },
  {
    "id": 63,
    "q": "Which AWS service helps automate deployment of infrastructure?",
    "options": {
      "A": "AWS CloudFormation",
      "B": "AWS Elastic Beanstalk",
      "C": "Amazon S3",
      "D": "AWS Config"
    },
    "answer": "A",
    "explanation": "CloudFormation automates infrastructure."
  },
  {
    "id": 64,
    "q": "Which AWS service lets you create isolated networks?",
    "options": {
      "A": "Amazon VPC",
      "B": "Amazon Route 53",
      "C": "AWS Direct Connect",
      "D": "AWS Transit Gateway"
    },
    "answer": "A",
    "explanation": "VPC = isolated virtual network."
  },
  {
    "id": 65,
    "q": "What service helps migrate on-prem databases to AWS?",
    "options": {
      "A": "AWS Snowball",
      "B": "AWS Database Migration Service (DMS)",
      "C": "AWS Glue",
      "D": "Amazon Athena"
    },
    "answer": "B",
    "explanation": "DMS migrates databases."
  },
  {
    "id": 66,
    "q": "Which AWS compute option is best for predictable workloads?",
    "options": {
      "A": "On-Demand Instances",
      "B": "Spot Instances",
      "C": "Reserved Instances",
      "D": "Dedicated Hosts"
    },
    "answer": "C",
    "explanation": "Reserved = for steady workloads."
  },
  {
    "id": 67,
    "q": "Which AWS service allows managing multiple accounts at scale?",
    "options": {
      "A": "AWS Organizations",
      "B": "AWS IAM",
      "C": "AWS Shield",
      "D": "AWS Config"
    },
    "answer": "A",
    "explanation": "Organizations manage multiple accounts."
  },
  {
    "id": 68,
    "q": "Which AWS service allows scheduling jobs on EC2 instances?",
    "options": {
      "A": "AWS Batch",
      "B": "AWS Lambda",
      "C": "Amazon CloudWatch",
      "D": "AWS Step Functions"
    },
    "answer": "A",
    "explanation": "Batch = scheduled compute jobs."
  },
  {
    "id": 69,
    "q": "Which AWS service helps automatically distribute traffic between multiple targets?",
    "options": {
      "A": "AWS Elastic Load Balancer",
      "B": "AWS CloudFront",
      "C": "Amazon Route 53",
      "D": "AWS Global Accelerator"
    },
    "answer": "A",
    "explanation": "ELB = distributes traffic."
  },
  {
    "id": 70,
    "q": "What AWS tool helps developers build and manage CI/CD pipelines?",
    "options": {
      "A": "AWS CloudFormation",
      "B": "AWS CodePipeline",
      "C": "AWS Cloud9",
      "D": "AWS CodeBuild"
    },
    "answer": "B",
    "explanation": "CodePipeline = CI/CD automation."
  },
  {
    "id": 71,
    "q": "Which AWS service provides serverless container compute?",
    "options": {
      "A": "AWS Lambda",
      "B": "AWS Fargate",
      "C": "Amazon ECS",
      "D": "AWS Batch"
    },
    "answer": "B",
    "explanation": "Fargate = serverless containers."
  },
  {
    "id": 72,
    "q": "Which service allows building APIs without managing servers?",
    "options": {
      "A": "AWS API Gateway",
      "B": "AWS CloudFormation",
      "C": "AWS Lambda",
      "D": "Amazon CloudFront"
    },
    "answer": "A",
    "explanation": "API Gateway = build/manage APIs."
  },
  {
    "id": 73,
    "q": "What is a benefit of AWS Elastic Beanstalk?",
    "options": {
      "A": "You must configure servers manually",
      "B": "It automates application deployment and scaling",
      "C": "It provides managed databases only",
      "D": "It’s a DNS management tool"
    },
    "answer": "B",
    "explanation": "Beanstalk automates deployment."
  },
  {
    "id": 74,
    "q": "Which AWS service provides block storage that persists when EC2 stops?",
    "options": {
      "A": "Amazon EBS",
      "B": "Amazon S3",
      "C": "AWS Backup",
      "D": "Amazon EFS"
    },
    "answer": "A",
    "explanation": "EBS persists after instance stop."
  },
  {
    "id": 75,
    "q": "What AWS tool helps view and analyze costs visually?",
    "options": {
      "A": "AWS Cost Explorer",
      "B": "AWS Trusted Advisor",
      "C": "AWS Budgets",
      "D": "AWS CloudWatch"
    },
    "answer": "A",
    "explanation": "Cost Explorer = visual spending tool."
  },
  {
    "id": 76,
    "q": "Which AWS service helps with hybrid connectivity between on-prem and AWS?",
    "options": {
      "A": "AWS CloudFormation",
      "B": "AWS Direct Connect",
      "C": "Amazon CloudFront",
      "D": "AWS Global Accelerator"
    },
    "answer": "B",
    "explanation": "Direct Connect = private link to AWS."
  },
  {
    "id": 77,
    "q": "Which service provides a visual workflow for automation?",
    "options": {
      "A": "AWS Step Functions",
      "B": "AWS CloudFormation",
      "C": "AWS CodePipeline",
      "D": "Amazon CloudWatch"
    },
    "answer": "A",
    "explanation": "Step Functions = visual workflow automation."
  },
  {
    "id": 78,
    "q": "Which storage option supports file-level access?",
    "options": {
      "A": "Amazon EFS",
      "B": "Amazon S3",
      "C": "Amazon EBS",
      "D": "AWS Backup"
    },
    "answer": "A",
    "explanation": "EFS = file-level access."
  },
  {
    "id": 79,
    "q": "Which AWS service supports machine learning model training and deployment?",
    "options": {
      "A": "AWS Glue",
      "B": "Amazon SageMaker",
      "C": "Amazon Athena",
      "D": "AWS CloudFormation"
    },
    "answer": "B",
    "explanation": "SageMaker = ML platform."
  },
  {
    "id": 80,
    "q": "What is AWS Outposts used for?",
    "options": {
      "A": "To store large datasets offline",
      "B": "To run AWS infrastructure on-premises",
      "C": "To migrate to AWS",
      "D": "To monitor local resources"
    },
    "answer": "B",
    "explanation": "Outposts = AWS infra on-prem."
  },
  {
    "id": 81,
    "q": "What pricing model provides the highest savings for long-term workloads?",
    "options": {
      "A": "On-Demand",
      "B": "Reserved Instances",
      "C": "Spot Instances",
      "D": "Savings Plans"
    },
    "answer": "D",
    "explanation": "Savings Plans offer best long-term savings."
  },
  {
    "id": 82,
    "q": "What AWS tool gives detailed billing reports?",
    "options": {
      "A": "AWS CloudWatch",
      "B": "AWS Cost Explorer",
      "C": "AWS Budgets",
      "D": "AWS Organizations"
    },
    "answer": "B",
    "explanation": "Cost Explorer provides billing insights."
  },
  {
    "id": 83,
    "q": "Which service helps you set cost alerts?",
    "options": {
      "A": "AWS Budgets",
      "B": "AWS Cost Explorer",
      "C": "AWS CloudFormation",
      "D": "AWS Billing Dashboard"
    },
    "answer": "A",
    "explanation": "Budgets sets cost/usage alerts."
  },
  {
    "id": 84,
    "q": "Which AWS pricing principle helps reduce costs by scaling down unused resources?",
    "options": {
      "A": "Pay-as-you-go",
      "B": "Long-term commitment",
      "C": "Prepayment discounts",
      "D": "Global scaling"
    },
    "answer": "A",
    "explanation": "Scale down unused resources to save. This is a benefit of the pay-as-you-go model."
  },
  {
    "id": 85,
    "q": "Which AWS pricing model charges by usage time?",
    "options": {
      "A": "On-Demand Instances",
      "B": "Reserved Instances",
      "C": "Dedicated Hosts",
      "D": "Savings Plans"
    },
    "answer": "A",
    "explanation": "On-Demand = pay per hour/second."
  },
  {
    "id": 86,
    "q": "Which AWS service provides recommendations for cost optimization?",
    "options": {
      "A": "AWS Budgets",
      "B": "AWS Trusted Advisor",
      "C": "AWS CloudFormation",
      "D": "AWS CloudTrail"
    },
    "answer": "B",
    "explanation": "Trusted Advisor gives cost & security tips."
  },
  {
    "id": 87,
    "q": "Which AWS support plan includes a designated Technical Account Manager (TAM)?",
    "options": {
      "A": "Basic",
      "B": "Developer",
      "C": "Business",
      "D": "Enterprise"
    },
    "answer": "D",
    "explanation": "Enterprise plan includes TAM."
  },
  {
    "id": 88,
    "q": "Which AWS service provides consolidated billing for multiple accounts?",
    "options": {
      "A": "AWS Organizations",
      "B": "AWS CloudTrail",
      "C": "AWS Budgets",
      "D": "AWS Config"
    },
    "answer": "A",
    "explanation": "Organizations = consolidated billing."
  },
  {
    "id": 89,
    "q": "Which AWS service helps forecast future AWS spending?",
    "options": {
      "A": "AWS Budgets",
      "B": "AWS Cost Explorer",
      "C": "AWS Trusted Advisor",
      "D": "AWS CloudWatch"
    },
    "answer": "B",
    "explanation": "Cost Explorer forecasts costs."
  },
  {
    "id": 90,
    "q": "Which AWS support plan offers 24/7 access to Cloud Support Engineers?",
    "options": {
      "A": "Basic",
      "B": "Developer",
      "C": "Business",
      "D": "Enterprise"
    },
    "answer": "C",
    "explanation": "Business plan = 24/7 engineer access. (Enterprise does too, but Business is the first tier to offer it)."
  },
  {
    "id": 91,
    "q": "Which pricing model offers unused capacity at reduced cost?",
    "options": {
      "A": "On-Demand Instances",
      "B": "Spot Instances",
      "C": "Reserved Instances",
      "D": "Dedicated Hosts"
    },
    "answer": "B",
    "explanation": "Spot = unused capacity at low cost."
  },
  {
    "id": 92,
    "q": "Which AWS tool provides account-level usage visualization?",
    "options": {
      "A": "AWS Billing Console",
      "B": "AWS CloudWatch",
      "C": "AWS CloudFormation",
      "D": "AWS Config"
    },
    "answer": "A",
    "explanation": "Billing Console = view usage."
  },
  {
    "id": 93,
    "q": "Which AWS feature allows grouping resources by project or department?",
    "options": {
      "A": "AWS Tags",
      "B": "AWS IAM",
      "C": "AWS CloudTrail",
      "D": "AWS CloudFormation"
    },
    "answer": "A",
    "explanation": "Tags organize resources."
  },
  {
    "id": 94,
    "q": "What is the main benefit of consolidated billing?",
    "options": {
      "A": "Simplified management and volume discounts",
      "B": "Separate invoices for each account",
      "C": "Increased cost per account",
      "D": "No combined view of usage"
    },
    "answer": "A",
    "explanation": "Consolidated billing saves cost and simplifies management."
  },
  {
    "id": 95,
    "q": "Which AWS support plan is free for all customers?",
    "options": {
      "A": "Basic",
      "B": "Developer",
      "C": "Business",
      "D": "Enterprise"
    },
    "answer": "A",
    "explanation": "Basic = free tier."
  },
  {
    "id": 96,
    "q": "Which AWS service can automate stopping unused EC2 instances to save cost?",
    "options": {
      "A": "AWS Lambda with CloudWatch",
      "B": "AWS Budgets",
      "C": "AWS Trusted Advisor",
      "D": "AWS Organizations"
    },
    "answer": "A",
    "explanation": "Lambda + CloudWatch can stop idle EC2."
  },
  {
    "id": 97,
    "q": "Which AWS feature provides alerts when usage exceeds thresholds?",
    "options": {
      "A": "AWS Budgets",
      "B": "AWS Trusted Advisor",
      "C": "AWS Cost Explorer",
      "D": "AWS Config"
    },
    "answer": "A",
    "explanation": "Budgets = alerts when thresholds hit."
  },
  {
    "id": 98,
    "q": "Which AWS Support plan is best for testing or experimenting?",
    "options": {
      "A": "Basic",
      "B": "Developer",
      "C": "Business",
      "D": "Enterprise"
    },
    "answer": "B",
    "explanation": "Developer = for testing."
  },
  {
    "id": 99,
    "q": "Which AWS cost management tool provides real-time cost data?",
    "options": {
      "A": "AWS Cost Explorer",
      "B": "AWS Budgets",
      "C": "AWS CloudTrail",
      "D": "AWS Config"
    },
    "answer": "A",
    "explanation": "Cost Explorer = real-time cost data."
  },
  {
    "id": 100,
    "q": "What is one way to reduce cost when running EC2 workloads 24/7 for one year?",
    "options": {
      "A": "Use On-Demand Instances",
      "B": "Use Spot Instances",
      "C": "Use Reserved Instances or Savings Plans",
      "D": "Use Dedicated Hosts"
    },
    "answer": "C",
    "explanation": "Reserved or Savings Plans lower long-term cost."
  }
  
    // ... continue until id:100
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [timer, setTimer] = useState(120);
  const timerRef = useRef(null);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [currentIndex]);

  const startTimer = () => {
    clearInterval(timerRef.current);
    setTimer(120);
    timerRef.current = setInterval(() => {
      setTimer((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          handleNext();
          return 120;
        }
        return t - 1;
      });
    }, 1000);
  };

  // Handle selecting an answer (but not submitting yet)
  const handleSelect = (choice) => {
    setSelectedChoice(choice);
  };

  // When user submits an answer
  const handleSubmit = () => {
    if (!selectedChoice) return;

    setAnswers((prev) => ({
      ...prev,
      [QUESTIONS[currentIndex].id]: selectedChoice,
    }));
    setShowExplanation(true);
    clearInterval(timerRef.current);
  };

  // Move to next question
  const handleNext = () => {
    if (currentIndex + 1 < QUESTIONS.length) {
      setCurrentIndex((i) => i + 1);
      setShowExplanation(false);
      setSelectedChoice(null);
      setTimer(120);
      startTimer();
    } else {
      setShowResults(true);
      clearInterval(timerRef.current);
    }
  };

  const resetExam = () => {
    setCurrentIndex(0);
    setAnswers({});
    setShowResults(false);
    setShowExplanation(false);
    setSelectedChoice(null);
    setTimer(120);
    startTimer();
  };

  // Calculate score
  const score = () => {
    let correct = 0;
    for (const Q of QUESTIONS) {
      if (answers[Q.id] === Q.answer) correct++;
    }
    return {
      correct,
      total: QUESTIONS.length,
      pct: Math.round((correct / QUESTIONS.length) * 100),
    };
  };

  const q = QUESTIONS[currentIndex];
  const progressPercent = (timer / 120) * 100;

  const buildResultDetails = (question, userAnswer) => {
    const isCorrect = userAnswer === question.answer;

    if (!question || !userAnswer) {
      return {
        answer: "Unknown",
        explanation: "Unknown",
        correct: "Unknown",
        incorrect: Object.fromEntries(
          Object.keys(question?.options || {}).map((k) => [k, "Unknown"])
        ),
        references: question?.references?.length
          ? question.references
          : ["Unknown"],
      };
    }

    // If correct, return actual data
    if (isCorrect) {
      return {
        answer: question.answer || "Unknown",
        explanation: question.explanation || "Unknown",
        correct: question.correct || "Unknown",
        incorrect:
          question.incorrect ||
          Object.fromEntries(
            Object.keys(question.options).map((k) => [k, "Unknown"])
          ),
        references: question.references?.length
          ? question.references
          : ["Unknown"],
      };
    }

    // If incorrect, return with known/unknown data
    return {
      answer: userAnswer || "Unknown",
      explanation: question.explanation || "Unknown",
      correct: question.correct || "Unknown",
      incorrect:
        question.incorrect ||
        Object.fromEntries(
          Object.keys(question.options).map((k) => [k, "Unknown"])
        ),
      references: question.references?.length
        ? question.references
        : ["Unknown"],
    };
  };

  if (showResults) {
    const s = score();
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
        <div className="bg-white p-6 rounded-2xl shadow-md max-w-4xl w-full">
          <h2 className="text-2xl font-bold mb-4">Exam Completed</h2>
          <p className="mb-2">
            Score: {s.correct} / {s.total} ({s.pct}%)
          </p>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={resetExam}
          >
            Restart Exam
          </button>
        </div>
      </div>
    );
  }

  const userAnswer = answers[q.id];
  const details = buildResultDetails(q, userAnswer || selectedChoice);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      <div className="bg-white p-6 rounded-2xl shadow-md max-w-4xl w-full">
        <h2 className="text-xl font-semibold mb-2">
          Question {currentIndex + 1} / {QUESTIONS.length}
        </h2>
        <p className="mb-4 text-gray-700">{q.q}</p>

        {/* Visual timer bar */}
        <div className="w-full h-3 bg-gray-200 rounded-full mb-4">
          <div
            className={`h-3 rounded-full ${
              timer <= 10 ? "bg-red-600" : "bg-green-500"
            } transition-all duration-1000`}
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {Object.entries(q.options).map(([key, text]) => (
            <label
              key={key}
              className={`block border p-3 rounded cursor-pointer ${
                selectedChoice === key ? "bg-blue-100 border-blue-500" : ""
              } hover:bg-gray-100`}
            >
              <input
                type="radio"
                name={`q_${q.id}`}
                className="mr-2"
                checked={selectedChoice === key}
                onChange={() => handleSelect(key)}
              />
              <strong>{key}.</strong> {text}
            </label>
          ))}
        </div>

        {!showExplanation ? (
          <div className="flex justify-between mt-4">
            <button
              className="px-3 py-2 bg-gray-200 rounded"
              onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
            >
              Previous
            </button>
            <button
              className="px-3 py-2 bg-blue-600 text-white rounded"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        ) : (
          <div className="mt-6 bg-gray-50 border p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">
              {details.answer === q.answer ? "✅ Correct!" : "❌ Incorrect!"}
            </h3>
            <p><strong>Answer:</strong> {details.answer}</p>
            <p><strong>Explanation:</strong> {details.explanation}</p>
            <p><strong>Correct:</strong> {details.correct}</p>
            <p className="mt-2"><strong>Incorrect:</strong></p>
            <ul className="list-disc ml-6">
              {Object.entries(details.incorrect).map(([k, v]) => (
                <li key={k}>
                  <strong>{k}:</strong> {v}
                </li>
              ))}
            </ul>
            <p className="mt-2"><strong>References:</strong></p>
            <ul className="list-disc ml-6">
              {details.references.map((ref, idx) => (
                <li key={idx}>
                  {ref.startsWith("http") ? (
                    <a
                      href={ref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      {ref}
                    </a>
                  ) : (
                    ref
                  )}
                </li>
              ))}
            </ul>

            <div className="flex justify-end mt-4">
              <button
                className="px-3 py-2 bg-green-600 text-white rounded"
                onClick={handleNext}
              >
                Next Question →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
