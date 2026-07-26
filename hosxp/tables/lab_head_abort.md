# `lab_head_abort`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_head_abort_id | int(11) | NO | PRI | 0 |  |  |
| lab_order_number | int(11) | YES | UNI | NULL |  |  |
| lab_abort_type_id | int(11) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| abort_datetime | datetime | YES |  | NULL |  |  |
| abort_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lab_order_number | lab_order_number | yes | 1 |
| PRIMARY | lab_head_abort_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
