# `common_illness_export`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| common_illness_export_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| nhso_status | char(1) | YES |  | NULL |  |  |
| nhso_code | varchar(50) | YES |  | NULL |  |  |
| nhso_message | text | YES |  | NULL |  |  |
| common_illness_export_req_date | datetime | YES |  | NULL |  |  |
| claim_staff | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | common_illness_export_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
