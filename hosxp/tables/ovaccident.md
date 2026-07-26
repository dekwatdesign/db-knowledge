# `ovaccident`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| flag | varchar(150) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| icd10 | varchar(7) | NO | PRI |  |  |  |
| odate | datetime | YES | MUL | NULL |  |  |
| onote | text | YES |  | NULL |  |  |
| otime | datetime | YES | MUL | NULL |  |  |
| vn | varchar(13) | NO | PRI |  |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| flag | flag | no | 1 |
| hn | hn | no | 1 |
| icd10 | icd10 | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| odate | odate | no | 1 |
| otime | otime | no | 1 |
| PRIMARY | icd10 | yes | 1 |
| PRIMARY | vn | yes | 2 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
