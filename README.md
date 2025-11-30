# Inbound Lead Enrichment and AI Personalized Outreach Automation with n8n
### How to Turn a “Contact Us” Form Submission Into a Fully Automated Lead Enrichment System
Technologies used: 
- *HubSpot* as the CRM
- *Crunchbase* and *Bright Data* for scraping
- *JavaScript* for cleaning and transforming data
- *Google Gemini* for personalized email generation
- *Slack* and *Gmail* for communications
- *Asana* for task management

This system turns inbound leads from simple form submissions into fully qualified, enriched, and ready-to-outreach contacts, all without manual intervention. By combining company and lead enrichment, automated scoring, and AI-generated outreach, sales and marketing teams eliminate tedious research, reduce response times, and increase conversion by booking calls with warm leads immediately.

This automation was created by *Ingrid Coll*. See my other projects on GitHub at [github.com/ingridcoll](https://github.com/ingridcoll) or send me a LinkedIn message at [linkedin.com/in/ingridcoll](https://www.linkedin.com/in/ingridcoll/) with any questions or business inquiries!

## In PHASE 1: Company Enrichment...
### A simple company website field is turned into a fully validated, enriched company profile, automatically synced with the CRM.
<img width="1426" height="484" alt="image" src="https://github.com/user-attachments/assets/3b306164-9db0-4b67-ad51-e9bd023d24b1" />

- Automatically extracts and standardizes the company website.
- Stops enrichment if the company already exists in the CRM.
- Launches Crunchbase scraping via Bright Data API.
- Provides verified, structured company information: **name, industry, size, funding, products, and technologies used**.
- Eliminates manual research and ensures no wasted enrichment cycles.
- Enables sales and marketing teams to quickly understand the lead’s company, prioritize opportunities, and make fast decisions.
## In PHASE 2: Lead Enrichment...
### The inbound lead becomes a fully enriched, outreach-ready contact.
<img width="1423" height="436" alt="image" src="https://github.com/user-attachments/assets/9a9e6330-a429-4268-ae95-0109eda700e7" />

- Pulls LinkedIn data including job title, current company, location, experience, education, certifications, and recent activity.
- Cleans and structures arrays and text fields, with fallbacks for missing or malformed data.
- Applies a weighted lead scoring model based on location, role, seniority, product interest, goals, and engagement signals.
- Delivers a complete, accurate lead profile and adds it to the CRM.
- Highlights decision-makers and high-value prospects automatically.
- Notifies the sales team by creating an Asana task and sending a message via Slack.
## In PHASE 3: Personalized Outreach Automation...
### Turns enriched lead and company data into a ready-to-send, highly personalized email for the assigned contact owner.
Automatically fetches the lead and company profile from HubSpot once a contact owner is assigned.
Uses Google Gemini AI to craft a tailored email based on the lead’s profile, interests, challenges, and company context. It even takes into account the latest LinkedIn activity to reference recently-liked posts!
Verifies the contact owner’s availability to suggest meeting times.
Creates a Gmail draft pre-populated with the personalized email and meeting options, ready for quick review and send.
Provides a fully personalized, high-conversion email without manual drafting.
Saves the sales team time while increasing engagement quality.
Ensures outreach is timely, relevant, and aligned with the contact owner’s schedule, boosting the likelihood of booking meetings and advancing leads.

