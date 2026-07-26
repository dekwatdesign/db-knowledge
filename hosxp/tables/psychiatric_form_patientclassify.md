# `psychiatric_form_patientclassify`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_form_patientclassify_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_form_patientclassify_date | datetime | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| date_check | datetime | YES |  | NULL |  |  |
| acknowledge_time | char(10) | YES |  | NULL |  |  |
| control | char(10) | YES |  | NULL |  |  |
| takecare | char(10) | YES |  | NULL |  |  |
| talk_and_activity | char(10) | YES |  | NULL |  |  |
| amity | char(10) | YES |  | NULL |  |  |
| physical | char(10) | YES |  | NULL |  |  |
| pttype | char(10) | YES |  | NULL |  |  |
| s | char(10) | YES |  | NULL |  |  |
| a | char(10) | YES |  | NULL |  |  |
| v | char(10) | YES |  | NULL |  |  |
| e | char(10) | YES |  | NULL |  |  |
| doctor_name | varchar(50) | YES |  | NULL |  |  |
| psychiatric_form_patientclassify_acknowledge_time_id | int(11) | YES |  | NULL |  |  |
| psychiatric_form_patientclassify_control_id | int(11) | YES |  | NULL |  |  |
| psychiatric_form_patientclassify_takecare_id | char(10) | YES |  | NULL |  |  |
| psychiatric_form_patientclassify_talk_and_activity_id | char(10) | YES |  | NULL |  |  |
| psychiatric_form_patientclassify_amity_id | char(10) | YES |  | NULL |  |  |
| psychiatric_form_patientclassify_physical_id | char(10) | YES |  | NULL |  |  |
| psychiatric_form_patientclassify_pttype_id | char(10) | YES |  | NULL |  |  |
| psychiatric_form_patientclassify_spell_id | int(11) | YES |  | NULL |  |  |
| psychiatric_form_patientclassify_time | time | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_form_patientclassify_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
