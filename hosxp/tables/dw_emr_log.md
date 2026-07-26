# `dw_emr_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| log_datetime | datetime | YES |  | NULL |  |  |
| hospcode | varchar(9) | YES | MUL | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| cid | char(13) | YES |  | NULL |  |  |
| computer | varchar(25) | YES |  | NULL |  |  |
| request_second | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
