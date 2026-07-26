# `lab_patho_tgist`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_patho_tgist_id | int(11) | NO | PRI | 0 |  |  |
| doctorcode | varchar(15) | YES |  | NULL |  |  |
| lab_patho_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | lab_patho_id | no | 1 |
| PRIMARY | lab_patho_tgist_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
