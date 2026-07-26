# `labour_membrane_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| menbrane_type_id | int(11) | NO | PRI | 0 |  |  |
| membrane_type_name | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | menbrane_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
