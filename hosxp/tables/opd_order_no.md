# `opd_order_no`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_order_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| vstdate | date | YES | MUL | NULL |  |  |
| order_no | int(11) | YES |  | NULL |  |  |
| spclty | char(2) | YES |  | NULL |  |  |
| doctor | varchar(7) | YES |  | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| amount | double(15,3) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| order_complete | char(1) | YES |  | NULL |  |  |
| tx_doctor | varchar(7) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn | vn | no | 1 |
| ix_vstdate | vstdate | no | 1 |
| PRIMARY | opd_order_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
