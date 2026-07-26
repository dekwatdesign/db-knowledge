# `asset_care_detail_etc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| CARE_ID | varchar(10) | YES |  |  |  |  |
| CARE_NAME | varchar(100) | YES |  |  |  |  |
| COMMENT | varchar(100) | YES |  |  |  |  |
| CARE_RESULT | varchar(100) | YES |  |  |  |  |
| CARE_ANS_DETAIL_ID | varchar(10) | YES |  |  |  |  |
| CARE_MILE | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
