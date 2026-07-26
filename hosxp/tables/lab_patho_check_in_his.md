# `lab_patho_check_in_his`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_patho_check_in_his_id | int(11) | NO | PRI | 0 |  |  |
| lab_order_number | int(11) | YES |  | NULL |  |  |
| lab_patho_slideno | varchar(255) | YES |  | NULL |  |  |
| lab_patho_slideno_count | int(11) | YES |  | NULL |  |  |
| lab_patho_history_date | date | YES |  | NULL |  |  |
| lab_patho_history_time | time | YES |  | NULL |  |  |
| lab_patho_history_staff | varchar(255) | YES |  | NULL |  |  |
| lab_patho_check_in_status_id | int(11) | YES | MUL | NULL |  |  |
| lab_patho_slide_check_in_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Reflab_patho_check_in_status11 | lab_patho_check_in_status_id | no | 1 |
| ix_Reflab_patho_slide_check_in13 | lab_patho_slide_check_in_id | no | 1 |
| PRIMARY | lab_patho_check_in_his_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
