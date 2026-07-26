# `pt_consult`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | NO | PRI |  |  |  |
| consult_date | date | NO | PRI | 0000-00-00 |  |  |
| consult_text | text | YES |  | NULL |  |  |
| staff | varchar(25) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| consult_date | consult_date | no | 1 |
| hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | hn | yes | 1 |
| PRIMARY | consult_date | yes | 2 |
| staff | staff | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
