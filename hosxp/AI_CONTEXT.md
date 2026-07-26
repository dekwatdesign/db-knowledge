# AI Context: HOSxP Hospital Information System (`hos`)

This document provides high-level context for the `hos` database schema, which serves as the core backend database for **HOSxP** — a comprehensive Hospital Information System (HIS) widely deployed across hospitals and healthcare centers in Thailand.

## System Overview & Core Modules

The `hos` database schema supports full clinical workflows, hospital administration, patient care, diagnostic services, billing, and national healthcare data reporting across 10 major domains:

1. **Patient Registry & Demographics (`patient`, `person`, `family_person`, `provis_person`)**
   - Stores master patient demographics, Hospital Numbers (HN), National ID numbers (CID), contact details, blood groups, family household linkages, and demographic classifications.

2. **Outpatient Department (OPD) (`ovst`, `ovstdiag`, `opd_screening`, `opdscreen`)**
   - Tracks OPD visit registrations (VN), nursing vital sign screenings, primary chief complaints, outpatient ICD-10 diagnoses, doctor consultation notes, and clinic assignments.

3. **Inpatient Department (IPD) (`ipt`, `iptdiag`, `an_stat`, `ipt_bed`, `ward`)**
   - Manages admission records (AN), ward and bed assignments, daily IPD nursing notes, doctor discharge summaries, ICD-9-CM procedure coding, and length of stay calculations.

4. **Pharmacy & Medication Dispensing (`drugitems`, `opitemrece`, `drugusage`, `patient_adr`, `allergy_list`)**
   - Maintains drug catalog master records, electronic prescription orders, drug dispensing workflows, drug allergy verification, Adverse Drug Reaction (ADR) monitoring, and inventory stock deductions.

5. **Laboratory Information System (LIS) (`lab_head`, `lab_order`, `lab_items`, `lab_specimen`)**
   - Handles laboratory test order requests, specimen collection logs, lab test result entries, reference ranges, and critical result alerts.

6. **Radiology & Medical Imaging (`xray_report`, `xray_items`, `xray_room`, `xray_side`, `xray_status`)**
   - Manages X-ray, CT, MRI, and Ultrasound procedure requests, radiologist diagnostic report transcriptions, film consumption logs, and examination statuses.

7. **Emergency & Trauma Care (`accident_patient_list`, `er_regist`, `er_nursing_detail`)**
   - Tracks emergency room triage levels, accident and trauma logs, emergency resuscitation interventions, ambulance transport, and transfer records.

8. **Specialized Clinical Services & Health Promotion (`anc_*`, `epi_*`, `ncd_*`, `dental_*`, `physic_*`)**
   - Supports specialized care modules including Antenatal Care (ANC), Child Immunization (EPI), Non-Communicable Diseases (NCD - Diabetes/Hypertension clinics), Dental procedures, and Physical Therapy evaluations.

9. **Billing, Health Insurance & Financial Claims (`incmain`, `opitemrece`, `rcpt_print`, `pttype`, `claim_*`)**
   - Controls patient health benefit rights (Universal Coverage/Gold Card, Social Security, Civil Servant CSMBS), itemized service charges, receipt generation, and electronic insurance claim data processing.

10. **National Health Data Reporting (`f43_*`, `provis_*`, 43-File Standard)**
    - Stores standardized health data structures required for MOPH national reporting, 43-file health data exports, and regional health data exchange standards.

## Data Privacy & Masking Notice
All sample records contained in table documentation files under `tables/` have been processed to mask safety-sensitive personal information (including Thai 13-digit National IDs, names, surnames, signatures, and avatar images) to ensure compliance with data protection policies.
