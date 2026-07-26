# `lab_blood_queue_slot`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_blood_queue_slot_id | int(11) | NO | PRI | 0 |  |  |
| lab_blood_queue_slot_no | char(2) | YES |  | NULL |  |  |
| lab_blood_queue_slot_date | date | YES |  | NULL |  |  |
| lab_blood_queue_slot_type | varchar(50) | YES |  | NULL |  |  |
| staff | varchar(255) | YES |  | NULL |  |  |
| machine_name | varchar(100) | YES |  | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | lab_blood_queue_slot_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
