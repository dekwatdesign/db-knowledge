# `epidem_covid_report`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sv_number | int(11) | NO | PRI | 0 |  |  |
| treated_hospital_code | varchar(9) | YES |  | NULL |  |  |
| epidem_covid_lab_confirm_type_id | int(11) | YES |  | NULL |  |  |
| epidem_covid_symptom_type_id | int(11) | YES |  | NULL |  |  |
| pregnant_status | char(1) | YES |  | NULL |  |  |
| respirator_status | char(1) | YES |  | NULL |  |  |
| epidem_covid_accm_type_id | int(11) | YES |  | NULL |  |  |
| vaccinated_status | char(1) | YES |  | NULL |  |  |
| exposure_epidemic_area_status | char(1) | YES |  | NULL |  |  |
| exposure_healthcare_worker_status | char(1) | YES |  | NULL |  |  |
| exposure_closed_contact_status | char(1) | YES |  | NULL |  |  |
| exposure_occupation_status | char(1) | YES |  | NULL |  |  |
| exposure_travel_status | char(1) | YES |  | NULL |  |  |
| send_moph_status | char(1) | YES |  | NULL |  |  |
| send_moph_datetime | datetime | YES |  | NULL |  |  |
| isolate_chwpart | char(2) | YES |  | NULL |  |  |
| pcr_specimen_date | date | YES |  | NULL |  |  |
| epidem_covid_risk_his_id | int(11) | YES |  | NULL |  |  |
| epidem_covid_spcm_place_id | int(11) | YES |  | NULL |  |  |
| epidem_covid_isolate_place_id | int(11) | YES |  | NULL |  |  |
| epidem_covid_reason_type_id | int(11) | YES |  | NULL |  |  |
| lab_order_number | int(11) | YES |  | NULL |  |  |
| lab_items_code | int(11) | YES |  | NULL |  |  |
| lab_report_date | date | YES |  | NULL |  |  |
| lab_report_ref_name | varchar(255) | YES |  | NULL |  |  |
| lab_report_result | varchar(100) | YES |  | NULL |  |  |
| lab_tmlt_code | varchar(50) | YES |  | NULL |  |  |
| send_ddc_status | char(1) | YES |  | NULL |  |  |
| send_ddc_datetime | datetime | YES |  | NULL |  |  |
| dcc_response_message | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | sv_number | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
