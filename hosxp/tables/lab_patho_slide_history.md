# `lab_patho_slide_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_patho_slide_history_id | int(11) | NO | PRI | 0 |  |  |
| lab_order_number | int(11) | YES |  | NULL |  |  |
| lab_patho_slideno | varchar(50) | YES |  | NULL |  |  |
| lab_patho_slide_his_staff | varchar(255) | YES |  | NULL |  |  |
| lab_patho_slide_his_date | date | YES |  | NULL |  |  |
| lab_patho_slide_his_time | time | YES |  | NULL |  |  |
| lab_patho_slide_location_id | int(11) | YES | MUL | NULL |  |  |
| lab_patho_slide_status_id | int(11) | YES | MUL | NULL |  |  |
| lab_patho_rent_reason_id | int(11) | YES | MUL | NULL |  |  |
| lab_patho_slide_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Reflab_patho_rent_reason7 | lab_patho_rent_reason_id | no | 1 |
| ix_Reflab_patho_slide9 | lab_patho_slide_id | no | 1 |
| ix_Reflab_patho_slide_location5 | lab_patho_slide_location_id | no | 1 |
| ix_Reflab_patho_slide_status6 | lab_patho_slide_status_id | no | 1 |
| PRIMARY | lab_patho_slide_history_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
