# `meetingroom_stylerooms`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | bigint unsigned | NO | PRI | NULL | auto_increment |  |
| STYLEROOM_NAME | varchar(255) | NO |  | NULL |  |  |
| STYLEROOM_IMAGE | blob | NO |  | NULL |  |  |
| STYLEROOM_DETAIL | varchar(255) | NO |  | NULL |  |  |
| STYLEROOM_STATUS | enum('true','false') | NO |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
