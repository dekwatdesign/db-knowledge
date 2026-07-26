# `incith_current`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| incith_current_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| income | char(2) | YES |  | NULL |  |  |
| amount | double(15,3) | YES |  | NULL |  |  |
| finance_number | varchar(7) | YES | MUL | NULL |  |  |
| finance_clear | char(1) | YES |  | NULL |  |  |
| paidst | char(2) | YES |  | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| finance_number | finance_number | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | incith_current_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
