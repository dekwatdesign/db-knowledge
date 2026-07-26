# AI Context: Gotowin Backoffice (`gtw`)

This document provides high-level context for the `gtw` database schema, which serves as the backend database for the **Gotowin Backoffice Management System** — an Enterprise Resource Planning (ERP) platform tailored for hospital and healthcare organization operations.

## System Overview & Core Modules

The `gtw` database manages organizational assets, human resources, electronic document flow, employee leave, maintenance repairs, fleet management, supplies, and payroll:

1. **Human Resource Management (`hrd_*`, `users`)**
   - Stores employee master profiles (`hrd_person`), department hierarchies (`hrd_department`, `hrd_department_sub`, `hrd_department_sub_sub`), job positions (`hrd_position`), education/training history (`hrd_tr_edu`, `hrd_tr_train_spacial`), and system authentication accounts (`users`).

2. **Asset & Medical Equipment Management (`asset_*`)**
   - Tracks organizational assets and medical devices (`asset_article`), asset classifications (`asset_class`, `asset_group`), borrowing records (`asset_borrow`), depreciation (`asset_depreciate`), maintenance repair (`asset_care_repair`), and medical equipment calibration (`asset_pa_calibration`, `asset_pa_medical_mas`).

3. **Electronic Document System (`gbook_*`)**
   - Manages electronic correspondence and official memos. Tracks document entry (`gbook_index`), internal/external mail routing (`gbook_send_inside`, `gbook_send_person`), document secret levels (`gbook_secret`), and urgency statuses (`gbook_instant`).

4. **Leave Management System (`gleave_*`)**
   - Handles personnel leave registrations (`gleave_register`), leave entitlements and rules (`gleave_person_type_rules`, `gleave_over`), leave type definitions (`gleave_type`), and multi-tier approval hierarchies (`gleave_leader`).

5. **IT & Maintenance Repair System (`informcom_*`, `informrepair_*`, `infomrepair_*`)**
   - Manages IT hardware/software repair service tickets (`informcom_repair`), general facility repair requests (`informrepair_index`), repair technician assignments (`informcom_engineer`), and repair status tracking (`informrepair_status`).

6. **Vehicle & Ambulance Fleet Management (`vehicle_*`)**
   - Handles vehicle reservation requests (`vehicle_car_reserve`), patient referral transportation (`vehicle_car_refer`), driver assignments (`vehicle_car_driver`), vehicle maintenance, insurance, and tax details (`vehicle_car_act_detail`, `vehicle_car_tax_detail`).

7. **Meeting Room & Catering Reservation (`meetingroom_*`, `meetting_inside_*`)**
   - Manages meeting room bookings (`meetingroom_index`), equipment provisions (`meetingroom_equipment`), catering/food services (`meetingroom_food`), and internal meeting schedules.

8. **Supply Chain & Inventory Management (`supplies_*`, `supply_*`, `warehouse_*`)**
   - Controls supply catalog (`supplies`), inventory requisitions (`supplies_request`), purchase orders (`supplies_order`), vendor records (`supplies_vendor`), and warehouse export distributions (`warehouse_treasury_export_sub`).

9. **Salary & Payroll Processing (`salary_*`)**
   - Handles salary slips (`salary_slip`), payroll receipts/payments (`salary_pay`, `salary_receive`), salary loans (`salary_borrow`), and salary certification documents (`salary_certificate`).

10. **Work Performance & Duty Management (`infowork_*`, `operate_*`, `grecord_*`)**
    - Tracks duty shift schedules and shift swaps (`operate_swap`), job descriptions (`infowork_job_descriptions`), employee KPIs and performance evaluations (`infowork_kpis`), and official duty travel records (`grecord_go`).

## Data Privacy & Masking Notice
All sample records contained in table documentation files under `tables/` have been processed to mask safety-sensitive personal information (including Thai 13-digit National IDs, names, surnames, signatures, and avatar images) to ensure compliance with data protection policies.
