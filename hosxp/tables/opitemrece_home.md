# `opitemrece_home`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opitemrece_home_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| opi_guid | varchar(38) | YES | UNI | NULL |  |  |
| opitemrece_home_type_id | int(11) | YES |  | NULL |  |  |
| order_no | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_an_guid | an | no | 1 |
| ix_an_guid | opi_guid | no | 2 |
| ix_an_order_no | an | no | 1 |
| ix_an_order_no | order_no | no | 2 |
| ix_opi_guid | opi_guid | yes | 1 |
| PRIMARY | opitemrece_home_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
