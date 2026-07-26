# `lab_patho_slide_locker_box`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_patho_slide_locker_box_id | int(11) | NO | PRI | 0 |  |  |
| slide_locker_box_name | varchar(255) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |
| slide_locker_floor | int(11) | YES |  | NULL |  |  |
| lab_patho_slide_locker_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Reflab_patho_slide_locker14 | lab_patho_slide_locker_id | no | 1 |
| PRIMARY | lab_patho_slide_locker_box_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
