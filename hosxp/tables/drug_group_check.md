# `drug_group_check`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| icode | varchar(7) | YES | MUL | NULL |  |  |
| group_name | varchar(25) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| icode | icode | no | 1 |
| icode_group_name | icode | no | 1 |
| icode_group_name | group_name | no | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_icode_group_name | group_name | no | 1 |
| ix_icode_group_name | icode | no | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
