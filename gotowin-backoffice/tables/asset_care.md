# `asset_care`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| ARTICLE_ID | varchar(10) | YES |  |  |  |  |
| CARE_DATE | date | YES |  | NULL |  |  |
| CARE_HR_ID | varchar(10) | YES |  |  |  |  |
| CARE_HR_NAME | varchar(100) | YES |  |  |  |  |
| CARE_LEADER_HR_ID | varchar(10) | YES |  |  |  |  |
| CARE_LEADER_HR_NAME | varchar(100) | YES |  |  |  |  |
| CARE_COMMENT | varchar(250) | YES |  |  |  |  |
| DATE_TIME_SAVE | datetime | YES |  | NULL |  |  |
| CARE_ANS_ID | varchar(10) | YES |  |  |  |  |
| SUP_FSN | varchar(20) | YES |  |  |  |  |
| YEAR_ID | varchar(4) | YES |  |  |  |  |
| ARTICLE_NUM | varchar(20) | YES |  |  |  |  |
| CODE_REF | varchar(20) | YES |  |  |  |  |
| ARTICLE_NAME | varchar(100) | YES |  |  |  |  |
| ARTICLE_PROP | varchar(100) | YES |  |  |  |  |
| DEP_NAME | varchar(100) | YES |  |  |  |  |
| LOCATION_NAME | varchar(100) | YES |  |  |  |  |
| LOCATION_LEVEL_NAME | varchar(100) | YES |  |  |  |  |
| LEVEL_ROOM_NAME | varchar(100) | YES |  |  |  |  |
| HR_FULLNAME | varchar(50) | YES |  |  |  |  |
| IMG | mediumblob | YES |  | NULL |  |  |
| CARE_TIME_BEGIN | time | YES |  | NULL |  |  |
| CARE_TIME_END | time | YES |  | NULL |  |  |
| CARE_CHECK_TYPE | int | YES |  | NULL |  |  |
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
