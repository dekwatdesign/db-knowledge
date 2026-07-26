# `ucep_items`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| Type | int(11) | NO | PRI | NULL |  |  |
| Code | varchar(15) | NO | PRI | NULL |  |  |
| Name | varchar(200) | YES |  | NULL |  |  |
| Unit | varchar(20) | YES |  | NULL |  |  |
| DRG | varchar(2) | YES |  | NULL |  |  |
| Price | double(15,2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| code | Code | no | 1 |
| PRIMARY | Type | yes | 1 |
| PRIMARY | Code | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
