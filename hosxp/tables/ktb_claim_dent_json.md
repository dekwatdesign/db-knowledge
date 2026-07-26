# `ktb_claim_dent_json`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ktb_claim_dent_json_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| send_json_booking | text | YES |  | NULL |  |  |
| res_json_booking | text | YES |  | NULL |  |  |
| send_json_savemed | text | YES |  | NULL |  |  |
| res_json_savemed | text | YES |  | NULL |  |  |
| ktb_claim_dent_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refktbclaim_dent2 | ktb_claim_dent_id | no | 1 |
| PRIMARY | ktb_claim_dent_json_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
