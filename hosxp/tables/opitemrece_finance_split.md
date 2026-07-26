# `opitemrece_finance_split`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opitemrece_finance_split_id | int(11) | NO | PRI | 0 |  |  |
| vnan | varchar(12) | YES | MUL | NULL |  |  |
| opi_guid | varchar(38) | YES | UNI | NULL |  |  |
| master_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_master_guid | master_guid | no | 1 |
| ix_opi_guid | opi_guid | yes | 1 |
| ix_vnan | vnan | no | 1 |
| ix_vn_opi_guid | opi_guid | no | 1 |
| ix_vn_opi_guid | vnan | no | 2 |
| PRIMARY | opitemrece_finance_split_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
