# `social_aid`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| social_aid_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | UNI | NULL |  |  |
| old_pttype | char(2) | YES |  | NULL |  |  |
| new_pttype | char(2) | YES |  | NULL |  |  |
| paid_amount | double(15,3) | YES |  | NULL |  |  |
| debt_amount | double(15,3) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| transaction_datetime | datetime | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn_unique_unique | vn | yes | 1 |
| PRIMARY | social_aid_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
