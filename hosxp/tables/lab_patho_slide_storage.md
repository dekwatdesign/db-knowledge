# `lab_patho_slide_storage`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_patho_slide_storage_id | int(11) | NO | PRI | 0 |  |  |
| lab_patho_head_id | int(11) | YES |  | NULL |  |  |
| lab_order_number | int(11) | YES |  | NULL |  |  |
| lab_patho_slide_storage_date | date | YES |  | NULL |  |  |
| lab_patho_slide_storage_time | time | YES |  | NULL |  |  |
| rent_slide_status | char(1) | YES |  | NULL |  |  |
| staff | varchar(200) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| lab_patho_slide_check_in_id | int(11) | YES | MUL | NULL |  |  |
| lab_patho_slide_locker_box_id | int(11) | YES | MUL | NULL |  |  |
| lab_patho_slide_locker_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Reflab_patho_slide_check_in12 | lab_patho_slide_check_in_id | no | 1 |
| ix_Reflab_patho_slide_locker17 | lab_patho_slide_locker_id | no | 1 |
| ix_Reflab_patho_slide_locker_box16 | lab_patho_slide_locker_box_id | no | 1 |
| PRIMARY | lab_patho_slide_storage_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
