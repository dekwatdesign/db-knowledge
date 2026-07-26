# `inv_substock_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| substock_id | int(11) | NO | PRI | 0 |  |  |
| substock_name | varchar(250) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | substock_id | yes | 1 |
| substock_name | substock_name | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
