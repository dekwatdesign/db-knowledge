# `rcpt_credit_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| credit_id | int(11) | NO | PRI | 0 |  |  |
| income | char(2) | NO | PRI |  |  |  |
| amount | double(15,3) | YES |  | NULL |  |  |
| discount | double(15,3) | YES |  | NULL |  |  |
| total_amount | double(15,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_credit_id | credit_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | credit_id | yes | 1 |
| PRIMARY | income | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
