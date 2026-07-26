# `ipt_service_charge`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| service_charge_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| charge_date | date | YES |  | NULL |  |  |
| room_opi_guid | varchar(38) | YES |  | NULL |  |  |
| food_opi_guid | varchar(38) | YES |  | NULL |  |  |
| nurse_opi_guid | varchar(38) | YES |  | NULL |  |  |
| icode_1_guid | varchar(38) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| an_charge_date | an | no | 1 |
| an_charge_date | charge_date | no | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | service_charge_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
