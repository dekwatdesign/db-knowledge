# `drugitems_icd10`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_icd10_id | int(11) | NO | PRI | 0 |  |  |
| icode | char(7) | YES | MUL | NULL |  |  |
| icd10_code | varchar(10) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| drugitems_icd10_rt_type_id | int(11) | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_icode | icode | no | 1 |
| PRIMARY | drugitems_icd10_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
