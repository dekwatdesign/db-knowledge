# `psy_register`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_register_id | int(11) | NO | PRI | 0 |  |  |
| psy_register_regdate | date | YES |  | NULL |  |  |
| hn | varchar(10) | YES | MUL | NULL |  |  |
| psy_register_lastupdate | datetime | YES |  | NULL |  |  |
| psy_register_severe_level_id | int(11) | YES | MUL | NULL |  |  |
| psy_register_doctor | varchar(10) | YES | MUL | NULL |  |  |
| psy_register_begin_year | int(11) | YES |  | NULL |  |  |
| psy_register_close_data | varchar(10) | YES |  | NULL |  |  |
| psy_register_note | varchar(255) | YES |  | NULL |  |  |
| psy_register_registration_number | varchar(10) | YES |  | NULL |  |  |
| clinic_member_status_id | int(11) | YES | MUL | NULL |  |  |
| clinic_subtype_id | int(11) | YES | MUL | NULL |  |  |
| clinic | varchar(6) | YES | MUL | NULL |  |  |
| psy_register_from_hospcode | varchar(9) | YES | MUL | NULL |  |  |
| psy_register_patient_place_check | char(1) | YES |  | NULL |  |  |
| psy_register_identity_diag | text | YES |  | NULL |  |  |
| psy_register_staff | varchar(30) | YES |  | NULL |  |  |
| psy_register_dchdate | date | YES |  | NULL |  |  |
| psy_register_number | int(11) | YES |  | NULL |  |  |
| hhc_discharge_type_id | int(11) | YES |  | NULL |  |  |
| psy_register_discharge | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| online_psy_register_id | int(11) | YES |  | NULL |  |  |
| online_register_datetime | datetime | YES |  | NULL |  |  |
| online_register_staff | varchar(20) | YES |  | NULL |  |  |
| online_register_status | varchar(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_Ref41 | hn | no | 1 |
| ix_Ref4757 | psy_register_doctor | no | 1 |
| ix_Ref5771 | clinic_member_status_id | no | 1 |
| ix_Ref5873 | clinic_subtype_id | no | 1 |
| ix_Ref5975 | psy_register_from_hospcode | no | 1 |
| ix_Ref6074 | clinic | no | 1 |
| ix_Ref911 | psy_register_severe_level_id | no | 1 |
| PRIMARY | psy_register_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
