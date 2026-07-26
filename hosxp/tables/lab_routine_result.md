# `lab_routine_result`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | YES | MUL | NULL |  |  |
| lab_date | date | YES |  | NULL |  |  |
| lab_time | time | YES |  | NULL |  |  |
| lab_items_code | int(11) | YES | MUL | NULL |  |  |
| lab_result | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_lab_items_code | lab_items_code | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
