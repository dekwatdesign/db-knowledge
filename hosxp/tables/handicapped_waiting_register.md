# `handicapped_waiting_register`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| handicapped_waiting_register_id | int(11) | NO | PRI | 0 |  |  |
| cid | varchar(13) | YES |  | NULL |  |  |
| person_id | int(11) | YES |  | NULL |  |  |
| register_date | date | YES |  | NULL |  |  |
| certificate_date | date | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| handicapped_patient_register_id | int(11) | YES |  | NULL |  |  |
| hdc_type | varchar(255) | YES |  | NULL |  |  |
| hdc_type_detail | varchar(255) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | handicapped_waiting_register_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
