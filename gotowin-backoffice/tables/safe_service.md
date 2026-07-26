# `safe_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| SAFE_ID | int | NO | PRI | NULL | auto_increment |  |
| SAFE_ITEM | varchar(255) | YES |  |  |  |  |
| SAFE_DATE | date | YES |  | NULL |  |  |
| SAFE_TYPE_ID | int | YES |  | NULL |  |  |
| SAFE_TIME | time | YES |  | NULL |  |  |
| SAFE_DAMAGE | float | YES |  | NULL |  |  |
| SAFE_EVENT_ID | varchar(255) | YES |  | NULL |  |  |
| SAFE_COMMENT | text | YES |  | NULL |  |  |
| SAFE_LOCATION_ID | varchar(255) | YES |  | NULL |  |  |
| SAFE_MODIFY | varchar(255) | YES |  | NULL |  |  |
| RECORD_HR_ID | varchar(11) | YES |  |  |  |  |
| RECORD_HR_NAME | varchar(100) | YES |  |  |  |  |
| RECORD_HR_TEL | varchar(50) | YES |  | NULL |  |  |
| RECORD_DATE | date | YES |  | NULL |  |  |
| UPDATED_AT | datetime | YES |  | NULL |  |  |
| CREATED_AT | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | SAFE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
