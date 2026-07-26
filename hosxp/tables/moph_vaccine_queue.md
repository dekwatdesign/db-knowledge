# `moph_vaccine_queue`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| moph_vaccine_queue_id | int(11) | NO | PRI | 0 |  |  |
| cid | varchar(13) | YES | MUL | NULL |  |  |
| hospital_code | varchar(9) | YES |  | NULL |  |  |
| hospital_name | varchar(250) | YES |  | NULL |  |  |
| main_queue_no | int(11) | YES |  | NULL |  |  |
| sub_queue_no | int(11) | YES |  | NULL |  |  |
| update_flag | char(1) | YES |  | NULL |  |  |
| vaccine_manufacturer_id | int(11) | YES |  | NULL |  |  |
| vaccine_manufacturer_name | varchar(100) | YES |  | NULL |  |  |
| queue_datetime | datetime | YES |  | NULL |  |  |
| hospital_person_queue_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cid | cid | no | 1 |
| ix_cid_updateflag | cid | no | 1 |
| ix_cid_updateflag | update_flag | no | 2 |
| PRIMARY | moph_vaccine_queue_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
