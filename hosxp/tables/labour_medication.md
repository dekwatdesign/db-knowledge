# `labour_medication`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| labour_medication_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| drugusage | varchar(9) | YES |  | NULL |  |  |
| medication_note_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| PRIMARY | labour_medication_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
