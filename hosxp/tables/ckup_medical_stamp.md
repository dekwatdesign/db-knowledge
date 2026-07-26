# `ckup_medical_stamp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_medical_stamp_id | int(11) | NO | PRI | 0 |  |  |
| ckup_prog_id | int(11) | YES | MUL | NULL |  |  |
| ckup_service_id | int(11) | YES | MUL | NULL |  |  |
| ckup_medical_stamp_check | char(1) | YES |  | NULL |  |  |
| ckup_medical_stamp_date | date | YES |  | NULL |  |  |
| ckup_medical_stamp_time | time | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| staff | varchar(250) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| ckup_medical_stamp_first_vn | varchar(13) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ckup_prog_id | ckup_prog_id | no | 1 |
| ix_ckup_service_id | ckup_service_id | no | 1 |
| PRIMARY | ckup_medical_stamp_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
