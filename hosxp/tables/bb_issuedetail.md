# `bb_issuedetail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| issuedetailid | bigint(20) | NO | PRI | 0 |  |  |
| bloodid | int(11) | YES |  | NULL |  |  |
| issueid | int(11) | YES |  | NULL |  |  |
| note | varchar(50) | YES |  | NULL |  |  |
| quantity | int(11) | YES |  | NULL |  |  |
| cutstock | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | issuedetailid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
