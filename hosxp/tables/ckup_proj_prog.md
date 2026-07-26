# `ckup_proj_prog`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_proj_prog_id | int(11) | NO | PRI | 0 |  |  |
| ckup_prog_id | int(11) | YES | MUL | NULL |  |  |
| ckup_proj_id | int(11) | YES | MUL | NULL |  |  |
| ckup_proj_prog_surplus | double(13,3) | YES |  | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ckup_prog_id | ckup_prog_id | no | 1 |
| ix_ckup_proj_id | ckup_proj_id | no | 1 |
| PRIMARY | ckup_proj_prog_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
