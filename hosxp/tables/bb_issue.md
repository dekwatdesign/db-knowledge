# `bb_issue`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| issueid | int(11) | NO | PRI | 0 |  |  |
| senderid | int(11) | YES |  | NULL |  |  |
| issuetypeid | int(11) | YES |  | NULL |  |  |
| issue_date | date | YES |  | NULL |  |  |
| issue_time | time | YES |  | NULL |  |  |
| recorder | varchar(20) | YES |  | NULL |  |  |
| issue_realdate | date | YES |  | NULL |  |  |
| issue_realtime | time | YES |  | NULL |  |  |
| receiver | varchar(20) | YES |  | NULL |  |  |
| recomment_date | date | YES |  | NULL |  |  |
| cutting | char(1) | YES |  | NULL |  |  |
| lastdiag | varchar(255) | YES |  | NULL |  |  |
| doctor | varchar(20) | YES |  | NULL |  |  |
| note | varchar(255) | YES |  | NULL |  |  |
| screening | char(1) | YES |  | NULL |  |  |
| request_date | date | YES |  | NULL |  |  |
| request_time | time | YES |  | NULL |  |  |
| afterdescription | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | issueid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
