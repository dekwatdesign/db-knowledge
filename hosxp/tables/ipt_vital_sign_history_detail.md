# `ipt_vital_sign_history_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_vital_sign_history_detail_id | int(11) | NO | PRI | 0 |  |  |
| ipt_vital_sign_history_id | int(11) | YES | MUL | NULL |  |  |
| vital_sign_id | int(11) | YES |  | NULL |  |  |
| vital_sign_value | varchar(250) | YES |  | NULL |  |  |
| ipt_vital_sign_history_detail_datetime | datetime | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_ipt_vital_sign_history_id | ipt_vital_sign_history_id | no | 1 |
| PRIMARY | ipt_vital_sign_history_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
