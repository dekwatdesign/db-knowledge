# `dt_surgery_prepfu`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_surgery_prepfu_id | int(11) | NO | PRI | 0 |  |  |
| dtarea | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_prepfu_op_day | date | YES |  | NULL |  |  |
| dt_surgery_prepfu_follow | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_prepfu_status | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_prepfu_note | text | YES |  | NULL |  |  |
| dt_surgery_main_id | int(11) | YES |  | NULL |  |  |
| dt_surgery_add_date | date | YES |  | NULL |  |  |
| dt_surgery_edit_date | datetime | YES |  | NULL |  |  |
| dt_surgery_fol_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_surgery_prepfu_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
