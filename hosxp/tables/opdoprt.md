# `opdoprt`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_oper_id | int(11) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| opd_oper_code | int(11) | YES |  | NULL |  |  |
| doctor | varchar(6) | YES |  | NULL |  |  |
| opdate | date | YES |  | NULL |  |  |
| optime | time | YES |  | NULL |  |  |
| enddate | date | YES |  | NULL |  |  |
| endtime | time | YES |  | NULL |  |  |
| icd9 | varchar(6) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
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
