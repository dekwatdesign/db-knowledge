# `person_wbc_vaccine_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_wbc_vaccine_detail_id | int(11) | NO | PRI | 0 |  |  |
| person_wbc_service_id | int(11) | YES | MUL | NULL |  |  |
| wbc_vaccine_id | int(11) | YES |  | NULL |  |  |
| doctor_code | varchar(7) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| vaccine_lotno | varchar(50) | YES |  | NULL |  |  |
| vaccine_expire_date | date | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| abnormal_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_wbc_service_id | person_wbc_service_id | no | 1 |
| PRIMARY | person_wbc_vaccine_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
