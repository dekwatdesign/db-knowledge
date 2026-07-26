# `birth_asphyxia`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| birth_asphyxia_id | int(11) | NO | PRI | 0 |  |  |
| birth_asphyxia_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_birth_asphyxia_name | birth_asphyxia_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | birth_asphyxia_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
