# `finance_deposit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| finance_deposit_id | int(11) | NO | PRI | 0 |  |  |
| department | char(3) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| deposit_date | date | YES | MUL | NULL |  |  |
| deposit_time | time | YES |  | NULL |  |  |
| staff | varchar(25) | YES | MUL | NULL |  |  |
| deposit_amount | double(15,3) | YES |  | NULL |  |  |
| deposit_name | varchar(100) | YES |  | NULL |  |  |
| deposit_note | varchar(200) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| department | department | no | 1 |
| deposit_date | deposit_date | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_staff | staff | no | 1 |
| PRIMARY | finance_deposit_id | yes | 1 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
