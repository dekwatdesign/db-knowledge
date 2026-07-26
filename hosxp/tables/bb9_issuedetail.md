# `bb9_issuedetail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| issuedetail_id | int(11) | NO | PRI | 0 |  |  |
| request_id | int(11) | YES | MUL | NULL |  |  |
| blood_id | varchar(25) | YES | MUL | NULL |  |  |
| issue_date | date | YES |  | NULL |  |  |
| issue_time | time | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| blood_id | blood_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | issuedetail_id | yes | 1 |
| request_id | request_id | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
