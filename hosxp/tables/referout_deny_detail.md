# `referout_deny_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rec_no | int(11) | NO | PRI | 0 |  |  |
| deny_id | int(11) | YES |  | NULL |  |  |
| hospcode | varchar(5) | YES |  | NULL |  |  |
| coordinate_cause_id | varchar(5) | YES |  | NULL |  |  |
| deny_level | varchar(3) | YES |  | NULL |  |  |
| remark | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | rec_no | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
