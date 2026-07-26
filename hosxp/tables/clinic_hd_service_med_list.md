# `clinic_hd_service_med_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_hd_service_med_list_id | int(11) | NO | PRI | 0 |  |  |
| clinic_hd_service_id | int(11) | YES | MUL | NULL |  |  |
| clinic_hd_med_type_id | int(11) | YES |  | NULL |  |  |
| clinic_hd_med_route_type_id | int(11) | YES |  | NULL |  |  |
| med_time | time | YES |  | NULL |  |  |
| doctor_code | varchar(25) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| med_note | text | YES |  | NULL |  |  |
| med_drugusage_text | varchar(255) | YES |  | NULL |  |  |
| drugusage | varchar(7) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_service_id | clinic_hd_service_id | no | 1 |
| PRIMARY | clinic_hd_service_med_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
