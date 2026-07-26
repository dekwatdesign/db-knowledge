# `report_staff_right`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| report_staff_right_id | int(11) | NO | PRI | 0 |  |  |
| report_staff_id | int(11) | YES | MUL | NULL |  |  |
| report_right_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_report_staff_right_unique | report_staff_id | yes | 1 |
| ix_report_staff_right_unique | report_right_id | yes | 2 |
| PRIMARY | report_staff_right_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
