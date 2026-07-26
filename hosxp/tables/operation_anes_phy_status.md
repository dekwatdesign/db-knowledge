# `operation_anes_phy_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_anes_phy_status_id | int(11) | NO | PRI | 0 |  |  |
| operation_anes_phy_status_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_operation_anes_phy_status_name | operation_anes_phy_status_name | yes | 1 |
| PRIMARY | operation_anes_phy_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
