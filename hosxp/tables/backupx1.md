# `backupx1`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | YES |  | NULL |  |  |
| changwat | char(2) | YES |  | NULL |  |  |
| amphur | char(2) | YES |  | NULL |  |  |
| dob | date | YES |  | NULL |  |  |
| sex | char(1) | YES |  | NULL |  |  |
| marriage | char(1) | YES |  | NULL |  |  |
| occupa | char(3) | YES |  | NULL |  |  |
| nation | char(2) | YES |  | NULL |  |  |
| person_id | varchar(13) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
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
