# `labor_drug`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| labordrugid | int(11) | NO | PRI | 0 |  |  |
| laborid | int(11) | YES | MUL | NULL |  |  |
| labordrugname | varchar(50) | YES |  | NULL |  |  |
| labordrugtype | int(11) | YES |  | NULL |  |  |
| infant_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| laborid | laborid | no | 1 |
| PRIMARY | labordrugid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
