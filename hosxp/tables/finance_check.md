# `finance_check`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rcpno | varchar(20) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| billdate | date | YES |  | NULL |  |  |
| billtime | time | YES |  | NULL |  |  |
| user | varchar(25) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| bill_amount | double(12,3) | YES |  | NULL |  |  |
| department | varchar(5) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
