# `psychiatric_form_electricity_order`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_form_electricity_order_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_form_electricity_order_servere_depression | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_high_suicidal_risk | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_catatonia | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_servere_mania | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_affective_features | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_history_previous_response | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_violent_behavior | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_not_response_to_medicine | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_other | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_staus_heart | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_general_appearance | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_copd | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_asthma | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_hypertension | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_cardiac_arrhy | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_headache | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_vomit | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_weak | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_blood_pressure | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_backache | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_picture | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_history_heart | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_ekg | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_ekg_desc | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_chest_xray | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_chest_xray_desc | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_clozapine | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_reserpine | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_theophyllin | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_lithium | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_maoi | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_ancticonvulsant | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_benzodiazepine | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_clozapine_desc | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_reserpine_desc | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_theophyliin_desc | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_lithium_desc | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_maoi_desc | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_anticonvulsant_desc | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_benzodiazepine_desc | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_diag | int(11) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_ward | int(11) | YES |  | NULL |  |  |
| doctor_id | int(11) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| opduser_id | int(11) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_date | date | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_number | int(11) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_sleep | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_comment | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_electricity_order_time | time | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_form_electricity_order_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
