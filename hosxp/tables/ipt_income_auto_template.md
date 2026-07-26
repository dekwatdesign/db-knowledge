# `ipt_income_auto_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| name | varchar(150) | YES | MUL | NULL |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_name_icode_unique | icode | yes | 1 |
| ix_name_icode_unique | name | yes | 2 |
| name_icode_unique | name | yes | 1 |
| name_icode_unique | icode | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
