# `refer_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| refer_guid | varchar(38) | NO | PRI |  |  |  |
| refer_from_hospcode | varchar(9) | YES |  | NULL |  |  |
| refer_to_hospcode | varchar(9) | YES |  | NULL |  |  |
| person_cid | char(13) | YES |  | NULL |  |  |
| refer_date | date | YES |  | NULL |  |  |
| refer_time | time | YES |  | NULL |  |  |
| doctor_guid | varchar(38) | YES |  | NULL |  |  |
| refer_complete | char(1) | YES |  | NULL |  |  |
| hn_guid | varchar(38) | YES |  | NULL |  |  |
| vn_guid | varchar(38) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | refer_guid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
