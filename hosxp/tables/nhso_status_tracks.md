# `nhso_status_tracks`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nhso_status_tracks_id | int(11) | NO | PRI | 0 |  |  |
| nhso_id | int(11) | YES |  | NULL |  |  |
| uid | varchar(50) | YES |  | NULL |  |  |
| seq | varchar(50) | YES |  | NULL |  |  |
| hcode | varchar(9) | YES |  | NULL |  |  |
| record_status | varchar(50) | YES |  | NULL |  |  |
| an | varchar(13) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| message | text | YES |  | NULL |  |  |
| status_code | varchar(50) | YES |  | NULL |  |  |
| status_desc | text | YES |  | NULL |  |  |
| result_json | longtext | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | nhso_status_tracks_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
