# `operation_screen_in`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_id | int(11) | NO | PRI | 0 |  |  |
| in_date_time | datetime | YES | MUL | NULL |  |  |
| bps | double(15,3) | YES |  | NULL |  |  |
| bpd | double(15,3) | YES |  | NULL |  |  |
| temperature | double(15,3) | YES |  | NULL |  |  |
| rr | double(15,3) | YES |  | NULL |  |  |
| hr | double(15,3) | YES |  | NULL |  |  |
| coma_score | int(11) | YES |  | NULL |  |  |
| preoperative_nursing_record | longtext | YES |  | NULL |  |  |
| last_meal_hour | int(11) | YES |  | NULL |  |  |
| perioperative_record | longtext | YES |  | NULL |  |  |
| postoperative_record | longtext | YES |  | NULL |  |  |
| bw | double(15,3) | YES |  | NULL |  |  |
| chronic_disease | varchar(200) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| in_date_time | in_date_time | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | operation_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
