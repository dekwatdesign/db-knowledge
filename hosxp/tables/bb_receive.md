# `bb_receive`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| receiveid | int(11) | NO | PRI | 0 |  |  |
| senderid | int(11) | YES |  | NULL |  |  |
| placeid | int(11) | YES |  | NULL |  |  |
| receivetypeid | int(11) | YES |  | NULL |  |  |
| receive_date | date | YES |  | NULL |  |  |
| receive_time | time | YES |  | NULL |  |  |
| worker | varchar(20) | YES |  | NULL |  |  |
| completedate | date | YES |  | NULL |  |  |
| completetime | time | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | receiveid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
