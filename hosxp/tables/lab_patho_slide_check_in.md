# `lab_patho_slide_check_in`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_patho_slide_check_in_id | int(11) | NO | PRI | 0 |  |  |
| lab_patho_head_id | int(11) | YES |  | NULL |  |  |
| lab_order_number | int(11) | YES |  | NULL |  |  |
| lab_patho_slideno | varchar(255) | YES |  | NULL |  |  |
| lab_patho_slideno_count | char(10) | YES |  | NULL |  |  |
| lab_patho_check_in_date | date | YES |  | NULL |  |  |
| lab_patho_check_in_time | time | YES |  | NULL |  |  |
| lab_patho_check_in_staff | varchar(255) | YES |  | NULL |  |  |
| staff | varchar(255) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| lab_patho_check_in_status_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Reflab_patho_check_in_status10 | lab_patho_check_in_status_id | no | 1 |
| PRIMARY | lab_patho_slide_check_in_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
