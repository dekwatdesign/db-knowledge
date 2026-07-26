# `person_anc_service_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_anc_service_detail_id | int(11) | NO | PRI | 0 |  |  |
| person_anc_service_id | int(11) | YES |  | NULL |  |  |
| anc_service_id | int(11) | YES |  | NULL |  |  |
| anc_doctor_code | varchar(7) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| vaccine_expire_date | date | YES |  | NULL |  |  |
| vaccine_lotno | varchar(50) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| service_note_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | person_anc_service_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
