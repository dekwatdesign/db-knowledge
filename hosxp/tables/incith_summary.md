# `incith_summary`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(9) | NO | PRI |  |  |  |
| income | char(2) | NO | PRI |  |  |  |
| paidst | char(2) | NO | PRI |  |  |  |
| rcptamt | double(22,3) | YES |  | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| discount | double(15,3) | YES |  | NULL |  |  |
| tot_amount | double(15,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| income | income | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | an | yes | 1 |
| PRIMARY | income | yes | 2 |
| PRIMARY | paidst | yes | 3 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
