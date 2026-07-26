# `lab_patho_slide`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_patho_slide_id | int(11) | NO | PRI | 0 |  |  |
| lab_patho_head_id | int(11) | YES |  | NULL |  |  |
| lab_order_number | int(11) | YES |  | NULL |  |  |
| lab_patho_slideno | varchar(50) | YES |  | NULL |  |  |
| lab_patho_slideno_count | int(11) | YES |  | NULL |  |  |
| lab_patho_rent_slide_date | date | YES |  | NULL |  |  |
| lab_patho_rent_slide_time | time | YES |  | NULL |  |  |
| lab_patho_rent_slide_staff | varchar(200) | YES |  | NULL |  |  |
| lab_patho_return_slide_date | date | YES |  | NULL |  |  |
| lab_patho_return_slide_time | time | YES |  | NULL |  |  |
| lab_patho_return_slide_staff | varchar(200) | YES |  | NULL |  |  |
| staff | varchar(200) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| lab_patho_slide_location_id | int(11) | YES | MUL | NULL |  |  |
| lab_patho_slide_status_id | int(11) | YES | MUL | NULL |  |  |
| lab_patho_rent_reason_id | int(11) | YES | MUL | NULL |  |  |
| lab_patho_slide_storage_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Reflab_patho_rent_reason4 | lab_patho_rent_reason_id | no | 1 |
| ix_Reflab_patho_slide_location2 | lab_patho_slide_location_id | no | 1 |
| ix_Reflab_patho_slide_status3 | lab_patho_slide_status_id | no | 1 |
| ix_Reflab_patho_slide_storage8 | lab_patho_slide_storage_id | no | 1 |
| PRIMARY | lab_patho_slide_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
