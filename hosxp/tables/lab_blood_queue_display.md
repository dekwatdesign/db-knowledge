# `lab_blood_queue_display`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_blood_queue_display_id | int(11) | NO | PRI | 0 |  |  |
| lab_blood_queue_display_date | date | YES |  | NULL |  |  |
| lab_blood_queue_display_time | time | YES |  | NULL |  |  |
| lab_blood_queue_display_no | int(11) | YES |  | NULL |  |  |
| lab_blood_queue_display_type | char(2) | YES |  | NULL |  |  |
| lab_blood_queue_display_slot | varchar(10) | YES |  | NULL |  |  |
| call_status | char(1) | YES |  | NULL |  |  |
| lab_blood_queue_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | lab_blood_queue_display_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
