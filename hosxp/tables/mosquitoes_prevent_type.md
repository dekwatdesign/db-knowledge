# `mosquitoes_prevent_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| mosquitoes_prevent_type_id | int(11) | NO | PRI | 0 |  |  |
| mosquitoes_prevent_type_name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_mosquitoes_prevent_type_name | mosquitoes_prevent_type_name | yes | 1 |
| PRIMARY | mosquitoes_prevent_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
