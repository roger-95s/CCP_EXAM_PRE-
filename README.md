# Open Source Certification Practice Community
Free, open-source exam practice for IT and cloud certifications.

This project is an open-source initiative designed to help those from low-income backgrounds—prepare for technology certifications without paying for expensive exam-prep subscriptions. The platform provides practice questions, explanations, references, and an exam-like experience directly in the browser. The MVP is delivered as a static web application hosted on GitHub Pages.

---

## Mission
Provide free, accessible, community-driven exam preparation resources that empower individuals who cannot afford paid materials but are eager to gain skills, earn certifications, and advance their careers.

---

## Vision
Build the leading open-source ecosystem for certification practice across cloud, cybersecurity, AI, and more—powered by global community contributions.

---

## Current Features (MVP)
The initial release focuses on the **AWS Cloud Practitioner (CCP)** exam.

### Adjustable Question Sets
Users can choose between:
- 5 questions  
- 10 questions  
- 20 questions  
- 40 questions  
- 60 questions  
- 100 questions  

(Full 1,531-question bank planned for future releases.)

### Timed Questions
- 2 minutes per question to simulate exam pacing.

### Answer Feedback
After each question, users receive:
- Correct/incorrect result  
- Detailed explanation  
- Reference links or documentation excerpts  

### Simple Single-Page UX
- Clean and lightweight
- Runs entirely in the browser
- No backend required

### Home Page Layout
- “AWS Exam Practice” section
- Cards allowing question-set selection
- Designed to expand with future certifications

---

## Roadmap

### Phase 1 — AWS CCP MVP (Current)
- Static app on GitHub Pages  
- Question set selection  
- Timer and explanations  
- Basic UI  

### Phase 2 — CCP Full Expansion
- Full set of 1,531 questions  
- Domain/category filtering  
- Learning mode vs. exam mode  
- Local progress tracking (localStorage)

### Phase 3 — Additional Certifications
Planned additions include:
- AWS AI Practitioner  
- AWS Solutions Architect – Associate  
- CompTIA Security+  
- CompTIA CySA+  
- Azure Fundamentals (AZ-900)  
- Google Cloud Digital Leader  
- Any others requested by contributors  

### Phase 4 — Community & Platform Growth
- Contributor guidelines  
- Translation support  
- Optional backend/API  
- Review workflows  

---

## Project Structure
(This will evolve as the platform grows.)

```
/src
    ├── App.css
    ├── aws_exam_app_with_timer.jsx
    ├── index.js
    ├── questions.json
    └── questions.jsx

---
```

## How to Contribute
We welcome contributors of all skill levels.

### Ways to Help
- Write practice questions  
- Provide explanations and references  
- Improve UI/UX  
- Translate content  
- Categorize questions  
- Add exam types  
- Review contributions  
- Etc.

### Steps
1. Fork the repository  
2. Create a new branch  
3. Add or edit files  
4. Submit a pull request  
5. Follow the PR template and question format  

A full `CONTRIBUTING.md` will be added as the community expands.

---

## Question Format

```json
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
```

### Images here 
- comming soon

## License
- comming soon


## Acknowledgements

Thank you to all contributors committed to making certification preparation accessible for learners worldwide, facing financial limitations. 

---

If you want in the furute we my provide 
- badges  
- more project  
- an expanded contributing guide  
- issue templates  
- a polished landing-page   

## Contant Me Here

Just Reach me: [Email contact roger@](mailto:roger9554321@gmail.com) | [Roger Campo LinkedIn](https://www.linkedin.com/in/roger-campo-cordova/)

