# `ckup_prog_lab_form`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_prog_lab_form_id | int(11) | NO | PRI | 0 |  |  |
| ckup_prog_id | int(11) | YES | MUL | NULL |  |  |
| ckup_prog_lab_form_data | longtext | YES |  | NULL |  |  |
| ckup_prog_lab_form_lastupdate | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_ckup_prog_id | ckup_prog_id | no | 1 |
| PRIMARY | ckup_prog_lab_form_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
