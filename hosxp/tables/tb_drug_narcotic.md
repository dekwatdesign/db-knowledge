# `tb_drug_narcotic`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| icode | varchar(10) | NO | PRI |  |  |  |
| narcotic_type | char(3) | NO | PRI |  |  |  |
| name | varchar(255) | YES |  | NULL |  |  |
| item_satus | char(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | icode | yes | 1 |
| PRIMARY | narcotic_type | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
