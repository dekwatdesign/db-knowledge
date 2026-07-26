# `papregist`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tr_no | varchar(50) | NO | PRI |  |  |  |
| receive_date | date | YES |  | NULL |  |  |
| report_date | date | YES |  | NULL |  |  |
| screener_name | varchar(150) | YES |  | NULL |  |  |
| result_number | int(11) | YES |  | NULL |  |  |
| result_text | varchar(250) | YES |  | NULL |  |  |
| cid | varchar(13) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cid | cid | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | tr_no | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
