# `referout_reply_diag`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hcode | varchar(5) | NO | PRI |  |  |  |
| rec_no | int(11) | NO | PRI | 0 |  |  |
| referout_no | varchar(20) | NO | PRI |  |  |  |
| icd10 | varchar(7) | YES | MUL | NULL |  |  |
| diagtype_id | varchar(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hcode | hcode | no | 1 |
| hcode | referout_no | no | 2 |
| icd10 | icd10 | no | 1 |
| PRIMARY | hcode | yes | 1 |
| PRIMARY | referout_no | yes | 2 |
| PRIMARY | rec_no | yes | 3 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
