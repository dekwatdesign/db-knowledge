# `dt_prevent_perio`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_prevent_perio_id | int(11) | NO | PRI | 0 |  |  |
| dt_prevent_perio_periodontal | varchar(30) | YES |  | NULL |  |  |
| dt_prevent_perio_condition | varchar(30) | YES |  | NULL |  |  |
| dt_prevent_perio_note | text | YES |  | NULL |  |  |
| dt_prevent_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_prevent22 | dt_prevent_id | no | 1 |
| PRIMARY | dt_prevent_perio_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
