# `factordm`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| relativedm | char(1) | YES |  | NULL |  |  |
| lifestyle | char(1) | YES |  | NULL |  |  |
| gestationdm | char(1) | YES |  | NULL |  |  |
| riskdmnew | char(1) | YES |  | NULL |  |  |
| firstdate | date | YES |  | NULL |  |  |
| lastdate | date | YES |  | NULL |  |  |
| riskdmlast | char(1) | YES |  | NULL |  |  |
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
