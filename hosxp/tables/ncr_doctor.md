# `ncr_doctor`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doc_code | varchar(15) | YES | MUL | NULL |  |  |
| doc_name | varchar(50) | YES | MUL | NULL |  |  |
| doc_remark | varchar(15) | YES |  | NULL |  |  |
| doc_period | varchar(15) | YES |  | NULL |  |  |
| doc_status | varchar(15) | YES |  | NULL |  |  |
| doc_category | varchar(15) | YES |  | NULL |  |  |
| doc_dept | varchar(15) | YES |  | NULL |  |  |
| doc_remark1 | varchar(15) | YES |  | NULL |  |  |
| doc_standby | varchar(15) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| doc_code | doc_code | no | 1 |
| doc_name | doc_name | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
