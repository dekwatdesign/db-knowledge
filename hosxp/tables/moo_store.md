# `moo_store`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| name | varchar(150) | NO | PRI |  |  |  |
| moid | varchar(8) | NO | PRI |  |  |  |
| owner | varchar(150) | YES |  | NULL |  |  |
| address | varchar(250) | YES |  | NULL |  |  |
| employee_male | tinyint(4) | YES |  | NULL |  |  |
| employee_female | tinyint(4) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| moid | moid | no | 1 |
| PRIMARY | name | yes | 1 |
| PRIMARY | moid | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
