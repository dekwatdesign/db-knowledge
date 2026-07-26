# `pcu_name506`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | tinyint(4) | NO | PRI | 0 |  |  |
| name | varchar(250) | YES | UNI | NULL |  |  |
| code506 | char(2) | YES |  | NULL |  |  |
| ename | varchar(150) | YES |  | NULL |  |  |
| disease_detail | longtext | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_name | name | yes | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
